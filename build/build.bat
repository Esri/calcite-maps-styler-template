echo off

echo ########## BUILD START TIME: %date% - %time% ##########

SET TEMPLATES_ROOT=..
SET BUILD_OUTPUT=%TEMPLATES_ROOT%\buildOutput

rmdir /S /Q %BUILD_OUTPUT%
mkdir %BUILD_OUTPUT%

REM xcopy apparently cannot create directories automatically
mkdir %BUILD_OUTPUT%\3DScene
mkdir %BUILD_OUTPUT%\3DViz
mkdir %BUILD_OUTPUT%\Compare
mkdir %BUILD_OUTPUT%\CompareAnalysis
mkdir %BUILD_OUTPUT%\Compare3d
mkdir %BUILD_OUTPUT%\Compare\Configure
mkdir %BUILD_OUTPUT%\Compare\Multiviewer
mkdir %BUILD_OUTPUT%\Compare\Search
mkdir %BUILD_OUTPUT%\Compare\SideBySideViewer_Configure
mkdir %BUILD_OUTPUT%\Compare\storytelling_compare
mkdir %BUILD_OUTPUT%\Compare\storytelling_sidepanel
mkdir %BUILD_OUTPUT%\Compare\storytelling_tabbed
mkdir %BUILD_OUTPUT%\CompareMaps
mkdir %BUILD_OUTPUT%\CrowdsourceReporter
mkdir %BUILD_OUTPUT%\CrowdsourceManager
mkdir %BUILD_OUTPUT%\CrowdsourcePolling
mkdir %BUILD_OUTPUT%\Edit
mkdir %BUILD_OUTPUT%\Editor
mkdir %BUILD_OUTPUT%\Editor\Chrome
mkdir %BUILD_OUTPUT%\ElevationsProfile
mkdir %BUILD_OUTPUT%\Elevations
mkdir %BUILD_OUTPUT%\Embed
mkdir %BUILD_OUTPUT%\Filter
mkdir %BUILD_OUTPUT%\GeoForm
mkdir %BUILD_OUTPUT%\HeaderFooter
mkdir %BUILD_OUTPUT%\HeaderFooter\Chrome
mkdir %BUILD_OUTPUT%\HeaderFooter\pavement
mkdir %BUILD_OUTPUT%\HeaderFooter\seaside
mkdir %BUILD_OUTPUT%\HeaderFooter\main
mkdir %BUILD_OUTPUT%\Identify
mkdir %BUILD_OUTPUT%\Identify\Chrome
mkdir %BUILD_OUTPUT%\Identify\Pavement
mkdir %BUILD_OUTPUT%\Identify\Seaside
mkdir %BUILD_OUTPUT%\InteractiveFilter
mkdir %BUILD_OUTPUT%\Legend
mkdir %BUILD_OUTPUT%\Legend\Chrome
mkdir %BUILD_OUTPUT%\Legend\pavement
mkdir %BUILD_OUTPUT%\Legend\seaside
mkdir %BUILD_OUTPUT%\Legend\main
mkdir %BUILD_OUTPUT%\LocalPerspective
mkdir %BUILD_OUTPUT%\Directions
mkdir %BUILD_OUTPUT%\MapCarousel
mkdir %BUILD_OUTPUT%\MapTour
mkdir %BUILD_OUTPUT%\MapTools
mkdir %BUILD_OUTPUT%\MapAndAppGallery
mkdir %BUILD_OUTPUT%\Minimalist
mkdir %BUILD_OUTPUT%\OnePane
mkdir %BUILD_OUTPUT%\OnePane\azuretime
mkdir %BUILD_OUTPUT%\OnePane\azuretwitter
mkdir %BUILD_OUTPUT%\OnePane\basicviewer
mkdir %BUILD_OUTPUT%\OnePane\main
mkdir %BUILD_OUTPUT%\OnePane\contemporary_blue
mkdir %BUILD_OUTPUT%\OnePane\contemporary_green
mkdir %BUILD_OUTPUT%\OnePane\Chrome
mkdir %BUILD_OUTPUT%\OnePane\pavement
mkdir %BUILD_OUTPUT%\OnePane\seaside
mkdir %BUILD_OUTPUT%\OnePane\splash
mkdir %BUILD_OUTPUT%\OnePane\storytelling_basic
mkdir %BUILD_OUTPUT%\OnePane\swipe
mkdir %BUILD_OUTPUT%\OnePane\twittertimeline
mkdir %BUILD_OUTPUT%\OnePane\gpx
mkdir %BUILD_OUTPUT%\Panels
mkdir %BUILD_OUTPUT%\PanelsLegend
mkdir %BUILD_OUTPUT%\PublicGallery
mkdir %BUILD_OUTPUT%\Profile
mkdir %BUILD_OUTPUT%\ServiceLookup
mkdir %BUILD_OUTPUT%\InformationLookup
mkdir %BUILD_OUTPUT%\SimpleMapViewer
mkdir %BUILD_OUTPUT%\SimpleViewer
mkdir %BUILD_OUTPUT%\SocialMedia
mkdir %BUILD_OUTPUT%\Solutions
mkdir %BUILD_OUTPUT%\StorytellingSwipe
mkdir %BUILD_OUTPUT%\StorytellingTextLegend
mkdir %BUILD_OUTPUT%\Time
mkdir %BUILD_OUTPUT%\ThumbnailGenerator
mkdir %BUILD_OUTPUT%\TwoPane
mkdir %BUILD_OUTPUT%\TwoPane\main
mkdir %BUILD_OUTPUT%\TwoPane\Chrome
mkdir %BUILD_OUTPUT%\TwoPane\pavement
mkdir %BUILD_OUTPUT%\TwoPane\seaside
mkdir %BUILD_OUTPUT%\PublicInformation
mkdir %BUILD_OUTPUT%\ImpactSummary
mkdir %BUILD_OUTPUT%\SummaryViewer
mkdir %BUILD_OUTPUT%\MapJournal
mkdir %BUILD_OUTPUT%\MapSeries
mkdir %BUILD_OUTPUT%\StoryMapBasic
mkdir %BUILD_OUTPUT%\StorytellingBasic
mkdir %BUILD_OUTPUT%\Viewer
mkdir %BUILD_OUTPUT%\MyStories


