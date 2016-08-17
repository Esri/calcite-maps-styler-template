@ECHO OFF

SETLOCAL

ECHO --- Update pseudo---
git add .
echo `git add -A && git commit -a -m "Updated Pseudo i18n - @jona7150"` || exit 0


ENDLOCAL