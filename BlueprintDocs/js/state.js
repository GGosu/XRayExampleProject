// © 2026 Yaroslav Temper. All rights reserved.
// =============================================================================
// state.js — Global variables, constants, and mermaid init
// =============================================================================

const PROJECT_NAME = window.__PROJECT_NAME__ || '';
let MANIFEST    = [];
let ASSET_CACHE = {};
let currentFilter = 'all';
let viewMode      = 'flat';

// Modal State
let modalScale = 1;
let isDragging = false;
let startX, startY, translateX = 0, translateY = 0;

let currentIssueIdx = -1;
let currentBPName   = null;
let currentBPData   = null;
let currentBPIssues = [];

let gKeyPending = false;

let sidebarSort  = 'alpha';
let graphLayouts = {};

const QUICK_FIXES = {
    'Dead Code':           'Delete unreachable nodes, or connect them to an entry point (e.g. Event BeginPlay).',
    'Unhandled Cast':      'Connect the CastFailed exec pin if failure needs handling (fallback logic, error log). Safe to leave empty for non-critical casts.',
    'Unused Variable':     'Either reference this variable in your graph or delete it. Consider making it a local variable if only one function needs it.',
    'Unused Function':     'Call this function from your event graph or another function, or delete it if it is no longer needed.',
    'Write-only Variable': 'The variable is set but its value is never used. Either read it somewhere in the graph, or delete it.',
    'Read-only Variable':  'The variable is always its default value — it is never assigned at runtime. Set it in Begin Play or an event, or replace usages with a literal.',
    'Cyclomatic Complexity': 'Break this function into smaller named functions. Aim for cyclomatic complexity ≤ 5 — extract branches and loops into their own graphs.',
    'Disabled Nodes':      'Delete disabled nodes if no longer needed. If keeping them, re-enable and wire them correctly, or add a comment node explaining why they are disabled.',
    'Memory Risk':         'Cache the result in a local variable instead of calling GetAllActorsOfClass repeatedly. Consider using a dedicated manager component.',
    'Performance':         'Avoid expensive operations inside Event Tick. Move them to Begin Play, event-driven callbacks, or throttle with a timer.',
    'Bool Naming':         "Rename the variable to start with a lowercase 'b' followed by the description in PascalCase (e.g. bIsAlive, bHasWeapon).",
    'Broken Node':         'Right-click the node and select "Refresh Node" to fix orphaned pins. If the referenced function is missing, re-add the dependency or delete the node.',
};

function initMermaid() {
    if (window.mermaid) {
        mermaid.initialize({
            startOnLoad: false, theme: 'dark', securityLevel: 'loose',
            maxTextSize: 9999999,
            maxEdges: 9999999,
            flowchart: { useMaxWidth: true, htmlLabels: true, curve: 'basis', maxEdges: 9999999 }
        });
    }
}
