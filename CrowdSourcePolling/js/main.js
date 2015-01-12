/*global define,dojo,esri,console */
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
define([
    "dojo/ready",
    "dojo/_base/array",
    "dojo/_base/Color",
    "dojox/color/_base",
    "dojo/_base/declare",
    "dojo/dom-attr",
    "dojo/_base/fx",
    "dojo/_base/html",
    "dojo/_base/lang",
    "dojo/cookie",
    "dojo/dom",
    "dojo/dom-class",
    "dojo/dom-construct",
    "dojo/dom-geometry",
    "dojo/dom-style",
    "dojo/on",
    "dojo/query",
    "dojo/window",
    "dijit/layout/ContentPane",
    "dijit/registry",
    "dijit/form/DateTextBox",
    "esri/arcgis/utils",
    "esri/dijit/HomeButton",
    "esri/dijit/Geocoder",
    "esri/dijit/LocateButton",
    "esri/graphic",
    "esri/lang",
    "esri/request",
    "esri/symbols/PictureMarkerSymbol",
    "esri/tasks/locator",
    'esri/tasks/query',
    "esri/urlUtils",
    "application/date"
], function (
    ready,
    array,
    Color,
    ColorX,
    declare,
    domAttr,
    fx,
    html,
    lang,
    cookie,
    dom,
    domClass,
    domConstruct,
    domGeom,
    domStyle,
    on,
    query,
    win,
    ContentPane,
    registry,
    DateTextBox,
    arcgisUtils,
    HomeButton,
    Geocoder,
    LocateButton,
    Graphic,
    esriLang,
    esriRequest,
    PictureMarkerSymbol,
    Locator,
    Query,
    urlUtils,
    date
) {

    return declare(null, {

        config: {},
        colors: null,
        map: null,
        locator: null,
        initExt: null,
        opLayers: [],
        lyrCrowd: null,
        lyrComments: null,
        lyrCluster: null,
        mapExt: null,
        types: [],
        geocoder: null,
        geoLocate: null,
        newMode: false,
        location: null,
        sort: "cal",
        selectedGraphic: null,
        selectedGraphicOld: null,
        user: {
            name: "",
            twitterId: "",
            facebookId: ""
        },
        newEntryForm: [],
        commentEntryForm: [],


        // Startup
        startup: function (config) {
            // config will contain application and user defined info for the template such as i18n strings, the web map id
            // and application id
            // any url parameters and any application specific configuration information.
            if (config) {
                this.config = config;
                this._setColor();
                this._setProtocolHandler();
                this.types = this.config.types.split(",");
                // social media
                this._checkinSocialMedia();
                // document ready
                ready(lang.hitch(this, function () {
                    var itemInfo, extArray;

                    // supply either the webmap id or, if available, the item info
                    itemInfo = this.config.itemInfo || this.config.webmap;
                    // If a custom extent is set as a url parameter handle that before creating the map
                    if (this.config.extent) {
                        extArray = decodeURIComponent(this.config.extent).split(",");
                        if (extArray.length === 4) {
                            itemInfo.item.extent = [
                                [parseFloat(extArray[0]), parseFloat(extArray[1])],
                                [parseFloat(extArray[2]), parseFloat(extArray[3])]
                            ];
                        }
                    }
                    this._createWebMap(itemInfo);
                }));
            } else {
                var error = new Error(this.config.i18n.messages.noConfiguration);
                this.reportError(error);
            }
        },

        // Report error
        reportError: function (error) {
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
                    node.innerHTML = this.config.i18n.map.error + "<br>" + dojo.toJson(error);
                } else {
                    node.innerHTML = "Unable to create map<br>" + dojo.toJson(error);
                }
            }
        },

        _getForecolor: function (color) {
            return new Color(color).toHsl().l > 60 ? "black" : "white";
        },

        // Set Color
        _setColor: function () {
            // Define classes for HTML elements
            this.colors = [this._getForecolor(this.config.color), this.config.color];
            this._addStyle('.fg {color:' + this.colors[0] + '}.bg {background-color:' + this.colors[1] + '}');

            // And swap out icons to match if the forecolor is white
            if (this.colors[0] === "white") {
                domAttr.set("addIcon", "src", "images/addW.png");
                domAttr.set("closeIcon", "src", "images/closeW.png");
                domAttr.set("closeIcon2", "src", "images/closeW.png");
                domAttr.set("closeIcon3", "src", "images/closeW.png");
                domAttr.set("commentIcon", "src", "images/commentW.png");
                domAttr.set("facebookIcon", "src", "images/facebookW.png");
                domAttr.set("facebook2Icon", "src", "images/facebookW.png");
                domAttr.set("rightIcon", "src", "images/rightW.png");
                domAttr.set("twitterIcon", "src", "images/twitterW.png");
                domAttr.set("twitter2Icon", "src", "images/twitterW.png");
                domAttr.set("voteIcon", "src", "images/heartPlusW.png");
            }
        },

        _addStyle: function (cssStr) {
            var customStyles, cssText;

            // By Fredrik Johansson
            // http://www.quirksmode.org/bugreports/archives/2006/01/IE_wont_allow_documentcreateElementstyle.html#c4088
            customStyles = document.createElement("style");
            customStyles.setAttribute("type", "text/css");
            if (customStyles.styleSheet) {  // IE 7 & 8
                customStyles.styleSheet.cssText = cssStr;
            } else {  // W3C
                cssText = document.createTextNode(cssStr);
                customStyles.appendChild(cssText);
            }

            // Add the style *after* existing styles so that it'll override them
            document.body.appendChild(customStyles);

            return customStyles;
        },

        // set protocol handler
        _setProtocolHandler: function () {
            esri.id.setProtocolErrorHandler(function () {
                if (window.confirm(this.config.i18n.messages.confirmHTTPSRedirect)) {
                    window.location = window.location.href.replace("http:", "https:");
                }
            });
        },

        // Create web map based on the input web map id
        _createWebMap: function (itemInfo) {
            arcgisUtils.createMap(itemInfo, "panelMap", {
                mapOptions: {},
                usePopupManager: true,
                editable: this.config.editable,
                bingMapsKey: this.config.bingKey
            }).then(lang.hitch(this, function (response) {

                this.map = response.map;
                this.initExt = this.map.extent;
                this.opLayers = response.itemInfo.itemData.operationalLayers;

                // locator
                this.locator = new Locator(this.config.locatorURL);
                on(this.locator, "location-to-address-complete", lang.hitch(this, this._updateAddress));

                // make sure map is loaded
                if (this.map.loaded) {
                    // do something with the map
                    this._mapLoaded();
                } else {
                    on.once(this.map, "load", lang.hitch(this, function () {
                        // do something with the map
                        this._mapLoaded();
                    }));
                }
            }), this.reportError);
        },

        // Map Loaded - Map is ready
        _mapLoaded: function () {
            // Set the popup's popupWindow property to false; this prevents the popup from displaying,
            // and we want the popup info to appear in the app's details panel
            this.map.infoWindow.set("popupWindow", false);

            this._processOperationalLayers();
            this._configureUI();
            // remove loading class from body
            domClass.remove(document.body, "app-loading");
        },

        // Update Address
        _updateAddress: function (evt) {
            if (evt.address.address) {
                var address = evt.address.address.Address;
                dom.byId("curAddress").innerHTML = this.config.i18n.labels.currentLocation + " " + address;
            }
        },

        // Process Operational Layers
        _processOperationalLayers: function () {
            array.forEach(this.opLayers, lang.hitch(this, function (layer) {
                // Is this the layer configured to receive contributions?
                if (layer && layer.layerObject) {
                    if (this.config.ideasLayer
                        && this.config.ideasLayer.id && this.config.ideasLayer.id === layer.id) {
                        // Found the layer configured as the polling layer
                        // Is it editable, which is what we'll need in order to add entries?
                        // If "capabilities" is set to "Query", editing is disabled in the web map
                        // (the layer check is for the webmap; the eLayer check is for the underlying feature service)
                        this.lyrCrowd = layer.layerObject;
                        this.lyrCrowd.editable = false;
                        if (this.lyrCrowd instanceof esri.layers.FeatureLayer && this.lyrCrowd.isEditable()) {
                            if ((layer.capabilities === null || layer.capabilities !== "Query")
                                    && (this.lyrCrowd.capabilities === null || this.lyrCrowd.capabilities !== "Query")) {
                                // Layer is editable
                                this.lyrCrowd.editable = this.config.editable;
                            }
                        }
                    } else if (this.config.commentsTable
                            && this.config.commentsTable.id && this.config.commentsTable.id === layer.id) {
                        if (layer.layerObject instanceof esri.layers.FeatureLayer && layer.layerObject.isEditable()) {
                            if ((layer.capabilities === null || layer.capabilities !== "Query")
                                    && (layer.layerObject.capabilities === null || layer.layerObject.capabilities !== "Query")) {
                                // Layer is editable
                                this.lyrComments = layer.layerObject;
                            }
                        }
                    }
                }
            }));

            if (this.lyrCrowd) {
                on(this.lyrCrowd, "click", lang.hitch(this, this._clickClusterLayer));
            } else {
                this._showMessage("Error", this.config.i18n.messages.noEditableLayer);
            }

            if (!this.lyrComments) {
                this.config.enableComments = false;
                domStyle.set("pageComments", "display", "none");
            }

            // map ui
            this._configureMapUI();
        },

        // Click Cluster Layer
        _clickClusterLayer: function (event) {
            this._showDetails(event.graphic);
        },

        // Show Temp Location
        _showTempLocation: function () {
            var sym, gra;

            this.map.graphics.clear();
            //this._toggleSubmit();
            if (this.location) {
                this.locator.locationToAddress(this.location, 100);
                sym = new PictureMarkerSymbol('images/pin.png', 30, 30);
                sym.setOffset(0, 15);
                gra = new Graphic(this.location, sym, {});
                this.map.graphics.add(gra);
            } else {
                dom.byId("curAddress").innerHTML = "";
            }
        },

        // Show Selected Graphic
        _showSelectedGraphic: function () {
            var sym, gra;

            this.map.graphics.clear();
            if (this.selectedGraphic) {
                sym = new PictureMarkerSymbol('images/pin.png', 30, 30);
                sym.setOffset(0, 15);
                gra = new Graphic(this.selectedGraphic.geometry, sym, {});
                this.map.graphics.add(gra);
            }
        },


        // ** MESSAGE FUNCTIONS **//

        // Show message
        _showMessage: function (title, msg) {
            dom.byId("panelMessageTitle").innerHTML = title;
            dom.byId("panelMessageBody").innerHTML = msg;
            domStyle.set("panelMessage", "display", "block");
        },

        // Close message
        _closeMessage: function () {
            domStyle.set("panelMessage", "display", "none");
            dom.byId("panelMessageTitle").innerHTML = "";
            dom.byId("panelMessageBody").innerHTML = "";
        },


        // ** UI FUNCTIONS **//

        // Configure UI
        _configureUI: function () {

            // === main ===
            // colors
            query(".esriSimpleSlider").style("color", this.colors[0].toString());
            query(".esriSimpleSlider").style("backgroundColor", this.colors[1].toString());

            // show hidden panel
            dom.byId("showPanel").title = this.config.i18n.tooltips.showPanel;
            on(dom.byId("showPanel"), "click", lang.hitch(this, this._showPanel));

            // title
            dom.byId("pageTitle").innerHTML = this.config.title;

            // action; only visible if submission layer is editable, which we know because
            // of the "editable" attribute on the layer
            domStyle.set("actionButton", "display", (this.lyrCrowd && this.lyrCrowd.editable) ? "inline-block" : "none");
            dom.byId("actionButton").innerHTML += this.config.action;
            on(dom.byId("actionButton"), "click", lang.hitch(this, this._showPage, 1));

/*
            // sort
            dom.byId("pageToolsSortLabel").innerHTML = this.config.i18n.labels.sort;
            on(dom.byId("pageToolsSort"), "click", lang.hitch(this, this._clickSort));
*/

            // social media
            dom.byId("signInLabel").innerHTML = this.config.i18n.labels.signInLabel;
            on(dom.byId("signTwitter"), "click", lang.hitch(this, this._clickTwitter));
            on(dom.byId("signFacebook"), "click", lang.hitch(this, this._clickFacebook));

            // === new ===
            // hide panel
            dom.byId("hidePanel").title = this.config.i18n.tooltips.hidePanel;
            on(dom.byId("hidePanel"), "click", lang.hitch(this, this._hidePanel));

            // action
            dom.byId("pageInfoNew").innerHTML = this.config.action;
            dom.byId("closeNew").title = this.config.i18n.tooltips.returnToList;
            on(dom.byId("closeNew"), "click", lang.hitch(this, this._showPage, 0));

            // social media
            dom.byId("signInLabelNew").innerHTML = this.config.i18n.labels.signInLabel;
            on(dom.byId("toolTwitter"), "click", lang.hitch(this, this._clickTwitter));
            on(dom.byId("toolFacebook"), "click", lang.hitch(this, this._clickFacebook));

/*
            if (this.types.length > 1) {
                var node = dom.byId("selType");
                domConstruct.create("option", {
                    value: "",
                    label: "Choose one"
                }, node);
                array.forEach(this.types, function (type) {
                    domConstruct.create("option", {
                        value: type,
                        label: type
                    }, node);
                });
                domStyle.set("divType", "display", "block");
                on(node, "change", lang.hitch(this, this._toggleSubmit));
            }
*/

            // location
            dom.byId("locationPrompt").innerHTML = this.config.i18n.labels.location;
            dom.byId("locationTip").innerHTML = this.config.i18n.labels.locationTip;

            // attachment
            dom.byId("attachmentPrompt").innerHTML = this.config.i18n.labels.attachment;

            // submit
            dom.byId("btnSubmit").innerHTML = this.config.i18n.labels.submit;
            on(dom.byId("btnSubmit"), "click", lang.hitch(this, this._clickSubmit));

            // === old ===
            dom.byId("closeOld").title = this.config.i18n.tooltips.returnToList;
            on(dom.byId("closeOld"), "click", lang.hitch(this, this._showPage, 0));
            dom.byId("recComments").title = this.config.i18n.tooltips.comments;
            if (!this.config.allowUpVotes) {
                domStyle.set("votes", "display", "none");
            }
            dom.byId("votes").title = this.config.i18n.tooltips.votes;
            on(dom.byId("votes"), "click", lang.hitch(this, this._clickUpVote));

            // message
            on(dom.byId("closeMessage"), "click", this._closeMessage);

            // form
            dom.byId("btnCommentSubmit").innerHTML = this.config.i18n.labels.submit;
            on(dom.byId("btnCommentSubmit"), "click", lang.hitch(this, this._clickSubmitComment));


            // Show the list of items at the start
            on(window, "resize", this._handleResize);
            this._showPage(0);
        },

        // Clear New Form
        _clearNewForm: function () {
            newEntryForm = this._generateForm("divNewForm", this.lyrCrowd.fields);

            // Initialize the attachment and position echoes
            dom.byId("attachment").value = "";
            dom.byId("curAddress").innerHTML = "";
            var str = "";
            if (this.geocoder) {
                this.geocoder.clear();
            }
/*
            if (this.user.name) {
                dom.byId("txtName").value = this.user.name;
            }
*/
        },

        // Clear Old Form
        _clearOldForm: function () {
            commentEntryForm = this._generateForm("divCommentForm", [
                {
                    "alias": this.config.i18n.labels.addComment,
                    "editable": true,
                    "length": 256,  //???
                    "name": "txtComment",
                    "nullable": false,
                    "type": "esriFieldTypeString"
                },
                {
                    "alias": this.config.i18n.labels.commentName,
                    "editable": true,
                    "length": 32,  //???
                    "name": "txtCommentator",
                    "nullable": true,
                    "type": "esriFieldTypeString",
                    "value": this.user.name || ""
                }
            ]);
        },

        _generateForm: function (formDivName, fields) {
            var formDiv, form;

            // Clear out the existing form
            formDiv = dom.byId(formDivName);
            while (formDiv.children.length > 0) {
                formDiv.removeChild(formDiv.childNodes[0]);
            }

            // Find the editable attributes and create a form from them
            form = [];
            array.forEach(fields, lang.hitch(this, function (field) {
                var row, inputItem, count;
                if (field.editable) {
                    row = domConstruct.create("div", {
                        className: "formRow",
                        innerHTML: field.alias + (field.nullable ? this.config.i18n.labels.optional : "")
                    }, formDivName);

                    if (field.type === "esriFieldTypeString") {
                        // Create a characters-remaining counter
                        count = domConstruct.create("span", {
                            innerHTML: field.length,
                            className: "charactersRemaining",
                            title: this.config.i18n.tooltips.charactersRemaining
                        }, row);

                        if (field.length > 32) {
                            inputItem = domConstruct.create("textArea", {
                                value: field.value || ""
                            }, row);
                        } else {
                            inputItem = domConstruct.create("input", {
                                type: "text",
                                value: field.value || ""
                            }, row);
                        }

                        // Keep the content within the field's length limit
                        on(inputItem, "keyup", function (evt) {
                            if (field.length < this.value.length) {
                                this.value = this.value.substr(0, field.length);
                            }
                            count.innerHTML = field.length - this.value.length;
                        });

                    } else if (field.type === "esriFieldTypeSmallInteger" || field.type === "esriFieldTypeInteger") {
                        inputItem = domConstruct.create("input", {
                            type: "number"
                        }, row);
                    } else if (field.type === "esriFieldTypeDouble") {
                        inputItem = domConstruct.create("input", {
                            type: "number"
                        }, row);
                    } else if (field.type === "esriFieldTypeDate") {
                        inputItem = new DateTextBox(
                            {value: new Date()},
                            domConstruct.create("div", {}, row)
                        );
                    }

                    if (esriLang.isDefined(inputItem)) {
                        form.push({
                            "field": field,
                            "input": inputItem
                        });
                    }
                }
            }));

            return form;
        },

        // Converts a Date into a string in the format that the HTML DOM <input> element needs.
        _dateAsHtmlInput: function (dateToConvert) {
            if (!dateToConvert) {
                dateToConvert = new Date();
            }

            return dateToConvert.getFullYear() + "-" +
                (dateToConvert.getMonth() + 1) + "-" +
                dateToConvert.getDate();
        },

        // Toggle Scroll
        _toggleScroll: function () {
            this._animateScroll();
        },

        // Animate Scroll
        _animateScroll: function (top) {
            var box, pos, start, end, anim;

            box = html.getContentBox(dom.byId("panelContent"));
            pos = document.body.scrollTop || document.documentElement.scrollTop;
            start = 0;
            end = box.h;
            if (pos > 0) {
                start = box.h;
                end = 0;
            }
            if (top) {
                start = 0;
                end = box.h;
            }
            anim = new fx.Animation({
                duration: 300,
                curve: [start, end]
            });
            on(anim, "Animate", function (v) {
                document.body.scrollTop = v;
                document.documentElement.scrollTop = v;
            });
            anim.play();
        },

        // Show Page
        _showPage: function (num) {
            this.newMode = false;
            this.location = null;
            this._showTempLocation();
            this.selectedGraphic = null;
            this._showSelectedGraphic();
            switch (num) {
            case 0:
                // Show list of ideas
                this._updateFeatures();
                domStyle.set("pageMain", "display", "block");
                domStyle.set("pageNew", "display", "none");
                domStyle.set("pageOld", "display", "none");
                break;
            case 1:
                // Show form for new idea
                this._clearNewForm();
                this._animateScroll(true);
                this.newMode = true;
                domStyle.set("pageMain", "display", "none");
                domStyle.set("pageNew", "display", "block");
                domStyle.set("pageOld", "display", "none");
                break;
            case 2:
                // Show existing idea, its comments, and offer up-voting (if permitted) and adding comment
                this._clearOldForm();
                domStyle.set("pageMain", "display", "none");
                domStyle.set("pageNew", "display", "none");
                domStyle.set("pageOld", "display", "block");
                break;
            }

            // Adjust height of content part of right-hand panel
            this._handleResize();
        },

        // Animate panel hiding and showing
        _animatePanelVisibility: function (moveOff) {
            var box, start, end, anim;

            box = html.getContentBox(dom.byId("panelContent"));
            if (moveOff) {
                start = 0;
                end = -box.w;
            } else {
                start = -box.w;
                end = 0;
            }
            anim = new fx.Animation({
                duration: 300,
                curve: [start, end]
            });
            on(anim, "Animate", function (v) {
                domStyle.set("panelContent", "right", v + "px");
            });
            anim.play();
        },

        // Hide the ideas list panel
        _hidePanel: function () {
            this._animatePanelVisibility(true);
        },

        // Show the ideas list panel
        _showPanel: function () {
            this._animatePanelVisibility(false);
        },

        _handleResize: function () {
            var page, header, content, pageDimensions, headerDimensions, newHeight;

            page = dom.byId("pageMain");
            if (domStyle.get(page, "display") !== "none") {
                pageDimensions = domGeom.getMarginBox(page);
                header = dom.byId("pageHeaderMain");
                headerDimensions = domGeom.getMarginBox(header);
                newHeight = (pageDimensions.h - headerDimensions.h) + "px";
                domStyle.set("pageList", {"height": newHeight});
            } else {
                page = dom.byId("pageNew");
                if (domStyle.get(page, "display") !== "none") {
                    pageDimensions = domGeom.getMarginBox(page);
                    header = dom.byId("pageHeaderNew");
                    headerDimensions = domGeom.getMarginBox(header);
                    domStyle.set("pageForm", {"height": (pageDimensions.h - headerDimensions.h) + "px"});
                } else {
                    page = dom.byId("pageOld");
                    if (domStyle.get(page, "display") !== "none") {
                        pageDimensions = domGeom.getMarginBox(page);
                        header = dom.byId("pageHeaderOld");
                        headerDimensions = domGeom.getMarginBox(header);
                        domStyle.set("pageComments", {"height": (pageDimensions.h - headerDimensions.h) + "px"});
                    }
                }
            }
        },

        // Click Sort
        _clickSort: function () {
            if (this.sort === "cal") {
                this.sort = "votes";
            } else {
                this.sort = "cal";
            }
            domClass.toggle("pageToolsSort", "sortCal");
            this._updateFeatures();
            var pos = document.body.scrollTop || document.documentElement.scrollTop;
            if (pos === 0) {
                this._animateScroll(true);
            }
        },

        // Click Twitter
        _clickTwitter: function () {
            var force = false;
            if (this.user.name && this.user.twitterId) {
                force = true;
            }
            this._twitterSignIn(force);
        },

        // Click Facebook
        _clickFacebook: function () {
            if (this.user.name && this.user.facebookId) {
                this._facebookLogout();
            } else {
                this._facebookLogin();
            }
        },

        // Toggle Submit
        _toggleSubmit: function () {
            var type = "";
            if (this.types.length === 0) {
                type = this.config.title;
            } else if (this.types.length === 1) {
                type = this.types[0];
            } else {
                if (dom.byId("selType").selectedIndex > 0) {
                    type = this.types[dom.byId("selType").selectedIndex - 1];
                }
            }
            if (type !== "" && this.location) {
                dom.byId("btnSubmit").disabled = false;
            } else {
                dom.byId("btnSubmit").disabled = true;
            }
        },

        // Click Submit
        _clickSubmit: function () {
            var gra, attr = {}, title, msg;

            if (newEntryForm.length > 0 && this.location) {
                // Assemble the attributes for the new item from the form
                console.log("Add idea");  //???
                array.forEach(newEntryForm, lang.hitch(this, function (entry) {
                    attr[entry.field.name] = entry.input.value;
                    console.log("    " + entry.field.name + " = " + entry.input.value);  //???
                }));

                // Create and add the graphic to the map
                gra = new Graphic(this.location, null, attr);
                this.lyrCrowd.applyEdits([gra], null, null,
                    lang.hitch(this, function (addResults) {

                    // Add the attachment if present
                    if (dom.byId("formAttachment")[0].value !== "") {
                        this.lyrCrowd.addAttachment(addResults[0].objectId, dom.byId("formAttachment"),
                            lang.hitch(this, function () {
                                this._showPage(0);
                            }),
                            lang.hitch(this, function () {
                                this._showMessage("Error", "Unable to load attachment.");
                                this._showPage(0);
                            }));
                    } else {
                        this._showPage(0);
                    }
                }),
                lang.hitch(this, function () {
                    console.log("Error", "Unable to add data.");
                }));
            } else {
                // invalid
                title = this.config.i18n.messages.incompleteForm;
                msg = "";
                if (!this.location) {
                    msg += this.config.i18n.messages.noLocation;
                }
                this._showMessage(title, msg);
            }
        },

        // Click Submit Like
        _clickUpVote: function () {
            var gra, id, chk, num;

            gra = this.selectedGraphic;
            if (gra) {
                domAttr.set("voteIcon", "src", (this.colors[0] === "white" ? "images/heartBusyW.png" : "images/heartBusyB.png"));
                id = gra.attributes[this.lyrCrowd.objectIdField];
                chk = this._checkHistory(id);
                if (!chk) {
                    num = 1;
                    if (gra.attributes.Votes) {
                        num = gra.attributes.Votes + 1;
                    }
                    gra.attributes.Votes = num;
                    this.lyrCrowd.applyEdits(null, [gra], null,
                        lang.hitch(this, function (addResults) {
                            dom.byId("votesCount").innerHTML = num;

                            // Flag that this user & browser combo has "liked" this object id
                            this._updateHistory(id);
                            domAttr.set("voteIcon", "src", (this.colors[0] === "white" ? "images/heartPlusW.png" : "images/heartPlusB.png"));
                        }),
                        lang.hitch(this, function () {
                            console.log("Error", "Unable to add comment.");
                            domAttr.set("voteIcon", "src", (this.colors[0] === "white" ? "images/heartPlusW.png" : "images/heartPlusB.png"));
                        }));
                } else {
                    domAttr.set("voteIcon", "src", (this.colors[0] === "white" ? "images/heartPlusW.png" : "images/heartPlusB.png"));
                }
            }
        },

        // Check History
        _checkHistory: function (id) {
            var val, c;

            val = "|" + id + ",";
            c = cookie("hrt") || "";
            if (c.indexOf(val) !== -1) {
                return true;
            }
            return false;
        },

        // Update History
        _updateHistory: function (id) {
            var val, c;

            val = "|" + id + ",";
            c = cookie("hrt") || "";
            c += val;
            cookie("hrt", c, {
                expires: 30
            });
        },

        // Click Submit Comment
        _clickSubmitComment: function () {
            var gra, attr = {}, id, title, msg;

            if (commentEntryForm.length > 0) {
                // Assemble the attributes for the new item from the form
                array.forEach(commentEntryForm, lang.hitch(this, function (entry) {
                    attr[entry.field.name] = entry.input.value;
                }));

                // Create a comment graphic
                if (attr.txtComment !== "" && this.selectedGraphic) {
                    id = this.selectedGraphic.attributes[this.lyrCrowd.objectIdField];
                    attr = {
                        IdeaID: id,
                        Date: new Date(),
                        Name: attr.txtCommentator,
                        Comment: attr.txtComment
                    };
                    console.log("Add comment");  //???
                    console.log("    IdeaID = " + attr.IdeaID);  //???
                    console.log("    Date = " + attr.Date);  //???
                    console.log("    Name = " + attr.Name);  //???
                    console.log("    Comment = " + attr.Comment);  //???
                    gra = new Graphic(null, null, attr);
                    this.lyrComments.applyEdits([gra], null, null,
                        lang.hitch(this, function (addResults) {
                            if (esriLang.isDefined(addResults[0].error)) {
                                console.log("Error", addResults[0].error);
                            }
                            this._showPage(0);
                        }),
                        lang.hitch(this, function () {
                            console.log("Error", "Unable to add comment.");
                            this._showPage(0);
                        }));
                }
            } else {
                // invalid
                title = this.config.i18n.messages.incompleteForm;
                msg = "";
                if (!this.location) {
                    msg += this.config.i18n.messages.noLocation;
                }
                this._showMessage(title, msg);
            }
        },

        // Configure Map UI
        _configureMapUI: function () {

            // home
            // var home = new HomeButton({
            // map : this.map
            // }, "btnHome");
            // home.startup();

            // gelocate
            this.geoLocate = new LocateButton({
                map: this.map,
                highlightLocation: false
            }, "btnLocate");
            this.geoLocate.startup();
            on(this.geoLocate, "locate", lang.hitch(this, this._positionLocate));

            // geocoder
            this.geocoder = new Geocoder({
                map: this.map,
                url: this.config.helperServices.geocode[0].url,
                autoComplete: true
            }, "divGeocoder");
            on(this.geocoder, "find-results", lang.hitch(this, this._geocoderResults));
            on(this.geocoder, "select", lang.hitch(this, this._geocoderSelect));
            on(this.geocoder, "clear", lang.hitch(this, this._geocoderClear));
            this.geocoder.startup();

            // map click
            on(this.map, "click", lang.hitch(this, this._mapClickHandler));

            // update features
            this._updateFeatures();

        },

        // geocoder results
        _geocoderResults: function (obj) {
            if (obj.results.results.length > 0) {
                var result = obj.results.results[0];
                this.location = result.feature.geometry;
                this._showTempLocation();
            }
        },

        // geocoder select
        _geocoderSelect: function (obj) {
            var result = obj.result;
            this.location = result.feature.geometry;
            this._showTempLocation();
        },

        // geocoder clear
        _geocoderClear: function () {
            this.location = null;
            this._showTempLocation();
        },

        // position locate
        _positionLocate: function (event) {
            this.location = event.graphic.geometry;
            this._showTempLocation();
        },

        // map click handler
        _mapClickHandler: function (event) {
            if (this.newMode) {
                this.location = event.mapPoint;
                this._showTempLocation();
            }
        },


        // ** DATA FUNCTIONS **//

        // Update Features
        _updateFeatures: function () {
            if (this.lyrCrowd) {
                var updateQuery = new Query();
                updateQuery.returnGeometry = true;
                updateQuery.where = "1=1";
                updateQuery.orderByFields = ["Date DESC"];
                if (this.sort === "votes") {
                    updateQuery.orderByFields = ["Votes DESC", "Date DESC"];
                }
                updateQuery.outFields = ["*"];
                this.lyrCrowd.queryFeatures(updateQuery, lang.hitch(this, this._processFeatures), lang.hitch(this, this._errorHandler));
            }
        },

        // Process Features
        _processFeatures: function (results) {
            var container, features, i, gra, attr, rec, str, recInfo, recTools;

            container = dom.byId("resultsList");
            container.innerHTML = "";
            features = results.features;
            for (i = 0; i < features.length; i++) {
                gra = features[i];

                rec = domConstruct.create("div", {}, container);
                new ContentPane({
                    content: gra.getContent(),
                    className: "rec"
                }, rec).startup();
                domStyle.set(rec, "border-bottom", "1px solid " + this.colors[1]);

                on(rec, "click", lang.hitch(this, this._selectRecord, gra));
            }
        },

        // Get Rec Info
        _getRecInfo: function (attr) {
            var info = "";
            info += "<span class='recTitle'>" + attr.Type + "</span><br/>";
            info += attr.Comment + "<br/>";
            if (attr.Name !== "") {
                info += "- " + attr.Name;
            } else {
                info += "- Anonymous";
            }
            return info;
        },

        // Get Rec Votes
        _getRecLikes: function (attr) {
            if (attr.Votes) {
                return attr.Votes;
            }
            return 0;
        },

        // Get Rec Age
        _getRecAge: function (attr) {
            var dt = new Date(attr.Date);
            // var diff = Math.ceil((new Date() - dt)/60000);
            // var age = diff + " MINS AGO";
            // if (diff > 60)
            // age = parseInt(diff/60) + " HOURS AGO";
            // if (diff > 60*24)
            // age = parseInt(diff/(60*24)) + " DAYS AGO";
            // if (diff > 60*24*365)
            // age = parseInt(diff/(60*24*365)) + " YEARS AGO";
            return dt.toLocaleString();
        },

        // Error Handler
        _errorHandler: function (error) {
            console.log("Error: " + dojo.toJson(error));
        },

        // Select Record
        _selectRecord: function (gra) {
            this._showDetails(gra);
            this.map.centerAndZoom(gra.geometry, 19);
        },

        // Show Details
        _showDetails: function (gra) {
            // Empty the details area
            var header = dom.byId("pageInfoDetails");
            while (header.children.length > 0) {
                header.removeChild(header.childNodes[0]);
            }

            // Add the item as the title
            new ContentPane({
                content: gra.getContent()
                //className: "rec"
            }).placeAt("pageInfoDetails").startup();

            // Init
            dom.byId("votesCount").innerHTML = this._getRecLikes(gra.attributes);
            dom.byId("recCommentsCount").innerHTML = "0";  // we'll update this after querying; see _updateDetails()

            // Show the page and update the comments
            this._showPage(2);
            this._updateDetails(gra);

            this.selectedGraphic = gra;
            this._showSelectedGraphic();
        },

        // Get Page Info
        _getPageInfo: function (attr) {
            var info = "";
            info += attr.Type + "<br/>";
            if (attr.Name !== "") {
                info += "- " + attr.Name;
            } else {
                info += "- Anonymous";
            }
            return info;
        },

        // Update Details
        _updateDetails: function (gra) {
            var container, str, details, lyr, idFld;

            // Get container to receive attachment
            var container = dom.byId("existingComments");
            container.innerHTML = "";

            lyr = this.lyrCrowd;
            idFld = lyr.objectIdField;
            lyr.queryAttachmentInfos(gra.attributes[idFld], lang.hitch(this, function (infos) {
                if (infos.length > 0 && infos[0].url) {
                    var imgDetails = domConstruct.create("div", {
                        innerHTML: "<img src='" + infos[0].url + "' style='max-width:100%'/>"
                    }, container);
                    domClass.add(imgDetails, 'imgDetails');
                }
                this._updateComments(gra);
            }), lang.hitch(this, function () {
                this._updateComments(gra);
            }));
        },

        // Update Comments
        _updateComments: function (gra) {
            var expr, updateQuery;

            if (this.lyrComments) {
                expr = "IdeaID = " + gra.attributes[this.lyrCrowd.objectIdField];
                updateQuery = new Query();
                updateQuery.returnGeometry = false;
                updateQuery.where = expr;
                updateQuery.orderByFields = ["Date"];
                updateQuery.outFields = ["*"];
                this.lyrComments.queryFeatures(updateQuery, lang.hitch(this, this._processComments), lang.hitch(this, this._errorHandler));
            }
        },

        // Process Comments
        _processComments: function (results) {
            var container, features, i, gra, attr, rec, str, recInfo, recTools;

            container = dom.byId("existingComments");

            features = results.features;
            for (i = 0; i < features.length; i++) {
                gra = features[i];
                attr = gra.attributes;
                // comment block
                rec = domConstruct.create("div", {}, container);
                domClass.add(rec, 'comment');
                // comment itself
                str = "";
                recInfo = domConstruct.create("div", {
                    innerHTML: this._getCommentInfo(attr)
                }, rec);
                domClass.add(recInfo, 'commentInfo');
                // recTools
                recTools = domConstruct.create("div", {}, rec);
                domClass.add(recTools, 'recTools');
                // timestamp
                recCal = domConstruct.create("div", {
                    innerHTML: this._getRecAge(attr)
                }, recTools);
                domClass.add(recCal, 'recCal');
            }
            dom.byId("recCommentsCount").innerHTML = features.length;
        },

        // Get Comment Info
        _getCommentInfo: function (attr) {
            var info = "";
            info += attr.Comment + "<br/>" + this.config.i18n.labels.author + " ";
            if (attr.Name !== "") {
                info += attr.Name;
            } else {
                info += this.config.i18n.labels.anonymous;
            }
            return info;
        },


        // ** TWITTER FUNCTIONS **//

        // Checkin Social Media
        _checkinSocialMedia: function () {
            this._twitterGetAccount();
            this._initFacebookAPI();
        },

        // Twitter Sign In
        _twitterSignIn: function (forceLogin) {
            var redirect_uri, page;

            //this._twitterWindow(this.config.twitterSigninUrl);
            redirect_uri = encodeURIComponent(window.location);
            page = this.config.twitterSigninUrl + '?redirect_uri=' + redirect_uri;
            if (forceLogin) {
                this.user.name = "";
                this.user.twitterId = "";
                page += '&force_login=true';
            }
            window.location = page;
        },

        // Twitter Get Account
        _twitterGetAccount: function () {
            esriRequest({
                url: this.config.twitterAccountUrl,
                handleAs: "json",
                timeout: 10000,
                content: "",
                callbackParamName: "callback",
                preventCache: true,
                failOk: true,
                handle: lang.hitch(this, function (data) {
                    if (data.screen_name) {
                        this.user.twitterId = data.screen_name;
                        this._twitterGetUser(data.screen_name);
                    }
                })
            }, {
                useProxy: false
            });
        },

        // Twitter Get User
        _twitterGetUser: function (screen_name) {
            esriRequest({
                url: this.config.twitterUsersUrl + "?screen_name=" + screen_name,
                handleAs: "json",
                timeout: 10000,
                content: "",
                callbackParamName: "callback",
                preventCache: true,
                failOk: true,
                handle: lang.hitch(this, function (data) {
                    console.log("Twitter", data);
                    if (data.name) {
                        this.user.name = data.name;
                        dom.byId("signInLabel").innerHTML = this.config.i18n.labels.signOutLabel;
                        dom.byId("signInNew").innerHTML = this.config.i18n.labels.signOutLabel;
                    }
                })
            }, {
                useProxy: false
            });
        },

        // ** FACEBOOK FUNCTIONS **//

        _facebookLogin: function () {
            return null;
/*
            var ref, si, siN, access_token, user_id;

            ref = this;
            si = dom.byId("signInLabel");
            siN = dom.byId("signInNew");
            FB.login(function (response) {

                if (response.authResponse) {
                    console.log("Facebook", response); // dump complete info
                    access_token = response.authResponse.accessToken; //get access token
                    user_id = response.authResponse.userID; //get FB UID
                    si.innerHTML = "SIGN OUT";
                    siN.innerHTML = "SIGN OUT";
                    FB.api('/me', function (response) {
                        ref.user.facebookId = response.id;
                        ref.user.name = response.first_name + " " + response.last_name;
                    });

                    FB.api("/me/picture", function (response) {
                        if (response && !response.error) {
                            if (!response.data.is_silhouette) {
                            }
                        }
                    });

                } else {
                    //user hit cancel button
                    console.log('User cancelled login or did not fully authorize.');

                }
            }, {
                scope: 'publish_stream,email'
            });
*/
        },

        // Facebook logout
        _facebookLogout: function () {
            return null;
/*
            this.user.name = "";
            this.user.facebookId = "";
            dom.byId("signInLabel").innerHTML = "SIGN IN";
            dom.byId("signInNew").innerHTML = "SIGN IN";
            FB.logout(function (response) {
                // user is now logged out
            });
*/
        },

        // Init Facebook API
        _initFacebookAPI: function () {
            return null;
/*
            var id = this.config.facebookAppId;

            window.fbAsyncInit = function () {

                FB.init({
                    appId: id,
                    cookie: true, // enable cookies to allow the server to access
                    // the session
                    xfbml: true, // parse social plugins on this page
                    version: 'v2.1' // use version 2.1
                });

            };

            // Load the SDK asynchronously
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
*/
        }




    });
});
