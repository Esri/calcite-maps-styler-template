/*global define,dojo,js,console,esri,touchScroll,alert */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true */
/*
 | Copyright 2013 Esri
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
    "dojo/dom",
    "dojo/dom-construct",
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/_base/Color",
    "dojo/aspect",
    "esri/dijit/editing/TemplatePicker",
    "esri/dijit/editing/Editor",
    "esri/toolbars/draw",
    "esri/graphic",
    "js/lgonlineBase",
    "js/lgonlineMap",
    "js/lgonlineCommand"
], function (
    declare,
    dom,
    domConstruct,
    array,
    lang,
    Color,
    aspect,
    TemplatePicker,
    Editor,
    Draw,
    Graphic
) {

    //========================================================================================================================//

    declare("js.LGEditTemplatePicker", js.LGMapBasedMenuBox, {
        /**
         * Constructs an LGEditTemplatePicker.
         *
         * @constructor
         * @class
         * @name js.LGEditTemplatePicker
         * @extends js.LGMapBasedMenuBox
         * @classdesc
         * Displays an Editing Template Picker.
         */
        constructor: function () {
            var colorizer, styleString;

            // "templatePicker" and "selectedItem" are hard-coded class names that the
            // esri.dijit.editing.TemplatePicker creates. We modify these classes to fit
            // with our app's theme. (The superclass applies the theme for the dropdown
            // that holds the picker, but we have to make the picker's backgrounds transparent
            // and deactivate the foreground colors in order to see the theme and we have to
            // manually set the theme for the selected item in the template picker because we
            // don't have a handle to the currently-selected item.)
            colorizer = dom.byId(this.colorizerId).getLGObject();
            styleString =
                ".templatePicker{border:1px solid transparent!important;}" +
                ".templatePicker .dojoxGrid{background-color:transparent;}" +
                ".templatePicker .dojoxGrid .dojoxGridScrollbox{background-color:transparent;}" +
                ".templatePicker .dojoxGrid .dojoxGridRow{background-color:transparent;}" +
                ".templatePicker .dojoxGrid .dojoxGridCell{border:1px solid transparent}" +
                ".templatePicker .dojoxGrid .dojoxGridRow{border:1px solid transparent}" +
                ".templatePicker .grid .dojoxGridRowOver{background-color:transparent;color:inherit;}" +
                ".templatePicker .grid .dojoxGridRowOver .dojoxGridCell{background-color:transparent;color:inherit;}" +
                ".templatePicker .dojoxGrid .dojoxGridCellFocus{border:1px solid transparent!important;}" +
                ".templatePicker .dojoxGrid .dojoxGridRowOdd{background-color:transparent;}" +
                ".templatePicker .dojoxGrid .selectedItem{border:1px solid transparent!important;color:" +
                colorizer.foregroundColor() + "!important;background-color:" + colorizer.alternateBackgroundColor() +
                "!important}";
            this.injectCSS(styleString);

            this.setUpWaitForDependency("js.LGEditTemplatePicker");
        },

        /**
         * Performs class-specific setup when the dependency is
         * satisfied.
         * @memberOf js.LGEditTemplatePicker#
         * @override
         */
        onDependencyReady: function () {
            var opLayers, allFieldsInfos, layerInfo, canEdit = true;

            // Test for editing permission
            if (this.appConfig.userPrivileges) {
                canEdit = false;
                array.some(this.appConfig.userPrivileges, function (privilege) {
                    if (privilege === "features:user:edit") {
                        canEdit = true;
                        return true;
                    }
                    return false;
                });
            }

            // Build a list of editable layers in this map if this user can edit
            if (canEdit) {
                opLayers = this.appConfig.itemInfo.itemData.operationalLayers;
                this.layerInfos = [];
                this.layers = [];
                array.forEach(opLayers, lang.hitch(this, function (mapLayer) {
                    var visibleFieldInfos, eLayer = mapLayer.layerObject;
                    if (eLayer instanceof esri.layers.FeatureLayer && eLayer.isEditable()) {
                        if ((mapLayer.capabilities === null || mapLayer.capabilities !== "Query")
                                && (eLayer.capabilities === null || eLayer.capabilities !== "Query")) {
                            // If "capabilities" is set to "Query", editing is disabled in the web map
                            // (the mapLayer check is for the webmap; the eLayer check is for the underlying feature service)

                            // Layer info list for esri.dijit.editing.Editor; we'll hide invisible fields before
                            // adding the layer info
                            layerInfo = {
                                "featureLayer": eLayer
                            };

                            allFieldsInfos = null;
                            if (mapLayer.popupInfo && mapLayer.popupInfo.fieldInfos) {
                                allFieldsInfos = mapLayer.popupInfo.fieldInfos;
                            } else if (eLayer.infoTemplate && eLayer.infoTemplate.info && eLayer.infoTemplate.info.fieldInfos) {
                                allFieldsInfos = eLayer.infoTemplate.info.fieldInfos;
                            }
                            if (allFieldsInfos) {
                                // We have field info, so we can remove the invisibles
                                visibleFieldInfos = [];
                                array.forEach(allFieldsInfos, function (fieldInfo) {
                                    if (fieldInfo.visible) {
                                        visibleFieldInfos.push(fieldInfo);
                                    }
                                });
                                layerInfo.fieldInfos = visibleFieldInfos;
                            }

                            this.layerInfos.push(layerInfo);

                            // Layers list for esri.dijit.editing.TemplatePicker
                            this.layers.push(eLayer);
                        }
                    }
                }));

                if (this.layers.length === 0) {
                    // If there are no editable layers, we won't display the empty picker
                    this.setShowable(false);

                } else {
                    // Create a place for template picker and editor combination within the dropdown
                    this.templatePickerHolder = domConstruct.create("div",
                        { className: this.templatePickerHolderClass });
                    domConstruct.place(this.templatePickerHolder, this.rootId);
                    touchScroll(this.templatePickerHolder);
                }
            } else {
                // If editing is not an option, we won't display the empty picker
                this.setShowable(false);
            }

            this.inherited(arguments);
        },

        /**
         * Creates a template picker and editor combination for this class.
         * @memberOf js.LGEditTemplatePicker#
         */
        createEditor: function () {
            var pThis = this, templatePickerDiv, editorDiv, templatePicker, editorSettings;

            if (this.templatePickerHolder) {

                //------------------------- Template Picker dijit -------------------------

                // The template picker will not size properly if its containing divs have no
                // substance, so we'll make the divs "visible" during construction (their containers
                // keep them from flashing onscreen)
                this.setIsVisible(true, true);

                // Create a div that will become the picker
                templatePickerDiv = domConstruct.create("div");
                domConstruct.place(templatePickerDiv, this.templatePickerHolder);

                // Create a template picker using the editable layers
                templatePicker = new TemplatePicker({
                    featureLayers: this.layers,
                    rows: "auto",
                    columns: 2,
                    grouping: true
                }, templatePickerDiv);
                templatePicker.startup();

                // For compatibility with the dropdown mechanism, we'll switch to hiding the
                // divs without substance (i.e., "display" is "none" and "visibility" is "visible")
                this.setIsVisible(false, false);

                //------------------------- Editor dijit -------------------------
                // Create a div that will become the editor
                editorDiv = domConstruct.create("div");
                domConstruct.place(editorDiv, this.templatePickerHolder);

                // Create an editing tool linked to the template picker
                editorSettings = {
                    map: this.appConfig.map,
                    templatePicker: templatePicker,
                    toolbarVisible: false,
                    layerInfos: this.layerInfos
                };

                this.editor = new Editor({ settings: editorSettings }, editorDiv);
                this.editor.startup();

                // Provide a hook for preprocessing the edit before it is committed
                aspect.before(this.editor, "_applyEdits", function (edits) {
                    // "edits" is an array of edits; each edit contains the layer to be edited as well
                    // as optional arrays "adds", "updates", and "deletes"
                    array.forEach(edits, function (layerEdits) {
                        if (layerEdits.adds) {
                            pThis.preprocessEditAdds(layerEdits);
                        }
                        if (layerEdits.updates) {
                            pThis.preprocessEditUpdates(layerEdits);
                        }
                        if (layerEdits.deletes) {
                            pThis.preprocessEditDeletes(layerEdits);
                        }
                    });
                });

                //--------------------------------------------------

                // The editor controls popups, so we need to disable them in the map
                this.mapObj.disablePopups();
            }
        },

        /**
         * Deletes this class' template picker and editor combination.
         * @memberOf js.LGEditTemplatePicker#
         */
        destroyEditor: function () {
            if (this.editor) {
                // Discard the template picker and editor combination for this map
                this.editor.destroy();
                this.editor = null;

                // The editor controls popups, so we can now enable them in the map
                this.mapObj.enablePopups();
            }
        },

        /**
         * Makes the graphic visible and creates the class' editor.
         * @memberOf js.LGEditTemplatePicker#
         * @override
         */
        show: function () {
            this.createEditor();
            this.inherited(arguments);
        },

        /**
         * Makes the graphic invisible and deletes the class' editor.
         * @memberOf js.LGEditTemplatePicker#
         * @override
         */
        hide: function () {
            this.destroyEditor();
            this.inherited(arguments);
        },

        /**
         * Preprocesses a set of "add" edits for a layer.
         * @param {object} layerEdits Structure containing "layer"--the layer to be
         * edited--and "adds"--an array of objects to be added
         * @memberOf js.LGEditTemplatePicker#
         */
        preprocessEditAdds: function (layerEdits) {
            return layerEdits;
        },

        /**
         * Preprocesses a set of "update" edits for a layer.
         * @param {object} layerEdits Structure containing "layer"--the layer to be
         * edited--and "updates"--an array of objects to be updated
         * @memberOf js.LGEditTemplatePicker#
         */
        preprocessEditUpdates: function (layerEdits) {
            return layerEdits;

        },

        /**
         * Preprocesses a set of "delete" edits for a layer.
         * @param {object} layerEdits Structure containing "layer"--the layer to be
         * edited--and "deletes"--an array of objects to be deleted
         * @memberOf js.LGEditTemplatePicker#
         */
        preprocessEditDeletes: function (layerEdits) {
            return layerEdits;
        }
    });

    //========================================================================================================================//

    declare("js.LGEditTemplatePickerWithDefaults", [js.LGEditTemplatePicker, js.LGDefaults], {
        /**
         * Constructs an LGEditTemplatePickerWithDefaults.
         *
         * @constructor
         * @class
         * @name js.LGEditTemplatePickerWithDefaults
         * @extends js.LGEditTemplatePicker, js.LGDefaults
         * @classdesc
         * Displays an Editing Template Picker that contains default values for specified fields.
         */
        constructor: function () {
            this.changeDefaults();

            this.setUpWaitForDependency("js.LGEditTemplatePickerWithDefaults");
        },

        /**
         * Preprocesses a set of "add" edits for a layer.
         * @param {object} layerEdits Structure containing "layer"--the layer to be
         * edited--and "adds"--an array of objects to be added
         * @memberOf js.LGEditTemplatePickerWithDefaults#
         * @override
         */
        preprocessEditAdds: function (layerEdits) {
            layerEdits.adds[0].attributes[this.defaultValues.fieldname1] = this.defaultValues.value1;

            return layerEdits;
        }
    });

    //========================================================================================================================//

    declare("js.LGFeatureByClick", [js.LGObject, js.LGMapDependency], {
        /**
         * Constructs an LGFeatureByClick.
         *
         * @constructor
         * @class
         * @name js.LGFeatureByClick
         * @extends js.LGObject, js.LGMapDependency
         * @classdesc
         * Connects a map click with a feature.
         */
        constructor: function () {
            this.setUpWaitForDependency("js.LGFeatureByClick");
        },

        /**
         * Performs class-specific setup when the dependency is
         * satisfied.
         * @memberOf js.LGFeatureByClick#
         * @override
         */
        onDependencyReady: function () {
            var pThis = this;
            this.inherited(arguments);

            // We're interested in map clicks
            this.clickHandle = this.subscribeToMessage("mapClick", function (evt) {
                pThis.handleClick(evt);
            });
        },

        /**
         * Handles a click event.
         * @param {object} evt MouseEvent (not used)
         * @memberOf js.LGFeatureByClick#
         */
        handleClick: function () {
            return null;
        }
    });


