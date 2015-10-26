/*global define */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true */
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
define({
    //Default configuration settings for the application. This is where you'll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings and url parameters.
    "appid": "",
    "webmap": "56197689ee7e4a8aa9f0d8da09ffe721",
    "oauthappid": null, //"AFTKRmv16wj14N3z",
    //Group templates must support a group url parameter. This will contain the id of the group.
    "group": "",
    //Enter the url to the proxy if needed by the application. See the 'Using the proxy page' help topic for details
    //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "proxy/proxy.ashx",

    //Template-specific properties in AGOL configuration
    "title": "Crowdsource Polling",
    "titleIcon": "images/banner.png",
    "displayText": "<p><b>Welcome to the crowdsource polling application</b></p><p>Use Crowdsource Polling to provide information and collect feedback on plans and issues around your community.</p><p>Search for a location or click an item in the list to get started.</p>",
    "color": "#206bdb",
    "featureLayer": {
        "id": "LandUseCasesVotesComments_8488",
        "fields": [{
            "id": "itemVotesField",
            "fields": ["VOTES"]
        }]
    },
    "commentNameField": "NAME",
    "allowFacebook": false,
    "facebookAppId": "",
    "allowGoogle": false,
    "googleplusClientId": "",
    "allowTwitter": true,
    "socialMediaDisclaimer": "Choose how you would like to sign in to this application. The name associated with your social media account will be added to any comments you post.",

    //Other template-specific properties
    "helpIcon": "[{'shape':{'type':'path','path':'M 9.6 0C 4.4 0 0.1 4.3 0.1 9.5 0.1 14.7 4.4 19 9.6 19 14.8 19 19.1 14.7 19.1 9.5 19.1 4.3 14.8 0 9.6 0zM 11 15.5c 0 0.2-0.1 0.3-0.3 0.3H 8.6c-0.2 0-0.3-0.1-0.3-0.3v-2.1c 0-0.2 0.1-0.3 0.3-0.3h 2.1c 0.2 0 0.3 0.1 0.3 0.3v 2.1zM 13 8.4C 12.8 8.7 12.4 9 11.9 9.5l-0.5 0.4c-0.2 0.2-0.4 0.4-0.4 0.6 0 0.1-0.1 0.3-0.1 0.8 0 0.2-0.1 0.3-0.3 0.3H 8.7c-0.1 0-0.2 0-0.2-0.1C 8.4 11.4 8.4 11.4 8.4 11.3 8.4 10.4 8.5 9.9 8.7 9.5 8.8 9.1 9.2 8.7 9.8 8.3L 10.3 7.9C 10.4 7.8 10.6 7.7 10.6 7.5 10.8 7.3 10.8 7.1 10.8 6.8 10.8 6.5 10.7 6.2 10.5 6 10.4 5.8 10 5.7 9.6 5.7 9.2 5.7 8.9 5.8 8.7 6.1 8.5 6.4 8.4 6.7 8.4 7.1 8.4 7.3 8.3 7.4 8.1 7.4H 6C 5.9 7.4 5.8 7.4 5.8 7.3 5.7 7.2 5.7 7.2 5.7 7.1 5.8 5.6 6.3 4.6 7.3 3.9 7.9 3.5 8.7 3.3 9.6 3.3c 1.1 0 2.1 0.3 2.9 0.8 0.8 0.6 1.2 1.4 1.2 2.6-0.1 0.6-0.3 1.2-0.7 1.7z'},'fill':{'r':0,'g':122,'b':194,'a':1}}]",
    "likeIcon": "[{'shape': {'type': 'path', 'path': 'm 11.017346,1.9360981 c -0.3,-0.7 -0.800001,-1.30000004 -1.6000008,-1.6 -0.7,-0.3 -1.4,-0.4 -2.1,-0.2 -0.7,0.2 -1.3,0.69999996 -1.7,1.3 -0.4,-0.60000004 -1,-1.1 -1.7,-1.3 -0.7,-0.2 -1.4,-0.2 -2.1,0.2 -0.8,0.39999996 -1.30000006,0.9 -1.60000006,1.6 -0.3,0.7 -0.3,1.5 0.1,2.3 0.70000006,1.7 5.20000006,5.7000001 5.20000006,5.7999999 0,-0.1 4.4999998,-4.0999999 5.2000008,-5.7999999 0.6,-0.8 0.6,-1.6 0.3,-2.3 z'},'fill':{'r':0,'g':0,'b':0,'a':.35}}]",
    "backIcon": "[{'shape': {'type': 'polyline', 'points': [{x: 12, y: 18.3}, {x: 3.4, y: 9.9}, {x: 11.8, y: 1.7}, {x: 10.2, y: 0}, {x: 1.7, y: 8.3}, {x: 1.7, y: 8.2}, {x: 0, y: 9.9}, {x: 0, y: 9.9}, {x: 0, y: 9.9}, {x: 1.7, y: 11.6}, {x: 1.7, y: 11.6}, {x: 10.3, y: 20}]}, 'fill':{'r':255,'g':255,'b':255}}]",
    "commentIcon": "[{'shape': {'type': 'polyline', 'points': [{x: 0, y: 0}, {x: 0, y: 7}, {x: 1, y: 7}, {x: 1, y: 10}, {x: 4, y: 7}, {x: 11, y: 7}, {x: 11, y: 0}]}, 'fill':{'r':255,'g':255,'b':255}}]",
    "galleryIcon": "[{'shape': {'type': 'path', 'path': 'M310.7,391.8v8.3h-9.4v-8.3H310.7 M311.5,391h-11v10h11V391L311.5,391z M302.1,398.5h7.9l-1.6-5l-2.4,3.3l-1.6-1.7 L302.1,398.5z M302.9,393.5c-0.4,0-0.8,0.4-0.8,0.8c0,0.5,0.4,0.8,0.8,0.8c0.4,0,0.8-0.4,0.8-0.8 C303.6,393.9,303.3,393.5,302.9,393.5z'},'fill':{'r':0,'g':0,'b':0,'a':.35}}]",

    "facebookAppScope": "public_profile",
    "twitterSigninUrl": location.protocol + "//utility.arcgis.com/tproxy/signin",
    "twitterUserUrl": location.protocol + "//utility.arcgis.com/tproxy/proxy/1.1/account/verify_credentials.json?q=&include_entities=true&skip_status=true&locale=en",
    "twitterCallbackUrl": "/oauth-callback-twitter.html",

    "searchAlwaysExpanded": false,  // Whether or not search button is always expanded (always shows its type-in box; true) or is dynamically expanded (false)
    "bingKey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "sharinghost": location.protocol + "//" + "www.arcgis.com",
    "units": null,
    //If your application needs to edit feature layer fields set this value to true. When false the map will
    //be created with layers that are not set to editable which allows the FeatureLayer to load features optimally.
    "editable": false,
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
