/*global define,dojo */
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
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/_base/array',
    'dojo/dom-construct',
    'dojo/dom-style',
    'dojo/dom-class',
    "dojo/dom-geometry",
    'dojo/on',
    'dojo/query',
    'dojo/sniff',
    'dojo/topic',
    'dojo/NodeList-dom',
    'dojox/mobile/Switch',  // pre-loaded as required by Dojo

    'application/lib/SvgHelper',

    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',

    'dojo/text!./ItemListView.html'
], function (declare, lang, array, domConstruct, domStyle, domClass, domGeom, on, query, has, topic, nld, Switch,
    SvgHelper,
    _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin,
    template) {

    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,

        /**
         * Constructor for class.
         * @param {object} appConfig App configuration object; see subclass for required parameter(s)
         * @memberOf social#
         * @constructor
         */
        constructor: function () {
            this.votesField = null;
            this.linkToMapViewIsTemporarilyOff = false;
        },

        /**
         * Widget postCreate, called automatically in widget creation
         * life cycle, after constructor. Sets class variables.
         */
        postCreate: function () {
            this.inherited(arguments);
            this.i18n = this.appConfig.i18n.item_list;
            this.hide();

            // Adjust the toggle for linking the item list to the map extents
            this.linkToggleLabel.innerHTML = this.i18n.linkToMapViewOptionLabel;

            this.linkToggleBtn.set("leftLabel", "");
            this.linkToggleBtn.set("rightLabel", "");
            this.linkToggleBtn.set("value", this.linkToMapView
                ? "on"
                : "off");
            this.linkToggleBtn.set("title", this.i18n.linkToMapViewOptionTooltip);

            this.inherited(arguments);
        },

        /**
         * Widget startup, called automatically in widget creation
         * life cycle, after postCreate. Prepares for resizing now
         * that widget has been added to DOM.
         */
        startup: function () {
            this.inherited(arguments);
            this.linkToggleBtn.resize();

            this.own(on(window, 'resize', lang.hitch(this, function () {
                this.fitFilterLabelToContainer();
            })));

            this.linkToggleBtn.on("stateChanged", lang.hitch(this, function (newState) {
                this.linkToMapView = newState === "on";
                topic.publish("linkToMapViewChanged", this.linkToMapView);
            }));

            array.forEach(query(".mblSwitchBgLeft", this.itemListActionBar), function (item) {
                domClass.add(item, "appTheme");
            });
        },

        /**
         * Adjusts the width of the filter-to-map label based on the size of its container.
         */
        fitFilterLabelToContainer: function () {
            var actionBarBounds, switchBounds, newWidth;

            actionBarBounds = domGeom.getMarginBox(this.itemListActionBar);
            switchBounds = domGeom.getMarginBox(this.linkToggleBtn.domNode);

            newWidth = actionBarBounds.w - switchBounds.w - 12/*margins*/ - 8;/*padding*/
            if (newWidth > 0) {
                domStyle.set(this.linkToggleLabel, "width", newWidth + "px");

                // If the screen is wide enough to show map and list, restore the linkage of
                // map to list if it was on the last time that we could see the action bar
                if (this.linkToMapViewIsTemporarilyOff) {
                    this.linkToMapViewIsTemporarilyOff = false;
                    if (this.linkToMapView) {
                        topic.publish("linkToMapViewChanged", true);
                    }
                }
            // If the screen is narrow enough that we're not showing the action bar,
            // turn off linking the list to the map
            } else if (!this.linkToMapViewIsTemporarilyOff) {
                this.linkToMapViewIsTemporarilyOff = true;
                topic.publish("linkToMapViewChanged", false);
            }
        },

        /**
         * Shows the widget.
         */
        show: function () {
            domStyle.set(this.domNode, 'display', 'block');
            this.fitFilterLabelToContainer();

            if (has("ff")) {
                // Scroll to the top of the list; needed for Firefox
                this.scrollIntoView(this.list);
            }
        },

        /**
         * Hides the widget.
         */
        hide: function () {
            domStyle.set(this.domNode, 'display', 'none');
        },

        /**
         * Sets the fields that are needed to display feature information in this list (number of votes).
         * Needs to be called before first setItems to tell the widget which fields to look for.
         * @param {string} votesField Name of votes property
         */
        setFields: function (votesField) {
            this.votesField = votesField;
        },

        /**
         * Sets the items to be displayed in the items list, and then builds the list.
         * @param {array} items feature collection or array
         */
        setItems: function (items) {
            this.items = items;
            this.clearList();
            this.buildList();
        },

        /**
         * Sets the OID of the item to be considered the current selection.
         * @param {OID} itemOID
         */
        setSelection: function (itemOID) {
            this.selectedItemOID = itemOID;
        },

        /**
         * Clears the items list
         */
        clearList: function () {
            domConstruct.empty(this.list);
        },

        /**
         * Builds the items list
         */
        buildList: function () {
            array.forEach(this.items, lang.hitch(this, this.buildItemSummary));
        },

        /**
         * Builds an individual item summary given an item.
         * @param  {feature} item to display in the list
         */
        buildItemSummary: function (item) {

            var itemTitle, itemVotes, itemSummaryDiv, itemTitleDiv, favDiv, iconDiv;

            itemTitle = this.getItemTitle(item) || "&nbsp;";

            itemVotes = this.getItemVotes(item);


            itemSummaryDiv = domConstruct.create('div', {
                'class': 'itemSummary',
                'click': lang.partial(this.summaryClick, this, item)
            }, this.list);

            itemTitleDiv = domConstruct.create('div', {
                'class': 'itemTitle',
                'title': itemTitle,
                'innerHTML': itemTitle
            }, itemSummaryDiv);

            // If we're displaying votes, create the count and icon displays
            if (itemVotes) {
                if (itemVotes.needSpace) {
                    domClass.add(itemTitleDiv, "itemListTitleOverride");
                }

                favDiv = domConstruct.create('div', {
                    'class': 'itemFav',
                    'title': this.i18n.likesForThisItemTooltip
                }, itemSummaryDiv);

                domConstruct.create('div', {
                    'class': 'itemVotes',
                    'innerHTML': itemVotes.label
                }, favDiv);

                iconDiv = domConstruct.create('div', {
                    'class': 'fav'
                }, favDiv);

                SvgHelper.createSVGItem(this.appConfig.likeIcon, iconDiv, 12, 12);
            }

            // If this item's OID matches the current selection, apply the theme to highlight it
            if (this.selectedItemOID === item.attributes[item._layer.objectIdField]) {
                domClass.add(itemSummaryDiv, "appTheme appThemeHover");
            }
        },

        /**
         * Scrolls a container node to make a specified node visible.
         * @param {object} nodeToMakeVisible Node that's to be brought into view
         */
        scrollIntoView: function (nodeToMakeVisible) {
            // Firefox defaults to former scroll position if we're returning to a previously-scrolled node (which could
            // be a different item's details--they go into the same scrollable div). The scrollIntoView can't change this
            // unless it occurs a little later than the default behavior, hence the setTimeout.
            setTimeout(function (){
                nodeToMakeVisible.scrollIntoView();
            }, 500);
        },

        /**
         * Gets title of feature for list display
         * @param  {feature} item The feature for which to get the title
         * @return {string} The title of the feature
         */
        getItemTitle: function (item) {
            return item.getTitle ? this.stripTags(item.getTitle()) : "";
        },

        /**
         * Removes HTML tags from a string
         * @param {string} str String possibly containing HTML tags
         * @return {string} Cleaned string
         * @see http://dojo-toolkit.33424.n3.nabble.com/Stripping-HTML-tags-from-a-string-tp3999505p3999576.html
         */
        stripTags: function (str) {
            return domConstruct.create("div", { innerHTML: str }).textContent;
        },

        /**
         * Gets the number of votes for an item
         * @param  {feature} item The feature for which to get the vote count
         * @return {null|object} Object containing "label" with vote count for the item in a shortened form
         * (num if <1000, floor(count/1000)+"k" if <1M, floor(count/1000000)+"M" otherwise) and "needSpace"
         * that's indicates if an extra digit of room is needed to handle numbers between 99K and 1M, exclusive;
         * returns null if the feature layer's votes field is unknown
         */
        getItemVotes: function (item) {
            var needSpace = false, votes;

            if (this.votesField) {
                votes = item.attributes[this.votesField] || 0;

                if (votes > 999) {
                    if (votes > 99999) {
                        needSpace = true;
                    }
                    // Using SI prefixes from http://physics.nist.gov/cuu/pdf/sp811.pdf
                    if (votes > 999999999999999) {
                        votes = Math.floor(votes / 1000000000000000) + "P";
                    } else if (votes > 999999999999) {
                        votes = Math.floor(votes / 1000000000000) + "T";
                    } else if (votes > 999999999) {
                        votes = Math.floor(votes / 1000000000) + "G";
                    } else if (votes > 999999) {
                        votes = Math.floor(votes / 1000000) + "M";
                    } else {
                        votes = Math.floor(votes / 1000) + "k";
                    }
                }
                return {
                    "label": votes,
                    "needSpace": needSpace
                };
            }
            return null;
        },

        /**
         * Called on an item summary click
         * @param  {context} self The widget itself, since 'this' is the row that was clicked
         * @param  {feature} feat The feature that corresponds to the row that was clicked
         * @param  {mouse event} evt  The click event on the row that was clicked
         */
        summaryClick: function (self, feat, evt) {
            // 'this' = row click
            topic.publish('itemSelected', feat);
        }

    });
});
