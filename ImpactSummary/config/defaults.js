define({
    //Default configuration settings for the application. This is where you"ll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
    "appid": "",
    "webmap": "21633896293248b7a40d4e3126c93621",
    "oauthappid": null,
    //"AFTKRmv16wj14N3z",
    //Enter the url to the proxy if needed by the applcation. See the "Using the proxy page" help topic for details
    //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "",
    //Example of a template specific property. If your template had several color schemes
    //you could define the default here and setup configuration settings to allow users to choose a different
    //color theme.
    "title": "",
    "summary": "",
    "defaultPanel": "about",
    "summaryLayer": {
        "id": "impact_area1375916377789_9168"
    },
    "enableTitle": true,
    "enableEntireAreaButton": true,
    "selectEntireAreaOnStart": false,
    "enableSummary": true,
    "enableModifiedDate": true,
    "enableMoreInfo": true,
    "enableAboutPanel": true,
    "enableLegendPanel": true,
    "enableLayersPanel": true,
    "enableHomeButton": true,
    "enableLocateButton": true,
    "enableBasemapToggle": true,
    "enableShareDialog": true,
    "nextBasemap": "hybrid",
    "defaultBasemap": "topo",
    "summaryAttributeOrder": "DESC",
    "bitlyLogin": "esri",
    "bitlyKey": "R_65fd9891cd882e2a96b99d4bda1be00e",
    "summaryAttributes": [{
        "attribute": "TOTPOP_CY",
        "label": "Population",
        "dataSourceUrl": "",
        "children": [{
            "attribute": "POP15_CY",
            "label": "Under 16"
        }, {
            "attribute": "POP65U_CY",
            "label": "Over 64"
        }]
    }, {
        "attribute": "TOTHH_CY",
        "label": "Households",
        "dataSourceUrl": "",
        "children": [{
            "attribute": "OWNER_CY",
            "label": "Owners"
        }, {
            "attribute": "RENTER_CY",
            "label": "Renters"
        }]
    }, {
        "attribute": "CIKR_Total",
        "label": "Infrastructure",
        "dataSourceUrl": "",
        "children": [{
            "attribute": "CIKR_AMTwr",
            "label": "AM Towers"
        }, {
            "attribute": "CIKR_Dam",
            "label": "Dams"
        }, {
            "attribute": "CIKR_Edu",
            "label": "Education Facilities"
        }, {
            "attribute": "CIKR_ECC",
            "label": "Emergency Communications Centers"
        }, {
            "attribute": "CIKR_FMTwr",
            "label": "FM Towers"
        }, {
            "attribute": "CIKR_FrSta",
            "label": "Fire Stations"
        }, {
            "attribute": "CIKR_Hzmt",
            "label": "Hazmat Facilities"
        }, {
            "attribute": "CIKR_HCF",
            "label": "Healthcare Facilities"
        }, {
            "attribute": "CIKR_PkIco",
            "label": "Parks and Icons"
        }, {
            "attribute": "CIKR_Pol",
            "label": "Police Stations"
        }, {
            "attribute": "CIKR_Port",
            "label": "Port Facilities"
        }, {
            "attribute": "CIKR_Rsrvr",
            "label": "Reservoirs"
        }, {
            "attribute": "CIKR_WWF",
            "label": "Wastewater Facilities"
        }, {
            "attribute": "CIKR_Pwr",
            "label": "Energy Facilities"
        }]
    }, {
        "attribute": "BUS_Total",
        "label": "Businesses",
        "dataSourceUrl": "",
        "children": [{
            "attribute": "BUS_Banks",
            "label": "Banks and Financial Services"
        }, {
            "attribute": "BUS_Hsptl",
            "label": "Hospitals"
        }, {
            "attribute": "BUS_GrcStr",
            "label": "Grocery and Convenience Stores"
        }, {
            "attribute": "BUS_PnTSvc",
            "label": "Professional and Technical Services"
        }, {
            "attribute": "BUS_Safety",
            "label": "Public Safety and Justice"
        }, {
            "attribute": "BUS_Util",
            "label": "Utilities"
        }, {
            "attribute": "BUS_BldSpl",
            "label": "Building Supplies"
        }, {
            "attribute": "BUS_GasStn",
            "label": "Gas Stations"
        }, {
            "attribute": "BUS_DptStr",
            "label": "Discount and Department Stores"
        }, {
            "attribute": "BUS_Ldging",
            "label": "Lodging"
        }, {
            "attribute": "BUS_Other",
            "label": "Other"
        }]
    }],
    //Enter the url to your organizations bing maps key if you want to use bing basemaps
    "bingmapskey": "",
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "sharinghost": location.protocol + "//" + "www.arcgis.com",
    "urlItems": [
        "edit",
        "extent"
    ],
    //When true the template will query arcgis.com for default settings for helper services, units etc. If you
    //want to use custom settings for units or any of the helper services set queryForOrg to false then enter
    //default values for any items you need using the helper services and units properties.
    "queryForOrg": true,
    "localize": true,
    "units": null,
    "helperServices": {
        "geometry": {
            "url": null
        },
        "printTask": {
            "url": null
        },
        "elevationSync": {
            "url": null
        },
        "geocode": [{
            "url": null
        }]
    }
});