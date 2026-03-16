// © 2026 Yaroslav Temper. All rights reserved.
// =============================================================================
// sidebar.js — Filter pills, sort, view mode, renderList, hotkey legend
// =============================================================================

function initFilterPills() {
    const container = document.getElementById('filter-pills');
    if (!container) return;
    const pills = [
        { label: 'All',      value: 'all',     cls: 'pill--all' },
        { label: 'Critical', value: 'error',   cls: 'pill--critical' },
        { label: 'Warning',  value: 'warning', cls: 'pill--warning' },
        { label: 'Info',     value: 'info',    cls: 'pill--info' },
        { label: 'Clean',    value: 'clean',   cls: 'pill--clean' },
    ];
    pills.forEach(p => {
        const el = document.createElement('button');
        el.textContent = p.label;
        el.className = `pill ${p.cls}`;
        el.dataset.filter = p.value;
        el.onclick = () => setFilter(p.value);
        container.appendChild(el);
    });
}

function updateFilterPills() {
    document.querySelectorAll('#filter-pills .pill').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === currentFilter);
    });
}

function setFilter(f) { currentFilter = f; updateFilterPills(); renderList(); }

function setViewMode(m) {
    viewMode = m;
    document.getElementById('btn-flat').classList.toggle('active', m==='flat');
    document.getElementById('btn-tree').classList.toggle('active', m==='tree');
    renderList();
}

function cycleSidebarSort() {
    sidebarSort = sidebarSort === 'alpha' ? 'worst' : sidebarSort === 'worst' ? 'best' : 'alpha';
    const labels = { alpha: 'A–Z', worst: '↑ Score', best: '↓ Score' };
    const btn = document.getElementById('btn-sort');
    if (btn) btn.textContent = labels[sidebarSort];
    renderList();
}

// Shared sidebar item builder — used by both flat list and folder tree
function issueLevel(i) {
    return i.level || (
        ['Dead Code', 'Performance', 'Broken Node', 'Loop on Tick', 'Set Timer on Tick', 'Create Widget on Tick', 'Empty Tick'].includes(i.type) ? 'error' : 'warning'
    );
}

function getEffectiveCounts(entry) {
    const muted = getMuted();
    const acked = getAcked();
    const visible = (entry.issueList || []).filter(i =>
        !muted.includes(mutedKey(entry.name, i.type)) &&
        !acked.includes(ackedKey(entry.name, i.type, i.desc))
    );
    return {
        errors:   visible.filter(i => issueLevel(i) === 'error').length,
        warnings: visible.filter(i => issueLevel(i) === 'warning').length,
        infos:    visible.filter(i => issueLevel(i) === 'info').length,
    };
}

function buildSidebarBadge(entry) {
    const { errors, warnings, infos } = getEffectiveCounts(entry);
    if (!errors && !warnings && !infos) return '';
    const base = 'font-size:0.58rem;font-weight:900;';
    const sep  = `<span style="${base}color:var(--text-tertiary);"> - </span>`;
    const parts = [];
    if (errors)   parts.push(`<span style="${base}color:var(--color-error);">${errors}</span>`);
    if (warnings) parts.push(`<span style="${base}color:var(--color-warning);">${warnings}</span>`);
    if (infos)    parts.push(`<span style="${base}color:var(--color-info);">${infos}</span>`);
    return `<span style="display:inline-flex;align-items:center;flex-shrink:0;">(${parts.join(sep)})</span>`;
}

