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
    "dojo/mouse",
    "dojo/touch",
    "dojox/gesture/tap",
    "dojo/_base/array",
    "dojo/has",
    "dojo/_base/sniff",
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
    lang,
    mouse,
    touch,
    tap,
    array,
    has
) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        _eventCollection: [],
        _infoContent: null,
        _infoWidget: null,
        _chartInfo: null,
        _chartIndex: 0,
        _mouseEnterHandle: null,
        _mouseLeaveHandle: null,
        _tapHoldHandle: null,
        _touchReleaseHandle: null,
        _tapHandle: null,
        _totalSlides: null,
        _hyperlinkImageAttachment: [], // array stores hyperlink images from popup information
        _hyperlinkVideoAttachment: [], // array stores hyperlink videos from popup information

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
            this._totalSlides = 0;
            this._infoContent = this.multipleFeatures[0].getContent();
            this._chartInfo = this.popupInfo ? this._getMediaInfos() : [];
            this._checkForHyperlinks();
            this._infoWidget = registry.byId(this._infoContent.id);
            this._showAttachments();
            if (query(".tab-content")[0]) {
                domStyle.set("carouselInnerContainer", "height", (query(".tab-content")[0].clientHeight - 75) + "px");
            }
        },

        /**
        * This function is used to get popups valid media information
        * @memberOf widgets/details-panel/media
        */
        _getMediaInfos: function () {
            var mediaArray;
            mediaArray = [];
            array.forEach(this.popupInfo.mediaInfos, lang.hitch(this, function (mediaInfo) {
                // if media type is image which consist of a source URL
                if (mediaInfo.type === "image" && mediaInfo.value.sourceURL !== "") {
                    mediaArray.push(mediaInfo);
                }
                // if media type is a chart which have valid numeric data
                if (mediaInfo.type !== "image") {
                    array.some(mediaInfo.value.fields, lang.hitch(this, function (field) {
                        if (this.multipleFeatures[0].attributes[field] || this.multipleFeatures[0].attributes[field] === 0) {
                            return mediaArray.push(mediaInfo);
                        }
                    }));
                }
            }));
            // return only valid media infos
            return mediaArray;
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
                        if ((infos && infos.length > 0) || (this._chartInfo && this._chartInfo.length > 0) || (this._hyperlinkImageAttachment && this._hyperlinkImageAttachment.length > 0) || (this._hyperlinkVideoAttachment && this._hyperlinkVideoAttachment.length > 0)) {
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
            var i, resizeEvent;
            if (infos) {
                for (i = 0; i < infos.length; i++) {
                    // check if a attachment is of tiff image, then convert it into a non-image document
                    if (infos[i].contentType.indexOf("image") !== -1 && infos[i].contentType.match(/(\/tiff)/)) {
                        infos[i].contentType = "application/tiff";
                    }
                    // add to carousel only if it is an image type
                    if (infos[i].contentType && infos[i].contentType.indexOf("image") > -1) {
                        $('<div class="item"><img onclick="window.open(this.src)" src="' + infos[i].url + '"></div>').appendTo('.carousel-inner');
                        this._totalSlides++;
                    }
                }
            }
            // add images and videos from hyperlinks of info popup in carousel pod and return the slideCount
            this._totalSlides = this._addHyperlinkImagesAndVideosToCarousel(this._totalSlides);
            this._totalSlides = this._addChartsToCarousel(this._totalSlides);

            if (this._totalSlides) {
                this.showMediaTab();
                $('.item').first().addClass('active');
                $('#carousel-widget').carousel({
                    interval: false,    // to stop auto display animation
                    wrap: false         // to stop circular rotation in carousel
                }).on('slid.bs.carousel', lang.hitch(this, function () {
                    var currentIndex = $('#carousel-widget .carousel-inner .item.active').index();
                    this._enableDisableArrow(currentIndex, this._totalSlides);
                }));
                this._enableDisableArrow(0, this._totalSlides);
                resizeEvent = on(dom.byId("mediaTab"), "click", lang.hitch(this, function () {
                    resizeEvent.remove();
                    this._openMediaImages();
                    this._resizeMediaChart(0, this._totalSlides);
                }));

            } else {
                this._showNoMediaFound();
            }
            // mouse enter event to show header and caption
            if (dom.byId('esriCTChartContainer')) {
                if (this._mouseEnterHandle) {
                    this._mouseEnterHandle.remove();
                }
                if (this._tapHoldHandle) {
                    this._tapHoldHandle.remove();
                }
                this._mouseEnterHandle = on(dom.byId('esriCTChartContainer'), mouse.enter, lang.hitch(this, function () {
                    this._showHeaderAndCaption();
                }));
                this._tapHoldHandle = on(dom.byId('esriCTChartContainer'), tap.hold, lang.hitch(this, function () {
                    this._showHeaderAndCaption();
                }));
            }
            // mouse leave event to hide header and caption
            if (dom.byId('esriCTChartContainer')) {
                if (this._mouseLeaveHandle) {
                    this._mouseLeaveHandle.remove();
                }
                if (this._touchReleaseHandle) {
                    this._touchReleaseHandle.remove();
                }
                this._mouseLeaveHandle = on(dom.byId('esriCTChartContainer'), mouse.leave, lang.hitch(this, function () {
                    this._hideHeaderAndCaption();
                }));
                this._touchReleaseHandle = on(dom.byId('esriCTChartContainer'), touch.release, lang.hitch(this, function () {
                    this._hideHeaderAndCaption();
                }));
            }
        },

        /**
        * This function is used to show header & caption
        * @memberOf widgets/details-panel/media
        */
        _showHeaderAndCaption: function () {
            var headerSection, captionSection;
            headerSection = query('.active .mediaSection .header')[0];
            captionSection = query('.active .mediaSection .caption')[0];
            if (headerSection) {
                domClass.replace(headerSection, "esriCTHeaderHover", "header");
            }
            if (captionSection) {
                domClass.replace(captionSection, "esriCTCaptionHover", "caption");
            }
        },

        /**
        * This function is used to hide header & caption
        * @memberOf widgets/details-panel/media
        */
        _hideHeaderAndCaption: function () {
            var headerSection, captionSection;
            headerSection = query('.active .mediaSection .esriCTHeaderHover')[0];
            captionSection = query('.active .mediaSection .esriCTCaptionHover')[0];
            if (headerSection) {
                domClass.replace(headerSection, "header", "esriCTHeaderHover");
            }
            if (captionSection) {
                domClass.replace(captionSection, "caption", "esriCTCaptionHover");
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
                this._eventCollection.push(on(mediaImages[i], tap, this._showImgInNewTab));
            }
        },

        /**
        * This function is used to show media images in different tab when user clicks on it
        * @memberOf widgets/details-panel/media
        */
        _showImgInNewTab: function () {
            window.open(this.src);
        },

        /**
        * This function is used to add charts in carousel panel
        * @param{number} parameters to add charts in carousel panel
        * @memberOf widgets/details-panel/media
        */
        _addChartsToCarousel: function (slideCount) {
            var chartContainer, popupContentPane, totalSlideCount = slideCount;
            if (this._chartInfo && this._chartInfo.length > 0) {
                $('<div class="item"><div id="esriCTChartContainer"></div></div>').appendTo('.carousel-inner');
                chartContainer = dom.byId("esriCTChartContainer");
                popupContentPane = new ContentPane({}, chartContainer);
                popupContentPane.startup();
                popupContentPane.set("content", this._infoContent);
                totalSlideCount = slideCount + 1;
                this._attachNextPrevEvents(totalSlideCount);
                this._showMediaCaption(0, totalSlideCount);
                this._setWidthOfChartContainer();
            } else {
                this._attachNextPrevClickEventsForVideo();
            }
            return totalSlideCount;
        },

        /**
        * This function is used to set the width of chart container. This needs to be done so that
        * chart/image do not jump on mouse hover when long title/caption is configured
        * @memberOf widgets/details-panel/media
        */
        _setWidthOfChartContainer: function () {
            if (query(".tab-content")[0]) {
                domStyle.set("esriCTChartContainer", "width", (query(".tab-content")[0].clientWidth - 106) + "px");
            }
        },

        /**
        * This function is used to attached event to display chart on next and previous buttons
        * @param{number} parameters to add events for charts in carousel panel
        * @memberOf widgets/details-panel/media
        */
        _attachNextPrevEvents: function (slideCount) {
            on(this.slidePrev, "click", lang.hitch(this, function (evt) {
                var imageNode, currentIndex;
                currentIndex = $('#carousel-widget .carousel-inner .item.active').index();
                this._setWidthOfChartContainer();
                this._resizeMediaChart(currentIndex, slideCount);
                if (parseInt(currentIndex, 10) === slideCount - 1 && this._chartIndex !== 0) {
                    this._chartIndex--;
                    evt.stopPropagation();
                    this._enableDisableArrow(currentIndex, slideCount);
                    this._infoWidget._goToPrevMedia();
                    imageNode = query('.active .mediaSection .gallery .frame .esriPopupMediaImage');
                    if (imageNode && imageNode[0] && ((imageNode[0].src.indexOf(".tif") > -1) || (imageNode[0].src.indexOf(".tiff") > -1))) {
                        this._chartIndex--;
                        evt.stopPropagation();
                        this._enableDisableArrow(currentIndex, slideCount);
                        this._infoWidget._goToPrevMedia();
                    }
                }
                this._showMediaCaption(currentIndex, slideCount);
                this._openMediaImages();
                this._pauseVideo();
                this._removeAndAddVideo();
            }));
            on(this.slideNext, "click", lang.hitch(this, function (evt) {
                var imageNode, currentIndex;
                currentIndex = $('#carousel-widget .carousel-inner .item.active').index();
                this._setWidthOfChartContainer();
                this._resizeMediaChart(currentIndex, slideCount);
                if (parseInt(currentIndex, 10) === slideCount - 1 && this._chartIndex !== this._chartInfo.length - 1) {
                    this._chartIndex++;
                    evt.stopPropagation();
                    this._enableDisableArrow(currentIndex, slideCount);
                    this._infoWidget._goToNextMedia();
                    imageNode = query('.active .mediaSection .gallery .frame .esriPopupMediaImage');
                    if (imageNode && imageNode[0] && ((imageNode[0].src.indexOf(".tif") > -1) || (imageNode[0].src.indexOf(".tiff") > -1))) {
                        this._chartIndex++;
                        evt.stopPropagation();
                        this._enableDisableArrow(currentIndex, slideCount);
                        this._infoWidget._goToNextMedia();
                    }
                }
                this._showMediaCaption(currentIndex, slideCount);
                this._openMediaImages();
                this._pauseVideo();
                this._removeAndAddVideo();
            }));
        },

        /**
        * This function is used to remove & add video
        * @memberOf widgets/details-panel/media
        */
        _removeAndAddVideo: function () {
            if (has("ie") === 9) { // only IE9
                setTimeout(lang.hitch(this, function () {
                    var currentActiveMedia, currentActiveMediaChild, currentActiveMediaChildClone;
                    currentActiveMedia = $('#carousel-widget .carousel-inner .item.active');
                    if (currentActiveMedia[0] && currentActiveMedia[0].children[0]) {
                        currentActiveMediaChild = currentActiveMedia[0].children[0];
                        if (currentActiveMediaChild.tagName.toLowerCase() === "video") {
                            currentActiveMediaChildClone = lang.clone(currentActiveMediaChild);
                            currentActiveMedia[0].removeChild(currentActiveMediaChild);
                            currentActiveMedia[0].appendChild(currentActiveMediaChildClone);
                        }
                    }
                }), 1000);
            }
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
                    svgElement[i].setAttribute('preserveAspectRatio', 'xMidYMid meet');
                }
            }
            setTimeout(lang.hitch(this, function () {
                this.showChartsOnResize();
            }), 1000);
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
        },

        /**
        * This function is used fit charts in the media panel
        * @memberOf widgets/details-panel/media
        */
        showChartsOnResize: function () {
            if ((this._totalSlides > 0) && (this._chartInfo) && (this._chartInfo.length > 0)) {
                if (query(".disableRightArrow")[0]) {
                    this._infoWidget._goToPrevMedia();
                    this._infoWidget._goToNextMedia();
                } else {
                    this._infoWidget._goToNextMedia();
                    this._infoWidget._goToPrevMedia();
                }
            }
        },

        /**
        * This function is used to get hyperlink images and videos
        * @memberOf widgets/details-panel/media
        */
        _checkForHyperlinks: function () {
            var name, attributes, isVideoLink;
            attributes = [];
            this._hyperlinkImageAttachment = [];
            this._hyperlinkVideoAttachment = [];
            attributes = this.multipleFeatures[0].attributes;
            for (name in attributes) {
                if (attributes.hasOwnProperty(name) && attributes[name] && String(attributes[name]).match(/^(http(s?):)/)) {
                    if (String(attributes[name]).match(/\.(png|jpg|jpeg|gif|bmp)(\/|$)/i)) {
                        this._hyperlinkImageAttachment.push(attributes[name]);
                    } else {
                        isVideoLink = this._isVideoLink(attributes[name]);
                        if (isVideoLink) {
                            this._hyperlinkVideoAttachment.push(attributes[name]);
                        }
                    }
                }
            }
        },

        /**
        * This function will return true or false if correct video format found
        * @param{string} url : contains hyperlink
        * @memberOf widgets/details-panel/media
        */
        _isVideoLink: function (url) {
            // get video format, if any
            var format = this._getVideoFormat(url);
            return (format ? true : false);
        },

        /**
        * This function will return video format from url
        * @param{string} url : contains contains hyperlink
        * @memberOf widgets/details-panel/media
        */
        _getVideoFormat: function (url) {
            // match supported format cases
            var format = url.match(/\.(mp4)(\/?)/i);
            // if found then return format else return null
            return (format ? format[1] : null);
        },

        /**
        * This function will add hyperlink images in carousel pod
        * @param{int} slideCount : contains existing count of the slides
        * @memberOf widgets/details-panel/media
        */
        _addHyperlinkImagesAndVideosToCarousel: function (slideCount) {
            var i, currentSlideCount;
            currentSlideCount = slideCount;
            if (this._hyperlinkImageAttachment.length > 0) {
                for (i = 0; i < this._hyperlinkImageAttachment.length; i++) {
                    $('<div class="item"><img onclick="window.open(this.src)" src="' + this._hyperlinkImageAttachment[i] + '"></div>').appendTo('.carousel-inner');
                    currentSlideCount++;
                }
            }
            if (this._hyperlinkVideoAttachment.length > 0) {
                for (i = 0; i < this._hyperlinkVideoAttachment.length; i++) {
                    $('<div class="item"><video src="' + this._hyperlinkVideoAttachment[i] + '"height="auto" width="430" controls><source src="' + this._hyperlinkVideoAttachment[i] + '" type="video/' + this._getVideoFormat(this._hyperlinkVideoAttachment[i]) + '" poster="' + this._hyperlinkVideoAttachment[i] + '"></video></div>').appendTo('.carousel-inner');
                    currentSlideCount++;
                }
            }
            return currentSlideCount;
        },

        /**
        * This function is used to attached event to pause the playing video
        * @memberOf widgets/details-panel/media
        */
        _attachNextPrevClickEventsForVideo: function () {
            on(this.slidePrev, "click", lang.hitch(this, function () {
                this._pauseVideo();
                this._removeAndAddVideo();
            }));
            on(this.slideNext, "click", lang.hitch(this, function () {
                this._pauseVideo();
                this._removeAndAddVideo();
            }));
        },

        /**
        * This function will pause the playing video
        * @memberOf widgets/details-panel/media
        */
        _pauseVideo: function () {
            $("video").each(function () {
                this.pause();
            });
        }
    });
});
