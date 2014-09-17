 dojo.require("esri.widgets");
 dojo.require("esri.arcgis.utils");


 var map;
 var timeSlider;
 var timeProperties = null;
 var configOptions;

 function initMap(options) {
     configOptions = options;




     //read the legend header text from the localized strings file
     dojo.byId('legendHeader').innerHTML = configOptions.i18n.tools.legend.label;

     if (configOptions.bingMapsKey) {
         configOptions.bingmapskey = configOptions.bingMapsKey;
     }


     var itemInfo = configOptions.itemInfo || configOptions.webmap;
     var mapDeferred = esri.arcgis.utils.createMap(configOptions.itemInfo, "map", {
         mapOptions: {
             slider: true,
             sliderStyle: 'small',
             nav: false,
             showAttribution: true,
             wrapAround180: true
         },
         editable: false, 
         ignorePopups: false,
         bingMapsKey: configOptions.bingmapskey
     });

     mapDeferred.addCallback(function(response) {
         document.title = configOptions.title || response.itemInfo.item.title;
         dojo.byId("title").innerHTML = configOptions.title || response.itemInfo.item.title;
         dojo.byId("subtitle").innerHTML = configOptions.subtitle || response.itemInfo.item.snippet || "";



         map = response.map;

         //get any time properties that are set on the map
         if (response.itemInfo.itemData.widgets && response.itemInfo.itemData.widgets.timeSlider) {
             timeProperties = response.itemInfo.itemData.widgets.timeSlider.properties;
         }
         if (map.loaded) {
             initUI(response);
         } else {
             dojo.connect(map, "onLoad", function() {
                 initUI(response);
             });
         }
         //resize the map when the browser resizes
         dojo.connect(dijit.byId('map'), 'resize', map, map.resize);
     });

     mapDeferred.addErrback(function(error) {
         alert(configOptions.i18n.viewer.errors.createMap + " : " + error.message);
     });



 }

 function initUI(response) {
     //add chrome theme for popup
     dojo.addClass(map.infoWindow.domNode, "chrome");
     //add the scalebar
     var scalebar = new esri.dijit.Scalebar({
         map: map,
         scalebarUnit: configOptions.i18n.viewer.main.scaleBarUnits //metric or english
     });

     //create the legend - exclude basemaps and any note layers
     var layerInfo = esri.arcgis.utils.getLegendLayers(response);
     if (layerInfo.length > 0) {
         var legendDijit = new esri.dijit.Legend({
             map: map,
             layerInfos: layerInfo
         }, "legendDiv");
         legendDijit.startup();
     } else {
         dojo.byId('legendDiv').innerHTML = configOptions.i18n.tools.legend.layerMessage;
     }

     //check to see if the web map has any time properties

     if (timeProperties) {

         var startTime = timeProperties.startTime;
         var endTime = timeProperties.endTime;
         var fullTimeExtent = new esri.TimeExtent(new Date(startTime), new Date(endTime));

         map.setTimeExtent(fullTimeExtent);
         //create the slider
         timeSlider = new esri.dijit.TimeSlider({
             style: "width: 100%;",
             loop: true
         }, dojo.byId("timeSliderDiv"));

         map.setTimeSlider(timeSlider);
         //Set time slider properties
         timeSlider.setThumbCount(timeProperties.thumbCount);
         timeSlider.setThumbMovingRate(timeProperties.thumbMovingRate);
         //define the number of stops
         if (timeProperties.numberOfStops) {
             timeSlider.createTimeStopsByCount(fullTimeExtent, timeProperties.numberOfStops);
         } else {
             timeSlider.createTimeStopsByTimeInterval(fullTimeExtent, timeProperties.timeStopInterval.interval, timeProperties.timeStopInterval.units);
         }
         //set the thumb index values if the count = 2
         if (timeSlider.thumbCount == 2) {
             timeSlider.setThumbIndexes([0, 1]);
         }


         dojo.connect(timeSlider, 'onTimeExtentChange', updateTimeSliderTitle);

         timeSlider.startup();
     }
 }
