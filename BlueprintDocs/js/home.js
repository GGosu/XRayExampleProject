// © 2026 Yaroslav Temper. All rights reserved.
// =============================================================================
// home.js — Dashboard home page
// =============================================================================

function copyAllIssuesForAI(btn) {
    const text = MANIFEST.flatMap(e =>
        (e.issueList || []).map(i => `[${e.name}] ${i.type}: ${i.desc}`)
    ).join('\n');
    navigator.clipboard.writeText(
        `Blueprint analysis report:\n\n${text}\n\nPlease suggest fixes.`
    ).catch(() => {});
    if (btn) {
        const orig = btn.textContent;
        btn.textContent = 'DONE!';
        setTimeout(() => { btn.textContent = orig; }, 1500);
    }
}

function renderProfileInfo() {
    const p = window.__PROFILE_INFO__;
    if (!p || !p.rules) return '';

    const RULE_TO_TYPE = {
        'Dead Code':       'Dead Code',
        'Heavy Tick':      'Performance',
        'Unhandled Cast':      'Unhandled Cast',
        'Memory Risk':         'Memory Risk',
        'Cyclomatic Complexity': 'Cyclomatic Complexity',
        'Large Graph':         'Large Graph',
        'Disabled Nodes':      'Disabled Nodes',
        'Unused Variable':     'Unused Variable',
        'Unused Function':     'Unused Function',
        'Write-only Variable': 'Write-only Variable',
        'Read-only Variable':  'Read-only Variable',
        'Asset Naming':        'Naming',
        'Function Naming':     'Naming',
        'Variable Naming':     'Naming',
        'Bool Naming':   'Bool Naming',
        'Event Naming':  'Event Naming',
        'Broken Node':   'Broken Node',
        'Loop on Tick':          'Loop on Tick',
        'Cast on Tick':          'Cast on Tick',
        'Set Timer on Tick':     'Set Timer on Tick',
        'Create Widget on Tick': 'Create Widget on Tick',
        'Print String on Tick':  'Print String on Tick',
        'Empty Tick':            'Empty Tick',
        'Dispatcher Not Bound':  'Dispatcher Not Bound',
        'Dispatcher never unbound': 'Dispatcher never unbound',
        'Unused Dispatcher':     'Unused Dispatcher',
        'Branch Literal':        'Branch Literal',
    };

    const RULE_TO_DESC_PREFIX = {
        'Asset Naming':    'Asset ',
        'Function Naming': 'Function ',
        'Variable Naming': 'Variable ',
    };

    const issueCounts = {};
    const namingLabelCounts = {};
    (window.__MANIFEST__ || []).forEach(e => {
        (e.issueList || []).forEach(i => {
            issueCounts[i.type] = (issueCounts[i.type] || 0) + 1;
            if (i.type === 'Naming') {
                Object.entries(RULE_TO_DESC_PREFIX).forEach(([lbl, pfx]) => {
                    if (i.desc && i.desc.startsWith(pfx))
                        namingLabelCounts[lbl] = (namingLabelCounts[lbl] || 0) + 1;
                });
            }
        });
    });
    namingLabelCounts['Asset Naming'] = (namingLabelCounts['Asset Naming'] || 0)
        + (window.__PROJECT_ASSET_NAMING__ || []).length;

    const chip = (r) => {
        if (!r.enabled) {
            return `<span style="display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:20px;`
                 + `background:rgba(100,116,139,0.08);border:1px solid rgba(100,116,139,0.15);font-size:0.72rem;`
                 + `font-family:'JetBrains Mono',monospace;color:#374151;">— ${esc(r.label)}</span>`;
        }
        const issueType = RULE_TO_TYPE[r.label];
        const descPrefix = RULE_TO_DESC_PREFIX[r.label] || '';
        const count = descPrefix
            ? (namingLabelCounts[r.label] || 0)
            : (issueType ? (issueCounts[issueType] || 0) : 0);
        const fired = count > 0;
        const isError = fired && r.severity === 'error';
        const isInfo  = fired && r.severity === 'info';
        const bg     = fired ? (isError ? 'rgba(239,68,68,0.12)'  : isInfo ? 'rgba(59,130,246,0.1)'  : 'rgba(245,158,11,0.1)')
                             : 'rgba(16,185,129,0.1)';
        const border = fired ? (isError ? 'rgba(239,68,68,0.35)'  : isInfo ? 'rgba(59,130,246,0.35)' : 'rgba(245,158,11,0.3)')
                             : 'rgba(16,185,129,0.28)';
        const color  = fired ? (isError ? 'var(--color-error)'    : isInfo ? 'var(--color-info)'     : 'var(--color-warning)')
                             : 'var(--color-success)';
        const icon   = fired ? (isError ? '✕' : isInfo ? 'ℹ' : '⚠') : '✓';

        let label = esc(r.label);
        if (r.params) {
            const paramStr = Object.entries(r.params).map(([k, v]) => `${k}: ${v}`).join(', ');
            label += `<span style="opacity:0.6;margin-left:4px;">(${esc(paramStr)})</span>`;
        }
        const badge = fired
            ? `<span style="margin-left:5px;padding:1px 5px;border-radius:10px;font-size:0.65rem;`
            + `font-weight:800;background:${border};color:${color};">${count}</span>`
            : '';

        const clickable = fired && issueType;
        const cursorStyle = clickable ? 'cursor:pointer;' : '';
        const chipKey = issueType + '|' + descPrefix;
        const clickAttr = clickable
            ? `data-rule-chip="${chipKey}" onclick="filterIssuesByRuleType('${issueType}','${descPrefix}','${r.label}')" title="Click to filter issues by this rule"`
            : '';
        return `<span ${clickAttr} style="display:inline-flex;align-items:center;gap:3px;padding:3px 10px;border-radius:20px;`
             + `background:${bg};border:1px solid ${border};font-size:0.72rem;${cursorStyle}`
             + `font-family:'JetBrains Mono',monospace;color:${color};">`
             + `${icon} ${label}${badge}</span>`;
    };

    const exclusionChips = (p.exclusions || []).length
        ? `<div style="margin-top:12px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;">`
          + `<span style="font-size:0.62rem;font-weight:700;letter-spacing:1px;color:var(--text-dim);text-transform:uppercase;">Excluded</span>`
          + (p.exclusions || []).map(e =>
              `<span style="padding:2px 9px;border-radius:4px;background:rgba(239,68,68,0.08);`
            + `border:1px solid rgba(239,68,68,0.2);font-size:0.7rem;`
            + `font-family:'JetBrains Mono',monospace;color:#fca5a5;">${esc(e)}</span>`
            ).join('')
          + `</div>`
        : '';

    const firedRules = p.rules.filter(r => {
        if (!r.enabled) return false;
        const t = RULE_TO_TYPE[r.label];
        return t && (issueCounts[t] || 0) > 0;
    });
    const profName = p.name || '';
    const profTitle = profName
        ? `RULE PROFILE <span style="color:var(--text);">— ${esc(profName)}</span>`
        : 'RULE PROFILE';
    const summary = firedRules.length > 0
        ? `<span style="font-size:0.7rem;font-weight:700;font-family:'JetBrains Mono',monospace;`
        + `color:var(--color-error);letter-spacing:0.5px;">${firedRules.length} rule${firedRules.length > 1 ? 's' : ''} triggered</span>`
        : `<span style="font-size:0.7rem;font-weight:700;font-family:'JetBrains Mono',monospace;color:var(--color-success);">all clear</span>`;

    return `<div class="card" style="margin-bottom:24px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
            <h3 style="margin:0;font-weight:800;text-transform:uppercase;font-size:0.9rem;letter-spacing:1px;color:var(--text-dim);">${profTitle}</h3>
            ${summary}
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:6px;">${p.rules.map(r => chip(r)).join('')}</div>
        ${exclusionChips}
    </div>`;
}