function makeSidebarItem(entry, { search = '', isPinned = false } = {}) {
    const { errors, warnings, infos } = getEffectiveCounts(entry);
    const dotColor = errors > 0 ? 'var(--color-error)' : warnings > 0 ? 'var(--color-warning)' : infos > 0 ? 'var(--color-info)' : 'var(--color-success)';
    const scoreStr = entry.average_score !== undefined
        ? `<span style="font-size:0.62rem;color:${dotColor};font-weight:700;font-family:'JetBrains Mono',monospace;flex-shrink:0;">${entry.average_score}</span>` : '';
    const badge = buildSidebarBadge(entry);
    const starColor = isPinned ? 'var(--color-warning)' : 'var(--border)';
    const it = document.createElement('div');
    it.className = 'bp-item';
    it.style.cssText = 'display:flex;align-items:center;gap:4px;';
    it.innerHTML =
        `<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${dotColor};flex-shrink:0;"></span>`
        + `<span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${highlightMatch(entry.name, search)}</span>`
        + `${badge}${scoreStr}`
        + `<span onclick="togglePin(event,'${entry.name}')" style="color:${starColor};font-size:0.8rem;flex-shrink:0;cursor:pointer;padding-left:4px;">★</span>`;
    it.onclick = () => selectBP(entry.name, entry.path, it);
    return it;
}

function passesFilter(entry) {
    const { errors, warnings, infos } = getEffectiveCounts(entry);
    if (currentFilter === 'error'   && !errors)                        return false;
    if (currentFilter === 'warning' && !warnings)                      return false;
    if (currentFilter === 'info'    && !infos)                         return false;
    if (currentFilter === 'clean'   && (errors || warnings || infos))  return false;
    return true;
}

function renderList() {
    const list = document.getElementById('bp-list');
    list.innerHTML = `<div onclick="goHome()" style="margin:12px 16px 4px;padding:10px 14px;border-radius:10px;background:rgba(59,130,246,0.12);border:1px solid rgba(59,130,246,0.25);display:flex;align-items:center;gap:8px;cursor:pointer;transition:background 0.15s,border-color 0.15s;" onmouseover="this.style.background='rgba(59,130,246,0.2)';this.style.borderColor='rgba(59,130,246,0.5)'" onmouseout="this.style.background='rgba(59,130,246,0.12)';this.style.borderColor='rgba(59,130,246,0.25)'"><svg width="13" height="13" viewBox="0 0 16 16" fill="var(--accent)" style="flex-shrink:0;"><path d="M8 1L1 7h2v7h4v-4h2v4h4V7h2L8 1z"/></svg><span style="font-size:0.7rem;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:var(--accent);">Dashboard Home</span></div>`;
    const search = document.getElementById('search').value.toLowerCase();
    const sorted = MANIFEST.slice().sort((a, b) => {
        if (sidebarSort === 'worst') return (a.average_score ?? 100) - (b.average_score ?? 100);
        if (sidebarSort === 'best')  return (b.average_score ?? 100) - (a.average_score ?? 100);
        return a.name.localeCompare(b.name);
    });

    if (viewMode === 'flat') {
        const pinned = getPinned();
        const appendItem = (entry, isPinned) => {
            if (search && !entry.name.toLowerCase().includes(search)) return;
            if (!passesFilter(entry)) return;
            list.appendChild(makeSidebarItem(entry, { search, isPinned }));
        };

        const pinnedEntries   = sorted.filter(e => pinned.includes(e.name));
        const unpinnedEntries = sorted.filter(e => !pinned.includes(e.name));
        if (pinnedEntries.length > 0) {
            const divider = document.createElement('div');
            divider.style.cssText = 'font-size:0.58rem;font-weight:800;text-transform:uppercase;letter-spacing:1px;color:#64748b;padding:6px 12px 2px;';
            divider.textContent = '★ Pinned';
            list.appendChild(divider);
            pinnedEntries.forEach(e => appendItem(e, true));
            const sep = document.createElement('div');
            sep.style.cssText = 'height:1px;background:var(--border-light);margin:6px 0;';
            list.appendChild(sep);
        }
        unpinnedEntries.forEach(e => appendItem(e, false));
    } else {
        const root = { children: {}, assets: [] };
        sorted.forEach(entry => {
            const p = entry.path || '/Game/' + entry.name;
            const pts = p.split('/').filter(Boolean); pts.pop();
            let curr = root;
            pts.forEach(pt => {
                if (!curr.children[pt]) curr.children[pt] = { children: {}, assets: [] };
                curr = curr.children[pt];
            });
            curr.assets.push(entry);
        });
        const build = (node, cont) => {
            Object.keys(node.children).sort().forEach(f => {
                const fd = document.createElement('div'); fd.className = 'tree-folder';
                fd.innerHTML = `&#9662; ${f}`;
                const cc = document.createElement('div'); cc.className = 'tree-node';
                fd.onclick = () => cc.style.display = cc.style.display==='none'?'block':'none';
                cont.appendChild(fd); cont.appendChild(cc);
                build(node.children[f], cc);
            });
            node.assets.forEach(entry => {
                if (!passesFilter(entry)) return;
                cont.appendChild(makeSidebarItem(entry));
            });
        };
        build(root, list);
    }
}

