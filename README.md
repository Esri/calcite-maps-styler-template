# Calcite Maps Styler

Styler is a new [configurable application](http://server.arcgis.com/en/portal/latest/use/application-templates.htm) that makes it easy to create and share modern-looking, responsive map apps in 2D or 3D. The app is built with the [new ArcGIS API for JavaScript version 4](https://developers.arcgis.com/javascript), [Calcite Maps](https://github.com/Esri/calcite-maps) and [Bootstrap](http://getbootstrap.com). You can create and style maps on-the-fly (with no programming) by specifying URL parameters in a web browser or you can configure and save map apps using the [configurable application](http://www.arcgis.com/home/item.html?id=7217645840b8465ab03d6e3efbe21d1d) with [ArcGIS](http://server.arcgis.com/en/portal/latest/use/application-templates.htm). The [Styler Configuration Parameters](#configurationParameters) let you configure everything from the title, menus and panels, to the UI color, theme and layout, to the location of widgets on the view. The default application and allows you to perform standard mapping operations such as zoom, search, showing/hiding layers and switching basemaps. You can also perform some "bonus" opterations such as finding places (restaurants, parks, gas stations...), scrolling through bookmarks or a slideshow, and sharing the current map view at any time with a URL. 

Styler is super-handy if you just want to create, style and share a map quickly. Start with the default [map](http://esri.github.io/calcite-maps-styler-template/index.html?webmap=default) or [scene](http://esri.github.io/calcite-maps-styler-template/index.html?webscene=default) or pass in your own Web Map or Scene ID and start styling it from there. Give it a try!

## How to style maps

1. Go to the default map or scene.
 - [Default Map](http://esri.github.io/calcite-maps-styler-template/index.html?webmap=default) `https://esri.github.io/calcite-maps-styler-template/index.html?webmap=default`
 - [Default Scene](http://esri.github.io/calcite-maps-styler-template/index.html?webscene=default) `https://esri.github.io/calcite-maps-styler-template/index.html?webscene=default`
2. Search or zoom to a place of interest e.g. "New York City" or "Big Bear, CA" or
3. Use the `Share` menu to create a URL that you can share with others. That's it. Your done!

Now try styling your map further by applying different [parameters](#configurationParameters). See examples below.

###[Default Map + styled title, location, about text and basemap](https://esri.github.io/calcite-maps-styler-template/index.html?webmap=default&title=Explore New%20York%20&abouttext=Click + hold on the map to find interesting places&lat=40.71862&lon=-73.99343&zoom=13&basemap=streets-navigation-vector&activepanel=about)

![demo-2d-nyexplore.png](./demo-2d-nyexplore.png?raw=true)

```
https://esri.github.io/calcite-maps-styler-template/index.html?webmap=default
  &title=Explore New York
  &abouttext=Click + hold on the map to find interesting places
  &lat=40.71862
  &lon=-73.99343
  &zoom=13
  &basemap=streets-navigation-vector
  &activepanel=about
```

###[Web Map + custom colors and theme, bottom layout and bookmark panel](https://esri.github.io/calcite-maps-styler-template/index.html?webmap=742e3546ff1e4e0bba3360ae5004d0e1&bgcolor=dark-blue&opacity=.75&widgettheme=light&theme=custom&layout=bottom-medium&aboutsummary=true&menubookmarks=true&activepanel=bookmarks)

![demo-2d-missing-migrants.png](./demo-2d-missing-migrants.png?raw=true)

```
https://esri.github.io/calcite-maps-styler-template/index.html?webmap=742e3546ff1e4e0bba3360ae5004d0e1
  &bgcolor=dark-blue
  &opacity=.75
  &theme=custom
  &layout=bottom-medium
  &menubookmarks=true
  &aboutsummary=true
  &activepanel=bookmarks
```

###[Default Scene + styled titles, RBG colors, light theme, about text and manual widget positioning](https://esri.github.io/calcite-maps-styler-template/index.html?webscene=default&title=Big%20Bear%20Lake%2C%20California&subtitle=A%20great%20vacation%20get away&bgcolor=rgb(140, 94, 42)&theme=light&widgetzoom=bottom-left&widgethome=hide&widgetnavtoggle=bottom-left&lat=34.24513&lon=-116.89622&heading=174&tilt=80&altitude=2086&scale=14739&&abouttext=&abouttext=Come explore the mountains in SoCal!)

![demo-3d-bigbear.png](./demo-3d-bigbear.png?raw=true)

```
https://esri.github.io/calcite-maps-styler-template/index.html?webscene=default
  &title=BigBearLake, California
  &subtitle=A great vacation getaway
  &abouttext=Come explore the mountains in SoCal!
  &bgcolor=rgb(140, 94, 42)
  &theme=light
  &widgetzoom=bottom-left
  &widgethome=hide
  &widgetnavtoggle=bottom-left
  &lat=34.24513
  &lon=-116.89622
  &heading=174
  &tilt=80
  &altitude=2086
  &scale=14739
```

###[Web Scene + styled transparent colors, dark widgets, theme dark, small top layout, widget layout right, panels left, about with Web Scene description](https://esri.github.io/calcite-maps-styler-template/index.html?webscene=128ba9498cca447ab6ec356b84fee879%20&bgcolor=transparent&widgettheme=dark&widgetslayout=top-right&panelslayout=left&layout=top-small&lat=43.72115&lon=9.82826&activepanel=about&aboutdescription=true&zoom=2)

![demo-3d-airflow.png](./demo-3d-airflow.png?raw=true)

```
https://esri.github.io/calcite-maps-styler-template/index.html?webscene=128ba9498cca447ab6ec356b84fee879
  &title=Airflow%20Globe
  &subtitle=Air%20Traffic%20Routes
  &bgcolor=transparent
  &theme=dark
  &widgettheme=dark
  &layout=top-small
  &widgetslayout=top-right
  &panelslayout=left
  &lat=50.21064
  &lon=15.07372
  &zoom=2
  &activepanel=about
  &aboutdescription=true
```

NOTE: You can pass in any [Web Map](https://doc.arcgis.com/en/arcgis-online/create-maps/make-your-first-map.htm) or [Web Scene](https://doc.arcgis.com/en/arcgis-online/create-maps/make-your-first-scene.htm) ID to the app.

## Features

What can you configure?

- Title/subtitle
- Menus and panels
- About text
- Search
- Widgets and location
- App layout
- App styles and colors
- Map start-up location

What mapping operations can you perform?

- Load web maps and web scenes
- Search for locations and places
- Find places e.g. Parks, Restaurants, Gas Stations…
- Browse bookmarks and slides
- Display legend and layers
- Change basemaps
- Zoom to your location or home
- View coordinates, zoom level, scale, tilt, rotation
- Share your current map view with others

## <a id="configurationParameters"></a>Configuration Parameters

Here are the parameters you can configure in a URL or in a JSON file.

|parameter|description|type|example|
|---|---|---|---|
|appid|Application ID for querying application configuration|String|""|
|webmap|Webmap ID for webmap|String|"default", "e1653fe614c04b6aa4efba5ba7b56d05"|
|webscene|Webscene ID for webscene|String|"default", "bdc09d6c8ef8492783ebe2c572950931"|
|lat|Latitude to move the map to on start-up|Number|45|
|lon|Longitude to move the map to on start-up|Number|-120|
|x|X coordinate to move the map to on start-up|Number|-50000000|
|y|Y coordinate to move the map to on start-up|Number|50000000|
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
|aboutsummary|Includes item summary (snippet) in about text|Boolean|true|
|aboutdescription|Includes item description in about text|Boolean|false|
|theme|The base color theme used to style the app. "custom" applies your color to the entire app.|String|"light", "dark", "custom"|
|bgcolor|The base background color for navbar and panels. Use Calcite colors or RGB/RGBA colors.|String|"light", "dark", "blue"..., "rgb(24,24,24)", "rgba(24,24,24,.5)"|
|textcolor|The base text color for navbar and panels|String|"light", "dark"|
|opacity|The opacity to use for navbar and panels|String|"0-1"|
|widgettheme|The base color for the widgets|String|"light", "dark"|
|layout|The position of the navbar|String|"top-small", "top-medium", "top-medium", "bottom-small", "bottom-medium", "bottom-large"|
|panelslayout|The position of the panels|String|"left", "right"|
|widgetslayout|The position set for all widgets|String|"top-left", "top-right", "bottom-left", "bottom-right"|
|menuXXX|Name of the menus and panels to display (menuabout, menulegend, menulayers, menubasemaps, menuslides, menubookmarks, menutogglenav, menushare)|Boolean|true, false|
|menustyledrawer|The style of the menu|Boolean|true,false|
|dockposition|Position to dock the popup. See ArcGIS JS API|String|"top-right", "top-center", "top-left", "bottom-right", "bottom-center", "bottom-left"|
|widgetXXX|Name of the widget to add to the view (widgetzoom, widgethome, widgetlocate, widgettrack, widgetsearch, widgetbasemaptoggle)|String|"show", "hide", "top-left", "top-right", "bottom-left", "bottom-right"|
|widgetnextbasemap|The name of the next basemap for the toggle. See ArcGIS JS API reference|String|"streets", "satellite..."|
|widgetsearchnav|Show the search widget in the navbar|Boolean|true, false|
|activepanel|Name of the panel to show when app loads|String|"about", "legend", "basemaps", "slides", "layers"|
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

NOTE: See the [Application Boilerplate](http://www.github.com/Esri/application-boilerplate-js/) for more app configuration options.

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