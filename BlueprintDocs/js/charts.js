// © 2026 Yaroslav Temper. All rights reserved.
// =============================================================================
// charts.js — Sparklines, score rings, donut, trends, architecture metrics
// =============================================================================

const ISSUE_COLORS = {
    'Dead Code':           '#ef4444',
    'Unhandled Cast':      '#f97316',
    'Cyclomatic Complexity': '#eab308',
    'Memory Risk':         '#14b8a6',
    'High Coupling':       '#ec4899',
    'Unused Function':     '#8b5cf6',
    'Unused Variable':     '#8b5cf6',
    'Write-only Variable': '#a78bfa',
    'Read-only Variable':  '#a78bfa',
    'Performance':         '#f43f5e',
    'Disabled Nodes':      '#64748b',
    'Naming':              '#06b6d4',
    'Bool Naming':         '#06b6d4',
    'Loop on Tick':          '#f43f5e',
    'Cast on Tick':          '#f97316',
    'Set Timer on Tick':     '#f43f5e',
    'Create Widget on Tick': '#f43f5e',
    'Print String on Tick':  '#94a3b8',
    'Empty Tick':            '#f43f5e',
    'Dispatcher Not Bound':  '#a78bfa',
    'Dispatcher never unbound': '#f97316',
    'Unused Dispatcher':     '#64748b',
    'Branch Literal':        '#eab308',
};

function scoreBadge(score) {
    if (score === undefined || score === null) return '';
    const color = scoreColor(score);
    const bg    = score >= 80 ? 'rgba(34,197,94,0.1)' : score >= 60 ? 'rgba(234,179,8,0.1)' : 'rgba(239,68,68,0.1)';
    return `<span style="background:${bg};color:${color};border:1px solid ${color};
        padding:3px 10px;border-radius:6px;font-size:0.72rem;font-weight:800;
        letter-spacing:1px;font-family:'JetBrains Mono',monospace;">Score: ${score}</span>`;
}