function initScrollToTop() {
    const btn = document.createElement('div');
    btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="2,9 7,4 12,9"/></svg>`;
    btn.title = 'Scroll to top';
    btn.style.cssText = 'position:fixed;bottom:70px;right:24px;width:32px;height:32px;border-radius:50%;' +
        'background:var(--panel);border:1px solid var(--border);color:var(--text-dim);' +
        'cursor:pointer;z-index:500;display:flex;align-items:center;justify-content:center;' +
        'user-select:none;transition:border-color 0.2s,color 0.2s,opacity 0.2s;' +
        'opacity:0;pointer-events:none;';
    btn.onmouseover = () => { btn.style.borderColor='var(--accent)'; btn.style.color='var(--accent)'; };
    btn.onmouseout  = () => { btn.style.borderColor='var(--border)'; btn.style.color='var(--text-dim)'; };
    btn.onclick = () => {
        const content = document.getElementById('content');
        if (content) content.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const content = document.getElementById('content');
    if (content) {
        content.addEventListener('scroll', () => {
            const visible = content.scrollTop > 200;
            btn.style.opacity  = visible ? '1' : '0';
            btn.style.pointerEvents = visible ? 'auto' : 'none';
        });
    }
    document.body.appendChild(btn);
}

function initHotkeyLegend() {
    const btn = document.createElement('div');
    btn.innerHTML = '?';
    btn.style.cssText = 'position:fixed;bottom:24px;right:24px;width:32px;height:32px;border-radius:50%;' +
        'background:var(--bg-2);border:1px solid var(--border);color:var(--text-tertiary);font-size:0.9rem;font-weight:900;' +
        'cursor:pointer;z-index:500;display:flex;align-items:center;justify-content:center;' +
        'user-select:none;transition:border-color 0.2s,color 0.2s;';
    btn.onmouseover = () => { btn.style.borderColor='var(--accent)'; btn.style.color='var(--accent)'; };
    btn.onmouseout  = () => { btn.style.borderColor='var(--border)'; btn.style.color='var(--text-tertiary)'; };

    const overlay = document.createElement('div');
    overlay.id = 'hotkey-overlay';
    overlay.style.cssText = 'display:none;position:fixed;bottom:68px;right:24px;background:var(--bg-1);' +
        'border:1px solid var(--border);border-radius:12px;padding:20px 24px;z-index:501;min-width:240px;' +
        'box-shadow:var(--shadow-md);';
    overlay.innerHTML =
        `<div style="font-size:0.7rem;font-weight:800;text-transform:uppercase;letter-spacing:1px;color:var(--text-dim);margin-bottom:12px;">Keyboard Shortcuts</div>` +
        [['Ctrl+K','Command palette'],['Escape','Close overlay'],
         ['G → H','Go home']
        ].map(([k,v]) =>
            `<div style="display:flex;justify-content:space-between;gap:24px;margin-bottom:8px;">
                <kbd style="font-family:var(--font-mono);font-size:0.75rem;color:var(--text-primary);
                    background:var(--bg-2);padding:2px 8px;border-radius:4px;border:1px solid var(--border);">${k}</kbd>
                <span style="color:var(--text-dim);font-size:0.75rem;">${v}</span>
            </div>`).join('');

    btn.onclick = (e) => {
        e.stopPropagation();
        overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
    };
    document.addEventListener('click', () => { overlay.style.display = 'none'; });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') overlay.style.display = 'none'; });
    document.body.appendChild(overlay);
    document.body.appendChild(btn);
}
