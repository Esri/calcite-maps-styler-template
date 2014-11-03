{
    "license":[
        "| Copyright 2014 Esri",
        "|",
        "| Licensed under the Apache License, Version 2.0 (the 'License');",
        "| you may not use this file except in compliance with the License.",
        "| You may obtain a copy of the License at",
        "|",
        "|    http://www.apache.org/licenses/LICENSE-2.0",
        "|",
        "| Unless required by applicable law or agreed to in writing, software",
        "| distributed under the License is distributed on an 'AS IS' BASIS,",
        "| WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.",
        "| See the License for the specific language governing permissions and",
        "| limitations under the License."
    ],

    "documentation":[
        "For help configuring this application, see:",
        "http://links.esri.com/localgovernment/help/MapsAndAppsGallery"
     ],

    "values": {
        "group": "03d0b3fe76494125ab404a2b87b40c5c",
        "appid": "",
        "oauthappid": "",
        "applicationName": "Gallery",
        "applicationIcon": "",
        "applicationFavicon": "/themes/images/favicon.ico",
        "theme": "blueTheme",
        "defaultLayout": "list",
        "sortField": "numViews",
        "sortOrder": "desc",
        "showRatings": false,
        "showViews": false,
        "displaySharingAttribute": false,
        "itemSearchDefaultValue": "",
        "enableAutoComplete": true,
        "searchString": "",
        "searchType": "",
        "showTagCloud": true,
        "tagCloudFontMinValue": 15,
        "tagCloudFontMaxValue": 20,
        "tagCloudFontUnits": "px",
        "showLicenseInfo": true,
        "showAttribution": true,
        "showComments": false,
        "mapViewer": "",
        "showOverviewMap": false,
        "showMapSearch": true,
        "zoomLevel": "12",
        "locatorDefaultAddress": "139 W Porter Ave Naperville IL 60540",
        "defaultLocatorSymbol": "/themes/images/redpushpin.png",
        "markupSymbolWidth": "35",
        "markupSymbolHeight": "35",
        "showBasemapGallery": true,
        "basemapGroupTitle": "",
        "basemapGroupOwner": "",
        "noThumbnail": "themes/images/thumbnailNotAvailable.png",
        "portalURL": "",
        "geometryService": "",
        "proxyUrl": "/proxy/proxy.ashx"
    },

    "configurationSettings": [
        {
            "category": "<b>Header</b>",
            "fields": [
                {
                    "label": "Title",
                    "fieldName": "applicationName",
                    "type": "string",
                    "tooltip": "Application title displayed in header"
                },
                {
                    "label": "Icon URL",
                    "fieldName": "applicationIcon",
                    "type": "string",
                    "tooltip": "Icon in top left corner of application. Icon should be 48px high."
                },
                {
                    "label": "Color Scheme",
                    "fieldName": "theme",
                    "type": "string",
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
                    ],
                    "tooltip": "Color of header bar and widget windows"
                }
            ]
        },
        {
            "category": "<b>Gallery Settings</b>",
            "fields": [
                {
                    "type": "group",
                    "label": "SELECT GROUP",
                    "tooltip": "Group displayed in the application"
                },
                {
                    "label": "Default Layout",
                    "fieldName": "defaultLayout",
                    "type": "string",
                    "options": [
                        {
                            "label": "Grid",
                            "value": "grid"
                        },
                        {
                            "label": "List",
                            "value": "list"
                        }
                    ],
                    "tooltip": "Default layout of gallery contents"
                },
                {
                    "label": "Sort By",
                    "fieldName": "sortField",
                    "type": "string",
                    "options": [
                        {
                            "label": "Modified Date",
                            "value": "modified"
                        },
                        {
                            "label": "Number of Views",
                            "value": "numViews"
                        },
                        {
                            "label": "Name",
                            "value": "title"
                        }
                    ],
                    "tooltip": "Default sort method for gallery contents"
                },
                {
                    "label": "Sort Order",
                    "fieldName": "sortOrder",
                    "type": "string",
                    "options": [
                        {
                            "label": "Descending",
                            "value": "desc"
                        },
                        {
                            "label": "Ascending",
                            "value": "asc"
                        }
                    ],
                    "tooltip": "Sorting order of gallery contents"
                },
                {
                    "label": "Default Search Value",
                    "fieldName": "itemSearchDefaultValue",
                    "type": "string",
                    "tooltip": "Default value for searching gallery content"
                },
                {
                    "label": "Show Tag Cloud",
                    "fieldName": "showTagCloud",
                    "type": "boolean",
                    "tooltip": "Enable to show a tag cloud for filtering gallery content"
                }
            ]
        },
        {
            "category": "<b>Map Settings</b>",
            "fields": [
                {
                    "label": "Map Viewer",
                    "fieldName": "mapViewer",
                    "type": "string",
                    "options": [
                        {
                            "label": "Simple Viewer",
                            "value": "simple"
                        },
                        {
                            "label": "Map Viewer",
                            "value": "arcgis"
                        }
                    ],
                    "tooltip": "Choose a viewer for opening maps"
                },
                {
                    "label": "Zoom Level",
                    "fieldName": "zoomLevel",
                    "type": "number",
                    "tooltip": "Map zoom level for viewing selected features"
                },
                {
                    "label": "Default Address",
                    "fieldName": "locatorDefaultAddress",
                    "type": "string",
                    "tooltip": "Default address for the map search"
                },
                {
                    "label": "Alternate Basemap Group",
                    "fieldName": "basemapGroupTitle",
                    "type": "string",
                    "tooltip": "Name of basemap group, or leave blank to use default organization basemap group"
                },
                {
                    "label": "Basemap Group Owner",
                    "fieldName": "basemapGroupOwner",
                    "type": "string",
                    "tooltip": "Username of basemap group owner"
                }
            ]
        }
    ]
}