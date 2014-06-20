define([], function() {
    //Default configuration settings for the application. This is where you'll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
    var defaults = {
        "appid": "",
        "webmap": "6c4e81f90c4b4935945e9b623c5247e0",
        "oauthappid": null, //"AFTKRmv16wj14N3z",
        //Group templates must support a group url parameter. This will contain the id of the group. 
        //group: "",
        //Enter the url to the proxy if needed by the application. See the 'Using the proxy page' help topic for details
        //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
        "proxyurl": "",
        //Color defines the text color for the menu icon and title that appear in the title bar. 
        "color": "#2f4f4f",
        //Theme defines the background color of the title bar and also the background color of the popup
        //title bar. 
        "theme": "#949494",
        //Specify the color used for the closeable drawer titles.  
        "paneltheme": "#ededed",
        "bingmapskey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
        //Defaults to arcgis.com. Set this value to your portal or organization host name.
        "sharinghost": location.protocol + "//" + "www.arcgis.com", 
        //When true the template will query arcgis.com for default settings for helper services, units etc. If you 
        //want to use custom settings for units or any of the helper services set queryForOrg to false then enter
        //default values for any items you need using the helper services and units properties. 
        "queryForOrg": true, 
        "units": null, 
        //Enter text here that will display in the title section. 
        //If not specified the web map title is used. 
        "title": null, 
        //Enter text here that will display in the about panel 
        //If not specified the web map description is used. 
        //When true the locate button is displayed on the map. 
        "about": null,
        "locate": true,
        //When true the home button is displayed on the map. 
        "home": true,
        //When true the geocoder search box is displayed in the title area
        "search": true,
        "helperServices": {  
           "geometry":{
            "url": null
           },
           "printTask": {
            "url": null
           },
           "elevationSync":{
             "url": null
           },
           "geocode": [{
            "url": null
           }]
        }
    };
    return defaults;
});
