// © 2026 Yaroslav Temper. All rights reserved.
// =============================================================================
// palette.js — Command palette (Ctrl+K) + keyboard navigation
// =============================================================================

function initCommandPalette() {
    const style = document.createElement('style');
    style.textContent = `.issue-card.focused{outline:2px solid #3b82f6;outline-offset:2px;}`;
    document.head.appendChild(style);

    const overlay = document.createElement('div');
    overlay.id = 'cmd-overlay';
    overlay.style.cssText = 'display:none;position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:1000;';
    overlay.onclick = closePalette;
    document.body.appendChild(overlay);

    const palette = document.createElement('div');
    palette.id = 'cmd-palette';
    palette.style.cssText = 'display:none;position:fixed;top:20%;left:50%;transform:translateX(-50%);' +
        'width:560px;max-width:90vw;background:var(--bg-1);border:1px solid var(--border);' +
        'border-radius:12px;z-index:1001;overflow:hidden;box-shadow:var(--shadow-lg);';
    palette.innerHTML =
        `<input id="cmd-input" placeholder="Search blueprints or issues…"
            style="width:100%;padding:16px 20px;background:transparent;border:none;
            border-bottom:1px solid var(--border-light);color:var(--text-primary);font-size:1rem;outline:none;box-sizing:border-box;"
            oninput="renderPaletteResults(this.value)"/>
        <div id="cmd-results" style="max-height:360px;overflow-y:auto;"></div>`;
    document.body.appendChild(palette);

    document.addEventListener('keydown', e => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const isOpen = document.getElementById('cmd-palette').style.display !== 'none';
            isOpen ? closePalette() : openPalette();
            return;
        }
        if (e.key === 'Escape') {
            if (document.getElementById('cmd-palette').style.display !== 'none') closePalette();
            return;
        }
        if (document.getElementById('cmd-palette').style.display === 'none') {
            const activeTag = document.activeElement && document.activeElement.tagName;
            if (activeTag !== 'INPUT' && activeTag !== 'TEXTAREA') {
                if (e.key === 'g' || e.key === 'G') {
                    gKeyPending = true;
                    setTimeout(() => { gKeyPending = false; }, 1000);
                    return;
                }
                if (gKeyPending) {
                    gKeyPending = false;
                    if (e.key === 'h' || e.key === 'H') { e.preventDefault(); showHome(); return; }
                    if (e.key === 'b' || e.key === 'B') { e.preventDefault(); openPalette(); return; }
                }
            }
        }

        const tag = document.activeElement && document.activeElement.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA') return;
        const cards = document.querySelectorAll('.issue-card');
        if (!cards.length) return;
        if (e.key === 'j') {
            currentIssueIdx = Math.min(currentIssueIdx + 1, cards.length - 1);
            cards.forEach((c, i) => c.classList.toggle('focused', i === currentIssueIdx));
            cards[currentIssueIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else if (e.key === 'k') {
            currentIssueIdx = Math.max(currentIssueIdx - 1, 0);
            cards.forEach((c, i) => c.classList.toggle('focused', i === currentIssueIdx));
            cards[currentIssueIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else if (e.key === 'Enter' && currentIssueIdx >= 0 && cards[currentIssueIdx]) {
            cards[currentIssueIdx].click();
        }
    });
}

function openPalette() {
    document.getElementById('cmd-overlay').style.display = 'block';
    document.getElementById('cmd-palette').style.display = 'block';
    const input = document.getElementById('cmd-input');
    input.value = '';
    renderPaletteResults('');
    input.focus();
}

function closePalette() {
    document.getElementById('cmd-overlay').style.display = 'none';
    document.getElementById('cmd-palette').style.display = 'none';
}

function renderPaletteResults(query) {
    const q = query.trim().toLowerCase();
    const results = document.getElementById('cmd-results');

    const bpMatches = MANIFEST.filter(e => !q || e.name.toLowerCase().includes(q));
    const issueMatches = q ? MANIFEST.filter(e =>
        !e.name.toLowerCase().includes(q) &&
        (e.issueList || []).some(i =>
            i.type.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q)
        )
    ) : [];

    if (!bpMatches.length && !issueMatches.length) {
        results.innerHTML = `<div style="padding:20px;color:#64748b;font-size:0.85rem;">No results</div>`;
        return;
    }

    const renderEntry = (e, matchedIssues) => {
        const dot = entryDotColor(e);
        const scoreStr = e.average_score !== undefined
            ? `<span style="color:#64748b;font-size:0.72rem;margin-left:auto;">${e.average_score}/100</span>` : '';
        const issueHint = matchedIssues && matchedIssues.length
            ? `<div style="color:#64748b;font-size:0.68rem;margin-top:2px;padding-left:18px;">${esc(matchedIssues[0].type)}: ${esc(matchedIssues[0].desc.substring(0, 60))}${matchedIssues[0].desc.length > 60 ? '…' : ''}</div>`
            : '';
        return `<div onclick="closePalette();selectBP('${e.name.replace(/'/g,"\\'")}','${e.path.replace(/'/g,"\\'")}',null)"
            style="padding:10px 20px;cursor:pointer;transition:background 0.1s;"
            onmouseover="this.style.background='#1a1a2e'" onmouseout="this.style.background=''">
            <div style="display:flex;align-items:center;gap:10px;">
                <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${dot};flex-shrink:0;"></span>
                <span style="font-size:0.9rem;">${esc(e.name)}</span>
                ${scoreStr}
            </div>
            ${issueHint}
        </div>`;
    };

    let html = '';
    if (bpMatches.length) {
        if (issueMatches.length) html += `<div style="padding:6px 20px;font-size:0.65rem;font-weight:800;text-transform:uppercase;letter-spacing:1px;color:#64748b;">Blueprints</div>`;
        html += bpMatches.slice(0, 8).map(e => renderEntry(e, null)).join('');
    }
    if (issueMatches.length) {
        html += `<div style="padding:6px 20px;font-size:0.65rem;font-weight:800;text-transform:uppercase;letter-spacing:1px;color:var(--text-tertiary);border-top:1px solid var(--border-light);margin-top:4px;">Issues</div>`;
        html += issueMatches.slice(0, 6).map(e => {
            const matched = (e.issueList || []).filter(i =>
                i.type.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q));
            return renderEntry(e, matched);
        }).join('');
    }
    results.innerHTML = html;
}
