/*global define,dojo,console */
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
//============================================================================================================================//
define([
    "dojo/_base/declare",
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/Deferred",
    "dojo/json",
    "dojo/on",
    "dojo/promise/all",
    "dojo/topic",
    "esri/dijit/PopupTemplate",
    "esri/graphic",
    "esri/InfoTemplate",
    "esri/layers/FeatureLayer",
    "esri/tasks/query",
    "esri/tasks/QueryTask",
    "esri/tasks/RelationshipQuery",
    "dojo/domReady!"
], function (
    declare,
    array,
    lang,
    Deferred,
    JSON,
    on,
    all,
    topic,
    PopupTemplate,
    Graphic,
    InfoTemplate,
    FeatureLayer,
    Query,
    QueryTask,
    RelationshipQuery
) {

    //========================================================================================================================//

    return declare([], {
        appConfig: null,

        /**
         * Encapsulates the management of a layer and its related table.
         * @param {object} config Application configuration
         * @constructor
         */
        constructor: function (config) {
            this.appConfig = config;
        },

        /**
         * Returns the fields of the feature layer holding the items.
         * @return {array} List of fields
         */
        getItemFields: function () {
            return this._itemFields;
        },

        /**
         * Returns the fields of the table holding the comments.
         * @return {array} List of fields
         */
        getCommentFields: function () {
            return this._commentFields;
        },

        /**
         * Returns the feature layer holding the items.
         * @return {object} Feature layer
         */
        getItemLayer: function () {
            return this._itemLayer;
        },

        /**
         * Returns the table holding the comments.
         * @return {object} Table
         */
        getCommentTable: function () {
            return this._commentTable;
        },

        /**
         * Removes the protocol from a URL.
         * @param {string} url URL to modify
         * @return {string} URL with everything before "//" removed
         */
        deprotocolUrl: function (url) {
            return url.substring(url.indexOf("//"));
        },

        /**
         * Extracts the layer and loads its table from the configuration information.
         * @return {object} Deferred for notification of completed load
         */
        load: function () {
            var deferred = new Deferred();
            setTimeout(lang.hitch(this, function () {
                var opLayers, iOpLayer = 0, promises = [];

                // Operational layer provides item fields and formats
                if (this.appConfig.itemInfo.itemData.operationalLayers.length === 0) {
                    deferred.reject(this.appConfig.i18n.map.missingItemsFeatureLayer);
                    return;
                }

                opLayers = this.appConfig.itemInfo.itemData.operationalLayers;
                if (this.appConfig.featureLayer && this.appConfig.featureLayer.id) {
                    for (iOpLayer = 0; iOpLayer < opLayers.length; iOpLayer++) {
                        if (this.appConfig.featureLayer.id === opLayers[iOpLayer].id) {
                            break;
                        }
                    }
                }
                this._itemLayerInWebmap = opLayers[iOpLayer];
                this._itemLayer = this._itemLayerInWebmap.layerObject;
                if (!this._itemLayerInWebmap) {
                    deferred.reject(this.appConfig.i18n.map.missingItemsFeatureLayer);
                    return;
                }

                // Provides _itemFields[n].{alias, editable, length, name, nullable, type} after adjusting
                // to the presence of editing and visibility controls in the optional popup
                this._itemFields = this.applyWebmapControlsToFields(
                    this._itemLayer.fields,
                    this._itemLayerInWebmap.popupInfo
                );

                // Related table provides comment fields and formats; use the first relationship
                if (this._itemLayer.relationships &&
                        this._itemLayer.relationships.length > 0) {

                    // Try to find the table that's in this relationship. We'll do parallel searches in
                    // the hope that it'll be on averge faster than serially stepping through the tables.
                    array.forEach(this.appConfig.itemInfo.itemData.tables, lang.hitch(this, function (table) {
                        var commentTableURL, commentTableInWebmap = table, commentTable, loadDeferred = new Deferred();

                        // Remove the protocol from the comment table's URL so that it can be loaded in
                        // http or https environments
                        commentTableURL = this.deprotocolUrl(commentTableInWebmap.url);

                        // Fetch the related table for the comments
                        promises.push(loadDeferred.promise);
                        commentTable = new FeatureLayer(commentTableURL);
                        on.once(commentTable, "load", lang.hitch(this, function (evt) {
                            // Note that we only consider the first relationship in the items layer
                            if (this._itemLayer.relationships[0].relatedTableId === commentTable.layerId) {
                                loadDeferred.resolve({
                                    "commentTableInWebmap": commentTableInWebmap,
                                    "commentTableURL": commentTableURL,
                                    "commentTable": commentTable
                                });
                            } else {
                                loadDeferred.resolve();
                            }
                        }), lang.hitch(this, function () {
                            loadDeferred.resolve();
                        }));
                    }));

                    all(promises).then(lang.hitch(this, function (results) {
                        // Find the matching relationship, if any; array.some will short-circuit if found
                        array.some(results, lang.hitch(this, function (result) {
                            if (result) {
                                // Save the links to the matching table
                                this._commentTableInWebmap = result.commentTableInWebmap;
                                this._commentTableURL = result.commentTableURL;
                                this._commentTable = result.commentTable;

                                // Provides _commentFields[n].{alias, editable, length, name, nullable, type} after adjusting
                                // to the presence of editing and visibility controls in the optional popup
                                this._commentFields = this.applyWebmapControlsToFields(
                                    this._commentTable.fields,
                                    this._commentTableInWebmap.popupInfo
                                );

                                // Formatting of comment display
                                if (this._commentTableInWebmap.popupInfo) {
                                    this._commentPopupTemplate = new PopupTemplate(this._commentTableInWebmap.popupInfo);
                                } else {
                                    this._commentPopupTemplate = new InfoTemplate();
                                }

                                // Override related record check from the point of view of the comments
                                // table--it's not needed
                                if (this._commentPopupTemplate._getRelatedRecords) {
                                    this._commentPopupTemplate._getRelatedRecords = function () {
                                        var def = new Deferred();
                                        def.resolve();
                                        return def.promise;
                                    };
                                }

                                // Save the field names for the linkage between the item layer and its table
                                // Note that we only consider the first relationship in the items layer
                                this._primaryKeyField = this._itemLayer.relationships[0].keyField;
                                this._foreignKeyField = this._commentTable.relationships[0].keyField;

                                return true;
                            }
                            return false;
                        }));

                        // We're done whether or not a table matched
                        deferred.resolve();
                    }));
                } else {
                    // No comments for this webmap
                    deferred.resolve();
                }
            }));
            return deferred;
        },

        /**
         * Amends fields in fields list with popup editing and visibility settings.
         * @param {array} fields Fields associated with layer or table
         * @param {object} [webmapPopup] Popup associated with layer or table
         * @return {array} Amends list with "dtIsEditable" and "dtIsVisible"; if webmapPopup or its fieldInfos
         * property are undefined, dtIsEditable is a copy of "editable" and dtIsVisible is true; otherwise,
         * dtIsEditable is a copy of the popup's fieldInfo's "isEditable" and dtIsVisible is a copy of its
         * "visible" (we have to use dtIs* to avoid conflicts with the API's use of "editable")
         */
        applyWebmapControlsToFields: function (fields, webmapPopup) {
            var sortedFields, fieldInfos = webmapPopup ? webmapPopup.fieldInfos : null;

            // Amend fields
            array.forEach(fields, function (field) {
                // Cover no-popup and unmatched fieldname cases
                field.dtIsEditable = field.editable;
                field.dtIsVisible = true;
                field.dtStringFieldOption = null;
                field.dtTooltip = null;

                // If we have a popup, seek to update settings
                if (fieldInfos) {
                    array.some(fieldInfos, function (fieldInfo) {
                        if (field.name === fieldInfo.fieldName) {
                            if (fieldInfo.label) {
                                field.alias = fieldInfo.label;
                            }
                            field.dtIsEditable = fieldInfo.isEditable;
                            field.dtIsVisible = fieldInfo.visible;
                            field.dtStringFieldOption = fieldInfo.stringFieldOption;
                            field.dtTooltip = fieldInfo.tooltip;
                            return true;
                        }
                        return false;
                    });
                }
            });

            // Reorder fields to match popup
            if (fieldInfos) {
                sortedFields = [];
                array.forEach(fieldInfos, function (fieldInfo) {
                    array.some(fields, function (field) {
                        if (field.name === fieldInfo.fieldName) {
                            sortedFields.push(field);
                            return true;
                        }
                        return false;
                    });
                });
                return sortedFields;
            }

            return fields;
        },

        /**
         * Retrieves the items within the map extent.
         * @param {Extent} [extent] Outer bounds of items to retrieve
         * @return {publish} "updatedItemsList" with results of query
         */
        queryItems: function (extent) {
            var updateQuery = new Query();
            updateQuery.where = "1=1";
            updateQuery.returnGeometry = true;
            updateQuery.orderByFields = [this._itemLayer.objectIdField + " DESC"];
            updateQuery.outFields = ["*"];
            if (extent) {
                updateQuery.geometry = extent;
            }

            this._itemLayer.queryFeatures(updateQuery, lang.hitch(this, function (results) {
                topic.publish("updatedItemsList", results ? results.features : []);
            }), lang.hitch(this, function (err) {
                console.log(err.message || "queryFeatures");
            }));
        },

        /**
         * Adds a comment to the comment table.
         * @param {string} item Item associated with this comment
         * @param {object} comment Comment as a set of attributes to be added for the item
         * @return {publish} "commentAdded" with the item associated with this comment
         * or "commentAddFailed" with an error message
         */
        addComment: function (item, comment) {
            var attr, gra;

            // Amend a copy of the comment with the foreign key pointing to the
            // associated item
            attr = lang.clone(comment);
            attr[this._foreignKeyField] = item.attributes[this._primaryKeyField];

            // Add the comment to the comment table
            gra = new Graphic(null, null, attr);
            this._commentTable.applyEdits([gra], null, null,
                lang.hitch(this, function (results) {
                    if (results.length === 0) {
                        topic.publish("commentAddFailed", "missing field");  //???
                    } else if (results[0].error) {
                        topic.publish("commentAddFailed", results[0].error);
                    } else {
                        topic.publish("commentAdded", item);
                    }
                }),
                lang.hitch(this, function (err) {
                    topic.publish("commentAddFailed", err.message || "commentAddFailed");
                }));
        },

        /**
         * Retrieves the attachments associated with an item.
         * @param {objectID} item Item whose attachments are sought
         * @return {publish} "updatedAttachments" with the item and the results of the query
         */
        queryAttachments: function (item) {
            this._itemLayer.queryAttachmentInfos(
                item.attributes[this._itemLayer.objectIdField],
                lang.hitch(this, function (attachments) {
                    topic.publish("updatedAttachments", item, attachments);
                }),
                lang.hitch(this, function (err) {
                    console.log(err.message || "queryAttachmentInfos");  //???
                })
            );
        },

        /**
         * Retrieves the comments associated with an item.
         * @param {objectID} item Item whose comments are sought
         * @return {publish} "updatedCommentsList" with the item and the results of the query
         */
        queryComments: function (item) {
            var updateQuery = new RelationshipQuery();
            updateQuery.objectIds = [item.attributes[this._itemLayer.objectIdField]];
            updateQuery.returnGeometry = true;
            updateQuery.outFields = ["*"];
            updateQuery.relationshipId = this._itemLayer.relationships[0].id;  // Note that we only consider the first relationship in the items layer

            this._itemLayer.queryRelatedFeatures(updateQuery, lang.hitch(this, function (results) {
                var pThis = this, fset, i, features;

                // Function for descending-OID-order sort
                function sortByOID(a, b) {
                    if (a.attributes[pThis._commentTable.objectIdField] > b.attributes[pThis._commentTable.objectIdField]) {
                        return -1;  // order a before b
                    }
                    if (a.attributes[pThis._commentTable.objectIdField] < b.attributes[pThis._commentTable.objectIdField]) {
                        return 1;  // order b before a
                    }
                    return 0;  // a & b have same date, so relative order doesn't matter
                }

                fset = results[item.attributes[this._itemLayer.objectIdField]];
                features = fset ? fset.features : [];

                if (features.length > 0) {
                    // Sort by descending OID order
                    features.sort(sortByOID);

                    // Add the comment table popup
                    for (i = 0; i < features.length; ++i) {
                        features[i].setInfoTemplate(this._commentPopupTemplate);
                    }
                }
                topic.publish("updatedCommentsList", item, features);
            }), lang.hitch(this, function (err) {
                console.log(err.message || "queryRelatedFeatures");  //???
            }));
        },

        /**
         * Updates the vote count in an item.
         * @param {object} item Item to be updated
         * @return {object} Deferred for notification of completed update
         */
        refreshVoteCount: function (item) {
            var updateQuery, updateQueryTask, deferred = new Deferred();

            if (this.appConfig.itemVotesField && this.appConfig.itemVotesField.length > 0) {
                // Get the latest vote count from the server, not just the feature layer
                updateQuery = new Query();
                updateQuery.objectIds = [item.attributes[this._itemLayer.objectIdField]];
                updateQuery.returnGeometry = false;
                updateQuery.outFields = [this.appConfig.itemVotesField];

                updateQueryTask = new QueryTask(this._itemLayer.url);
                updateQueryTask.execute(updateQuery, lang.hitch(this, function (results) {
                    var retrievedVotes;
                    if (results && results.features && results.features.length > 0) {
                        retrievedVotes = results.features[0].attributes[this.appConfig.itemVotesField];
                        if (retrievedVotes !== undefined) {
                            item.attributes[this.appConfig.itemVotesField] = retrievedVotes;
                            deferred.resolve(item);
                        }
                    }
                    deferred.reject(item);
                }), function () {
                    deferred.reject(item);
                });
            } else {
                deferred.resolve(item);
            }

            return deferred;
        },

        /**
         * Increments the designated "votes" field for the specified item.
         * @param {object} item Item to update
         * @return {publish} "voteUpdated" with updated item
         */
        incrementVote: function (item) {
            if (this.appConfig.itemVotesField && this.appConfig.itemVotesField.length > 0) {
                // Get the latest vote count
                this.refreshVoteCount(item).then(lang.hitch(this, function (item) {
                    // Increment the vote
                    item.attributes[this.appConfig.itemVotesField] = item.attributes[this.appConfig.itemVotesField] + 1;

                    // Update the item in the feature layer
                    this._itemLayer.applyEdits(null, [item], null, lang.hitch(this, function (ignore, updates) {
                        if (updates.length === 0) {
                            topic.publish("voteUpdateFailed", "missing field");
                        } else if (updates[0].error) {
                            topic.publish("voteUpdateFailed", updates[0].error);
                        } else {
                            topic.publish("voteUpdated", item);
                        }
                    }), lang.hitch(this, function (err) {
                        topic.publish("voteUpdateFailed", err.message || "voteUpdateFailed");
                    }));
                }), function (err) {
                    topic.publish("voteUpdateFailed", err.message || "voteUpdateFailed");
                });
            }
        }

    });

    //========================================================================================================================//

});
