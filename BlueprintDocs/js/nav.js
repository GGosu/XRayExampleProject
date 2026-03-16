// © 2026 Yaroslav Temper. All rights reserved.
// =============================================================================
// nav.js — Asset loading, routing, app entry point
// =============================================================================

function loadBPScript(name, path) {
    return new Promise((resolve, reject) => {
        if (window.__BP_DATA__ && window.__BP_DATA__[name] !== undefined) {
            resolve();
            return;
        }
        const script = document.createElement('script');
        script.src = 'Data' + path + '.js';
        script.onload = resolve;
        script.onerror = () => reject(new Error('Cannot load Data' + path + '.js'));
        document.head.appendChild(script);
    });
}

function parseHash(hash) {
    const m = hash.match(/^(.+):issue:(\d+)$/);
    if (m) return { bpName: m[1], issueIdx: parseInt(m[2], 10) };
    return { bpName: hash, issueIdx: null };
}

function init() {
    initMermaid();
    initCommandPalette();
    initHotkeyLegend();
    initScrollToTop();
    initFilterPills();
    MANIFEST = window.__MANIFEST__ || [];
    renderList();
    const hash = location.hash.slice(1);
    if (hash) {
        const { bpName, issueIdx } = parseHash(hash);
        const entry = MANIFEST.find(e => e.name === bpName);
        if (entry) {
            selectBP(entry.name, entry.path, null).then(() => {
                if (issueIdx !== null) showIssueFocus({ stopPropagation: () => {} }, issueIdx);
            });
        } else showHome();
    } else {
        showHome();
    }
}

window.onload = init;

function goHome() {
    document.querySelectorAll('.bp-item').forEach(i => i.classList.remove('active'));
    history.pushState(null, '', location.pathname);
    showHome();
}

window.addEventListener('hashchange', () => {
    const ov = document.getElementById('issue-focus-overlay');
    if (ov && ov.style.display !== 'none') return;

    const { bpName, issueIdx } = parseHash(location.hash.slice(1));
    if (!bpName) { showHome(); return; }
    const entry = MANIFEST.find(e => e.name === bpName);
    if (entry) {
        selectBP(entry.name, entry.path, null).then(() => {
            if (issueIdx !== null) showIssueFocus({ stopPropagation: () => {} }, issueIdx);
        });
    }
});

function goToBP(id) {
    const entry = MANIFEST.find(e => sanitizeBPId(e.name) === id);
    if (entry) selectBP(entry.name, entry.path, null);
}

function goToBPFromMap(nodeId) {
    const entry = MANIFEST.find(e => sanitize(e.name) === nodeId);
    if (entry) selectBP(entry.name, entry.path, null);
}

async function selectBP(name, path, el) {
    document.querySelectorAll('.bp-item').forEach(i => i.classList.remove('active'));
    if (el) el.classList.add('active');

    if (!ASSET_CACHE[name]) {
        try {
            await loadBPScript(name, path);
            if (!window.__BP_DATA__ || window.__BP_DATA__[name] === undefined) {
                throw new Error('Script loaded but data not found for ' + name);
            }
            ASSET_CACHE[name] = window.__BP_DATA__[name];
        } catch (err) {
            showError('Failed to load ' + name, err.message);
            return;
        }
    }

    history.pushState(null, '', '#' + name);
    renderBP(name, ASSET_CACHE[name]);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('search').oninput = renderList;
});
