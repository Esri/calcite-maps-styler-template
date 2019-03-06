# Calcite Maps - Styler

Styler is a [new ArcGIS configurable application](http://server.arcgis.com/en/portal/latest/use/application-templates.htm) that can be used to easily create, style and share modern 2D and 3D map apps. Using simple [styler parameters](#configurationParameters) you can customize everything from the title, menus and text, to the overall color, theme and layout. The app is hosted on [ArcGIS Online](http://www.arcgis.com/home/item.html?id=7217645840b8465ab03d6e3efbe21d1d) and [GitHub](https://esri.github.io/calcite-maps-styler-template/index.html?webmap=default) so you can 1) style maps **on-the-fly** just by adding [URL parameters](#configurationParameters) or 2) if you have an existing web map or web scene, you can style (more advanced) apps **step-by-step** by configuring them with the [new Styler template](http://www.arcgis.com/home/item.html?id=7217645840b8465ab03d6e3efbe21d1d). Once styled, share your app at any time just by sharing the URL - no programming required.

Styler is built with the [new ArcGIS API for JavaScript v4](https://developers.arcgis.com/javascript), [Calcite Maps](https://github.com/Esri/calcite-maps) and [Bootstrap](http://getbootstrap.com). The application is fully responsive and supports many features of the new JavaScript v4 API such as loading 2D web maps and 3D web scenes, displaying image and vector tile basemaps, showing legend and layers, positioning widgets on the view, and searching and finding places. The app can be accessed in [ArcGIS Online](http://www.arcgis.com/home/item.html?id=7217645840b8465ab03d6e3efbe21d1d) and [ArcGIS Enterprise](http://www.esri.com/arcgis/products/arcgis-enterprise/Overview) or downloaded and hosted locally.

<table>
 <tr>
 <td><a href="#example1"><img src="./example-1.png?raw=true"></a></td>
 <td><a href="#example2"><img src="./example-2.png?raw=true"></a></td>
 <td><a href="#example3"><img src="./example-3.png?raw=true"></a></td>
 <td><a href="#example4"><img src="./example-4.png?raw=true"></a></td>
<tr>
</table>

## How to style and share a map

1. Open the default [2D map](http://esri.github.io/calcite-maps-styler-template/index.html?webmap=default) or [3D scene](http://esri.github.io/calcite-maps-styler-template/index.html?webscene=default) and zoom to or search for a place. e.g. "New York City"

 ```
 https://esri.github.io/calcite-maps-styler-template/index.html?webmap=default
 https://esri.github.io/calcite-maps-styler-template/index.html?webscene=default
 ```

2. Click the `Main Menu` > `Share`, add URL [style parameters](#configurationParameters) and hit `Enter` to style your map. e.g.
 
 ```
 https://esri.github.io/calcite-maps-styler-template/index.html?webmap=default
 &title=New York City at Night
 &bgcolor=dark-blue
 &basemap=streets-night-vector
 &lat=40.72461
 &lon=-73.99893
 &zoom=12
 ```

3. Now copy and paste the URL to share your map with others.

## Examples

### <a id="example1"></a>Example 1: [Create a 2D map to find parks in New York](https://esri.github.io/calcite-maps-styler-template/index.html?title=Explore&nbsp;New&nbsp;York&abouttext=Click&nbsp;and&nbsp;hold&nbsp;on&nbsp;the&nbsp;map&nbsp;to&nbsp;find&nbsp;interesting&nbsp;places&lat=40.71862&lon=-73.99343&zoom=13&basemap=streets-navigation-vector&activepanel=about&places=parks)

```
https://esri.github.io/calcite-maps-styler-template/index.html?webmap=default
  &title=Explore New York
  &abouttext=Click + hold on the map to find interesting places
  &lat=40.71862
  &lon=-73.99343
  &zoom=13
  &basemap=streets-navigation-vector
  &activepanel=about
  &places=parks
```

![example-1.png](./example-1.png?raw=true)

### <a id="example2"></a>Example 2: [Load an existing webmap and style with colors](https://esri.github.io/calcite-maps-styler-template/index.html?webmap=742e3546ff1e4e0bba3360ae5004d0e1&bgcolor=dark-blue&opacity=.75&widgettheme=light&theme=custom&layout=bottom-medium&aboutsummary=true&menubookmarks=true&activepanel=bookmarks)

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

![example-2.png](./example-2.png?raw=true)

### <a id="example3"></a>Example 3: [Create a 3D to search for a city and manually position widgets](https://esri.github.io/calcite-maps-styler-template/index.html?webscene=default&title=Big&nbsp;Bear&nbsp;Lake&nbsp;California&subtitle=A&nbsp;great&nbsp;vacation&nbsp;getaway&bgcolor=rgb(140,94,42)&theme=light&zoomin=bottom-left&home=hide&navtoggle=bottom-left&compass=bottom-left&search=Big&nbsp;Bear&nbsp;,CA&heading=174&tilt=80&scale=14739&abouttext=Come&nbsp;explore&nbsp;the&nbsp;mountains&nbsp;in&nbsp;SoCal!)

```
https://esri.github.io/calcite-maps-styler-template/index.html?webscene=default
  &title=Big Bear Lake, California
  &subtitle=A great vacation getaway
  &abouttext=Come explore the mountains in SoCal!
  &bgcolor=rgb(140, 94, 42)
  &theme=light
  &zoomin=bottom-left
  &home=hide
  &navtoggle=bottom-left
  &compass=bottom-left
  &search=Big Bear,CA
  &heading=174
  &tilt=80
  &scale=14739
```

![example-3.png](./example-3.png?raw=true)

### <a id="example4"></a>Example 4: [Load an existing scene and style the layout and theme](https://esri.github.io/calcite-maps-styler-template/index.html?webscene=128ba9498cca447ab6ec356b84fee879&bgcolor=transparent&widgettheme=dark&widgetslayout=top-right&panelslayout=left&layout=top-small&lat=43.72115&lon=9.82826&activepanel=about&aboutdescription=true&zoom=2&nextbasemap=satellite)

```
https://esri.github.io/calcite-maps-styler-template/index.html?webscene=128ba9498cca447ab6ec356b84fee879
  &title=Airflow%20Globe
  &subtitle=Air Traffic Routes
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
  &nextbasemap=satellite
```

![example-4.png](./example-4.png?raw=true)

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

## <a id="configurationParameters"></a>Style Parameters

Here are the parameters you can configure in a URL or in a JSON file.

|Parameter|Description|Type|Example|
|---|---|---|---|
|webmap|Webmap ID for webmap|String|`default`, `e1653fe614c04b6aa4efba5ba7b56d05`|
|webscene|Webscene ID for webscene|String|`default`, `bdc09d6c8ef8492783ebe2c572950931`|
|Map| | | |
|lat|Latitude to move the map to on start-up|Number|`45`|
|lon|Longitude to move the map to on start-up|Number|`-120`|
|x|X coordinate to move the map to on start-up|Number|`-50000000`|
|y|Y coordinate to move the map to on start-up|Number|`50000000`|
|wkid|Spatial reference value to support x/y values on start-up|Number|`103500`|
|zoom|Level of Detail (LOD) to zoom to on start-up |Number|`1`-`20`|
|scale|The scale the map displays on start-up. This prevails over zoom.|Number|`1`-`100000000`|
|rotation|Rotation of the 2D view on start-up|Number|`0`-`360`|
|tilt|Angle of the 3D view on start-up|Number|`0`-`90`|
|heading|Heading of the 3D view on start-up|Number|`0`-`360`|
|basemap|Basemap to use for the map on start-up. See ArcGIS JS API reference|String|`streets`, `satellite`, `hybrid`, `topo`, `gray`, `dark-gray`, `oceans`, `national-geographic`, `terrain`, `osm`, `dark-gray-vector`, `gray-vector`, `streets-vector`, `streets-night-vector`, `streets-relief-vector`, `streets-navigation-vector`|
|App| | | |
|title|Title of the application|String|`New York`|
|subtitle|Subtitle of the application|String|`A great place to visit`|
|abouttext|Information about your application|String|`Map of the Big Apple`|
|aboutsummary|Includes item summary (snippet) in about text|Boolean|`true`|
|aboutdescription|Includes item description in about text|Boolean|`false`|
|theme|The base color theme used to style the app. "custom" applies your color to the entire app.|String|`light`, `dark`, `custom`|
|bgcolor|The base background color for navbar and panels. Use Calcite colors or RGB/RGBA colors.|String|`light`, `dark`, `blue`..., `rgb(24,24,24)`, `rgba(24,24,24,.5)`|
|textcolor|The base text color for navbar and panels|String|`light`, `dark`|
|opacity|The opacity to use for navbar and panels|String|`0`-`1`|
|widgettheme|The base color for the widgets|String|`light`, `dark`|
|layout|The position of the navbar|String|`top-small`, `top-medium`, `top-medium`, `bottom-small`, `bottom-medium`, `bottom-large`|
|panelslayout|The position of the panels|String|`left`, `right`|
|Panels| | | |
|widgetslayout|The position set for all widgets|String|`top-left`, `top-right`, `bottom-left`, `bottom-right`|
|menuabout|Show or hide the about menu and panel|Boolean|`true`, `false`|
|menulegend|Show or hide the legend menu and panel|Boolean|`true`, `false`|
|menulayers|Show or hide the layers menu and panel|Boolean|`true`, `false`|
|menubasemaps|Show or hide the basemaps menu and panel|Boolean|`true`, `false`|
|menuslides|Show or hide the slides menu and panel|Boolean|`true`, `false`|
|menubookmarks|Show or hide the bookmarks menu and panel|Boolean|`true`, `false`|
|menushare|Show or hide the share menu and panel|Boolean|`true`, `false`|
|menuprint|Show or hide the print menu and panel|Boolean|`true`, `false`|
|menutogglenav|Show or hide the toggle nav menu and panel|Boolean|`true`, `false`|
|menustyledrawer|Change the style of the main menu to partial or full height|Boolean|`true`, `false`|
|activepanel|Name of the panel to show when app loads|String|`about`, `legend`, `basemaps`, `slides`, `layers`,`print`,`share`|
|Widgets| | | |
|zoomin|Add the zoom widget to the view|String|`show`, `hide`, `top-left`, `top-right`, `bottom-left`, `bottom-right`|
|home|Add the home widget the view|String|`show`, `hide`, `top-left`, `top-right`, `bottom-left`, `bottom-right`|
|locate|Add the locate widget to the view|String|`show`, `hide`, `top-left`, `top-right`, `bottom-left`, `bottom-right`|
|track|Add the track widget to the view|String|`show`, `hide`, `top-left`, `top-right`, `bottom-left`, `bottom-right`|
|search|Add the search widget to the view|String|`show`, `hide`, `top-left`, `top-right`, `bottom-left`, `bottom-right`|
|scalebar|Add the scalebar widget to the view|String|`show`, `hide`, `top-left`, `top-right`, `bottom-left`, `bottom-right`|
|legend|Add the legend to the view|String|`show`, `hide`, `top-left`, `top-right`, `bottom-left`, `bottom-right`|
|basemaptoggle|Add the basemaptoggle widget to the view|String|`show`, `hide`, `top-left`, `top-right`, `bottom-left`, `bottom-right`|
|nextbasemap|Set the next basemap for the basemaptoggle widget|String|`streets`, `satellite`, `hybrid`, `topo`, `gray`, `dark-gray`, `oceans`, `national-geographic`, `terrain`, `osm`, `dark-gray-vector`, `gray-vector`, `streets-vector`, `streets-night-vector`, `streets-relief-vector`, `streets-navigation-vector`|
|popup|Position to dock the popup. See ArcGIS JS API|String|`top-right`, `top-center`, `top-left`, `bottom-right`, `bottom-center`, `bottom-left`|
|mapcoords|Show the map coordinates widget|Boolean|`true`,`false`|
|searchnav|Show the search widget in the navbar|Boolean|`true`, `false`|
|searchtext|Search for location|String| e.g. `Los Angeles`|
|findplaces|Enable long-tap/hold search for restaurants, parks, stores...|Boolean|`true`, `false`|
|places|Search for a category|String| `cities`, `neighborhoods`, `restaurants`, `gas stations`, `stores`, `parks`, `hotels`, `arts and entertainment`, `travel`, `schools`|
|showerrors|Display errors in a window when webmap or webscene have load failures|Boolean|`true`, `false`|

### JSON Example

```js
{
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
  "zoom": "show",
  "home": "show",
  "compass": "show",
  "widgetnavtoggle": "show",
  "locate": "show",
  "track": "hide",
  "search": "hide",
  "basemaptoggle": "show",
  "nextbasemap": "streets",

  "mapcoords": true,
  
  "searchnav": true,

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
