@echo off
setlocal

:: --- CONFIGURATION ---
set "PROJECT_FILE=%~dp0XRayExampleProject.uproject"
set "ENGINE_PATH=U:\5_0_3\UE_5.0\Engine\Binaries\Win64\UnrealEditor-Cmd.exe"
set "OUTPUT_DIR=%~dp0BlueprintDocs_Headless_myProfile_myGate"
set "PROFILE_FILE=%~dp0myProfile.json"
set "GATE_FILE=%~dp0myGate.json"

:: --- AUTO-DETECT ENGINE IF NEEDED ---
if not exist "%ENGINE_PATH%" (
    echo [ERROR] Engine not found at %ENGINE_PATH%
    echo Please update the ENGINE_PATH in this .bat file.
    pause
    exit /b 1
)

echo [INFO] Starting Headless Blueprint Analysis...
echo [INFO] Project:  %PROJECT_FILE%
echo [INFO] Output:   %OUTPUT_DIR%
echo [INFO] Profile:  %PROFILE_FILE%
echo [INFO] Gate:     %GATE_FILE%

:: --- RUN COMMANDLET ---
"%ENGINE_PATH%" "%PROJECT_FILE%" -run=BlueprintXRay -output="%OUTPUT_DIR%" -profile="%PROFILE_FILE%" -gate="%GATE_FILE%" -nosplash -nullrhi -nopause -unattended

set SCAN_ERRORLEVEL=%ERRORLEVEL%

if %SCAN_ERRORLEVEL% EQU 0 (
    echo.
    echo [SUCCESS] Analysis complete! Report is in %OUTPUT_DIR%\index.html
) else (
    echo.
    echo [ERROR] Commandlet failed with error code %SCAN_ERRORLEVEL% - Quality Gate may have failed, check %OUTPUT_DIR%\gate_result.js
)

endlocal
pause
exit /b %SCAN_ERRORLEVEL%
