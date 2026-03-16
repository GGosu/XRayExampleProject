// © 2026 Yaroslav Temper. All rights reserved.
// =============================================================================
// bp.js — Blueprint detail view: issue actions, graph layout, renderBP
// =============================================================================

function toggleIssue(idx) {
    const body  = document.getElementById('issue-body-' + idx);
    const chev  = document.getElementById('issue-chev-' + idx);
    if (!body) return;
    const open = body.style.display !== 'none';
    body.style.display = open ? 'none' : 'block';
    if (chev) chev.textContent = open ? '▸' : '▾';
}

function muteIssue(e, idx) {
    e.stopPropagation();
    const issue = currentBPIssues[idx];
    if (!issue) return;
    const muted = getMuted();
    const k = mutedKey(currentBPName, issue.type);
    if (!muted.includes(k)) muted.push(k);
    localStorage.setItem('muted_issues', JSON.stringify(muted));
    renderBP(currentBPName, currentBPData);
    renderList();
    refreshDashboardIssues();
}

function copyIssueForAI(e, idx) {
    e.stopPropagation();
    const issue = currentBPIssues[idx];
    if (!issue) return;

    const graphMatch = issue.desc.match(/'([^']+)'/);
    const graphName = graphMatch ? graphMatch[1] : null;

    let rawMermaid = null;
    if (graphName) {
        const el = document.getElementById('raw_m_' + sanitize(graphName));
        if (el) rawMermaid = el.textContent.trim();
    }
    if (!rawMermaid && currentBPData) {
        for (const g of (currentBPData.graphs || [])) {
            const el = document.getElementById('raw_m_' + sanitize(g.name));
            if (el) { rawMermaid = el.textContent.trim(); break; }
        }
    }

    const graphSection = rawMermaid
        ? `\nGraph '${graphName || 'EventGraph'}' (Mermaid flow):\n\`\`\`mermaid\n${rawMermaid}\n\`\`\``
        : '';

    let text;
    if (issue.type === 'Large Graph') {
        text =
`Blueprint: ${currentBPName}
Problem: The graph '${graphName || 'EventGraph'}' is too large to read and maintain.
Detail: ${issue.desc}
${graphSection}

Task: Analyse this graph and suggest which groups of nodes could be extracted into separate Blueprint functions or macros. For each suggestion, name the extracted function, describe what nodes it should contain, and explain why it is a self-contained unit. Focus on logical sub-operations (e.g. initialisation, a repeated pattern, a side-effect sequence).`;
    } else if (issue.type === 'Unhandled Cast') {
        text =
`Blueprint: ${currentBPName}
Problem: A dynamic cast in '${graphName || 'EventGraph'}' has no CastFailed pin connected.
Detail: ${issue.desc}
${graphSection}

Task: Identify the cast node in the graph above. Suggest how to handle the CastFailed case — either with a fallback value, a guard IsValid check before the cast, or a log/error message — so that a failed cast does not silently break execution. Show the corrected logic flow.`;
    } else {
        text =
`Blueprint: ${currentBPName}
Issue [${issue.level.toUpperCase()}] ${issue.type}: ${issue.desc}
${graphSection}

Please suggest a fix.`;
    }

    navigator.clipboard.writeText(text).catch(() => {});
    const btn = e.currentTarget;
    const orig = btn.textContent;
    btn.textContent = 'DONE!';
    setTimeout(() => { btn.textContent = orig; }, 1500);
}

let _issueFocusFromDashboard = false;

function buildAIPromptText(issue, graphName, mermaidDef) {
    const graphSection = mermaidDef
        ? `\nGraph '${graphName || 'EventGraph'}' (Mermaid flow):\n\`\`\`mermaid\n${mermaidDef}\n\`\`\``
        : '';

    if (issue.type === 'Large Graph') {
        return `Blueprint: ${currentBPName}
Problem: The graph '${graphName || 'EventGraph'}' is too large to read and maintain.
Detail: ${issue.desc}
${graphSection}

Task: Analyse this graph and suggest which groups of nodes could be extracted into separate Blueprint functions or macros. For each suggestion, name the extracted function, describe what nodes it should contain, and explain why it is a self-contained unit. Focus on logical sub-operations (e.g. initialisation, a repeated pattern, a side-effect sequence).`;
    }

    if (issue.type === 'Unhandled Cast') {
        return `Blueprint: ${currentBPName}
Problem: A dynamic cast in '${graphName || 'EventGraph'}' has no CastFailed pin connected.
Detail: ${issue.desc}
${graphSection}

Task: Identify the cast node in the graph above. Suggest how to handle the CastFailed case — either with a fallback value, a guard IsValid check before the cast, or a log/error message — so that a failed cast does not silently break execution. Show the corrected logic flow.`;
    }

    return '';
}

