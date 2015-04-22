define({
    "item": {
        "id": "25660c0facdb419191c8b2dec5da74d7",
        "owner": "esri_webapi",
        "created": 1392326766000,
        "modified": 1394188378000,
        "guid": null,
        "name": null,
        "title": "Service Lookup",
        "type": "Web Map",
        "typeKeywords": [
          "ArcGIS Online",
          "Data Editing",
          "Explorer Web Map",
          "Map",
          "Online Map",
          "Web Map"
        ],
        "description": null,
        "tags": [
          "template"
        ],
        "snippet": "A web map to support the service lookup web application template.",
        "thumbnail": "thumbnail/ago_downloaded.png",
        "documentation": null,
        "extent": [
          [
            -88.1448,
            41.8366
          ],
          [
            -88.0437,
            41.8854
          ]
        ],
        "spatialReference": null,
        "accessInformation": null,
        "licenseInfo": null,
        "culture": "en-us",
        "properties": null,
        "url": null,
        "access": "public",
        "size": 1722,
        "appCategories": [],
        "industries": [],
        "languages": [],
        "largeThumbnail": null,
        "banner": null,
        "screenshots": [],
        "listed": false,
        "commentsEnabled": true,
        "numComments": 0,
        "numRatings": 0,
        "avgRating": 0,
        "numViews": 8823
   
    },
    "itemData": {
        "operationalLayers": [
          {
              "url": "http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/GasServiceRequestTracking/FeatureServer/0",
              "id": "GasServiceRequestTracking_6217",
              "visibility": false,
              "opacity": 1,
              "title": "Request Tracking",
              "disablePopup": true,
              "showLegend": false
          },
          {
              "url": "http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/GasServiceArea/FeatureServer/0",
              "id": "GasServiceArea_7891",
              "visibility": false,
              "opacity": 1,
              "title": "Service Area",
              "popupInfo": {
                  "title": "",
                  "fieldInfos": [
                    {
                        "fieldName": "OBJECTID",
                        "label": "OBJECTID",
                        "isEditable": false,
                        "tooltip": "",
                        "visible": false,
                        "stringFieldOption": "textbox"
                    },
                    {
                        "fieldName": "GEOFENCENAME",
                        "label": "GeofenceName",
                        "isEditable": true,
                        "tooltip": "",
                        "visible": true,
                        "stringFieldOption": "textbox"
                    }
                  ],
                  "description": "<p class=\"MsoNormal\"><span style=\"color: rgb(31, 73, 125);\">Thank you for your interest in service.</span></p><p class=\"MsoNormal\"><span style=\"color: rgb(31, 73, 125);\">In order to apply for service you must be a homeowner or renter at this location. In order to expedite the service connection process, please have your address and property information available upon calling customer service.</span></p><p class=\"MsoNormal\"><span style=\"color: rgb(31, 73, 125);\">To apply for service, please call our customer service department at 555-5555.</span></p>\n        ",
                  "showAttachments": true,
                  "mediaInfos": []
              }
          }
        ],
        "baseMap": {
            "baseMapLayers": [
              {
                  "id": "defaultBasemap",
                  "opacity": 1,
                  "visibility": true,
                  "url": "http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer"
              }
            ],
            "title": "Topographic"
        },
        "version": "1.9.1",
        "applicationProperties": {
            "viewing": {
                "routing": {
                    "enabled": true
                },
                "basemapGallery": {
                    "enabled": true
                },
                "measure": {
                    "enabled": true
                }
            }
        }
    }});