dojo.require("social.twitter");

 var map;
 var twitterLayer;
 var deferreds = [];
 var configOptions;


 function initMap(options) {
  configOptions = options;


   //Update the ui strings from configOptions.i18n file
   dojo.byId('descriptionHeader').innerHTML = configOptions.i18n.viewer.sidePanel.label;
   var tweetLabel = dijit.byId('tweetLabel');
   tweetLabel.set('title', configOptions.i18n.tools.tweets.title);
   tweetLabel.set('label', configOptions.i18n.tools.tweets.label);
   dojo.byId('twittersearch').placeholder = configOptions.i18n.tools.tweets.search.placeholder;
   dojo.byId("twittersearch").title = configOptions.i18n.tools.tweets.share.twitter.title;
   dojo.byId('emailImage').title = configOptions.i18n.tools.tweets.share.email.title;
   dojo.byId('emailImage').alt = configOptions.i18n.tools.tweets.share.email.label;

   dojo.byId('facebookImage').title = configOptions.i18n.tools.tweets.share.facebook.title;
   dojo.byId('facebookImage').alt = configOptions.i18n.tools.tweets.share.facebook.label;

   dojo.byId('twitterImage').title = configOptions.i18n.tools.tweets.share.twitter.title;
   dojo.byId('twitterImage').alt = configOptions.i18n.tools.tweets.share.twitter.label;

   //Hook up key press events for search text box
   dojo.connect(dijit.byId("twittersearch"), "onKeyUp", function (e) {
     if (e.keyCode == 13) {
        configOptions.search = dojo.byId("twittersearch").value;
        searchTwitter(configOptions.search);
    }
   });

   dojo.connect(dojo.byId('searchBtn'),'onclick',function(){
      configOptions.search = dojo.byId("twittersearch").value;
      searchTwitter(configOptions.search);
   });

   dojo.connect(dojo.byId('clearBtn'),'onclick',function(){
      if(twitterLayer){
        dojo.byId('twittersearch').value = '';
        twitterLayer.clear();
      }
   });

  var itemInfo = configOptions.itemInfo || configOptions.webmap;
  createApp(itemInfo);

 }

 function createApp(itemInfo) {
   if(configOptions.bingMapsKey){
    configOptions.bingmapskey = configOptions.bingMapsKey;
   }

   //Display the webmap from arcgis.com
   var mapDeferred = esri.arcgis.utils.createMap(itemInfo, "map", {
     mapOptions: {
       sliderStyle:'small',
       nav: false,
       showAttribution:true
     },
     editable: false,
     ignorePopups: false,
     bingMapsKey: configOptions.bingMapsKey
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

                //search if a keyword was specified
               if (configOptions.search !== "") {
                  var search = dojo.byId("twittersearch").value = configOptions.search;
                  searchTwitter(search);
               }


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
                var timeExtent = twitterLayer.timeExtent;
                createTimeSlider(timeExtent);
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


     if (configOptions.extent) {
       map.setExtent(new esri.geometry.Extent(dojo.fromJson(configOptions.extent)));
       var extentHandler = dojo.connect(map, 'onExtentChange', function () {
         dojo.disconnect(extentHandler);
         if (configOptions.search !== "") {
            var search = dojo.byId("twittersearch").value = configOptions.search;
            searchTwitter(search);
         }
       });
     }


     //if a search term was included in the url but no extent - display tweets
     if (configOptions.search !== "" && !configOptions.extent) {
        var search = dojo.byId("twittersearch").value = configOptions.search;
     }


     var itemInfo = response.itemInfo;
     document.title = configOptions.title || response.itemInfo.item.title;
     dojo.byId("title").innerHTML = configOptions.title || itemInfo.item.title;
     dojo.byId("subtitle").innerHTML = configOptions.subtitle || itemInfo.item.snippet || "";
     dojo.byId("owner").innerHTML = configOptions.owner || itemInfo.item.owner;

     if (!configOptions.sidebarContent) {
       dojo.byId("description").innerHTML = configOptions.description || itemInfo.item.description || "";
     }

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
     alert("Unable to create map: ", dojo.toJson(error.message));
   });
 }

 function initUI() {

   var scalebar = new esri.dijit.Scalebar({
     map: map,
     scalebarUnit: configOptions.i18n.viewer.main.scaleBarUnits //metric or english
   });
  //update the facebook, email and twitter links when users click the Twitter dropdown
  dojo.connect(dojo.byId('tweetLabel'),'onclick',createLinks);
  map.infoWindow.resize(290,200);
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


 /*Social Networking*/
 function createLinks() {

   //create links for email, facebook and twitter
   //use bit.ly to shorten the url
   var search = "";
   var search = (dojo.byId('twittersearch').value) ? ("search=" + dojo.byId('twittersearch').value) : "";

   //get the current map extent
   var extent = "";
   extent = "&extent=" + dojo.toJson(map.extent.toJson());
   var appUrl = (document.location.href.split("?"));

   var link = appUrl[0] + "?" + search + extent + "&webmap=" + configOptions.webmap;

   var url = "&longUrl=" + encodeURIComponent(link) + "&format=json";

   var bitlyUrl = "http://api.bit.ly/v3/shorten?login=arcgis&apiKey=R_b8a169f3a8b978b9697f64613bf1db6d";
   var mapTitle = encodeURIComponent(dojo.byId("title").innerHTML);
   esri.request({
     url: bitlyUrl + url,
     handleAs: "json",
     callbackParamName: "callback",
     load: function (results) {
       var shortUrl = results.data.url;
       dojo.byId('mailLink').href = "mailto:?subject=" + mapTitle + "&body=Check out this map: %0D%0A " + shortUrl;
       dojo.byId('facebookLink').href = "http://www.facebook.com/sharer.php?u=" + shortUrl + "&t=" + mapTitle;
       dojo.byId('twitterLink').href = "http://www.twitter.com/home?status=" + mapTitle + "+" + shortUrl;
     },
     error: function (e) {
       console.log("Error : " + e.message);
     }
   });

 }
function searchTwitter(search){
  twitterLayer.clear();
  twitterLayer.update(search);
}
