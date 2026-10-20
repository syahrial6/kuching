@echo off
cd /d "d:\VS Code\kuching"
start "next-server" /min node node_modules\next\dist\bin\next start -p 3111