xcopy %TEMPLATES_ROOT%\archive\CompareConfigure                 %BUILD_OUTPUT%\Compare\Configure                    /E /Y
xcopy %TEMPLATES_ROOT%\archive\CompareMultiviewer               %BUILD_OUTPUT%\Compare\Multiviewer                  /E /Y
xcopy %TEMPLATES_ROOT%\archive\CompareSearch                    %BUILD_OUTPUT%\Compare\Search                       /E /Y
xcopy %TEMPLATES_ROOT%\archive\CompareSideBySideViewer          %BUILD_OUTPUT%\Compare\SideBySideViewer_Configure   /E /Y
xcopy %TEMPLATES_ROOT%\archive\CompareStorytellingSidepanel     %BUILD_OUTPUT%\Compare\storytelling_sidepanel       /E /Y
xcopy %TEMPLATES_ROOT%\archive\CompareStorytellingTabbed        %BUILD_OUTPUT%\Compare\storytelling_tabbed          /E /Y
xcopy %TEMPLATES_ROOT%\archive\Compare                          %BUILD_OUTPUT%\CompareMaps                          /E /Y
xcopy %TEMPLATES_ROOT%\3DScene                                  %BUILD_OUTPUT%\3DScene                              /E /Y
xcopy %TEMPLATES_ROOT%\3DViz                                    %BUILD_OUTPUT%\3DViz                                /E /Y
xcopy %TEMPLATES_ROOT%\CompareAnalysis                          %BUILD_OUTPUT%\CompareAnalysis                      /E /Y
xcopy %TEMPLATES_ROOT%\Compare3d                                %BUILD_OUTPUT%\Compare3d                            /E /Y
xcopy %TEMPLATES_ROOT%\ConstituentEngagement                    %BUILD_OUTPUT%\CrowdsourceReporter                  /E /Y
xcopy %TEMPLATES_ROOT%\ConstituentEngagementConsole             %BUILD_OUTPUT%\CrowdsourceManager                   /E /Y
xcopy %TEMPLATES_ROOT%\CrowdSourcePolling                       %BUILD_OUTPUT%\CrowdsourcePolling                   /E /Y
xcopy %TEMPLATES_ROOT%\archive\StorytellingCompare              %BUILD_OUTPUT%\Compare\storytelling_compare         /E /Y
xcopy %TEMPLATES_ROOT%\archive\EditorChrome                     %BUILD_OUTPUT%\Editor\Chrome                        /E /Y
xcopy %TEMPLATES_ROOT%\archive\Edit                             %BUILD_OUTPUT%\Edit                                 /E /Y
xcopy %TEMPLATES_ROOT%\Editor                                   %BUILD_OUTPUT%\Editor                               /E /Y
xcopy %TEMPLATES_ROOT%\archive\ElevationsProfile                %BUILD_OUTPUT%\ElevationsProfile                    /E /Y
xcopy %TEMPLATES_ROOT%\archive\Elevations                       %BUILD_OUTPUT%\Elevations                           /E /Y
xcopy %TEMPLATES_ROOT%\Embed                                    %BUILD_OUTPUT%\Embed                                /E /Y
xcopy %TEMPLATES_ROOT%\Embed                                    %BUILD_OUTPUT%\Minimalist                           /E /Y
xcopy %TEMPLATES_ROOT%\archive\Filter                           %BUILD_OUTPUT%\Filter                               /E /Y
xcopy %TEMPLATES_ROOT%\GeoForm                                  %BUILD_OUTPUT%\GeoForm                              /E /Y
xcopy %TEMPLATES_ROOT%\archive\HeaderFooterChrome               %BUILD_OUTPUT%\HeaderFooter\Chrome                  /E /Y
xcopy %TEMPLATES_ROOT%\archive\HeaderFooterPavement             %BUILD_OUTPUT%\HeaderFooter\pavement                /E /Y
xcopy %TEMPLATES_ROOT%\archive\HeaderFooterSeaside              %BUILD_OUTPUT%\HeaderFooter\seaside                 /E /Y
xcopy %TEMPLATES_ROOT%\archive\HeaderFooter                     %BUILD_OUTPUT%\HeaderFooter\main                    /E /Y
xcopy %TEMPLATES_ROOT%\InteractiveFilter                        %BUILD_OUTPUT%\InteractiveFilter                    /E /Y
xcopy %TEMPLATES_ROOT%\archive\IdentifyChrome                   %BUILD_OUTPUT%\Identify\Chrome                      /E /Y
xcopy %TEMPLATES_ROOT%\archive\IdentifyPavement                 %BUILD_OUTPUT%\Identify\Pavement                    /E /Y
xcopy %TEMPLATES_ROOT%\archive\IdentifySeaside                  %BUILD_OUTPUT%\Identify\Seaside                     /E /Y
xcopy %TEMPLATES_ROOT%\archive\LegendChrome                     %BUILD_OUTPUT%\Legend\Chrome                        /E /Y
xcopy %TEMPLATES_ROOT%\archive\LegendPavement                   %BUILD_OUTPUT%\Legend\pavement                      /E /Y
xcopy %TEMPLATES_ROOT%\archive\LegendSeaside                    %BUILD_OUTPUT%\Legend\seaside                       /E /Y
xcopy %TEMPLATES_ROOT%\archive\Legend                           %BUILD_OUTPUT%\Legend\main                          /E /Y
xcopy %TEMPLATES_ROOT%\LocalPerspective                         %BUILD_OUTPUT%\LocalPerspective                     /E /Y
xcopy %TEMPLATES_ROOT%\MapCarousel                              %BUILD_OUTPUT%\MapCarousel                          /E /Y
xcopy %TEMPLATES_ROOT%\MapTour                                  %BUILD_OUTPUT%\MapTour                              /E /Y
xcopy %TEMPLATES_ROOT%\MapAndAppGallery                         %BUILD_OUTPUT%\MapAndAppGallery                     /E /Y
xcopy %TEMPLATES_ROOT%\archive\OnePane                          %BUILD_OUTPUT%\OnePane\main                         /E /Y
xcopy %TEMPLATES_ROOT%\archive\Panels                           %BUILD_OUTPUT%\Panels                               /E /Y
xcopy %TEMPLATES_ROOT%\archive\Panels                           %BUILD_OUTPUT%\PanelsLegend                         /E /Y
xcopy %TEMPLATES_ROOT%\archive\Panels\config\onepane.js         %BUILD_OUTPUT%\Panels\config\defaults.js            /E /Y
xcopy %TEMPLATES_ROOT%\archive\Panels\config\legend.js          %BUILD_OUTPUT%\PanelsLegend\config\defaults.js      /E /Y
xcopy %TEMPLATES_ROOT%\archive\BasicViewer                      %BUILD_OUTPUT%\OnePane\basicviewer                  /E /Y
xcopy %TEMPLATES_ROOT%\archive\TimeAware                        %BUILD_OUTPUT%\OnePane\azuretime                    /E /Y
xcopy %TEMPLATES_ROOT%\archive\ChromeTwitter                    %BUILD_OUTPUT%\OnePane\azuretwitter                 /E /Y
xcopy %TEMPLATES_ROOT%\archive\OnePaneBlue                      %BUILD_OUTPUT%\OnePane\contemporary_blue            /E /Y
xcopy %TEMPLATES_ROOT%\archive\OnePaneGreen                     %BUILD_OUTPUT%\OnePane\contemporary_green           /E /Y
xcopy %TEMPLATES_ROOT%\archive\OnePaneChrome                    %BUILD_OUTPUT%\OnePane\Chrome                       /E /Y
xcopy %TEMPLATES_ROOT%\archive\OnePanePavement                  %BUILD_OUTPUT%\OnePane\pavement                     /E /Y
xcopy %TEMPLATES_ROOT%\archive\OnePaneSeaside                   %BUILD_OUTPUT%\OnePane\seaside                      /E /Y
xcopy %TEMPLATES_ROOT%\archive\Splash                           %BUILD_OUTPUT%\OnePane\splash                       /E /Y
xcopy %TEMPLATES_ROOT%\archive\StorytellingBasic                %BUILD_OUTPUT%\OnePane\storytelling_basic           /E /Y
xcopy %TEMPLATES_ROOT%\archive\TwitterTimeline                  %BUILD_OUTPUT%\OnePane\twittertimeline              /E /Y
xcopy %TEMPLATES_ROOT%\archive\Swipe                            %BUILD_OUTPUT%\OnePane\swipe                        /E /Y
xcopy %TEMPLATES_ROOT%\archive\GPX                              %BUILD_OUTPUT%\OnePane\gpx                          /E /Y
xcopy %TEMPLATES_ROOT%\PublicGallery                            %BUILD_OUTPUT%\PublicGallery                        /E /Y
xcopy %TEMPLATES_ROOT%\Profile                                  %BUILD_OUTPUT%\Profile                              /E /Y
xcopy %TEMPLATES_ROOT%\ServiceLookup                            %BUILD_OUTPUT%\ServiceLookup                        /E /Y
xcopy %TEMPLATES_ROOT%\ServiceLookup                            %BUILD_OUTPUT%\InformationLookup                    /E /Y
xcopy %TEMPLATES_ROOT%\archive\SimpleMapViewer                  %BUILD_OUTPUT%\SimpleMapViewer                      /E /Y
xcopy %TEMPLATES_ROOT%\SimpleViewer                             %BUILD_OUTPUT%\SimpleViewer                         /E /Y
xcopy %TEMPLATES_ROOT%\archive\SocialMedia                      %BUILD_OUTPUT%\SocialMedia                          /E /Y
xcopy %TEMPLATES_ROOT%\Solutions                                %BUILD_OUTPUT%\Solutions                            /E /Y
xcopy %TEMPLATES_ROOT%\StorytellingSwipe                        %BUILD_OUTPUT%\StorytellingSwipe                    /E /Y
xcopy %TEMPLATES_ROOT%\StorytellingBasic                        %BUILD_OUTPUT%\StoryMapBasic                        /E /Y
xcopy %TEMPLATES_ROOT%\archive\StorytellingTextLegend           %BUILD_OUTPUT%\StorytellingTextLegend               /E /Y
xcopy %TEMPLATES_ROOT%\archive\TwoPane                          %BUILD_OUTPUT%\TwoPane\main                         /E /Y
xcopy %TEMPLATES_ROOT%\archive\TwoPaneChrome                    %BUILD_OUTPUT%\TwoPane\Chrome                       /E /Y
xcopy %TEMPLATES_ROOT%\archive\TwoPanePavement                  %BUILD_OUTPUT%\TwoPane\pavement                     /E /Y
xcopy %TEMPLATES_ROOT%\archive\TwoPaneSeaside                   %BUILD_OUTPUT%\TwoPane\seaside                      /E /Y
xcopy %TEMPLATES_ROOT%\PublicInformation                        %BUILD_OUTPUT%\PublicInformation                    /E /Y
xcopy %TEMPLATES_ROOT%\ImpactSummary                            %BUILD_OUTPUT%\ImpactSummary                        /E /Y
xcopy %TEMPLATES_ROOT%\SummaryViewer                            %BUILD_OUTPUT%\SummaryViewer                        /E /Y
xcopy %TEMPLATES_ROOT%\MapTools                                 %BUILD_OUTPUT%\MapTools                             /E /Y
xcopy %TEMPLATES_ROOT%\MapJournal                               %BUILD_OUTPUT%\MapJournal                           /E /Y
xcopy %TEMPLATES_ROOT%\MapSeries                                %BUILD_OUTPUT%\MapSeries                            /E /Y
xcopy %TEMPLATES_ROOT%\Viewer                                   %BUILD_OUTPUT%\Viewer                               /E /Y
xcopy %TEMPLATES_ROOT%\Locator                                  %BUILD_OUTPUT%\Directions                           /E /Y
xcopy %TEMPLATES_ROOT%\Time                                     %BUILD_OUTPUT%\Time                                 /E /Y
xcopy %TEMPLATES_ROOT%\ThumbnailGenerator                       %BUILD_OUTPUT%\ThumbnailGenerator                   /E /Y
xcopy %TEMPLATES_ROOT%\MyStories                                %BUILD_OUTPUT%\MyStories                            /E /Y



REM Finally copy assorted files in the root directory
copy /Y %TEMPLATES_ROOT%\*.*  %BUILD_OUTPUT%

REM Copy the common config to the template config directory
copy /Y %TEMPLATES_ROOT%\commonConfig.js                          %BUILD_OUTPUT%\LocalPerspective\config\commonConfig.js
copy /Y %TEMPLATES_ROOT%\Embed\config\minimalDefault.js           %BUILD_OUTPUT%\Minimalist\config\defaults.js    

echo ########## BUILD END TIME: %date% - %time% ##########

:END
