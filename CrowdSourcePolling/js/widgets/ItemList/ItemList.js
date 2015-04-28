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
    "dojo/dom-attr",
    'dojo/dom-construct',
    'dojo/dom-style',
    'dojo/dom-class',
    'dojo/on',
    'dojo/topic',
    'dojo/NodeList-dom',

    'application/lib/SvgHelper',

    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',

    'dojo/text!./ItemListView.html'
], function (declare, lang, array, domAttr, domConstruct, domStyle, domClass, on, topic, nld,
    SvgHelper,
    _WidgetBase, _TemplatedMixin,
    template) {

    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        votesField: null,


        /**
         * Widget post-create, called automatically in widget creation
         * life cycle, after constructor. Sets class variables.
         */
        postCreate: function () {
            var linkActionBox;

            this.inherited(arguments);
            this.i18n = this.appConfig.i18n.item_list;
            this.hide();

            // Create the checkbox for linking the item list to the map extents
            linkActionBox = domConstruct.create("input", { "type": "checkbox", "class": "esriCTChkBox", id: "linkToMap", "value": "linkToMap" }, this.itemListActionBar);
            domConstruct.create("label", { "class": "css-label", "for": "linkToMap", innerHTML: this.i18n.linkToMapViewOptionLabel }, this.itemListActionBar);
            this.own(on(linkActionBox, "change", lang.hitch(this, function () {
                topic.publish("linkToMapViewChanged", linkActionBox.checked);
            })));
            linkActionBox.checked = this.linkToMapView;
        },

        /**
         * Shows the widget with a simple display: ''
         */
        show: function () {
            domStyle.set(this.domNode, 'display', '');
        },

        /**
         * Hides the widget with a simple display: 'none'
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

            var itemTitle, itemVotes, itemSummaryDiv, itemTitleDiv, favDiv, iconDiv, likeIconSurf;

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

                likeIconSurf = SvgHelper.createSVGItem(this.appConfig.likeIcon, iconDiv, 12, 12);
            }

            // If this item's OID matches the current selection, apply the theme to highlight it
            if (this.selectedItemOID === item.attributes[item._layer.objectIdField]) {
                domClass.add(itemSummaryDiv, "appTheme");
                if (favDiv) {
                    domClass.add(favDiv, "appThemeAccentText");
                    SvgHelper.changeColor(likeIconSurf, this.appConfig.theme.accentText);
                }
            }
        },

        /**
         * Gets title of feature for list display
         * @param  {feature} item The feature for which to get the title
         * @return {string} The title of the feature
         */
        getItemTitle: function (item) {
            return item.getTitle ? item.getTitle() : "";
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
                    if (votes > 999999) {
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