function copyFocusPrompt(btn) {
    const text = document.getElementById('focus-ai-prompt');
    if (!text) return;
    navigator.clipboard.writeText(text.value).catch(() => {});
    const orig = btn.textContent;
    btn.textContent = 'DONE!';
    setTimeout(() => { btn.textContent = orig; }, 1500);
}

function openDashboardIssue(rowIdx) {
    const row = (window.__DASH_ROWS__ || [])[rowIdx];
    if (!row) return;

    if (row.ruleLabel === 'Asset Naming' && !MANIFEST.find(e => e.name === row.bp)) {
        showAssetNamingInfo(row);
        return;
    }

    selectBP(row.bp, row.path, null).then(() => {
        const idx = currentBPIssues.findIndex(i => i.type === row.type && i.desc === row.desc);
        if (idx !== -1) showIssueFocus({ stopPropagation: () => {} }, idx, true);
    });
}

function showAssetNamingInfo(row) {
    _issueFocusFromDashboard = true;
    const assetClass = row.assetClass || row.type;
    const html = `
        <div style="background:var(--bg-1);border-bottom:1px solid var(--border-light);padding:12px 20px;
                display:flex;align-items:center;justify-content:space-between;flex-shrink:0;">
            <button onclick="closeIssueFocus()" class="btn btn-ghost">← Back</button>
            <span style="font-size:0.7rem;font-weight:800;text-transform:uppercase;letter-spacing:1.5px;color:#64748b;">
                ASSET NAMING — <span style="color:#e2e8f0;">${esc(row.bp)}</span>
            </span>
            <button onclick="closeIssueFocus()" class="btn btn-ghost">✕</button>
        </div>
        <div style="padding:40px 48px;flex:1;overflow-y:auto;">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px;">
                <span class="pill pill--warning">WARNING</span>
                <strong style="font-size:1.15rem;font-family:var(--font-mono);">${esc(row.bp)}</strong>
            </div>
            <div style="background:var(--bg-1);border:1px solid var(--border);border-radius:10px;
                        padding:24px 28px;max-width:720px;">
                <div style="display:grid;grid-template-columns:130px 1fr;row-gap:14px;column-gap:16px;
                            font-size:0.83rem;align-items:start;">
                    <span style="color:var(--text-dim);font-weight:600;padding-top:2px;">Asset Name</span>
                    <span style="font-family:var(--font-mono);color:var(--text);word-break:break-all;">${esc(row.bp)}</span>

                    <span style="color:var(--text-dim);font-weight:600;padding-top:2px;">Asset Path</span>
                    <span style="font-family:var(--font-mono);color:var(--text-secondary);word-break:break-all;">${esc(row.path)}</span>

                    <span style="color:var(--text-dim);font-weight:600;padding-top:2px;">Asset Type</span>
                    <span style="font-family:var(--font-mono);color:var(--text);">${esc(assetClass)}</span>

                    <span style="color:var(--text-dim);font-weight:600;padding-top:2px;">Issue</span>
                    <span style="color:#fbbf24;">${esc(row.desc)}</span>
                </div>
            </div>
        </div>`;

    let ov = document.getElementById('issue-focus-overlay');
    if (!ov) {
        ov = document.createElement('div');
        ov.id = 'issue-focus-overlay';
        ov.style.cssText = 'position:fixed;inset:0;z-index:9999;background:#0a0a14;display:flex;flex-direction:column;overflow:hidden;';
        document.body.appendChild(ov);
    }
    ov.innerHTML = html;
    ov.style.display = 'flex';
}

function closeIssueFocus() {
    const ov = document.getElementById('issue-focus-overlay');
    if (ov) ov.style.display = 'none';
    document.getElementById('node-detail-panel')?.remove();
    if (_issueFocusFromDashboard) {
        goHome();
    } else if (currentBPName) {
        history.replaceState(null, '', '#' + currentBPName);
    }
}

