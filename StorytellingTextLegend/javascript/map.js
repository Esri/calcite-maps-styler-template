dojo.require("esri.map");
dojo.require("esri.widgets");
dojo.require("esri.layout");
dojo.require("esri.arcgis.utils");
dojo.require("esri.dijit.HomeButton");
dojo.require("esri.IdentityManager");
dojo.require("dojo.promise.all");
dojo.require("dojox.fx");



var _maps = [],
    timeoutComplete = false,
    timeSlider, _timeProperties = [],
    timeInterface = false,
    _thumbIndexes = [],
    mapsLoaded = 0,
    mapsReady = false,
    isPlaying = false,
    mapsReadyForAnimation = false,
    cm, mapExtent;
var configOptions;

var toBoolean = function (str) {

    if (!str.toLowerCase) {
        return str;
    }
    switch (str.toLowerCase()) {
    case "true":
        return true;
    case "false":
        return false;
    default:
        return true;
    }
};

function initMap(options) {
    configOptions = options;


    var dirNode = document.getElementsByTagName("html")[0];
    if (configOptions.i18n.isRightToLeft) {
        dirNode.setAttribute("dir", "rtl");
        dojo.addClass(dirNode, "esriRtl");
        //Page Specific
        dijit.byId("leftPane").attr("region", "right");
        dijit.byId("logoArea").attr("region", "left");
    } else {
        dirNode.setAttribute("dir", "ltr");
        dojo.addClass(dirNode, "esriLtr");
        //Page Specific
        dijit.byId("leftPane").attr("region", "left");
        dijit.byId("logoArea").attr("region", "right");
    }


    dojo.byId('loading').innerHTML = configOptions.i18n.viewer.loading.message;
    dojo.byId('legendHeaderText').innerHTML = configOptions.i18n.viewer.sidePanel.legendHeader;




    if (configOptions.displayDescription) {
        configOptions.displayDescription = toBoolean(configOptions.displayDescription);
    }
    if (configOptions.displayLegend) {
        configOptions.displayLegend = toBoolean(configOptions.displayLegend);
    }
    if (configOptions.loop) {
        configOptions.loop = toBoolean(configOptions.loop);
    }
    if (configOptions.syncMaps) {
        configOptions.syncMaps = toBoolean(configOptions.syncMaps);
    }

    if (configOptions.webmap) {
        if (dojo.isArray(configOptions.webmap) == false && getWebMaps(configOptions.webmap).length > 1) {
            configOptions.webmaps = getWebMaps(configOptions.webmap);
            if (configOptions.tabs) {
                configOptions.tabTitles = getTabs(configOptions.tabs);
            }
        } else if (dojo.isArray(configOptions.webmap) == false) {
            configOptions.webmaps[0].id = configOptions.webmap;
        } else {
            dojo.forEach(configOptions.webmap, function (webmap, i) {
                configOptions.webmaps[i] = {
                    "id": webmap
                };
                if (configOptions.tabTitle) {
                    if (configOptions.tabTitles[i] == null || configOptions.tabTitles[i].title == "") {
                        if (dojo.isArray(configOptions.tabTitle) == false) {
                            if (i == 0) {
                                configOptions.tabTitles[0] = {
                                    "title": configOptions.tabTitle
                                } || {
                                    "title": ""
                                };
                            } else {
                                configOptions.tabTitles[i] = {
                                    "title": ""
                                };
                            }
                        } else {
                            configOptions.tabTitles[i] = {
                                "title": configOptions.tabTitle[i]
                            } || {
                                "title": ""
                            };
                        }
                    }
                } else {
                    configOptions.tabTitles[i] = {
                        "title": ""
                    };
                }
            });
        }
    }


    createMap();
}