function renderQualityGate() {
    const g = window.__GATE_RESULT__;
    if (!g || !g.conditions || !g.conditions.length) return '';

    const passed = g.passed;
    const borderColor = passed ? 'rgba(16,185,129,0.4)' : 'rgba(239,68,68,0.4)';
    const bgColor     = passed ? 'rgba(16,185,129,0.06)' : 'rgba(239,68,68,0.06)';
    const accentColor = passed ? '#10b981' : '#ef4444';
    const statusLabel = passed ? 'PASSED' : 'FAILED';
    const statusIcon  = passed
        ? `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="2,8 6,12 14,4"/></svg>`
        : `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="3" x2="13" y2="13"/><line x1="13" y1="3" x2="3" y2="13"/></svg>`;

    const hdrCell = (t, opts='') =>
        `<div style="font-size:0.62rem;font-weight:800;letter-spacing:1.5px;color:var(--text-dim);text-transform:uppercase;padding:6px 16px 10px;${opts}">${t}</div>`;

    const condRows = g.conditions.map(c => {
        const ok = c.passed;
        const rowAccent = ok ? '#10b981' : '#ef4444';
        const rowIcon = ok
            ? `<svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="2,8 6,12 14,4"/></svg>`
            : `<svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="3" x2="13" y2="13"/><line x1="13" y1="3" x2="3" y2="13"/></svg>`;
        return `
            <div style="display:flex;align-items:center;gap:8px;padding:9px 16px;border-top:1px solid var(--border);font-size:0.78rem;font-family:'JetBrains Mono',monospace;color:${ok ? 'var(--text)' : '#fca5a5'};">${rowIcon}${esc(c.metric)}</div>
            <div style="padding:9px 16px;border-top:1px solid var(--border);border-left:1px solid var(--border);font-size:0.78rem;font-family:'JetBrains Mono',monospace;color:var(--text-dim);">${esc(c.operator)} ${c.threshold}</div>
            <div style="padding:9px 16px;border-top:1px solid var(--border);border-left:1px solid var(--border);font-size:0.85rem;font-weight:700;font-family:'JetBrains Mono',monospace;color:var(--text);">${c.actual}</div>
            <div style="padding:9px 16px;border-top:1px solid var(--border);border-left:1px solid var(--border);font-size:0.65rem;font-weight:800;letter-spacing:1px;color:${rowAccent};text-transform:uppercase;">${ok ? 'Pass' : 'Fail'}</div>`;
    }).join('');

    const gateName = g.name ? `<span style="color:var(--text);">— ${esc(g.name)}</span>` : '';

    return `<div class="card" style="margin-bottom:40px;border-color:${borderColor};background:${bgColor};">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
            <h3 style="margin:0;font-weight:800;text-transform:uppercase;font-size:0.9rem;letter-spacing:1px;color:var(--text-dim);">QUALITY GATE ${gateName}</h3>
            <div style="display:flex;align-items:center;gap:8px;padding:5px 12px;border-radius:6px;background:${bgColor};border:1px solid ${borderColor};">
                ${statusIcon}
                <span style="font-size:0.7rem;font-weight:800;letter-spacing:1.5px;color:${accentColor};text-transform:uppercase;">${statusLabel}</span>
            </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 140px 100px 80px;border:1px solid var(--border);border-radius:8px;overflow:hidden;">
            ${hdrCell('Condition','background:rgba(255,255,255,0.02);')}
            ${hdrCell('Threshold','background:rgba(255,255,255,0.02);border-left:1px solid var(--border);')}
            ${hdrCell('Actual','background:rgba(255,255,255,0.02);border-left:1px solid var(--border);')}
            ${hdrCell('Status','background:rgba(255,255,255,0.02);border-left:1px solid var(--border);')}
            ${condRows}
        </div>
    </div>`;
}

