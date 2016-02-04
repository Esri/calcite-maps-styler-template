/*global define,document */
/*jslint sloppy:true,nomen:true */
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
"dojo/_base/lang",
"dojo/_base/array",

"dojo/Deferred",
"dojo/promise/all",

"dojo/on",
"dojo/query",
"dojo/string",
"dojo/parser",
"dojo/dom",
"dojo/dom-class",
"dojo/dom-construct",
"dojo/dom-style",

"dojo/text!./views/map.html",

"dijit/registry",

"esri/portal/Portal",

"esri/views/SceneView",
"esri/WebScene",

"esri/core/Scheduler",

"application/SlideList/SlideList",

"dijit/layout/ContentPane",

"dojo/domReady!"], function (
declare,
lang,
array,
Deferred,
all,
on,
query,
string,
parser,
dom,
domClass,
domConstruct,
domStyle,
mapTemplate,
registry,
Portal,
SceneView,
WebScene,
Scheduler,
SlideList,
ContentPane) {
    return declare(null, {
        config: {},
        linkHandler: null,
        views: [],
        startup: function (config) {
            // config will contain application and user defined info for the template such as i18n strings, the web map id
            // and application id
            // any url parameters and any application specific configuration information.
            if (config) {
                if(config.webGLSupport && config.webGLSupport.canSupport === false){
                  var error = new Error("Browser not supported <br>" + config.webGLSupport.helpMessage);
                  this.reportError(error);
                  return;
                }
                this.config = config;
                var scenes = [], sceneLength = 0, sceneIds;
                var isArray = lang.isArray(this.config.webscene);
                if(isArray && this.config.webscene.length && this.config.webscene.length >= 2){
                  scenes = this.config.webscene;
                }else if(isArray && this.config.webscene.length && this.config.webscene.length === 1){
                  scenes.push(this.config.webscene[0]);
                  scenes.push(this.config.webscene[0]);
                }else{
                  // Do we have two web scenes separated by a comma?
                  var mult = this.config.webscene.split(",");
                  if(mult && mult.length && mult.length >=2){
                    scenes.push(mult[0]);
                    scenes.push(mult[1]);
                  }else{
                    scenes.push(this.config.webscene);
                    scenes.push(this.config.webscene);
                  }

                }

                sceneLength = scenes.length;
                if(sceneLength >= 2){
                  sceneIds = scenes.splice(0,2);
                }else if(sceneLength === 1){
                  sceneIds =[scenes[0], scenes[0]];
                }else{
                  this.reportError(new Error("Main:: Specify scene id"));
                }
                this._createUI(sceneIds);
            } else {
                var error = new Error("Main:: Config is not defined");
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
                    node.innerHTML = this.config.i18n.scene.error + ": " + error.message;
                } else {
                    node.innerHTML = "Unable to create scene: " + error.message;
                }
            }
            return error;
        },
        _createUI: function(ids){
          var defs = [];
          array.forEach(ids, lang.hitch(this, function(id, index){
            var mapHTML = string.substitute(mapTemplate, {
                id: index
            });
            var area = index === 0 ? "leading" : "center";

            var pane = new ContentPane({
              content: mapHTML,
              region: area,
              className: "map-container"
            }).placeAt("container").startup();
            // Open the slide panel at startup if specified.
            if(this.config.panelsOpen){
              this._togglePanel(index);
            }
            // Toggle info view when button is clicked
            on(dom.byId("toggle_" + index), "click", lang.hitch(this, function(){
              this._togglePanel(index);
            }));

            defs.push(this._createWebScene(id, index));
          }));

          all(defs).then(lang.hitch(this, function(results){
            this._updateTheme();
            domClass.remove(document.body, "app-loading");
            array.forEach(results, lang.hitch(this, function(result){
              if(result.hasOwnProperty("viewingMode")){
                this.views.push(result);
              }
            }));
            if(this.config.link){
              this._linkViews();
            }
          }));

        },
        _linkViews: function(){
          // Sync/Unsync the view extents
          if(!this.linkHandler){
            // Link Views
            this.linkHandler = this._bindViews(this.views);
            // Switch to the unlink icon
             domClass.remove("linkViewBtn" , "icon-link-locked");
             domClass.add("linkViewBtn", "icon-link-unlocked");
             dom.byId("linkViewBtn").title = this.config.i18n.tools.unlinkLabel;
             // Remove any components from the second view
            this._updateViewComponents(false);
          }else{
            // Unlink Views
            this.linkHandler.remove();
            this.linkHandler = null;
            // Switch to the link icon
            domClass.add("linkViewBtn" , "icon-link-locked");
            domClass.remove("linkViewBtn", "icon-link-unlocked");
            dom.byId("linkViewBtn").title = this.config.i18n.tools.linkLabel;
            // Add components from the second view if needed
            this._updateViewComponents(true);
          }

        },
        _updateViewComponents: function(update){
          if(this.views && this.views.length && this.views.length === 2){
            var view = this.views[1];
            // Make sure the color theme is applied to both views. Once we've applied destroy the handler
            var updateHandle = view.watch("ui.components", lang.hitch(this, function(newValue, oldValue, property, object){
              if(newValue && newValue.length && newValue.length > 1){
                this._updateTheme();
                updateHandle.remove();
              }
            }));
            if(update){
              view.ui.components = this.config.components;
            }else{
              view.ui.components = ["attribution"];
            }
          }
        },
        _createWebScene: function (id, index) {
            var def = new Deferred();
            var scene = new WebScene({
                portalItem: {
                    id: id
                }
            });
            // Create views but only add zoom and compass to first view.
            var view = new SceneView({
                map: scene,
                container: "map_" + index
            });
            scene.then(lang.hitch(this, function(result){
              // Add content to the info panel (slides, title, desc)
              dom.byId("title_" + index).innerHTML = result.portalItem.title;
              dom.byId("desc_" + index).innerHTML = result.portalItem.snippet;
              // add slide carousel to the panel
              var slides = scene.presentation.slides;
              if(slides && slides.length && slides.length > 0){
                var options = {
                  scene: scene,
                  view: view,
                  color: this.config.slideColorTheme
                };
                var slideList = new SlideList(options, "carousel_"+ index);
                slideList.startup();
              }

              def.resolve(view);
            }), lang.hitch(this, function(error){
                def.resolve(error);
            }));

            if(index === 0){
              // add extent link option to the first map
              var linkBtn = domConstruct.create("button",{
                type: "button",
                id: "linkViewBtn",
                title: this.config.i18n.tools.linkLabel
              },"map_0");
              domClass.add(linkBtn,["link-btn","compare-map-btn","icon-link-locked", "theme"]);
              //view.ui.add(linkBtn, "top-left");
              on(linkBtn, "click", lang.hitch(this, this._linkViews));
            }

            return def.promise;
        },
        _togglePanel: function(index){
          // toggle the info panel when the toggle button is clicked
          domClass.toggle("details_" + index, "opened");
          domClass.toggle("toggle_" + index, "opened");
        },
        _updateTheme: function(){
          // Update the color theme of the widgets and slide gallery to match
          // the values specifed during app configuration
          query(".theme").forEach(lang.hitch(this, function(node){
              domStyle.set(node, {
                backgroundColor: this.config.backgroundColor,
                color: this.config.textColor
              });
          }));
          query(".esri-compass .esri-compass-container").forEach(lang.hitch(this, function(node){
            domStyle.set(node, {
              backgroundColor: this.config.backgroundColor,
              color: this.config.textColor
            });
          }));
          query(".esri-compass-icon").forEach(lang.hitch(this, function(node){
            domStyle.set(node, "fill", this.config.textColor);
          }));
          query(".esri-zoom .esri-button").forEach(lang.hitch(this, function(node){
            domStyle.set(node, {
              backgroundColor: this.config.backgroundColor,
              color: this.config.textColor
            });
          }));

        },
        _bindView: function(view, others) {
           others = Array.isArray(others) ? others : [others];

           var hdl;
           var hdl2;
           var otherInteractHandlers;
           var timer;

           var clear = function() {
             if (otherInteractHandlers) {
               otherInteractHandlers.forEach(function(h) {
                 h.remove();
               });
             }
             if (hdl) {
               hdl.remove();
             }
             if (hdl2) {
               hdl2.remove();
             }
             if (timer) {
               timer.remove();
             }
             otherInteractHandlers = hdl = hdl2 = timer = null;
           };

           var interactWatcher = view.watch("interacting,animation", function(newValue) {
             if (!newValue) {
               if (timer) {
                 timer.remove();
                 timer = null;
               }
               return;
             }
             if (hdl || timer) {
               return;
             }
             timer = Scheduler.schedule(function() {
               timer = null;
               hdl = view.watch("camera", function(newValue) {
                 others.forEach(function(v) {
                   v.camera = newValue;
                 });
               });
               otherInteractHandlers = others.map(function(v) {
                 return v.watch("stationary", function() {
                   if (!newValue) {
                     clear();
                   }
                 });
               });
               hdl2 = view.watch("stationary", function(newValue) {
                 if (newValue) {
                   clear();
                 }
               });
             });
           });
           return {
             remove: function() {
               this.remove = function() {};
               clear();
               interactWatcher.remove();
             }
           };
         },
        _bindViews: function(views){
          var hdls = views.map(lang.hitch(this, function(view, idx, views) {
            var others = views.concat();
            others.splice(idx, 1);
            return this._bindView(view, others);
          }));
          return {
            remove: function() {
              this.remove = function() {};
              hdls.forEach(function(h) {
                h.remove();
              });
              hdls = null;
            }
          };
        }
    });
});
