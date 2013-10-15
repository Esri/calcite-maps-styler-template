    dojo.require("social.twitter");
    dojo.require("esri.widgets");
    dojo.require("esri.arcgis.utils");


    dojo.require("dojo.DeferredList");


    var map;
    var twitterLayer;
    var deferreds = [];
    var timeSlider;
    var configOptions;


    function initMap(options) {
        configOptions = options;


        dojo.byId('searchHeader').innerHTML = configOptions.i18n.viewer.sidePanel.label;
        dojo.byId('status').innerHTML = configOptions.i18n.tools.tweets.status;
        dojo.byId('searchBtn').title = configOptions.i18n.tools.tweets.search.title;
        dojo.byId('clearBtn').title = configOptions.i18n.tools.tweets.clear.title;
        dojo.byId('twittersearch').placeholder = configOptions.i18n.tools.tweets.search.placeholder;

        //hook up key press event for search text box so a twitter search 
        //occurs when users presses search button or hits enter key
        dojo.connect(dijit.byId("twittersearch"), "onKeyUp", function (e) {
            if (e.keyCode == 13) searchTwitter();
        });

        dojo.connect(dojo.byId('searchBtn'), 'onclick', function () {
            searchTwitter();
        });


        dojo.connect(dojo.byId('clearBtn'), 'onclick', clearTimeResults);

        if (configOptions.bingMapsKey) {
            configOptions.bingmapskey = configOptions.bingMapsKey;
        }


        createMap();

    }
    function clearTimeResults(){

        if (twitterLayer) {
            twitterLayer.clear();



            if (dijit.byId('timeSlider')) {
                dijit.byId('timeSlider').destroy();
            }
            dojo.byId("twitterfeedback").innerHTML = "";
            dojo.byId("timeDetails").innerHTML = "";
            dojo.byId("twittersearch").value = "";
            dojo.byId("twitterDetails").innerHTML = "";
            esri.hide(dojo.byId("status"));
        }
    }
    function createMap() {


        //display the webmap from arcgis.com
        var popup = new esri.dijit.Popup(null, dojo.create("div"));

        var mapDeferred = esri.arcgis.utils.createMap(configOptions.webmap, "map", {
            mapOptions: {
                slider: true,
                nav: false,
                sliderStyle: 'small',
                showAttribution: true,
                wrapAround180: true,
                infoWindow: popup
            },
            ignorePopups: false,
            bingMapsKey: configOptions.bingmapskey,
            geometryServiceURL: configOptions.geometryserviceurl
        });

        mapDeferred.addCallback(function (response) {
            map = response.map;


            twitterLayer = new social.twitter({
                map: map,
                searchTerm: dojo.trim(dojo.byId("twittersearch").value),
                appName: "Twitter Timeline",
                config: configOptions
            });
            var def = twitterLayer.init();
            def.addCallback(function () {
                //twitter layer created 
                if (twitterLayer.authenticated) {
                    //signed in so create swap-account link
                    enablePanel();
                    dojo.create("a", {
                        innerHTML: configOptions.i18n.tools.tweets.switchAccount,
                        className: "oAuthSignIn",
                        onclick: function () {
                            openTwitterWindow(configOptions.twitterSignInUrl, true);
                        }
                    }, "credentialsPanel");


                } else {

                    //create sign-in link
                    dojo.create("a", {
                        innerHTML: configOptions.i18n.tools.tweets.signIn,
                        className: "oAuthSignIn",
                        onclick: function () {
                            openTwitterWindow(configOptions.twitterSignInUrl, false);
                        }
                    }, "credentialsPanel");




                }

                dojo.connect(twitterLayer, 'onUpdateEnd', function () {
                    
                    if(twitterLayer && twitterLayer.featureLayer && twitterLayer.featureLayer.graphics.length <= 1){

                        twitterLayer.timeExtent = null;
                    }
                     createTimeSlider(twitterLayer.timeExtent);               

                });

                dojo.connect(twitterLayer, "authenticate", function () {
                    //Not signed in - display the sign-in form 
                    openTwitterWindow(configOptions.twitterSignInUrl, true);


                });

                dojo.connect(twittersearch, "unauthenticate", function () {
                    //signed in          

                });

                //when a tweet is clicked scroll to the associated item in the content pane
                dojo.connect(twitterLayer, "onClick", function (evt) {
                    //pause the time slider when an item is clicked
                    if (dijit.byId('timeSlider')) {
                        if (timeSlider.playing) {
                            timeSlider.pause();
                        }
                    }
                    var selectedTweet = dojo.query("li#tweet-" + evt.graphic.attributes.OBJECTID);
                    if (selectedTweet) {
                        var list = dojo.byId('twitterDetails');

                        if (selectedTweet.length > 0) {
                            selectedTweet[0].scrollIntoView();
                        }


                    }
                });




                map.addLayer(twitterLayer.featureLayer);



            });


            //Set the application title and subtitle based on content
            //from the arcgis.com item.
            var itemInfo = response.itemInfo;
            document.title = configOptions.title || itemInfo.item.title;
            dojo.byId("title").innerHTML = configOptions.title || itemInfo.item.title;
            dojo.byId("subtitle").innerHTML = configOptions.subtitle || itemInfo.item.snippet || "";

            //add user interface components (scalebar etc) when the map
            //is loaded.
            if (map.loaded) {
                initUI();
            } else {
                dojo.connect(map, "onLoad", function () {
                    initUI();
                });
            }
            //resize the map when the browser resizes
            dojo.connect(dijit.byId('map'), 'resize', map, map.resize);
        });
        mapDeferred.addErrback(function (error) {
            alert(configOptions.i18n.viewer.errors.createMap + " : " + error.message);
        });
    }

    function openTwitterWindow(page, forceLogin) {


        var pathRegex = new RegExp(/\/[^\/]+$/);
        var redirect_uri = encodeURIComponent(location.protocol + '//' + location.host + location.pathname.replace(pathRegex, '') + '/oauth-callback.html');
        var w = screen.width / 2;
        var h = screen.height / 1.5;
        var left = (screen.width / 2) - (w / 2);
        var top = (screen.height / 2) - (h / 2);
        if (page) {
            page += '?';
            if (forceLogin) {
                page += 'force_login=true';
            }
            if (forceLogin && redirect_uri) {
                page += '&';
            }
            if (redirect_uri) {
                page += 'redirect_uri=' + redirect_uri;
            }
            window.open(
                page,
                "twoAuth", 'scrollbars=yes, resizable=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left,
                true);
            window.oAuthCallback = function () {
                window.location.reload();
            };
        }
    }

    function enablePanel() {
        dojo.query("input", dojo.byId("searchHolder")).attr("disabled", false);
        dijit.byId("twittersearch").set("disabled",false);
    }

    function initUI() {
        if (configOptions.search) {
            dojo.byId("twittersearch").value = configOptions.search;
            dojo.byId("twittersearch").focus();
        }

        //add theme for popup and a scalebar to the map
        dojo.addClass(map.infoWindow.domNode, "chrome");
        var scalebar = new esri.dijit.Scalebar({
            map: map,
            scalebarUnit: configOptions.i18n.viewer.main.scaleBarUnits //metric or english
        });
    }


    function searchTwitter() {

        //clear any existing results

        if (dijit.byId('timeSlider')) {
            dijit.byId('timeSlider').destroy();
        }
        dojo.byId("timeDetails").innerHTML = "";
        dojo.byId("twitterfeedback").innerHTML = "";
        dojo.byId("twitterDetails").innerHTML = "";
 

        //show the progress dialog 
        esri.show(dojo.byId('status'));
        twitterLayer.clear();
        var search = dojo.trim(dojo.byId("twittersearch").value);

        twitterLayer.update(search);


    }

    function findDefaultInterval(fullTimeExtent) {
        var interval;
        var units;
        if(fullTimeExtent && fullTimeExtent.endTime && fullTimeExtent.startTime){
            var timePerStop = (fullTimeExtent.endTime.getTime() - fullTimeExtent.startTime.getTime()) / 10;

            var month = 1000 * 60 * 60 * 24 * 30;
            if (timePerStop > month) {
                interval = Math.round(timePerStop / month);
                units = "esriTimeUnitsMonths";
            } else {
                var week = 1000 * 60 * 60 * 24 * 7;
                if (timePerStop > week) {
                    interval = Math.round(timePerStop / week);
                    units = "esriTimeUnitsWeeks";
                } else {
                    var day = 1000 * 60 * 60 * 24;
                    if (timePerStop > day) {
                        interval = Math.round(timePerStop / day);
                        units = "esriTimeUnitsDays";
                    } else {
                        var hour = 1000 * 60 * 60;
                        if (timePerStop > hour) {
                            interval = Math.round(timePerStop / hour);
                            units = "esriTimeUnitsHours";
                        } else {
                            var minute = 1000 * 60;
                            if (timePerStop > minute) {
                                interval = Math.round(timePerStop / minute);
                                units = "esriTimeUnitsMinutes";
                            } else {
                                var second = 1000;
                                if (timePerStop > second) {
                                    interval = Math.round(timePerStop / second);
                                    units = "esriTimeUnitsSeconds";
                                } else {
                                    interval = Math.round(timePerStop);
                                    units = "esriTimeUnitsMilliseconds";
                                }
                            }
                        }
                    }
                }
            }
            var timeProperties = {};

            timeProperties.timeSliderDefaultInterval = interval;
            timeProperties.timeSliderDefaultUnits = units;
            return timeProperties;
        }else{
            return null;
        }

    }


    function formatDate(value) {
        var inputDate = new Date(value);
        return dojo.date.locale.format(inputDate, {
            selector: 'date',
            datePattern: configOptions.i18n.tools.time.datePattern //'MMMM d, h:mm a'
        });
    }

    function createTimeSlider(twitterTimeExtent) {

        //get the slider tic and units
        var timeProperties = findDefaultInterval(twitterTimeExtent);
        if(timeProperties === null){
            var statusMessage = null;
            if(twitterLayer.dataPoints.length === 1){
                //one tweet found. Displayed but no slider
                //statusMessage = "One result found " + new Date(twitterLayer.dataPoints[0].attributes.created_at);
               var f = {
                features: twitterLayer.featureLayer.graphics
               }
               updatePanel(f);

            }else{
                //No tweets found
                statusMessage = "No results found. Try another search."
                clearTimeResults();
            }
                //message that no results were found and stop progress indicator 

            esri.show(dojo.byId("twitterfeedback"));
            dojo.byId("twitterfeedback").innerHTML = statusMessage;
            esri.hide(dojo.byId('status'));
            return;
        }else{
            esri.hide(dojo.byId("twitterfeedback"));
        }


        if (dijit.byId('timeSlider')) {
            dijit.byId('timeSlider').destroy();
        }
        var tsDiv = dojo.create("div", null, dojo.byId('timeSliderDiv'));

        timeSlider = new esri.dijit.TimeSlider({
            id: 'timeSlider',
            options: {
                excludeDataAtLeadingThumb: true
            }
        }, tsDiv);


        //If start and end are same date then set to one thumb
        if(twitterTimeExtent.startTime === twitterTimeExtent.endTime){
            console.log("same");
            timeSlider.singleThumbAsTimeInstant(true);
            timeSlider.setThumbCount(1);
        }else{
            timeSlider.createTimeStopsByTimeInterval(twitterTimeExtent, timeProperties.timeSliderDefaultInterval, timeProperties.timeSliderDefaultUnits, {
                resetStartTime: true
            });

            timeSlider.setThumbCount(2);
        }



        //When the time extent changes update the list 
        //to contain tweet text
        dojo.connect(timeSlider, "onTimeExtentChange", function (timeExtent) {


            //format the dates 
            var startTime = formatDate(timeExtent.startTime);
            var endTime = formatDate(timeExtent.endTime);


            var timeString = esri.substitute({
                "start_time": startTime,
                "end_time": endTime
            }, configOptions.i18n.tools.time.timeRange);
            dojo.byId('timeDetails').innerHTML = "<i>" + timeString + "</i>";

            var query = new esri.tasks.Query();

            query.timeExtent = timeExtent;
            twitterLayer.featureLayer.queryFeatures(query, updatePanel);
        });


        timeSlider.startup();
        map.setTimeSlider(timeSlider);
        esri.hide(dojo.byId('status'));

    }
    function updatePanel(featureSet){


      var ul = dojo.byId('twitterDetails');
        dojo.empty(ul);
        dojo.forEach(featureSet.features, function (feature) {

            var content = feature.getContent();
            var li = dojo.create("li", {
                onclick: dojo.hitch(this, function (evt) {
                    //pause the time slider when an item is clicked
                    if(timeSlider){
                        if (timeSlider.playing) {
                            timeSlider.pause();
                        }
                    }

                    //select the tweet graphic that matches the selected 
                    //item and display the popup
                    var query = new esri.tasks.Query();
                    query.objectIds = [evt.currentTarget.id.split("-")[1]];

                    twitterLayer.featureLayer.selectFeatures(query, esri.layers.FeatureLayer.SELECTION_NEW, function (feature) {
                        //display info window for feature
                        map.infoWindow.setFeatures(feature);
                        map.infoWindow.show(feature[0].geometry);
                        map.centerAt(feature[0].geometry);
                    });
                }),
                innerHTML: content,
                id: 'tweet-' + feature.attributes.OBJECTID
            }, ul);
            //add a bit of padding and a bottom border if there is more than one tweet.
            if(featureSet.features.length > 1){
                dojo.addClass(li, 'tweetItem');
            }

        });



    }