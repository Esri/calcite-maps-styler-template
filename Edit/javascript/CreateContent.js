define([
  "dojo/_base/declare", 
  "dojo/parser", 
  "dojo/_base/lang",
  "dojo/string",
  "dojo/_base/window",
  "dojo/on",
  "dojo/has",
  "dojo/Deferred",
  "dojo/dom",
  "dojo/dom-class",
  "dojo/dom-construct",
  "esri/domUtils",
  "dijit/layout/BorderContainer",
  "dijit/layout/ContentPane"
  ],
    function(
      declare, 
      parser, 
      lang, 
      string, 
      win, 
      on, 
      has, 
      Deferred, 
      dom, 
      domClass, 
      domConstruct, 
      domUtils, 
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
            constructor: function(args){
             (has("touch") && window.innerWidth <= 360) ? this.isMobile = true : this.isMobile = false;
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
                        //toggle the panel content 
                          var lp = dom.byId("leftPane");
                         lp.style.display === "none" ? domUtils.show(lp) : domUtils.hide(lp);
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
                   deferred.resolve();
                }else{
                  this.leftPanel.set("content" , content);
                  this.leftPanel.set("style", {width: width});
                  deferred.resolve();
                }
       
                 this.mainWindow.resize();
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
            }
           });
        return CreateContent;
    });