//  Displays an info window that permits the entry or editing of a graphics attributes.

    //========================================================================================================================//

    declare("js.LGAddFeatureByClick", js.LGFeatureByClick, {
        /**
         * Constructs an LGAddFeatureByClick.
         *
         * @constructor
         * @class
         * @name js.LGAddFeatureByClick
         * @extends js.LGFeatureByClick
         * @classdesc
         * Converts a map click into a feature.
         */
        constructor: function () {
            this.setUpWaitForDependency("js.LGAddFeatureByClick");
        },

        /**
         * Performs class-specific setup when the dependency is
         * satisfied.
         * @memberOf js.LGAddFeatureByClick#
         * @override
         */
        onDependencyReady: function () {
            this.inherited(arguments);

            // Prepare a drawing toolbar
            esri.bundle.toolbars.draw.addPoint = this.checkForSubstitution("@tooltips.collect");
            this.drawingToolbar = new Draw(this.appConfig.map, {});
            this.drawingToolbarActive = false;
            this.drawingToolbar.on("draw-end", lang.hitch(this, this.handleDrawEnd));
        },

        /**
         * Handles a click event by activating the drawing toolbar.
         * @param {object} evt MouseEvent
         * @memberOf js.LGAddFeatureByClick#
         * @override
         */
        handleClick: function (evt) {
            if (!this.drawingToolbarActive) {
                // Activate the point drawing tool
                this.drawingToolbarActive = true;
                this.drawingToolbar.activate(Draw.POINT);
                this.drawingToolbar._updateTooltip(evt);
            }
        },

        /**
         * Handles a drawing toolbar's "draw-end" event by deactivating the toolbar,
         * showing a graphic, collecting attributes, and submitting a new feature.
         * @param {object} evt Drawing toolbar's "draw-end" event
         * @memberOf js.LGAddFeatureByClick#
         */
        handleDrawEnd: function (evt) {
            var pThis = this, graphic;

            // Event is of the form:
            // {"geometry":{"type":"point","x":-9812146.796478976,"y":5126074.462209778,
            // "spatialReference":{"wkid":102100}}, "target":{...}}

            // Upon conclusion of drawing, deactivate tool
            this.drawingToolbarActive = false;
            this.drawingToolbar.deactivate();

            // Show a placeholder graphic
            graphic = new Graphic(evt.geometry,
                new esri.symbol.SimpleMarkerSymbol(
                    esri.symbol.SimpleMarkerSymbol.STYLE_SQUARE,
                    10,
                    new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,
                        new Color([255, 0, 0]), 1),
                    new Color([0, 255, 0, 0.25])
                ));
            this.appConfig.map.graphics.add(graphic);

            // Displays an info window that permits the entry or editing of a graphics attributes.
            // Get the attributes from the user via a form defined in the webmap



            // Submit the geometry and attributes to the layer



            // Remove the placeholder graphics
            setTimeout(function () {  //???
                alert(pThis.checkForSubstitution("@messages.yourContentSubmitted"));
                pThis.appConfig.map.graphics.remove(graphic);
            }, 2000);
        }
    });

    //========================================================================================================================//

});
/* 
This source is part of the git commit 
bae7663eb55c6ce4 2016-01-28 13:47:51 -0800
It is available from https://github.com/Esri/local-government-online-apps 
*/ 