function showIssueFocus(e, idx, fromDashboard = false) {
    e.stopPropagation();
    const issue = currentBPIssues[idx];
    if (!issue) return;
    _issueFocusFromDashboard = fromDashboard;
    history.replaceState(null, '', '#' + currentBPName + ':issue:' + idx);

    const graphMatch = issue.desc.match(/'([^']+)'/);
    const graphName = graphMatch ? graphMatch[1] : null;

    let rawMermaid = null;
    let focusGraph = null;
    if (graphName && currentBPData) {
        focusGraph = (currentBPData.data.graphs || []).find(g => g.name === graphName) || null;
    }
    if (graphName) {
        const el = document.getElementById('raw_m_' + sanitize(graphName));
        if (el) rawMermaid = el.textContent.trim();
    }
    if (!rawMermaid && currentBPData) {
        for (const g of (currentBPData.data.graphs || [])) {
            const el = document.getElementById('raw_m_' + sanitize(g.name));
            if (el) { rawMermaid = el.textContent.trim(); focusGraph = g; break; }
        }
    }
    const focusGraphName = focusGraph ? focusGraph.name : (graphName || 'Graph');

    const aiPrompt = buildAIPromptText(issue, graphName, rawMermaid);

    const hint = (typeof QUICK_FIXES !== 'undefined' && QUICK_FIXES[issue.type]) || null;
    const levelColor = issue.level === 'error' ? 'var(--color-error)' : 'var(--color-warning)';
    const affectedHtml = renderAffectedNodes(issue);

    const quickFixHtml = hint ? `
        <div style="background:var(--bg-1);border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:6px;padding:10px 14px;margin-bottom:16px;">
            <div style="font-size:0.65rem;color:var(--accent);font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Quick Fix</div>
            <div style="font-size:0.75rem;color:var(--text-secondary);">${esc(hint)}</div>
        </div>` : '';

    const mermaidContent = rawMermaid || 'graph LR\n  A["No graph data"]';

    const html = `
        <div style="background:var(--bg-1);border-bottom:1px solid var(--border-light);padding:12px 20px;
                display:flex;align-items:center;justify-content:space-between;flex-shrink:0;">
            <button onclick="closeIssueFocus()" class="btn btn-ghost">← Back</button>
            <span style="font-size:0.7rem;font-weight:800;text-transform:uppercase;letter-spacing:1.5px;color:#64748b;">
                ISSUE FOCUS —
                <span onclick="closeIssueFocus();selectBP('${currentBPName.replace(/'/g,"\\'")}',MANIFEST.find(e=>e.name==='${currentBPName.replace(/'/g,"\\'")}')?.path,null)"
                    style="color:#e2e8f0;cursor:pointer;text-decoration:underline;text-underline-offset:3px;text-decoration-color:rgba(255,255,255,0.3);"
                    onmouseover="this.style.textDecorationColor='#fff';this.style.color='#fff'"
                    onmouseout="this.style.textDecorationColor='rgba(255,255,255,0.3)';this.style.color='#e2e8f0'"
                    >${esc(currentBPName)}</span></span>
            <div style="display:flex;gap:8px;align-items:center;">
                <button id="focus-copy-link-btn" onclick="navigator.clipboard.writeText(window.location.href).then(()=>{this.textContent='COPIED!';setTimeout(()=>{this.textContent='🔗 Copy Link'},1500)})"
                    class="btn btn-ghost"
                    onmouseover="this.style.borderColor='var(--accent-purple)';this.style.color='#a78bfa'"
                    onmouseout="this.style.borderColor='';this.style.color=''">🔗 Copy Link</button>
            <button onclick="closeIssueFocus()" class="btn btn-ghost">✕</button>
            </div>
        </div>
        <div style="padding:14px 20px;border-bottom:1px solid var(--border-light);flex-shrink:0;">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
                <span class="pill ${issue.level === 'error' ? 'pill--critical' : 'pill--warning'}">
                    ${issue.level.toUpperCase()}</span>
                <strong style="font-size:0.95rem;">${esc(issue.type)}</strong>
                ${graphName ? `<span style="font-size:0.72rem;color:#64748b;">in '${esc(graphName)}'</span>` : ''}
            </div>
            <p style="color:var(--text-dim);margin:0;font-size:0.8rem;">${esc(issue.desc)}</p>
        </div>
        <div style="display:grid;grid-template-columns:1fr 380px;flex:1;overflow:hidden;min-height:0;">
            <div style="overflow:auto;padding:var(--sp-5);background:var(--bg-0);">
                ${renderGraphContainer('FocusOverlay', mermaidContent, focusGraphName)}
            </div>
            <div style="overflow-y:auto;padding:20px;border-left:1px solid var(--border-light);background:var(--bg-1);">
                ${affectedHtml}
                ${quickFixHtml}
                ${aiPrompt ? `<div>
                    <div style="font-size:0.65rem;color:#8b5cf6;font-weight:700;text-transform:uppercase;
                        letter-spacing:1px;margin-bottom:6px;">AI PROMPT</div>
                    <textarea id="focus-ai-prompt" readonly
                        style="width:100%;height:220px;background:var(--bg-0);border:1px solid var(--border);
                        color:var(--text-secondary);font-size:0.72rem;font-family:var(--font-mono);border-radius:6px;
                        padding:10px;resize:vertical;box-sizing:border-box;">${aiPrompt.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</textarea>
                    <button onclick="copyFocusPrompt(this)"
                        style="margin-top:8px;padding:7px 14px;background:#8b5cf6;border:none;color:#fff;
                        border-radius:6px;cursor:pointer;font-size:0.72rem;font-weight:700;
                        text-transform:uppercase;letter-spacing:0.5px;width:100%;">
                        Copy AI Prompt</button>
                </div>` : ''}
            </div>
        </div>`;

    let ov = document.getElementById('issue-focus-overlay');
    if (!ov) {
        ov = document.createElement('div');
        ov.id = 'issue-focus-overlay';
        ov.style.cssText = 'position:fixed;inset:0;z-index:9999;background:#0a0a14;display:flex;flex-direction:column;overflow:hidden;';
        document.body.appendChild(ov);
    }
    ov.innerHTML = html;
    ov.style.display = 'flex';

    showMermaid('#issue-focus-overlay .mermaid', () => {
        if (focusGraph) attachNodeClickHandlers('FocusOverlay', focusGraph);
    }, 50);

    document.addEventListener('keydown', function escHandler(ev) {
        if (ev.key === 'Escape') { closeIssueFocus(); document.removeEventListener('keydown', escHandler); }
    }, { once: true });
}

