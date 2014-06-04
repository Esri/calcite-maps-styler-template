/*global */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true,indent:4 */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
        // This file contains various configuration settings for esri template

        // group: Set the Group id for the application
        // appid: ID of application on ArcGIS.com containing your settings for this template
        // applicationName: Set application title
        // applicationIcon: Set application icon path
        // applicationFavicon: Set application Favicon path
        // customLogoUrl: Set custom map logo path
        // itemSearchDefaultValue: Set the default value to search
        // theme: Set the application theme. If blank, default blue theme will be loaded. Supported theme keys are blueTheme, greenTheme and redTheme.
        // showTagCloud: Set this variable to enable or disable tag cloud
        // enableAutoComplete: Set this variable to enable or disable autocomplete on item search
        // tagCloudFontMinValue: Set min value of the tag cloud font,
        // tagCloudFontMaxValue: set the max value of the tag cloud font,
        // tagCloudFontUnits: Set the units for the text in tag cloud. UI will be distorted if font sizes have inappropriate values
        // displaySharingAttribute: If set to true, display sharing attributes ("ALL", "GRP" or "ORG").
        //                          If set to false, sharing attributes ("ALL", "GRP" or "ORG") should not be displayed in item thumbnail
        // useItemPage: If set to true then display Item Info Page
        //              If set to false and item is of type webmap then load the Item
        //              If set to false and item is of type other than webmap then download the Item
        // portalURL: Set the portal URL
        // cityEngineWebSceneURL: Set the URL for CityEngine Web Scene items
        // geometryService: Set the URL for geometry service
        // defaultLayout: Default layout to use. "grid" or "list".
        // sortField: Order to display the group items. Valid fields are:  modified, numViews.
        // sortOrder: Order to sort the group: "asc" or "desc".
        // mapViewer: URL to open the gallery items to. "simple","arcgis".
        // searchString: Performs a default search on the group with the set string.
        // searchType: Performs a default search on the group for the specified item type. Valid fields are valid item types, eg. web map, feature service, map service, etc.
        // showBasemapGallery: Show basemap gallery on map: true or false.
        // showMapSearch: Show textbox for address search on map: true or false
        // showOverviewMap: Show overview on map: true or false.
        // showRatings: Show ratings of items on item details page.
        // showViews: Show ratings of items on item details page.
        // showLicenseInfo: Show Use Constraints on item details page.
        // showAttribution: Show sources on item details page.
        // showComments: Show comments on item details page.
        // portalAPIURL: Specify URL to ArcGIS Portal REST API.
        // basemapGroupTitle: Specify the title of group that contains basemaps.
        // basemapGroupOwner: Specify the user name of owner of the group that contains basemaps.
        // noThumbnail: Specify path to image used to display the thumbnail for a basemap when portal does not provide it.
        // defaultLocatorSymbol: Set the image path for locator symbol. e.g. pushpin.
        // markupSymbolWidth: Set the image width in pixels for locator symbol.
        // markupSymbolHeight: Set the image height in pixels for locator symbol.
        // zoomLevel: Following zoom level will be set for the map upon searching an address
        // locatorDefaultAddress: Set the default address to search.
        // Please do not copy paste the comments while publishing the web mapping application template on AGOL
 {
    "configurationSettings": [
        {
            "category": "<b>General Settings</b>",
            "fields": [
                {
                    "type": "group",
                    "label": "Select a group"
                },
                {
                    "type": "string",
                    "fieldName": "applicationName",
                    "label": "Application name:",
                    "tooltip": "Application name.",
                    "placeHolder": "My Maps"
                },
                {
                    "type": "paragraph",
                    "value": "The text above will set the application title."
                },
                {
                    "type": "string",
                    "fieldName": "applicationIcon",
                    "label": "Application logo:",
                    "tooltip": "URL for the application logo image.",
                    "placeHolder": "/themes/images/logo.png"
                },
                {
                    "type": "paragraph",
                    "value": "Specify the URL of the image to be used as application logo. It will be displayed leftmost on title bar."
                },
                {
                    "type": "string",
                    "fieldName": "applicationFavicon",
                    "label": "Application favicon:",
                    "tooltip": "URL for the favicon logo image.",
                    "placeHolder": "/themes/images/favicon.ico"
                },
                {
                    "type": "paragraph",
                    "value": "Specify the URL for shortcut icon, web site icon, tab icon or bookmark icon."
                },
                {
                    "type": "string",
                    "fieldName": "customLogoUrl",
                    "label": "Custom logo URL:",
                    "tooltip": "URL for the custom logo image.",
                    "placeHolder": "/themes/images/logo.png"
                },
                {
                    "type": "paragraph",
                    "value": "Set custom map logo path."
                }
            ]
        },
        {
            "category": "<b>Application Settings</b>",
            "fields": [
                {
                    "type": "string",
                    "fieldName": "itemSearchDefaultValue",
                    "label": "Item search default value:",
                    "tooltip": "Default value to search.",
                    "placeHolder": "Web Map"
                },
                {
                    "type": "paragraph",
                    "value": "Above text will be shown in text box for item search."
                },
                {
                    "type": "string",
                    "fieldName": "theme",
                    "label": "Color theme:",
                    "tooltip": "Color theme to use.",
                    "options": [
                        {
                            "label": "Blue",
                            "value": "blueTheme"
                        },
                        {
                            "label": "Red",
                            "value": "redTheme"
                        },
                        {
                            "label": "Green",
                            "value": "greenTheme"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "value": "Set the application theme."
                },
                {
                    "type": "boolean",
                    "fieldName": "showTagCloud",
                    "label": "Show category tag cloud",
                    "tooltip": "Enable or disable category tag cloud."
                },
                {
                    "type": "paragraph",
                    "value": "Check to view category tag cloud. Uncheck to hide category tag cloud."
                },
                {
                    "type": "paragraph",
                    "value": "Tag cloud font range:"
                },
                {
                    "type": "number",
                    "fieldName": "tagCloudFontMinValue",
                    "label": "Minimum value:",
                    "tooltip": "Minimum value of the tag cloud font.",
                    "placeHolder": "15"
                },
                {
                    "type": "number",
                    "fieldName": "tagCloudFontMaxValue",
                    "label": "Maximum value:",
                    "tooltip": "Maximum value of the tag cloud font.",
                    "placeHolder": "20"
                },
                {
                    "type": "string",
                    "fieldName": "tagCloudFontUnits",
                    "label": "Units:",
                    "tooltip": "Units for text in tag cloud.",
                    "placeHolder": "px"
                },
                {
                    "type": "paragraph",
                    "value": "The above font range will be used to display the tag cloud. Maximum value will be assigned to tags with maximum score. Set the units for the text in tag cloud. UI will be distorted if font sizes have inappropriate values."
                },
                {
                    "type": "boolean",
                    "fieldName": "enableAutoComplete",
                    "label": "Enable autocomplete",
                    "tooltip": "Enable or disable autocomplete for search."
                },
                {
                    "type": "paragraph",
                    "value": "This flag will enable or disable autocomplete for search."
                },
                {
                    "type": "boolean",
                    "fieldName": "displaySharingAttribute",
                    "label": "Display sharing attribute",
                    "tooltip": "Show or hide sharing attributes."
                },
                {
                    "type": "paragraph",
                    "value": "This flag will control display of sharing attributes ('ALL', 'GRP' or 'ORG') for the items. The sharing attribute will be displayed on item thumbnail."
                },
                {
                    "type": "boolean",
                    "fieldName": "useItemPage",
                    "label": "Use Item Page",
                    "tooltip": "Enable or disable item page."
                },
                {
                    "type": "paragraph",
                    "value": "Item will be loaded / downloaded if the application is configured for not using the item page. Item Page will be opened if application is configured to use item page."
                },
                {
                    "type": "string",
                    "fieldName": "portalURL",
                    "label": "Portal URL:",
                    "tooltip": "Set portal URL.",
                    "placeHolder": "http://www.arcgis.com"
                },
                {
                    "type": "paragraph",
                    "value": "Set the ArcGIS portal URL for selected group."
                },
                {
                    "type": "string",
                    "fieldName": "cityEngineWebSceneURL",
                    "label": "CityEngine Web Scene URL:",
                    "tooltip": "Set CityEngine Web Scene URL.",
                    "placeHolder": "http://www.arcgis.com/apps/CEWebViewer/viewer.html?3dWebScene="
                },
                {
                    "type": "paragraph",
                    "value": "Set the URL for CityEngine Web Scene items."
                },
                {
                    "type": "string",
                    "fieldName": "geometryService",
                    "label": "Geometry Service:",
                    "tooltip": "Set geometry service URL.",
                    "placeHolder": "http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer"
                },
                {
                    "type": "paragraph",
                    "value": "Set the URL for geometry service."
                }
            ]
        },
        {
            "category": "<b>ArcGIS Online Item Settings</b>",
            "fields": [
                {
                    "type": "string",
                    "fieldName": "defaultLayout",
                    "tooltip": "Whether to use grid view or list view as the default layout.",
                    "label": "Default layout:",
                    "options": [
                        {
                            "label": "Grid",
                            "value": "grid"
                        },
                        {
                            "label": "List",
                            "value": "list"
                        }
                    ]
                },
                {
                    "type": "string",
                    "fieldName": "sortField",
                    "tooltip": "Field to sort the group items by.",
                    "label": "Group sort field:",
                    "options": [
                        {
                            "label": "Modified Date",
                            "value": "modified"
                        },
                        {
                            "label": "Number of views",
                            "value": "numViews"
                        }
                    ]
                },
                {
                    "type": "string",
                    "fieldName": "sortOrder",
                    "tooltip": "Order to sort the group field.",
                    "label": "Group sort order:",
                    "options": [
                        {
                            "label": "Descending",
                            "value": "desc"
                        },
                        {
                            "label": "Ascending",
                            "value": "asc"
                        }
                    ]
                },
                {
                    "type": "string",
                    "fieldName": "mapViewer",
                    "tooltip": "Open maps with this viewer.",
                    "label": "Open maps with:",
                    "options": [
                        {
                            "label": "Simple Viewer",
                            "value": "simple"
                        },
                        {
                            "label": "Map Viewer",
                            "value": "arcgis"
                        }
                    ]
                },
                {
                    "type": "string",
                    "fieldName": "searchString",
                    "label": "Search string:",
                    "tooltip": "Default search string for group query.",
                    "placeHolder": ""
                },
                {
                    "type": "paragraph",
                    "value": "After loading the application, the items will be filtered for above mentioned search string."
                },
                {
                    "type": "string",
                    "fieldName": "searchType",
                    "label": "Search type:",
                    "tooltip": "Default search type for group query.",
                    "placeHolder": ""
                },
                {
                    "type": "paragraph",
                    "value": "After loading the application, the items will be filtered for above mentioned Item Type."
                },
                {
                    "type": "boolean",
                    "fieldName": "showBasemapGallery",
                    "label": "Show Basemap Gallery",
                    "tooltip": "Show basemap gallery on map: true or false."
                },
                {
                    "type": "paragraph",
                    "value": "If checked, basemap gallery widget will be displayed when the item of type map is opened."
                },
                {
                    "type": "boolean",
                    "fieldName": "showMapSearch",
                    "label": "Show Map Search",
                    "tooltip": "Show textbox for address search on map: true or false."
                },
                {
                    "type": "paragraph",
                    "value": "If checked, textbox for address search will be displayed on map."
                },
                {
                    "type": "boolean",
                    "fieldName": "showOverviewMap",
                    "label": "Show Overview Map",
                    "tooltip": " Show overview on map: true or false."
                },
                {
                    "type": "paragraph",
                    "value": "If checked, overview map widget will be displayed on the bottom left corner of the map."
                },
                {
                    "type": "boolean",
                    "fieldName": "showRatings",
                    "label": "Show ratings",
                    "tooltip": "Displays item ratings."
                },
                {
                    "type": "paragraph",
                    "value": "If checked, Item ratings will be displayed on item info page."
                },
                {
                    "type": "boolean",
                    "fieldName": "showViews",
                    "label": "Show Views",
                    "tooltip": "Displays view counts for maps"
                },
                {
                    "type": "paragraph",
                    "value": "If checked, number of times the item is viewed will be displayed on item info page."
                },
                {
                    "type": "boolean",
                    "fieldName": "showLicenseInfo",
                    "label": "Show constraints.",
                    "tooltip": "Displays constraints on the map page."
                },
                {
                    "type": "paragraph",
                    "value": "If checked, Item Access and Use Constraints will be displayed on the item info page."
                },
                {
                    "type": "boolean",
                    "fieldName": "showAttribution",
                    "label": "Show attribution.",
                    "tooltip": "Displays credits on the map page."
                },
                {
                    "type": "paragraph",
                    "value": "If checked, Credits are displayed on the map page."
                },
                {
                    "type": "boolean",
                    "fieldName": "showComments",
                    "label": "Show comments",
                    "tooltip": "Shows comments for items."
                },
                {
                    "type": "paragraph",
                    "value": "If checked, Comments for items will be displayed."
                }
            ]
        },
        {
            "category": "<b>Basemap Switcher Settings</b>",
            "fields": [
                {
                    "type": "string",
                    "fieldName": "portalAPIURL",
                    "label": "Portal URL:",
                    "tooltip": "URL for the portal.",
                    "placeHolder": ""
                },
                {
                    "type": "paragraph",
                    "value": "Specify URL to ArcGIS Portal REST API."
                },
                {
                    "type": "string",
                    "fieldName": "basemapGroupTitle",
                    "tooltip": "Basemap Group Title.",
                    "placeHolder": "",
                    "label": "Basemap Group Title:"
                },
                {
                    "type": "paragraph",
                    "value": "Specify the title of group that contains basemaps."
                },
                {
                    "type": "string",
                    "fieldName": "basemapGroupOwner",
                    "tooltip": "Basemap Group Owner.",
                    "placeHolder": "",
                    "label": "Basemap Group Owner:"
                },
                {
                    "type": "paragraph",
                    "value": "Specify the user name of owner of the group that contains basemaps."
                },
                {
                    "type": "string",
                    "fieldName": "noThumbnail",
                    "label": "No Thumbnail image path:",
                    "tooltip": "No Thumbnail image path.",
                    "placeHolder": ""
                },
                {
                    "type": "paragraph",
                    "value": "Specify path to image used to display the thumbnail for a basemap when portal does not provide it."
                }
            ]
        },
        {
            "category": "<b>Locator Settings</b>",
            "fields": [
                {
                    "type": "string",
                    "fieldName": "defaultLocatorSymbol",
                    "label": "Pushpin image:",
                    "tooltip": "URL for the pushpin image.",
                    "placeHolder": ""
                },
                {
                    "type": "paragraph",
                    "value": "Pushpin will be displayed on map for searched address. Set URL for the pushpin image."
                },
                {
                    "type": "number",
                    "fieldName": "markupSymbolWidth",
                    "tooltip": "Default Markup symbol width.",
                    "placeHolder": "",
                    "label": "Pushpin Symbol Width:"
                },
                {
                    "type": "paragraph",
                    "value": "Set the image width in pixels for pushpin image."
                },
                {
                    "type": "number",
                    "fieldName": "markupSymbolHeight",
                    "tooltip": "Default Markup symbol height.",
                    "placeHolder": "",
                    "label": "Pushpin Symbol Height:"
                },
                {
                    "type": "paragraph",
                    "value": "Set the image height in pixels for pushpin image."
                },
                {
                    "type": "number",
                    "fieldName": "zoomLevel",
                    "label": "Zoom Level:",
                    "tooltip": "Zoom level for the map.",
                    "placeHolder": ""
                },
                {
                    "type": "paragraph",
                    "value": "Map will zoom to above configured zoom level upon searching an address."
                },
                {
                    "type": "string",
                    "fieldName": "locatorDefaultAddress",
                    "label": "Default Address:",
                    "tooltip": "Default address to search.",
                    "placeHolder": ""
                },
                {
                    "type": "paragraph",
                    "value": "Set the default address to search on map."
                }
            ]
        }
    ],
    "values": {
        "group": "03d0b3fe76494125ab404a2b87b40c5c",
        "appid": "",
        "applicationName": "Map Gallery",
        "applicationIcon": "/themes/images/logo.png",
        "applicationFavicon": "/themes/images/favicon.ico",
        "customLogoUrl": "",
        "proxyUrl": "/proxy/proxy.ashx",
        "itemSearchDefaultValue": "Web Map",
        "theme": "",
        "showTagCloud": true,
        "enableAutoComplete": true,
        "tagCloudFontMinValue": 15,
        "tagCloudFontMaxValue": 20,
        "tagCloudFontUnits": "px",
        "displaySharingAttribute": false,
        "useItemPage": false,
        "portalURL": "http://arcgis4localgov2.maps.arcgis.com",
        "geometryService": "http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer",
        "cityEngineWebSceneURL": "http://www.arcgis.com/apps/CEWebViewer/viewer.html?3dWebScene=",
        "defaultLayout": "list",
        "sortField": "numViews",
        "sortOrder": "desc",
        "mapViewer": "",
        "searchString": "",
        "searchType": "",
        "showBasemapGallery": true,
        "showMapSearch": true,
        "showOverviewMap": false,
        "showRatings": true,
        "showViews": true,
        "showLicenseInfo": true,
        "showAttribution": false,
        "showComments": true,
        "portalAPIURL": "http://www.arcgis.com/sharing/rest/",
        "basemapGroupTitle": "Basemaps",
        "basemapGroupOwner": "GISITAdmin",
        "noThumbnail": "themes/images/notAvailable.png",
        "defaultLocatorSymbol": "/themes/images/redpushpin.png",
        "markupSymbolWidth": "35",
        "markupSymbolHeight": "35",
        "zoomLevel": "12",
        "locatorDefaultAddress": "Lake Echo Rd Tracy City TN 37387"
    }
}
