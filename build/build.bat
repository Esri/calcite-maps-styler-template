echo off

echo ########## BUILD START TIME: %date% - %time% ##########

SET TEMPLATES_ROOT=..
SET BUILD_OUTPUT=%TEMPLATES_ROOT%\buildOutput

rmdir /S /Q %BUILD_OUTPUT%
mkdir %BUILD_OUTPUT%

REM xcopy apparently cannot create directories automatically
mkdir %BUILD_OUTPUT%\Compare
mkdir %BUILD_OUTPUT%\Compare\Configure
mkdir %BUILD_OUTPUT%\Compare\Multiviewer  
mkdir %BUILD_OUTPUT%\Compare\Search
mkdir %BUILD_OUTPUT%\Compare\SideBySideViewer_Configure
mkdir %BUILD_OUTPUT%\Compare\storytelling_compare
mkdir %BUILD_OUTPUT%\Compare\storytelling_sidepanel  
mkdir %BUILD_OUTPUT%\Compare\storytelling_tabbed  
mkdir %BUILD_OUTPUT%\Edit
mkdir %BUILD_OUTPUT%\Editor
mkdir %BUILD_OUTPUT%\Editor\Chrome
mkdir %BUILD_OUTPUT%\ElevationsProfile
mkdir %BUILD_OUTPUT%\Elevations
mkdir %BUILD_OUTPUT%\Filter
mkdir %BUILD_OUTPUT%\HeaderFooter
mkdir %BUILD_OUTPUT%\HeaderFooter\Chrome                
mkdir %BUILD_OUTPUT%\HeaderFooter\pavement              
mkdir %BUILD_OUTPUT%\HeaderFooter\seaside                   
mkdir %BUILD_OUTPUT%\HeaderFooter\main                  
mkdir %BUILD_OUTPUT%\Identify
mkdir %BUILD_OUTPUT%\Identify\Chrome                        
mkdir %BUILD_OUTPUT%\Identify\Pavement                  
mkdir %BUILD_OUTPUT%\Identify\Seaside                       
mkdir %BUILD_OUTPUT%\Legend
mkdir %BUILD_OUTPUT%\Legend\Chrome                      
mkdir %BUILD_OUTPUT%\Legend\pavement                        
mkdir %BUILD_OUTPUT%\Legend\seaside                     
mkdir %BUILD_OUTPUT%\Legend\main                        
mkdir %BUILD_OUTPUT%\MapCarousel
mkdir %BUILD_OUTPUT%\MapTour
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
mkdir %BUILD_OUTPUT%\ServiceLookup
mkdir %BUILD_OUTPUT%\SimpleMapViewer
mkdir %BUILD_OUTPUT%\SocialMedia
mkdir %BUILD_OUTPUT%\Solutions
mkdir %BUILD_OUTPUT%\StorytellingSwipe
mkdir %BUILD_OUTPUT%\StorytellingTextLegend
mkdir %BUILD_OUTPUT%\TwoPane
mkdir %BUILD_OUTPUT%\TwoPane\main                       
mkdir %BUILD_OUTPUT%\TwoPane\Chrome                         
mkdir %BUILD_OUTPUT%\TwoPane\pavement                   
mkdir %BUILD_OUTPUT%\TwoPane\seaside                        
mkdir %BUILD_OUTPUT%\UrbanObservatory
mkdir %BUILD_OUTPUT%\PublicInformation
mkdir %BUILD_OUTPUT%\DataSummary
mkdir %BUILD_OUTPUT%\SummaryViewer