function createMap() {
    var deferreds = [];
    dojo.forEach(configOptions.webmaps, function (arg, i) {

        if (configOptions.tabTitles[i] == null) {
            configOptions.tabTitles[i] = {
                "title": ""
            };
        }

        dojo.place("<div id='mapDiv" + i + "' class='map'></div>", dojo.byId('mapPane'), "last");
        if (configOptions.webmaps.length > 1) {
            dojo.place("<h3 id='title" + i + "' class='mapTitle'></h3>", dojo.byId('descriptionPanel'), "last");
            dojo.place("<div id='tab" + i + "' class='tab' onclick='changeMap(" + i + ")'><p id='tabText" + i + "' class='tabText'></p></div>", dojo.byId('tabArea'), "last");
            dojo.addClass(dojo.byId("tab0"), "selected");
        }
        dojo.place("<div id='description" + i + "' class='description'></div>", dojo.byId('descriptionPanel'), "last");
        dojo.place("<div id='legend" + i + "' class='legend'></div>", dojo.byId('legendPanel'), "last");

        deferreds.push(esri.arcgis.utils.createMap(arg.id, "mapDiv" + i, {
            mapOptions: {
                slider: true,
                nav: false,
                wrapAround180: true
            },
            ignorePopups: false,
            editable: false,
            bingMapsKey: configOptions.bingmapskey
        }));

    });

    var all = new dojo.promise.all(deferreds);
    all.always(function (results) {

        dojo.forEach(results, function (result, i) {

            if (result.map) {
                var map = result.map;
                _maps[i] = map;

                map.on("click", stopTime);
                map.on("extent-change", syncExtents);
                map.on("update-start", function () {
                    mapsReadyForAnimation = false;
                });
                map.on("update-end", function () {
                    mapsReadyForAnimation = false;
                    playAnimation();
                });

                if (i === 0) {
                    document.title = configOptions.title || result.itemInfo.item.title || "";
                    dojo.byId("title").innerHTML = document.title;
                    dojo.byId("subtitle").innerHTML = configOptions.subtitle || result.itemInfo.item.snippet || "";
                    dojo.byId("description0").innerHTML = configOptions.description || result.itemInfo.item.description || "";
                    if (configOptions.webmaps.length > 1) {
                        dojo.byId("title0").innerHTML = result.itemInfo.item.title || "";
                        dojo.byId("description0").innerHTML = result.itemInfo.item.description || "";
                    }
                }
                if (configOptions.webmaps.length > 1) {
                    dojo.byId("tabText" + i).innerHTML = configOptions.tabTitles[i].title || result.itemInfo.item.title || "";
                    dojo.byId("title" + i).innerHTML = result.itemInfo.item.title || "";
                    dojo.byId("description" + i).innerHTML = result.itemInfo.item.description || "";
                }
                if (result.itemInfo.itemData.widgets && result.itemInfo.itemData.widgets.timeSlider) {
                    _timeProperties[i] = result.itemInfo.itemData.widgets.timeSlider.properties;
                    timeInterface = true;
                }
                addTabsAndTime();

                initUI(result, i, map);

            } else {
                //TODO Error handling
                dojo.byId("loading").innerHTML = configOptions.i18n.viewer.errors.createMap;
                dojo.style(dojo.byId("loadingImg"), "display", "none");
                dojo.style(dojo.byId("loading"), "padding-bottom", "10px");
            }
        });
        if (!results.length) {
            dojo.byId("loading").innerHTML = configOptions.i18n.viewer.errors.createMap + "<br> " + results.message;
            dojo.style(dojo.byId("loadingImg"), "display", "none");
            dojo.style(dojo.byId("loading"), "padding-bottom", "10px");


        } else {
            //We've loaded all the maps so now let's disable the loading image  
            mapLoaded();
        }


    });

    setupLayout();
}