function filterIssuesByRuleType(type, descPrefix, label) {
    const prev = window.__PROFILE_ISSUE_FILTER__;
    const isSame = prev && prev.type === type && prev.descPrefix === (descPrefix || '');
    window.__PROFILE_ISSUE_FILTER__ = isSame ? null : { type, descPrefix: descPrefix || '', label: label || type };

    const activeKey = window.__PROFILE_ISSUE_FILTER__
        ? (window.__PROFILE_ISSUE_FILTER__.type + '|' + window.__PROFILE_ISSUE_FILTER__.descPrefix)
        : null;
    document.querySelectorAll('[data-rule-chip]').forEach(el => {
        const active = el.dataset.ruleChip === activeKey;
        el.style.outline = active ? '2px solid var(--accent)' : '';
        el.style.outlineOffset = active ? '2px' : '';
    });

    const el = document.getElementById('home-issues-list');
    if (el) el.innerHTML = renderAggregatedIssues();
}

function clearIssueFilter() {
    window.__PROFILE_ISSUE_FILTER__ = null;
    document.querySelectorAll('[data-rule-chip]').forEach(el => {
        el.style.outline = '';
        el.style.outlineOffset = '';
    });
    const el = document.getElementById('home-issues-list');
    if (el) el.innerHTML = renderAggregatedIssues();
}

function refreshDashboardIssues() {
    const el = document.getElementById('home-issues-list');
    if (el) el.innerHTML = renderAggregatedIssues();
}

