@echo off
REM Double-click this to rebuild the PDF from index.html.
REM First time only, run these two once in this folder:
REM     npm install playwright
REM     npx playwright install chromium

cd /d "%~dp0"
node build-pdf.js
if errorlevel 1 (
  echo.
  echo Build failed. If this is the first run, open a terminal here and run:
  echo     npm install playwright
  echo     npx playwright install chromium
)
echo.
pause
