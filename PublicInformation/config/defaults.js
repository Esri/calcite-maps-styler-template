define({
    //Default configuration settings for the applciation. This is where you"ll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
    "appid": "",
    "webmap": "df8bcc10430f48878b01c96e907a1fc3",
    "oauthappid": null,
    //Enter the url to the proxy if needed by the applcation. See the "Using the proxy page" help topic for details
    //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "",
    //Example of a template specific property. If your template had several color schemes
    //you could define the default here and setup configuration settings to allow users to choose a different
    //color theme.
    "title": "",
    "summary": "",
    "defaultPanel": "legend",
    "enableSummaryInfo": true,
    "enableLegendPanel": true,
    "enableAboutPanel": true,
    "enableLayersPanel": true,
    "enableHomeButton": true,
    "enableLocateButton": true,
    "enableBasemapToggle": true,
    "enableShareDialog": true,
    "enableBookmarks": true,
    "enableOverviewMap": true,
    "openOverviewMap": false,
    "enableModifiedDate": true,
    "enableViewsCount": true,
    "enableMoreInfo": true,
    "defaultBasemap": "topo",
    "nextBasemap": "hybrid",
    "swipeType": "vertical",
    "swipeInvertPlacement": true,
    "hideNotesLayerPopups": true,
    "enableInstagram": true,
    "instagramVisible": false,
    "instagramTime": "",
    "enableFlickr": true,
    "flickrVisible": false,
    "flickrSearch": "",
    "flickrTime": "",
    "enableTwitter": true,
    "twitterVisible": false,
    "twitterSearch": "",
    "enableWebcams": true,
    "webcamsVisible": false,
    "enableYouTube": true,
    "youtubeVisible": false,
    "youtubeSearch": "",
    "youtubeTime": "all_time", // today, this_week, this_month, all_time
    "youtube_key": "AI39si5AmNrzX3VKNKo4Kcet9BVemrvyjl4B13ezBbNLsvKOlw9Vh3eL_57dZ2vC6M9PwV9i3bHm6emtZLr_BhQ8qtnTbvwzCw",
    "enableDialogModal": false,
    "dialogModalContent": "",
    "dialogModalTitle": "",
    "bitlyLogin": "esrimarketing",
    "bitlyKey": "R_52f84981da0e75b23aea2b3b20cbafbc",
    "twitterUrl": location.protocol + "//utility.arcgis.com/tproxy/proxy/1.1/search/tweets.json",
    "twitterSigninUrl": location.protocol + "//utility.arcgis.com/tproxy/signin",
    "flickr_key": "404ebea7d5bc27aa5251d1207620e99b",
    "webcams_key": "65939add1ebe8bc9cc4180763f5df2ca",
    "instagram_key": "288c36a1a42c49de9a2480a05d054619",
    "enablePrintButton": false,
    //Enter the url to your organizations bing maps key if you want to use bing basemaps
    "bingmapskey": "",
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "sharinghost": location.protocol + "//" + "www.arcgis.com",
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