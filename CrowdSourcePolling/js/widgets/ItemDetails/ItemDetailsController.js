/*global define,dojo,Modernizr */
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
    "dojo/dom",
    'dojo/dom-construct',
    'dojo/dom-style',
    'dojo/dom-class',
    'dojo/dom-attr',
    'dojo/query',
    "dojo/sniff",
    "dojo/topic",
    "dojox/fx/scroll",
    'dojo/on',
    'dojo/NodeList-dom',

    'application/lib/SvgHelper',

    'dijit/layout/ContentPane',

    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',

    "application/widgets/DynamicForm/DynamicForm",
    "application/widgets/PopupWindow/PopupWindow",

    'dojo/text!./ItemDetailsView.html'
], function (declare, lang, array, dom, domConstruct, domStyle, domClass, domAttr, query, has, topic, scroller, on, nld,
    SvgHelper,
    ContentPane,
    _WidgetBase, _TemplatedMixin,
    DynamicForm, PopupWindow,
    template) {

    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        id: 'itemDetail',
        baseClass: 'itemDetail',
        itemTitle: 'default title',
        itemVotes: null,
        actionVisibilities: {
            "showVotes": false,
            "showComments": false,
            "showGallery": false
        },
        votesField: null,
        commentFields: null,


        /**
         * Widget post-create, called automatically in widget creation
         * life cycle, after constructor. Sets class variables.
         */
        postCreate: function () {
            this.inherited(arguments);
            this.i18n = this.appConfig.i18n.item_details;
            this.initCommentsDiv();
            this.initContentPane();
            this.hide();
        },

        /**
         * Adds icons and listener setup to custom post-DOM-creation steps.
         */
        startup: function () {
            this.inherited(arguments);
            this.initTemplateIcons();
            this.addListeners();
        },

        /**
         * Shows the widget and, if permitted and possible, the votes and comments
         * buttons and areas.
         */
        show: function () {
            if (!this.actionVisibilities.showVotes || !this.votesField) {
                domStyle.set(this.likeButton, 'display', 'none');
            }
            if (!this.actionVisibilities.showComments || !this.commentFields) {
                domStyle.set(this.commentButton, 'display', 'none');
                domStyle.set(this.commentsHeading, 'display', 'none');
                domStyle.set(this.noCommentsDiv, 'display', 'none');
                domStyle.set(this.commentsList, 'display', 'none');
            }
            domStyle.set(this.domNode, 'display', '');
        },

        /**
         * Hides the widget with a simple display: 'none'
         */
        hide: function () {
            domStyle.set(this.domNode, 'display', 'none');
            this.destroyCommentForm();
        },

        /**
         * Creates the icons for the Like, Comment, Gallery buttons and gives them their
         * i18n labels and tooltips.
         * <br>Needs to be run after postCreate, such as in startup, because of SVG icons; see
         * https://code.google.com/p/tatami/issues/detail?id=40
         */
        initTemplateIcons: function () {
            var backIconSurface;

            backIconSurface = SvgHelper.createSVGItem(this.appConfig.backIcon, this.backIcon, 12, 20);
            if (!Modernizr.rgba) {
                SvgHelper.changeColor(backIconSurface, this.appConfig.theme.foreground);
            }

            domAttr.set(this.likeIcon, "src", "images/likeBlue.png");
            this.likeLabel.innerHTML = this.i18n.likeButtonLabel;
            this.likeButton.title = this.i18n.likeButtonTooltip;

            domAttr.set(this.commentIcon, "src", "images/commentBlue.png");
            this.commentLabel.innerHTML = this.i18n.commentButtonLabel;
            this.commentButton.title = this.i18n.commentButtonTooltip;

            domAttr.set(this.galleryIcon, "src", "images/galleryBlue.png");
            this.galleryLabel.innerHTML = this.i18n.galleryButtonLabel;
            this.galleryButton.title = this.i18n.galleryButtonTooltip;
        },

        /**
         * Sets the invert state of a button.
         * @param {string} pngTag The unique part of the button PNG image file corresponding to
         * the button, e.g., "like", "comment", "gallery"
         * @param {boolean} toInvert Whether button should be shown in inverted state (true) or not
         * @param {object} button The button to modify
         * @param {object} icon The icon img in the button
         */
        invertButton: function (pngTag, toInvert, button, icon) {
            if (toInvert) {
                domClass.remove(button, "btnNormal");
                domClass.add(button, "btnInverse");
                domAttr.set(icon, "src", "images/" + pngTag + "White.png");
            } else {
                domClass.remove(button, "btnInverse");
                domClass.add(button, "btnNormal");
                domAttr.set(icon, "src", "images/" + pngTag + "Blue.png");
            }
        },

        /**
         * Sets up the i18n comments-list heading and the no-comments planceholder.
         */
        initCommentsDiv: function () {
            this.commentsHeading.innerHTML = this.i18n.commentsListHeading;
            this.noCommentsDiv.innerHTML = this.i18n.noCommentsPlaceholder;
        },

        /**
         * Sets up the click listeners for widget's buttons.
         */
        addListeners: function () {
            var self = this;
            this.own(
                on(this.backIcon, 'click', function () {
                    topic.publish('detailsCancel');
                }),
                on(this.likeButton, 'click', lang.hitch(this, function () {
                    topic.publish('addLike', self.item);
                    this.invertButton("like", true, this.likeButton, this.likeIcon);
                })),
                on(this.commentButton, 'click', function () {
                    topic.publish('getComment', self.item);
                }),
                on(this.galleryButton, 'click', lang.hitch(this, function () {
                    topic.publish('showGallery', self.item);
                    if (domStyle.get(this.gallery, 'display') === 'none') {
                        this.showGallery();
                    } else {
                        this.hideGallery();
                    }
                }))
            );
        },

        /**
         * Sets the fields that are needed to display feature information in this list (number of votes).
         * Needs to be called before first setItems to tell the widget which fields to look for.
         * @param {string} votesField Name of votes property
         * @param {array} commentFields Fields used by comment-entry form
         */
        setItemFields: function (votesField, commentFields) {
            this.votesField = votesField;
            this.commentFields = commentFields;
        },

        /**
         * Sets the permitted visibility of the votes, comments, and gallery buttons.
         * @param {boolean} showVotes Display button if the votes field is known
         * @param {boolean} showComments Display button if the comments fields are known
         * @param {boolean} showGallery Display button if current item has attachments
         */
        setActionsVisibility: function (showVotes, showComments, showGallery) {
            this.actionVisibilities = {
                "showVotes": showVotes,
                "showComments": showComments,
                "showGallery": showGallery
            };
        },

        /**
         * Creates the div to hold the current item's popup.
         */
        initContentPane: function () {
            this.itemCP = new ContentPane({id: 'itemCP'}, this.descriptionDiv);
            this.itemCP.startup();
        },

        /**
         * Clears the display, sets the current item, and creates its display.
         * @param {object} item Item to become the current display item
         */
        setItem: function (item) {
            this.item = item;
            this.clearGallery();

            this.itemTitle = this.getItemTitle(item) || "&nbsp;";
            this.itemVotes = this.getItemVotes(item);
            this.clearItemDisplay();
            this.buildItemDisplay();
            this.invertButton("like", false, this.likeButton, this.likeIcon);
        },

        /**
         * Updates the votes display of the current item.
         * @param {object} item Updated definition of current item; if it does not have
         * the same object id as the current item, nothing happens
         */
        updateItemVotes: function (item) {
            if (item.attributes[item._layer.objectIdField] === this.item.attributes[this.item._layer.objectIdField]) {
                this.itemVotes = this.getItemVotes(item);
                this.redrawItemVotes();
            }
        },

        /**
         * Updates the contents of the votes display div, including applying a class to get a bit
         * more space if needed; hides votes display if votes field is not known.
         */
        redrawItemVotes: function () {
            if (this.itemVotes) {
                if (this.itemVotes.needSpace) {
                    domClass.add(this.itemTitleDiv, "itemDetailTitleOverride");
                }
                this.itemVotesDiv.innerHTML = this.itemVotes.label;
            } else {
                domStyle.set(this.itemVotesGroup, 'display', 'none');
            }
        },

        /**
         * Shows the attachments for the current item if there are any and it is permitted;
         * hides the gallery button otherwise.
         * @param {array} attachments List of attachments for item
         */
        setAttachments: function (attachments) {
            var showGalleryButton =
                this.actionVisibilities.showGallery && attachments && attachments.length > 0;
            if (showGalleryButton) {
                if (!this.enlargedViewPopup) {
                    // Popup window for enlarged image
                    this.enlargedViewPopup = new PopupWindow({
                        "appConfig": this.appConfig,
                        "showClose": true
                    }).placeAt(document.body); // placeAt triggers a startup call to _helpDialogContainer
                }

                this.updateGallery(attachments);
                domStyle.set(this.galleryButton, 'display', 'inline-block');
            }
        },

        /**
         * Adds the specified attachments to the item's gallery.
         * @param {array} attachments List of attachments for item
         */
        updateGallery: function (attachments) {
            // Create gallery
            array.forEach(attachments, lang.hitch(this, function (attachment) {
                var thumb, srcURL;
                srcURL = attachment.url + "/" + attachment.name;
                thumb = domConstruct.create('img', {
                    'class': 'attachment',
                    'src': srcURL
                }, this.gallery);
                this.own(on(thumb, 'click', lang.hitch(this, function (attachment) {
                    domConstruct.empty(this.enlargedViewPopup.popupContent);
                    domConstruct.create('img', {
                        'class': 'attachment',
                        'src': srcURL
                    }, this.enlargedViewPopup.popupContent);
                    this.enlargedViewPopup.show();
                })));
            }));
        },

        /**
         * Clears the gallery.
         */
        clearGallery: function () {
            domStyle.set(this.galleryButton, 'display', 'none');
            this.hideGallery();
            domConstruct.empty(this.gallery);
        },

        /**
         * Makes the gallery visible.
         */
        showGallery: function () {
            domStyle.set(this.gallery, 'display', 'block');
            this.invertButton("gallery", true, this.galleryButton, this.galleryIcon);
        },

        /**
         * Hides the gallery.
         */
        hideGallery: function () {
            domStyle.set(this.gallery, 'display', 'none');
            this.invertButton("gallery", false, this.galleryButton, this.galleryIcon);
        },

        /**
         * Creates the comment form anew and makes it visible.
         * @param {object} [userInfo] User social-media sign-in info, of which function uses the "name" attribute
         * to pre-populate the comment name field if one is configured in the app's commentNameField attribute
         */
        showCommentForm: function (userInfo) {
            if (this.commentFields) {
                if (!this.itemAddComment) {
                    // Create comment form
                    this.itemAddComment = new DynamicForm({
                        "appConfig": this.appConfig
                    }).placeAt(this.commentsForm); // placeAt triggers a startup call to itemAddComment

                    // Set its item and its fields
                    this.itemAddComment.setItem(this.item);
                    this.itemAddComment.setFields(this.commentFields);

                    // See if we can pre-set its user name value
                    if (userInfo && userInfo.name && this.appConfig.commentNameField && this.appConfig.commentNameField.length > 0) {
                        this.itemAddComment.presetFieldValue(this.appConfig.commentNameField, userInfo.name);
                    }
                }

                // Show the form
                this.itemAddComment.show();
                this.invertButton("comment", true, this.commentButton, this.commentIcon);

                // Scroll the comment form into view if needed
                this.scrollIntoView(this.domNode.parentNode, this.itemAddComment.domNode);
            }
        },

        /**
         * Destroys the comment form.
         */
        destroyCommentForm: function () {
            if (this.itemAddComment) {
                this.itemAddComment.destroy();
                this.itemAddComment = null;
                this.invertButton("comment", false, this.commentButton, this.commentIcon);

                // Scroll to the top of the details to restore context
                this.scrollIntoView(this.domNode.parentNode, this.itemSummary);
            }
        },

        /**
         * Scrolls a container node to make a specified node visible.
         * @param {object} nodeToScroll Container node that's to be scrolled
         * @param {object} nodeToMakeVisible Node that's to be brought into view
         */
        scrollIntoView: function (nodeToScroll, nodeToMakeVisible) {
            if (!has("ff")) {
                // Dojo dojox/fx/scroll scroller doesn't appear to work in Firefox--often scrolls to end
                // of node to make visible
                scroller({
                    win: nodeToScroll,
                    node: nodeToMakeVisible
                }).play();
            } else {
                // Fortunately, there's a fallback: scrollIntoView with options, which is only
                // supported in Firefox >= 36
                nodeToMakeVisible.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        },

        /**
         * Gets title of feature for header display
         * @param  {feature} item The feature for which to get the title
         * @return {string}      The title of the feature
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
         * Completely clears the display for the current item.
         */
        clearItemDisplay: function () {
            this.itemTitleDiv.innerHTML = '';
            this.itemVotesDiv.innerHTML = '';
            this.itemCP.set('content', '');
        },

        /**
         * Builds the display for the current item.
         */
        buildItemDisplay: function () {
            this.itemTitleDiv.innerHTML = this.itemTitle;
            this.redrawItemVotes();
            this.itemCP.set('content', this.item.getContent());
        },

        /**
         * Clears the comments display and builds a new one based upon the supplied list.
         * @param {array} commentsArr List of comment objects
         */
        setComments: function (commentsArr) {
            this.clearComments();
            domClass.toggle(this.noCommentsDiv, 'hide', commentsArr.length);
            array.forEach(commentsArr, lang.hitch(this, this.buildCommentDiv));

        },

        /**
         * Creates a ContentPane to hold the contents of a comment.
         * @param {object} comment Comment to display; its contents come from calling
         * getContent() on it
         */
        buildCommentDiv: function (comment) {
            var commentDiv;

            commentDiv = domConstruct.create('div', {
                'class': 'comment'
            }, this.commentsList);

            new ContentPane({
                'class': 'content small-text',
                'content': comment.getContent()
            }, commentDiv).startup();
        },

        /**
         * Empties the list of comments.
         */
        clearComments: function () {
            domConstruct.empty(this.commentsList);
        }
    });
});
