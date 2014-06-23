/*global define,dojo,js,touchScroll,Modernizr,esri,alert */
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
define("js/lgonlineCommand", [
    "dojo/dom-construct",
    "dojo/dom",
    "dojo/on",
    "dojo/Deferred",
    "dojo/DeferredList",
    "dojo/dom-style",
    "dojo/dom-class",
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/request/xhr",
    "dojo/string",
    "dijit/form/TextBox",
    "dijit/layout/ContentPane",
    "dojox/gfx",
    "dojox/gfx/utils",
    "esri/dijit/Legend",
    "esri/dijit/BasemapGallery",
    "esri/dijit/Basemap",
    "esri/tasks/locator",
    "esri/tasks/PrintTask",
    "esri/tasks/PrintParameters",
    "esri/tasks/PrintTemplate",
    "esri/tasks/LegendLayer",
    "esri/tasks/query",
    "esri/tasks/QueryTask",
    "esri/dijit/PopupTemplate",
    "js/lgonlineBase",
    "js/lgonlineMap"
], function (
    domConstruct,
    dom,
    on,
    Deferred,
    DeferredList,
    domStyle,
    domClass,
    array,
    lang,
    xhr,
    string,
    TextBox,
    ContentPane,
    gfx,
    gfxUtils,
    Legend,
    BasemapGallery,
    Basemap,
    Locator,
    PrintTask,
    PrintParameters,
    PrintTemplate,
    LegendLayer,
    Query,
    QueryTask,
    PopupTemplate
) {

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

            this.isShowable = true;

            // Start listening for activation/deactivation call
            if (this.trigger) {
                this.setUpListeningForCommands();

                this.subscribeToMessage(this.trigger, function (data) {
                    pThis.handleTrigger(data);
                });
            }
        },

        /**
         * Set up a listener for generic command activation.
         * @memberOf js.LGDropdownBox#
         */
        setUpListeningForCommands: function () {
            var pThis = this;

            this.subscribeToMessage("command", function (sendingTrigger) {
                if (sendingTrigger !== pThis.trigger) {
                    pThis.setIsVisible(false);
                }
            });
        },

        /**
         * Sets whether or not this dropdown will be shown with future triggerings;
         * if currently visible and it is not to be showable in the future, dropdown
         * is hidden.
         * @param {boolean} makeShowable Indicates if dropdown may be shown
         * @memberOf js.LGDropdownBox#
         */
        setShowable: function (makeShowable) {
            this.isShowable = makeShowable;
            if (!this.isShowable && this.getIsVisible()) {
                this.toggleVisibility();
            }
        },

        /**
         * Handles a trigger by toggling visibility.
         * @param {object} [data] Data accompanying trigger.
         * @memberOf js.LGDropdownBox#
         */
        handleTrigger: function () {
            if (this.isShowable) {
                this.toggleVisibility();
            }
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGMapBasedMenuBox", [js.LGDropdownBox, js.LGMapDependency], {
        /**
         * Constructs an LGMapBasedMenuBox.
         *
         * @constructor
         * @class
         * @name js.LGMapBasedMenuBox
         * @extends js.LGDropdownBox, js.LGMapDependency
         * @classdesc
         * Provides a UI display of a menu that is not available until
         * the specified map is available.
         */
        constructor: function () {
            this.ready = new Deferred();

            this.setUpWaitForDependency("js.LGMapBasedMenuBox");
        },

        /**
         * Performs class-specific setup when the dependency is
         * satisfied.
         * @memberOf js.LGMapBasedMenuBox#
         * @override
         */
        onDependencyReady: function () {
            this.ready.resolve(this);
            this.inherited(arguments);
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGBasemapBox", js.LGMapBasedMenuBox, {
        /**
         * Constructs an LGBasemapBox.
         *
         * @constructor
         * @class
         * @name js.LGBasemapBox
         * @extends js.LGMapBasedMenuBox
         * @classdesc
         * Provides a UI holder for the JavaScript API's basemap
         * gallery.
         */
        constructor: function () {
            this.setUpWaitForDependency("js.LGBasemapBox");
        },

        /**
         * Performs class-specific setup when the dependency is
         * satisfied.
         * @memberOf js.LGBasemapBox#
         * @override
         */
        onDependencyReady: function () {
            var galleryId, galleryHolder, basemapGallery, basemapGroup = this.getBasemapGroup(),
                thumbnailUrl, webmapThumbnailUrl, testForWebmapThumbnail;

            galleryId = this.rootId + "_gallery";

            galleryHolder = new ContentPane({
                id: galleryId,
                className: this.galleryClass
            }).placeAt(this.rootDiv);
            touchScroll(galleryId);

            // We'll try to use the webmap's thumbnail to represent its basemap, but have a fallback to the configured
            // value and then to a static value
            thumbnailUrl = this.webmapThumbnail || "images/webmap.png";
            testForWebmapThumbnail = new Deferred();
            try {
                if (this.appConfig.proxyurl && this.appConfig.itemInfo.item.thumbnail) {
                    webmapThumbnailUrl =
                        this.appConfig.sharinghost + "/sharing/rest/content/items/" + this.appConfig.itemInfo.item.id
                        + "/info/" + this.appConfig.itemInfo.item.thumbnail;
                    xhr(this.appConfig.proxyurl + "?" + webmapThumbnailUrl).then(function () {
                        thumbnailUrl = webmapThumbnailUrl;
                        testForWebmapThumbnail.resolve();
                    }, function (err) {
                        testForWebmapThumbnail.resolve();
                    });
                } else {
                    testForWebmapThumbnail.resolve();
                }
            } catch (err) {
                testForWebmapThumbnail.resolve();
            }

            testForWebmapThumbnail.then(lang.hitch(this, function () {
                // Create the gallery, adding in the basemap from the webmap (even if it is already represented
                // via the ArcGIS basemaps or the custom basemap group
                basemapGallery = new BasemapGallery({
                    basemaps: [new Basemap({
                        layers: this.appConfig.itemInfo.itemData.baseMap.baseMapLayers,
                        title: this.appConfig.itemInfo.itemData.baseMap.title,
                        thumbnailUrl: thumbnailUrl
                    })],
                    showArcGISBasemaps: true,  // ignored if a group is configured
                    basemapsGroup: basemapGroup,
                    bingMapsKey: this.appConfig.bingKey,
                    map: this.appConfig.map
                }, domConstruct.create('div')).placeAt(this.rootDiv);
                galleryHolder.set('content', basemapGallery.domNode);

                basemapGallery.startup();

            }));

            this.inherited(arguments);
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

    dojo.declare("js.LGDijitLegendBox", js.LGMapBasedMenuBox, {
        /**
         * Constructs an LGDijitLegendBox.
         *
         * @constructor
         * @class
         * @name js.LGDijitLegendBox
         * @extends js.LGMapBasedMenuBox
         * @classdesc
         * Provides a UI holder for the JavaScript API's dijit.Legend.
         */
        constructor: function () {
            this.setUpWaitForDependency("js.LGDijitLegendBox");
        },

        /**
         * Performs class-specific setup when the map dependency is satisfied.
         * @memberOf js.LGBasemapBox#
         * @override
         */
        onDependencyReady: function () {
            try {

                var legendHolder, layerInfo, legendDijit,
                    legendId = this.rootId + "_legend";

                legendHolder = new ContentPane({
                    id: legendId,
                    className: this.dijitLegendClass
                }).placeAt(this.rootDiv);
                touchScroll(legendId);

                //https://developers.arcgis.com/en/javascript/jsapi/esri.arcgis.utils-amd.html#getlegendlayers
                //Get the layerInfos list to be passed into the Legend constructor.
                //It will honor show/hide legend settings of each layer and will not include the basemap layers.
                layerInfo = esri.arcgis.utils.getLegendLayers({
                    map: this.appConfig.map,
                    itemInfo: this.appConfig.itemInfo
                });

                legendDijit = new Legend({
                    map: this.appConfig.map,
                    layerInfos: layerInfo
                }, domConstruct.create('legendDiv')).placeAt(this.rootDiv);
                legendHolder.set('content', legendDijit.domNode);
                legendDijit.startup();

                this.inherited(arguments);

            } catch (error) {
                this.log("LGDijitLegendBox_1: " + error.toString());
            }
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
                        target = dom.byId(task.rootId);
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

    dojo.declare("js.LGButton", js.LGGraphic, {
        /**
         * Constructs an LGButton.
         *
         * @constructor
         * @class
         * @name js.LGButton
         * @extends js.LGGraphic
         * @classdesc
         * Builds and manages a UI object that represents a button.
         */
        constructor: function () {
            var attrs, colorizer;

            if (this.iconJson) {
                // Get the coloring
                this.foregroundColor = "#000";
                this.hoverColor = "#00f";

                if (this.iconColorizerId) {
                    colorizer = dom.byId(this.iconColorizerId);
                    if (colorizer) {
                        colorizer = colorizer.getLGObject();
                        this.foregroundColor = colorizer.foregroundColor();
                        this.hoverColor = colorizer.hoverColor();
                    }
                }

                // Use theme without hover
                this.applyTheme(false);

                this.rootDiv.surface = this.createSVGIcon(this.iconJson);

                // Manually handle hover
                on(this.rootDiv, "mouseover", lang.hitch(this, function (evt) {
                    this.onMouseOver(evt);
                }));
                on(this.rootDiv, "mouseout", lang.hitch(this, function (evt) {
                    if (this.mouseOut(evt)) {
                        this.onMouseOut(evt);
                    }
                }));

            } else {
                // Use theme with hover
                this.applyTheme(true);

                // If we have an icon, add it to the face of the button
                if (this.iconUrl) {
                    attrs = {src: this.iconUrl};
                    if (this.iconClass) {
                        attrs.className = this.iconClass;
                    }
                    this.iconImg = domConstruct.create("img", attrs, this.rootDiv);
                }
            }

            // If we have text, add it to the face of the button
            if (this.displayText) {
                attrs = {innerHTML: this.checkForSubstitution(this.displayText)};
                if (this.displayTextClass) {
                    attrs.className = this.displayTextClass;
                }
                domConstruct.create("div", attrs, this.rootDiv);
            }

            if (this.tooltip) {
                this.rootDiv.title = this.checkForSubstitution(this.tooltip);
            }
        },

        /**
         * Creates a 32x32 SVG item in the root div.
         * @param {object} definition JSON text describing the SVG item, e.g.,
         * "[{'shape':{'type':'circle','cx':13,'cy':13,'r':10},...,'style':'solid','width':2,'cap':'butt','join':4}}]"
         * Its color(s) for lines and text fill are ignored
         * @param {object} initialColor The initial color to be applied to the
         * item's vectors; uses this.foregroundColor if omitted or undefined
         * @return {object} The created SVG surface
         * @memberOf js.LGButton#
         */
        createSVGIcon: function (definition, initialColor) {
            var surface;

            // Create the vectors from the JSON description
            surface = gfx.createSurface(this.rootDiv, 32, 32);
            gfxUtils.fromJson(surface, definition);

            // Have to change the color of the icon from the beginning, regardless of the
            // color definition in the JSON description. Shouldn't be necessary, and isn't
            // necessary in the sample in the Dojo page
            // http://livedocs.dojotoolkit.org/dojox/gfx/utils/fromJson ,
            // but seems to be required in this app and in every sample that I've written.
            if (!initialColor) {
                initialColor = this.foregroundColor;
            }
            this.changeColor(surface, initialColor);

            // Apply any icon class from the configuration
            if (this.iconClass) {
                // domClass.add doesn't work with SVG node;
                // workaround by Simon Speich: https://bugs.dojotoolkit.org/ticket/16309
                surface.rawNode.setAttribute("class", this.iconClass);
            }

            return surface;
        },

        /**
         * Performs the object's mouse over action
         * @param {object} evt A mouseover event
         * @memberOf js.LGButton#
         */
        onMouseOver: function (evt) {
            // Manually handle hover by changing the color of the vectors
            // Note that "this" refers to the LGButton
            this.changeColor(evt.currentTarget.surface, this.hoverColor);
        },

        /**
         * Performs the object's mouse out action
         * @param {object} evt A mouseout event, pre-screened to be sure
         * that it's really a mouseout and not just passing over a nested
         * item
         * @memberOf js.LGButton#
         */
        onMouseOut: function (evt) {
            // Manually handle hover by changing the color of the vectors
            // Note that "this" refers to the LGButton
            this.changeColor(evt.currentTarget.surface, this.foregroundColor);
        },

        /**
         * Tests to see if the cursor is really leaving the target or if it is
         * just passing over a nested item.
         * @param {object} evt A mouseover event
         * @return {boolean} True if the cursor is really leaving the bounds of
         * the target
         * @memberOf js.LGButton#
         */
        mouseOut: function (evt) {
            // Dan
            // http://blog.syedgakbar.com/2012/08/html-nested-elements-onmouseout-event/
            // see also http://www.quirksmode.org/js/events_mouse.html
            // With comments added, changes to make it lintable, and catch for missing related target
            var child, target;

            // "The EventTarget whose EventListeners are currently being processed.
            // As the event capturing and bubbling occurs this value changes."
            // https://developer.mozilla.org/en-US/docs/Web/API/Event/Comparison_of_Event_Targets
            target = evt.currentTarget || evt.srcElement;

            // "which EventTarget the pointing device exited to"
            // https://developer.mozilla.org/en-US/docs/Web/API/event.relatedTarget
            child = evt.relatedTarget || evt.toElement;

            // Fast mouse movement can cause us to miss the exit, so if there's no
            // related target, assume that we've exited
            if (!child) {
                return true;
            }

            // Run up the ancestry to see if we're still in the item
            while (child.parentElement) {
                if (target === child) {
                    return false;
                }
                child = child.parentElement;
            }
            return true;
        },

        /**
         * Changes the color of the children of an SVG surface.
         * @param {object} surface An SVG surface
         * @param {object} newColor The new color as "a named color, hex color,
         * linear gradient, or radial gradient"
         * (http://dojotoolkit.org/documentation/tutorials/1.9/gfx/)
         * @memberOf js.LGButton#
         */
        changeColor: function (surface, newColor) {
            array.forEach(surface.children, function (component) {
                // Text is filled
                if (component.shape.type === "text") {
                    component.setFill(newColor);

                // Lines are stroked
                } else {
                    var stroke = component.getStroke();
                    stroke.color = newColor;
                    component.setStroke(stroke);
                }
            });
        }

    });

    //========================================================================================================================//

    dojo.declare("js.LGRadioButton", js.LGButton, {
        /**
         * Constructs an LGRadioButton.
         *
         * @constructor
         * @class
         * @name js.LGRadioButton
         * @extends js.LGButton
         * @classdesc
         * Builds and manages a UI object that represents a pushbutton,
         * a button that shows on and off states, that participates in
         * a radiobutton control.
         */
        constructor: function () {
            // Set the initial state
            this.isOn = this.toBoolean(this.isOn, false);
            this.setIsOn(this.isOn);

            // Placeholder for radiobutton controller integration
            this.controller = null;

            // Use clicks to toggle state
            on(this.rootDiv, "click", this.handleClick);
        },

        /**
         * Sets the radiobutton controller for this button.
         * @param {object} controllerToUse Controller object
         * @memberOf js.LGRadioButton#
         */
        setController: function (controllerToUse) {
            this.controller = controllerToUse;
        },

        /**
         * Sets the button into the on or off state.
         * @param {boolean} isOn Indicates if button should be on (true)
         *        or off
         * @memberOf js.LGRadioButton#
         */
        setIsOn: function (isOn) {
            this.isOn = isOn;

            if (this.rootDiv.surface) {
                if (this.isOn) {
                    this.changeColor(this.rootDiv.surface, this.hoverColor);
                } else {
                    this.changeColor(this.rootDiv.surface, this.foregroundColor);
                }

            } else {
                if (this.isOn) {
                    this.applyThemeAltBkgd(true);
                } else {
                    this.applyTheme(true);
                }
            }
        },

        /**
         * Performs the object's mouse over action
         * @param {object} evt A mouseover event
         * @memberOf js.LGRadioButton#
         * @override
         */
        onMouseOver: function (evt) {
            if (this.rootDiv.surface) {
                // Manually handle hover by changing the color of the vectors
                // Note that "this" refers to the LGButton
                if (!this.isOn) {
                    this.changeColor(this.rootDiv.surface, this.hoverColor);
                }
            } else {
                this.inherited(arguments);
            }
        },

        /**
         * Performs the object's mouse out action
         * @param {object} evt A mouseout event, pre-screened to be sure
         * that it's really a mouseout and not just passing over a nested
         * item
         * @memberOf js.LGRadioButton#
         * @override
         */
        onMouseOut: function (evt) {
            if (this.rootDiv.surface) {
                // Manually handle hover by changing the color of the vectors
                // Note that "this" refers to the LGButton
                if (!this.isOn) {
                    this.changeColor(this.rootDiv.surface, this.foregroundColor);
                }
            } else {
                this.inherited(arguments);
            }
        },

        /**
         * Handles a click event.
         * @param {object} evt Click event
         * @this {js.LGRadioButton's rootDiv or subclass instance}
         * @private
         * @memberOf js.LGRadioButton#
         */
        handleClick: function (evt) {
            var obj = evt.currentTarget.getLGObject();
            if (obj.controller) {
                obj.controller.selectMember(obj);
            }
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGRadioButtonController", js.LGObject, {
        /**
         * Constructs an LGRadioButtonController.
         *
         * @constructor
         * @class
         * @name js.LGRadioButtonController
         * @extends LGObject
         * @classdesc
         * Manages a set of objects so that one and only one
         * is selected.
         */
        constructor: function () {
            this.members = [];
            this.currentMember = null;
        },

        /**
         * Adds an object to the controller's control and calls the
         * object's setController function to establish a backlink.
         * @param {object} controllee Object to control
         * @memberOf js.LGRadioButtonController#
         */
        addMember: function (controllee) {
            this.members.push(controllee);
            controllee.setController(this);
        },

        /**
         * Selects one of the controller's objects.
         * @param {number|string|object} selection Object to select; if
         *        number, it is the zero-based index of controllees
         *        (indexed in order of insertion); if string, it is a
         *        controllee value to search (the first found is
         *        selected); if an object, it is matched by rootId to
         *        controllees (the first found is selected)
         * @memberOf js.LGRadioButtonController#
         */
        selectMember: function (selection) {
            var idOfNewSelected, pThis = this;

            // Clear current selection
            if (this.currentMember) {
                this.currentMember.setIsOn(false);
                this.currentMember = null;
            }

            // Convert index-based selection to an item
            if (typeof selection === "number") {
                if (this.members.length > 0) {
                    selection = Math.max(0, Math.min(selection, pThis.members.length - 1));
                    pThis.currentMember = pThis.members[selection];
                    pThis.currentMember.setIsOn(true);
                }

            // Switch the selection to the member with the specified value
            } else if (typeof selection === "string") {
                array.some(this.members, function (member) {
                    if (member.value === selection) {
                        pThis.currentMember = member;
                        pThis.currentMember.setIsOn(true);
                        return true;
                    }
                    return false;
                });

            // Switch to the supplied selection by id
            } else if (selection) {
                idOfNewSelected = selection.rootId;
                array.some(this.members, function (member) {
                    if (member.rootId === idOfNewSelected) {
                        pThis.currentMember = member;
                        pThis.currentMember.setIsOn(true);
                        return true;
                    }
                    return false;
                });
            }
        },

        /**
         * Returns the currently-selected controllee.
         * @return {object} Current controllee or null
         * @memberOf js.LGRadioButtonController#
         */
        getCurrentMember: function () {
            return this.currentMember;
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGCommand", [js.LGButton, js.LGDependency], {
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
         * @extends js.LGButton, js.LGDependency
         * @classdesc
         * Builds and manages a UI object that represents a command.
         */
        constructor: function () {
            // Hook up a click on the root div to the click handler; we use the root div so that
            // one can click outside of the icon and text
            if (this.publish) {
                this.clickHandler = on(this.rootDiv, "click", this.handleClick);
            }

            this.setUpWaitForDependency("js.LGCommand");
        },

        /**
         * Performs class-specific setup before waiting for a
         * dependency.
         * @memberOf js.LGCommand#
         * @override
         */
        onDependencyPrep: function () {
            // Make command invisible until dependency resolved
            this.setIsVisible(false);
            this.inherited(arguments);
        },

        /**
         * Performs class-specific setup when the dependency is
         * satisfied.
         * @memberOf js.LGCommand#
         * @override
         */
        onDependencyReady: function () {
            // Make command invisible until dependency resolved
            this.setIsVisible(true);
            this.inherited(arguments);
        },

        /**
         * Handles a click event.
         * @param {object} evt Click event
         * @this {rootDiv of js.LGCommand's rootDiv or subclass instance}
         * @private
         * @memberOf js.LGCommand#
         */
        handleClick: function (evt) {
            var obj = evt.currentTarget.getLGObject();
            obj.publishMessage("command", obj.publish);
            obj.publishMessage(obj.publish, obj.publishArg);
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGCommandToggle", js.LGCommand, {
        /**
         * Constructs an LGCommandToggle.
         *
         * @constructor
         * @class
         * @name js.LGCommandToggle
         * @extends js.LGCommand
         * @classdesc
         * Builds and manages a UI object that represents a command that
         * can toggle its enabled and/or visibility states.
         */
        constructor: function () {
            var pThis = this;

            // Create the button's disabled-state icon as SVG or image
            if (this.rootDiv.surface) {
                if (domClass.contains(document.body, "okIE")) {
                    this.iconDisabledJson = this.iconDisabledJson || this.iconJson;
                    this.rootDiv.surface2 = this.createSVGIcon(this.iconDisabledJson);
                }
            } else {
                this.iconDisabledUrl = this.iconDisabledUrl || this.iconUrl;
            }

            // Set initial state
            this.isEnabled = this.toBoolean(this.isEnabled, true);
            pThis.setIsEnabled(this.isEnabled);

            this.isVisible = this.toBoolean(this.isVisible, true);
            pThis.setIsVisible(this.isVisible);

            // Handle enable/disable triggers
            if (this.triggerEnable) {
                this.subscribeToMessage(this.triggerEnable, function () {
                    pThis.isEnabled = true;
                    pThis.setIsEnabled(pThis.isEnabled);
                });
            }
            if (this.triggerDisable) {
                this.subscribeToMessage(this.triggerDisable, function () {
                    pThis.isEnabled = false;
                    pThis.setIsEnabled(pThis.isEnabled);
                });
            }

            // Handle visible/invisible triggers
            if (this.triggerVisible) {
                this.subscribeToMessage(this.triggerVisible, function () {
                    pThis.isVisible = true;
                    pThis.setIsVisible(pThis.isVisible);
                });
            }
            if (this.triggerInvisible) {
                this.subscribeToMessage(this.triggerInvisible, function () {
                    pThis.isVisible = false;
                    pThis.setIsVisible(pThis.isVisible);
                });
            }

            this.setUpWaitForDependency("js.LGCommandToggle");
        },

        /**
         * Enables or disables the command.
         * @param {boolean} isEnabled Indicates if graphic should be
         *        enabled (true) or disabled
         * @memberOf js.LGCommandToggle#
         */
        setIsEnabled: function (isEnabled) {
            this.isEnabled = isEnabled;

            // For an SVG icon, switch between the two SVG surfaces
            if (this.rootDiv.surface) {
                if (domClass.contains(document.body, "okIE")) {
                    if (this.isEnabled) {
                        domStyle.set(this.rootDiv.surface.rawNode, "display", "inline-block");
                        domStyle.set(this.rootDiv.surface2.rawNode, "display", "none");
                    } else {
                        domStyle.set(this.rootDiv.surface.rawNode, "display", "none");
                        domStyle.set(this.rootDiv.surface2.rawNode, "display", "inline-block");
                    }
                }

            // For an image icon, switch between the two icon URLs and also enable/disable hover
            } else {
                if (this.isEnabled) {
                    this.iconImg.src = this.iconUrl;
                    domClass.add(this.rootDiv, "appThemeHover");
                } else {
                    this.iconImg.src = this.iconDisabledUrl;
                    domClass.remove(this.rootDiv, "appThemeHover");
                }
            }
        },

        /**
         * Handles a click event.
         * @param {object} evt Click event
         * @this {js.LGCommandToggle's rootDiv or subclass instance}
         * @private
         * @memberOf js.LGCommandToggle#
         * @override
         */
        handleClick: function (evt) {
            var obj = evt.currentTarget.getLGObject();

            if (obj.isEnabled) {
                obj.inherited("handleClick", arguments);
            }
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
            this.subscribeToMessage(this.sameWinTrigger, function (url) {
                if (url) {
                    window.open(url, "_parent");
                }
            });
            this.subscribeToMessage(this.newWinTrigger, function (url) {
                if (url) {
                    window.open(url, "_blank");
                }
            });
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGPrintMap", js.LGMapBasedMenuBox, {
        /**
         * Constructs an LGPrintMap.
         *
         * @constructor
         * @class
         * @name js.LGPrintMap
         * @extends LGMapBasedMenuBox
         * @classdesc
         * Prints the configured map.
         */
        constructor: function () {
            var landscapeBtn, portraitBtn, okBtn, pThis = this;

            // Set up the print dialog box
            this.radioButtonController = new js.LGRadioButtonController();

            landscapeBtn = new js.LGRadioButton({
                rootId: this.rootId + "_landscape",
                parentDiv: this.rootId,
                iconUrl: this.landscapeButtonIconUrl,
                iconJson: this.landscapeButtonIconJson,
                iconColorizerId: this.iconColorizerId,
                rootClass: this.orientationButtonClass,
                iconClass: this.orientationButtonIconClass,
                tooltip: this.checkForSubstitution(this.landscapeButtonTooltip),
                value: this.landscapeServerSpec
            });
            landscapeBtn.setIsVisible(true);
            this.radioButtonController.addMember(landscapeBtn);
            domStyle.set(landscapeBtn.rootDiv, "display", "inline-block");

            portraitBtn = new js.LGRadioButton({
                rootId: this.rootId + "_portrait",
                parentDiv: this.rootId,
                iconUrl: this.portraitButtonIconUrl,
                iconJson: this.portraitButtonIconJson,
                iconColorizerId: this.iconColorizerId,
                rootClass: this.orientationButtonClass,
                iconClass: this.orientationButtonIconClass,
                tooltip: this.checkForSubstitution(this.portraitButtonTooltip),
                value: this.portraitServerSpec
            });
            portraitBtn.setIsVisible(true);
            this.radioButtonController.addMember(portraitBtn);
            domStyle.set(portraitBtn.rootDiv, "display", "inline-block");

            this.titleEntryTextBox = new TextBox({
                id: this.rootId + "_titleEntry",
                value: this.title,
                trim: true,
                placeHolder: this.titleHint || this.checkForSubstitution(this.titleHintDefault) || ""
            }).placeAt(this.rootId);
            domStyle.set(this.titleEntryTextBox.domNode, "width", "97%");
            domClass.add(this.titleEntryTextBox.domNode, this.titleClass);

            this.authorEntryTextBox = new TextBox({
                id: this.rootId + "_authorEntry",
                value: this.author,
                trim: true,
                placeHolder: this.authorHint || this.checkForSubstitution(this.authorHintDefault) || ""
            }).placeAt(this.rootId);
            domStyle.set(this.authorEntryTextBox.domNode, "width", "97%");
            domClass.add(this.authorEntryTextBox.domNode, this.authorClass);

            okBtn = new js.LGButton({
                rootId: this.rootId + "_doPrint",
                parentDiv: this.rootId,
                iconUrl: this.printButtonIconUrl,
                iconJson: this.printButtonIconJson,
                iconColorizerId: this.iconColorizerId,
                rootClass: this.printButtonClass,
                iconClass: this.printButtonIconClass,
                tooltip: this.checkForSubstitution(this.printButtonTooltip)
            });
            okBtn.setIsVisible(true);
            domStyle.set(okBtn.rootDiv, "display", "inline-block");

            this.radioButtonController.selectMember(0);

            // Await the OK from our dialog before launching print job
            on(okBtn.rootDiv, "click", function () {
                var opLayers, legendLayer, legendLayers = [], selectedLayout, printParams;

                // Broadcast status; our LGDropdownBox ancestor has already made our dialog box visible
                pThis.publishMessage(pThis.publishWorking);

                // Hide the dialog box; we don't need to have it take up space while
                // the server is off doing the print job
                pThis.setIsVisible(false);

                // Specify the map's operational layers for the legend
                opLayers = pThis.mapObj.getOperationalLayers();
                array.forEach(opLayers, function (opLayer) {
                    legendLayer = new LegendLayer();
                    legendLayer.layerId = opLayer.id;
                    legendLayers.push(legendLayer);
                });

                // Create print parameters with full template
                selectedLayout = pThis.radioButtonController.getCurrentMember();
                selectedLayout = selectedLayout ? selectedLayout.value : null;

                printParams = new PrintParameters();
                printParams.map = pThis.appConfig.map;
                printParams.outSpatialReference = pThis.appConfig.map.spatialReference;

                printParams.template = new PrintTemplate();
                printParams.template.format = pThis.format || "PDF";
                printParams.template.layout = selectedLayout || pThis.layout || "Letter ANSI A Landscape";
                printParams.template.layoutOptions = {
                    titleText: pThis.titleEntryTextBox.value,
                    authorText: pThis.authorEntryTextBox.value,
                    copyrightText: pThis.copyrightText,
                    legendLayers: legendLayers
                };
                printParams.template.preserveScale = pThis.toBoolean(pThis.preserveScale, false);
                printParams.template.showAttribution = true;

                // Run the job
                pThis.printTask.execute(printParams,
                    function (result) {
                        /* success */
                        // Broadcast status
                        pThis.publishMessage(pThis.publishPrintUrl, result.url);
                        pThis.publishMessage(pThis.publishReady);
                    }, function (error) {
                        /* failure */
                        // Broadcast status
                        pThis.publishMessage(pThis.publishReady);
                        pThis.log("Print failed: " + error.message, true);
                    }
                    );
            });

            this.setUpWaitForDependency("js.LGPrintMap");
        },

        /**
         * Checks that the instance has its prerequisites.
         * @throws {string} "no print task configured" if the the
         *        common configuration does not include a print
         *        task
         * @memberOf js.LGPrintMap#
         * @override
         */
        checkPrerequisites: function () {
            if (this.appConfig.helperServices &&
                    this.appConfig.helperServices.printTask &&
                    this.appConfig.helperServices.printTask.url) {
                this.printTask = new PrintTask(
                    this.appConfig.helperServices.printTask.url,
                    {
                        async: false  // depends on print service
                    }
                );
            } else {
                this.log("no print task configured");
                throw "no print task configured";
            }
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGFetchPrintedMap", [js.LGObject, js.LGMapDependency], {
        /**
         * Constructs an LGFetchPrintedMap.
         *
         * @constructor
         * @class
         * @name js.LGFetchPrintedMap
         * @extends js.LGObject, js.LGMapDependency
         * @classdesc
         * In response to a message, responds with another message with
         * the URL of the printed map.
         */
        constructor: function () {
            this.fetchPrintUrl = null;
            this.printAvailabilityTimeoutMinutes = this.toNumber(this.printAvailabilityTimeoutMinutes, 10);  // minutes
            this.printTimeouter = null;

            this.setUpWaitForDependency("js.LGFetchPrintedMap");
        },

        /**
         * Performs class-specific setup when the dependency is
         * satisfied.
         * @memberOf js.LGFetchPrintedMap#
         * @override
         */
        onDependencyReady: function () {
            var pThis = this;
            // Now that the map (our dependency) is ready, finish setup

            // Cache the URL to the print when triggered
            this.subscribeToMessage(this.triggerPrintUrl, function (url) {
                // Cancel any timeout we've got going
                clearTimeout(pThis.printTimeouter);

                // Make the URL available
                pThis.fetchPrintUrl = url;
                pThis.publishMessage(pThis.publishPrintAvailable);

                // Set up an expiration for this URL
                if (pThis.printAvailabilityTimeoutMinutes > 0) {
                    pThis.printTimeouter = setTimeout(function () {
                        pThis.publishMessage(pThis.publishPrintNotAvailable);
                    }, pThis.printAvailabilityTimeoutMinutes * 60000);
                }
            });

            // Fetch the print when triggered
            this.subscribeToMessage(this.trigger, function () {
                if (pThis.fetchPrintUrl !== null) {
                    pThis.publishMessage(pThis.publish, pThis.fetchPrintUrl);
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
            var pThis = this, backupTimeoutTimer,
                // Make backup timeout that's later than the geolocation timeout
                // so that we don't get overlapping timeouts. Also, the backup
                // timeout occurs if the user takes too long to decide to accept
                // or to deny the location request (no harm in this--just an alert
                // appears).
                cTimeout = 8000, cBackupTimeout = 16000;  // timeouts are in ms

            // Object is ready only if geolocation is supported
            this.ready = new Deferred();
            if (!Modernizr.geolocation) {
                this.ready.reject(pThis);

            } else {
                // Start listening for a position request
                this.subscribeToMessage(this.trigger, function () {

                    // Set a backup timeout because if one chooses "not now" for providing
                    // the position, the geolocation call does not return or time out
                    backupTimeoutTimer = setTimeout(function () {
                        alert(pThis.checkForSubstitution("@messages.geolocationTimeout"));
                    }, cBackupTimeout);

                    // Try to get the current position
                    navigator.geolocation.getCurrentPosition(function (position) {
                        clearTimeout(backupTimeoutTimer);

                        pThis.log("go to " + position.coords.latitude + " " + position.coords.longitude);
                        pThis.publishMessage(pThis.publish, new esri.geometry.Point(
                            position.coords.longitude,
                            position.coords.latitude,
                            new esri.SpatialReference({ wkid: 4326 })
                        ));
                    }, function (error) {
                        var message;
                        clearTimeout(backupTimeoutTimer);

                        // Report the location failure
                        switch (error.code) {
                        case error.PERMISSION_DENIED:
                            message = pThis.checkForSubstitution("@messages.geolocationDenied");
                            break;
                        case error.TIMEOUT:
                            message = pThis.checkForSubstitution("@messages.geolocationTimeout");
                            break;
                        default:
                            message = pThis.checkForSubstitution("@messages.geolocationUnavailable");
                            break;
                        }
                        alert(message);
                    }, {
                        timeout: cTimeout
                    });
                });
                this.ready.resolve(pThis);
            }
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
                this.busyIndicator = this.lgById(this.busyIndicator);
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
         * contains a label and an optional data structure.
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
            this.publishMessage(subject, data);
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

    dojo.declare("js.LGSearchAddress", [js.LGSearch, js.LGMapDependency], {
        /**
         * Constructs an LGSearchAddress.
         *
         * @constructor
         * @class
         * @name js.LGSearchAddress
         * @extends js.LGSearch, js.LGMapDependency
         * @classdesc
         * Provides a searcher for addresses.
         */
        constructor: function () {
            this.searcher = new Locator(this.searchUrl);
            this.searcher.outSpatialReference = new esri.SpatialReference({"wkid": this.outWkid});
            this.params = {};
            this.params.outFields = this.outFields;
            this.ready = new Deferred();

            this.setUpWaitForDependency("js.LGSearchAddress");
        },

        /**
         * Performs class-specific setup when the dependency is
         * satisfied.
         * @memberOf js.LGSearchAddress#
         * @override
         */
        onDependencyReady: function () {
            this.params.searchExtent = this.appConfig.map.extent;
            this.ready.resolve(this);
            this.inherited(arguments);
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
         * contains a label and an optional data structure.
         * @param {object} results Search-specific results
         * @param {string} [searchText] Search text
         * @return {array} List of structures; label is tagged with
         *         "label" and data is tagged with "data"
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
        },

        /**
         * Publishes the specified data after performing any post
         * processing.
         * @param {string} subject Publishing topic name
         * @param {object} data Object to publish under topic
         * @see Interface stub. The data are those set up by the toList
         *       function and could be final or intermediate results.
         *       For intermediate results, the publish function is the
         *       place for the searcher to complete the data-retrieval
         *       process before publishing.
         * @memberOf js.LGSearchAddress#
         * @override
         */
        publish: function (subject, data) {
            this.publishMessage(subject, data);
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGSearchFeatureLayer", [js.LGSearch, js.LGMapDependency], {
        /**
         * Constructs an LGSearchFeatureLayer.
         *
         * @constructor
         * @class
         * @name js.LGSearchFeatureLayer
         * @extends js.LGSearch, js.LGMapDependency
         * @classdesc
         * Provides a searcher for feature layers.
         */
        constructor: function () {
            if (!this.searchPattern || this.searchPattern.indexOf("${1}") < 0) {
                this.searchPattern = "%${1}%";
            }
            this.caseInsensitiveSearch = this.toBoolean(this.caseInsensitiveSearch, true);
            this.ready = new Deferred();

            // Normalize display field--it could be a string with a field, an empty string, or undefined
            if (this.displayField) {
                // In case a list of display fields is provided because of a mixup with LGFeatureLayer
                // vs. LGSearchFeatureLayerMultiplexer, just take the first field
                this.displayField = this.displayField.split(",")[0].trim();
            } else {
                this.displayField = "";
            }

            this.setUpWaitForDependency("js.LGSearchFeatureLayer");
        },

        /**
         * Performs class-specific setup when the dependency is
         * satisfied.
         * @memberOf js.LGSearchFeatureLayer#
         * @override
         */
        onDependencyReady: function () {
            // Now that the map (our dependency) is ready, get the URL of the search layer from it
            var searchLayer, reason, splitFields, availableFields = ",", opLayers,
                pThis = this, actualFieldList = [], generalOutFields;

            // Check that the search layer and fields exist
            if (this.searchLayerName) {
                try {
                    searchLayer = this.mapObj.getLayer(this.searchLayerName);
                    if (searchLayer && searchLayer.url) {
                        this.searchURL = searchLayer.url;

                        // Check for existence of fields; start with a list of fields in the search layer
                        array.forEach(searchLayer.fields, function (layerField) {
                            availableFields += layerField.name + ",";
                        });

                        // Only keep search fields that the layer has
                        if (this.searchFields && 0 < this.searchFields.length) {
                            splitFields = this.searchFields.split(",");
                            this.searchFields = [];
                            array.forEach(splitFields, function (searchField) {
                                pThis.searchFields.push(searchField.trim());
                            });

                            array.forEach(this.searchFields, function (searchField) {
                                if (availableFields.indexOf("," + searchField + ",") >= 0) {
                                    actualFieldList.push(searchField);
                                }
                            });
                        } else {
                            this.searchFields = [];
                        }

                        // Can we search for anything in this layer?
                        if (actualFieldList.length === 0) {
                            this.showSearchLayerFieldError(this.searchFields, this.searchLayerName, searchLayer);

                            this.ready.reject(this);
                            this.inherited(arguments);
                            return;
                        }

                        // Does the layer contain the requested display field?
                        if (this.displayField !== "" && availableFields.indexOf("," + this.displayField + ",") < 0) {
                            // Requested display field not found
                            this.showSearchLayerFieldError([this.displayField], this.searchLayerName, searchLayer);

                            this.displayField = "";
                        }

                        // If there are searchable fields, replace the requested search fields list with
                        // the available search fields list
                        this.searchFields = actualFieldList;

                        // Set up our query task now that we have the URL to the layer
                        this.objectIdField = searchLayer.objectIdField;
                        this.publishPointsOnly = (typeof this.publishPointsOnly === "boolean") ? this.publishPointsOnly : true;

                        this.searcher = new QueryTask(this.searchURL);

                        // Set up the general layer query task: pattern match
                        this.generalSearchParams = new Query();
                        this.generalSearchParams.returnGeometry = false;
                        this.generalSearchParams.outSpatialReference = this.appConfig.map.spatialReference;

                        generalOutFields = [searchLayer.objectIdField];
                        if (this.displayField !== "") {
                            generalOutFields = generalOutFields.concat(this.displayField);
                        }
                        this.generalSearchParams.outFields = generalOutFields.concat(this.searchFields);

                        // Set up the specific layer query task: object id
                        this.objectSearchParams = new Query();
                        this.objectSearchParams.returnGeometry = true;
                        this.objectSearchParams.outSpatialReference = this.appConfig.map.spatialReference;
                        this.objectSearchParams.outFields = ["*"];

                        // Get the popup for this layer & save it with the layer
                        opLayers = this.appConfig.itemInfo.itemData.operationalLayers;
                        array.some(opLayers, function (layer) {
                            if (layer.title === pThis.searchLayerName) {
                                pThis.layer = layer;
                                pThis.popupTemplate = new PopupTemplate(layer.popupInfo);
                                return true;
                            }
                            return false;
                        });

                        this.log("Search layer " + this.searchLayerName + " set up for queries");
                        this.ready.resolve(this);
                        this.inherited(arguments);
                        return;
                    }
                } catch (error) {
                    reason = error.toString();
                }
            }

            // Failed to find the search layer; provide some feedback
            this.showSearchLayerError(this.searchLayerName, reason);

            this.ready.reject(this);
            this.inherited(arguments);
        },

        /**
         * Determines if a layer can be queried.
         * @param {string} searchLayerName Name of layer to check
         * @return {boolean} false if layer is definitely not queryable
         * @memberOf js.LGSearchFeatureLayer#
         */
        isSearchableLayer: function (searchLayerName) {
            var isSearchable = false, searchLayerObject;

            searchLayerObject = this.mapObj.getLayer(searchLayerName);
            if (searchLayerObject && searchLayerObject.url && searchLayerObject.fields) {
                isSearchable = true;
            }

            return isSearchable;
        },

        /**
         * Reports layers that don't appear in the map.
         * @param {string} searchLayerName Name to report for search layer
         * @param {string} [reason] Error message; if omitted, "@messages.searchLayerMissing"
         *        is used
         * @memberOf js.LGSearchFeatureLayer#
         */
        showSearchLayerError: function (searchLayerName, reason) {
            var message, searchLayer, pThis = this;

            message = "\"" + (searchLayerName || "") + "\"<br>";
            searchLayer = this.mapObj.getLayerMeta(searchLayerName);
            if (searchLayer && !this.isSearchableLayer(searchLayerName)) {
                // For a search layer with no available fields, just show its name and
                // some guidance about what to do
                message += this.checkForSubstitution("@messages.searchLayerNotSearchable");

            } else {
                if (!reason) {
                    reason = this.checkForSubstitution("@messages.searchLayerMissing");
                }
                message += reason;
            }

            // Add map layers to message
            message += "<br><hr>" + this.checkForSubstitution("@prompts.mapLayers") + "<br><ul>";
            array.forEach(this.mapObj.getLayerNameList(), function (layerName) {
                if (pThis.isSearchableLayer(layerName)) {
                    message += "<li>\"" + layerName + "\"</li>";
                }
            });
            message += "</ul>";

            // Log it
            this.log(message, true);
        },

        /**
         * Reports fields that don't appear in the search layer.
         * @param {array} candidateFields List of fields requested for search or for display
         * @param {string} searchLayerName Name to report for search layer
         * @param {object} searchLayer Details of search layer as returned from map;
         *        function uses searchLayer.fields
         * @memberOf js.LGSearchFeatureLayer#
         */
        showSearchLayerFieldError: function (candidateFields, searchLayerName, searchLayer) {
            var reason = "", message;

            if (searchLayer.fields) {
                // List the requested fields
                array.forEach(candidateFields, function (field) {
                    if (reason.length > 0) {
                        reason += ",";
                    }
                    reason += field;
                });

                // Add a message to the field list
                message = "\"" + reason + "\"<br>";
                if (candidateFields.length > 1) {
                    message += this.checkForSubstitution("@messages.allSearchFieldsMissing");
                } else {
                    message += this.checkForSubstitution("@messages.searchFieldMissing");
                }

                // Add the search layer name and a list of available fields in that layer
                message += "<br><hr>\"" + searchLayerName + "\"<br>";
                message += this.checkForSubstitution("@prompts.layerFields") + "<br><ul>";
                array.forEach(searchLayer.fields, function (layerField) {
                    message += "<li>\"" + layerField.name + "\"</li>";
                });
                message += "</ul>";

                // Log it
                this.log(message, true);

            } else {
                // For a search layer with no available fields, just show its name and
                // some guidance about what to do
                this.showSearchLayerError(searchLayerName);
            }
        },

        /**
         * Launches a search.
         * @param {string|geometry} searchText Text to search
         * @param {function} callback Function to call when search
         *        results arrive; function takes the results as its sole
         *        argument
         * @memberOf js.LGSearchFeatureLayer#
         * @override
         */
        search: function (searchText, callback, errback) {
            var processedSearchText,
                searchParam = "",
                attributePattern,
                attributeSeparator = "",
                attributeSeparatorReset = "  OR  ";  // thanks to Tim H.: single spaces don't work with some DBs

            // Prepare the search term and the search query pattern for the desired casing handling
            if (this.caseInsensitiveSearch === true) {
                processedSearchText = searchText.toUpperCase();
                attributePattern = "UPPER(${0}) LIKE '" + this.searchPattern + "'";
            } else {
                processedSearchText = searchText;
                attributePattern = "${0} LIKE '" + this.searchPattern + "'";
            }

            // Escape single quotes, which are used to bound the search term in the query
            processedSearchText = processedSearchText.replace(/'/g, "''");

            // Replace the search term into the search query for each field to be searched
            array.forEach(this.searchFields, function (searchField) {
                searchParam = searchParam + attributeSeparator
                    + dojo.string.substitute(attributePattern, [searchField, processedSearchText]);
                attributeSeparator = attributeSeparatorReset;
            });

            // Launch the combined query
            if (0 < searchParam.length) {
                this.generalSearchParams.where = searchParam;
                this.searcher.execute(this.generalSearchParams, callback, errback);
            }
        },

        /**
         * Formats results into a list of structures; each structure
         * contains a label and an optional data structure.
         * @param {object} results Search-specific results
         * @param {string} searchText Search text
         * @return {array} List of structures; label is tagged with
         *         "label" and data is tagged with "data"
         * @memberOf js.LGSearchFeatureLayer#
         * @override
         */
        toList: function (results, searchText) {
            var pThis = this, resultsList = [], possibleLabel, representativeLabel,
                processedSearchText = searchText.toUpperCase();

            if (results && results.features && 0 < results.features.length) {
                // Create the results list
                array.forEach(results.features, function (item) {

                    // Use the display field for representing the results if possible
                    representativeLabel = "";
                    if (item.attributes[pThis.displayField]) {
                        representativeLabel = item.attributes[pThis.displayField].toString();
                    } else {
                        // Test each non-null search field result and pick the first one
                        // that contains the search string as our label
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
                    }

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
            this.layer.layerObject.queryFeatures(this.objectSearchParams, function (results) {
                if (results && results.features && 0 < results.features.length) {
                    item = results.features[0];

                    // Assign the layer's popup (if any) to the item
                    item.infoTemplate = pThis.popupTemplate;

                    // Assign the layer to the item
                    item._graphicsLayer = pThis.layer.layerObject;

                    if (pThis.publishPointsOnly) {
                        // Find a point that can be used to represent this item
                        representativeData = pThis.getRepresentativePoint(item.geometry);
                    } else {
                        representativeData = item;
                    }

                    pThis.publishMessage(subject, representativeData);
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

    dojo.declare("js.LGSearchMultiplexer", js.LGSearch, {
        /**
         * Constructs an LGSearchMultiplexer.
         *
         * @constructor
         * @class
         * @name js.LGSearchMultiplexer
         * @extends js.LGSearch
         * @classdesc
         * Provides a searcher that multiplexes the work of other searchers.
         */
        constructor: function () {
            var pThis = this, deferralWaitList;
            this.ready = new Deferred();

            // Create list of searchers
            deferralWaitList = this.createSearchersList();

            // We're ready once all of our searchers are ready
            (new DeferredList(deferralWaitList)).then(
                function (results) {
                    // Did all succeed?
                    var ok = array.every(results, function (result) {
                        return result[0];
                    });

                    if (ok) {
                        pThis.ready.resolve(pThis);
                    } else {
                        pThis.ready.reject(pThis);
                    }
                }
            );
        },

        /**
         * Launches a search of the instance's search type.
         * Initializes the object's list of searchers.
         * @return {object} List of deferrals, with one per searcher
         * @memberOf js.LGSearchMultiplexer#
         */
        createSearchersList: function () {
            var pThis = this, deferralWaitList = [];
            this.searchers = [];

            // Get our searchers and build a list of their ready state deferrals
            this.searchers = [];
            if (this.searcherNames) {
                array.forEach(this.searcherNames, function (searcherName) {
                    var searcher = pThis.lgById(searcherName);
                    if (searcher) {
                        pThis.searchers.push(searcher);
                        deferralWaitList.push(searcher.ready);
                    }
                });
            }

            return deferralWaitList;
        },

        /**
         * Launches a search of the instance's search type.
         * @param {string|geometry} searchText Text or geometry to search
         * @param {function} callback Function to call when search
         *        results arrive; function takes the results as its sole
         *        argument
         * @memberOf js.LGSearchMultiplexer#
         * @override
         */
        search: function (searchText, callback, errback) {
            var mergedResultsList = [],
                searchersDoneWaitList = [];

            // Send the search text to each of our searchers
            array.forEach(this.searchers, function (searcher, i) {
                var searcherIsDone = new Deferred();
                searchersDoneWaitList.push(searcherIsDone);
                searcher.search(searchText, function (results) {
                    // Add the index of the searcher to the results so that we're
                    // able to do searcher-specific post-processing upon publishing
                    var searcherResultsList = searcher.toList(results, searchText);
                    searcherResultsList = array.map(searcherResultsList, function (item) {
                        var newItem,
                            supplementedData = {
                                iSearcher: i,
                                itemData: item.data
                            };
                        newItem = {
                            data: supplementedData,
                            label: item.label
                        };
                        return newItem;
                    });
                    mergedResultsList = mergedResultsList.concat(searcherResultsList);
                    searcherIsDone.resolve();

                }, function (error) {
                    searcherIsDone.reject(error);
                });

            });

            // Call the callback when all of our searchers are done
            (new DeferredList(searchersDoneWaitList)).then(
                function (results) {
                    var ok = true;

                    // If at least one searcher failed, call the errback
                    if (errback) {
                        ok = !array.some(results, function (result) {
                            if (!result[0]) {
                                errback(result[1]);
                                return true;
                            }
                            return false;
                        });
                    }
                    // If all searchers succeeded, call the callback
                    if (ok && callback) {
                        callback(mergedResultsList);
                    }
                }
            );
        },

        /**
         * Formats results into a list of structures; each structure
         * contains a label and an optional data structure.
         * @param {object} results Search-specific results
         * @param {string} [searchText] Search text
         * @return {array} List of structures; label is tagged with
         *         "label" and data is tagged with "data"
         * @memberOf js.LGSearchMultiplexer#
         * @override
         */
        toList: function (results) {
            // Results have already been converted into a list in the search function,
            // so we can simply send them back
            return results;
        },

        /**
         * Publishes the specified data after performing any post
         * processing.
         * @param {string} subject Publishing topic name
         * @param {object} data Object to publish under topic
         * @see Interface stub. The data are those set up by the toList
         *       function and could be final or intermediate results.
         *       For intermediate results, the publish function is the
         *       place for the searcher to complete the data-retrieval
         *       process before publishing.
         * @memberOf js.LGSearchMultiplexer#
         * @override
         */
        publish: function (subject, data) {
            // Extract the searcher and the data packet and publish the data via the searcher
            this.searchers[data.iSearcher].publish(subject, data.itemData);
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGSearchFeatureLayerMultiplexer", [js.LGSearchMultiplexer, js.LGMapDependency], {
        /**
         * Constructs an LGSearchFeatureLayerMultiplexer.
         *
         * @constructor
         * @class
         * @name js.LGSearchFeatureLayerMultiplexer
         * @extends js.LGSearchMultiplexer, js.LGMapDependency
         * @classdesc
         * Provides a searcher that multiplexes the work of LGSearchFeatureLayer searchers,
         * selecting them by feature layer name
         */
        constructor: function () {
            this.setUpWaitForDependency("js.LGSearchFeatureLayerMultiplexer");
        },

        /**
         * Initializes the object's list of searchers.
         * @return {object} List of deferrals, with one per searcher
         * @memberOf js.LGSearchFeatureLayerMultiplexer#
         * @override
         */
        createSearchersList: function () {
            var deferralWaitList = [], featureLayerNames = [],
                featureDisplayFields = [], i, searcherName, searcher;
            this.searchers = [];

            // Get the list of layers & the list of display fields
            if (this.searchLayerName) {
                featureLayerNames = this.searchLayerName.split(",");
            }
            if (this.displayFields) {
                featureDisplayFields = this.displayFields.split(",");
            }

            // Construct the searchers and build a list of their ready state deferrals
            for (i = 0; i < featureLayerNames.length; i = i + 1) {
                searcherName = this.rootId + "_" + this.searchers.length;
                searcher = new js.LGSearchFeatureLayer({
                    appConfig: this.appConfig,
                    rootId: searcherName,
                    parentDiv: this.parentDiv,
                    dependencyId: this.dependencyId,
                    busyIndicator: this.busyIndicator,
                    publishPointsOnly: this.publishPointsOnly,
                    searchPattern: this.searchPattern,
                    caseInsensitiveSearch: this.caseInsensitiveSearch,
                    searchLayerName: featureLayerNames[i].trim(),
                    searchFields: this.searchFields,
                    displayField: featureDisplayFields[i]
                });
                this.searchers.push(searcher);
                deferralWaitList.push(searcher.ready);
            }

            return deferralWaitList;
        },

        /**
         * Performs class-specific setup when the dependency is
         * satisfied.
         * @memberOf js.LGSearchFeatureLayerMultiplexer#
         * @override
         */
        onDependencyReady: function () {
            // If we don't have any searchers, report the problem now that the map is ready
            if (this.searchers.length === 0) {
                this.showSearchLayerError("");
            }
        },

        /**
         * Determines if a layer can be queried.
         * @param {string} searchLayerName Name of layer to check
         * @return {boolean} false if layer is definitely not queryable
         * @memberOf js.LGSearchFeatureLayerMultiplexer#
         */
        isSearchableLayer: function (searchLayerName) {
            var isSearchable = false, searchLayerObject;

            searchLayerObject = this.mapObj.getLayer(searchLayerName);
            if (searchLayerObject && searchLayerObject.url && searchLayerObject.fields) {
                isSearchable = true;
            }

            return isSearchable;
        },

        /**
         * Reports layers that don't appear in the map.
         * @param {string} searchLayerName Name to report for search layer
         * @param {string} [reason] Error message; if omitted, "@messages.searchLayerMissing"
         *        is used
         * @memberOf js.LGSearchFeatureLayerMultiplexer#
         */
        showSearchLayerError: function (searchLayerName, reason) {
            var message, searchLayer, pThis = this;

            message = "\"" + (searchLayerName || "") + "\"<br>";
            searchLayer = this.mapObj.getLayerMeta(searchLayerName);
            if (searchLayer && !this.isSearchableLayer(searchLayerName)) {
                // For a search layer with no available fields, just show its name and
                // some guidance about what to do
                message += this.checkForSubstitution("@messages.searchLayerNotSearchable");

            } else {
                if (!reason) {
                    reason = this.checkForSubstitution("@messages.searchLayerMissing");
                }
                message += reason;
            }

            // Add map layers to message
            message += "<br><hr>" + this.checkForSubstitution("@prompts.mapLayers") + "<br><ul>";
            array.forEach(this.mapObj.getLayerNameList(), function (layerName) {
                if (pThis.isSearchableLayer(layerName)) {
                    message += "<li>\"" + layerName + "\"</li>";
                }
            });
            message += "</ul>";

            // Log it
            this.log(message, true);
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
         * list of results. Works with subclass of LGSearch, which provides
         * the searching and results formatting for this display.
         */
        constructor: function () {
            var pThis = this, textBoxId, resultsListBox, table, tableBody,
                searcher, lastSearchString, lastSearchTime, stagedSearch;

            textBoxId = this.rootId + "_entry";

            domConstruct.create("label",
                {"for": textBoxId, innerHTML: this.checkForSubstitution(this.showPrompt)}, this.rootId);
            this.searchEntryTextBox = new TextBox({
                id: textBoxId,
                value: "",
                trim: true,
                placeHolder: this.hint,
                intermediateChanges: true
            }).placeAt(this.rootId);
            domStyle.set(this.searchEntryTextBox.domNode, "width", "99%");

            resultsListBox = domConstruct.create("div",
                {className: this.resultsListBoxClass}, this.rootId);
            table = domConstruct.create("table",
                {className: this.resultsListTableClass}, resultsListBox);
            tableBody = domConstruct.create("tbody",
                {className: this.resultsListBodyClass}, table);
            touchScroll(resultsListBox);

            searcher = this.lgById(this.searcher);
            lastSearchString = "";
            lastSearchTime = 0;
            stagedSearch = null;

            // Run a search when the entry text changes
            on(this.searchEntryTextBox, "change", function () {
                var searchText = pThis.searchEntryTextBox.get("value");
                if (lastSearchString !== searchText) {
                    lastSearchString = searchText;
                    domConstruct.empty(tableBody);

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
                                domConstruct.empty(tableBody);  // to get rid of searching indicator
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
                                domConstruct.empty(tableBody);  // to get rid of searching indicator
                            });
                        }, 1000);
                    }
                }
            });
        },

        /**
         * Toggles the graphic's visibility
         * @memberOf js.LGSearchBoxByText#
        * @override
         */
        toggleVisibility: function () {
            this.inherited(arguments);
            if (this.getIsVisible()) {
                this.searchEntryTextBox.focus();
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
                this.busyIndicator = this.lgById(this.busyIndicator);
            }
            this.subscribeToMessage(this.trigger, function () {
                pThis.share();
            });
        },

        /**
         * Performs sharing steps:  get URL, compress it, publish
         * result.
         * @memberOf js.LGShare
         */
        share: function () {
            var pThis = this, subjectLine, urlToShare, compressionUrl;
            subjectLine = encodeURIComponent(this.getSubject()) || "%20";  // an empty subject line breaks mailto:
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
                            shareUrl = esri.substitute({subject: subjectLine, url: tinyUrl}, pThis.shareUrl);
                            pThis.publishMessage(pThis.publish, shareUrl);
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
                urlToShare = esri.substitute({subject: subjectLine, url: urlToShare}, this.shareUrl);
                this.publishMessage(this.publish, urlToShare);
            }
        },

        /**
         * Returns the subject message to use in the sharing.
         * @return {string} subject
         * @memberOf js.LGShare
         */
        getSubject: function () {
            return "";
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

    dojo.declare("js.LGShareAppExtents", [js.LGShare, js.LGMapDependency], {
        /**
         * LGShareAppExtents
         *
         * @constructor
         * @class
         * @name js.LGShareAppExtents
         * @extends js.LGShare, js.LGMapDependency
         * @classdesc
         * Extends simple sharing to include the app's map's current
         * extents.
         */
        constructor: function () {
            this.setUpWaitForDependency("js.LGShareAppExtents");
        },

        /**
         * Returns the subject message to use in the sharing.
         * @return {string} subject
         * @memberOf js.LGShareAppExtents
         * @override
         */
        getSubject: function () {
            var subjectText = "";
            if (this.subject) {
                subjectText = this.checkForSubstitution(this.subject);
            }
            return subjectText;
        },

        /**
         * Returns the app's URL and its extents as the item to share.
         * @return {string} URL
         * @memberOf js.LGShareAppExtents
         * @override
         */
        getUrlToShare: function () {
            var baseUrl = this.getAppUrl();
            return baseUrl + (baseUrl.indexOf("?") < 0 ? "?" : "&") + this.getMapExtentsArg();
        },

        /**
         * Gets the app's map's extents.
         * @return {string} Extents as supplied by LGMap's
         *         getMapExtentsAsString()
         * @memberOf js.LGShareAppExtents
         */
        getMapExtentsArg: function () {
            return "ex=" + this.mapObj.getMapExtentsAsString();
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGFilterLayers1", js.LGMapBasedMenuBox, {
        /**
         * Constructs an LGFilterLayers1.
         *
         * @constructor
         * @class
         * @name js.LGFilterLayers1
         * @extends LGMapBasedMenuBox
         * @classdesc
         * Filters layers that have a specified field by setting definition expressions using that field.
         */
        constructor: function () {
            this.layers = [];
            this.switchDelayTimer = null;
            if (this.busyIndicator) {
                this.busyIndicator = this.lgById(this.busyIndicator);
            }

            // A delay between switches is needed with the current version of the JSAPI;
            // IE requires a potentially larger delay, especially initially
            this.switchDelayTimer = null;
            this.switchDelaySecs = 1000 * this.toNumber(this.nonieSwitchDelaySecs, 1.5);
            this.switchDelayMultiplier = 1;
            /*@cc_on
                this.switchDelaySecs = 1000 * this.toNumber(this.ieSwitchDelaySecs, 3.0);
                this.switchDelayMultiplier = 3;  // we'll reset this to 1 after the first use
            @*/

            this.setUpWaitForDependency("js.LGFilterLayers1");
        },

        /**
        * Performs class-specific setup when the dependency is
        * satisfied.
        * @memberOf js.LGFilterLayers1#
        * @override
        */
        onDependencyReady: function () {
            var field1EntryTextBox;

            if (this.fieldname1) {
                // Build a list of layers that contain the managed field.
                // Loop through all the operation layers added to the map. If layer type is Feature layer, find if layer has
                // the managed field.  If so, push the field type and layer object to an array of objects.
                array.forEach(this.appConfig.itemInfo.itemData.operationalLayers, lang.hitch(this, function (mapLayer) {
                    var field, layerAndDefExpObject;

                    if (mapLayer.layerObject) {
                        if (mapLayer.layerObject.type === "Feature Layer") {
                            for (field = 0; field < mapLayer.layerObject.fields.length; field += 1) {
                                if (mapLayer.layerObject.fields[field].name === this.fieldname1) {

                                    // Found a layer with the configured field; save the layer
                                    layerAndDefExpObject = {
                                        "layerObject": mapLayer.layerObject,
                                        "fieldType": mapLayer.layerObject.fields[field].type
                                    };
                                    this.layers.push(layerAndDefExpObject);

                                    break;
                                }
                            }
                        }
                    }
                }));

                // Provide a UI to change the filter
                domConstruct.create("label", {innerHTML: this.hint1},
                    domConstruct.create("div", {}, this.rootId));

                field1EntryTextBox = new TextBox({
                    id: this.rootId + "_field1",
                    value: this.value1,
                    trim: true,
                    placeHolder: this.hint1,
                    intermediateChanges: true
                }).placeAt(this.rootId);
                domStyle.set(field1EntryTextBox.domNode, "width", "99%");
                if (this.tooltip) {
                    field1EntryTextBox.set("title", this.checkForSubstitution(this.tooltip));
                }

                // Handle future changes to the filter; we accept intermediate changes so that the user doesn't have
                // to click away from the text box to apply the filter, but this means that we have to ignore the case
                // where the user has erased all content from the text box
                on(field1EntryTextBox, "change", lang.hitch(this, function () {
                    this.value1 = field1EntryTextBox.value;
                    this.onValueChanged();
                }));
            }

            // Do we have any layers with the filter field? If not, warn because no filtering will occur
            if (this.layers.length === 0) {
                this.setShowable(false);
                this.showFieldError(this.fieldname1);

            // Otherwise, set the initial definitions for the layers containing the managed field
            } else {
                this.applyFilter();
            }
        },

        /**
         * Reports all fields for all feature layers.
         * @param {string} fieldname A fieldname to report as missing
         * @memberOf js.LGFilterLayers1#
         */
        showFieldError: function (fieldname) {
            var message;

            message = "\"" + fieldname + "\"<br>";
            message += this.checkForSubstitution("@messages.fieldNotFound") + "<br><hr>";

            // Add map layers to message
            message += this.checkForSubstitution("@prompts.mapLayers") + "<br><ul>";

            array.forEach(this.appConfig.itemInfo.itemData.operationalLayers, lang.hitch(this, function (mapLayer) {
                var field;

                if (mapLayer.layerObject) {
                    if (mapLayer.layerObject.type === "Feature Layer") {
                        message += "<li>\"" + mapLayer.title + "\"<ul>";
                        for (field = 0; field < mapLayer.layerObject.fields.length; field += 1) {
                            message += "<li>\"" + mapLayer.layerObject.fields[field].name + "\"</li>";
                        }
                        message += "</ul></li>";
                    }
                }
            }));
            message += "</ul>";

            // Log it
            this.log(message, true);
        },

        /**
        * Loops through the layers array on which definition expression is applied and calls
        * setLayerDefinitionExpression with the new value.
        * @memberOf js.LGFilterLayers1#
        */
        onValueChanged: function () {
            // Set the definitions for the layers containing the managed field
            this.applyFilter();
        },

        /**
        * Loops through the layers array on which definition expression is applied and calls
        * setLayerDefinitionExpression with the new value.
        * @memberOf js.LGFilterLayers1#
        */
        applyFilter: function () {
            var pThis = this;

            // A delay between switches is needed with the current version of the JSAPI;
            // IE requires a potentially larger delay
            if (this.busyIndicator) {
                this.busyIndicator.setIsVisible(true);
            }
            if (this.switchDelayTimer !== null) {
                clearTimeout(this.switchDelayTimer);
            }
            this.switchDelayTimer = setTimeout(
                function () {
                    pThis.switchDelayTimer = null;
                    pThis.applyFilterCore();
                    if (pThis.busyIndicator) {
                        pThis.busyIndicator.setIsVisible(false);
                    }
                },
                this.switchDelaySecs * this.switchDelayMultiplier
            );
            this.switchDelayMultiplier = 1;
        },

        /**
        * Loops through the layers array on which definition expression is applied and calls
        * setLayerDefinitionExpression with the new value.
        * @memberOf js.LGFilterLayers1#
        */
        applyFilterCore: function () {
            array.forEach(this.layers, lang.hitch(this, function (layer) {
                this.setLayerDefinitionExpression(layer.layerObject, layer.fieldType);
                layer.layerObject.clearSelection();
            }));
        },

        /**
        * Filters the layer based on the definition expression
        * @param {object} layer Layer to be filtered
        * @param {string|integer} fieldType Type of the floor field
        * @memberOf js.LGFilterLayers1#
        */
        setLayerDefinitionExpression: function (layer, fieldType) {
            var defExpression = layer.defaultDefinitionExpression;
            try {
                if (this.value1 && this.value1 !== "") {
                    if (fieldType === "esriFieldTypeString") {
                        defExpression = string.substitute(this.defnExpression, {
                            "fieldname1": this.fieldname1,
                            "value1": "'" + this.value1 + "'"
                        });
                    } else if (fieldType === "esriFieldTypeInteger") {
                        defExpression = string.substitute(this.defnExpression, {
                            "fieldname1": this.fieldname1,
                            "value1": this.value1
                        });
                    }
                }
                layer.setDefinitionExpression(defExpression);
            } catch (ignore) {
            }
        }
    });

    //========================================================================================================================//

    dojo.declare("js.LGFilterLayers1WithDefaults", [js.LGFilterLayers1, js.LGDefaults], {
        /**
         * Constructs an LGFilterLayers1WithDefaults.
         *
         * @constructor
         * @class
         * @name js.LGFilterLayers1WithDefaults
         * @extends js.LGFilterLayers1, js.LGDefaults
         * @classdesc
         * Filters layers that have a specified field by setting definition expressions using that field and also
         * broadcasts changes to the field as a default.
         */
        constructor: function () {
            this.changeDefaults();

            this.setUpWaitForDependency("js.LGFilterLayers1WithDefaults");
        },

        /**
        * Loops through the layers array on which definition expression is applied and calls
        * setLayerDefinitionExpression with the new value.
        * @memberOf js.LGFilterLayers1WithDefaults#
        * @override
        */
        onValueChanged: function () {
            this.inherited(arguments);

            this.changeDefaults();
        },

        /**
         * Performs class-specific behavior to change and broadcast defaults.
         * @memberOf js.LGFilterLayers1WithDefaults#
         * @override
         */
        changeDefaults: function () {
            this.defaultValues.value1 = this.value1;
            this.defaultValues.fieldname1 = this.fieldname1;

            this.inherited(arguments);
        }
    });

    //========================================================================================================================//

});