function updateTimeSliderTitle(timeExtent) {
    console.log(this);
    var slider = this;
    var start = null,
        end = null;

    if (!timeExtent) {
        // startup
        if (slider.thumbCount == 2) {
            start = slider.timeStops[0];
            end = slider.timeStops[1];
        } else {
            start = slider.timeStops[0];
        }
    } else {
        start = timeExtent.startTime;
        if ((timeExtent.endTime.getTime() - timeExtent.startTime.getTime()) > 0) {
            end = timeExtent.endTime;
        }
    }

    var startDatePattern = null;
    var endDatePattern = null;
    var startTimePattern = null;
    var endTimePattern = null;
    if (end && start.getFullYear() == end.getFullYear()) {
        if (start.getMonth() == end.getMonth()) {
            if (start.getDate() == end.getDate()) {
                if (start.getHours() == end.getHours()) {
                    if (start.getMinutes() == end.getMinutes()) {
                        if (start.getSeconds() == end.getSeconds()) {
                            // same second
                            startDatePattern = configOptions.i18n.tools.time.datePattern;
                            startTimePattern = configOptions.i18n.tools.time.millisecondTimePattern;
                            endTimePattern = configOptions.i18n.tools.time.millisecondTimePattern;
                        } else { // same minute
                            startDatePattern = configOptions.i18n.tools.time.datePattern;
                            startTimePattern = configOptions.i18n.tools.time.secondTimePattern;
                            endTimePattern = configOptions.i18n.tools.time.secondTimePattern;
                        }
                    } else { // same hour
                        startDatePattern = configOptions.i18n.tools.time.datePattern;
                        startTimePattern = configOptions.i18n.tools.time.minuteTimePattern;
                        endTimePattern = configOptions.i18n.tools.time.minuteTimePattern;
                    }
                } else { // same day
                    startDatePattern = configOptions.i18n.tools.time.datePattern;
                    startTimePattern = configOptions.i18n.tools.time.hourTimePattern;
                    endTimePattern = configOptions.i18n.tools.time.hourTimePattern;
                }
            } else { // same month
                if (end.getDate() - start.getDate() < 2) {
                    // less than 2 days
                    startDatePattern = configOptions.i18n.tools.time.datePattern;
                    startTimePattern = configOptions.i18n.tools.time.hourTimePattern;
                    endDatePattern = configOptions.i18n.tools.time.datePattern;
                    endTimePattern = configOptions.i18n.tools.time.hourTimePattern;
                } else {
                    startDatePattern = configOptions.i18n.tools.time.datePattern;
                    endDatePattern = configOptions.i18n.tools.time.datePattern;
                }
            }
        } else { // same year
            startDatePattern = configOptions.i18n.tools.time.datePattern;
            endDatePattern = configOptions.i18n.tools.time.datePattern;
        }
    } else if (end && end.getFullYear() - start.getFullYear() > 2) {
        startDatePattern = configOptions.i18n.tools.time.yearPattern;
        endDatePattern = configOptions.i18n.tools.time.yearPattern;
    } else {
        startDatePattern = configOptions.i18n.tools.time.datePattern;
        endDatePattern = configOptions.i18n.tools.time.datePattern;
    }

    var startTime = dojo.date.locale.format(start, {
        datePattern: startDatePattern,
        timePattern: startTimePattern,
        selector: (startDatePattern && startTimePattern) ? null : (startDatePattern ? "date" : "time")
    });
    var endTime = null;
    if (end) {
        endTime = dojo.date.locale.format(end, {
            datePattern: endDatePattern,
            timePattern: endTimePattern,
            selector: (endDatePattern && endTimePattern) ? null : (endDatePattern ? "date" : "time")
        });
    }

    var info;
    if (end) {
        info = dojo.string.substitute(configOptions.i18n.tools.time.timeRange, {
            start_time: startTime,
            end_time: endTime
        });
    } else {
        info = "" + startTime;
    }
    dojo.byId("timeSliderLabel").innerHTML = info;

}

 function formatDate(date, datePattern) {
     return dojo.date.locale.format(date, {
         selector: 'date',
         datePattern: datePattern
     });
 }