function renderSparkline(history, W = 160) {
    if (!history || history.length < 2) return `
        <div style="margin-top:8px;width:100%;display:flex;align-items:center;height:48px;">
            <span style="font-size:0.72rem;font-weight:600;color:var(--text-dim);letter-spacing:0.5px;">No previous scans</span>
        </div>`;
    const H = 48, pad = 4;
    const scores = history.map(e => e.average_score);
    const minS = Math.min(...scores), maxS = Math.max(...scores);
    const range = maxS - minS || 1;
    const pts = scores.map((s, i) => {
        const x = pad + (i / (scores.length - 1)) * (W - pad * 2);
        const y = H - pad - ((s - minS) / range) * (H - pad * 2);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');
    const last = scores[scores.length - 1];
    const color = scoreColor(last);
    const allPts = pts.split(' ');
    const [lx, ly] = allPts[allPts.length - 1].split(',');
    // Dot and label are HTML overlays so preserveAspectRatio="none" doesn't distort them
    const dotTopPct = (parseFloat(ly) / H * 100).toFixed(1);
    const annotate = scores.length > 2
        ? scores.slice(0, -1).filter((_, i) => i === 0 || i === Math.floor((scores.length - 1) / 2))
              .map((s, _, arr) => {
                  const idx = scores.indexOf(s);
                  const xPct = (pad + (idx / (scores.length - 1)) * (W - pad * 2)) / W * 100;
                  const yPct = parseFloat(allPts[idx].split(',')[1]) / H * 100;
                  return `<span style="position:absolute;left:${xPct.toFixed(1)}%;top:${yPct.toFixed(1)}%;
                      transform:translate(-50%,-160%);font-size:9px;font-weight:700;color:${scoreColor(s)};
                      white-space:nowrap;opacity:0.6;">${s}</span>`;
              }).join('')
        : '';
    return `
        <div style="margin-top:8px;width:100%;position:relative;" title="Score history (${history.length} scans)">
            <svg width="100%" height="${H}" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" style="overflow:visible;display:block;">
                <polyline points="${pts}" fill="none" stroke="${color}" stroke-width="1.5"
                    stroke-linejoin="round" stroke-linecap="round" opacity="0.7"/>
            </svg>
            ${annotate}
            <span style="position:absolute;right:0;top:${dotTopPct}%;transform:translateY(-50%);
                display:inline-flex;align-items:center;gap:5px;">
                <span style="width:7px;height:7px;border-radius:50%;background:${color};flex-shrink:0;display:inline-block;"></span>
                <span style="font-size:10px;font-weight:800;color:${color};">${last}</span>
            </span>
        </div>`;
}

function renderBPSparkline(name) {
    const history = window.__SCAN_HISTORY__ || [];
    const scores = history.map(e => (e.bps && e.bps[name] !== undefined) ? e.bps[name] : null).filter(s => s !== null);
    if (scores.length < 2) return '';
    const W = 120, H = 36, pad = 4;
    const minS = Math.min(...scores), maxS = Math.max(...scores);
    const range = maxS - minS || 1;
    const pts = scores.map((s, i) => {
        const x = pad + (i / (scores.length - 1)) * (W - pad * 2);
        const y = H - pad - ((s - minS) / range) * (H - pad * 2);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');
    const last = scores[scores.length - 1];
    const color = scoreColor(last);
    const [lx, ly] = pts.split(' ').pop().split(',');
    return `<span title="Score trend (${scores.length} scans)" style="display:inline-flex;align-items:center;margin-left:8px;">
        <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" style="overflow:visible;vertical-align:middle;">
            <polyline points="${pts}" fill="none" stroke="${color}" stroke-width="1.5"
                stroke-linejoin="round" stroke-linecap="round" opacity="0.7"/>
            <circle cx="${lx}" cy="${ly}" r="2.5" fill="${color}"/>
        </svg>
    </span>`;
}

function renderDelta(history) {
    if (!history || history.length < 2) return '';
    const prev = history[history.length - 2];
    const curr = history[history.length - 1];
    const diff = curr.average_score - prev.average_score;
    const arrow = diff > 0 ? '▲' : diff < 0 ? '▼' : '→';
    const color = diff > 0 ? 'var(--color-success)' : diff < 0 ? 'var(--color-error)' : 'var(--text-tertiary)';
    const label = diff !== 0 ? `${Math.abs(diff)} from last scan` : 'no change';
    const issueDiff = curr.issues - prev.issues;
    const issueLabel = issueDiff === 0 ? '' :
        `<span style="color:${issueDiff > 0 ? 'var(--color-error)' : 'var(--color-success)'};font-size:0.65rem;display:block;margin-top:2px;">
            ${issueDiff > 0 ? '+' : ''}${issueDiff} issues
        </span>`;
    return `<div style="margin-top:8px;">
        <span style="color:${color};font-size:0.8rem;font-weight:700;">${arrow} ${label}</span>
        ${issueLabel}
    </div>`;
}

function renderHealthRing(score, gateFailed) {
    const color = gateFailed ? '#ef4444' : scoreColor(score);
    const label = gateFailed ? 'FAILED' : score >= 80 ? 'PASSED' : score >= 60 ? 'DEGRADED' : 'FAILED';
    const r = 54, circ = 2 * Math.PI * r;
    const dash = (score / 100) * circ;
    return `
        <svg width="140" height="140" viewBox="0 0 140 140">
            <circle cx="70" cy="70" r="${r}" fill="none" stroke="var(--bg-2)" stroke-width="14"/>
            <circle cx="70" cy="70" r="${r}" fill="none" stroke="${color}" stroke-width="14"
                stroke-dasharray="${dash} ${circ}" stroke-dashoffset="${circ/4}"
                stroke-linecap="round">
                <animate attributeName="stroke-dasharray"
                    from="0 ${circ}" to="${dash} ${circ}" dur="1s" fill="freeze"/>
            </circle>
            <text x="70" y="70" text-anchor="middle" dy="0.35em"
                font-size="28" font-weight="900" fill="${color}">${score}</text>
            <text x="70" y="92" text-anchor="middle" font-size="11" fill="#64748b">/100</text>
        </svg>
        <div style="color:${color};font-size:0.7rem;font-weight:800;letter-spacing:2px;text-transform:uppercase;margin-top:4px;">${label}</div>`;
}

function computeProjectScore() {
    if (!MANIFEST.length) return 100;
    return Math.round(MANIFEST.reduce((s, e) => s + (e.average_score ?? 100), 0) / MANIFEST.length);
}

function renderAggregatedIssues() {
    const severity = {'error': 0, 'warning': 1, 'info': 2};
    const muted = JSON.parse(localStorage.getItem('muted_issues') || '[]');
    const ackedList = getAcked();
    const allRows = [];
    MANIFEST.forEach(e => {
        (e.issueList || []).forEach(i => {
            if (muted.includes(mutedKey(e.name, i.type))) return;
            if (ackedList.includes(ackedKey(e.name, i.type, i.desc))) return;
            allRows.push({ bp: e.name, path: e.path, type: i.type, desc: i.desc,
            level: i.level || (['Dead Code', 'Performance', 'Broken Node', 'Loop on Tick', 'Set Timer on Tick', 'Create Widget on Tick', 'Empty Tick'].includes(i.type) ? 'error' : 'warning'),
            });
        });
    });
    (window.__PROJECT_ASSET_NAMING__ || []).forEach(v => {
        if (ackedList.includes(ackedKey(v.assetName, 'Asset Naming', v.message))) return;
        allRows.push({ bp: v.assetName, path: v.assetPath, type: 'Naming',
                       desc: v.message, level: 'warning', ruleLabel: 'Asset Naming',
                       assetClass: v.assetClass });
    });
    allRows.sort((a, b) => (severity[a.level] ?? 1) - (severity[b.level] ?? 1));

    const f = window.__PROFILE_ISSUE_FILTER__ || null;
    const rows = f
        ? allRows.filter(r => r.type === f.type &&
            (!f.descPrefix || (r.desc && r.desc.startsWith(f.descPrefix)) || r.ruleLabel === f.label))
        : allRows;

    const filterBanner = f
        ? `<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;padding:6px 12px;
                background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.25);border-radius:8px;">
            <span style="font-size:0.65rem;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:#93c5fd;">Filtered:</span>
            <span style="font-size:0.75rem;font-weight:700;color:#dbeafe;font-family:'JetBrains Mono',monospace;">${esc(f.label)}</span>
            <span style="margin-left:auto;font-size:0.68rem;color:var(--text-dim);">${rows.length} of ${allRows.length}</span>
            <button onclick="clearIssueFilter()"
                style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);
                       border-radius:5px;color:#94a3b8;cursor:pointer;font-size:0.68rem;
                       padding:2px 8px;font-family:inherit;"
                onmouseover="this.style.background='rgba(255,255,255,0.14)'"
                onmouseout="this.style.background='rgba(255,255,255,0.06)'"
                title="Show all issues">Show all</button>
           </div>`
        : '';

    if (!rows.length) {
        const msg = f
            ? `<div style="color:var(--text-dim);font-size:0.8rem;padding:12px 0;">No <strong style="color:var(--text);">${esc(f.label)}</strong> issues found.</div>`
            : `<div style="color:var(--ok);font-size:0.8rem;font-weight:600;padding:12px 0;">No issues detected across all blueprints.</div>`;
        return filterBanner + msg;
    }

    window.__DASH_ROWS__ = rows;
    const col = 'display:grid;grid-template-columns:22px 120px 1fr 260px;align-items:center;';
    const sep = 'border-right:1px solid var(--border);';
    const header = `<div style="${col}padding:5px 0 8px 0;border-bottom:1px solid var(--border);">
        <span></span>
        <span style="font-size:0.62rem;font-weight:800;letter-spacing:1.5px;color:var(--text-dim);text-transform:uppercase;${sep}padding-right:12px;">Type</span>
        <span style="font-size:0.62rem;font-weight:800;letter-spacing:1.5px;color:var(--text-dim);text-transform:uppercase;${sep}padding:0 12px;">Description</span>
        <span style="font-size:0.62rem;font-weight:800;letter-spacing:1.5px;color:var(--text-dim);text-transform:uppercase;padding-left:12px;">Actor</span>
    </div>`;
    const rowsHtml = rows.map((row, i) => {
        const dot = row.level === 'error' ? '🔴' : row.level === 'info' ? '🔵' : '🟡';
        const displayType = row.assetClass || row.type;
        return `<div class="issue-row" onclick="openDashboardIssue(${i})" style="${col}padding:9px 0;border-bottom:1px solid var(--border);cursor:pointer;transition:background 0.15s;" onmouseover="this.style.background='rgba(255,255,255,0.03)'" onmouseout="this.style.background=''">
            <span style="font-size:0.7rem;">${dot}</span>
            <span style="color:var(--text-dim);font-size:0.72rem;${sep}padding-right:12px;">${esc(displayType)}</span>
            <span style="font-size:0.78rem;${sep}padding:0 12px;">${esc(row.desc)}</span>
            <span style="color:var(--accent);font-size:0.7rem;font-weight:700;padding-left:12px;padding-right:20px;">${esc(row.bp)}</span>
        </div>`;
    }).join('');
    return filterBanner + header + rowsHtml;
}

function renderWhatChanged() {
    const history = window.__SCAN_HISTORY__ || [];
    if (history.length < 2) return '';
    const prev = history[history.length - 2];
    const curr = history[history.length - 1];
    const sd = curr.average_score  - prev.average_score;
    const id = curr.issues - prev.issues;
    const sc = sd > 0 ? 'var(--color-success)' : sd < 0 ? 'var(--color-error)' : 'var(--text-tertiary)';
    const ic = id > 0 ? 'var(--color-error)' : id < 0 ? 'var(--color-success)' : 'var(--text-tertiary)';
    const sa = sd > 0 ? '▲' : sd < 0 ? '▼' : '→';
    const ia = id > 0 ? '+' : '';

    const prevBps = prev.bps || {};
    const currBps = curr.bps || {};
    const allNames = Array.from(new Set([...Object.keys(prevBps), ...Object.keys(currBps)]));
    const bpChanges = allNames.map(n => {
        const ps = prevBps[n], cs = currBps[n];
        if (ps === undefined || cs === undefined) return null;
        const d = cs - ps;
        if (d === 0) return null;
        return { name: n, prev: ps, curr: cs, d };
    }).filter(Boolean).sort((a, b) => Math.abs(b.d) - Math.abs(a.d));

    const bpRows = bpChanges.map(bp => {
        const color = bp.d > 0 ? 'var(--color-success)' : 'var(--color-error)';
        const arrow = bp.d > 0 ? '▲' : '▼';
        return `<div style="display:flex;align-items:center;gap:10px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.04);">
            <span style="color:${color};font-weight:800;font-size:0.85rem;min-width:48px;">${arrow} ${Math.abs(bp.d)}</span>
            <span style="font-family:'JetBrains Mono',monospace;font-size:0.75rem;color:var(--text);">${bp.name}</span>
            <span style="color:var(--text-dim);font-size:0.7rem;margin-left:auto;">${bp.prev} → ${bp.curr}</span>
        </div>`;
    }).join('');

    const bpSection = bpChanges.length > 0 ? `
        <div style="margin-top:20px;">
            <div style="font-size:0.7rem;font-weight:800;text-transform:uppercase;letter-spacing:1px;
                color:var(--text-dim);margin-bottom:8px;">Per-Blueprint Score Changes</div>
            ${bpRows}
        </div>` : '';

    return `
        <div class="card" style="margin-bottom:40px;">
            <h3 style="margin-bottom:16px;font-weight:800;text-transform:uppercase;font-size:0.9rem;
                letter-spacing:1px;color:var(--text-dim);">Since Last Scan</h3>
            <div style="display:flex;gap:40px;flex-wrap:wrap;align-items:center;">
                <div>
                    <span style="color:${sc};font-size:1.3rem;font-weight:800;">${sa} ${Math.abs(sd)}</span>
                    <span style="color:var(--text-dim);font-size:0.75rem;margin-left:6px;">score &nbsp;${prev.average_score} → ${curr.average_score}</span>
                </div>
                <div>
                    <span style="color:${ic};font-size:1.3rem;font-weight:800;">${ia}${id}</span>
                    <span style="color:var(--text-dim);font-size:0.75rem;margin-left:6px;">issues &nbsp;${prev.issues} → ${curr.issues}</span>
                </div>
                <div style="color:var(--text-dim);font-size:0.7rem;margin-left:auto;">
                    ${prev.date ? prev.date.replace('T',' ') : ''} → ${curr.date ? curr.date.replace('T',' ') : ''}
                </div>
            </div>
            ${bpSection}
        </div>`;
}

function renderIssueCategoryDonut() {
    const counts = {};
    MANIFEST.forEach(e => (e.issueList || []).forEach(i => {
        counts[i.type] = (counts[i.type] || 0) + 1;
    }));
    const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const total   = entries.reduce((s, [, v]) => s + v, 0);
    if (!total) return '';

    const cx = 50, cy = 50, r = 38;
    let angle = -Math.PI / 2;
    const segments = entries.map(([type, count]) => {
        const sweep = (count / total) * Math.PI * 2;
        const x1 = cx + r * Math.cos(angle), y1 = cy + r * Math.sin(angle);
        angle += sweep;
        const x2 = cx + r * Math.cos(angle), y2 = cy + r * Math.sin(angle);
        const large = sweep > Math.PI ? 1 : 0;
        const color = ISSUE_COLORS[type] || '#64748b';
        return `<path d="M${cx},${cy} L${x1.toFixed(1)},${y1.toFixed(1)} A${r},${r} 0 ${large} 1 ${x2.toFixed(1)},${y2.toFixed(1)} Z"
            fill="${color}" opacity="0.85" title="${type}: ${count}"/>`;
    }).join('');

    const legend = entries.map(([type, count]) => {
        const color = ISSUE_COLORS[type] || '#64748b';
        return `<div style="display:flex;align-items:center;gap:6px;font-size:0.68rem;margin-bottom:5px;">
            <span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:${color};flex-shrink:0;"></span>
            <span style="color:var(--text-dim);flex:1;">${esc(type)}</span>
            <span style="font-weight:700;">${count}</span>
        </div>`;
    }).join('');

    return `<div style="display:flex;align-items:center;gap:16px;">
        <svg width="100" height="100" viewBox="0 0 100 100" style="flex-shrink:0;">${segments}</svg>
        <div style="flex:1;">${legend}</div>
    </div>`;
}

function renderIssueTrends() {
    const history = window.__SCAN_HISTORY__ || [];
    if (history.length < 2) return '';

    const typeSet = new Set();
    history.forEach(e => Object.keys(e.issueTypes || {}).forEach(t => typeSet.add(t)));
    if (!typeSet.size) return '';

    const types = Array.from(typeSet).sort();
    const miniSpark = (seriesData, color) => {
        const W = 100, H = 28, pad = 3;
        const max = Math.max(...seriesData, 1);
        const pts = seriesData.map((v, i) => {
            const x = pad + (i / Math.max(seriesData.length - 1, 1)) * (W - pad * 2);
            const y = H - pad - (v / max) * (H - pad * 2);
            return `${x.toFixed(1)},${y.toFixed(1)}`;
        }).join(' ');
        const last = seriesData[seriesData.length - 1];
        return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" style="overflow:visible;">
            <polyline points="${pts}" fill="none" stroke="${color}" stroke-width="1.5"
                stroke-linejoin="round" stroke-linecap="round" opacity="0.8"/>
        </svg><span style="font-size:0.75rem;font-weight:800;color:${color};margin-left:6px;">${last}</span>`;
    };

    const rows = types.map(type => {
        const series = history.map(e => (e.issueTypes || {})[type] || 0);
        const color = ISSUE_COLORS[type] || '#94a3b8';
        const trend = series[series.length - 1] - series[series.length - 2];
        const trendStr = trend > 0 ? `<span style="color:var(--color-error);font-size:0.65rem;margin-left:4px;">+${trend}</span>`
                       : trend < 0 ? `<span style="color:#22c55e;font-size:0.65rem;margin-left:4px;">${trend}</span>` : '';
        return `<div style="display:flex;align-items:center;gap:16px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.04);">
            <span style="width:130px;font-size:0.72rem;font-weight:700;color:${color};flex-shrink:0;">${type}${trendStr}</span>
            <div style="display:flex;align-items:center;">${miniSpark(series, color)}</div>
        </div>`;
    }).join('');

    return `
        <div class="card" style="margin-bottom:40px;">
            <h3 style="margin-bottom:16px;font-weight:800;text-transform:uppercase;font-size:0.9rem;
                letter-spacing:1px;color:var(--text-dim);">Issue Trends</h3>
            <div style="font-size:0.65rem;color:#64748b;margin-bottom:12px;">Count per issue type across ${history.length} scans</div>
            ${rows}
        </div>`;
}

function renderArchitectureMetrics() {
    if (!MANIFEST.length) return '';
    const withFanIn = MANIFEST.filter(e => (e.fanIn || 0) > 0);
    const mostCoupled = withFanIn.reduce((best, e) => (!best || e.fanIn > best.fanIn) ? e : best, null);
    const deepest = MANIFEST.reduce((best, e) => (!best || (e.maxDepth || 0) > (best.maxDepth || 0)) ? e : best, null);
    const totalCalls = MANIFEST.reduce((s, e) => s + (e.fanOut || 0), 0);

    const boxStyle = 'flex:1;min-width:140px;padding:16px;background:var(--bg-1);border:1px solid var(--border-light);border-radius:8px;';
    const numStyle = 'font-size:1.4rem;font-weight:900;';
    const labelStyle = 'font-size:0.65rem;font-weight:800;text-transform:uppercase;letter-spacing:1px;color:var(--text-dim);margin-top:4px;';
    const subStyle = 'font-size:0.7rem;margin-top:4px;';

    const mostReferencedBox = mostCoupled ? `
        <div style="${boxStyle}">
            <div style="${numStyle}color:#3b82f6;">${mostCoupled.fanIn}</div>
            <div style="${labelStyle}">Most Referenced</div>
            <div style="${subStyle}">
                <span onclick="selectBP('${mostCoupled.name}','${mostCoupled.path}',null)"
                    style="cursor:pointer;color:#3b82f6;text-decoration:underline;font-weight:700;">${esc(mostCoupled.name)}</span>
            </div>
        </div>` : '';

    const deepestBox = deepest && (deepest.maxDepth || 0) > 0 ? `
        <div style="${boxStyle}">
            <div style="${numStyle}color:#f97316;">${deepest.maxDepth}</div>
            <div style="${labelStyle}">Deepest Execution</div>
            <div style="${subStyle}">
                <span onclick="selectBP('${deepest.name}','${deepest.path}',null)"
                    style="cursor:pointer;color:#f97316;text-decoration:underline;font-weight:700;">${esc(deepest.name)}</span>
            </div>
        </div>` : '';

    return `
        <div class="card" style="margin-bottom:40px;">
            <h3 style="margin-bottom:20px;font-weight:800;text-transform:uppercase;font-size:0.9rem;letter-spacing:1px;color:var(--text-dim);">Architecture Metrics</h3>
            <div style="display:flex;gap:12px;flex-wrap:wrap;">
                <div onclick="switchHomeTab('depmap')" style="${boxStyle}cursor:pointer;">
                    <div style="${numStyle}color:#a78bfa;">${totalCalls}</div>
                    <div style="${labelStyle}">Total Cross-BP Calls</div>
                </div>
                ${mostReferencedBox}
                ${deepestBox}
            </div>
        </div>`;
}
