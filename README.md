# Calcite Maps Styler Template

An application template for building 2D and 3D ArcGIS Online configurable applications with the ArcGIS API for JavaScript version 4. The template allows you to change the color, theme, styles and layout of an application on-the-fly. The template is built with [Calcite Maps](https://github.com/Esri/calcite-maps), [Bootstrap](http://getbootstrap.com) and the [Applicaiton Boilerplate](http://www.github.com/Esri/application-boilerplate-js/).

Use the application to configure apps for ArcGIS Online or Portal for ArcGIS or to configure apps dynamically by specifying URL parameters in a browser. 

`Web Map`
[http://esri.github.io/calcite-maps-styler-template/index.html?webmap=2442dfb3b1c2413392c22cee5b74370a](http://esri.github.io/calcite-maps-styler-template/index.html?webmap=2442dfb3b1c2413392c22cee5b74370a)

`Web Scene`
[http://esri.github.io/calcite-maps-styler-template/index.html?webscene=91b46c2b162c48dba264b2190e1dbcff](http://esri.github.io/calcite-maps-styler-template/index.html?webscene=91b46c2b162c48dba264b2190e1dbcff)

NOTE: The application requires a pre-existing [Web Map](https://doc.arcgis.com/en/arcgis-online/create-maps/make-your-first-map.htm) or [Web Scene](https://doc.arcgis.com/en/arcgis-online/create-maps/make-your-first-scene.htm) ID to run. Learn more about creating web maps and web scenes [here](https://doc.arcgis.com/en/arcgis-online/create-maps/create-maps-and-apps.htm).

## Features

*	Use to create ArcGIS Online, Portal for ArcGIS or as a stand-alone applications
*	Style apps with Calcite colors and themes
* Apply custom colors with transparency
* Choose custom layouts
* Customize titles, menus and panels
* Configuration via JSON or or URL parameters

NOTE: Web Maps are only [partially supported](https://developers.arcgis.com/javascript/latest/guide/migrating/index.html#webmap) by the ArcGIS API for Javascript version 4 and some web maps may not load. Re-saving old web maps may help.

[View it live](http://esri.github.io/calcite-maps-styler-template/index.html?webscene=91b46c2b162c48dba264b2190e1dbcff)

![styler.png](./styler.png?raw=true "Styler Template")

## Settings & Configuration

These are the configuration options for the application. `appSettings.json`

|property|description|type|options|
|---|---|---|---|
|appid|Application ID for querying application configuration|String|""|
|webscene|Webscene ID for querying a webscene|String|"19faa71a3bf6468cae35b4fce9393a7d"|
|webmap|Webmap ID for querying a webmap|String|""|
|title|Title of the application|String|""|
|subtitle|Subtitle of the application|String|""|
|abouttext|Information about your application|String|""|
|aboutsummary|Includes item summary (snippet) in about text|Boolean|""|
|aboutdescription|Includes item description in about text|Boolean|""|
|theme|The base color theme used to style the app|String|"light", "dark", "custom"|
|bgcolor|The base background color for navbar and panels|String|"light", "dark", "blue"..., "rgb(24,24,24)", "rgba(24,24,24,.5)"|
|textcolor|The base text color for navbar and panels|String|"light", "dark"|
|opacity|The opacity to use for navbar and panels|String|"0-1"|
|widgettheme|The base color for the widgets|String|"light", "dark"|
|layout|The position of the navbar|String|"top", "top-large", "top-margin", "bottom", "bottom-large", "bottom-margin"|
|panelslayout|The position of the panels|String|"left", "right"|
|widgetslayout|The position set for widgets|String|"top-left", "top-right", "bottom-left", "bottom-right"|
|menuXXX|Name of the menus to display (menuabout, menulegend, menubasemaps, menuslides, menutogglenav)|Boolean|true, false|
|menuStyleDrawer|The style of the menu|Boolean|true,false|
|widgetXXX|Name of the widget to add to the view (widgetzoom, widgethome, widgetlocate, widgettrack, widgetsearch, widgetbasemaptoggle)|Boolean|true, false|
|widgetnextbasemap|The name of the next basemap for the toggle|String|"streets", "satellite..."|
|widgetsearchnav|Show the search widget in the navbar|Boolean|true, false|
|activepanel|Name of the panel to show when app loads|String|"about", "legend", "basemaps", "slides"|

### JSON Example

```js
{
  "webmap": "",
  "webscene": "",

  "title": "",
  "subtitle": "",
  "abouttext": "",
  "aboutsummary": true,
  "aboutdescription": false,

  "theme": "dark",
  "bgcolor": "",
  "textcolor": "",
  "opacity": "1",
  "widgettheme": "",

  "layout": "top",
  "panelslayout": "right",
  "widgetslayout": "topleft",

  "menuabout": true,
  "menulegend": true,
  "menubasemaps": true,
  "menuslides": true,
  "menutogglenav": true,

  "menustyledrawer": false,

  "widgetzoom": true,
  "widgethome": true,
  "widgetcompass": true,
  "widgetlocate": true,
  "widgettrack": false,
  "widgetsearch": false,
  "widgetbasemaptoggle": true,
  "widgetnextbasemap": "streets",
  "widgetsearchnav": true,

  "activepanel": ""
  }
}
```

NOTE: Please see the [Application Boilerplate](http://www.github.com/Esri/application-boilerplate-js/) for more configuration options.

### URL Example

The same JSON parameters can be passed to the application via URL.

```
WebMap
http://esri.github.io/calcite-maps-styler-template/index.html?webscene=e47ea1b15e284af5bc9b6be428de1a84&theme=light&bgcolor=dark-blue&opacity=.75
```

```
WebScene
http://esri.github.io/calcite-maps-styler-template/index.html?webscene=91b46c2b162c48dba264b2190e1dbcff&layout=bottom&activepanel=slides
```

## Setup and Deployment

Please see the [Application Boilerplate](http://www.github.com/Esri/application-boilerplate-js/).

## Resources

* [Creating your first Web Map and Web Scene](https://doc.arcgis.com/en/arcgis-online/create-maps/make-your-first-scene.htm)
* [Writing your first application](https://developers.arcgis.com/en/javascript/jstutorials/intro_firstmap_amd.html)
* [Make your first app](http://doc.arcgis.com/en/arcgis-online/create-maps/make-your-first-app.htm)
* [Create apps from maps](http://doc.arcgis.com/en/arcgis-online/create-maps/create-app-templates.htm)
* [Add configurable parameters to templates](http://doc.arcgis.com/en/arcgis-online/create-maps/configurable-templates.htm)
* [Community](https://developers.arcgis.com/en/javascript/jshelp/community.html)
* [ArcGIS for JavaScript API Resource Center](https://js.arcgis.com)
* [ArcGIS Blog](http://blogs.esri.com/esri/arcgis/)
* [twitter@esri](http://twitter.com/esri)

## Issues

Find a bug or want to request a new feature?  Please let us know by submitting an issue.

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

## Licensing

Copyright 2016 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [license.txt](https://github.com/Esri/calcite-maps-styler-template/blob/master/license.txt) file.

[](Esri Tags: ArcGIS ArcGIS Online Web Application boilerplate template widget Bootstrap Calcite Calcite-Maps Esri JavaScript application)
[](Esri Language: JavaScript)