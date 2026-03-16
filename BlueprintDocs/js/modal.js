// © 2026 Yaroslav Temper. All rights reserved.
// =============================================================================
// modal.js — SVG zoom modal + node detail panel
// =============================================================================

function openModal(svgHtml) {
    const overlay = document.getElementById('modal-overlay');
    const content = document.getElementById('modal-content');
    content.innerHTML = svgHtml;
    overlay.style.zIndex = '10002';  // above focus overlay (9999) and node-detail-panel (10000)
    overlay.style.display = 'flex';
    resetModal();

    const svg = content.querySelector('svg');
    svg.style.cursor = 'grab';

    content.onmousedown = (e) => {
        isDragging = true;
        startX = e.clientX - translateX;
        startY = e.clientY - translateY;
        svg.style.cursor = 'grabbing';
    };
    window.onmousemove = (e) => {
        if (!isDragging) return;
        translateX = e.clientX - startX;
        translateY = e.clientY - startY;
        updateModalTransform();
    };
    window.onmouseup = () => {
        isDragging = false;
        svg.style.cursor = 'grab';
    };

    content.onwheel = (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? 0.9 : 1.1;
        zoomModalAt(delta, e.clientX, e.clientY);
    };
}

function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    overlay.style.display = 'none';
    overlay.style.zIndex = '';  // restore CSS default
}

function zoomModal(factor) {
    const content = document.getElementById('modal-content');
    const rect = content.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    zoomModalAt(factor, cx, cy);
}

function zoomModalAt(factor, mouseX, mouseY) {
    const content = document.getElementById('modal-content');
    const rect = content.getBoundingClientRect();
    // Mouse position relative to the content element
    const offsetX = mouseX - rect.left;
    const offsetY = mouseY - rect.top;
    // Adjust translation so the point under the cursor stays fixed
    translateX = offsetX - (offsetX - translateX) * factor;
    translateY = offsetY - (offsetY - translateY) * factor;
    modalScale *= factor;
    updateModalTransform();
}

function resetModal() {
    modalScale = 1;
    translateX = 0;
    translateY = 0;
    updateModalTransform();
}

function updateModalTransform() {
    const svg = document.querySelector('#modal-content svg');
    if (svg) {
        svg.style.transformOrigin = '0 0';
        svg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${modalScale})`;
    }
}

// =============================================================================
// Node Click → Detail Panel
// =============================================================================
let _nodeDetailGraph = null;

function attachNodeClickHandlers(graphName, g) {
    const container = document.getElementById('graph_' + sanitize(graphName));
    if (!container) return;
    const svg = container.querySelector('svg');
    if (!svg) return;
    svg.querySelectorAll('g.node').forEach(el => {
        const m = el.id.match(/^flowchart-(n_[a-zA-Z0-9_]+)-\d+$/);
        if (!m) return;
        const mermaidId = m[1];
        const node = (g.nodes || []).find(n => sanitize(n.guid.substring(0, 8)) === mermaidId);
        if (!node) return;
        el.style.cursor = 'pointer';
        el.addEventListener('click', ev => { ev.stopPropagation(); showNodeDetail(node, g); });
    });
}

function showNodeDetail(node, g) {
    document.getElementById('node-detail-panel')?.remove();
    const isDead = (g.deadCodeNodes || []).includes(node.guid);
    const sem    = node.semantic || {};
    const pins   = (node.pins || []);

    const pinHtml = pins.length
        ? pins.map(p => `<span style="color:var(--text-dim);font-size:0.68rem;">${esc(p.name)}<span style="color:#444">:${esc(p.type)}</span></span>`).join(' &nbsp;')
        : '<span style="color:#444;font-size:0.68rem;">none</span>';

    const panel = document.createElement('div');
    panel.id = 'node-detail-panel';
    panel.style.cssText = 'position:fixed;bottom:0;left:0;right:0;background:var(--bg-1);' +
        'border-top:2px solid ' + (isDead ? 'var(--color-error)' : 'var(--border)') + ';' +
        'padding:14px 32px;z-index:10000;display:flex;gap:32px;align-items:center;flex-wrap:wrap;';
    panel.innerHTML = `
        <div>
            <div style="font-size:0.6rem;font-weight:800;text-transform:uppercase;letter-spacing:1px;color:var(--text-dim);">Node</div>
            <div style="font-weight:700;font-size:0.9rem;margin-top:2px;">${esc(node.title)}</div>
            <div style="color:#64748b;font-size:0.68rem;margin-top:1px;">${esc(node.type)}</div>
        </div>
        ${sem.category ? `<div>
            <div style="font-size:0.6rem;font-weight:800;text-transform:uppercase;letter-spacing:1px;color:var(--text-dim);">Category</div>
            <div style="font-size:0.8rem;margin-top:2px;">${esc(sem.category)}</div>
        </div>` : ''}
        ${isDead ? `<div style="padding:6px 12px;background:rgba(239,68,68,0.1);border:1px solid var(--color-error);border-radius:6px;color:var(--color-error);font-size:0.75rem;font-weight:700;">⚠ Dead Code</div>` : ''}
        <div style="flex:1;">
            <div style="font-size:0.6rem;font-weight:800;text-transform:uppercase;letter-spacing:1px;color:var(--text-dim);margin-bottom:4px;">Pins (${pins.length})</div>
            <div>${pinHtml}</div>
        </div>
        <button onclick="document.getElementById('node-detail-panel').remove()"
            class="btn btn-ghost" style="flex-shrink:0;margin-right:40px;">✕</button>`;
    document.body.appendChild(panel);
}
