define([], function() {
    //Default configuration settings for the applciation. This is where you'll define things like a bing maps key, 
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
    var defaults = {
        "appid": "",
        "webmap": "55f15224d4da4b4e98504a4ff3a69119",
        "oauthappid": null, //"AFTKRmv16wj14N3z",
        //Group templates must support a group url parameter. This will contain the id of the group. 
        //group: "",
        //Enter the url to the proxy if needed by the applcation. See the 'Using the proxy page' help topic for details
        //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
        "proxyurl": "",
        //UI specific parameters
        "title": "Summary Viewer",
        "logo": "",
        "color": "#80ab00",
        //Counter specific parameters
        "summaryLayer":{
            "id": "",
            "fields":[
                {
                    "id": "filterField",
                    "fields": []
                },
                {
                    "id": "sumFields",
                    "fields": []
                },
                {
                    "id": "avgFields",
                    "fields": []
                },
                {
                    "id": "minFields",
                    "fields": []
                },
                {
                    "id": "maxFields",
                    "fields": []
                }
            ]
        },
        "cluster": true,
        "bingmapskey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
        "sharinghost": location.protocol + "//" + "www.arcgis.com" //Defaults to arcgis.com. Set this value to your portal or organization host name. 
    };
    return defaults;
});
