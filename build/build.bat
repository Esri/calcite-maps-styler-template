echo off

echo ########## BUILD START TIME: %date% - %time% ##########

SET TEMPLATES_ROOT=..
SET BUILD_OUTPUT=%TEMPLATES_ROOT%\buildOutput

rmdir /S /Q %BUILD_OUTPUT%
mkdir %BUILD_OUTPUT%

REM xcopy apparently cannot create directories automatically
mkdir %BUILD_OUTPUT%\arcgismobile
mkdir %BUILD_OUTPUT%\Compare
mkdir %BUILD_OUTPUT%\Edit
mkdir %BUILD_OUTPUT%\Editor
mkdir %BUILD_OUTPUT%\ElevationsProfile
mkdir %BUILD_OUTPUT%\Filter
mkdir %BUILD_OUTPUT%\HeaderFooter
mkdir %BUILD_OUTPUT%\Identify
mkdir %BUILD_OUTPUT%\Legend
mkdir %BUILD_OUTPUT%\MapCarousel
mkdir %BUILD_OUTPUT%\MapTour
mkdir %BUILD_OUTPUT%\OnePane
mkdir %BUILD_OUTPUT%\PublicGallery
mkdir %BUILD_OUTPUT%\SimpleMapViewer
mkdir %BUILD_OUTPUT%\SocialMedia
mkdir %BUILD_OUTPUT%\Solutions
mkdir %BUILD_OUTPUT%\StorytellingSwipe
mkdir %BUILD_OUTPUT%\StorytellingTextLegend
mkdir %BUILD_OUTPUT%\TwoPane
mkdir %BUILD_OUTPUT%\UrbanObservatory

xcopy %TEMPLATES_ROOT%\arcgismobile           %BUILD_OUTPUT%\arcgismobile         /E /Y
xcopy %TEMPLATES_ROOT%\Compare                %BUILD_OUTPUT%\Compare              /E /Y
xcopy %TEMPLATES_ROOT%\Edit                   %BUILD_OUTPUT%\Edit                 /E /Y
xcopy %TEMPLATES_ROOT%\Editor                 %BUILD_OUTPUT%\Editor               /E /Y
xcopy %TEMPLATES_ROOT%\ElevationsProfile      %BUILD_OUTPUT%\ElevationsProfile    /E /Y
xcopy %TEMPLATES_ROOT%\Filter                 %BUILD_OUTPUT%\Filter               /E /Y
xcopy %TEMPLATES_ROOT%\HeaderFooter           %BUILD_OUTPUT%\HeaderFooter         /E /Y
xcopy %TEMPLATES_ROOT%\Identify               %BUILD_OUTPUT%\Identify             /E /Y
xcopy %TEMPLATES_ROOT%\Legend                 %BUILD_OUTPUT%\Legend               /E /Y
xcopy %TEMPLATES_ROOT%\MapCarousel            %BUILD_OUTPUT%\MapCarousel          /E /Y
xcopy %TEMPLATES_ROOT%\MapTour                %BUILD_OUTPUT%\MapTour              /E /Y
xcopy %TEMPLATES_ROOT%\OnePane                %BUILD_OUTPUT%\OnePane              /E /Y
xcopy %TEMPLATES_ROOT%\PublicGallery          %BUILD_OUTPUT%\PublicGallery        /E /Y
xcopy %TEMPLATES_ROOT%\SimpleMapViewer        %BUILD_OUTPUT%\SimpleMapViewer      /E /Y
xcopy %TEMPLATES_ROOT%\SocialMedia            %BUILD_OUTPUT%\SocialMedia          /E /Y
xcopy %TEMPLATES_ROOT%\Solutions              %BUILD_OUTPUT%\Solutions            /E /Y
xcopy %TEMPLATES_ROOT%\StorytellingSwipe      %BUILD_OUTPUT%\StorytellingSwipe    /E /Y
xcopy %TEMPLATES_ROOT%\StorytellingTextLegend %BUILD_OUTPUT%\StorytellingTextLegend   /E /Y
xcopy %TEMPLATES_ROOT%\TwoPane                %BUILD_OUTPUT%\TwoPane              /E /Y
xcopy %TEMPLATES_ROOT%\UrbanObservatory       %BUILD_OUTPUT%\UrbanObservatory     /E /Y

REM Finally copy assorted files in the root directory
copy /Y %TEMPLATES_ROOT%\*.*  %BUILD_OUTPUT%

echo ########## BUILD END TIME: %date% - %time% ##########

:END