function toggleGraphLayout(graphName) {
    const cur = graphLayouts[graphName] || 'LR';
    graphLayouts[graphName] = cur === 'LR' ? 'TD' : 'LR';
    const btn = document.getElementById('layout-btn-' + sanitize(graphName));
    if (btn) btn.textContent = graphLayouts[graphName];
    rerenderGraph(graphName);
}

function rerenderGraph(graphName) {
    const key = sanitize(graphName);
    const raw = document.getElementById('raw_m_' + key);
    const div = document.getElementById('graph_' + key);
    if (!raw || !div) return;
    const layout = graphLayouts[graphName] || 'LR';
    const newM = raw.textContent.trim().replace(/^graph\s+\w+/i, 'graph ' + layout);
    div.innerHTML = newM;
    div.removeAttribute('data-processed');
    div.style.visibility = 'hidden';
    mermaid.run({ nodes: [div], suppressErrors: true }).then(() => {
        div.style.visibility = '';
        if (currentBPData) {
            const g = (currentBPData.data.graphs || []).find(g => g.name === graphName);
            if (g) attachNodeClickHandlers(graphName, g);
        }
    }).catch(e => console.error('Mermaid rerenderGraph failed', e));
}

function expandDeadCodeIssues(issues) {
    const result = [];
    issues.forEach(i => {
        if (i.type === 'Dead Code') {
            const parts = i.desc.split(/, (?=')/);
            if (parts.length > 1) {
                parts.forEach(part => result.push({ ...i, desc: part.trim() }));
                return;
            }
        }
        result.push(i);
    });
    return result;
}

function buildDiagnosticSummary(errCount, warnCount, infoCount) {
    if (!errCount && !warnCount && !infoCount) return '';
    const parts = [];
    if (errCount)  parts.push(`<span style="color:var(--color-error);">${errCount} error${errCount > 1 ? 's' : ''}</span>`);
    if (errCount && (warnCount || infoCount)) parts.push(`<span style="color:var(--text-dim);">—</span>`);
    if (warnCount) parts.push(`<span style="color:var(--color-warning);">${warnCount} warning${warnCount > 1 ? 's' : ''}</span>`);
    if (warnCount && infoCount) parts.push(`<span style="color:var(--text-dim);">—</span>`);
    if (infoCount) parts.push(`<span style="color:var(--color-info);">${infoCount} info${infoCount > 1 ? 's' : ''}</span>`);
    return `<span style="font-size:0.75rem;font-weight:600;text-transform:none;letter-spacing:0;
        margin-left:10px;display:inline-flex;align-items:center;gap:5px;">${parts.join('')}</span>`;
}

function mermaidType(t) {
    return (t || 'unknown')
        .replace(/::/g, '_')           // TEnumAsByte::Type → TEnumAsByte_Type
        .replace(/</g, '~')            // List<T>          → List~T~
        .replace(/>/g, '~')
        .replace(/[^A-Za-z0-9_~]/g, '_'); // anything else   → _
}

function mermaidIdent(s) {
    return (s || '').replace(/\s+/g, '_').replace(/[^A-Za-z0-9_]/g, '_');
}

function getClassDiagramForActor(name) {
    const bp = ASSET_CACHE[name];
    if (!bp) return '';
    const data = bp.data;
    const safeClass = mermaidIdent(name);

    const usedVars = new Set((data.variableUsages || []).map(u => u.variableName));

    let uml = "classDiagram\n";
    uml += `  %% ASSET: ${name}\n`;
    uml += `  %% PARENT: ${data.parentClass || 'none'}${data.parentIsNative ? ' [NATIVE]' : ''}\n`;

    // defaults as comments so AI can read them
    (data.variables || []).forEach(v => {
        const unused = !usedVars.has(v.name) ? ' [UNUSED]' : '';
        uml += `  %% ${v.public ? '+' : '-'} ${v.name}: ${v.type} = ${v.default}${unused}\n`;
    });

    uml += `  class ${safeClass} {\n`;
    (data.variables || []).forEach(v => {
        const vis = v.public ? '+' : '-';
        const unused = !usedVars.has(v.name) ? '$' : ''; // $ = static classifier, visually distinct
        uml += `    ${vis}${mermaidType(v.type)} ${mermaidIdent(v.name)}${unused}\n`;
    });
    (data.functions || []).forEach(f => {
        const params = (f.parameters || []).map(p => {
            const col = p.indexOf(':');
            if (col === -1) return mermaidIdent(p);
            return mermaidIdent(p.slice(0, col)) + ' ' + mermaidType(p.slice(col + 1).trim());
        }).join(', ');
        const ret = f.returnType && f.returnType !== 'void' ? ' ' + mermaidType(f.returnType) : '';
        uml += `    +${mermaidIdent(f.name)}(${params})${ret}\n`;
    });
    uml += "  }\n";
    if (data.parentClass) {
        uml += `  ${mermaidIdent(data.parentClass)} <|-- ${safeClass}\n`;
    }
    return uml;
}

function getFullContextForMermaidLive(name) {
    const bp = ASSET_CACHE[name];
    if (!bp) return '';
    const data = bp.data;
    let graph = "graph LR\n";
    graph += `  %% PROJECT: ${PROJECT_NAME}\n`;
    graph += `  %% ASSET: ${name}\n`;
    graph += `  %% PATH: ${data.path}\n`;
    graph += `  %% PARENT: ${data.parentClass} ${data.parentIsNative?'[NATIVE]':''}\n`;
    (data.variables || []).forEach(v => graph += `  %% VAR: ${v.name} (${v.type}) = ${v.default}\n`);
    (data.functions || []).forEach(f => graph += `  %% FUNC: ${f.name}(${(f.parameters||[]).join(', ')}) -> ${f.returnType}\n`);
    (bp.issues || []).forEach(i => graph += `  %% ISSUE: [${i.level.toUpperCase()}] ${i.type}: ${i.desc}\n`);
    graph += "\n";
    (data.graphs || []).forEach(g => {
        const raw = document.getElementById('raw_m_' + sanitize(g.name));
        if (!raw) return;
        let clean = raw.textContent.trim().replace(/^graph\s+\w+/i, "").trim();
        graph += `  subgraph "${g.name.replace(/"/g, '#quot;')}"\n    ${clean.split('\n').join('\n    ')}\n  end\n\n`;
    });
    return graph;
}

function renderBP(name, bp) {
    const data = bp.data;

    currentBPName = name;
    currentBPData = bp;
    currentIssueIdx = -1;

    const muted = getMuted();
    currentBPIssues = (bp.issues || []).filter(i => !muted.includes(mutedKey(name, i.type)));

    const varUsages = data.variableUsages || [];
    let vars = (data.variables || []).map((v, vi) => {
        const usages = varUsages.filter(u => u.variableName === v.name);
        const unusedHint = usages.length === 0
            ? `<span style="color:#64748b;font-size:0.65rem;margin-left:6px;">⚠ not used</span>` : '';
        const usageRows = usages.map(u =>
            `<div style="color:var(--text-dim);font-size:0.72rem;padding:2px 0 2px 8px;border-left:2px solid var(--border-light);">
                ↳ <span style="color:var(--accent)">${esc(u.graphName)}</span>
                <span style="color:#64748b;margin-left:4px;">${u.isRead ? 'read' : 'write'}</span>
            </div>`
        ).join('');
        const bodyId = `vuse-${vi}`;
        return `<div style="margin-bottom:2px;">
            <div onclick="document.getElementById('${bodyId}').style.display=document.getElementById('${bodyId}').style.display==='none'?'block':'none'"
                style="cursor:pointer;display:flex;align-items:center;gap:4px;padding:2px 0;">
                <span style="color:#4ade80;font-size:0.75rem;">${v.public?'+':'-'}</span>
                <span>${esc(v.name)}: <span style="color:var(--accent)">${esc(v.type)}</span>
                <span style="color:#444"> = ${esc(v.default)}</span>${unusedHint}</span>
            </div>
            <div id="${bodyId}" style="display:none;margin-left:12px;margin-bottom:4px;">${usageRows || '<div style="color:#64748b;font-size:0.7rem;padding-left:8px;">No usages recorded</div>'}</div>
        </div>`;
    }).join('') || '<i>none</i>';

    let fns = (data.functions || []).map(f => {
        const lvars = (f.localVariables || []).map(lv =>
            `<div style="margin-left:1.2rem;color:var(--text-dim);font-size:0.78rem">` +
            `<span style="color:#888">◦</span> ${esc(lv.name)}: <span style="color:var(--accent)">${esc(lv.type)}</span>` +
            (lv.default !== '' && lv.default !== undefined ? ` <span style="color:#444">= ${esc(lv.default)}</span>` : '') +
            `</div>`
        ).join('');
        return `<div><span style="color:#3b82f6">+</span> ${esc(f.name)}(<span style="color:var(--text-dim)">${(f.parameters||[]).join(', ')}</span>): ${esc(f.returnType)}${lvars}</div>`;
    }).join('') || '<i>none</i>';

    const ackedList = getAcked();
    const ackedCount = currentBPIssues.filter(i => ackedList.includes(ackedKey(name, i.type, i.desc))).length;
    const mutedForActor = muted.filter(k => k.startsWith(name + '::'));

    const expandedIssues = expandDeadCodeIssues(currentBPIssues);

    currentBPIssues = expandedIssues;

    const renderGroup = (label, colorVar, entries) => {
        if (!entries.length) return '';
        const cards = entries.map(({ i, idx }) => renderIssueCard(i, idx, name, ackedList, true)).join('');
        return `
            <details open style="margin-bottom:12px;">
                <summary style="cursor:pointer;list-style:none;display:flex;align-items:center;gap:8px;
                    padding:8px 0;font-size:0.72rem;font-weight:800;text-transform:uppercase;
                    letter-spacing:1px;color:${colorVar};user-select:none;">
                    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;
                        background:${colorVar};flex-shrink:0;"></span>
                    ${label} (${entries.length})
                </summary>
                <div style="margin-top:6px;">${cards}</div>
            </details>`;
    };

    const errors   = expandedIssues.map((i, idx) => ({ i, idx })).filter(({ i }) => i.level === 'error');
    const warnings = expandedIssues.map((i, idx) => ({ i, idx })).filter(({ i }) => i.level === 'warning');
    const infos    = expandedIssues.map((i, idx) => ({ i, idx })).filter(({ i }) => i.level === 'info');

    let issues = expandedIssues.length
        ? renderGroup('Errors',   'var(--color-error)',   errors)
        + renderGroup('Warnings', 'var(--color-warning)', warnings)
        + renderGroup('Info',     'var(--color-info)',    infos)
        : `<div style="color:var(--ok);font-size:0.75rem;font-weight:600;">System Stable.</div>`;

    let graphsHtml = (data.graphs || []).map(g => {
        if (g.nodeCount < 1) return '';
        try {
        let m = "graph LR\n";
        const entrySet = new Set(g.entryNodes || []);
        const extEntries = (g.entryNodes || []).filter(guid => {
            const n = (g.nodes || []).find(x => x.guid === guid);
            return n && n.type === 'K2Node_CustomEvent';
        });
        const extReachable = new Set();
        const bfsQ = [...extEntries];
        while (bfsQ.length) {
            const cur = bfsQ.shift();
            if (extReachable.has(cur)) continue;
            extReachable.add(cur);
            (g.executionEdges || []).forEach(e => {
                if (e.fromNodeGuid === cur && !extReachable.has(e.toNodeGuid))
                    bfsQ.push(e.toNodeGuid);
            });
        }
        const dead = (g.deadCodeNodes || []).filter(id => !extReachable.has(id));

        (g.nodes || []).forEach(n => {
            const nid = sanitize(n.guid.substring(0,8));
            const pins = (n.pins || []).filter(p => p.direction === 'Input' && p.type !== 'exec');
            const sem = n.semantic || {};
            const isVarNode = sem.category === 'variable'
                || (n.type && (n.type.includes('VariableGet') || n.type.includes('VariableSet')));

            let label = `<b>${escMermaid(n.title)}</b>`;
            if (sem.category === 'variable') {
                label = `<b>${sem.operation === 'set' ? 'Set ' : ''}${escMermaid(sem.variableName)}</b>`;
                if (sem.operation === 'set' && sem.literalValue) {
                    label += `<br/><span style='color:rgb(16,185,129)'>= ${escMermaid(sem.literalValue)}</span>`;
                }
            } else if (sem.category === 'literal') {
                label = `<span style='color:rgb(16,185,129)'>'${escMermaid(sem.literalValue)}'</span><br/><small>${escMermaid(sem.literalType)}</small>`;
            } else if (sem.category === 'math' || sem.category === 'function') {
                if (sem.functionName) label = `<b>${escMermaid(sem.functionName)}</b>`;
                if (sem.argumentValues && sem.argumentValues.length > 0) {
                    const args = sem.argumentValues.map(a => {
                        const parts = a.split(': ');
                        return parts.length > 1 ? `<span style='color:var(--text-dim)'>${escMermaid(parts[0])}:</span> ${escMermaid(parts[1])}` : escMermaid(a);
                    }).join('<br/>');
                    label += `<br/><small>${args}</small>`;
                }
            } else if (sem.category === 'branch' && sem.conditionExpression) {
                label += `<br/><i style='color:var(--warn)'>${escMermaid(sem.conditionExpression)}</i>`;
            } else if (pins.length > 0) {
                label += `<br/><small>${pins.map(p => p.default ? `${escMermaid(p.name)}=${escMermaid(p.default)}` : escMermaid(p.name)).join('<br/>')}</small>`;
            }

            m += isVarNode ? `  ${nid}(["${label}"])\n` : `  ${nid}["${label}"]\n`;
            let style = "fill:#111,stroke:#333,color:#fff";
            const cat = (n.semantic && n.semantic.category) || '';
            if (dead.includes(n.guid)) style = "fill:#2a1515,stroke:#ef4444,stroke-width:2px,stroke-dasharray:5,5";
            else if (n.isEngineEvent || entrySet.has(n.guid) || cat === 'event') style = "fill:#1e3a8a,stroke:#3b82f6,stroke-width:2px";
            else if (cat === 'branch' || cat === 'loop') style = "fill:#78350f,stroke:#f59e0b,stroke-width:2px";
            else if (isVarNode) style = "fill:#064e3b,stroke:#10b981,stroke-width:2px";
            else if (n.title === 'Delay' || (n.type && n.type.includes('Timeline'))) style = "fill:#4c1d95,stroke:#8b5cf6,stroke-width:2px";
            else if (n.title === 'Return Node' || (n.type && n.type.includes('FunctionResult'))) style = "fill:#4a2c41,stroke:#631b34,stroke-width:2px,color:#fff";
            m += `  style ${nid} ${style}\n`;
        });

        (g.executionEdges || []).forEach(e => {
            let lbl = '';
            if (e.edgeType && e.edgeType !== 'sequence') {
                lbl = `|${e.edgeType}|`;
            } else {
                // For nodes with multiple exec outputs (Cast Then/CastFailed, IsValid, etc.)
                // show the source pin name so the diagram makes clear which wire is which.
                const pin = (e.fromPin || '').toLowerCase();
                if (pin && pin !== 'then' && pin !== 'execute' && pin !== 'out') {
                    // Strip | characters — they would break the -->|label| Mermaid syntax.
                    const safePinLabel = (e.fromPin || '').replace(/\|/g, '/');
                    lbl = `|${safePinLabel}|`;
                }
            }
            m += `  ${sanitize(e.fromNodeGuid.substring(0,8))} -->${lbl} ${sanitize(e.toNodeGuid.substring(0,8))}\n`;
        });
        (g.dataEdges || []).forEach(e => {
            m += `  ${sanitize(e.fromNodeGuid.substring(0,8))} -.-> ${sanitize(e.toNodeGuid.substring(0,8))}\n`;
        });

        return renderGraphContainer(g.name, m);
        } catch(e) {
            console.warn('Mermaid graph build failed for', g.name, e);
            return renderGraphFallback(g.name, g.nodes || []);
        }
    }).join('');

    document.getElementById('content').innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:60px;">
            <div>
                <h1 style="font-size:3.5rem;font-weight:900;margin:0 0 10px 0;letter-spacing:-2.5px;">${name}</h1>
                <div style="color:var(--text-dim);font-family:'JetBrains Mono';font-size:0.75rem;">${data.path}</div>
                <div style="margin-top:20px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
                    <span style="color:var(--text-dim);font-size:0.65rem;font-weight:800;text-transform:uppercase;letter-spacing:1px;">Parent Class:</span>
                    ${data.parentIsNative
                        ? `<span style="color:var(--accent);font-weight:700;font-size:0.8rem;">${esc(data.parentClass)}</span>
                           <span style="background:rgba(59,130,246,0.1);color:var(--accent);padding:4px 10px;border-radius:6px;font-size:9px;font-weight:900;border:1px solid var(--accent-glow);">NATIVE</span>`
                        : (() => {
                            const parentInManifest = MANIFEST.find(e => e.name === data.parentClass);
                            return parentInManifest
                                ? `<span onclick="goToBP('${sanitizeBPId(data.parentClass)}')"
                                      style="color:var(--accent);font-weight:700;font-size:0.8rem;cursor:pointer;
                                      text-decoration:underline;text-underline-offset:3px;text-decoration-color:rgba(59,130,246,0.4);"
                                      onmouseover="this.style.textDecorationColor='var(--accent)'"
                                      onmouseout="this.style.textDecorationColor='rgba(59,130,246,0.4)'"
                                      >${esc(data.parentClass)}</span>`
                                : `<span style="color:var(--accent);font-weight:700;font-size:0.8rem;">${esc(data.parentClass)}</span>
                                   <span style="background:rgba(100,100,100,0.15);color:var(--text-dim);padding:4px 10px;border-radius:6px;font-size:9px;font-weight:900;border:1px solid rgba(100,100,100,0.3);">NOT SCANNED</span>`;
                          })()
                    }
                    ${scoreBadge((MANIFEST.find(e => e.name === name) || {}).average_score)}
                    ${renderBPSparkline(name)}
                </div>
                ${(() => {
                    const me = MANIFEST.find(e => e.name === name) || {};
                    const has = v => v !== undefined && v !== null;
                    if (!has(me.fanIn) && !has(me.maxDepth)) return '';
                    const cell = (label, val, color) =>
                        `<span style="display:inline-flex;flex-direction:column;align-items:center;padding:8px 16px;background:var(--bg-1);border:1px solid var(--border-light);border-radius:6px;">
                            <span style="font-size:1rem;font-weight:800;color:${color || 'var(--text)'};">${val}</span>
                            <span style="font-size:0.58rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#64748b;margin-top:2px;">${label}</span>
                        </span>`;
                    const fiColor = (me.fanIn || 0) > 5 ? 'var(--color-error)' : (me.fanIn || 0) >= 3 ? 'var(--color-warning)' : (me.fanIn || 0) >= 1 ? 'var(--accent)' : 'var(--text-dim)';
                    return `<div style="display:flex;gap:8px;margin-top:16px;flex-wrap:wrap;">
                        ${cell('Fan-In', me.fanIn ?? '–', fiColor)}
                        ${cell('Fan-Out', me.fanOut ?? '–', 'var(--text-dim)')}
                        ${cell('Max Depth', me.maxDepth ?? '–', (me.maxDepth || 0) > 10 ? 'var(--color-error)' : 'var(--text-dim)')}
                        ${cell('Paths', me.totalPaths ?? '–', 'var(--text-dim)')}
                    </div>`;
                })()}
            </div>
            <div style="display:flex;gap:8px;">
                <button title="Copy class diagram"
                    onclick="copyToClipboard(getClassDiagramForActor('${name}'), this)"
                    style="background:#7c3aed;border:none;padding:8px 12px;cursor:pointer;color:#fff;
                    border-radius:8px;box-shadow:0 4px 15px rgba(124,58,237,0.4);
                    transition:background 0.15s,transform 0.15s;display:flex;align-items:center;gap:6px;
                    font-size:0.7rem;font-weight:700;font-family:inherit;"
                    onmouseover="this.style.background='#6d28d9';this.style.transform='translateY(-2px)'"
                    onmouseout="this.style.background='#7c3aed';this.style.transform='none'">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    Class
                </button>
                <button title="Copy mermaid flow"
                    onclick="copyToClipboard(getFullContextForMermaidLive('${name}'), this)"
                    style="background:#3b82f6;border:none;padding:8px 12px;cursor:pointer;color:#fff;
                    border-radius:8px;box-shadow:0 4px 15px rgba(59,130,246,0.4);
                    transition:background 0.15s,transform 0.15s;display:flex;align-items:center;gap:6px;
                    font-size:0.7rem;font-weight:700;font-family:inherit;"
                    onmouseover="this.style.background='#2563eb';this.style.transform='translateY(-2px)'"
                    onmouseout="this.style.background='#3b82f6';this.style.transform='none'">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    Mermaid
                </button>
            </div>
        </div>
        <div class="grid">
            <div>
                <div class="card" style="padding:40px;">
                    <h3 style="margin-top:0;margin-bottom:40px;font-size:1rem;font-weight:800;text-transform:uppercase;letter-spacing:1px;color:var(--text-dim)">Execution Flow</h3>
                    ${graphsHtml || '<p style="color:var(--text-dim)">No graphs extracted.</p>'}
                </div>
            </div>
            <div>
                <div class="uml-box" style="margin-bottom:40px;">
                    <div class="uml-header">${name}</div>
                    <div class="uml-section">${vars}</div>
                    <div class="uml-section">${fns}</div>
                </div>
                <div style="margin-bottom:20px;">
                    <div style="display:flex;align-items:center;gap:8px;">
                        <span style="font-size:0.8rem;font-weight:800;color:var(--text-dim);text-transform:uppercase;letter-spacing:2px;">Diagnostics</span>
                        ${buildDiagnosticSummary(errors.length, warnings.length, infos.length)}
                    </div>
                    ${(mutedForActor.length || ackedCount) ? `<div style="display:flex;gap:10px;margin-top:6px;">
                        ${mutedForActor.length ? `<span style="font-size:0.65rem;color:#u;">
                            ${mutedForActor.length} muted
                            <span onclick="resetMutes(currentBPName)" style="cursor:pointer;color:#3b82f6;margin-left:3px;">reset</span>
                        </span>` : ''}
                        ${ackedCount ? `<span style="font-size:0.65rem;color:#64748b;">
                            ${ackedCount} acked
                            <span onclick="resetAcks()" style="cursor:pointer;color:#3b82f6;margin-left:3px;">reset</span>
                        </span>` : ''}
                    </div>` : ''}
                </div>
                ${issues}
            </div>
        </div>
    `;
    showMermaid('.mermaid', () => {
        (data.graphs || []).forEach(g => attachNodeClickHandlers(g.name, g));
    }, 50);
}