function initUI(response, index, map) {



    //add chrome theme for popup
    dojo.addClass(map.infoWindow.domNode, "chrome");
    //add the scalebar
    var scalebar = new esri.dijit.Scalebar({
        map: map,
        scalebarUnit: configOptions.i18n.viewer.main.scaleBarUnits //metric or english
    });

    var layerInfo = esri.arcgis.utils.getLegendLayers(response);


    if (layerInfo.length > 0) {
        var legendDijit = new esri.dijit.Legend({
            map: map,
            layerInfos: layerInfo
        }, "legend" + index);
        legendDijit.startup();

    } else {
        dojo.byId("legend" + index).innerHTML = "";
    }

    //Add the home button 
    var homeButton = new esri.dijit.HomeButton({
        map: map
    }, dojo.create("div", {}, dojo.query("#" + map.id + "_zoom_slider .esriSimpleSliderIncrementButton")[0], "after"));
    homeButton.startup();



    if (timeSlider == null) {
        if (_timeProperties[index] != null) {
            if (cm == null) {
                cm = index;
            }

            var startTime = _timeProperties[index].startTime;
            var endTime = _timeProperties[index].endTime;
            var fullTimeExtent = new esri.TimeExtent(new Date(startTime), new Date(endTime));
            map.setTimeExtent(fullTimeExtent);

            timeSlider = new esri.dijit.TimeSlider({
                style: "width: 100%;",
                loop: configOptions.loop
            }, dojo.byId("timeSliderDiv"));

            map.setTimeSlider(timeSlider);

            timeSlider.setThumbCount(_timeProperties[index].thumbCount);
            timeSlider.setThumbMovingRate(_timeProperties[index].thumbMovingRate);

            if (_timeProperties[index].numberOfStops) {
                timeSlider.createTimeStopsByCount(fullTimeExtent, _timeProperties[index].numberOfStops);
            } else {
                timeSlider.createTimeStopsByTimeInterval(fullTimeExtent, _timeProperties[index].timeStopInterval.interval, _timeProperties[index].timeStopInterval.units);
            }

            if (timeSlider.thumbCount == 2) {
                timeSlider.setThumbIndexes([0, 1]);
            }

            dojo.connect(timeSlider, 'onTimeExtentChange', function (timeExtent) {

                var timeCon = dojo.query("#timeSliderDiv > table > tbody > tr > td");
                dojo.place("<img id='playPause' class='timeControl' src='images/playIcon.png' alt='' onClick='setAnimationState()'>", timeCon[0], 'last');
                dojo.place("<img id='prev' class='timeControl' src='images/prevIcon.png' alt='' onClick='prevTime()'>", timeCon[2], 'last');
                dojo.place("<img id='next' class='timeControl' src='images/nextIcon.png' alt='' onClick='nextTime()'>", timeCon[3], 'last');

                _thumbIndexes[cm] = timeSlider.thumbIndexes;
                if (!mapsReadyForAnimation) {
                    waitForLoad();
                }
                var timeString;
                if (_timeProperties[cm].timeStopInterval !== undefined) {
                    switch (_timeProperties[cm].timeStopInterval.units) {
                    case 'esriTimeUnitsCenturies':
                        datePattern = 'yyyy G';
                        break;
                    case 'esriTimeUnitsDecades':
                        datePattern = configOptions.i18n.viewer.datePatterns.yearPattern;
                        break;
                    case 'esriTimeUnitsYears':
                        datePattern = 'MMMM yyyy';
                        break;
                    case 'esriTimeUnitsWeeks':
                        datePattern = 'MMMM d, yyyy';
                        break;
                    case 'esriTimeUnitsDays':
                        datePattern = configOptions.i18n.viewer.datePatterns.datePattern;
                        break;
                    case 'esriTimeUnitsHours':
                        datePattern = configOptions.i18n.viewer.datePatterns.hourTimePattern;
                        break;
                    case 'esriTimeUnitsMilliseconds':
                        datePattern = configOptions.i18n.viewer.datePatterns.millisecondTimePattern;
                        break;
                    case 'esriTimeUnitsMinutes':
                        datePattern = configOptions.i18n.viewer.datePatterns.minuteTimePattern;
                        break;
                    case 'esriTimeUnitsMonths':
                        datePattern = 'MMMM d, y';
                        break;
                    case 'esriTimeUnitsSeconds':
                        datePattern = configOptions.i18n.viewer.datePatterns.secondTimePattern;
                        break;
                    }
                    timeString = formatDate(timeExtent.startTime, datePattern) + " to " + formatDate(timeExtent.endTime, datePattern);
                } else {
                    timeString = formatDate(timeExtent.endTime, configOptions.i18n.viewer.datePatterns.datePattern);
                }

                dojo.byId('timeDisplay').innerHTML = timeString;

                centerTimeDisplay();

            });

            timeSlider.startup();

            $("#timeSliderDiv > table > tbody > tr > td > span").hide();
            dojo.forEach(dojo.query(".timeControl"), function (qry) {
                dojo.style(qry, "display", "block");
            });
            dojo.place("<div id='timeSliderBlind'></div>", dojo.byId("timeSliderArea"), "last");
            dojo.style(dojo.byId("timeSliderBlind"), "opacity", "0.8");

            dojo.connect(dojo.byId("next"), 'onmousedown', function () {
                dojo.byId("next").setAttribute("src", "images/nextIconDark.png");
            });
            dojo.connect(dojo.byId("next"), "onmouseup", function () {
                dojo.byId("next").setAttribute("src", "images/nextIcon.png");
            });
            dojo.connect(dojo.byId("prev"), 'onmousedown', function () {
                dojo.byId("prev").setAttribute("src", "images/prevIconDark.png");
            });
            dojo.connect(dojo.byId("prev"), "onmouseup", function () {
                dojo.byId("prev").setAttribute("src", "images/prevIcon.png");
            });
            dojo.connect(dojo.byId("playPause"), 'onmousedown', function () {
                if (dojo.attr(dojo.byId("playPause"), "src") == "images/playIcon.png") {
                    dojo.byId("playPause").setAttribute("src", "images/playIconDark.png");
                } else {
                    dojo.byId("playPause").setAttribute("src", "images/pauseIconDark.png");
                }
            });
        }
    }


}




