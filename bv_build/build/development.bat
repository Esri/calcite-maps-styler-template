echo off


echo off

cd ..\..\arcgis-js-api
git fetch --progress --prune origin
git merge origin/master --ff-only


cd ..\arcgis-portal-app-templates-app\bv_build\build


REM Make sure "arcgis-js-api" repo is already checked out and available
REM in the same folder that contains "arcgis-portal-app-templates-app\bv_build"

xcopy ..\..\arcgis-js-api\src\js\esri ..\src\js\esri /E /Y

:END