# Calcite Maps Styler Template

An application template for building 2D and 3D ArcGIS Online configurable applications with the ArcGIS API for JavaScript version 4. The template allows you to configure and style the color, theme and layout of the application on-the-fly. The template is built with [Calcite Maps](https://github.com/Esri/calcite-maps), [Bootstrap](http://getbootstrap.com) and the [Applicaiton Boilerplate](http://www.github.com/Esri/application-boilerplate-js/).

You can use the application to 1) create and share maps on-the-fly with just the default app and URL params or 2) configure apps for ArcGIS Online or Portal for ArcGIS by create apps.

`Web Map`
[http://esri.github.io/calcite-maps-styler-template/index.html?webmap=default](http://esri.github.io/calcite-maps-styler-template/index.html?webmap=default)

[http://esri.github.io/calcite-maps-styler-template/index.html?webmap=default&title=Santa%20Monica%20(2D)&bgcolor=dark-blue&theme=custom&lat=34.01945&lon=-118.49119&zoom=12&activepanel=none](http://esri.github.io/calcite-maps-styler-template/index.html?webmap=default&title=Santa%20Monica%20(2D)&bgcolor=dark-blue&theme=custom&lat=34.01945&lon=-118.49119&zoom=12&activepanel=none)

`Web Scene`
[http://esri.github.io/calcite-maps-styler-template/index.html?webscene=default](http://esri.github.io/calcite-maps-styler-template/index.html?webscene=default)

[http://localhost/GitHub/calcite-maps-styler-template/index.html?webscene=default&title=Santa%20Monica%20(3D)&bgcolor=transparent&textcolor=dark&lat=34.03449&lon=-118.50716&zoom=14&activepanel=none&wkid=102100&scale=26409&heading=0&tilt=77&altitude=58](http://localhost/GitHub/calcite-maps-styler-template/index.html?webscene=default&title=Santa%20Monica%20(3D)&bgcolor=transparent&textcolor=dark&lat=34.03449&lon=-118.50716&zoom=14&activepanel=none&wkid=102100&scale=26409&heading=0&tilt=77&altitude=58)

NOTE: You can also pass in your own [Web Map](https://doc.arcgis.com/en/arcgis-online/create-maps/make-your-first-map.htm) or [Web Scene](https://doc.arcgis.com/en/arcgis-online/create-maps/make-your-first-scene.htm) ID to the app. Learn more about creating web maps and web scenes [here](https://doc.arcgis.com/en/arcgis-online/create-maps/create-maps-and-apps.htm).

## Features

*	Use to create ArcGIS Online, Portal for ArcGIS or as a stand-alone configurable applications
*	Style apps with Calcite colors and themes
* Apply custom colors with transparency
* Choose custom layouts
* Customize titles, menus and panels
* Configuration via JSON or or URL parameters

NOTE: Web Maps are only [partially supported](https://developers.arcgis.com/javascript/latest/guide/migrating/index.html#webmap) by the ArcGIS API for Javascript version 4 and some web maps may not load. Re-saving old web maps may help.

[View it live](http://esri.github.io/calcite-maps-styler-template/index.html?webscene=91b46c2b162c48dba264b2190e1dbcff)

![styler.png](./styler.png?raw=true "Styler Template")

## Settings & Configuration

These are the configuration options that you can specify in ArcGIS Online, the `appSettings.json` file or the URL.

|property|description|type|options|
|---|---|---|---|
|appid|Application ID for querying application configuration|String|""|
|webmap|Webmap ID for webmap|String|"default", "e1653fe614c04b6aa4efba5ba7b56d05"|
|webscene|Webscene ID for webscene|String|"default", "bdc09d6c8ef8492783ebe2c572950931"|
|lat|Latitude to move the map to on start-up|Number|45|
|lon|Longitude to move the map to on start-up|Number|-120|
|x|Coordinate to move the map to on start-up|Number|-50000000|
|y|Coordinate to move the map to on start-up|Number|50000000|
|wkid|Spatial reference value to support x/y values on start-up|Number|103500|
|zoom|Level of Detail (LOD) to zoom to on start-up|Number|1-20|
|scale|The scale the map displays on start-up. This prevails over zoom.|Number|1-100000000|
|rotation|Rotation of the 2D view on start-up|Number|0-360|
|tilt|Angle of the 3D view on start-up|Number|0-90|
|heading|Heading of the 3D view on start-up|Number|0-360|
|basemap|Basemap to use for the map on start-up. See ArcGIS JS API reference|String|"streets", "satellite..."|
|title|Title of the application|String|""|
|subtitle|Subtitle of the application|String|""|
|abouttext|Information about your application|String|""|
|aboutsummary|Includes item summary (snippet) in about text|Boolean|""|
|aboutdescription|Includes item description in about text|Boolean|""|
|theme|The base color theme used to style the app|String|"light", "dark", "custom"|
|bgcolor|The base background color for navbar and panels. See Calcite Colors|String|"light", "dark", "blue"..., "rgb(24,24,24)", "rgba(24,24,24,.5)"|
|textcolor|The base text color for navbar and panels|String|"light", "dark"|
|opacity|The opacity to use for navbar and panels|String|"0-1"|
|widgettheme|The base color for the widgets|String|"light", "dark"|
|layout|The position of the navbar|String|"top", "top-large", "top-margin", "bottom", "bottom-large", "bottom-margin"|
|panelslayout|The position of the panels|String|"left", "right"|
|widgetslayout|The position set for widgets|String|"top-left", "top-right", "bottom-left", "bottom-right"|
|menuxxx|Name of the menus and panels to display (menuabout, menulegend, menubasemaps, menuslides, menutogglenav)|Boolean|true, false|
|menustyledrawer|The style of the menu|Boolean|true,false|
|dockposition|Position to dock the popup. See ArcGIS JS API|String|"top-right", "top-center", "top-left", "bottom-right", "bottom-center", "bottom-left"|
|widgetxxx|Name of the widget to add to the view (widgetzoom, widgethome, widgetlocate, widgettrack, widgetsearch, widgetbasemaptoggle)|Boolean|true, false|
|widgetnextbasemap|The name of the next basemap for the toggle. See ArcGIS JS API reference|String|"streets", "satellite..."|
|widgetsearchnav|Show the search widget in the navbar|Boolean|true, false|
|activepanel|Name of the panel to show when app loads|String|"about", "legend", "basemaps", "slides"|
|findplaces|Enable long-tap/hold search for restaurants, parks, stores...|Boolean|true, false|
|showerrors|Display errors in a window when webmap or webscene have load failures|Boolean|true, false|

### JSON Example

```js
{
  "appid": "",
  "group": "",
  "webmap": "e1653fe614c04b6aa4efba5ba7b56d05",
  "webscene": "",

  "title": "",
  "subtitle": "",
  "abouttext": "",
  "aboutsummary": true,
  "aboutdescription": false,

  "theme": "dark",
  "themecustom": false,
  "bgcolor": "",
  "textcolor": "",
  "opacity": "1",
  "widgettheme": "",

  "layout": "top",
  "panelslayout": "",

  "menuabout": true,
  "menulegend": true,
  "menulayers": true,
  "menubasemaps": true,
  "menuslides": true,
  "menushare": true,
  "menutogglenav": true,

  "menustyledrawer": false,

  "dockposition": "top-right",

  "widgetslayout": "top-left",
  "widgetzoom": "show",
  "widgethome": "show",
  "widgetcompass": "show",
  "widgetnavtoggle": "show",
  "widgetlocate": "show",
  "widgettrack": "hide",
  "widgetsearch": "hide",
  "widgetbasemaptoggle": "show",
  "widgetnextbasemap": "streets",

  "widgetcoords": true,
  
  "widgetsearchnav": true,

  "activepanel": "about",

  "findplaces": true,

  "lat": null,
  "lon": null,
  "x": null,
  "y": null,
  "wkid": null,
  "zoom": null,
  "scale": null,
  "rotation": null,
  "heading": null,
  "tilt": null,
  "altitude": null,

  "basemap": "",

  "showerrors": true
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