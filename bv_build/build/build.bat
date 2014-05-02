echo off

echo ########## BUILD START TIME: %date% - %time% ##########

SET TMPLT_ROOT=..
SET TMPLT_SRC=%TMPLT_ROOT%\src

SET JSAPI_SRC=..\..\..\arcgis-js-api\src

SET BUILD_OUTPUT=%TMPLT_ROOT%\buildOutput

rmdir /S /Q %BUILD_OUTPUT%
mkdir %BUILD_OUTPUT%

SET TEMP_DIR=%BUILD_OUTPUT%\temp
SET TEMP_ESRI=%TEMP_DIR%\esri
SET TEMP_DOJO=%TEMP_DIR%\dojo
SET TEMP_RELEASE=%TEMP_DIR%\release

mkdir %TEMP_DIR%
mkdir %TEMP_ESRI%
mkdir %TEMP_DOJO%


xcopy %JSAPI_SRC%\js\esri           %TEMP_ESRI% /E /Y
xcopy %TMPLT_SRC%\js\esri          %TEMP_ESRI% /E /Y
xcopy %TMPLT_SRC%\js\dojo          %TEMP_DOJO% /E /Y


REM ##########
REM Run Build
REM ##########

SET BUILD_SCRIPTS=%TEMP_DOJO%\util\buildscripts

SET VERSION=1.9.1

copy %TMPLT_ROOT%\build\template-amd.profile.js   %BUILD_SCRIPTS%\profiles

cd %BUILD_SCRIPTS%

REM Closure Compiler requires Java 6 or later

java -Xmx1024m -classpath ..\shrinksafe\js.jar;..\shrinksafe\shrinksafe.jar;..\closureCompiler\compiler.jar org.mozilla.javascript.tools.shell.Main ../../dojo/dojo.js baseUrl=../../dojo load=build profile=template-amd

cd ..\..\..\..\..\build

REM ####################
REM make release folders
REM ####################
mkdir %BUILD_OUTPUT%\css
mkdir %BUILD_OUTPUT%\images
mkdir %BUILD_OUTPUT%\apl



copy /Y %TMPLT_SRC%\*.*            %BUILD_OUTPUT%

xcopy %TMPLT_SRC%\images           %BUILD_OUTPUT%\images /E /Y

copy /Y %TMPLT_SRC%\*.*            %BUILD_OUTPUT%
xcopy %TMPLT_ROOT%\commonConfig.js %BUILD_OUTPUT%\commmonConfig.js /E /Y
xcopy %TMPLT_SRC%\images 		   %BUILD_OUTPUT%\images /E /Y
xcopy %TMPLT_SRC%\css              %BUILD_OUTPUT%\css /E /Y
xcopy %TMPLT_SRC%\apl    		   %BUILD_OUTPUT%\apl /E /Y

move /Y %TEMP_RELEASE%\js          %BUILD_OUTPUT%
xcopy %TMPLT_SRC%\js     		   %BUILD_OUTPUT%\js /E /Y

REM ################################################################################
REM Replace the path in files listed to location.protocol + '//' + [HOSTNAME_AND_PATH_TO_JSAPI]
REM ################################################################################

cscript replacepath.vbs "%BUILD_OUTPUT%\js\dojo\dojo\dojo.js"
cscript replacepath.vbs "%BUILD_OUTPUT%\js\dojo\dojo\dojo.js.uncompressed.js"

REM ##########################################
REM Delete uncompressed files from the build
REM ##########################################

del /S %BUILD_OUTPUT%\js\*.js.uncompressed.js
REM ###del /S %BUILD_OUTPUT%\js\*.js.map

rmdir /S /Q %TEMP_DIR%

echo ########## BUILD END TIME: %date% - %time% ##########

:END