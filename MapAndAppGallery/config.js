/*global define */
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
define([], function () {
    return {

        // This file contains various configuration settings for esri template
        //
        // Use this file to perform the following:
        //
        // 1.  Customize application settings here           - [ Tag(s) to look for: ApplicationSettings ]
        // 2.  Specify header widget settings                - [ Tag(s) to look for: AppHeaderWidgets ]
        // 3.  Specify URLs for base maps                    - [ Tag(s) to look for: BaseMapLayers ]
        // 4.  Customize address search settings             - [ Tag(s) to look for: LocatorSettings]

        //------------------------------------------------------------------------------------------------------------------------
        // GENERAL SETTINGS
        //------------------------------------------------------------------------------------------------------------------------
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
        // defaultLocatorSymbol: Set the image path for locator symbol. e.g. pushpin.
        // markupSymbolWidth: Set the image width in pixels for locator symbol.
        // markupSymbolHeight: Set the image height in pixels for locator symbol.
        // zoomLevel: Following zoom level will be set for the map upon searching an address
        // locatorDefaultAddress: Set the default address to search.

        ApplicationSettings: {
            group: "801cffe54b004008a8c316469c1e8326",
            appid: "",
            applicationName: "Map Gallery",
            applicationIcon: "/themes/images/logo.png",
            applicationFavicon: "/themes/images/favicon.ico",
            customLogoUrl: "",
            itemSearchDefaultValue: "Web Map",
            theme: "",
            showTagCloud: true,
            enableAutoComplete: true,
            tagCloudFontMinValue: 15,
            tagCloudFontMaxValue: 20,
            tagCloudFontUnits: "px",
            displaySharingAttribute: false,
            useItemPage: false,
            portalURL: "http://www.arcgis.com",
            cityEngineWebSceneURL: "http://www.arcgis.com/apps/CEWebViewer/viewer.html?3dWebScene=",
            geometryService: "http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer",
            defaultLayout: "list",
            sortField: "numViews",
            sortOrder: "desc",
            mapViewer: "",
            searchString: "",
            searchType: "",
            showBasemapGallery: true,
            showMapSearch: true,
            showOverviewMap: false,
            showRatings: true,
            showViews: true,
            showLicenseInfo: true,
            showAttribution: false,
            showComments: true,
            defaultLocatorSymbol: "/themes/images/redpushpin.png",
            markupSymbolWidth: 35,
            markupSymbolHeight: 35,
            zoomLevel: 12,
            locatorDefaultAddress: "Lake Echo Rd Tracy City TN 37387"
        },

        //------------------------------------------------------------------------------------------------------------------------
        // Header Widget Settings
        //------------------------------------------------------------------------------------------------------------------------
        // Set widgets settings such as widget title, widgetPath to be displayed in header panel
        // Title: Name of the widget, will displayed as title of widget in header panel
        // WidgetPath: path of the widget respective to the widgets package.

        AppHeaderWidgets: [{
            WidgetPath: "widgets/settings/settings"
        }, {
            WidgetPath: "widgets/locator/locator"
        }, {
            WidgetPath: "widgets/info/info"
        }, {
            WidgetPath: "widgets/sortby/sortby"
        }, {
            WidgetPath: "widgets/layout/layout"
        }, {
            WidgetPath: "widgets/portalSignin/portalSignin"
        }],

        // ------------------------------------------------------------------------------------------------------------------------
        // BASEMAP SETTINGS
        // ------------------------------------------------------------------------------------------------------------------------
        // Set baseMap layers
        // Please note: All base-maps need to use the same spatial reference. By default, the first base-map will be loaded

        BaseMapLayers: [{
            Key: "topo",
            ThumbnailSource: "themes/images/Topographic.jpg",
            Name: "Topographic Map",
            MapURL: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer"
        }, {
            Key: "streets",
            ThumbnailSource: "themes/images/streets.png",
            Name: "Street Map",
            MapURL: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer"
        }, {
            Key: "imagery",
            ThumbnailSource: "themes/images/imagery.png",
            Name: "Imagery Map",
            MapURL: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
        }],

        // ------------------------------------------------------------------------------------------------------------------------
        // ADDRESS SEARCH SETTINGS
        // ------------------------------------------------------------------------------------------------------------------------
        // Set locator settings such as locator display fields, match score
        // LocatorParameters: Required parameters to search the address candidates.
        //   SearchField: The name of geocode service input field that accepts the search address. e.g. 'SingleLine' or 'Address'.
        //   SearchBoundaryField: The name of geocode service input field that accepts an extent to search an input address within. e.g."searchExtent".
        // LocatorURL: Specify URL for geocode service.
        // LocatorOutFields: The list of outfields to be included in the result set provided by geocode service.
        // DisplayField: Specify the outfield of geocode service. The value in this field will be displayed for search results in the application.
        // AddressMatchScore: Required parameters to specify the accuracy of address match.
        //   Field: Set the outfield of geocode service that contains the Address Match Score.
        //   Value: Set the minimum score value for filtering the candidate results. The value should a number between 0-100.
        // FilterFieldName,FilterFieldValues: Candidates based on which the address search will be performed.
        //   FilterFieldName: Set the outfield that contains the match level for geocode request. e.g. For World GeoCode, the field that contains the match level is 'Addr_type'.
        //   FilterFieldValues: Specify the desired match levels to filter address search results. e.g. 'StreetAddress', 'StreetName' etc.

        LocatorSettings: {
            LocatorParameters: {
                SearchField: "SingleLine",
                SearchBoundaryField: "searchExtent"
            },
            LocatorURL: "http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
            LocatorOutFields: ["Addr_Type", "Type", "Score", "Match_Addr", "xmin", "xmax", "ymin", "ymax"],
            DisplayField: "${Match_Addr}",
            AddressMatchScore: {
                Field: "Score",
                Value: 80
            },
            FilterFieldName: 'Addr_Type',
            FilterFieldValues: ["StreetAddress", "StreetName", "PointAddress", "POI"]
        }
    };
});