function switchHomeTab(tab) {
    ['overview', 'depmap'].forEach(t => {
        document.getElementById('home-tab-' + t).style.display = t === tab ? '' : 'none';
        document.getElementById('home-tab-btn-' + t).classList.toggle('active', t === tab);
    });
    if (tab === 'depmap' && !window.__homeDepMapRendered__) {
        window.__homeDepMapRendered__ = true;
        showMermaid('#global-map', null, 100);
    }
}

function showHome() {
    window.__homeDepMapRendered__ = false;
    window.__PROFILE_ISSUE_FILTER__ = null;
    const errCount  = MANIFEST.reduce((s, e) => s + (e.errors   || 0), 0);
    const _profileRules = (window.__PROFILE_INFO__ || {}).rules || [];
    const _assetNamingEnabled = !_profileRules.length ||
        _profileRules.some(r => r.id === 'BP-NAMING-001' && r.enabled);
    const warnCount = MANIFEST.reduce((s, e) => s + (e.warnings || 0), 0)
                    + (_assetNamingEnabled ? (window.__PROJECT_ASSET_NAMING__ || []).length : 0);
    const infoCount = MANIFEST.reduce((s, e) => s + (e.infos    || 0), 0);
    const history   = window.__SCAN_HISTORY__ || [];
    const score     = history.length ? history[history.length - 1].average_score : computeProjectScore();

    let rawMap = window.__DEP_MAP__ || "graph LR\n  No_Refs[No dependency data available]\n";
    // Only emit click/style for nodes that actually exist in the dep map (Mermaid 10
    // throws a parse error if click/style references a node ID not in the graph).
    const nodeIdsInMap = new Set([...rawMap.matchAll(/\bn_\w+/g)].map(m => m[0]));
    const clickLines = MANIFEST
        .filter(e => nodeIdsInMap.has(sanitize(e.name)))
        .map(e => `  click ${sanitize(e.name)} goToBPFromMap`)
        .join('\n');
    const heatLines = MANIFEST.map(e => {
        if (!nodeIdsInMap.has(sanitize(e.name))) return '';
        const fi = e.fanIn || 0;
        if (fi >= 3 && fi <= 5) return `  style ${sanitize(e.name)} fill:#2a1f00,stroke:#eab308,stroke-width:2px`;
        if (fi > 5)             return `  style ${sanitize(e.name)} fill:#2a1515,stroke:#ef4444,stroke-width:2px`;
        if (fi >= 1)            return `  style ${sanitize(e.name)} fill:#0d1f2d,stroke:#3b82f6,stroke-width:1px`;
        return '';
    }).filter(Boolean).join('\n');
    const m = rawMap.trimEnd() + '\n' + (clickLines ? clickLines + '\n' : '') + (heatLines ? heatLines + '\n' : '');

    let regressionBanner = '';
    if (history.length >= 2) {
        const prev = history[history.length - 2];
        const curr = history[history.length - 1];
        const diff = curr.average_score - prev.average_score;
        const issDiff = curr.issues - prev.issues;
        if (diff <= -5) {
            const issLabel = issDiff > 0 ? ` ${issDiff} new issue${issDiff > 1 ? 's' : ''} introduced.` : '';
            regressionBanner = `<div style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.4);border-left:4px solid var(--color-error);
                border-radius:8px;padding:14px 20px;margin-bottom:28px;display:flex;align-items:center;gap:12px;">
                <span style="font-size:1.2rem;">⚠</span>
                <span style="color:#fca5a5;font-size:0.85rem;font-weight:600;">Score dropped <strong>${Math.abs(diff)} points</strong> since last scan (${prev.average_score} → ${curr.average_score}).${issLabel}</span>
            </div>`;
        } else if (diff >= 5) {
            const issLabel = issDiff < 0 ? ` ${Math.abs(issDiff)} issue${Math.abs(issDiff) > 1 ? 's' : ''} resolved.` : '';
            regressionBanner = `<div style="background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.35);border-left:4px solid #22c55e;
                border-radius:8px;padding:14px 20px;margin-bottom:28px;display:flex;align-items:center;gap:12px;">
                <span style="font-size:1.2rem;">✓</span>
                <span style="color:#86efac;font-size:0.85rem;font-weight:600;">Score improved <strong>${diff} points</strong> since last scan (${prev.average_score} → ${curr.average_score}).${issLabel}</span>
            </div>`;
        }
    }

    document.getElementById('content').innerHTML = `
        <h1 style="font-size:3.5rem;font-weight:900;margin-bottom:10px;letter-spacing:-2.5px;">${PROJECT_NAME}</h1>
        <p style="color:var(--text-dim);margin-bottom:40px;font-weight:500;text-transform:uppercase;letter-spacing:2px;">Blueprint Static Analysis Report</p>
        ${regressionBanner}

        <div style="display:flex;gap:0;margin-bottom:40px;background:var(--bg-1);border:1px solid var(--border-light);border-radius:12px;overflow:hidden;">
            <!-- Col 1: Score ring -->
            <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px 40px;border-right:1px solid var(--border);gap:6px;flex-shrink:0;">
                ${renderHealthRing(score, window.__GATE_RESULT__ && !window.__GATE_RESULT__.passed)}
                ${renderDelta(history)}
            </div>
            <!-- Col 2: Stats stacked -->
            <div style="display:flex;flex-direction:column;justify-content:center;padding:28px 40px;border-right:1px solid var(--border);gap:18px;flex-shrink:0;">
                <div onclick="setFilter('all')" style="cursor:pointer;display:flex;align-items:baseline;gap:12px;">
                    <div style="font-size:2rem;font-weight:900;line-height:1;letter-spacing:-1px;">${MANIFEST.length}</div>
                    <div style="font-size:0.62rem;font-weight:800;text-transform:uppercase;letter-spacing:1.5px;color:var(--text-dim);">Total Assets</div>
                </div>
                <div onclick="setFilter('error')" style="cursor:pointer;display:flex;align-items:baseline;gap:12px;">
                    <div style="font-size:2rem;font-weight:900;line-height:1;letter-spacing:-1px;color:var(--color-error);">${errCount}</div>
                    <div style="font-size:0.62rem;font-weight:800;text-transform:uppercase;letter-spacing:1.5px;color:var(--text-dim);">Critical Issues</div>
                </div>
                <div onclick="setFilter('warning')" style="cursor:pointer;display:flex;align-items:baseline;gap:12px;">
                    <div style="font-size:2rem;font-weight:900;line-height:1;letter-spacing:-1px;color:var(--color-warning);">${warnCount}</div>
                    <div style="font-size:0.62rem;font-weight:800;text-transform:uppercase;letter-spacing:1.5px;color:var(--text-dim);">Warnings</div>
                </div>
                <div onclick="setFilter('info')" style="cursor:pointer;display:flex;align-items:baseline;gap:12px;">
                    <div style="font-size:2rem;font-weight:900;line-height:1;letter-spacing:-1px;color:var(--color-info);">${infoCount}</div>
                    <div style="font-size:0.62rem;font-weight:800;text-transform:uppercase;letter-spacing:1.5px;color:var(--text-dim);">Info</div>
                </div>
            </div>
            <!-- Col 3: Sparkline -->
            <div style="flex:1;display:flex;align-items:center;padding:32px 40px;min-width:0;">
                ${renderSparkline(history, 600)}
            </div>
        </div>

        <div style="display:flex;border-bottom:1px solid var(--border-light);margin-bottom:32px;">
            <button id="home-tab-btn-overview" class="home-tab-btn active" onclick="switchHomeTab('overview')">Overview</button>
            <button id="home-tab-btn-depmap" class="home-tab-btn" onclick="switchHomeTab('depmap')">Dependency Map</button>
        </div>

        <div id="home-tab-overview">
            ${renderArchitectureMetrics()}
            ${renderQualityGate()}
            ${renderProfileInfo()}

            <div class="card" style="margin-bottom:40px;">
                <div style="margin-bottom:20px;">
                    <h3 style="margin:0;font-weight:800;text-transform:uppercase;font-size:0.9rem;letter-spacing:1px;color:var(--text-dim)">Issues</h3>
                </div>
                <div id="home-issues-list" style="max-height:320px;overflow-y:auto;">
                    ${renderAggregatedIssues()}
                </div>
            </div>
        </div>

        <div id="home-tab-depmap" style="display:none;">
            <div class="card">
                <h3 style="margin-bottom:30px;font-weight:800;text-transform:uppercase;font-size:0.9rem;letter-spacing:1px;color:var(--text-dim)">Inter-Asset Dependency Map</h3>
                <div class="mermaid-wrap">
                    <div class="mermaid-loader"></div>
                    <div class="mermaid" id="global-map" onclick="openModal(this.innerHTML)" style="cursor:zoom-in;visibility:hidden;">${m}</div>
                </div>
            </div>
        </div>
    `;
}
