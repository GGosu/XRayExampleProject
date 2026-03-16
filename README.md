# Blueprint X-Ray — Example Project

This is an example Unreal Engine 5 project for the **Blueprint X-Ray** plugin.

It contains intentionally flawed Blueprints so you can see exactly what the plugin detects, a pre-generated sample report you can open right now, and ready-to-use headless scan scripts for CI/CD integration.

---

## Preview the Sample Report

No setup required — just open the pre-generated report in your browser:

```
BlueprintDocs/index.html
```

This is real output produced by Blueprint X-Ray on the Blueprints in this project. Browse the dashboard, check per-Blueprint scores, and explore detected issues.

---

## Prerequisites

- **Unreal Engine 5.0** or later
- **Blueprint X-Ray** plugin (soon available on the Unreal Engine Marketplace (FAB.com))

### Installing the Plugin

**Option A — Engine-level install (recommended)**

Purchase and install Blueprint X-Ray from the Marketplace. The plugin will be available in all your UE5 projects automatically.

**Option B — Project-level install**

Copy the `BlueprintXRay` plugin folder into this project's `Plugins/` directory:

```
XRayExampleProject/
└── Plugins/
    └── BlueprintXRay/   ← paste here
```

Then open `XRayExampleProject.uproject` in Unreal Editor and confirm the plugin is enabled under **Edit → Plugins → Blueprint X-Ray**.

---

## Running a Headless Scan

Headless mode runs the analysis from the command line without opening the editor UI. The result is an HTML report and an exit code — making it easy to integrate into CI/CD pipelines.

### Step 1 — Set Your Engine Path

Open the `.bat` file you want to use and update the `ENGINE_PATH` variable to point to your `UnrealEditor-Cmd.exe`:

```bat
set "ENGINE_PATH=C:\Program Files\Epic Games\UE_5.0\Engine\Binaries\Win64\UnrealEditor-Cmd.exe"
```

### Step 2 — Run a Scan

**Option A: Default settings**

```
HeadlessScan_default.bat
```

Uses the plugin's built-in default profile and quality gate.
Output report: `BlueprintDocs_Headless_Default\index.html`

**Option B: Custom profile + gate**

```
HeadlessScan_myProfile_myGate.bat
```

Uses `myProfile.json` and `myGate.json` from the project root.
Output report: `BlueprintDocs_Headless_myProfile_myGate\index.html`

### Exit Codes

| Code | Meaning |
|------|---------|
| `0`  | Quality Gate passed — all conditions met |
| `1`  | Quality Gate failed, or no Blueprints found |

---

## Customizing the Rule Profile

Profiles are configured directly inside Unreal Editor through the Blueprint X-Ray panel. Once you've set up your rules, use the **Save Profile** button to export the configuration as a `.json` file.

The included `myProfile.json` is an example of such a saved profile — pass it to the headless script via the `-profile=` argument (already wired up in `HeadlessScan_myProfile_myGate.bat`).

---

## Customizing the Quality Gate

Quality Gates are configured directly inside Unreal Editor through the Blueprint X-Ray panel. Use the **Save Gate** button to export your gate as a `.json` file.

The included `myGate.json` is an example of such a saved gate — it requires zero errors, an average project score ≥ 85, and every individual Blueprint scoring at least 70. Pass it to the headless script via the `-gate=` argument (already wired up in `HeadlessScan_myProfile_myGate.bat`).

---

## CI/CD Integration

The scripts return a standard exit code, so they plug directly into any CI system.

---

## Project Structure

```
XRayExampleProject/
├── BlueprintDocs/                        # Pre-generated sample report (open index.html)
├── Content/BP/                           # Example Blueprints with intentional issues
├── myProfile.json                        # Example rule profile
├── myGate.json                           # Example quality gate
├── HeadlessScan_default.bat              # Headless scan with default settings
└── HeadlessScan_myProfile_myGate.bat     # Headless scan with custom profile + gate
```