xcopy %TEMPLATES_ROOT%\archive\CompareConfigure                 %BUILD_OUTPUT%\Compare\Configure                    /E /Y
xcopy %TEMPLATES_ROOT%\archive\CompareMultiviewer               %BUILD_OUTPUT%\Compare\Multiviewer                  /E /Y
xcopy %TEMPLATES_ROOT%\archive\CompareSearch                    %BUILD_OUTPUT%\Compare\Search                       /E /Y
xcopy %TEMPLATES_ROOT%\archive\CompareSideBySideViewer          %BUILD_OUTPUT%\Compare\SideBySideViewer_Configure   /E /Y
xcopy %TEMPLATES_ROOT%\archive\CompareStorytellingSidepanel     %BUILD_OUTPUT%\Compare\storytelling_sidepanel       /E /Y
xcopy %TEMPLATES_ROOT%\archive\CompareStorytellingTabbed        %BUILD_OUTPUT%\Compare\storytelling_tabbed          /E /Y
xcopy %TEMPLATES_ROOT%\StorytellingCompare                      %BUILD_OUTPUT%\Compare\storytelling_compare         /E /Y
xcopy %TEMPLATES_ROOT%\archive\EditorChrome                     %BUILD_OUTPUT%\Editor\Chrome                        /E /Y
xcopy %TEMPLATES_ROOT%\Edit                                     %BUILD_OUTPUT%\Edit                                 /E /Y
xcopy %TEMPLATES_ROOT%\archive\ElevationsProfile                %BUILD_OUTPUT%\ElevationsProfile                    /E /Y
xcopy %TEMPLATES_ROOT%\Elevations                               %BUILD_OUTPUT%\Elevations                           /E /Y
xcopy %TEMPLATES_ROOT%\Filter                                   %BUILD_OUTPUT%\Filter                               /E /Y
xcopy %TEMPLATES_ROOT%\archive\HeaderFooterChrome               %BUILD_OUTPUT%\HeaderFooter\Chrome                  /E /Y
xcopy %TEMPLATES_ROOT%\archive\HeaderFooterPavement             %BUILD_OUTPUT%\HeaderFooter\pavement                /E /Y
xcopy %TEMPLATES_ROOT%\archive\HeaderFooterSeaside              %BUILD_OUTPUT%\HeaderFooter\seaside                 /E /Y
xcopy %TEMPLATES_ROOT%\archive\HeaderFooter                     %BUILD_OUTPUT%\HeaderFooter\main                    /E /Y
xcopy %TEMPLATES_ROOT%\archive\IdentifyChrome                   %BUILD_OUTPUT%\Identify\Chrome                      /E /Y
xcopy %TEMPLATES_ROOT%\archive\IdentifyPavement                 %BUILD_OUTPUT%\Identify\Pavement                    /E /Y
xcopy %TEMPLATES_ROOT%\archive\IdentifySeaside                  %BUILD_OUTPUT%\Identify\Seaside                     /E /Y
xcopy %TEMPLATES_ROOT%\archive\LegendChrome                     %BUILD_OUTPUT%\Legend\Chrome                        /E /Y
xcopy %TEMPLATES_ROOT%\archive\LegendPavement                   %BUILD_OUTPUT%\Legend\pavement                      /E /Y
xcopy %TEMPLATES_ROOT%\archive\LegendSeaside                    %BUILD_OUTPUT%\Legend\seaside                       /E /Y
xcopy %TEMPLATES_ROOT%\archive\Legend                           %BUILD_OUTPUT%\Legend\main                          /E /Y
xcopy %TEMPLATES_ROOT%\MapCarousel                              %BUILD_OUTPUT%\MapCarousel                          /E /Y
xcopy %TEMPLATES_ROOT%\MapTour                                  %BUILD_OUTPUT%\MapTour                              /E /Y
xcopy %TEMPLATES_ROOT%\archive\OnePane                          %BUILD_OUTPUT%\OnePane\main                         /E /Y
xcopy %TEMPLATES_ROOT%\Panels                                   %BUILD_OUTPUT%\Panels                               /E /Y
xcopy %TEMPLATES_ROOT%\Panels                                   %BUILD_OUTPUT%\PanelsLegend                         /E /Y
xcopy %TEMPLATES_ROOT%\Panels\config\onepane.js                 %BUILD_OUTPUT%\Panels\config\defaults.js            /E /Y
xcopy %TEMPLATES_ROOT%\Panels\config\legend.js                  %BUILD_OUTPUT%\PanelsLegend\config\defaults.js      /E /Y
xcopy %TEMPLATES_ROOT%\BasicViewer                              %BUILD_OUTPUT%\OnePane\basicviewer                  /E /Y
xcopy %TEMPLATES_ROOT%\TimeAware                                %BUILD_OUTPUT%\OnePane\azuretime                    /E /Y
xcopy %TEMPLATES_ROOT%\ChromeTwitter                            %BUILD_OUTPUT%\OnePane\azuretwitter                 /E /Y
xcopy %TEMPLATES_ROOT%\archive\OnePaneBlue                      %BUILD_OUTPUT%\OnePane\contemporary_blue            /E /Y
xcopy %TEMPLATES_ROOT%\archive\OnePaneGreen                     %BUILD_OUTPUT%\OnePane\contemporary_green           /E /Y
xcopy %TEMPLATES_ROOT%\archive\OnePaneChrome                    %BUILD_OUTPUT%\OnePane\Chrome                       /E /Y
xcopy %TEMPLATES_ROOT%\archive\OnePanePavement                  %BUILD_OUTPUT%\OnePane\pavement                     /E /Y
xcopy %TEMPLATES_ROOT%\archive\OnePaneSeaside                   %BUILD_OUTPUT%\OnePane\seaside                      /E /Y
xcopy %TEMPLATES_ROOT%\archive\Splash                           %BUILD_OUTPUT%\OnePane\splash                       /E /Y
xcopy %TEMPLATES_ROOT%\StorytellingBasic                        %BUILD_OUTPUT%\OnePane\storytelling_basic           /E /Y
xcopy %TEMPLATES_ROOT%\archive\TwitterTimeline                  %BUILD_OUTPUT%\OnePane\twittertimeline              /E /Y
xcopy %TEMPLATES_ROOT%\archive\Swipe                            %BUILD_OUTPUT%\OnePane\swipe                        /E /Y
xcopy %TEMPLATES_ROOT%\archive\GPX                              %BUILD_OUTPUT%\OnePane\gpx                          /E /Y
xcopy %TEMPLATES_ROOT%\PublicGallery                            %BUILD_OUTPUT%\PublicGallery                        /E /Y
xcopy %TEMPLATES_ROOT%\ServiceLookup                            %BUILD_OUTPUT%\ServiceLookup                        /E /Y
xcopy %TEMPLATES_ROOT%\SimpleMapViewer                          %BUILD_OUTPUT%\SimpleMapViewer                      /E /Y
xcopy %TEMPLATES_ROOT%\SocialMedia                              %BUILD_OUTPUT%\SocialMedia                          /E /Y
xcopy %TEMPLATES_ROOT%\Solutions                                %BUILD_OUTPUT%\Solutions                            /E /Y
xcopy %TEMPLATES_ROOT%\StorytellingSwipe                        %BUILD_OUTPUT%\StorytellingSwipe                    /E /Y
xcopy %TEMPLATES_ROOT%\StorytellingTextLegend                   %BUILD_OUTPUT%\StorytellingTextLegend               /E /Y
xcopy %TEMPLATES_ROOT%\archive\TwoPane                          %BUILD_OUTPUT%\TwoPane\main                         /E /Y
xcopy %TEMPLATES_ROOT%\archive\TwoPaneChrome                    %BUILD_OUTPUT%\TwoPane\Chrome                       /E /Y
xcopy %TEMPLATES_ROOT%\archive\TwoPanePavement                  %BUILD_OUTPUT%\TwoPane\pavement                     /E /Y
xcopy %TEMPLATES_ROOT%\archive\TwoPaneSeaside                   %BUILD_OUTPUT%\TwoPane\seaside                      /E /Y
xcopy %TEMPLATES_ROOT%\UrbanObservatory                         %BUILD_OUTPUT%\UrbanObservatory                     /E /Y
xcopy %TEMPLATES_ROOT%\PublicInformation                        %BUILD_OUTPUT%\PublicInformation                    /E /Y
xcopy %TEMPLATES_ROOT%\DataSummary                              %BUILD_OUTPUT%\DataSummary                          /E /Y
xcopy %TEMPLATES_ROOT%\SummaryViewer                            %BUILD_OUTPUT%\SummaryViewer                        /E /Y

REM Finally copy assorted files in the root directory
copy /Y %TEMPLATES_ROOT%\*.*  %BUILD_OUTPUT%

echo ########## BUILD END TIME: %date% - %time% ##########

:END
