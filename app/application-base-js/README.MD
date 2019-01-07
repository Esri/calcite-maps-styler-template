# ApplicationBase

A class designed to handle common tasks of configurable ArcGIS Web Applications.

**See [Configurable App Examples](https://github.com/Esri/configurable-app-examples-4x-js) using this class**.

## Purpose

The purpose of this ApplicationBase is to handle fetching and managing ArcGIS Online information used in configurable applications. The ApplicationBase queries and maintains:

- Portal information
- User information
- Item data (webscenes, webmaps, group information, group items)
- Configured application information
- URL parameters

The ApplicationBase will handle fetching this information, store it, and perform setup when necessary.

# API

This is the API for the ApplicationBase class. `ApplicationBase.js`

## Constructor

`new ApplicationBase(ApplicationConfig: ApplicationConfig, ApplicationBaseConfig: ApplicationBaseConfig)`

## Constructor Options

See [ApplicationConfig](#applicationconfig) and [ApplicationBaseConfig](#applicationbaseconfig) for more information.

### ApplicationConfig

|property|description|type|default|
|---|---|---|---|
|appid|Application ID for querying application configuration|string|""|
|group|Group ID for querying a portal group|string or string[]|""|
|webscene|WebScene ID for querying a webscene|string or string[]|"19faa71a3bf6468cae35b4fce9393a7d"|
|webmap|WebMap ID for querying a webmap|string or string[]|""|
|title|Title of the application|string|""|
|portalUrl|URL to the ArcGIS Portal|string|"https://www.arcgis.com"|
|oauthappid|oAuth authentication ID|string|""|
|proxyUrl|Enter the url to the proxy if needed by the application. See the [Using the proxy page](http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html) help topic for details.|string|""|
|units|Application measurement units|string|""|
|helperServices|Object containing URLs to various helper services|[HelperServices](https://developers.arcgis.com/javascript/latest/api-reference/esri-portal-Portal.html#helperServices)|null|

Example:

```
{
  "appid": "",
  "group": "",
  "title": "",
  "webmap": "default",
  "webscene": "",
  "portalUrl": "https://www.arcgis.com",
  "oauthappid": "",
  "proxyUrl": "",
  "units": "",
 }
```

### ApplicationBaseConfig

|property|description|type|default|
|---|---|---|---|
|webscene.default|The default id to query when not set|string|""|
|webscene.fetch|When true the application will query for a webscene|Boolean|true|
|webscene.fetchMultiple|When true the application will query for multiple webscenes if necessary|Boolean|true|
|webmap.default|The default id to query when not set|string|""|
|webmap.fetch|When true the application will query for a webmap|Boolean|false|
|webmap.fetchMultiple|When true the application will query for multiple webmaps if necessary|Boolean|true|
|group.fetchInfo|When true the application will query for a group's information|Boolean|false|
|group.fetchItems|When true the application will query for a group's items|Boolean|false|
|group.itemParams|Defines query paramaters for fetching group items|[itemParams](#itemparams)|{}|
|group.fetchMultiple|When true the application will query for multiple groups if necessary|Boolean|true|
|portal.fetch|When true the application will query arcgis.com for default settings for helper services, units etc. If you want to use custom settings for units or any of the helper services set this to false then enter default values for any items you need using the helper services and units properties.|Boolean|true|
|urlParams|Defines which URL parameters should be captured and stored into the config for use within the application|String[]|See below|
|environment.webTierSecurity|Support sending credentials with AJAX requests to specific domains. This will allow editing of feature services secured with web-tier authentication|Boolean|false|
|environment.isEsri|Most users will not need to modify this value. For Esri hosting environments only. Will automatically create a `portalUrl` and `proxyUrl` for the application. Only set this is to true if the app is going to be stored on Esri's hosting servers. If you are using your own custom hosted portal, set the `portalUrl` in instead of setting this to true.|   Boolean|false|


Example:

```
{
  "environment": {
    "isEsri": false,
    "webTierSecurity": false
  },
  "localStorage": {
    "fetch": true
  },
  "group": {
    "default": "908dd46e749d4565a17d2b646ace7b1a",
    "fetchInfo": false,
    "fetchItems": false,
    "itemParams": {
      "sortField": "modified",
      "sortOrder": "desc",
      "num": 9,
      "start": 0
    }
  },
  "portal": {
    "fetch": true
  },
  "urlParams": [
    "appid",
    "center",
    "components",
    "embed",
    "extent",
    "find",
    "group",
    "level",
    "marker",
    "oauthappid",
    "portalUrl",
    "viewpoint",
    "webmap",
    "webscene"
  ],
  "webmap": {
    "default": "1970c1995b8f44749f4b9b6e81b5ba45",
    "fetch": true
  },
  "webscene": {
    "default": "e8f078ba0c1546b6a6e0727f877742a5",
    "fetch": false
  }
}
```

#### itemParams

See [PortalQueryParams](https://developers.arcgis.com/javascript//latest/api-reference/esri-portal-PortalQueryParams.html)

Example:

```js
{
  "query": "group:\"{groupid}\" AND -type:\"Code Attachment\"",
  "sortField": "modified",
  "sortOrder": "desc",
  "num": 9,
  "start": 0
}
```

## Properties

|property|description|type|readonly|
|---|---|---|---|
|config|Config created|[ApplicationConfig](#applicationconfig)|true|
|direction|Language direction|string|true|
|locale|Locale string|string|true|
|portal|`Portal` created by ApplicationBase|[Portal](https://developers.arcgis.com/javascript//latest/api-reference/esri-portal-Portal.html)|true|
|results|ApplicationBase query results|[ApplicationBaseResults](#applicationbaseresults)|true|
|settings|Config created|[ApplicationBaseConfig](#applicationbaseconfig)|true|
|units|Appropriate units of measurement|string|true|


### ApplicationBaseResult

|property|description|type|
|---|---|---|
|error|The error returned from the query|Error|
|value|The value returned from the query|any|
|promise|The query promise|IPromise&lt;any&gt;|

### ApplicationBaseResults

|property|description|type|
|---|---|---|
|applicationItem?|The application item result|[ApplicationBaseResult](#applicationbaseresult)|
|applicationData?|The application data result|[ApplicationBaseResult](#applicationbaseresult)|
|groupInfos?|The restults from querying group infos|[ApplicationBaseResult](#applicationbaseresult)[]|
|groupItems?|The results from querying group items|[ApplicationBaseResult](#applicationbaseresult)[]|
|localStorage?|The local storage configuration result|[ApplicationConfig](#applicationconfig)|
|portal?|The Portal instance result|[Portal](https://developers.arcgis.com/javascript//latest/api-reference/esri-portal-Portal.html)|
|urlParams?|The results from URL parameters|[ApplicationConfig](#applicationconfig)|
|webMapItems?|The restults from querying webmap items|[ApplicationBaseResult](#applicationbaseresult)[]|
|webSceneItems?|The restults from querying webscene items|[ApplicationBaseResult](#applicationbaseresult)[]|

## Methods

### load(): IPromise&lt;ApplicationBase&gt;

Loads the requested ApplicationBase resources and returns the class once complete.

### queryGroupItems(groupId: string, itemParams: [itemParams](#itemparams), portal?: [Portal](https://developers.arcgis.com/javascript//latest/api-reference/esri-portal-Portal.html)) : IPromise&lt;any&gt;

Query a group by parameters. `ApplicationBase.queryGroupItems("myid", {}, myPortal)`.

## Support Modules

There are helper modules and utilities you can use that contain common application functionality. See the following documentation:

- [domHelper](support/domHelper.MD)
- [itemUtils](support/itemUtils.MD)
- [urlUtils](support/urlUtils.MD)

## Requirements

- [TypeScript](https://www.typescriptlang.org/)
  - [TypeScript Setup](https://developers.arcgis.com/javascript//latest/guide/typescript-setup/index.html)
- [NPM](https://www.npmjs.com/)

## Resources

* [Configurable App Examples](https://github.com/Esri/configurable-app-examples-4x-js) using this class.
* [Community](https://developers.arcgis.com/en/javascript/jshelp/community.html)
* [ArcGIS for JavaScript API Resource Center](https://js.arcgis.com)
* [ArcGIS Blog](http://blogs.esri.com/esri/arcgis/)
* [twitter@esri](http://twitter.com/esri)

## Issues

Find a bug or want to request a new feature?  Please let us know by submitting an issue.

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

## Licensing

Copyright 2017 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [license.txt](https://raw.github.com/Esri/application-base-js/master/license.txt) file.

