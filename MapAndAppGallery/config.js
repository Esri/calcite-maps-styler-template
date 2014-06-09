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
        "http://solutions.arcgis.com/local-government/help/maps-and-apps-gallery/"
     ],

    "values": {
        "group": "03d0b3fe76494125ab404a2b87b40c5c",
        "appid": "",
        "applicationName": "Gallery",
        "applicationIcon": "/themes/images/logo.png",
        "applicationFavicon": "/themes/images/favicon.ico",
        "customLogoUrl": "",
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
        "useItemPage": true,
        "showLicenseInfo": true,
        "showAttribution": true,
        "showComments": false,
        "mapViewer": "",
        "showOverviewMap": false,
        "showMapSearch": true,
        "zoomLevel": "12",
        "locatorDefaultAddress": "Lake Echo Rd Tracy City TN 37387",
        "defaultLocatorSymbol": "/themes/images/redpushpin.png",
        "markupSymbolWidth": "35",
        "markupSymbolHeight": "35",
        "showBasemapGallery": true,
        "basemapGroupTitle": "",
        "basemapGroupOwner": "",
        "noThumbnail": "themes/images/thumbnailNotAvailable.png",
        "portalAPIURL": "http://www.arcgis.com/sharing/rest/",
        "portalURL": "http://arcgis4localgov2.maps.arcgis.com",
        "geometryService": "http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer",
        "cityEngineWebSceneURL": "http://www.arcgis.com/apps/CEWebViewer/viewer.html?3dWebScene=",
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
                    "tooltip": "Application name."
                },
                {
                    "label": "Icon URL",
                    "fieldName": "applicationIcon",
                    "type": "string",
                    "tooltip": "URL for the application logo image."
                },
                {
                    "label": "Bookmark Icon URL",
                    "fieldName": "applicationFavicon",
                    "type": "string",
                    "tooltip": "URL for the favicon logo image."
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
                    "tooltip": "Color theme to use."
                }
            ]
        },
        {
            "category": "<b>Gallery Settings</b>",
            "fields": [
                {
                    "type": "group",
                    "label": "SELECT GROUP"
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
                    "tooltip": "Whether to use grid view or list view as the default layout."
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
                        }
                    ],
                    "tooltip": "Field to sort the group items by."
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
                    "tooltip": "Order to sort the group field."
                },
                {
                    "label": "Default Search Value",
                    "fieldName": "itemSearchDefaultValue",
                    "type": "string",
                    "tooltip": "Item search default value"
                },
                {
                    "label": "Show Tag Cloud",
                    "fieldName": "showTagCloud",
                    "type": "boolean",
                    "tooltip": "Enable or disable category tag cloud."
                },
                {
                    "label": "Show Item Details",
                    "fieldName": "useItemPage",
                    "type": "boolean",
                    "tooltip": "Enable or disable item page."
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
                    "tooltip": "Open maps with this viewer."
                },
                {
                    "label": "Zoom Level",
                    "fieldName": "zoomLevel",
                    "type": "number",
                    "tooltip": "Zoom level for the map."
                },
                {
                    "label": "Default Address",
                    "fieldName": "locatorDefaultAddress",
                    "type": "string",
                    "tooltip": "Default address to search."
                },
                {
                    "label": "Alternate Basemap Group",
                    "fieldName": "basemapGroupTitle",
                    "type": "string",
                    "tooltip": "Basemap Group Title"
                },
                {
                    "label": "Basemap Group Owner",
                    "fieldName": "basemapGroupOwner",
                    "type": "string",
                    "tooltip": "Basemap Group Owner"
                }
            ]
        }
    ]
}