function formatDate(date, datePattern) {
    return dojo.date.locale.format(date, {
        selector: 'date',
        datePattern: datePattern
    });
}

function mapLoaded() {


    if (configOptions.webmaps.length == 1) {
        if (_timeProperties[0] != null) {
            dojo.style(dojo.byId("tabArea"), "height", "0px");
            dojo.style(dojo.byId("banner"), "height", "165px");
        }
    }

    dojo.forEach(_maps, function (map, i) {
        if (i != 0) {
            dojo.fadeOut({
                node: dojo.byId("mapDiv" + i),
                duration: 300
            }).play();
        } else {
            dojo.style(dojo.byId("legend" + i), "display", "block");
            dojo.style(dojo.byId("description" + i), "display", "block");
            if (configOptions.webmaps.length > 1) {
                dojo.style(dojo.byId("title" + i), "display", "block");
            }
        }
    });
    dojo.place(dojo.byId('mapDiv0'), dojo.byId('mapPane'), 'last');
    dojo.fadeOut({
        node: dojo.byId("mapBlind"),
        duration: 500
    }).play();

    setTimeout(function () {
        dojo.style(dojo.byId('mapBlind'), 'display', 'none');
    }, 500);
    if (_timeProperties[0] == null) {
        dojo.fadeOut({
            node: dojo.byId("timeDisplay"),
            duration: 1
        }).play();
        dojo.style(dojo.byId('timeDisplay'), 'z-index', '0');
    } else {
        dojo.fadeOut({
            node: dojo.byId("timeSliderBlind"),
            duration: 500
        }).play();

        setTimeout(function () {
            dojo.style(dojo.byId('timeSliderBlind'), 'display', 'none');
        }, 500);
    }
    mapsReady = true;

    dijit.byId("mainWindow").layout();
    cm = 0;
    syncExtents();
    esri.hide(dojo.byId("loadingCon"));

}


function setAnimationState() {
    if (_timeProperties[cm] != null) {
        if (isPlaying == false) {
            isPlaying = true;
            playAnimation();
            dojo.byId("playPause").setAttribute("src", "images/pauseIcon.png");
        } else {
            isPlaying = false;
            timeSlider.pause();
            dojo.byId("playPause").setAttribute("src", "images/playIcon.png");
        }
    }
}

function stopTime() {
    if (timeSlider) {
        isPlaying = false;
        timeSlider.pause();
        dojo.byId("playPause").setAttribute("src", "images/playIcon.png");
    }
}

function playAnimation() {
    if (_timeProperties[cm] != null) {
        if (isPlaying == true) {
            timeSlider.play();
        }
    }
}

function waitForLoad() {
    if (_timeProperties[cm] != null) {
        timeSlider.pause();
    }
}

function prevTime() {
    if (_timeProperties[cm] != null) {
        isPlaying = false;
        timeSlider.pause();
        dojo.byId("playPause").setAttribute("src", "images/playIcon.png");
        timeSlider.previous();
    }
}

function nextTime() {
    if (_timeProperties[cm] != null) {
        isPlaying = false;
        timeSlider.pause();
        dojo.byId("playPause").setAttribute("src", "images/playIcon.png");
        timeSlider.next();
    }
}

function syncExtents() {
    if (configOptions.syncMaps == true) {
        if (_maps[cm]) {
            if (_maps[cm].extent != mapExtent) {
                mapExtent = _maps[cm].extent;
                dojo.forEach(_maps, function (map, i) {
                    if (i != cm) {
                        if (map) {
                            map.setExtent(mapExtent);
                        }
                    }
                });
            }
        }
    }
}

function getWebMaps(webmaps) {
    if (webmaps.indexOf(',') !== -1) {
        var mapIds = webmaps.split(',');
        webmapresults = dojo.map(mapIds, function (mapId) {
            return {
                id: mapId
            };
        });
    } else {
        var previewWebMap = {
            id: webmaps
        };
        webmapresults = [previewWebMap];
    }
    return webmapresults;
}

function getTabs(tabs) {
    if (tabs.indexOf(',') !== -1) {
        var mapIds = tabs.split(',');
        tabresults = dojo.map(mapIds, function (mapId) {
            return {
                title: mapId
            };
        });
    } else {
        var previewTab = {
            title: tabs
        };
        tabresults = [previewTab];
    }
    return tabresults;
}
