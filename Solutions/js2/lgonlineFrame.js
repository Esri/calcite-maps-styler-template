/*global define,dojo,js */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true */
/*
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
define([
    "dojo/_base/declare",
    "dojo/dom-construct",
    "dojo/on",
    "dojo/dom-geometry",
    "dojo/dom-style",
    "dojo/_base/array",
    "dojo/_base/lang",
    "js/lgonlineBase"
], function (
    declare,
    domConstruct,
    on,
    domGeom,
    domStyle,
    array,
    lang
) {

    //========================================================================================================================//

    declare("js.LGColorizer", js.LGObject, {
        /**
         * Constructs an LGColorizer.
         *
         * @constructor
         * @class
         * @name js.LGColorizer
         * @extends js.LGObject
         * @classdesc
         * Manages the app's color theme; colors are specified
         * as foreground, background, and hover.
         */
        constructor: function () {
            var i, styleString = "", pThis = this,
                defaultColors = ["#fff", "#333333", "#5d5d5d", "#5d5d5d"];

            // Retrieve the theme definition from the color table
            // There are four colors defined:
            //   * foreground color
            //   * background color
            //   * highlight color
            //   * alternate background color
            // See the doc/AdvancedConfiguration.md document for more information.
            this.colors = [];
            array.some(this.colorTable, function (themeDefn) {
                if (pThis.theme === themeDefn.theme) {
                    pThis.colors = themeDefn.colors;
                    return true;
                }
                return false;
            });

            // Make sure that we have a full set of colors
            if (this.colors.length < defaultColors.length) {
                for (i = this.colors.length; i < defaultColors.length; i = i + 1) {
                    this.colors.push(defaultColors[i]);
                }
            }

            // Set the theme
            styleString += ".appTheme{color:" + this.colors[0] + ";background-color:" + this.colors[1] + "}";
            styleString += ".appTheme2{color:" + this.colors[0] + ";background-color:" + this.colors[3] + "}";
            styleString += ".appThemeHover:hover{background-color:" + this.colors[2] + "}";
            this.injectCSS(styleString);
        },

        /**
         * Returns the color to be used for drawing text.
         * @return {string} Color string as defined in LGColorizer's JSON
         * @memberOf js.LGColorizer#
         */
        foregroundColor: function () {
            return this.colors[0];
        },

        /**
         * Returns the color to be used for the background area.
         * @return {string} Color string as defined in LGColorizer's JSON
         * @memberOf js.LGColorizer#
         */
        backgroundColor: function () {
            return this.colors[1];
        },

        /**
         * Returns the color to be used for the background area when the
         * cursor is hovering over the item.
         * @return {string} Color string as defined in LGColorizer's JSON
         * @memberOf js.LGColorizer#
         */
        hoverColor: function () {
            return this.colors[2];
        },

        /**
         * Returns the color to be used for an alternate background area,
         * to provide a contrast with the primary background area color, e.g.
         * @return {string} Color string as defined in LGColorizer's JSON
         * @memberOf js.LGColorizer#
         */
        alternateBackgroundColor: function () {
            return this.colors[3];
        }
    });

    //========================================================================================================================//

    declare("js.LGFrame", js.LGGraphic, {
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
            var rootDivBox, headerDivBox, contentHeight, styleAttrs;

            // Resize the content frame to fill the rootDiv not occupied by the header frame
            if (this.headerDiv && this.contentDiv) {
                rootDivBox = domGeom.getMarginBox(this.rootDiv);
                headerDivBox = domGeom.getMarginBox(this.headerDiv);

                contentHeight = rootDivBox.h - headerDivBox.h;
                if (contentHeight > 0) {
                    styleAttrs = {};
                    styleAttrs.top = headerDivBox.h + "px";
                    styleAttrs.height = (rootDivBox.h - headerDivBox.h) + "px";
                    domStyle.set(this.contentDiv, styleAttrs);
                }
            }
        }
    });

    //========================================================================================================================//

    declare("js.LGGallery", js.LGGraphic, {
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
            on(window, "resize", lang.hitch(this, this.handleParentResize));

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
            on(this.leftArrow, "click", lang.hitch(this, this.shiftLeft));

            arrowAttrs.innerHTML = "&gt;";

            /**
             * The right arrow of the gallery.
             * @member {td} rightArrow
             * @private
             * @memberOf js.LGGallery#
             */
            this.rightArrow = domConstruct.create("td", arrowAttrs, this.galleryRow);
            this.applyTheme(true, this.rightArrow);
            on(this.rightArrow, "click", lang.hitch(this, this.shiftRight));

            // zeroItemWidth only works if gallery is visible
            this.zeroItemWidth = domGeom.getMarginBox(this.rootDiv).w;
            this.itemWidth = 0;
            this.numItems = 0;
            this.iFirstItem = 0;
            this.numItemsToDisplay = 0;
            this.firstItem = null;

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

            // A string can be added as an attribute to the td creation
            if (typeof galleryItem === "string") {
                attrs.innerHTML = galleryItem;
            }
            if (this.itemClass) {
                attrs.className = this.itemClass;
            }
            item = domConstruct.create("td", attrs);

            // A non-string is added as a child of the td
            if (typeof galleryItem !== "string") {
                item.appendChild(galleryItem);
            }

            // Add the td to the gallery
            this.galleryRow.insertBefore(item, this.rightArrow);
            this.numItems += 1;
            if (!this.firstItem) {
                this.firstItem = item;
                this.itemWidth = domGeom.getMarginBox(item).w;
            }

            // Readjust the placement now that we've added an item
            this.handleParentResize();

            return item;
        },

        /**
         * Removes all but the shift arrows from the gallery.
         * @memberOf js.LGGallery#
         */
        clearItems: function () {
            // Remove all but the endcap arrows
            while (this.galleryRow.childNodes.length > 2) {
                this.galleryRow.removeChild(this.galleryRow.childNodes[1]);
            }
            this.numItems = 0;
            this.iFirstItem = 0;
            this.numItemsToDisplay = 0;
            this.firstItem = null;

            // Readjust the placement now that we've altered the number of items
            this.handleParentResize();
        },

        /**
         * Handles a resize event on the parent div.
         * @this {js.LGGallery}
         * @private
         * @memberOf js.LGGallery#
         */
        handleParentResize: function () {
            var parentWidth, desiredGalleryWidth;

            // Patch zeroItemWidth in case the gallery was created initially invisible
            if (this.zeroItemWidth === 0) {
                this.zeroItemWidth = domGeom.getMarginBox(this.rootDiv).w;
            }

            parentWidth = domGeom.getMarginBox(this.rootDiv.parentNode).w;
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

            // Remove arrows, then add them in below as appropriate for hidden items
            this.leftArrow.style.visibility = "hidden";
            this.rightArrow.style.visibility = "hidden";

            // Hide items to left of visible range
            i = 0;
            while (i < firstI) {
                this.rightArrow.style.visibility = "visible";
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
                this.leftArrow.style.visibility = "visible";
                item.style.display = "none";
                item = item.nextSibling;
                i += 1;
            }

            // Readjust the placement now that we've adjusted item visibility
            this.handleWindowResize();
        }
    });

    //========================================================================================================================//

    declare("js.LGTitleBar", js.LGGraphic, {
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

});
/* 
This source is part of the git commit 
003b4194ab621f15 2015-11-18 09:02:28 -0800
It is available from https://github.com/Esri/local-government-online-apps 
*/ 
