/*global define,dojo,js,esri,Modernizr,alert,console,touchScroll */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true */
/** @license
 | Copyright 2012 Esri
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
//============================================================================================================================//
define("js/lgonlineApp", ["dijit", "dijit/registry", "dojo/dom-construct", "dojo/on", "dojo/dom-style", "dojo/dom-class", "dojo/_base/array", "esri/arcgis/utils", "dojo/topic", "dojo/_base/Color"], function (dijit, registry, domConstruct, on, domStyle, domClass, array, utils, topic, Color) {
    dojo.require("esri.tasks.find");
    dojo.require("esri.tasks.locator");
    dojo.require("esri.tasks.query");
    dojo.require("esri.dijit.BasemapGallery");
    dojo.require("esri.layout");
    dojo.require("esri.dijit.Attribution");

    //========================================================================================================================//

    dojo.declare("js.LGObject", null, {
        /**
         * Constructs an LGObject.
         *
         * @param {object} [args.parentDiv] Name of DOM
         *        object into which the object's div is to be placed;
         *        required for subsequent searching for this object by
         *        id
         * @param {string} args.rootId Id for root div of created object
         * @param {string} [args.rootClass] Name of CSS class to
         *        use for the root container of the object; if omitted,
         *        the div's style is set to "display:none"
         *
         * @constructor
         * @class
         * @name js.LGObject
         * @classdesc
         * Provides a base class for LG objects; includes utility
         * functions.
         */
        constructor: function (args) {
            var rootAttrs, parentDiv, parentDivObj, pThis = this;

            if (undefined !== args) {  // Guard needed by IE7, IE8
                dojo.safeMixin(this, args);
            }

            // Check for prerequisites before continuing
            if (this.checkPrerequisites) {
                // Throws exception if prerequisites not met
                this.checkPrerequisites();
            }

            // Construct the root container
            rootAttrs = {};
            if (this.rootId) {
                rootAttrs.id = this.rootId;
            }
            if (this.rootClass) {
                rootAttrs.className = this.rootClass;
            } else {
                rootAttrs.style = "display:none";
            }

            // If a parent div is supplied, make sure that it exists
            if (this.parentDiv !== undefined) {
                parentDiv = this.parentDiv;
                parentDivObj = dojo.byId(parentDiv);
                if (!parentDivObj) {
                    parentDiv = null;
                }
            } else {
                parentDiv = null;
            }

            /**
             * The root div container for the object.
             * @member {div} rootDiv
             * @private
             * @memberOf js.LGObject#
             */
            if (parentDivObj && parentDivObj.getLGObject && parentDivObj.getLGObject().addItem) {
                this.rootDiv = domConstruct.create("div", rootAttrs);
                parentDivObj.getLGObject().addItem(this.rootDiv);
            } else {
                this.rootDiv = domConstruct.create("div", rootAttrs, parentDiv);
            }

            /**
             * This object--the one associated with the root div container.
             * @return {object} The LG object
             * @memberOf js.LGObject#
             */
            this.rootDiv.getLGObject = function () {
                return pThis;
            };
        },

        /**
         * Returns the root div of the object.
         * @return {object} The root div container
         * @memberOf js.LGObject#
         */
        getRootDiv: function () {
            return this.rootDiv;
        },

        /**
         * Deletes the item's associated div from the DOM.
         * @memberOf js.LGObject#
         */
        deleteDivFromDom: function () {
            if (this.rootDiv) {
                this.rootDiv.parentNode.removeChild(this.rootDiv);
            }
        },

        /**
         * Injects a string of CSS into the document.
         * @example
         * <pre>
         * dojo.require("js.LGObject");
         * dojo.addOnLoad(function () {
         *     var loader = new js.LGObject();
         *     loader.injectCSS(
         *         ".commandGallery{height:52px;margin:0px;padding:2px;font-size:36px;background-color:#d3d3d3;overflow:hidden;position:absolute;}"+
         *         ".command{width:48px;height:48px;min-width:48px;margin:4px;padding:0px;background-color:#add8e6;text-align:center;vertical-align:middle;}"
         *     );
         * });
         * </pre>
         * @param {string} cssStr A string of CSS text
         * @return {object} DOM style element
         * @memberOf js.LGObject#
         */
        injectCSS: function (cssStr) {
            var customStyles, cssText, firstScript;

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

            // http://paulirish.com/2011/surefire-dom-element-insertion/
            firstScript = document.getElementsByTagName("script")[0];
            firstScript.parentNode.insertBefore(customStyles, firstScript);

            return customStyles;
        },

        /**
         * Converts a string into a value retrieved from the object's
         * i18n structure if the string begins with "@".
         * @param {string} aString A string or "@" followed by a path
         *        into the object's i18n structure
         * @return {string} Original string if it doesn't begin with
         *        "@" or the i18n structure string found at the end of
         *        the original string interpreted as a path
         * @memberOf js.LGObject#
         */
        checkForI18n: function (aString) {
            var leadChar, resolvedString = aString;

            if (this.i18n && aString && 1 < aString.length) {
                leadChar = aString.substring(0, 1);  // IE7/8 cannot use aString[0]
                if ("@" === leadChar) {
                    resolvedString = this.followAttributePath(this.i18n, aString.substring(1));
                }
            }

            return resolvedString;
        },

        /**
         * Follows a path of attributes into an object.
         * @param {object} rootObj Object into which we'll look
         * @param {string} attributePath Path of attributes into
         *        rootObj; e.g., if the attribute path is
         *        "tooltips.share", then this routine returns
         *        rootObj.tooltips.share
         * @return {object} Object at end of attribute path
         * @memberOf js.LGObject#
         */
        followAttributePath: function (rootObj, attributePath) {
            var x, objAtEnd = rootObj,
                attributeChain = attributePath.split(".");

            // Step thru the chain of nested attributes to get to the object at the end
            attributeChain = attributePath.split(".");
            for (x = 0; x < attributeChain.length; x = x + 1) {
                objAtEnd = objAtEnd[attributeChain[x]];
            }

            return objAtEnd;
        },

        /**
         * Displays a message to the console, and, optionally, also
         * publishes it. If window.gLogMessageBox is defined, message is also
         * appended to it.
         * @param {string} message Message to write
         * @param {boolean} publishError If true, message is also
         *        published under the topic "error"
         * @memberOf js.LGObject#
         */
        log: function (message, publishError) {
            if (console) {
                console.log(message);
            }
            if (publishError) {
                topic.publish("error", message);
            }
            if (window.gLogMessageBox) {
                window.gLogMessageBox.append(message);
            }
        }

    });

    //========================================================================================================================//

    dojo.declare("js.LGColorizer", js.LGObject, {
        /**
         * Constructs an LGColorizer.
         *
         * @constructor
         * @class
         * @name js.LGColorizer
         * @extends js.LGObject
         * @classdesc
         * Manages the app's color theme.
         */
        constructor: function () {
            var styleString = "",
                pThis = this,
                colors = ["#fff", "#333333", "#5d5d5d"];  // make sure that we have something

            // Retrieve the theme definition from the color table
            array.some(this.colorTable, function (themeDefn) {
                if (pThis.theme === themeDefn.theme) {
                    colors = themeDefn.colors;
                    return true;
                }
                return false;
            });

            // Set the theme
            styleString += ".appTheme{color:" + colors[0] + ";background-color:" + colors[1] + "}";
            styleString += ".appThemeHover:hover{background-color:" + colors[2] + "}";
            this.injectCSS(styleString);
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGGraphic", js.LGObject, {
        /**
         * Constructs an LGGraphic.
         *
         * @param {object} [args.parentDiv] Name of DOM
         *        object into which the object's div is to be placed;
         *        required for subsequent searching for this object by
         *        id (LGObject)
         * @param {string} args.rootId Id for root div of created object
         *        (LGObject)
         * @param {boolean} [args.fill=false] Whether the object should
         *        fill its parent's div or not; if fill is true, the
         *        horizOffset and vertOffset parameters are ignored
         * @param {number} [args.horizOffset] Horizontal offset
         *        flag/value: >0: left side; 0: center; <0: right side;
         *        undefined: no horizontal or vertical adjustment;
         *        requires absolute positioning
         * @param {number} [args.vertOffset] Vertical offset
         *        flag/value: >0: top side; 0: center; <0: bottom side;
         *        undefined: no horizontal or vertical adjustment;
         *        requires absolute positioning
         *
         * @param {object} [args.values] Key-value pairs for
         *        configurable elements
         *
         * @param {object} [args.i18n] Key-value pairs for text
         *        strings for non-configurable elements
         *
         * @constructor
         * @class
         * @name js.LGGraphic
         * @extends js.LGObject
         * @classdesc
         * Provides a base class for LG objects that are meant to be
         * displayed.
         */
        constructor: function () {
            // Do class-specific adjustments whenever the window is resized
            dojo.connect(window, "resize", this, this.handleWindowResize, true);
            this.handleWindowResize();
        },

        /**
         * Shows or hides the graphic.
         * @param {boolean} isVisible Indicates if graphic should be
         *        shown (true) or hidden
         * @memberOf js.LGGraphic#
         */
        setIsVisible: function (isVisible) {
            domStyle.set(this.getRootDiv(), "display", isVisible ? "block" : "none");
        },

        /**
         * Toggles the graphic's visibility
         * @memberOf js.LGGraphic#
         */
        toggleVisibility: function () {
            var isVisibleNow = domStyle.get(this.getRootDiv(), "display") !== "none";
            domStyle.set(this.getRootDiv(), "display", isVisibleNow ? "none" : "block");
        },

        /**
         * Handles a resize event and repositions the object as needed.
         * @memberOf js.LGGraphic#
         */
        handleWindowResize: function () {
            // Fill object in its parent
            if (this.fill !== undefined && this.fill === true) {
                this.fillParentDiv();
            // Align object over its parent
            } else if (this.horizOffset !== undefined && this.vertOffset !== undefined) {
                this.alignOver(this.rootDiv, this.rootDiv.parentNode,
                    this.horizOffset, this.vertOffset);
            }
        },

        /**
         * Adjusts height and width of object to fill parent div.
         * @memberOf js.LGGraphic#
         */
        fillParentDiv: function () {
            var styleAttrs;

            if (this.rootDiv.parentNode) {
                // Note: margin != 0 shifts item, although it has the dimensions of its parent
                styleAttrs = {
                    left: "0px",
                    top: "0px",
                    width: this.rootDiv.parentNode.clientWidth + "px",
                    height: this.rootDiv.parentNode.clientHeight + "px"
                };
                dojo.style(this.rootDiv, styleAttrs);
            }
        },

        /**
         * Aligns an absolutely-positioned div over another div.
         * @param {string|object} overDiv Div to be positioned; it needs
         *        to be styled "position:absolute" and left, right, top,
         *        and bottom cannot be set
         * @param {string|object} underDiv Div over which overDiv is to
         *        be positioned
         * @param {number|array} horizOffset Horizontal pixel offset of
         *        overDiv: >0 pixels from left side; 0 is center; <0
         *        pixels from right side; array applies offsets in
         *        order, so with [2,0], the div is horizontally
         *        centered, but with [2,-3], the div is positioned 2
         *        pixels from the left side and 3 pixels from the right
         *        side
         * @param {number|array} vertOffset Vertical pixel offset of
         *        overDiv: >0 pixels from top side; 0 is center; <0
         *        pixels from bottom side; array applies offsets in
         *        order (see horizOffset param)
         * @memberOf js.LGGraphic#
         */
        alignOver: function (overDiv, underDiv, horizOffset, vertOffset) {
            var overDivBox, underDivBox, styleAttrs, pThis = this;

            // Shield the modifications--we may be missing a parent
            if (overDiv && underDiv) {
                // Inspired by the Dojo reference guide
                // http://dojotoolkit.org/reference-guide/1.7/dojo/position.html#center-a-dom-node-over-another
                overDivBox = dojo.marginBox(overDiv);
                underDivBox = dojo.marginBox(underDiv);

                styleAttrs = {};
                if (typeof horizOffset === "number") {
                    styleAttrs = this.insertHorizPositioningStyle(styleAttrs, horizOffset, overDivBox, underDivBox);
                } else if (typeof horizOffset === "object") {
                    array.forEach(horizOffset, function (horizOff) {
                        styleAttrs = pThis.insertHorizPositioningStyle(styleAttrs, horizOff, overDivBox, underDivBox);
                    });
                }
                if (typeof vertOffset === "number") {
                    styleAttrs = this.insertVertPositioningStyle(styleAttrs, vertOffset, overDivBox, underDivBox);
                } else if (typeof vertOffset === "object") {
                    array.forEach(vertOffset, function (vertOff) {
                        styleAttrs = pThis.insertVertPositioningStyle(styleAttrs, vertOff, overDivBox, underDivBox);
                    });
                }
                dojo.style(overDiv, styleAttrs);
            }
        },

        /**
         * Inserts horizontal style attributes into the supplied
         * structure.
         * @param {object} styleAttrs Structure to receive style
         *        attributes; attributes are overwritten if they already
         *        exist
         * @param {number} horizOffset Horizontal pixel offset of
         *        overDiv: >0 pixels from left side; 0 is center; <0
         *        pixels from right side
         * @param {object} overDivBox dojo.marginBox of div to be
         *        positioned
         * @param {object} underDivBox dojo.marginBox of div over which
         *        overDiv is to be positioned
         * @return {object} Updated styleAttrs structure
         * @memberOf js.LGGraphic#
         */
        insertHorizPositioningStyle: function (styleAttrs, horizOffset, overDivBox, underDivBox) {
            if (0 < horizOffset) {
                styleAttrs.left = horizOffset + "px";
            } else if (0 === horizOffset) {
                styleAttrs.left = Math.round((underDivBox.w - overDivBox.w) / 2) + "px";
            } else {
                styleAttrs.right = (-horizOffset) + "px";
            }
            return styleAttrs;
        },

        /**
         * Inserts vertical style attributes into the supplied
         * structure.
         * @param {object} styleAttrs Structure to receive style
         *        attributes; attributes are overwritten if they already
         *        exist
         * @param {number} vertOffset Vertical pixel offset of
         *        overDiv: >0 pixels from top side; 0 is center; <0
         *        pixels from bottom side
         * @param {object} overDivBox dojo.marginBox of div to be
         *        positioned
         * @param {object} underDivBox dojo.marginBox of div over which
         *        overDiv is to be positioned
         * @return {object} Updated styleAttrs structure
         * @memberOf js.LGGraphic#
         */
        insertVertPositioningStyle: function (styleAttrs, vertOffset, overDivBox, underDivBox) {
            if (0 < vertOffset) {
                styleAttrs.top = vertOffset + "px";
            } else if (0 === vertOffset) {
                styleAttrs.top = Math.round((underDivBox.h - overDivBox.h) / 2) + "px";
            } else {
                styleAttrs.bottom = (-vertOffset) + "px";
            }
            return styleAttrs;
        },

        /**
         * Applies the current theme class to the object.
         * @param {boolean} [withHover] Node has hover color or not; no
         *        hover color if omitted
         * @param {string|object} [node] Node to receive style; applied
         *        to the calling object if omitted
         * @memberOf js.LGGraphic#
         */
        applyTheme: function (withHover, node) {
            domClass.add(node || this.rootDiv, "appTheme");
            if (withHover) {
                domClass.add(node || this.rootDiv, "appThemeHover");
            }
        }

    });

    //========================================================================================================================//

    dojo.declare("js.LGBusy", js.LGGraphic, {
        /**
         * Constructs an LGBusy.
         *
         * @constructor
         * @class
         * @name js.LGBusy
         * @extends js.LGGraphic
         * @classdesc
         * Manages the app's busy indicator.
         */
        constructor: function () {
            if (this.busyImageClass) {
                dojo.addClass(this.rootDiv, this.busyImageClass);

            }
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGCommand", js.LGGraphic, {
        /**
         * Constructs an LGCommand.
         *
         * @param {object} [args.parentDiv] Name of DOM
         *        object into which the LGGraphic is to be placed
         *        (LGGraphic)
         * @param {string} args.rootId Id for root div of created object
         *        (LGGraphic)
         * @param {string} [args.rootClass] Name of CSS class to
         *        use for the root container of the object (LGGraphic)
         * @param {boolean} [args.fill=false] Whether the object should
         *        fill its parent's div or not; if fill is true, the
         *        horizOffset and vertOffset parameters are ignored
         *        (LGGraphic)
         * @param {number} [args.horizOffset] Horizontal offset
         *        flag/value: >0: left side; 0: center; <0: right side;
         *        undefined: no horizontal or vertical adjustment
         *        (LGGraphic)
         * @param {number} [args.vertOffset] Vertical offset
         *        flag/value: >0: top side; 0: center; <0: bottom side;
         *        undefined: no horizontal or vertical adjustment
         *        (LGGraphic)
         *
         * @param {string} [args.iconClass] Name of CSS class to
         *        use for icon
         * @param {string} [args.displayText] Text to display in div;
         *        only used if iconUrl not supplied
         * @param {string} [args.displayTextClass] Name of CSS class to
         *        use for displayText
         *
         * @param {object} [args.values] Key-value pairs for
         *        configurable elements (LGGraphic)
         * @param {string} [args.values.iconUrl] Url to icon to display
         *        in div
         * @param {string} [args.values.tooltip] Text to display as
         *        tooltip
         *
         * @param {object} [args.i18n] Key-value pairs for text
         *        strings for non-configurable elements (LGGraphic)
         *
         * @constructor
         * @class
         * @name js.LGCommand
         * @extends js.LGGraphic
         * @classdesc
         * Builds and manages a UI object that represents a command.
         */
        constructor: function () {
            var attrs, dependsOn, pThis = this;

            this.applyTheme(true);

            // If we have an icon, add it to the face of the button
            if (this.iconUrl) {
                attrs = {src: this.iconUrl};
                if (this.iconClass) {
                    attrs.className = this.iconClass;
                }
                this.iconImg = dojo.create("img", attrs, this.rootDiv);
            }
            // If we have text, add it to the face of the button
            if (this.displayText) {
                attrs = {innerHTML: this.checkForI18n(this.displayText)};
                if (this.displayTextClass) {
                    attrs.className = this.displayTextClass;
                }
                dojo.create("div", attrs, this.rootDiv);
            }

            if (this.tooltip) {
                this.rootDiv.title = this.checkForI18n(this.tooltip);
            }

            // Hook up a click on the root div to the click handler; we use the root div so that
            // one can click outside of the icon and text
            if (this.publish) {
                this.clickHandler = on(this.rootDiv, "click", this.handleClick);
            }

            // Make command invisible until dependency resolved
            if (this.dependencyId) {
                this.setIsVisible(false);
                dependsOn = dojo.byId(this.dependencyId).getLGObject();
                dependsOn.ready.then(function () {
                    pThis.setIsVisible(true);
                });
            }
        },

        /**
         * Handles a click event.
         * @param {object} evt Click event
         * @this {js.LGCommand}
         * @private
         * @memberOf js.LGCommand#
         * @override
         */
        handleClick: function (evt) {
            var obj = evt.currentTarget.getLGObject();
            topic.publish("command", obj.publish);
            topic.publish(obj.publish, obj.publishArg);
        }

    });

    //========================================================================================================================//

    dojo.declare("js.LGSearch", js.LGObject, {
        /**
         * LGSearch
         *
         * @constructor
         * @class
         * @name js.LGSearch
         * @extends js.LGObject
         * @classdesc
         * Provides a base class for searchers.
         */
        constructor: function () {
            if (this.busyIndicator) {
                this.busyIndicator = dojo.byId(this.busyIndicator).getLGObject();
            }
        },

        /**
         * Launches a search of the instance's search type.
         * @param {string|geometry} searchText Text or geometry to search
         * @param {function} callback Function to call when search
         *        results arrive
         * @param {function} errback Function to call when search
         *        fails
         * @memberOf js.LGSearch#
         * @see Interface stub
         */
        search: function () {
            return null;
        },

        /**
         * Formats results into a list of structures; each structure
         * contains a label and an optional datum structure.
         * @param {object} results Search-specific results
         * @param {string} [searchText] Search text
         * @return {array} List of structures
         * @memberOf js.LGSearch#
         * @see Interface stub
         */
        toList: function () {
            return [];
        },

        /**
         * Publishes the specified data after performing any post
         * processing.
         * @param {string} subject Publishing topic name
         * @param {object} [data] Object to publish under topic
         * @memberOf js.LGSearch#
         * @see Interface stub. The data are those set up by the toList
         *       function and could be final or intermediate results.
         *       For intermediate results, the publish function is the
         *       place for the searcher to complete the data-retrieval
         *       process before publishing.
         */
        publish: function (subject, data) {
            topic.publish(subject, data);
        },

        /**
         * Provides an array sort function that sorts by the "label"
         * attribute of the supplied items.
         * @param {object} a Array sort item
         * @param {object} b Array sort item
         * @return {number} -1 if a<b, 0 if a=b, and 1 if a>b;
         *         comparison uses the label's localCompare() function
         * @memberOf js.LGSearch#
         */
        sortByLabel: function (a, b) {
            var sortResult = 0;
            if (a && b && a.label && b.label) {
                sortResult = a.label.localeCompare(b.label);
            }
            return sortResult;
        },

        /**
         * Returns a point that represents the geometry.
         * @param {object} geom Some geometry
         * @return {object} if geom is a point, returns geom; if geom is
         *         a polygon, returns the centerpoint of the polygon if
         *         that centerpoint is within geom; otherwise, returns
         *         the first point of the polygon; if geom is a
         *         polyline, returns the first point of geom
         * @memberOf js.LGSearch#
         */
        getRepresentativePoint: function (geom) {
            var repPoint;

            if ("point" === geom.type) {
                repPoint = geom;
            } else if ("polygon" === geom.type) {
                repPoint = geom.getExtent().getCenter();
                if (!geom.contains(repPoint)) {
                    repPoint = geom.getPoint(0, 0);
                }
            } else if ("polyline" === geom.type) {
                repPoint = geom.getPoint(0, 0);
            }

            return repPoint;
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGSearchAddress", js.LGSearch, {
        /**
         * Constructs an LGSearchAddress.
         *
         * @constructor
         * @class
         * @name js.LGSearchAddress
         * @extends js.LGSearch
         * @classdesc
         * Provides a searcher for addresses.
         */
        constructor: function () {
            this.searcher = new esri.tasks.Locator(this.searchUrl);
            this.searcher.outSpatialReference = new esri.SpatialReference({"wkid": this.outWkid});
            this.params = {};
            this.params.outFields = this.outFields;
        },

        /**
         * Launches a search of the instance's search type.
         * @param {string|geometry} searchText Text or geometry to search
         * @param {function} callback Function to call when search
         *        results arrive; function takes the results as its sole
         *        argument
         * @memberOf js.LGSearchAddress#
         * @override
         */
        search: function (searchText, callback, errback) {
            this.params.address = {};
            this.params.address[this.addressParamName] = searchText;
            this.searcher.addressToLocations(this.params, callback, errback);
        },

        /**
         * Formats results into a list of structures; each structure
         * contains a label and an optional datum structure.
         * @param {object} results Search-specific results
         * @param {string} [searchText] Search text
         * @return {array} List of structures
         * @memberOf js.LGSearchAddress#
         * @override
         */
        toList: function (results) {
            var ok, pThis = this, resultsList = [];
            if (results) {
                // Filter results by desired score and locator
                array.forEach(results, function (item) {
                    ok = false;
                    if (item.score >= pThis.minimumScore) {
                        if (pThis.validLocators) {
                            array.some(pThis.validLocators, function (entry) {
                                if (item.attributes.Loc_name === entry) {
                                    ok = true;
                                    return true;
                                }
                            });
                        } else {
                            ok = true;
                        }
                    }
                    if (ok) {
                        resultsList.push({
                            "label": item.address,
                            "data": new esri.geometry.Point(
                                item.location.x,
                                item.location.y,
                                new esri.SpatialReference({ wkid: 102100 })
                            )
                        });
                    }
                });
            }
            return resultsList;
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGSearchFeatureLayer", js.LGSearch, {
        /**
         * Constructs an LGSearchFeatureLayer.
         *
         * @constructor
         * @class
         * @name js.LGSearchFeatureLayer
         * @extends js.LGSearch
         * @classdesc
         * Provides a searcher for feature layers.
         */
        constructor: function () {
            var mapDiv, mapObj, searchLayer, pThis = this;
            if (!this.searchPattern || this.searchPattern.indexOf("${1}") < 0) {
                this.searchPattern = "%${1}%";
            }
            if (this.caseInsensitiveSearch === undefined || this.caseInsensitiveSearch === "true"
                    || this.caseInsensitiveSearch === true) {
                this.caseInsensitiveSearch = true;
            } else {
                this.caseInsensitiveSearch = false;
            }
            this.ready = new dojo.Deferred();

            // Get the URL of the search layer from the associated map, but we have to wait
            // until the map is ready before asking it
            mapDiv = dojo.byId(this.mapRootId);
            mapObj = mapDiv.getLGObject();
            mapObj.ready.then(function () {
                var reason, message, availableFields = ",";
                try {
                    searchLayer = mapObj.getLayer(pThis.searchLayerName);
                    if (!searchLayer || !searchLayer.url) {
                        reason = pThis.checkForI18n("@messages.searchLayerMissing");
                    } else {
                        pThis.searchURL = searchLayer.url;

                        // Check for existence of fields
                        array.forEach(searchLayer.fields, function (layerField) {
                            availableFields += layerField.name + ",";
                        });
                        if (!array.every(pThis.searchFields, function (searchField) {
                                reason = searchField;
                                return availableFields.indexOf("," + searchField + ",") >= 0;
                            })) {

                            // Failed to find the field in the search layer; provide some feedback
                            message = "\"" + reason + "\"<br>";
                            message += pThis.checkForI18n("@messages.searchFieldMissing") + "<br><hr><br>";
                            message += pThis.checkForI18n("@prompts.layerFields") + "<br>";
                            if (availableFields.length > 1) {
                                message += availableFields.substring(1, availableFields.length - 1);
                            }
                            pThis.log(message, true);
                        }

                        // Set up our query task now that we have the URL to the layer
                        pThis.objectIdField = searchLayer.objectIdField;
                        pThis.publishPointsOnly = (typeof pThis.publishPointsOnly === "boolean") ? pThis.publishPointsOnly : true;

                        pThis.searcher = new esri.tasks.QueryTask(pThis.searchURL);

                        // Set up the general layer query task: pattern match
                        pThis.generalSearchParams = new esri.tasks.Query();
                        pThis.generalSearchParams.returnGeometry = false;
                        pThis.generalSearchParams.outSpatialReference = mapObj.mapInfo.map.spatialReference;
                        pThis.generalSearchParams.outFields = [searchLayer.objectIdField].concat(pThis.searchFields);

                        // Set up the specific layer query task: object id
                        pThis.objectSearchParams = new esri.tasks.Query();
                        pThis.objectSearchParams.returnGeometry = true;
                        pThis.objectSearchParams.outSpatialReference = mapObj.mapInfo.map.spatialReference;

                        pThis.log("Search layer " + pThis.searchLayerName + " set up for queries");
                        pThis.ready.resolve(pThis);
                        return;
                    }
                } catch (error) {
                    reason = error.toString();
                }

                // Failed to find the search layer; provide some feedback
                message = "\"" + pThis.searchLayerName + "\"<br>";
                message += reason + "<br><hr><br>";
                message += pThis.checkForI18n("@prompts.mapLayers") + "<br><ul>";
                array.forEach(mapObj.getLayerNameList(), function (layerName) {
                    message += "<li>\"" + layerName + "\"</li>";
                });
                message += "</ul>";
                pThis.log(message, true);

                pThis.ready.reject(pThis);
            });
        },

        /**
         * Checks that the instance has its prerequisites.
         * @throws {string} "missing search fields" if the search fields
         *        parameter is omitted
         * @memberOf js.LGSearchFeatureLayer#
         * @override
         */
        checkPrerequisites: function () {
            var splitFields, pThis = this;

            if (this.searchFields && 0 < this.searchFields.length) {
                splitFields = this.searchFields.split(",");
                this.searchFields = [];
                array.forEach(splitFields, function (searchField) {
                    pThis.searchFields.push(searchField.trim());
                });
            } else {
                this.log("missing search fields");
                throw "missing search fields";
            }
        },

        /**
         * Launches a search.
         * @param {string|geometry} searchText Text to search
         * @param {function} callback Function to call when search
         *        results arrive; function takes the results as its sole
         *        argumentsss
         * @memberOf js.LGSearchFeatureLayer#
         * @override
         */
        search: function (searchText, callback, errback) {
            var processedSearchText,
                searchParam = "",
                attributePattern,
                attributeSeparator = "",
                attributeSeparatorReset = "  OR  ";  // thanks to Tim H.: single spaces don't work with some DBs

            if (this.caseInsensitiveSearch === true) {
                processedSearchText = searchText.toUpperCase();
                attributePattern = "UPPER(${0}) LIKE '" + this.searchPattern + "'";
            } else {
                processedSearchText = searchText;
                attributePattern = "${0} LIKE '" + this.searchPattern + "'";
            }

            // Escape single quotes, which are used to bound the search term in the query
            processedSearchText = processedSearchText.replace(/'/g, "''");

            array.forEach(this.searchFields, function (searchField) {
                searchParam = searchParam + attributeSeparator
                    + dojo.string.substitute(attributePattern, [searchField, processedSearchText]);
                attributeSeparator = attributeSeparatorReset;
            });
            if (0 < searchParam.length) {
                this.generalSearchParams.where = searchParam;
                this.searcher.execute(this.generalSearchParams, callback, errback);
            }
        },

        /**
         * Formats results into a list of structures; each structure
         * contains a label and an optional datum structure.
         * @param {object} results Search-specific results
         * @param {string} searchText Search text
         * @return {array} List of structures
         * @memberOf js.LGSearchFeatureLayer#
         * @override
         */
        toList: function (results, searchText) {
            var pThis = this, resultsList = [], possibleLabel, representativeLabel,
                processedSearchText = searchText.toUpperCase();

            if (results && results.features && 0 < results.features.length) {
                // Create the results list
                array.forEach(results.features, function (item) {

                    // Test each non-null search field result and pick the first one
                    // that contains the search string as our label
                    representativeLabel = "";
                    array.some(pThis.searchFields, function (searchField) {
                        if (item.attributes[searchField]) {
                            possibleLabel = item.attributes[searchField].toString();
                            if (possibleLabel.toUpperCase().indexOf(processedSearchText) >= 0) {
                                representativeLabel = possibleLabel;
                                return true;
                            }
                        }
                        return false;
                    });

                    if (representativeLabel === "") {
                        representativeLabel = "result";
                    }

                    // Create the entry for this result
                    resultsList.push({
                        "label": representativeLabel,
                        "data": item.attributes[pThis.objectIdField]
                    });
                });

                // Results are sorted by their label field
                resultsList.sort(pThis.sortByLabel);
            }

            return resultsList;
        },

        /**
         * Publishes the specified data after performing any post
         * processing.
         * @param {string} subject Publishing topic name
         * @param {object} data Object to publish under topic
         * @memberOf js.LGSearch#
         * @see Interface stub. The data are those set up by the toList
         *       function and could be final or intermediate results.
         *       For intermediate results, the publish function is the
         *       place for the searcher to complete the data-retrieval
         *       process before publishing.
         * @memberOf js.LGSearchFeatureLayer#
         * @override
         */
        publish: function (subject, data) {
            var item, representativeData, pThis = this;

            if (this.busyIndicator) {
                this.busyIndicator.setIsVisible(true);
            }

            // Search for the supplied object id
            this.objectSearchParams.where = this.objectIdField + "=" + data;
            this.searcher.execute(this.objectSearchParams, function (results) {
                if (results && results.features && 0 < results.features.length) {
                    item = results.features[0];

                    if (pThis.publishPointsOnly) {
                        // Find a point that can be used to represent this item
                        representativeData = pThis.getRepresentativePoint(item.geometry);
                    } else {
                        representativeData = item;
                    }

                    topic.publish(subject, representativeData);
                } else {
                    // No-results failure
                    pThis.log("LGSearchFeatureLayer_1: no results");
                }

                if (pThis.busyIndicator) {
                    pThis.busyIndicator.setIsVisible(false);
                }
            }, function (error) {
                // Query failure
                pThis.log("LGSearchFeatureLayer_2: " + error.message);

                if (pThis.busyIndicator) {
                    pThis.busyIndicator.setIsVisible(false);
                }
            });
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGDropdownBox", js.LGGraphic, {
        /**
         * Constructs an LGDropdownBox.
         *
         * @constructor
         * @class
         * @name js.LGDropdownBox
         * @extends js.LGGraphic
         * @classdesc
         * Provides a generic dropdown that toggles its visibility based
         * on a subscription to a trigger message.
         */
        constructor: function () {
            var pThis = this;

            this.applyTheme(false);

            // Start listening for activation/deactivation call
            if (this.trigger) {
                topic.subscribe("command", function (sendingTrigger) {
                    if (sendingTrigger !== pThis.trigger) {
                        pThis.setIsVisible(false);
                    }
                });
                topic.subscribe(this.trigger, function (data) {
                    pThis.handleTrigger(data);
                });
            }
        },

        /**
         * Handles a trigger by toggling visibility.
         * @param {object} [data] Data accompanying trigger.
         * @memberOf js.LGDropdownBox#
         */
        handleTrigger: function () {
            this.toggleVisibility();
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGMessageBox", js.LGDropdownBox, {
        /**
         * Constructs an LGMessageBox.
         *
         * @param {string} content HTML to insert into box
         *
         * @constructor
         * @class
         * @name js.LGMessageBox
         * @extends js.LGDropdownBox
         * @classdesc
         * Provides a UI display of a chunk of HTML.
         */
        constructor: function () {
            if (this.content && this.content.length > 0) {
                this.rootDiv.innerHTML = this.content;
            }
            touchScroll(this.rootDiv);
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGPublishEcho", js.LGDropdownBox, {
        /**
         * Constructs an LGPublishEcho.
         *
         * @class
         * @name js.LGPublishEcho
         * @extends js.LGDropdownBox
         * @classdesc
         * Provides a UI display of a published message.
         */

        /**
         * Handles a trigger by toggling visibility and displaying the
         * trigger's data.
         * @param {object} [data] Data accompanying trigger.
         * @memberOf js.LGPublishEcho#
         * @override
         */
        handleTrigger: function (data) {
            this.rootDiv.innerHTML = data.toString();
            this.toggleVisibility();
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGLogBox", js.LGDropdownBox, {
        /**
         * Constructs an LGLogBox.
         *
         * @see Sets the global variable window.gLogMessageBox to point to
         *       this object.
         *
         * @constructor
         * @class
         * @name js.LGLogBox
         * @extends js.LGGraphic
         * @classdesc
         * Provides a UI display of log messages to supplement the
         * console.
         */
        constructor: function () {
            window.gLogMessageBox = this;
            touchScroll(this.rootDiv);
        },

        /**
         * Appends content to the root div.
         * @param {string|object} newContent A string that forms the
         *        innerHTML of a new div that's appended to the root div
         *        or an object that's appended to the root div
         * @memberOf js.LGLogBox#
         */
        append: function (newContent) {
            if (typeof newContent === "string") {
                domConstruct.create("div", {innerHTML: newContent, style: "margin:2px"}, this.rootDiv);

            } else if (typeof newContent === "object" && newContent !== null) {
                this.rootDiv.appendChild(newContent);
            }
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGSearchBoxByText", js.LGDropdownBox, {
        /**
         * Constructs an LGSearchBoxByText.
         *
         * @constructor
         * @class
         * @name js.LGSearchBoxByText
         * @extends js.LGDropdownBox
         * @classdesc
         * Provides a UI display of a prompted text box followed by a
         * list of results.
         */
        constructor: function () {
            var pThis = this, textBoxId, searchEntryTextBox, resultsListBox, table, tableBody,
                searcher, lastSearchString, lastSearchTime, stagedSearch;

            textBoxId = this.rootId + "_entry";

            domConstruct.create("label",
                {"for": textBoxId, innerHTML: this.checkForI18n(this.showPrompt)}, this.rootId);
            searchEntryTextBox = new dijit.form.TextBox({
                id: textBoxId,
                value: "",
                trim: true,
                placeHolder: this.hint,
                intermediateChanges: true
            }).placeAt(this.rootId);
            domStyle.set(registry.byId(textBoxId).domNode, "width", "99%");

            resultsListBox = domConstruct.create("div",
                {className: this.resultsListBoxClass}, this.rootId);
            table = domConstruct.create("table",
                {className: this.resultsListTableClass}, resultsListBox);
            tableBody = domConstruct.create("tbody",
                {className: this.resultsListBodyClass}, table);
            touchScroll(resultsListBox);

            searcher = dojo.byId(this.searcher).getLGObject();
            lastSearchString = "";
            lastSearchTime = 0;
            stagedSearch = null;

            // Run a search when the entry text changes
            on(searchEntryTextBox, "change", function () {
                var searchText = searchEntryTextBox.get("value");
                if (lastSearchString !== searchText) {
                    lastSearchString = searchText;
                    dojo.empty(tableBody);

                    // Clear any staged search
                    clearTimeout(stagedSearch);

                    if (searchText.length > 0) {
                        // Stage a new search, which will launch if no new searches show up
                        // before the timeout
                        stagedSearch = setTimeout(function () {
                            var searchingPlaceholder, thisSearchTime, now;

                            searchingPlaceholder = domConstruct.create("tr", null, tableBody);
                            domConstruct.create("td",
                                {className: pThis.resultsListSearchingClass}, searchingPlaceholder);

                            thisSearchTime = lastSearchTime = (new Date()).getTime();
                            searcher.search(searchText, function (results) {
                                var resultsList;

                                // Discard searches made obsolete by new typing from user
                                if (thisSearchTime < lastSearchTime) {
                                    return;
                                }

                                // Show results
                                dojo.empty(tableBody);  // to get rid of searching indicator
                                resultsList = searcher.toList(results, searchText);

                                now = (new Date()).getTime();
                                pThis.log("retd " + resultsList.length + " items in "
                                    + (now - thisSearchTime) / 1000 + " secs");

                                if (resultsList.length > 0) {
                                    array.forEach(resultsList, function (item) {
                                        var tableRow, tableCell;

                                        tableRow = domConstruct.create("tr",
                                            null, tableBody);
                                        tableCell = domConstruct.create("td",
                                            {className: pThis.resultsListEntryClass, innerHTML: item.label}, tableRow);
                                        pThis.applyTheme(true, tableCell);
                                        on(tableCell, "click", function () {
                                            searcher.publish(pThis.publish, item.data);
                                        });
                                    });
                                }
                            }, function (error) {
                                // Query failure
                                pThis.log("LGSearchBoxByText_1: " + error.message);

                                lastSearchString = "";  // so that we can quickly repeat this search
                                dojo.empty(tableBody);  // to get rid of searching indicator
                            });
                        }, 1000);
                    }
                }
            });
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGMapBasedMenuBox", js.LGDropdownBox, {
        /**
         * Constructs an LGMapBasedMenuBox.
         *
         * @constructor
         * @class
         * @name js.LGMapBasedMenuBox
         * @extends js.LGDropdownBox
         * @classdesc
         * Provides a UI display of a menu that is not available until
         * the specified map is available.
         */
        constructor: function () {
            var pThis = this,
                mapDiv;

            this.ready = new dojo.Deferred();

            mapDiv = dojo.byId(this.mapRootId);
            this.mapObj = mapDiv.getLGObject();
            this.mapObj.ready.then(function () {
                pThis.onMapReady();
                pThis.ready.resolve(pThis);
            });
        },

        /**
         * Performs class-specific setup when the map dependency is
         * satisfied.
         * @memberOf js.LGMapBasedMenuBox#
         */
        onMapReady: function () {
            return null;
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGBasemapBox", js.LGMapBasedMenuBox, {
        /**
         * Constructs an LGBasemapBox.
         *
         * @class
         * @name js.LGBasemapBox
         * @extends js.LGMapBasedMenuBox
         * @classdesc
         * Provides a UI holder for the JavaScript API's basemap
         * gallery.
         */

        /**
         * Performs class-specific setup when the map dependency is
         * satisfied.
         * @memberOf js.LGBasemapBox#
         * @override
         */
        onMapReady: function () {
            var galleryId, galleryHolder, basemapGallery, basemapGroup = this.getBasemapGroup();

            galleryId = this.rootId + "_gallery";

            galleryHolder = new dijit.layout.ContentPane({
                id: galleryId,
                className: this.galleryClass
            }).placeAt(this.rootDiv);
            touchScroll(galleryId);

            basemapGallery = new esri.dijit.BasemapGallery({
                showArcGISBasemaps: true,  // ignored if a group is configured
                basemapsGroup: basemapGroup,
                bingMapsKey: this.mapObj.commonConfig.bingMapsKey,
                map: this.mapObj.mapInfo.map
            }, dojo.create('div')).placeAt(this.rootDiv);
            galleryHolder.set('content', basemapGallery.domNode);

            basemapGallery.startup();
        },

        getBasemapGroup: function () {
            var basemapGroup = null;

            if (this.basemapgroupTitle && this.basemapgroupOwner &&
                    this.basemapgroupTitle.length > 0 && this.basemapgroupOwner.length > 0) {
                basemapGroup = {
                    "title": this.basemapgroupTitle,
                    "owner": this.basemapgroupOwner
                };
            }

            return basemapGroup;
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGLaunchUrl", js.LGObject, {
        /**
         * Constructs an LGLaunchUrl.
         *
         * @constructor
         * @class
         * @name js.LGLaunchUrl
         * @extends js.LGObject
         * @classdesc
         * Opens a URL in response to a message.
         */
        constructor: function () {
            topic.subscribe(this.sameWinTrigger, function (url) {
                if (url) {
                    window.open(url, "_parent");
                }
            });
            topic.subscribe(this.newWinTrigger, function (url) {
                if (url) {
                    window.open(url, "_blank");
                }
            });
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGLocate", js.LGObject, {
        /**
         * Constructs an LGLocate.
         *
         * @constructor
         * @class
         * @name js.LGLocate
         * @extends js.LGObject
         * @classdesc
         * In response to a message, responds with another message with
         * the browser's location.
         */
        constructor: function () {
            var pThis = this;

            // Object is ready only if geolocation is supported
            this.ready = new dojo.Deferred();
            if (!Modernizr.geolocation) {
                this.ready.reject(pThis);

            } else {
                // Start listening for a position request
                topic.subscribe(this.trigger, function () {

                    // Try to get the current position
                    navigator.geolocation.getCurrentPosition(function (position) {
                        pThis.log("go to " + position.coords.latitude + " " + position.coords.longitude);
                        topic.publish(pThis.publish, new esri.geometry.Point(
                            position.coords.longitude,
                            position.coords.latitude,
                            new esri.SpatialReference({ wkid: 4326 })
                        ));
                    }, function (error) {
                        // Report the location failure
                        var message;
                        switch (error.code) {
                        case error.PERMISSION_DENIED:
                            message = pThis.checkForI18n("@messages.geolocationDenied");
                            break;
                        case error.TIMEOUT:
                            message = pThis.checkForI18n("@messages.geolocationTimeout");
                            break;
                        default:
                            message = pThis.checkForI18n("@messages.geolocationUnavailable");
                            break;
                        }
                        alert(message);
                    }, {
                        timeout: 30000
                    });
                });
                this.ready.resolve(pThis);
            }
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGShare", js.LGObject, {
        /**
         * Constructs an LGShare.
         *
         * @constructor
         * @class
         * @name js.LGShare
         * @extends js.LGObject
         * @classdesc
         * Provides the base capability for sharing.
         */
        constructor: function () {
            var pThis = this;
            if (this.busyIndicator) {
                this.busyIndicator = dojo.byId(this.busyIndicator).getLGObject();
            }
            topic.subscribe(this.trigger, function () {
                pThis.share();
            });
        },

        /**
         * Performs sharing steps:  get URL, compress it, publish
         * result.
         * @memberOf js.LGShare
         */
        share: function () {
            var pThis = this, urlToShare, compressionUrl;
            urlToShare = encodeURIComponent(this.getUrlToShare());

            if (this.tinyURLServiceURL && this.tinyURLServiceURL.length > 0) {
                // Put the URL to share into the compression method's URL & launch the compression
                if (this.busyIndicator) {
                    this.busyIndicator.setIsVisible(true);
                }

                compressionUrl = esri.substitute({url: urlToShare}, this.tinyURLServiceURL);
                esri.request({
                    url: compressionUrl,
                    handleAs: "json"
                }, {
                    useProxy: false
                }).then(function (response) {
                    var tinyUrl, shareUrl;

                    try {
                        // Step thru the chain of nested attributes to get to the tiny URL
                        tinyUrl = pThis.followAttributePath(response, pThis.tinyURLResponseAttribute);
                        if (tinyUrl) {
                            // Put the tiny URL into the sharing method's URL & launch the sharing method
                            shareUrl = esri.substitute({url: tinyUrl}, pThis.shareUrl);
                            topic.publish(pThis.publish, shareUrl);
                        }
                    } catch (error) {
                        pThis.log("LGShare_1: " + error.toString());
                    }

                    if (pThis.busyIndicator) {
                        pThis.busyIndicator.setIsVisible(false);
                    }

                }, function (error) {
                    pThis.log("LGShare_2: " + error.toString());

                    if (pThis.busyIndicator) {
                        pThis.busyIndicator.setIsVisible(false);
                    }
                });
            } else {
                // Share the uncompressed URL
                urlToShare = esri.substitute({url: urlToShare}, this.shareUrl);
                topic.publish(this.publish, urlToShare);
            }
        },

        /**
         * Returns the app's URL as the item to share.
         * @return {string} URL
         * @memberOf js.LGShare
         */
        getUrlToShare: function () {
            return this.getAppUrl();
        },

        /**
         * Returns the app's URL.
         * @return {string} URL
         * @memberOf js.LGShare
         */
        getAppUrl: function () {
            return window.location.toString();
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGShareAppExtents", js.LGShare, {
        /**
         * LGShareAppExtents
         *
         * @class
         * @name js.LGShareAppExtents
         * @extends js.LGShare
         * @classdesc
         * Extends  simple sharing to include the app's map's current
         * extents.
         */

        /**
         * Returns the app's URL and its extents as the item to share.
         * @return {string} URL
         * @memberOf js.LGShare
         * @override
         */
        getUrlToShare: function () {
            var baseUrl = this.getAppUrl();
            return baseUrl + (baseUrl.indexOf("?") < 0 ? "?" : "&") + this.getMapExtentsArg();
        },

        /**
         * Gets the app's map's extents.
         * @return {string} Extents as supplied by LGMap's
         *         getExtentsString()
         * @memberOf js.LGShare
         */
        getMapExtentsArg: function () {
            var mapDiv, mapObj;

            mapDiv = dojo.byId(this.mapRootId);
            mapObj = mapDiv.getLGObject();
            return "ex=" + mapObj.getExtentsString();
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGFrame", js.LGGraphic, {
        /**
         * Constructs an LGFrame.
         *
         * @param {object} [args.parentDiv] Name of DOM
         *        object into which the object's div is to be placed;
         *        required for subsequent searching for this object by
         *        id (LGObject)
         * @param {string} args.rootId Id for root div of created object
         *        (LGObject)
         * @param {string} [args.rootClass] Name of CSS class to
         *        use for the root container of the object (LGObject)
         * @param {boolean} [args.fill=false] Whether the object should
         *        fill its parent's div or not; if fill is true, the
         *        horizOffset and vertOffset parameters are ignored
         *        (LGGraphic)
         * @param {number} [args.horizOffset] Horizontal offset
         *        flag/value: >0: left side; 0: center; <0: right side;
         *        undefined: no horizontal or vertical adjustment
         *        (LGGraphic)
         * @param {number} [args.vertOffset] Vertical offset
         *        flag/value: >0: top side; 0: center; <0: bottom side;
         *        undefined: no horizontal or vertical adjustment
         *        (LGGraphic)
         *
         * @param {string} args.headerDivId Id for created
         *        object's header region
         * @param {string} [args.headerDivClass] Name of CSS class to
         *        use for header region
         * @param {string} args.contentDivId Id for created
         *        object's content region
         * @param {string} [args.contentDivClass] Name of CSS class to
         *        use for content region
         *
         * @param {object} [args.values] Key-value pairs for
         *        configurable elements (LGGraphic)
         *
         * @param {object} [args.i18n] Key-value pairs for text
         *        strings for non-configurable elements (LGGraphic)
         *
         * @constructor
         * @class
         * @name js.LGFrame
         * @extends js.LGGraphic
         * @classdesc
         * Provides a UI display frame with header and content regions.
         */
        constructor: function () {
            var attrs;

            // Header region
            attrs = {};
            if (this.headerDivId) {
                attrs.id = this.headerDivId;
            }
            if (this.headerDivClass) {
                attrs.className = this.headerDivClass;
            }
            /**
             * The header div container for the object.
             * @member {div} headerDiv
             * @private
             * @memberOf js.LGFrame#
             */
            this.headerDiv = domConstruct.create("div", attrs, this.rootDiv);
            this.applyTheme(false, this.headerDiv);

            // Content region
            attrs = {};
            if (this.contentDivId) {
                attrs.id = this.contentDivId;
            }
            if (this.contentDivClass) {
                attrs.className = this.contentDivClass;
            }
            /**
             * The content div container for the object.
             * @member {div} contentDiv
             * @private
             * @memberOf js.LGFrame#
             */
            this.contentDiv = domConstruct.create("div", attrs, this.rootDiv);

            // Resize the content frame to fill the rootDiv not occupied by the header frame
            this.handleWindowResize();
        },

        /**
         * Handles a resize event and repositions the object as needed.
         * @memberOf js.LGFrame#
         * @override
         */
        handleWindowResize: function () {
            // Let the parent class do its resize management
            this.inherited(arguments);

            // Resize the content frame to fill the rootDiv not occupied by the header frame
            this.resizeContentDiv();
        },

        /**
         * Resizes the content area to fill the non-header area of the
         * frame.
         * @memberOf js.LGFrame#
         */
        resizeContentDiv: function () {
            var rootDivBox, headerDivBox, styleAttrs;

            // Resize the content frame to fill the rootDiv not occupied by the header frame
            if (this.headerDiv && this.contentDiv) {
                rootDivBox = dojo.marginBox(this.rootDiv);
                headerDivBox = dojo.marginBox(this.headerDiv);

                styleAttrs = {};
                styleAttrs.top = headerDivBox.h + "px";
                styleAttrs.height = (rootDivBox.h - headerDivBox.h) + "px";
                dojo.style(this.contentDiv, styleAttrs);
            }
        }

    });

    //========================================================================================================================//

    dojo.declare("js.LGGallery", js.LGGraphic, {
        /**
         * Constructs an LGGallery.
         *
         * @param {object} [args.parentDiv] Name of DOM
         *        object into which the object's div is to be placed;
         *        required for subsequent searching for this object by
         *        id (LGObject)
         * @param {string} args.rootId Id for root div of created object
         *        (LGObject)
         * @param {string} [args.rootClass] Name of CSS class to
         *        use for the root container of the object (LGObject)
         * @param {boolean} [args.fill=false] Whether the object should
         *        fill its parent's div or not; if fill is true, the
         *        horizOffset and vertOffset parameters are ignored
         *        (LGGraphic)
         * @param {number} [args.horizOffset] Horizontal offset
         *        flag/value: >0: left side; 0: center; <0: right side;
         *        undefined: no horizontal or vertical adjustment
         *        (LGGraphic)
         * @param {number} [args.vertOffset] Vertical offset
         *        flag/value: >0: top side; 0: center; <0: bottom side;
         *        undefined: no horizontal or vertical adjustment
         *        (LGGraphic)
         *
         * @param {string} [args.itemClass] Name of CSS class to
         *        use for gallery items
         * @param {string} [args.arrowClass] Name of CSS class to
         *        use for gallery end arrows
         *
         * @param {object} [args.values] Key-value pairs for
         *        configurable elements (LGGraphic)
         *
         * @param {object} [args.i18n] Key-value pairs for text
         *        strings for non-configurable elements (LGGraphic)
         *
         * @constructor
         * @class
         * @name js.LGGallery
         * @extends js.LGGraphic
         * @classdesc
         * Provides a UI gallery-style display frame.
         */
        constructor: function () {
            var table, tableBody, arrowAttrs, pThis = this;

            // Create the table to hold the titlebar
            table = domConstruct.create("table", null, this.rootDiv);
            this.applyTheme(false, table);
            dojo.connect(window, "resize", this, this.handleParentResize, true);

            /**
             * Adds an empty item to the  position of the gallery between
             * the shift arrows.
             * @return {td} Gallery item holder
             */
            this.rootDiv.getContentDiv = function () {
                return pThis.addItem();
            };

            // IE 7 requires tbody element
            // http://www.coderanch.com/t/434167/HTML-CSS-JavaScript/creating-tables-IE-document-createElement
            tableBody = domConstruct.create("tbody", null, table);

            /**
             * The row for the object's items.
             * @member {tr} rootDiv
             * @private
             * @memberOf js.LGGallery#
             */
            this.galleryRow = domConstruct.create("tr", null, tableBody);

            arrowAttrs = {innerHTML: "&lt;", style: {visibility: "hidden"}};
            if (this.arrowClass) {
                arrowAttrs.className = this.arrowClass;
            }

            /**
             * The left arrow of the gallery.
             * @member {td} leftArrow
             * @private
             * @memberOf js.LGGallery#
             */
            this.leftArrow = domConstruct.create("td", arrowAttrs, this.galleryRow);
            this.applyTheme(true, this.leftArrow);
            dojo.connect(this.leftArrow, "onclick", this, this.shiftLeft);

            arrowAttrs.innerHTML = "&gt;";

            /**
             * The right arrow of the gallery.
             * @member {td} rightArrow
             * @private
             * @memberOf js.LGGallery#
             */
            this.rightArrow = domConstruct.create("td", arrowAttrs, this.galleryRow);
            this.applyTheme(true, this.rightArrow);
            dojo.connect(this.rightArrow, "onclick", this, this.shiftRight);

            this.zeroItemWidth = dojo.marginBox(this.rootDiv).w;
            this.itemWidth = 0;
            this.numItems = 0;
            this.iFirstItem = 0;
            this.numItemsToDisplay = 0;

            // Readjust the placement now that we've added items
            this.handleParentResize();
        },

        /**
         * Adds an item to the rightmost position of the gallery between
         * the shift arrows.
         * @param {string} galleryItem Content to insert into item
         * @return {td} Gallery item holder
         * @memberOf js.LGGallery#
         */
        addItem: function (galleryItem) {
            var item, attrs = {};
            if (typeof galleryItem === "string") {
                attrs.innerHTML = galleryItem;
            }
            if (this.itemClass) {
                attrs.className = this.itemClass;
            }
            item = domConstruct.create("td", attrs);

            if (galleryItem) {
                item.appendChild(galleryItem);
            }

            this.galleryRow.insertBefore(item, this.rightArrow);
            this.numItems += 1;
            if (!this.firstItem) {
                this.firstItem = item;
                this.itemWidth = dojo.marginBox(item).w;
            }
            this.rootDiv.style.maxWidth = (this.zeroItemWidth + (this.numItems * this.itemWidth)) + "px";

            // Readjust the placement now that we've added an item
            this.handleParentResize();

            return item;
        },

        /**
         * Handles a resize event on the parent div.
         * @this {js.LGGallery}
         * @private
         * @memberOf js.LGGallery#
         */
        handleParentResize: function () {
            var parentWidth, desiredGalleryWidth;
            parentWidth = dojo.marginBox(this.rootDiv.parentNode).w;
            desiredGalleryWidth = this.zeroItemWidth + (this.numItems * this.itemWidth);

            if (0 === this.numItems) {
                return;
            }

            if (desiredGalleryWidth > parentWidth) {
                // Show both arrows even though we're showing the leftmost item
                this.leftArrow.style.visibility = "visible";
                this.rightArrow.style.visibility = "visible";
                this.numItemsToDisplay =
                    Math.max(Math.floor((parentWidth - this.zeroItemWidth) / this.itemWidth), 1);
            } else {
                this.leftArrow.style.visibility = "hidden";
                this.rightArrow.style.visibility = "hidden";
                this.numItemsToDisplay = this.numItems;
            }
            this.iFirstItem = Math.min(this.iFirstItem, this.numItems - this.numItemsToDisplay);
            this.drawGallery();
        },

        /**
         * Shifts a gallery to the left and redraws it,
         * knocking off an item on the left side, subject to limit where
         * rightmost item is in rightmost slot of visible range.
         * @memberOf js.LGGallery#
         */
        shiftLeft: function () {
            this.iFirstItem = Math.min(this.iFirstItem + 1, this.numItems - this.numItemsToDisplay);
            this.drawGallery();
        },

        /**
         * Shifts a gallery to the right and redraws it, knocking off an
         * item on the right side, subject to limit where leftmost item
         * is in leftmost slot of visible range.
         * @memberOf js.LGGallery#
         */
        shiftRight: function () {
            this.iFirstItem = Math.max(this.iFirstItem - 1, 0);
            this.drawGallery();
        },

        /**
         * Draws a gallery.
         * @memberOf js.LGGallery#
         */
        drawGallery: function () {
            var i, firstI = this.iFirstItem, lastI = this.iFirstItem + this.numItemsToDisplay,
                item = this.firstItem;

            // Hide items to left of visible range
            i = 0;
            while (i < firstI) {
                item.style.display = "none";
                item = item.nextSibling;
                i += 1;
            }

            // Draw items in visible range
            while (i < lastI) {
                item.style.display = "";
                item = item.nextSibling;
                i += 1;
            }

            // Hide items to right of visible range
            while (i < this.numItems) {
                item.style.display = "none";
                item = item.nextSibling;
                i += 1;
            }

            // Readjust the placement now that we've adjusted item visibility
            this.handleWindowResize();
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGMap", js.LGGraphic, {
        /**
         * Constructs an LGMap.
         * <br><b>N.B.: this implementation does not support more
         * than one map per app.</b>
         * <br>All four extents parameters must be supplied in order for
         * extents to be modified; otherwise, web map's extents are
         * used.
         * <br>Listens for "position" messages of the form
         * {latitude:<number>, longitude:<number>}, recenters the map to
         * that position, and displays a location indicator at the
         * position (indicator currently hardcoded to
         * "images/youAreHere.png").
         *
         * @param {object} [args.parentDiv] Name of DOM
         *        object into which the object's div is to be placed;
         *        required for subsequent searching for this object by
         *        id (LGObject)
         * @param {string} args.rootId Id for root div of created object
         *        (LGObject)
         * @param {string} [args.rootClass] Name of CSS class to
         *        use for the root container of the object (LGObject)
         * @param {boolean} [args.fill=false] Whether the object should
         *        fill its parent's div or not; if fill is true, the
         *        horizOffset and vertOffset parameters are ignored
         *        (LGGraphic)
         * @param {number} [args.horizOffset] Horizontal offset
         *        flag/value: >0: left side; 0: center; <0: right side;
         *        undefined: no horizontal or vertical adjustment
         *        (LGGraphic)
         * @param {number} [args.vertOffset] Vertical offset
         *        flag/value: >0: top side; 0: center; <0: bottom side;
         *        undefined: no horizontal or vertical adjustment
         *        (LGGraphic)
         *
         * @param {object} [args.mapOptions] Options to be sent to
         *        created map; see
         *        <a
         *        href="http://help.arcgis.com/en/webapi/javascript/arcgis/jsapi/map.html#MapConst">API
         *        for JavaScript map constructor</a>
         *
         * @param {object} args.values Key-value pairs for configurable
         *        elements (LGGraphic)
         * @param {string} args.values.webmap ArcGIS.com id of web map
         *        to display
         * @param {string|number} [args.values.xmin] Westernmost map
         *        extent
         * @param {string|number} [args.values.ymin] Southernmost map
         *        extent
         * @param {string|number} [args.values.xmax] Easternmost map
         *        extent
         * @param {string|number} [args.values.ymax] Northernmost map
         *        extent
         * @param {string|number} [args.values.wkid] wkid for extents
         *        coordinates
         *
         * @param {object} [args.i18n] Key-value pairs for text
         *        strings for non-configurable elements (LGGraphic)
         *
         * @constructor
         * @class
         * @name js.LGMap
         * @extends js.LGGraphic
         * @classdesc
         * Provides a UI web map display.
         */
        constructor: function () {
            var options, minmax, extents = null, pThis = this;

            /**
             * Provides a way to test the success or failure of the map
             * loading.
             * @member {Deferred} ready
             * @memberOf js.LGMap#
             */
            this.ready = new dojo.Deferred();

            options = {ignorePopups: false};
            options.mapOptions = this.mapOptions || {};
            options.mapOptions.showAttribution = true;

            // Set up configured extents
            if (this.xmin && this.ymin && this.xmax && this.ymax) {
                try {
                    extents = {
                        xmin: this.xmin,
                        ymin: this.ymin,
                        xmax: this.xmax,
                        ymax: this.ymax
                    };

                    extents.spatialReference = {};
                    if (this.wkid) {
                        extents.spatialReference.wkid = Number(this.wkid);
                    } else {
                        extents.spatialReference.wkid = 102100;
                    }
                    extents = new esri.geometry.Extent(extents);
                } catch (err1) {
                    extents = null;
                }
            }

            // Override the initial extent from the configuration with URL extent values; need to have a complete set of the latter
            if (this.ex) {
                minmax = this.ex.split(",");
                try {
                    extents = {
                        xmin: Number(minmax[0]),
                        ymin: Number(minmax[1]),
                        xmax: Number(minmax[2]),
                        ymax: Number(minmax[3])
                    };

                    extents.spatialReference = {};
                    if (minmax.length > 4) {
                        extents.spatialReference.wkid = Number(minmax[4]);
                    } else {
                        extents.spatialReference.wkid = 102100;
                    }
                    extents = new esri.geometry.Extent(extents);
                } catch (err2) {
                    extents = null;
                }
            }

            // Do we have a Bing maps key?
            if (this.commonConfig && this.commonConfig.bingMapsKey) {
                options.bingMapsKey = this.commonConfig.bingMapsKey;
            }

            // Set defaults for missing params
            this.lineHiliteColor = new Color(this.lineHiliteColor || "#00ffff");
            this.fillHiliteColor = new Color(this.fillHiliteColor || [0, 255, 255, 0.1]);

            // Create the map
            if (this.webmap) {
                this.mapId = this.webmap;
            }

            utils.createMap(this.mapId, this.rootDiv, options).then(
                function (response) {
                    pThis.mapInfo = response;

                    //for some reason if the webmap uses a bing map basemap the response doesn't have a spatialReference defined.
                    //this is a bit of a hack to set it manually
                    if (!response.map.spatialReference) {
                        pThis.mapInfo.map.spatialReference = new esri.SpatialReference({wkid: 102100});
                    }

                    //pThis.listeners.push(
                    //    dojo.connect(pThis.mapInfo.map, "onUnload", function () {  // release event listeners upon unload
                    //        // http://help.arcgis.com/en/webapi/javascript/arcgis/jshelp/inside_events.html
                    //        dojo.forEach(var fred in pThis.listeners) {
                    //            dojo.disconnect(fred);
                    //        }
                    //    });
                    //);
                    //pThis.listeners.push(
                    dojo.connect(window, "resize", pThis.mapInfo.map, function () {
                        pThis.mapInfo.map.resize();
                        pThis.mapInfo.map.reposition();
                    });
                    //);

                    // Jump to the initial extents
                    if (extents) {
                        // Set the initial extent, but keep the map's spatial reference,
                        // so we have to convert the extents to match the map
                        if (extents.spatialReference.wkid !== pThis.mapInfo.map.spatialReference.wkid) {
                            if (esri.config.defaults.geometryService) {
                                var params = new esri.tasks.ProjectParameters();
                                params.geometries = [extents];
                                params.outSR = pThis.mapInfo.map.spatialReference;
                                esri.config.defaults.geometryService.project(params).then(
                                    function (geometries) {
                                        extents = geometries[0];
                                        pThis.mapInfo.map.setExtent(extents);
                                    }
                                );
                            } else {
                                pThis.log("LGMap_1: " + "Need geometry service to convert extents from wkid "
                                    + extents.spatialReference.wkid
                                    + " to map's " + pThis.mapInfo.map.spatialReference.wkid);
                            }
                        } else {
                            pThis.mapInfo.map.setExtent(extents);
                        }
                    }

                    // Set up a graphics layer for receiving position updates and feature highlights
                    pThis.tempGraphicsLayer = pThis.createGraphicsLayer("tempGraphicsLayer");

                    // Start listening for position updates
                    pThis.positionHandle = topic.subscribe("position", function (newCenterPoint) {
                        pThis.tempGraphicsLayer.clear();

                        // Highlight the point's position if it's in the same coord system as the map
                        if (newCenterPoint.spatialReference.wkid === pThis.mapInfo.map.spatialReference.wkid) {
                            pThis.highlightPoint(newCenterPoint);

                        // Otherwise, convert the position into the map's spatial reference before highlighting it
                        } else {
                            // Use a shortcut routine for the geographic --> web mercator conversion
                            if (newCenterPoint.spatialReference.wkid === 4326
                                    && pThis.mapInfo.map.spatialReference.wkid === 102100) {
                                newCenterPoint = esri.geometry.geographicToWebMercator(newCenterPoint);
                                pThis.highlightPoint(newCenterPoint);

                            // Otherwise, use the geometry service
                            } else if (esri.config.defaults.geometryService) {
                                var params2 = new esri.tasks.ProjectParameters();
                                params2.geometries = [newCenterPoint];
                                params2.outSR = pThis.mapInfo.map.spatialReference;
                                esri.config.defaults.geometryService.project(params2).then(
                                    function (geometries) {
                                        newCenterPoint = geometries[0];
                                        pThis.highlightPoint(newCenterPoint);
                                    }
                                );

                            // If we can't convert, we can't highlight
                            } else {
                                pThis.log("LGMap_1: " + "Need geometry service to convert position from wkid "
                                    + newCenterPoint.spatialReference.wkid
                                    + " to map's " + pThis.mapInfo.map.spatialReference.wkid);
                            }
                        }
                    });

                    // Start listening for feature highlights
                    pThis.showFeatureHandle = topic.subscribe("showFeature", function (feature) {
                        pThis.tempGraphicsLayer.clear();

                        // Do the highlight
                        pThis.highlightFeature(feature);
                    });

                    pThis.ready.resolve(pThis);
                },
                function () {
                    pThis.ready.reject(pThis);
                }
            );
        },

        /**
         * Returns the object's mapInfo object, which contains the
         * webmap creation information and the ArcGIS API map object.
         * @return {object} Object's mapInfo object
         * @memberOf js.LGMap#
         */
        mapInfo: function () {
            return this.mapInfo;
        },

        /**
         * Highlights a point by drawing a marker over it and centers
         * the map on the point.
         * @param {object} newCenterPoint Point to highlight
         * @memberOf js.LGMap#
         */
        highlightPoint: function (newCenterPoint) {
            // Shift the map
            this.mapInfo.map.centerAt(newCenterPoint);

            // Draw the location indicator
            this.tempGraphicsLayer.add(
                new esri.Graphic(newCenterPoint,
                    new esri.symbol.PictureMarkerSymbol("images/youAreHere.png", 30, 30), //???
                    null, null)
            );
        },

        /**
         * Highlights a polyline or polygon by drawing a line symbol
         * over its boundaries and centers the map on 4x the extents of
         * the feature.
         * @param {object} feature Feature to highlight
         * @memberOf js.LGMap#
         */
        highlightFeature: function (feature) {
            var extent, symbol;
            extent = feature.geometry.getExtent();
            if (extent) {
                // Shift the map
                this.mapInfo.map.setExtent(extent.expand(4));

                // Draw the feature highlight
                if (feature.geometry.type === "polyline") {
                    symbol = new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, this.lineHiliteColor, 3);
                } else {
                    symbol = new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID,
                        new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, this.lineHiliteColor, 3), this.fillHiliteColor);
                }
                this.tempGraphicsLayer.add(
                    new esri.Graphic(feature.geometry,
                        symbol, feature.attributes, null)
                );
            } else {
                this.highlightPoint(feature.geometry);
            }
        },

        /**
         * Creates a string from the map's current extents.
         * @return {string} Comma-separated extents in the order xmin,
         *         ymin, xmax, ymax, spatial reference's wkid
         * @memberOf js.LGMap#
         */
        getExtentsString: function () {
            var extent, extentsString = "";
            if (this.mapInfo && this.mapInfo.map) {
                extent = this.mapInfo.map.extent;
                extentsString =
                    extent.xmin.toFixed().toString() + "," +
                    extent.ymin.toFixed().toString() + "," +
                    extent.xmax.toFixed().toString() + "," +
                    extent.ymax.toFixed().toString() + "," +
                    extent.spatialReference.wkid.toString();
            }
            return extentsString;
        },

        /**
         * Returns the layer with the specified name.
         * @param {string} name Layer name to look for
         * @return {object} Layer or null
         * @memberOf js.LGMap#
         */
        getLayer: function (name) {
            var layer;

            // Find the operational layer that matches the specified search layer
            array.some(this.mapInfo.itemInfo.itemData.operationalLayers, function (opLayer) {
                if (opLayer.title === name) {
                    layer = opLayer.layerObject;
                    return true;
                }
                return false;
            });

            return layer;
        },

        /**
         * Returns the names of the operational layers in the map.
         * @return {array} List of layers
         * @memberOf js.LGMap#
         */
        getLayerNameList: function () {
            var layerNameList = [];

            array.forEach(this.mapInfo.itemInfo.itemData.operationalLayers, function (layer) {
                layerNameList.push(layer.title);
            });

            return layerNameList;
        },

        /**
         * Creates a graphics layer for the object's map.
         * @param {string} layerId Name for layer
         * @return {GraphicsLayer} Created graphics layer
         * @memberOf js.LGMap#
         */
        createGraphicsLayer: function (layerId) {
            var gLayer = new esri.layers.GraphicsLayer();
            gLayer.id = layerId;
            return this.mapInfo.map.addLayer(gLayer);
        }

    });

    //========================================================================================================================//

    dojo.declare("js.LGTitleBar", js.LGGraphic, {
        /**
         * Constructs an LGTitleBar.
         *
         * @param {object} [args.parentDiv] Name of DOM
         *        object into which the object's div is to be placed;
         *        required for subsequent searching for this object by
         *        id (LGObject)
         * @param {string} args.rootId Id for root div of created object
         *        (LGObject)
         * @param {string} [args.rootClass] Name of CSS class to
         *        use for the root container of the object (LGObject)
         * @param {boolean} [args.fill=false] Whether the object should
         *        fill its parent's div or not; if fill is true, the
         *        horizOffset and vertOffset parameters are ignored
         *        (LGGraphic)
         * @param {number} [args.horizOffset] Horizontal offset
         *        flag/value: >0: left side; 0: center; <0: right side;
         *        undefined: no horizontal or vertical adjustment
         *        (LGGraphic)
         * @param {number} [args.vertOffset] Vertical offset
         *        flag/value: >0: top side; 0: center; <0: bottom side;
         *        undefined: no horizontal or vertical adjustment
         *        (LGGraphic)
         *
         * @param {string} [args.iconClass] Name of CSS class to
         *        use for icon
         * @param {string} [args.titleClass] Name of CSS class to
         *        use for title
         *
         * @param {object} [args.values] Key-value pair options
         *        that override configuration options; e.g., values from
         *        the app's URL. Used in this class: title.
         * @param {object} [args.values] Key-value pairs for
         *        configurable elements (LGGraphic)
         * @param {string} [args.values.iconUrl] Url to icon to display
         * @param {string} [args.values.title] Text to display as a
         *        title
         *
         * @param {object} [args.i18n] Key-value pairs for text
         *        strings for non-configurable elements (LGGraphic)
         *
         * @constructor
         * @class
         * @name js.LGTitleBar
         * @extends js.LGGraphic
         * @classdesc
         * Provides a UI iconized title.
         */
        constructor: function () {
            var iconAttrs, titleAttrs;

            // If we have an icon, add it to the title bar
            if (this.iconUrl && this.iconUrl.length > 0) {
                iconAttrs = {src: this.iconUrl};
                if (this.iconClass) {
                    iconAttrs.className = this.iconClass;
                }
                domConstruct.create("img", iconAttrs, this.rootDiv);
            }

            // If we have a title, add it to the title bar
            if (this.title && this.title.length > 0) {
                titleAttrs = {innerHTML: this.title};
                if (this.titleClass) {
                    titleAttrs.className = this.titleClass;
                }
                domConstruct.create("span", titleAttrs, this.rootDiv);
                document.title = this.title;
            }

            // Readjust the placement now that we've added items
            this.handleWindowResize();
        }

    });

    //========================================================================================================================//

    dojo.declare("js.LGCallMethods", js.LGObject, {
        /**
         * Constructs an LGCallMethods and executes the list of tasks in
         * its definition.
         *
         * @constructor
         * @class
         * @name js.LGCallMethods
         * @extends js.LGObject
         * @classdesc
         * Provides a way for object methods to be called as part of the
         * LGUIBuilder JSON script execution.
         */
        constructor: function () {
            var target,
                pThis = this;

            if (this.todo) {
                // For each item in to-do list, get the id of the item, then call the specified method with the specified arg
                array.forEach(this.todo, function (task) {
                    try {
                        target = dojo.byId(task.rootId);
                        if (target) {
                            target = target.getLGObject();
                            if (target) {
                                target[task.method](task.arg);
                            }
                        }
                    } catch (error) {
                        pThis.log("LGCallMethods_1: " + error.toString());
                    }
                });
            }
        }
    });

    //========================================================================================================================//

});
/* 
This source is part of the git commit 
aeec887e0a21b0eb 2014-08-19 12:39:49 -0700
It is available from https://github.com/Esri/local-government-online-apps 
*/ 
