/*global define,setTimeout */
/*jslint sloppy:true */
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
    "dojo/dom-construct",
    "dojo/_base/lang",
    "dojo/on",
    "dojo/dom",
    "dojo/query",
    "dojo/dom-attr",
    "dojo/dom-class",
    "dojo/dom-style",
    "dojo/text!./templates/time-slider.html",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "esri/TimeExtent",
    "esri/dijit/TimeSlider",
    "dojo/domReady!"
], function (
    declare,
    domConstruct,
    lang,
    on,
    dom,
    query,
    domAttr,
    domClass,
    domStyle,
    template,
    _WidgetBase,
    _TemplatedMixin,
    _WidgetsInTemplateMixin,
    TimeExtent,
    TimeSlider
) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        currentTimeInfo: null,
        /**
        * This function is called when widget is constructed
        * @param{object} parameters of widget
        * @memberOf widgets/time-slider/time-slider
        */
        constructor: function (options) {
            lang.mixin(this, options);
        },

        /**
        * This function is called after all properties of a widget are defined
        * @memberOf widgets/time-slider/time-slider
        */
        startup: function () {
            //Remove disable class id applied
            domClass.add(dom.byId("disableTimeSliderWrapperContainer"), "esriCTHidden");
            var webmapWidgets;
            webmapWidgets = this.webmapJSON.itemData.widgets;
            this._createTimeSlider(webmapWidgets.timeSlider.properties);
        },

        /**
        * This function is used to create UI for time slider list.
        * @param{object} parameters to create timeSlider
        * @memberOf widgets/time-slider/time-slider
        */
        _createTimeSlider: function (timeInfoData) {
            var timeExtent, timeSlider, lastTickCount;
            this.timeInfoData = timeInfoData;
            timeExtent = this._createTimeExtent(timeInfoData);
            timeSlider = new TimeSlider({
                "thumbCount": timeInfoData.thumbCount
            }, domConstruct.create("div", {}, this.timeSliderContainer));
            //Check the configuration of time slider in webmap, if timeStopInterval is available use it otherwise
            //create time slider ticks/interval by numberOfStops property
            if (timeInfoData.timeStopInterval) {
                timeSlider.createTimeStopsByTimeInterval(timeExtent, timeInfoData.timeStopInterval.interval, timeInfoData.timeStopInterval.units);
            } else {
                timeSlider.createTimeStopsByCount(timeExtent, timeInfoData.numberOfStops + 1);
            }
            // if filter is enabled set position of thumb index to 1
            if (this.appConfig.enableFilter) {
                timeSlider.setThumbIndexes([0, 1]);
            } else { // if filter is disabled set position of thumb index to end of the timeslider
                if (timeSlider.hasOwnProperty("_numTicks")) {
                    lastTickCount = timeSlider._numTicks;
                    lastTickCount--;
                } else {
                    lastTickCount = 1;
                }
                if (timeInfoData.thumbCount === 1) {
                    timeSlider.setThumbIndexes([lastTickCount]);
                } else {
                    timeSlider.setThumbIndexes([0, lastTickCount]);
                }
            }
            timeSlider.on("time-extent-change", lang.hitch(this, this._showSliderInfo));
            domAttr.set(this.timeSliderTextContainer, "innerHTML", this.appConfig.i18n.timeSlider.timeSliderLabel);
            timeSlider.startup();
            this.map.setTimeSlider(timeSlider);
            this._checkTimeSliderStops(timeSlider);
            this._hideWebmapList();
        },

        /**
        * check count of stops created in time slider and hide the stops/ticks if count is more thane 30
        * @memberOf widgets/time-slider/time-slider
        */
        _checkTimeSliderStops: function (timeSlider) {
            if (timeSlider.timeStops && timeSlider.timeStops.length > 30) {
                var ruler = query(".dijitRuleContainer", this.timeSliderContainer)[0];
                if (ruler) {
                    domStyle.set(ruler, "display", "none");
                }
            }
        },

        /**
        * This function is used to remove slider and its date/time value.
        * @memberOf widgets/time-slider/time-slider
        */
        _removeTimeSlider: function () {
            domConstruct.empty(this.timeSliderContainer);
            domConstruct.empty(this.timeSliderDateContainer);
            domConstruct.empty(this.timeSliderTextContainer);
        },

        /**
        * This function is used to create Time Extent for timeSlider.
        * @memberOf widgets/time-slider/time-slider
        */
        _createTimeExtent: function (timeInfoData) {
            return new TimeExtent(new Date(timeInfoData.startTime), new Date(timeInfoData.endTime));
        },

        /**
        * This function is used to hide webmap list on slider tick click
        * @memberOf widgets/time-slider/time-slider
        */
        _hideWebmapList: function () {
            var sliderHandle = query(".dijitSliderImageHandleH"), i;
            if (sliderHandle && sliderHandle.length > 0) {
                for (i = 0; i < sliderHandle.length; i++) {
                    // Binding event for the hiding web map list on time slider buttons click
                    on(sliderHandle[i], "click", lang.hitch(this, this.hideWebMapList));
                }
            }
        },

        /**
        * This function is used to hide webmap list
        * @memberOf widgets/time-slider/time-slider
        */
        hideWebMapList: function () {
            return;
        },

        /**
        * This function is used to show current slider date/time info.
        * @param{object} parameters to create timeSlider
        * @memberOf widgets/time-slider/time-slider
        */
        _showSliderInfo: function (sliderValue) {
            var startDate, endDate;
            this.appUtils.showLoadingIndicator();
            this.currentTimeInfo = sliderValue;
            startDate = new Date(sliderValue.startTime);
            endDate = new Date(sliderValue.endTime);
            this._getWebmapFormattedDate(startDate, endDate);
            setTimeout(lang.hitch(this, function () {
                this.selectedLayer.refresh();
            }), 1200);
        },

        /**
        * This function is use to handle enabling/disabling of time slider
        * @param{string} selected feature length
        * @memberOf widgets/time-slider/time-slider
        */
        _handleTimeSliderVisibility: function (featureLength) {
            if (featureLength > 1) {
                domClass.remove(dom.byId("disableTimeSliderWrapperContainer"), "esriCTHidden");
            } else {
                domClass.add(dom.byId("disableTimeSliderWrapperContainer"), "esriCTHidden");
            }
        },

        /**
        * This function is use to convert date in webmap format
        * @param{string} start and end date to display
        * @memberOf widgets/time-slider/time-slider
        */
        _getWebmapFormattedDate: function (startDate, endDate) {
            var webmapTimeSliderInfo, timeDiff, diffDays, intervalUnit;
            webmapTimeSliderInfo = this.webmapJSON.itemData.widgets.timeSlider.properties;
            intervalUnit = webmapTimeSliderInfo && webmapTimeSliderInfo.timeStopInterval && webmapTimeSliderInfo.timeStopInterval.units;
            timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
            diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            if (webmapTimeSliderInfo && (diffDays > 365) && (intervalUnit === "esriTimeUnitsYears" || intervalUnit === "esriTimeUnitsDecades")) {
                this._displayDateTime(startDate.getFullYear(), endDate.getFullYear());
            } else if (intervalUnit === "esriTimeUnitsHours") {
                this._displayDateTime(startDate.toLocaleString(), endDate.toLocaleString());
            } else {
                this._displayDateTime(startDate.toLocaleDateString(), endDate.toLocaleDateString());
            }
        },

        /**
        * This function is use to display date in webmap format
        * @param{string} start and end date to display
        * @memberOf widgets/time-slider/time-slider
        */
        _displayDateTime: function (startDate, endDate) {
            var displayDate;
            //Check for the configuration of time slider, and accordingly set the date string
            if (this.timeInfoData.thumbCount > 1) {
                displayDate = startDate + " - " + endDate;
            } else {
                displayDate = endDate;
            }
            domAttr.set(this.timeSliderDateContainer, "innerHTML", displayDate);
            this.hideWebMapList();
        }
    });
});