define({
    //Default configuration settings for the applciation. This is where you"ll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
    "appid": "",
    "webmap": "4b762458c7994fc08b4994a2dc76e9fc",
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
    "enableScalebar": false,
    "defaultBasemap": "topo",
    "nextBasemap": "hybrid",
    "swipeLayer": [{
      "fields": [],
      "id": ""
    }],
     "locationSearch": true,
    //When searchExtent is true the locator will prioritize results within the current map extent.
    "searchExtent": false,
    "searchLayers":[{
        "id": "",
        "fields": []
    }],
    "swipeType": "vertical",
    "swipeInvertPlacement": false,
    "hideNotesLayerPopups": true,
    "enableInstagram": true,
    "instagramVisible": false,
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
    "youtube_key": "AIzaSyBvrlsx50mxX_W-Ra2cJ8PB0jKt0jACZfg",
    "enableDialogModal": false,
    "dialogModalContent": "",
    "dialogModalTitle": "",
    "bitlyLogin": "arcgis",
    "bitlyKey": "R_b8a169f3a8b978b9697f64613bf1db6d",
    "twitterUrl": location.protocol + "//utility.arcgis.com/tproxy/proxy/1.1/search/tweets.json",
    "twitterSigninUrl": location.protocol + "//utility.arcgis.com/tproxy/signin",
    "flickr_key": "404ebea7d5bc27aa5251d1207620e99b",
    "webcams_key": "L0mSb0kxVHmsh2ZeMGs2CqmGERjap1h9oBTjsn3DXhiErQhFiF",
    "instagramClientId": "47ce2d7ea1494adb98708f4b47319227",
    "instagramSigninUrl": "https://www.instagram.com/oauth/authorize",
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