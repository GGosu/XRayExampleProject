// © 2026 Yaroslav Temper. All rights reserved.
// =============================================================================
// utils.js — Pure utility functions (no global state dependencies)
// =============================================================================

function sanitizeBPId(name) { return name.replace(/[^A-Za-z0-9_]/g, '_'); }

function sanitize(id) { return 'n_' + id.replace(/[^a-zA-Z0-9]/g, '_'); }

function esc(s) {
    return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/\[/g,'&#91;').replace(/\]/g,'&#93;');
}

// Single-pass Mermaid-safe escaping for node label content inside ["..."] delimiters.
// IMPORTANT: Mermaid content is injected via innerHTML (see components.js), so the
// browser HTML-decodes entities BEFORE Mermaid reads the div. &quot; → " which breaks
// ["..."] label delimiters, and &#35; → # which re-escapes Mermaid entities.
// Fix: use Mermaid-native #entityName; for " and | — the browser leaves #...;
// sequences untouched (they are not HTML entities), and Mermaid renders them correctly.
const _escMermaidMap = {
    '&': '&amp;', '<': '&lt;', '>': '&gt;',
    '"': '#quot;',  // NOT &quot; — innerHTML decodes that to " breaking ["..."] syntax
    '[': '&#91;', ']': '&#93;', '\\': '&#92;', "'": '&#39;',
    '#': '#35;',   // NOT &#35; — &#35; survives innerHTML but then Mermaid sees # again
    '|': '#124;',  // NOT &#124; — same reason
    '\n': ' ', '\r': ' '
};
function escMermaid(s) {
    return (s||'').replace(/[&<>"[\]\\'|#\n\r]/g, c => _escMermaidMap[c]);
}

function highlightMatch(text, query) {
    if (!query) return esc(text);
    const lower = text.toLowerCase();
    const idx = lower.indexOf(query.toLowerCase());
    if (idx < 0) return esc(text);
    return esc(text.slice(0, idx))
        + `<mark style="background:transparent;color:var(--accent);font-weight:900;">${esc(text.slice(idx, idx + query.length))}</mark>`
        + esc(text.slice(idx + query.length));
}

async function copyToClipboard(text, btn) {
    try {
        await navigator.clipboard.writeText(text);
        const original = btn.innerHTML;
        btn.innerHTML = 'DONE!';
        setTimeout(() => { btn.innerHTML = original; }, 1500);
    } catch (err) { console.error('Copy failed', err); }
}

// Score 0-100 → green / yellow / red
function scoreColor(score) {
    return score >= 80 ? '#22c55e' : score >= 60 ? '#eab308' : '#ef4444';
}

function entryDotColor(entry) {
    return (entry.errors || 0) > 0   ? '#ef4444'
         : (entry.warnings || 0) > 0 ? '#f59e0b'
         : (entry.infos || 0) > 0    ? '#3b82f6'
         : '#22c55e';
}

async function showMermaid(selector, onReady, initDelay = 100) {
    await new Promise(r => setTimeout(r, initDelay));
    if (typeof initMermaid === 'function') initMermaid();
    try {
        const runOpts = typeof selector === 'string'
            ? { querySelector: selector, suppressErrors: false }
            : { nodes: selector.length !== undefined ? Array.from(selector) : [selector], suppressErrors: false };
        await mermaid.run(runOpts);
    } catch(e) { console.error('Mermaid render failed', e); }
    await new Promise(r => setTimeout(r, 400));
    document.querySelectorAll('.mermaid').forEach(el => el.style.visibility = '');
    document.querySelectorAll('.mermaid-loader').forEach(el => el.style.display = 'none');
    if (onReady) onReady();
}

function showError(title, detail) {
    document.getElementById('content').innerHTML = `
        <div style="padding:60px;">
            <h2 style="font-size:2rem;font-weight:900;color:var(--err);margin-bottom:16px;">${title}</h2>
            <p style="color:var(--text-dim);font-size:0.85rem;">${detail}</p>
        </div>`;
}
