/*global define,document */
/*jslint sloppy:true,nomen:true */
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
define([
  "dojo/_base/declare",
  "dojo/_base/lang",
  "dojo/_base/kernel",
  "dojo/query!css3",
  "dijit/registry",
  "dojo/on",
  "dojo/string",
  "dojo/date/locale",
  "dojo/dom-construct",
  "dojo/dom-style",
  "dojo/_base/array",
  "esri/arcgis/utils",
  "esri/lang",
  "esri/layers/FeatureLayer",
  "esri/TimeExtent",
  "esri/dijit/TimeSlider",
  "application/MapUrlParams",
  "dojo/dom",
  "dojo/dom-class",
  "dojo/domReady!"
], function(
  declare, lang, kernel, query,
  registry,
  on,
  string,
  locale,
  domConstruct, domStyle,
  array,
  arcgisUtils, esriLang,
  FeatureLayer,
  TimeExtent, TimeSlider,
  MapUrlParams,
  dom, domClass) {
  return declare(null, {
    config: {},
    startup: function(config) {
      // Set lang attribute to current locale
      document.documentElement.lang = kernel.locale;
      // config will contain application and user defined info for the template such as i18n strings, the web map id
      // and application id
      // any url parameters and any application specific configuration information.
      if (config) {

        this.config = config;
        // Create and add custom style sheet
        if (this.config.customstyle) {
          var style = document.createElement("style");
          style.appendChild(document.createTextNode(this.config.customstyle));
          document.head.appendChild(style);
        }

        // shared styling support from open data
        if (this.config.sharedThemeConfig && this.config.sharedThemeConfig.attributes && this.config.sharedThemeConfig.attributes.theme) {
          var sharedTheme = this.config.sharedThemeConfig.attributes;
          this.config.logo = sharedTheme.layout.header.component.settings.logoUrl || sharedTheme.theme.logo.small || null;
          this.config.panelcolor = sharedTheme.theme.text.color;
          this.config.panelbackground = sharedTheme.theme.body.bg;
          this.config.timecolor = sharedTheme.theme.brand.secondary;
          this.config.slidercolor = sharedTheme.theme.brand.primary;

        }

        //supply either the webmap id or, if available, the item info
        var itemInfo = this.config.itemInfo || this.config.webmap;
        var mapParams = new MapUrlParams({
          center: this.config.center || null,
          extent: this.config.extent || null,
          level: this.config.level || null,
          marker: this.config.marker || null,
          mapSpatialReference: itemInfo.itemData.spatialReference,
          defaultMarkerSymbol: this.config.markerSymbol,
          defaultMarkerSymbolWidth: this.config.markerSymbolWidth,
          defaultMarkerSymbolHeight: this.config.markerSymbolHeight,
          geometryService: this.config.helperServices.geometry.url
        });
        mapParams.processUrlParams().then(lang.hitch(this, function(urlParams) {
          this._createWebMap(itemInfo, urlParams);

        }), lang.hitch(this, function(error) {
          this.reportError(error);
        }));
      } else {
        var error = new Error("Main:: Config is not defined");
        this.reportError(error);
      }
    },
    reportError: function(error) {
      // remove loading class from body
      domClass.remove(document.body, "app-loading");
      domClass.add(document.body, "app-error");
      // an error occurred - notify the user. In this example we pull the string from the
      // resource.js file located in the nls folder because we've set the application up
      // for localization. If you don't need to support multiple languages you can hardcode the
      // strings here and comment out the call in index.html to get the localization strings.
      // set message
      var node = dom.byId("loading_message");
      if (node) {
        if (this.config && this.config.i18n) {
          node.innerHTML = this.config.i18n.map.error + ": " + error.message;
        } else {
          node.innerHTML = "Unable to create map: " + error.message;
        }
      }
    },
    _createDialog: function(title, content, dialogDiv, dialogBtn) {
      require(["dijit/Dialog"], lang.hitch(this, function(Dialog) {
        var window = new Dialog({
          title: title,
          content: content
        });
        //Update panel color
        if (this.config.panelbackground) {
          query(".dijitDialogTitleBar").style("background", this.config.panelbackground.toString());
        }
        if (this.config.panelcolor) {
          query(".dijitDialogTitle").style("color", this.config.panelcolor.toString());
          query(".dijitDialogCloseIcon").style("color", this.config.panelcolor.toString());
        }
        on(dom.byId(dialogDiv), "click", function() {
          domClass.add(dialogBtn, "toggle-grey");
          window.show();
        });

        //Remove grayed out color
        on(query(".dijitDialogCloseIcon"), "click", function() {
          query(".button-container").forEach(function(node) {
            domClass.remove(node, "toggle-grey");
          });
        });
      }));
    },
    _createWidgets: function() {

      //Specify the app title
      document.title = this.config.response.itemInfo.item.title;
      if (this.config.title || this.config.about || this.config.share || this.config.logo) {
        domClass.add(document.body, "showtitle");
        if (this.config.title) {
          var title = this.config.titletext || this.config.response.itemInfo.item.title;
          dom.byId("title").innerHTML = title;
        }
      } else {
        domClass.add(dom.byId("titleContainer"), "hide");
      }
      //Add a logo
      if (this.config.logo) {
        domClass.remove(dom.byId("logo"), "hide");
        var link = null;
        if (this.config.logolink) {
          link = domConstruct.create("a", {
            href: this.config.logolink,
            target: "_blank"
          }, dom.byId("logo"));
        }

        var logoDiv = link || dom.byId("logo");
        domConstruct.create("img", {
          src: this.config.logo
        }, logoDiv);
      }

      //add share dialog
      if (this.config.share) {
        require(["application/ShareDialog"], lang.hitch(this, function(ShareDialog) {
          domClass.add(dom.byId("shareDiv"), "show");
          dom.byId("shareLabel").innerHTML = this.config.i18n.share.title;
          dom.byId("shareBtn").title = this.config.i18n.share.title;
          var shareWidget = new ShareDialog({
            map: this.map,
            image: this.config.sharinghost + "/sharing/rest/content/items/" + this.config.response.itemInfo.item.id + "/info/" + this.config.response.itemInfo.thumbnail,
            title: this.config.response.itemInfo.item.title,
            summary: this.config.response.itemInfo.item.snippet || ""
          }, domConstruct.create("div"));
          shareWidget.startup();
          this._createDialog(this.config.i18n.share.title, shareWidget.domNode, "shareDiv", "shareBtn");
        }));
      }
      //add about dialog
      if (this.config.about) {
        //Content can be configured or come from the item description
        //or snippet
        var aboutText = this.config.abouttext || this.config.response.itemInfo.item.description || this.config.response.itemInfo.item.snippet;
        if (!aboutText) {
          aboutText = this.config.i18n.about.error;
        }
        domClass.add(dom.byId("aboutDiv"), "show");
        dom.byId("aboutLabel").innerHTML = this.config.i18n.about.title;
        dom.byId("aboutBtn").title = this.config.i18n.about.title;

        this._createDialog(this.config.i18n.about.title, aboutText, "aboutDiv", "aboutBtn");
      }

      //add scale bar
      if (this.config.scale) {
        require(["esri/dijit/Scalebar"], lang.hitch(this, function(Scalebar) {
          var scalebar = new Scalebar({
            map: this.map,
            scalebarUnit: this.config.units
          });
        }));
      } else {
        domClass.add(document.body, "noscale");
      }
      //add legend
      if (this.config.legend) {
        require(["esri/dijit/Legend"], lang.hitch(this, function(Legend) {
          //on small screens show/hide the legend time slider
          var legendButton = dom.byId("legendButton");
          var legendContainer = dom.byId("legendContainer");
          var timeContainer = dom.byId("timeContainer");

          on(legendButton, "click", lang.hitch(this, function() {

            if (domClass.contains(legendButton, "icon-menu-open")) {
              domClass.add(legendButton, ["icon-menu-close", "move"]);
              domClass.remove(legendButton, "icon-menu-open");
              domClass.remove(legendContainer, "legend-hide");
              domClass.add(legendContainer, "legend-show");
              if (this.config.time) {
                domClass.remove(timeContainer, "show");
                domClass.add(timeContainer, "hide");
              }
            } else {
              domClass.remove(legendButton, ["icon-menu-close", "move"]);
              domClass.add(legendButton, "icon-menu-open");
              domClass.remove(legendContainer, "legend-show");
              domClass.add(legendContainer, "legend-hide");
              if (this.config.time) {
                domClass.remove(timeContainer, "hide");
                domClass.add(timeContainer, "show");
              }

            }
          }));
          var legendLayers = arcgisUtils.getLegendLayers(this.config.response);
          if (legendLayers.length < 1) {
            domClass.add(legendContainer, "legend-hide");
            domStyle.set("legendContainer", "display", "none");
            domStyle.set("legendButton", "display", "none");
            return;
          }
          var legend = new Legend({
            map: this.map,
            layerInfos: legendLayers
          }, domConstruct.create("div", {}, "legendDiv"));

          legend.startup();
          dom.byId("legendButton").title = this.config.i18n.legend.title;
          if (this.config.legendposition === "top-left") {
            domClass.add(legendContainer, "window-top-left");
            domClass.add("legendButton", "window-top-left");

          } else { //default
            domClass.add("legendButton", "window-top-right");
            domClass.add(legendContainer, "window-top-right");
          }


        }));
      } else {
        domClass.add(dom.byId("legendContainer"), "legend-hide");
        domStyle.set("legendContainer", "display", "none");
        domClass.add(dom.byId("legendContainer"), "hide");
        domClass.add(dom.byId("legendButton"), "hide");
        domClass.remove(dom.byId("legendButton"), "legendButtonDiv");
      }
      if (this.config.search) {
        this._addSearch();
      }

    },
    _addSearch: function() {
      //Add the search widget
      require(["esri/dijit/Search", "esri/tasks/locator", "application/SearchSources"], lang.hitch(this, function(Search, Locator, SearchSources) {
        if (!Search && !Locator && !SearchSources) {
          return;
        }
        var searchOptions = {
          map: this.map,
          itemData: this.config.response.itemInfo.itemData
        };
        if (this.config.searchConfig) {
          searchOptions.applicationConfiguredSources = this.config.searchConfig.sources || [];
        } else {
          //Default search options if nothing is configured.
          searchOptions.geocoders = this.config.helperServices.geocode;
        }


        var searchSources = new SearchSources(searchOptions);
        var createdOptions = searchSources.createOptions();
        createdOptions.enableButtonMode = true;
        createdOptions.expanded = false;

        if (this.config.searchConfig && this.config.searchConfig.activeSourceIndex) {
          createdOptions.activeSourceIndex = this.config.searchConfig.activeSourceIndex;
        }
        var search = new Search(createdOptions, domConstruct.create("div", {
          id: "search"
        }, "mapDiv"));

        search.startup();

        var positionClass = "window-top-right";
        if (this.config.legendposition === "top-right") {
          positionClass = "window-top-right";
        } else if (this.config.legendposition === "top-left") {
          positionClass = "window-top-left";
        }

        domClass.add("search", positionClass);

      }));
    },
    _updateTheme: function() {
      if (this.config.panelbackground) {
        query(".bg").style("backgroundColor", this.config.panelbackground.toString());
      }
      if (this.config.panelcolor) {
        query(".fg").style("color", this.config.panelcolor.toString());
      }

      if (this.config.timecolor) {
        var c = this.config.timecolor.toString();
        query(".tc").style("color", c);
        query(".calcite .dijitSliderImageHandle").style("background-color", c);
        query(".calcite .dijitSliderImageHandle").style("border-top-color", c);
      }
      if (this.config.slidercolor) {
        query(".dijitSliderProgressBarH").style("backgroundColor", this.config.slidercolor.toString());
      }
    },
    _updatePlayButton: function(add, remove) {
      // add is icon to add e.g. icon-pause
      // remove is icon to remove e.g. icon-play
      //switch play/pause icon
      var play = dom.byId("playSlider");
      domClass.remove(play, remove);
      domClass.add(play, add);
    },
    _displayTime: function() {
      //position the time window
      domClass.add("timeContainer", "window-" + this.config.timeposition);
      //Add the time slider the map is time aware or there are time aware layers
      var timeProperties = null,
        timeExtent = null;
      if (this.config.response.itemInfo.itemData.widgets && this.config.response.itemInfo.itemData.widgets.timeSlider) {
        timeProperties = this.config.response.itemInfo.itemData.widgets.timeSlider.properties;
        if (timeProperties.endTime > timeProperties.startTime) {
          timeExtent = new TimeExtent(new Date(timeProperties.startTime), new Date(timeProperties.endTime));
        }
      }
      // Overwrite time extent with custom time if specified
      this.config.humanize = false;
      if (this.config.durationTime && this.config.durationPeriod && this.config.tickTime && this.config.tickPeriod) {
        //var customEnd = moment().format("YYYY-MM-DD[T]HH:mm");
        var customEnd = moment(); //.format("MMMM Do YYYY , h:mm:ss a");
        var customStart = moment().subtract(this.config.durationTime, this.config.durationPeriod); //.format("MMMM Do YYYY , h:mm:ss a");
        timeExtent = new TimeExtent(new Date(customStart), new Date(customEnd));
        timeProperties.startTime = customStart;
        timeProperties.endTime = customEnd;
        timeProperties.timeStopInterval.interval = this.config.tickTime ;
        timeProperties.timeStopInterval.units = this.config.tickPeriod;
        if (this.config.humanizeDuration) {
          this.config.humanize = true;
        }
      }

      if (timeProperties && timeExtent) {

        //Add the time slider widget
        var timeSlider;
        timeSlider = new TimeSlider({
          loop: this.config.looptime,
          id: "timeSlider"
        }, "timeSliderDiv");
        domClass.add(timeSlider.domNode, "templateTimeSlider");


        this.map.setTimeExtent(timeExtent);
        this.map.setTimeSlider(timeSlider);

        if (timeProperties.numberOfStops) {
          timeSlider.createTimeStopsByCount(timeExtent, timeProperties.numberOfStops);
        } else {
          timeSlider.createTimeStopsByTimeInterval(timeExtent, timeProperties.timeStopInterval.interval, timeProperties.timeStopInterval.units);
        }

        timeSlider.setThumbCount(timeProperties.thumbCount);
        if (this.config.thumbMovingRate) {
          timeSlider.setThumbMovingRate(this.config.thumbMovingRate);
        } else {
          timeSlider.setThumbMovingRate(timeProperties.thumbMovingRate);
        }
        timeSlider.startup();

        // Set Locale
        if (kernel.locale) {
          moment.locale(kernel.locale);
        }

        // Populate label
        this._formatTime(this.map.timeExtent);

        if (this.config.autoplay) {
          timeSlider.play();
          this._updatePlayButton("icon-pause", "icon-play");
        }
        // If intermediate changes is true
        if (this.config.intermediatechanges) {
          timeSlider.set("intermediateChanges", true);
        }

        on(dom.byId("playSlider"), "click", lang.hitch(this, function() {
          var play = domClass.contains("playSlider", "icon-play");

          var removeClass = null,
            addClass = null;
          if (play) { //Switch to the pause icon and press play
            removeClass = "icon-play";
            addClass = "icon-pause";
            timeSlider.play();
          } else { //Switch to the play icon and press pause
            removeClass = "icon-pause";
            addClass = "icon-play";
            timeSlider.pause();
          }
          this._updatePlayButton(addClass, removeClass);

        }));

        //Listen for time extent changes
        on(timeSlider, "time-extent-change", lang.hitch(this, function(e) {
          if (!e.startTime && e.endTime) {
            console.log("Missing start time");
          }
          this._formatTime(e);
          // Are we at the end?
          var slider = timeSlider._slider,
            val;
          if (lang.isArray(slider.value)) {
            val = slider.value[1];
          } else {
            val = slider.value;
          }
          if (val == slider.maximum && timeSlider.loop !== true) {
            // At slider end so set play buttton
            this._updatePlayButton("icon-play", "icon-pause");
            on.once(dom.byId("playSlider"), "click", function() {
              if (val == slider.maximum) {
                timeSlider.play();
                if (timeSlider.thumbCount > 1) {
                  timeSlider.setThumbIndexes([0, 1]);
                } else {
                  timeSlider.setThumbIndexes(0);
                }
              }
            });
          }
        }));

        //Hide the play controls if configured.
        if (this.config.noslider) {
          //hide the play and slider controls
          domClass.add(dom.byId("timeContainer"), "noslider");
        }
        //Show the time navigation controls (prev,  next)
        if (this.config.timenav) {
          domClass.remove(dom.byId("nextSlider"), "hide");
          domClass.remove(dom.byId("prevSlider"), "hide");
          //handle forward/back navigation on time slider
          query(".timenav").on("click", lang.hitch(this, function(e) {
            if (timeSlider.playing) {
              timeSlider.pause();
              this._updatePlayButton("icon-play", "icon-pause");
            }
            if (e.target.id === "nextSlider") {
              timeSlider.next();
            } else {
              timeSlider.previous();
            }
          }));
        } else {
          domClass.add("playControls", "nonav");
        }

        if (!this.config.sliderticks) {
          domClass.add(timeSlider.domNode, "noTicks");
        }

      } else {
        //hide play and slider controls and add message about no time
        domClass.add(dom.byId("timeContainer"), "noslider");
        domClass.remove(dom.byId("timeControls"), "controlCont");
        domClass.add(dom.byId("playControls"), "hide");
        domClass.add("timeContainer", "window-bottom-center");
        var timeMessage = string.substitute(this.config.i18n.time.enableTimeMessage, {
          "link": "<a target='_blank' href='" + this.config.i18n.time.enableTimeMessageLink + "'>" + this.config.i18n.time.enableTimeMessageLink + "</a>"
        });
        dom.byId("timeLabel").innerHTML = timeMessage;
        domClass.add(dom.byId("timeSliderDiv"), "error-text");
      }
      this._updateTheme();
    },
    _formatTime: function(timeInfo) {
      var start = new Date(timeInfo.startTime),
        end = new Date(timeInfo.endTime);
      // Check to see if the hour/minute time is same. If so we'll hide it.
      var sameHour = moment(start).hour() === moment(end).hour();
      if (sameHour) {
        sameHour = moment(start).minute() === moment(end).minute();
      }
      var formatInfo = {
        groupMeridiems: true, // True displays am/pm once when possible
        spaceBeforeMeridiem: this.config.spaceBeforeMeridiem || true, //True adds a space before am/pm
        showDayOfWeek: this.config.showDayOfWeek || false, // Include day of week
        hideTime: this.config.hideTime || false,
        hideDate: this.config.hideDate || false, // Hide date  *useful when date is displayed elsewhere
        hideYear: this.config.hideYear || false, // Hide year
        implicitMinutes: this.config.implicitMinutes || true, // true chops of :00 on whole hours when possible
        implicitDate: this.config.implicitDate || false, // true hides the date if its today
        implicitYear: this.config.implicitYear || true, // true hides the year if its this year
        yearFormat: this.config.yearFormat || "YYYY", // Custom year format
        monthFormat: this.config.monthFormat || "MMMM", // Custom month format MMM
        weekdayFormat: this.config.weekdayFormat || "ddd", // custom weekday format
        dayFormat: this.config.dayFormat || "Do", // custom day format  D
        meridiemFormat: this.config.meridiemFormat || "A", // custom meridiem format (AM/PM)
        hourFormat: this.config.hourFormat || "h", // custom hour format
        minuteFormat: this.config.minuteFormat || "mm", // custom minute format
        allDay: "all day", // when all day show all day text instead of date
        explicitAllDay: false,
        lastNightEndsAt: 0
      };

      var range = null;
      moment.twixClass.formatTemplate = lang.hitch(this, function(left, right) {
        var formatString = null;
        if (this.config.showStartDate && this.config.showEndDate) {
          if (!this.config.singleLineDate) {
            formatString = left + "<br>" + this.config.dateSeparator + "<br>" + right;
          } else {
            if (this.config.dateSeparator === "") {
              this.config.dateSeparator = "-";
            }
            formatString = left + " " + this.config.dateSeparator + " " + right;
          }
        }
        if (!this.config.showStartDate && this.config.showEndDate) {
          // no start date but we have an end date (so only one line )
          formatString = " " + right;
        }
        if (this.config.showStartDate && !this.config.showEndDate) {
          formatString = left;
        }
        return formatString;
      });

      if (this.config.customFormatOption || this.config.preDefinedFormatOption) {
        range = moment(start).twix(end).simpleFormat(this.config.customFormatOption || this.config.preDefinedFormatOption);
      } else if (this.config.humanize) {
        // this is only valid if a custom duration is specified.
        range = moment(end).fromNow();
      } else {
        range = moment(start).twix(end, {
          allDay: sameHour ? true : false
        }).format(formatInfo);
      }
      dom.byId("timeLabel").innerHTML = range;
    },
    // create a map based on the input web map id
    _createWebMap: function(itemInfo, params) {

      params.mapOptions.slider = this.config.zoomslider;

      if (this.config.zoomslider === false) {
        domClass.add(document.body, "nozoom");
      }
      var sliderPosition = "top-left";
      if (this.config.legendposition === "top-left") {
        sliderPosition = "top-right";
      } else if (this.config.legendposition === "top-right") {
        sliderPosition = "top-left";
      }
      params.mapOptions.sliderPosition = sliderPosition;
      arcgisUtils.createMap(itemInfo, "mapDiv", {
        mapOptions: params.mapOptions,
        usePopupManager: true,
        layerMixins: this.config.layerMixins || [],
        editable: false,
        bingMapsKey: this.config.orgInfo.bingKey || ""
      }).then(lang.hitch(this, function(response) {
        this.map = response.map;
        if (params.markerGraphic) {
          // Add a marker graphic with an optional info window if
          // one was specified via the marker url parameter
          require(["esri/layers/GraphicsLayer"], lang.hitch(this, function(GraphicsLayer) {
            var markerLayer = new GraphicsLayer();

            this.map.addLayer(markerLayer);
            markerLayer.add(params.markerGraphic);

            if (params.markerGraphic.infoTemplate) {
              this.map.infoWindow.setFeatures([params.markerGraphic]);
              this.map.infoWindow.show(params.markerGraphic.geometry);
            }
          }));

        }
        this.config.response = response;
        // remove loading class from body
        domClass.remove(document.body, "app-loading");
        this._createWidgets();

        if (this.config.time) {
          this._displayTime();
        } else {
          domClass.add(dom.byId("timeContainer"), "hide");
          domClass.add(dom.byId("timeControls"), "hide");
        }

      }), this.reportError);
    }
  });
});
