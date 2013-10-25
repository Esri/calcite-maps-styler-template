define([], function() {
    //Default configuration settings for the application. This is where you'll define things like a bing maps key, 
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
    var defaults = {
        //Appid: Specify the appid for a configured web application if available. In most cases you'll use the 
        //web map id value instead. The web map id is the id of the web map from ArcGIS Online that you
        //want to display in the application. 
        "appid": "",
        "webmap": "de5ae0c2040c49d38e9ea0637454ac73", 
        //Enter the url to the proxy if needed by the applcation. See the 'Using the proxy page' help topic for details
        //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
        "proxyurl": "",
        //Specify the default color theme of the application. 
        "theme": "chrome", //valid values are seaside, chrome, pavement, gray
        "bingmapskey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
        "sharinghost": "", //Defaults to arcgis.com. Set this value to your portal or organization host name. 
        //If you've registered your application with arcgis online and have an oauth client id enter that value 
        //here. 
        "oauthappid": null, 
        /***********Layout Options******************/
        //HEADER: When true a header section is added to the application. If title and subtitle are specified
        //that information will be used to populate the header area. If no values are specified for title and 
        //subtitle the web map title and subtitle are used. 
        "header":true,
        "title": null,
        "subtitle": null,
        //FOOTER: When true and footer_text is supplied a footer section is added to the map. 
        "footer": true,
        "footer_text": "",
        //DESCRIPTION: Display content in a panel on the right or left side of the map. If no description_content
        //is provided the web map description is used. 
        //Use the description_side option to specify the side of the map the content will display. If both the legend
        //and description are displayed and both have the side set to the same value the legend will be flipped to the 
        //opposite side. 
        "description": false,
        "description_content": "",
        "description_side": "left", //left or right
        //LEGEND: Display the legend in a panel on the right or left side of the map.
        "legend":  false,
        "legend_side": "right",//left or right 
        /****************Optional Widgets*******************/
        "home_button": true,
        "basemap_toggle": true,
        "basemap_option": "", //valid values are street, satellite, hybrid, topo, gray, oceans, national-geographic and osm
        "locate_button": true,
        "geocoder": true
    };
    return defaults;
});
