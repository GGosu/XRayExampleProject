// © 2026 Yaroslav Temper. All rights reserved.
// =============================================================================
// storage.js — Acked / pinned / muted localStorage helpers
// =============================================================================

function ackedKey(bpName, type, desc) {
    return `${bpName}::${type}::${(desc || '').slice(0, 30)}`;
}
function getAcked() { return JSON.parse(localStorage.getItem('acked_issues') || '[]'); }
function isAcked(bpName, type, desc) { return getAcked().includes(ackedKey(bpName, type, desc)); }

// Mute helpers — scoped per actor (bpName::type), not global by type
function mutedKey(bpName, type) { return `${bpName}::${type}`; }
function getMuted() { return JSON.parse(localStorage.getItem('muted_issues') || '[]'); }
function isMuted(bpName, type) { return getMuted().includes(mutedKey(bpName, type)); }

function resetMutes(bpName) {
    const prefix = bpName + '::';
    const remaining = getMuted().filter(k => !k.startsWith(prefix));
    if (remaining.length) localStorage.setItem('muted_issues', JSON.stringify(remaining));
    else localStorage.removeItem('muted_issues');
    renderBP(currentBPName, currentBPData);
    renderList();
    refreshDashboardIssues();
}

function ackIssue(e, idx) {
    e.stopPropagation();
    const issue = currentBPIssues[idx];
    if (!issue) return;
    const acked = getAcked();
    const k = ackedKey(currentBPName, issue.type, issue.desc);
    if (!acked.includes(k)) acked.push(k);
    localStorage.setItem('acked_issues', JSON.stringify(acked));
    renderBP(currentBPName, currentBPData);
    renderList();
    refreshDashboardIssues();
}

function resetAcks() {
    const prefix = currentBPName + '::';
    const remaining = getAcked().filter(k => !k.startsWith(prefix));
    if (remaining.length) localStorage.setItem('acked_issues', JSON.stringify(remaining));
    else localStorage.removeItem('acked_issues');
    renderBP(currentBPName, currentBPData);
    renderList();
    refreshDashboardIssues();
}

function getPinned() { return JSON.parse(localStorage.getItem('pinned_bps') || '[]'); }

function togglePin(e, name) {
    e.stopPropagation();
    const pinned = getPinned();
    const idx = pinned.indexOf(name);
    if (idx >= 0) pinned.splice(idx, 1); else pinned.push(name);
    localStorage.setItem('pinned_bps', JSON.stringify(pinned));
    renderList();
}
