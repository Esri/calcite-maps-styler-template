define([
  "dojo/_base/declare", 
  "dojo/parser", 
  "dojo/_base/lang",
  "dojo/_base/array",
  "dojo/string",
  "dojo/_base/window",
  "dojo/on",
  "dojo/has",
  "dojo/Deferred",
  "dojo/dom",
  "dojo/dom-class",
  "dojo/dom-construct",
  "esri/domUtils",
  "esri/dijit/editing/Editor",
  "dijit/layout/BorderContainer",
  "dijit/layout/ContentPane"
  ],
    function(
      declare, 
      parser, 
      lang, 
      array,
      string, 
      win, 
      on, 
      has, 
      Deferred, 
      dom, 
      domClass, 
      domConstruct, 
      domUtils, 
      Editor,
      BorderContainer, 
      ContentPane
      ){
        var CreateContent =  declare("utilities.CreateContent",null,{
            isMobile: false,
            leftPanel: null,
            mainWindow: null,
            header: null,
            mapPane: null,
            displayButton:null,
            editableLayers:[],
            options:null,
            map: null,
            handler: null,
            timeFormats: ["shortDateShortTime","shortDateLEShortTime","shortDateShortTime24","shortDateLEShortTime24","shortDateLongTime",
                           "shortDateLELongTime","shortDateLongTime24","shortDateLELongTime24"], 
            constructor: function(args){
             (has("touch") && window.innerWidth <= 360) ? this.isMobile = true : this.isMobile = false;
              this.options = args;
  
      
            },
            createLayout: function(){
                var deferred = new Deferred();
                  this.mainWindow  =   new BorderContainer({
                        id: 'mainWindow',
                        design: 'headline',
                        gutters: false,
                        style: {
                            height: '100%',
                            width: '100%'
                        }
                    }).placeAt(win.body(), "first");

                  //add header pane if its a smart phone add a button and omit the subtitle 
                  var content = "";
                  if(!this.isMobile){
                    content = "<div id='title'></div><div id='subtitle'></div>";
                  }else{
                    var h = domConstruct.create("div",{id:"headerBar"});
                    //add a button to the header 
                    this.displayButton = domConstruct.create("a",{
                      id: "displayButton",
                      className: "headerButton leftButton"
                    },h);

                   domConstruct.create("span",{id: "title"},h);

                   var rightTools = domConstruct.create("span",{id:"rightTools"},h);


                   //toggle the panel content when button is clicked 
                   on(this.displayButton, "click",lang.hitch(this, function () {
                         var lp = dom.byId("leftPane");
                         lp.style.display === "none" ? domUtils.show(lp) : domUtils.hide(lp);     

                        //create the content (legend or editor) or toggle it 
                        //toggle the panel content 
                        if(!this.editorWidget){
                          this.createEditor();
  
                        }

                      }));
                    content = h;
                  }
                   this.header = new ContentPane({
                        id: "header",
                        region: "top",
                        content: content
                    }).placeAt(this.mainWindow);


                  //add map content
                   this.mapPane = new ContentPane({
                        id: "map",
                        region: "center"
                    }).placeAt(this.mainWindow);
              

                  //add  content pane for left content if desktop or tablet. For smart phones create a div that will be toggled.                   
                  if(!this.isMobile){
                   this.leftPanel = new ContentPane({
                        id: "leftPane",
                        region: "left"
                    }).placeAt(this.mainWindow);

                 }else{

                  this.leftPanel = domConstruct.create("div",{
                      id: "leftPane",
                      style: "display: none"
                    },"map");
                 }
                 //add a class for smartphones that applies slightly different styles 
                 if(this.isMobile){
                    domClass.add("mainWindow", "mobile");
                 }
                   this.mainWindow.startup();
                   deferred.resolve();
                   return deferred.promise;
            },
            addMobileButton: function(title, imageUrl){
                //add a button to the header 
                var content; 
                if(imageUrl){
                  content = string.substitute("<img src=${image} alt=${title} width=22 height=22/>",{"image":imageUrl, "title":title});
                }else{
                  content = title;
                }
                var mobileButton = domConstruct.create("a",{
                  innerHTML: content,
                  className: "headerButton rightButton"
                },dom.byId("rightTools") ,"last");
                return mobileButton;

            },
            setPanelContent: function( title, content, width){
               var deferred = new Deferred();
                if(this.isMobile){
                   dom.byId("displayButton").innerHTML = title;
                   domConstruct.place(content, this.leftPanel);
                   this.mainWindow.resize();
                   deferred.resolve();
                }else{
                  this.leftPanel.set("content" , content);
                  this.leftPanel.set("style", {width: width});
                  this.mainWindow.resize();
                  deferred.resolve();
                }
       
                 return deferred.promise;
            },
            updateButton: function(updatedTitle){
              if(this.isMobile){
                var b = dom.byId("displayButton");
                b.innerHTML = updatedTitle;
              }
            },
            showPanelContent: function(){
              //show panel content on mobile devices 
              if(this.isMobile){
               var lp = dom.byId("leftPane");
               domUtils.show(lp);
              }    
            },
            hidePanelContent: function(){
              //hide panel content on mobile devices 
              if(this.isMobile){
               var lp = dom.byId("leftPane");
               domUtils.hide(lp);
              }
            },
            getEditableLayers: function(layers,map){
              this.map = map;
                array.forEach(layers, lang.hitch(this,function(layer){

                    if(layer &&  layer.layerObject ){

                        var eLayer = layer.layerObject;
 
                        if(eLayer instanceof esri.layers.FeatureLayer && eLayer.isEditable()){

                              this.editableLayers.push({'featureLayer' : eLayer})   

                        }

                    }
                }));



                 //add field infos if applicable - this will contain hints if defined in the popup. Also added logic to hide fields that have visible = false. The popup takes 
                 //care of this for the info this but not for the edit this. 
                 array.forEach(this.editableLayers, lang.hitch(this, function(layer){
                    if(layer.featureLayer && layer.featureLayer.infoTemplate && layer.featureLayer.infoTemplate.info && layer.featureLayer.infoTemplate.info.fieldInfos){
                        //only display visible fields 
                        var fields = layer.featureLayer.infoTemplate.info.fieldInfos;
        
                        var fieldInfos = [];
                        array.forEach(fields, function(field){
                          if(field.visible){
                            fieldInfos.push(field);
                          }
                        });
                        layer.fieldInfos = fieldInfos;
                    }
                 }));


                return this.editableLayers         

            },

            createEditor: function(){
      
               //disconnect the popup handler
                  if(this.handler){
                    this.handler.remove();
                  }

                //add field infos if necessary. Field infos will contain hints if defined in the popup and hide fields where visible is set
                //to false. The popup logic takes care of this for the info window but not the edit window. 
                array.forEach(this.editableLayers, lang.hitch(this, function (layer) {
                    if (layer.featureLayer && layer.featureLayer.infoTemplate && layer.featureLayer.infoTemplate.info && layer.featureLayer.infoTemplate.info.fieldInfos) {
                        //only display visible fields 
                        var fields = layer.featureLayer.infoTemplate.info.fieldInfos;
                        var fieldInfos = [];
                        array.forEach(fields, lang.hitch(this, function (field) {

                            //added support for editing date and time 
                            if (field.format && field.format.dateFormat && array.indexOf(this.timeFormats, field.format.dateFormat) > -1) { 
                              field.format = {
                                time: true
                              };
                             }

                            if (field.visible) {
                                fieldInfos.push(field);
                            }
                 
                        }));
                 
                        layer.fieldInfos = fieldInfos;
                    }
                }));

                //display the toolbar if the configuration option has been enabled and the site isn't mobile.
                var settings = {
                  map: this.map,
                  layerInfos: this.editableLayers,
                  toolbarVisible: (this.options.displaytoolbar && !this.isMobile) ? true : false
                };

                var params = {
                  settings: settings
                };

                //create the editor, apply snapping and disable the tooltips for the template picker

                this.editorWidget = new Editor(params, domConstruct.create("div",{},dom.byId("editorDiv")));//dom.byId('editorDiv'));
   
                this.editorWidget.startup();

                //when template picker selection changes close this
                if(this.editorWidget && this.editorWidget.templatePicker && this.isMobile){
                  this.editorWidget.templatePicker.on("selection-change", lang.hitch(this,function(){
                    this.hidePanelContent();
                  }));
                }

                this.map.enableSnapping();

            },
            destroyEditor: function(){
              if(this.editorWidget){
                this.editorWidget.destroy();
              }
              this.editorWidget = null;
            }
           });
        return CreateContent;
    });

