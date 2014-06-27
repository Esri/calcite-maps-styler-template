echo off

echo ########## BUILD START TIME: %date% - %time% ##########

SET TMPLT_ROOT=..
SET TMPLT_SRC=%TMPLT_ROOT%\src
SET DOJO_SRC=..\..\js\dojo
SET JSAPI_SRC=..\..\..\arcgis-js-api\src
SET RELEASE=%DOJO_SRC%\release
SET BUILD_OUTPUT=%TMPLT_ROOT%\buildOutput
SET BUILD_SCRIPTS=%DOJO_SRC%\util\buildscripts

rmdir /S /Q %RELEASE%
rmdir /S /Q %BUILD_OUTPUT%
mkdir %BUILD_OUTPUT%

REM Copy JSAPI source code i.e. "esri" AMD package
SET TEMP_ESRI=%TMPLT_SRC%\js\esri
mkdir %TEMP_ESRI%
xcopy %JSAPI_SRC%\js\esri %TEMP_ESRI% /E /Y

REM ##########
REM Run Build
REM ##########

SET VERSION=1.9.1

REM There are better ways to use custom build profiles without
REM copying them into /util/buildscripts/profiles/
copy %TMPLT_ROOT%\build\template-amd.profile.js   %BUILD_SCRIPTS%\profiles
copy %TMPLT_ROOT%\build\relocate-dojo.profile.js  %BUILD_SCRIPTS%\profiles

cd %BUILD_SCRIPTS%

REM Closure Compiler requires Java 6 or later

java -Xmx1024m -classpath ..\shrinksafe\js.jar;..\shrinksafe\shrinksafe.jar;..\closureCompiler\compiler.jar org.mozilla.javascript.tools.shell.Main ../../dojo/dojo.js baseUrl=../../dojo load=build profile=template-amd profile=relocate-dojo action=release loader=xdomain version=%VERSION% releaseName=js optimize=closure layerOptimize=closure cssOptimize=comments copyTests=false internStrings=true

cd ..\..\..\..\bv_build\build

REM ####################
REM make release folders
REM ####################

REM Copy non-JS files from template source folder to the buildOutput
mkdir %BUILD_OUTPUT%\css
mkdir %BUILD_OUTPUT%\images


xcopy %TMPLT_SRC%\css         %BUILD_OUTPUT%\css /E /Y
xcopy %TMPLT_SRC%\images      %BUILD_OUTPUT%\images /E /Y
copy /Y %TMPLT_SRC%\*.*       %BUILD_OUTPUT%

REM Copy JS files from template source folder to the buildOutput
move /Y %RELEASE%\js          %BUILD_OUTPUT%
xcopy  %TMPLT_SRC%\js\*.*     %BUILD_OUTPUT%\js /E /Y


REM ################################################################################
REM Replace the path in files listed to location.protocol + '//' + [HOSTNAME_AND_PATH_TO_JSAPI]
REM ################################################################################

cscript replacepath.vbs "%BUILD_OUTPUT%\js\dojo\dojo\dojo.js"
cscript replacepath.vbs "%BUILD_OUTPUT%\js\dojo\dojo\dojo.js.uncompressed.js"

REM ##########################################
REM Delete uncompressed files from the build
REM ##########################################

del /S %BUILD_OUTPUT%\js\*.js.uncompressed.js > nul
del /S %BUILD_OUTPUT%\js\*.js.map > nul

REM rmdir /S /Q %TEMP_DIR%

echo ########## BUILD END TIME: %date% - %time% ##########

:END
