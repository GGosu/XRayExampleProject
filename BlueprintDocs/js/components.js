// © 2026 Yaroslav Temper. All rights reserved.
// =============================================================================
// components.js — Reusable UI component renderers
// =============================================================================

function renderAffectedNodes(issue) {
    if (issue.type !== 'Dead Code') return '';
    const nodesStr = issue.desc.split(' \u2014 ')[1] || issue.desc.split(' \u2014 ')[1] || issue.desc.split(' — ')[1] || '';
    const nodes = nodesStr ? nodesStr.split(', ').filter(Boolean) : [];
    if (!nodes.length) return '';
    return `<div style="margin-bottom:10px;">
        <div style="font-size:0.65rem;color:var(--color-error);font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:5px;">Affected Nodes</div>
        <div style="display:flex;flex-wrap:wrap;gap:4px;">
            ${nodes.map(n => `<span style="padding:2px 7px;background:rgba(239,68,68,0.1);border:1px solid var(--color-error);border-radius:4px;font-size:0.72rem;color:#fca5a5;">${esc(n)}</span>`).join('')}
        </div>
    </div>`;
}

function renderIssueCard(issue, idx, bpName, ackedList, expanded = false) {
    const acked = ackedList.includes(ackedKey(bpName, issue.type, issue.desc));
    return `
            <div class="issue-card b-${issue.level==='error'?'err':issue.level==='info'?'info':'warn'}" onclick="toggleIssue(${idx})"
                style="cursor:pointer;user-select:none;${acked?'opacity:0.45;':''}">
                <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
                    <div style="display:flex;align-items:center;gap:8px;">
                        <span>${acked ? '✓' : (issue.level==='error'?'🔴':issue.level==='info'?'🔵':'🟡')}</span>
                        <strong>${esc(issue.type)}</strong>
                        ${acked ? '<span style="font-size:0.65rem;color:#64748b;font-weight:600;">ACK</span>' : ''}
                    </div>
                    <span id="issue-chev-${idx}" style="color:#64748b;font-size:0.8rem;">${expanded ? '▾' : '▸'}</span>
                </div>
                <div id="issue-body-${idx}" style="display:${expanded ? 'block' : 'none'};margin-top:12px;border-top:1px solid var(--border-light);padding-top:12px;">
                    <p style="color:var(--text-dim);margin:0 0 10px 0;font-size:0.82rem;">${esc(issue.desc)}</p>
                    ${renderAffectedNodes(issue)}
                    ${QUICK_FIXES[issue.type] ? `<div style="background:var(--bg-1);border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:6px;padding:10px 14px;margin-bottom:12px;font-size:0.75rem;color:var(--text-secondary);"><span style="color:var(--accent);font-weight:700;font-size:0.65rem;text-transform:uppercase;letter-spacing:1px;display:block;margin-bottom:4px;">Quick Fix</span>${esc(QUICK_FIXES[issue.type])}</div>` : ''}
                    <div style="display:flex;gap:8px;">
                        <button onclick="showIssueFocus(event,${idx})" class="btn btn-ghost" style="font-size:var(--fz-xs)">Focus</button>
                        ${['Large Graph', 'Unhandled Cast'].includes(issue.type) ? `<button onclick="copyIssueForAI(event,${idx})" class="btn btn-ghost" style="font-size:var(--fz-xs)">Copy Prompt</button>` : ''}
                        <button onclick="muteIssue(event,${idx})" class="btn btn-ghost" style="font-size:var(--fz-xs)">Mute</button>
                        <button onclick="ackIssue(event,${idx})" class="btn btn-ghost"
                            style="font-size:var(--fz-xs);${acked ? 'color:var(--color-success);border-color:var(--color-success);' : ''}">${acked?'Acked':'Ack'}</button>
                    </div>
                </div>
            </div>`;
}

function renderGraphFallback(graphName, nodes) {
    const items = nodes.map(n => `<li style="color:var(--text-dim);font-size:0.75rem;">${esc(n.title || n.guid || '?')}</li>`).join('');
    return `
        <details style="margin-bottom:20px;border:1px solid var(--border-light);border-radius:8px;padding:12px 16px;">
            <summary style="font-weight:700;cursor:pointer;color:var(--warn);">${esc(graphName)} — render failed (plain list)</summary>
            <ul style="margin:8px 0 0 16px;padding:0;">${items}</ul>
        </details>`;
}

function renderGraphContainer(graphName, mermaidDef, displayTitle = null) {
    const key = sanitize(graphName);
    const title = displayTitle !== null ? displayTitle : graphName;
    return `
        <div class="graph-container">
            <div class="graph-header">
                <div class="graph-title">${title}</div>
                <div style="display:flex;gap:6px;align-items:center;">
                    <button id="layout-btn-${key}" class="btn-action"
                        onclick="toggleGraphLayout('${graphName.replace(/'/g,"\\'")}')">LR</button>
                    <button class="btn-action" onclick="copyToClipboard(document.getElementById('raw_m_${key}').textContent, this)">Copy Mermaid</button>
                </div>
            </div>
            <div class="mermaid-wrap">
                <div class="mermaid-loader"></div>
                <div class="mermaid" id="graph_${key}" onclick="openModal(this.innerHTML)" style="visibility:hidden;">${mermaidDef}</div>
            </div>
            <script type="text/plain" id="raw_m_${key}">${mermaidDef}<\/script>
        </div>`;
}
