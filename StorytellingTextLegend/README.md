# text-and-legend-map-storytelling-template-js

This storytelling template enables users to place a webmap into a viewer, and is useful when you need to provide a few more words than just a heading. A side panel provides ample space for a legend and scrollable text.This template also supports multiple webmaps. Users click on a series of tabs to sequentially view the thematic maps. Each map is shown with a text description and map legend. If the user zooms into one map and then switches theme, the new map is automatically shown at a matching scale and extent.

This template is part of the ArcGIS.com template gallery. These templates can be accessed from the ArcGIS.com map viewer Share window or from the Web Application Templates group. When accessed from the map viewer the templates can be published as a hosted application or you can download the template ZIP file to install on your web server.

[View live app here](http://storymaps.esri.com/templates/sidepanel/)

![App](https://raw.github.com/Esri/text-and-legend-map-storytelling-template-js/master/images/storytelling-text-and-legend-map-template-js.png)

## Features
* Supports a single webmap or multiple webmaps with tabs.
* Supports time enabled maps.
* Legend and description can be hidden.

## Instructions

1. [Install the web applciation](#install-the-web-application)
2. [Configure the application](#configure-the-application)
3. [Personalize the application](#personalize-the-application)

#### Install the web application

These instructions assume that you have a Web server like [Internet Information Services(IIS)](http://www.iis.net/) installed and setup on your machine. If you are using another Web server the general installation steps will be the same but you will need to check your Web server's documentation for specific information on deploying and testing the application.

1. Copy the contents of the zip file into your web server's root directory. In IIS, the default location for the web server's root folder is `c:\inetpub\wwwroot`
2. (Optional). If your application edits features in a feature service or generates requests that exceed 2000 characters you may need to setup and use a proxy page. Common situations where you may exceed the URL length are, using complext polygons as input to a task or specifying a spatial reference using well-known text (wkt). View the [Using the proxy page](http://help.arcgis.com/en/webapi/javascript/arcgis/jshelp/#ags_proxy) help topic for details on installing and configuring a proxy page.
3. Test the page using the following URL: http://localhost/[template name]/index.html, where [template name] is the name of the folder where you extracted the zip contents.

#### Configure the application

Now let's configure the application to use a different ArcGIS Online group, title or subtitle.

1. Every map on ArcGIS Online has a unique identifier. To find the map id, navigate to [ArcGIS Online](http://www.arcgis.com), and find the map you want to display. If it is one of your maps, make sure it's shared with everyone (public). View the map details and copy the ID from the URL in the top of your browser. The section you need to copy is bolded in the following URL: arcgis.com/home/webmap/viewer.html?webmap= **5ae9e138a17842688b0b79283a4353f6**.
2. Open the index.html file in a text editor. You can edit this file to set the following application properties:
    - **webmap**: unique identifier for the ArcGIS Online map.
    - **title**: if not specified the ArcGIS.com map's title is used.
    - **subtitle**: if not specified the ArcGIS.com webmap's summary is used.
    - **description**: if not specified the ArcGIS.com webmap's description is used (Note: this will only change if there is only one webmap in the app).
    - **tabTitles**: if multiple webmaps are used, replace the webmaps title in the tabs.
    - **displayDescription**: choose if description is displayed with map.
    - **displayLegend**: choose if legend is displayed with map.
    - **loop**: choose if time enabled maps are used, choose if time animation is repeated.
    - **syncMaps**: choose if multiple maps are synced across scale and location.
    - **bingMapsKey**: if the map uses data from Bing Maps, enter your Bing Maps Key.
3. Save the file then test your application and note that it now displays your application and if specified your custom title and subtitle.

#### Personalize the application

You can personalize your site by adding a custom logo to the application's header next to the map title.

1. First copy your custom logo to the images subdirectory.
2. Open layout.css in a text editor.
3. Find the section of code that has an id of "logoArea" and add the following attribute.

        background:url(../images/yourImage.png) top left no-repeat;

4. Run the application and the custom logo should appear to the left of the title in the application header.

[New to Github? Get started here.](http://htmlpreview.github.com/?https://github.com/Esri/esri.github.com/blob/master/help/esri-getting-to-know-github.html)

## Requirements

* Notepad or HTML editor
* A little background with HTML/CSS/Javascript
* Experience with the [ArcGIS Javascript API](http://links.esri.com/javascript) would help.

## Resources

* [ArcGIS for JavaScript API Resource Center](http://help.arcgis.com/en/webapi/javascript/arcgis/index.html)
* [ArcGIS Blog](http://blogs.esri.com/esri/arcgis/)
* [Esri Storytelling with Maps](http://storymaps.esri.com)

## Issues

Find a bug or want to request a new feature?  Please let us know by submitting an issue.

## Contributing

Anyone and everyone is welcome to contribute.

## Licensing
Copyright 2012 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [license.txt](https://raw.github.com/Esri/text-and-legend-map-storytelling-template-js/master/license.txt) file.

[](Esri Tags: ArcGIS-Online Template Storytelling Tabs Time)
[](Esri Language: JavaScript)
