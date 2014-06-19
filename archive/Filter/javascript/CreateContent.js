define(["dojo/_base/declare", "dojo/parser", "dojo/_base/lang", "dojo/_base/window", "dojo/has", "dojo/Deferred", "dojo/dom-class", "dojo/dom-construct", "dijit/layout/BorderContainer","dijit/layout/ContentPane"],
    function(declare, parser, lang, window, has, Deferred, domClass, domConstruct, BorderContainer, ContentPane){
        var CreateContent =  declare("utilities.CreateContent",null,{
            _isMobile: false,
            leftPanel: null,
            mainWindow: null,
            header: null,
            mapPane: null,
            displayButton:null,
            constructor: function(args){
               has("touch")  && has("device-width") < 640 ? this._isMobile = true : this_isMobile = false;
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
                    }).placeAt(window.body(), "first");

                  //add header pane if its a smart phone add a button and omit the subtitle 
                  var content = "";
                  if(!this._isMobile){
                    content = "<div id='title'></div><div id='subtitle'></div>";
                  }else{
                    var h = domConstruct.create("div");
                    //add a button to the header 
                    this.displayButton = domConstruct.create("a",{
                      id: "displayButton",
                      className: "headerButton"
                    },h);
                   domConstruct.create("span",{id: "title"},h);
                   //toggle the panel content when button is clicked 
                   dojo.connect(this.displayButton, "onclick",dojo.hitch(this, function () {
                        //toggle the panel content 
                          var lp = dojo.byId("leftPane");
                         lp.style.display === "none" ? esri.show(lp) : esri.hide(lp);
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
                        region: "center",
                        dir: "ltr"
                    }).placeAt(this.mainWindow);
              
                  //add the loading icon 
                  dojo.create("img",{
                    id: "loader",
                    src: "images/loading.gif",
                    className: "loader"
                  },"map");



                  //add  content pane for left content if desktop or tablet. For smart phones create a div that will be toggled.                   
                  if(!this._isMobile){
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
                 if(this._isMobile){
                    domClass.add("mainWindow", "mobile");
                 }
                   this.mainWindow.startup();
                   deferred.resolve();
                   return deferred.promise;
            },
            setPanelContent: function( title, content, width){
               var deferred = new Deferred();
                if(this._isMobile){
                  dojo.byId("displayButton").innerHTML = title;
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
            hidePanelContent: function(){
              //hide panel content on mobile devices 
              if(this._isMobile){
               var lp = dojo.byId("leftPane");
               esri.hide(lp);
              }
            }
           });
        return CreateContent;
    });

