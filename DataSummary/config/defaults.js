define([], function() {
    //Default configuration settings for the applciation. This is where you"ll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
    var defaults = {
        "appid": "",
        "webmap": "8a63712c19a8410082f3dc106118b7d1",
        "oauthappid": null,
        //"AFTKRmv16wj14N3z",
        //Enter the url to the proxy if needed by the applcation. See the "Using the proxy page" help topic for details
        //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
        "proxyurl": "",
        //Example of a template specific property. If your template had several color schemes
        //you could define the default here and setup configuration settings to allow users to choose a different
        //color theme.
        "title":"",
        "areaDescription":"",
        "summaryLayerId":"",
        "summaryLayerTitle": "Impact Area",
        "showTitle":true,
        "showEntireAreaButton": true,
        "showAreaDescription":true,
        "showArea": true,
        "showLegend": true,
        "showHomeButton": true,
        "showLocateButton":true,
        "showBasemapToggle": true,
        "showAboutDialog":true,
        "ShowShareDialog":true,
        "nextBasemap": "hybrid",
        "currentBasemap": "topo",
        "summaryAttributeOrder":"DESC",
        "bitlyLogin": "esri",
        "bitlyKey": "R_65fd9891cd882e2a96b99d4bda1be00e",
        "summaryAttributes": [
           {
              "attribute":"TOTPOP_CY",
              "label":"Population",
              "dataSourceUrl": "http://resources.arcgis.com/en/help/arcgis-rest-api/#/Data_Apportionment/02r30000021s000000/",
              "children":[
                 {
                    "attribute":"POP15_CY",
                    "label":"Under 16"
                 },
                 {
                    "attribute":"POP65U_CY",
                    "label":"Over 64"
                 }
              ]
           },
           {
              "attribute":"TOTHH_CY",
              "label":"Households",
              "dataSourceUrl": "http://resources.arcgis.com/en/help/arcgis-rest-api/#/Data_Apportionment/02r30000021s000000/",
              "children":[
                 {
                    "attribute":"OWNER_CY",
                    "label":"Owners"
                 },
                 {
                    "attribute":"RENTER_CY",
                    "label":"Renters"
                 }
              ]
           },
           {
              "attribute":"CIKR_Total",
              "label":"Infrastructure",
              "dataSourceUrl": "http://resources.arcgis.com/en/help/arcgis-rest-api/#/Data_Apportionment/02r30000021s000000/",
              "children":[
                 {
                    "attribute":"CIKR_AMTwr",
                    "label":"AM Towers"
                 },
                 {
                    "attribute":"CIKR_Dam",
                    "label":"Dams"
                 },
                 {
                    "attribute":"CIKR_Edu",
                    "label":"Education Facilities"
                 },
                 {
                    "attribute":"CIKR_ECC",
                    "label":"Emergency Communications Centers"
                 },
                 {
                    "attribute":"CIKR_FMTwr",
                    "label":"FM Towers"
                 },
                 {
                    "attribute":"CIKR_FrSta",
                    "label":"Fire Stations"
                 },
                 {
                    "attribute":"CIKR_Hzmt",
                    "label":"Hazmat Facilities"
                 },
                 {
                    "attribute":"CIKR_HCF",
                    "label":"Healthcare Facilities"
                 },
                 {
                    "attribute":"CIKR_PkIco",
                    "label":"Parks and Icons"
                 },
                 {
                    "attribute":"CIKR_Pol",
                    "label":"Police Stations"
                 },
                 {
                    "attribute":"CIKR_Port",
                    "label":"Port Facilities"
                 },
                 {
                    "attribute":"CIKR_Rsrvr",
                    "label":"Reservoirs"
                 },
                 {
                    "attribute":"CIKR_WWF",
                    "label":"Wastewater Facilities"
                 },
                 {
                    "attribute":"CIKR_Pwr",
                    "label":"Energy Facilities"
                 }
              ]
           },
           {
              "attribute":"BUS_Total",
              "label":"Businesses",
              "dataSourceUrl": "http://resources.arcgis.com/en/help/arcgis-rest-api/#/Data_Apportionment/02r30000021s000000/",
              "children":[
                 {
                    "attribute":"BUS_Banks",
                    "label":"Banks and Financial Services"
                 },
                 {
                    "attribute":"BUS_Hsptl",
                    "label":"Hospitals"
                 },
                 {
                    "attribute":"BUS_GrcStr",
                    "label":"Grocery and Convenience Stores"
                 },
                 {
                    "attribute":"BUS_PnTSvc",
                    "label":"Professional and Technical Services"
                 },
                 {
                    "attribute":"BUS_Safety",
                    "label":"Public Safety and Justice"
                 },
                 {
                    "attribute":"BUS_Util",
                    "label":"Utilities"
                 },
                 {
                    "attribute":"BUS_BldSpl",
                    "label":"Building Supplies"
                 },
                 {
                    "attribute":"BUS_GasStn",
                    "label":"Gas Stations"
                 },
                 {
                    "attribute":"BUS_DptStr",
                    "label":"Discount and Department Stores"
                 },
                 {
                    "attribute":"BUS_Ldging",
                    "label":"Lodging"
                 },
                 {
                    "attribute":"BUS_Other",
                    "label":"Other"
                 }
              ]
           }
        ],
        //Enter the url to your organizations bing maps key if you want to use bing basemaps
        "bingmapskey": "",
        //Defaults to arcgis.com. Set this value to your portal or organization host name.
        "sharinghost": location.protocol + "//" + "www.arcgis.com"
    };
    return defaults;
});