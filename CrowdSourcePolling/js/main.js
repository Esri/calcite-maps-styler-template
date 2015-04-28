/*global define,Modernizr,console */
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
    "dojo/_base/declare",
    "dojo/_base/array",
    "dojo/_base/Color",
    "dojo/_base/fx",
    "dojo/_base/lang",
    "dojo/Deferred",
    "dojo/dom",
    "dojo/dom-class",
    "dojo/dom-style",
    "dojo/json",
    "dojo/on",
    "dojo/parser",
    "dojo/promise/all",
    "dojo/promise/first",
    "dojo/topic",
    "esri/arcgis/utils",
    "esri/config",
    "esri/dijit/LocateButton",
    "esri/dijit/Search",
    "application/lib/LayerAndTableMgmt",
    "application/widgets/ItemDetails/ItemDetailsController",
    "application/widgets/ItemList/ItemList",
    "application/widgets/PopupWindow/PopupWindow",
    "application/widgets/PopupWindow/SocialMediaSignin",
    "application/widgets/SidebarContentController/SidebarContentController",
    "application/widgets/SidebarHeader/SidebarHeader",
    "dijit/layout/LayoutContainer",
    "dijit/layout/ContentPane",
    "dojox/color/_base",
    "dojo/domReady!"
], function (
    declare,
    array,
    Color,
    fx,
    lang,
    Deferred,
    dom,
    domClass,
    domStyle,
    JSON,
    on,
    parser,
    all,
    first,
    topic,
    arcgisUtils,
    esriConfig,
    LocateButton,
    Search,
    LayerAndTableMgmt,
    ItemDetails,
    ItemList,
    PopupWindow,
    SocialMediaSignin,
    SidebarContentController,
    SidebarHeader
) {
    return declare(null, {
        config: {},
        map: null,
        mapData: null,
        _linkToMapView: false,
        _currentlyCommenting: false,
        _hasCommentTable: false,
        _votesField: null,

        startup: function (config) {
            var itemInfo, error;

            parser.parse();

            // config will contain application and user defined info for the template such as i18n strings, the web map id
            // and application id
            // any url parameters and any application specific configuration information.
            if (config) {
                this.config = config;
                //supply either the webmap id or, if available, the item info
                itemInfo = this.config.itemInfo || this.config.webmap;
                this._launch(itemInfo);
            } else {
                error = new Error("Main:: Config is not defined");
                this.reportError(error);
            }
        },

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
                    node.innerHTML = this.config.i18n.map.error + ": " + ((error && error.message) || error || "");
                } else {
                    node.innerHTML = "Unable to create map: " + ((error && error.message) || error || "");
                }
            }
        },

        //========================================================================================================================//

        /**
         * Launches app.
         * @param {object|string} itemInfo Configuration object created by template.js or webmap id
         */
        _launch: function (itemInfo) {
            var setupUI, createMap;

            this.config.isIE8 = this._createIE8Test();

            // Perform setups in parallel
            setupUI = this._setupUI();
            createMap = this._createWebMap(itemInfo);

            // Show the app when the first of the setups completes
            first([setupUI, createMap]).then(lang.hitch(this, function () {
                this._revealApp();
            }));

            // Complete wiring-up when all of the setups complete
            all([setupUI, createMap]).then(lang.hitch(this, function (statusList) {
                var commentFields;

                //----- Merge map-loading info with UI items -----
                if (this.config.itemVotesField && this.config.itemVotesField.length > 0) {
                    // Make sure that the configured votes field exists
                    if (array.some(this._mapData.getItemFields(), lang.hitch(this, function (field) {
                            return this.config.itemVotesField === field.name &&
                                (field.type === "esriFieldTypeInteger" || field.type === "esriFieldTypeSmallInteger");
                        }))) {
                        this._votesField = this.config.itemVotesField;
                    }
                }
                commentFields = this._mapData.getCommentFields();
                this._itemsList.setFields(this._votesField);
                this._itemDetails.setItemFields(this._votesField, commentFields);
                this._itemDetails.setActionsVisibility(this._votesField, commentFields, this._mapData.getItemLayer().hasAttachments);

                //----- Catch published messages and wire them to their actions -----

                /**
                 * @param {object} item Item whose vote was updated
                 */
                topic.subscribe("addLike", lang.hitch(this, function (item) {
                    console.log(">addLike>", item);  //???
                    if (this._votesField) {
                        this._mapData.incrementVote(item, this._votesField);
                    }
                }));

                topic.subscribe("cancelForm", lang.hitch(this, function () {
                    console.log(">cancelForm>");  //???
                    this._itemDetails.destroyCommentForm();
                    this._currentlyCommenting = false;
                }));

                /**
                 * @param {object} item Item that received a comment
                 */
                topic.subscribe("commentAdded", lang.hitch(this, function (item) {
                    console.log(">commentAdded>", item);  //???
                    topic.publish("updateComments", item);
                }));

                /**
                 * @param {string} err Error message for when an item's comment add failed
                 */
                topic.subscribe("commentAddFailed", lang.hitch(this, function (err) {
                    console.log(">commentAddFailed>", err);  //???
                    this._sidebarCnt.showBusy(false);
                    topic.publish("showError", err);
                }));

                topic.subscribe("detailsCancel", lang.hitch(this, function () {
                    console.log(">detailsCancel>");  //???
                    topic.publish("showPanel", "itemsList");
                }));

                /**
                 * @param {object} item Item for which a comment might be submitted
                 */
                topic.subscribe("getComment", lang.hitch(this, function (item) {
                    var userInfo;
                    console.log(">getComment>", item);  //???

                    if (this._currentlyCommenting) {
                        topic.publish("cancelForm");
                    } else {
                        userInfo = this._socialDialog.getSignedInUser();
                        this._itemDetails.showCommentForm(userInfo);
                        this._currentlyCommenting = true;
                    }
                }));

                topic.subscribe("helpSelected", lang.hitch(this, function () {
                    console.log(">helpSelected>");  //???
                    this._helpDialogContainer.set("displayText", this.config.displayText);
                    this._helpDialogContainer.show();
                }));

                /**
                 * @param {object} item Item to find out more about
                 */
                topic.subscribe("itemSelected", lang.hitch(this, function (item) {
                    console.log(">itemSelected>", item);  //???
                    var itemExtent;

                    this._currentItem = item;
                    this._itemsList.setSelection(item.attributes[item._layer.objectIdField]);

                    this._itemDetails.clearComments();
                    this._itemDetails.setItem(item);
                    if (this._votesField) {
                        this._mapData.refreshVoteCount(item, this._votesField).then(function (item) {
                            topic.publish("voteUpdated", item);
                        });
                    }

                    if (this._mapData.getItemLayer().hasAttachments) {
                        topic.publish("updateAttachments", item);
                    }
                    topic.publish("updateComments", item);
                    topic.publish("showPanel", "itemDetails");

                    // Zoom to item if possible
                    if (item.geometry.getExtent) {
                        itemExtent = item.geometry.getExtent();
                    }
                    if (itemExtent) {
                        this.map.setExtent(itemExtent.expand(1.5));
                    } else {
                        this.map.centerAndZoom(item.geometry,
                            Math.min(2 + this.map.getZoom(), this.map.getMaxZoom()));
                    }
                }));

                /**
                 * @param {boolean} isSelected New state of setting
                 */
                topic.subscribe("linkToMapViewChanged", lang.hitch(this, function (isSelected) {
                    console.log(">linkToMapViewChanged>", isSelected);  //???
                    this._linkToMapView = isSelected;
                    topic.publish("updateItems");
                }));

                /**
                 * @param {string} err Error message to display
                 */
                topic.subscribe("showError", lang.hitch(this, function (err) {
                    console.log(">showError>", err);  //???
                    this._helpDialogContainer.set("displayText", err);
                    this._helpDialogContainer.show();
                }));

                /**
                 * @param {string} name Name of sidebar content panel to switch to
                 */
                topic.subscribe("showPanel", lang.hitch(this, function (name) {
                    console.log(">showPanel>", name);  //???
                    this._sidebarCnt.showPanel(name);

                    if (name === "itemsList") {
                        this._itemsList.clearList();
                        topic.publish("updateItems");
                    }
                }));

                topic.subscribe("signinUpdate", lang.hitch(this, function () {
                    console.log(">signinUpdate>");  //???
                    this._sidebarHdr.updateSignin(this._socialDialog.getSignedInUser());
                }));

                topic.subscribe("socialSelected", lang.hitch(this, function () {
                    console.log(">socialSelected>");  //???
                    var signedInUser = this._socialDialog.getSignedInUser();
                    if (!signedInUser) {
                        // Show the social media sign-in screen so that the user can sign in
                        this._socialDialog.show();
                    } else {
                        // Simply sign out
                        this._socialDialog.signOut(signedInUser);
                    }
                }));

                /**
                 * @param {object} item Item to receive a comment
                 * @param {object} comment Comment to add to item
                 */
                topic.subscribe("submitForm", lang.hitch(this, function (item, comment) {
                    console.log(">submitForm>", item, comment);  //???
                    this._sidebarCnt.showBusy(true);
                    this._mapData.addComment(item, comment);
                    this._itemDetails.destroyCommentForm();
                    this._currentlyCommenting = false;
                }));

                /**
                 * @param {object} item Item whose attachments are to be refreshed
                 */
                topic.subscribe("updateAttachments", lang.hitch(this, function (item) {
                    console.log(">updateAttachments>", item);  //???
                    this._sidebarCnt.showBusy(true);
                    this._mapData.queryAttachments(item);
                }));

                /**
                 * @param {object} item Item whose comments list is to be refreshed
                 */
                topic.subscribe("updateComments", lang.hitch(this, function (item) {
                    console.log(">updateComments>", item);  //???
                    if (this._hasCommentTable) {
                        this._sidebarCnt.showBusy(true);
                        this._mapData.queryComments(item);
                    }
                }));

                /**
                 * @param {object} item Item owning attachments
                 * @param {array} attachments List of attachments for the current item
                 */
                topic.subscribe("updatedAttachments", lang.hitch(this, function (item, attachments) {
                    console.log(">updatedAttachments>", attachments);  //???
                    if (this._currentItem &&
                            this._currentItem.attributes[this._currentItem._layer.objectIdField] ===
                            item.attributes[item._layer.objectIdField]) {
                        this._itemDetails.setAttachments(attachments);
                    }
                    this._sidebarCnt.showBusy(false);
                }));

                /**
                 * @param {object} item Item owning comments
                 * @param {array} comments List of comments for the current item
                 */
                topic.subscribe("updatedCommentsList", lang.hitch(this, function (item, comments) {
                    console.log(">updatedCommentsList>", comments);  //???
                    if (this._currentItem &&
                            this._currentItem.attributes[this._currentItem._layer.objectIdField] ===
                            item.attributes[item._layer.objectIdField]) {
                        this._itemDetails.setComments(comments);
                    }
                    this._sidebarCnt.showBusy(false);
                }));

                /**
                 * @param {array} items List of items matching update request
                 */
                topic.subscribe("updatedItemsList", lang.hitch(this, function (items) {
                    console.log(">updatedItemsList>", items);  //???
                    this._itemsList.setItems(items);
                    this._sidebarCnt.showBusy(false);
                }));

                topic.subscribe("updateItems", lang.hitch(this, function () {
                    console.log(">updateItems>");  //???
                    this._sidebarCnt.showBusy(true);
                    this._mapData.queryItems(this._linkToMapView ? this.map.extent : null);
                }));

                /**
                 * @param {object} item Item whose votes count was changed
                 */
                topic.subscribe("voteUpdated", lang.hitch(this, function (item) {
                    console.log(">voteUpdated>", item);  //???
                    this._itemDetails.updateItemVotes(item);
                }));

                /**
                 * @param {string} err Error message for when an item's votes count change failed
                 */
                topic.subscribe("voteUpdateFailed", lang.hitch(this, function (err) {
                    console.log(">voteUpdateFailed>", err);  //???
                    topic.publish("showError", err);
                }));


                //----- Set up controller-published messages (other than -----
                //----- those that are forwards from subscriptions)      -----

                // Click on an item in the map
                on(this._mapData.getItemLayer(), "click", function (evt) {
                    if (evt.graphic) {
                        topic.publish("itemSelected", evt.graphic);
                    }
                });

                // Support option to reset items list whenever the map is resized while the items
                // list is visible
                on(this.map, "extent-change", lang.hitch(this, function (evt) {
                    if (this._linkToMapView && this._sidebarCnt.getCurrentPanelName() === "itemsList") {
                        topic.publish("updateItems");
                    }
                }));

                // Start with items list
                topic.publish("showPanel", "itemsList");
                topic.publish("signinUpdate");


                //----- Done -----
                console.log("app is ready");
            }), lang.hitch(this, function (err) {
                this.reportError(err);
            }));
        },

        /**
         * Sets up UI.
         * @return {object} Deferred
         */
        _setupUI: function () {
            var deferred = new Deferred(), styleString = "";
            setTimeout(lang.hitch(this, function () {
                var luminance = new Color(this.config.color).toHsl().l;

                // Set the theme
                if (luminance > this.config.maxDarkLuminance) {
                    this.config.theme = {
                        "background": this.config.color,  // lighter
                        "foreground": "black",
                        "accentBkgd": (Modernizr.rgba ? "rgba(0, 0, 0, 0.35)" : this.config.color),
                        "accentText": (Modernizr.rgba ? "rgba(0, 0, 0, 0.35)" : "black")
                    };
                } else {
                    this.config.theme = {
                        "background": this.config.color,  // darker
                        "foreground": "white",
                        "accentBkgd": (Modernizr.rgba ? "rgba(255, 255, 255, 0.35)" : this.config.color),
                        "accentText": (Modernizr.rgba ? "rgba(255, 255, 255, 0.35)" : "white")
                    };
                }

                // Set the theme
                styleString += ".appTheme{color:" + this.config.theme.foreground + ";background-color:" + this.config.theme.background + "}";
                styleString += ".appTheme:hover{color:" + this.config.theme.foreground + ";background-color:" + this.config.theme.background + "!important}";
                styleString += ".appThemeAccentBkgd{background-color:" + this.config.theme.accentBkgd + "}";
                styleString += ".appThemeAccentText{color:" + this.config.theme.accentText + "!important}";
                this.injectCSS(styleString);

                // Apply the theme to the sidebar
                domStyle.set("sidebar", "border-left-color", this.config.theme.background);


                //----- Add the widgets -----

                // Social media
                this._socialDialog = new SocialMediaSignin({
                    "appConfig": this.config,
                    "showClose": true,
                    "maxima": {
                        "width": 350,
                        "height": 300
                    }
                }).placeAt(document.body); // placeAt triggers a startup call to _socialDialog

                // Sidebar header
                this._sidebarHdr = new SidebarHeader({
                    "appConfig": this.config,
                    "showSignin": this._socialDialog.isAvailable && (this.config.commentNameField.trim().length > 0),
                    "showHelp": this.config.displayText.length > 0
                }).placeAt("sidebarHeading"); // placeAt triggers a startup call to _sidebarHdr

                // Popup window for help, error messages, social media
                this._helpDialogContainer = new PopupWindow({
                    "appConfig": this.config,
                    "showClose": true,
                    "maxima": {
                        "width": 350,
                        "height": 300
                    }
                }).placeAt(document.body); // placeAt triggers a startup call to _helpDialogContainer

                // Sidebar content controller
                this._sidebarCnt = new SidebarContentController({
                    "appConfig": this.config
                }).placeAt("sidebarContent"); // placeAt triggers a startup call to _sidebarCnt

                // Items list
                this._itemsList = new ItemList({
                    "appConfig": this.config,
                    "linkToMapView": this._linkToMapView
                }).placeAt("sidebarContent"); // placeAt triggers a startup call to _itemsList
                this._sidebarCnt.addPanel("itemsList", this._itemsList);

                // Item details
                this._itemDetails = new ItemDetails({
                    "appConfig": this.config
                }).placeAt("sidebarContent"); // placeAt triggers a startup call to _itemDetails
                this._itemDetails.hide();
                this._sidebarCnt.addPanel("itemDetails", this._itemDetails);


                deferred.resolve("ui");
            }));
            return deferred.promise;
        },

        /**
         * Creates a map based on the input item info or web map id.
         * @param {object|string} itemInfo Configuration object created by template.js or webmap id
         * @return {object} Deferred
         */
        _createWebMap: function (itemInfo) {
            var mapCreateDeferred, mapDataReadyDeferred;
            mapCreateDeferred = new Deferred();
            mapDataReadyDeferred = new Deferred();

            // Create and load the map
            arcgisUtils.createMap(itemInfo, "mapDiv", {
                mapOptions: {
                    // Optionally define additional map config here for example you can
                    // turn the slider off, display info windows, disable wraparound 180, slider position and more.
                },
                usePopupManager: false,  // disable searching thru all layers for infoTemplates
                //ignorePopups: true,
                editable: this.config.editable,
                bingMapsKey: this.config.bingKey
            }).then(lang.hitch(this, function (response) {
                var geoLocate;

                // Once the map is created we get access to the response which provides important info
                // such as the map, operational layers, popup info and more. This object will also contain
                // any custom options you defined for the template. In this example that is the 'theme' property.
                // Here we'll use it to update the application to match the specified color theme.
                this.map = response.map;

                // start up locate widget
                geoLocate = new LocateButton({
                    map: this.map,
                    theme: "LocateButtonLight"
                }, "LocateButton");
                geoLocate.startup();

                // Keep info window invisible when one clicks upon a graphic
                on(this.map, "click", lang.hitch(this, function (evt) {
                    this.map.infoWindow.hide();
                }));

                // make sure map is loaded
                if (this.map.loaded) {
                    mapCreateDeferred.resolve();
                } else {
                    on.once(this.map, "load", lang.hitch(this, function () {
                        mapCreateDeferred.resolve();
                    }));
                }
            }), function (err) {
                mapCreateDeferred.reject((err ? ": " + err : ""));
            });

            // Once the map and its first layer are loaded, get the layer's data
            mapCreateDeferred.then(lang.hitch(this, function () {
                // At this point, this.config has been supplemented with
                // the first operational layer's layerObject
                this._mapData = new LayerAndTableMgmt(this.config);
                this._mapData.load().then(lang.hitch(this, function (hasCommentTable) {
                    this._hasCommentTable = hasCommentTable;

                    // Add search control to search world places as well as GIS Day feature service
                    var searchControl = new Search({
                        addLayersFromMap: true,
                        enableButtonMode: true,
                        enableInfoWindow: false,
                        map: this.map
                    }, "SearchButton");
                    searchControl.startup();

                    mapDataReadyDeferred.resolve("map data");
                }), lang.hitch(this, function (err) {
                    mapDataReadyDeferred.reject(this.config.i18n.map.layerLoad + (err ? ": " + err : ""));
                }));
            }), lang.hitch(this, function (err) {
                mapDataReadyDeferred.reject(this.config.i18n.map.layerLoad + (err ? ": " + err : ""));
            }));

            return mapDataReadyDeferred.promise;
        },

        /**
         * Hides the loading indicator and reveals the content.
         */
        _revealApp: function () {
            domClass.remove(document.body, "app-loading");
            fx.fadeIn({
                node: "contentDiv",
                duration: 1000,
                onEnd: function () {
                    domClass.remove("contentDiv", "transparent");
                }
            }).play();
        },

        //====================================================================================================================//

        /**
         * Tests if the browser is IE 8 or lower.
         * @return {boolean} True if the browser is IE 8 or lower
         */
        _createIE8Test: function () {
            return this._isIE(8, "lte");
        },

        /**
         * Detects IE and version number through injected conditional comments (no UA detect, no need for conditional
         * compilation / jscript check).
         * @param {string} [version] IE version
         * @param {string} [comparison] Operator testing multiple versions based on "version"
         * parameter, e.g., 'lte', 'gte', etc.
         * @return {boolean} Result of conditional test; note that since IE stopped supporting conditional comments with
         * IE 10, this routine only works for IE 9 and below; for IE 10 and above, it always returns "false"
         * @author Scott Jehl
         * @see The <a href="https://gist.github.com/scottjehl/357727">detect IE and version number through injected
         * conditional comments.js</a>.
         */
        _isIE: function (version, comparison) {
            var cc      = 'IE',
                b       = document.createElement('B'),
                docElem = document.documentElement,
                isIE;

            if (version) {
                cc += ' ' + version;
                if (comparison) { cc = comparison + ' ' + cc; }
            }

            b.innerHTML = '<!--[if ' + cc + ']><b id="iecctest"></b><![endif]-->';
            docElem.appendChild(b);
            isIE = !!document.getElementById('iecctest');
            docElem.removeChild(b);
            return isIE;
        },

        /**
         * Injects a string of CSS into the document.
         * @example
         * <pre>
         * // For <div class="titleBox"><div class="title">Title</div></div>
         * require(["dojo/ready", "js/lgonlineBase"], function (ready) {
         *     ready(function () {
         *         var loader = new js.LGObject();
         *         loader.injectCSS(
         *             ".titleBox{width:100%;height:52px;margin:0px;padding:4px;color:white;background-color:#1e90ff;text-align:center;overflow:hidden;}"+
         *             ".title{font-size:24px;position:relative;top:25%}"
         *         );
         *     });
         * });
         * </pre>
         * @param {string} cssStr A string of CSS text
         * @return {object} DOM style element
         */
        injectCSS: function (cssStr) {
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
        }

    });
});
