/*global define,$, window, setTimeout */
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
    "dojo/on",
    "dojo/dom",
    "dojo/query",
    "dojo/dom-class",
    "dojo/dom-style",
    "dojo/dom-attr",
    "dojo/text!./templates/media.html",
    "dijit/registry",
    "dijit/layout/ContentPane",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/_base/lang",
    "dojo/domReady!"
], function (
    declare,
    on,
    dom,
    query,
    domClass,
    domStyle,
    domAttr,
    template,
    registry,
    ContentPane,
    _WidgetBase,
    _TemplatedMixin,
    _WidgetsInTemplateMixin,
    lang
) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        _firstLoadedSvg: true,
        _eventCollection: [],
        _infoContent: null,
        _infoWidget: null,
        _chartInfo: null,
        _chartIndex: 0,
        /**
        * This function is called when widget is constructed
        * @param{object} parameters of widget
        * @memberOf widgets/details-panel/media
        */
        constructor: function (options) {
            lang.mixin(this, options);
        },

        /**
        * This function is a startup for media widget
        * @memberOf widgets/details-panel/media
        */
        startup: function () {
            this.hideMediaTab();
            if (this.multipleFeatures[0]) {
                this._createMediaUI();
            }
        },

        /**
        * This function is used to show attachments if any
        * @param{object} parameters to create a carousel panel
        * @memberOf widgets/details-panel/media
        */
        _createMediaUI: function () {
            this._infoContent = this.multipleFeatures[0].getContent();
            this._chartInfo = this.popupInfo && this.popupInfo.mediaInfos;
            this._infoWidget = registry.byId(this._infoContent.id);
            this._showAttachments();
        },

        /**
        * This function is used to show/hide carousel panel
        * @memberOf widgets/details-panel/media
        */
        _showAttachments: function () {
            if (this.selectedOperationalLayer.hasAttachments) {
                var objectID = this.multipleFeatures[0].attributes[this.selectedOperationalLayer.objectIdField];
                /*show Loading indicator */
                this.selectedOperationalLayer.queryAttachmentInfos(objectID,
                    lang.hitch(this, function (infos) {
                        // if attachments found
                        if ((infos && infos.length > 0) || (this._chartInfo && this._chartInfo.length > 0)) {
                            this._createDynamicCarousel(infos);
                        } else {
                            this._showNoMediaFound();
                        }
                    }), lang.hitch(this, function () {
                        /*hide Loading indicator */
                    }));
            } else {
                this._createDynamicCarousel();
            }
        },

        /**
        * This function is used to create a carousel panel
        * @param{object} parameters to create a carousel panel
        * @memberOf widgets/details-panel/media
        */
        _createDynamicCarousel: function (infos) {
            var slideCount = 0, i, resizeEvent;
            if (infos) {
                for (i = 0; i < infos.length; i++) {
                    // add to carousel only if it is an image type
                    if (infos[i].contentType && infos[i].contentType.indexOf("image") > -1) {
                        $('<div class="item"><img onclick="window.open(this.src)" src="' + infos[i].url + '"></div>').appendTo('.carousel-inner');
                        slideCount++;
                    }
                }
            }

            slideCount = this._addChartsToCarousel(slideCount);

            if (slideCount) {
                this.showMediaTab();
                $('.item').first().addClass('active');
                $('#carousel-widget').carousel({
                    interval: false,    // to stop auto display animation
                    wrap: false         // to stop circular rotation in carousel
                }).on('slid.bs.carousel', lang.hitch(this, function () {
                    var currentIndex = $('#carousel-widget .carousel-inner .item.active').index();
                    this._enableDisableArrow(currentIndex, slideCount);
                }));
                this._enableDisableArrow(0, slideCount);
                resizeEvent = on(dom.byId("mediaTab"), "click", lang.hitch(this, function () {
                    resizeEvent.remove();
                    this._openMediaImages();
                    this._resizeMediaChart(0, slideCount);
                }));
            } else {
                this._showNoMediaFound();
            }
        },

        /**
        * This function is used to open media images
        * @memberOf widgets/details-panel/media
        */
        _openMediaImages: function () {
            var mediaImages = $('#carousel-widget .esriViewPopup .gallery .frame img'), i;
            for (i = 0; i < this._eventCollection.length; i++) {
                if (this._eventCollection[i].remove) {
                    this._eventCollection[i].remove();
                }
            }
            for (i = 0; i < mediaImages.length; i++) {
                this._eventCollection.push(on(mediaImages[i], "click", this._showImgInNewTab));
            }
        },

        /**
        * This function is used to show media images in diffrent tab when user clicks on it
        * @memberOf widgets/details-panel/media
        */
        _showImgInNewTab: function () {
            window.open(this.src);
        },

        /**
        * This function is used to add charts in crousel panel
        * @param{number} parameters to add charts in crousel panel
        * @memberOf widgets/details-panel/media
        */
        _addChartsToCarousel: function (slideCount) {
            var chartContaner, popupContentPane, totalSlideCount = slideCount;
            if (this._chartInfo && this._chartInfo.length > 0) {
                $('<div class="item"><div id="esriCTChartContainer"></div></div>').appendTo('.carousel-inner');

                chartContaner = dom.byId("esriCTChartContainer");
                popupContentPane = new ContentPane({}, chartContaner);
                popupContentPane.startup();
                popupContentPane.set("content", this._infoContent);
                totalSlideCount = slideCount + 1;
                this._attachNextPrevEvents(totalSlideCount);
                this._showMediaCaption(0, totalSlideCount);
            }
            return totalSlideCount;
        },

        /**
        * This function is used to attached event to display chart on next and previous buttons
        * @param{number} parameters to add events for charts in crousel panel
        * @memberOf widgets/details-panel/media
        */
        _attachNextPrevEvents: function (slideCount) {
            on(this.slidePrev, "click", lang.hitch(this, function (evt) {
                var currentIndex = $('#carousel-widget .carousel-inner .item.active').index();
                this._resizeMediaChart(currentIndex, slideCount);
                if (parseInt(currentIndex, 10) === slideCount - 1 && this._chartIndex !== 0) {
                    this._chartIndex--;
                    evt.stopPropagation();
                    this._enableDisableArrow(currentIndex, slideCount);
                    this._infoWidget._goToPrevMedia();
                }
                this._showMediaCaption(currentIndex, slideCount);
                this._openMediaImages();
            }));

            on(this.slideNext, "click", lang.hitch(this, function (evt) {
                var currentIndex = $('#carousel-widget .carousel-inner .item.active').index();
                this._resizeMediaChart(currentIndex, slideCount);
                if (parseInt(currentIndex, 10) === slideCount - 1 && this._chartIndex !== this._chartInfo.length - 1) {
                    this._chartIndex++;
                    evt.stopPropagation();
                    this._enableDisableArrow(currentIndex, slideCount);
                    this._infoWidget._goToNextMedia();
                }
                this._showMediaCaption(currentIndex, slideCount);
                this._openMediaImages();
            }));
        },

        /**
        * This function is used to show no media Found info
        * @memberOf widgets/details-panel/media
        */
        _showNoMediaFound: function () {
            this.hideMediaTab();
            domStyle.set(this.mediaContainer, "display", "none");
            domClass.remove(this.noMediaInfoContainer, "esriCTHidden");
        },

        /**
        * This function is used to resize charts
        * @param{number} parameters to resize charts
        * @memberOf widgets/details-panel/media
        */
        _resizeMediaChart: function () {
            var svgElement = query(".chart > svg"), i;
            if (svgElement && svgElement.length) {
                for (i = 0; i < svgElement.length; i++) {
                    svgElement[i].setAttribute('height', '160');
                    svgElement[i].setAttribute('width', '200');
                    svgElement[i].setAttribute('preserveAspectRatio', 'xMidYMid meet');
                }
            }
            if (this._firstLoadedSvg) {
                this._firstLoadedSvg = false;
                setTimeout(lang.hitch(this, function () {
                    this._infoWidget._goToNextMedia();
                    this._infoWidget._goToPrevMedia();
                }), 1000);
            }
        },

        /**
        * This function is used to show caption for media
        * @param{number} parameters to show caption for media
        * @memberOf widgets/details-panel/media
        */
        _showMediaCaption: function (currentIndex, slideCount) {
            if (this._chartInfo && (currentIndex === slideCount || (currentIndex === slideCount - 1 && this._chartIndex === 0))) {
                var selectedMedia = this._chartInfo[this._chartIndex];
                if (selectedMedia && selectedMedia.caption && lang.trim(selectedMedia.caption) !== "") {
                    domAttr.set("esriCTChartContainer", "title", selectedMedia.caption);
                } else {
                    domAttr.remove("esriCTChartContainer", "title");
                }
            } else {
                domAttr.remove("esriCTChartContainer", "title");
            }
        },

        /**
        * This function is used to enable/disable navigation arrow
        * @param{number} parameters to enable/disable navigation arrow
        * @memberOf widgets/details-panel/media
        */
        _enableDisableArrow: function (currentIndex, slideCount) {
            var lastSlideIndex = slideCount - 1,
                mediaLeftArrow = $('.carousel-control.mediaLeft').first(),
                mediaRightArrow = $('.carousel-control.mediaRight').first();
            if (mediaLeftArrow) {
                mediaLeftArrow.removeClass('disableLeftArrow');
            }
            if (mediaRightArrow) {
                mediaRightArrow.removeClass('disableRightArrow');
            }
            if (lastSlideIndex === 0 && this._chartInfo.length < 2) {
                mediaLeftArrow.addClass('disableLeftArrow');
                mediaRightArrow.addClass('disableRightArrow');
            } else {
                if (mediaLeftArrow && parseInt(currentIndex, 10) === 0 && this._chartIndex === 0) {
                    mediaLeftArrow.addClass('disableLeftArrow');
                }
                if (mediaRightArrow && parseInt(currentIndex, 10) === lastSlideIndex && (this._chartIndex === this._chartInfo.length - 1 || this._chartInfo.length === 0)) {
                    mediaRightArrow.addClass('disableRightArrow');
                }
            }
        },

        /**
        * This function is used to hide media tab
        * @memberOf widgets/details-panel/media
        */
        hideMediaTab: function () {
            return true;
        },

        /**
        * This function is used to show media tab
        * @memberOf widgets/details-panel/media
        */
        showMediaTab: function () {
            return true;
        }

    });
});
