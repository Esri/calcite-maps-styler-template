    dojo.require("esri.map");
    dojo.require("esri.dijit.Scalebar");
    dojo.require("esri.IdentityManager");
    dojo.require("esri.arcgis.utils");
    
   var map, urlObject;
   var i18n;
   
   function initMap() {
  
      
      //get the localization strings
  	  i18n = dojo.i18n.getLocalization("esriTemplate","template"); 
  	  dojo.byId('footerText').innerHTML = i18n.viewer.footer.label;

      if(configOptions.geometryserviceurl && location.protocol === "https:"){
        configOptions.geometryserviceurl = configOptions.geometryserviceurl.replace('http:','https:');
      }
      esri.config.defaults.geometryService = new esri.tasks.GeometryService(configOptions.geometryserviceurl);  
      if(!configOptions.proxyurl){   
        configOptions.proxyurl = location.protocol + '//' + location.host + "/sharing/proxy";
      }

      esri.config.defaults.io.proxyUrl =  configOptions.proxyurl;
      if(!configOptions.sharingurl){
        configOptions.sharingurl = location.protocol + '//' + location.host + "/sharing/content/items";
      }
      esri.arcgis.utils.arcgisUrl = configOptions.sharingurl;
       
       
      urlObject = esri.urlToObject(document.location.href);
      urlObject.query = urlObject.query || {};
      if(urlObject.query.title){
        configOptions.title = urlObject.query.title;
      }
      if(urlObject.query.subtitle){
        configOptions.title = urlObject.query.subtitle;
      }
      if(urlObject.query.webmap){
        configOptions.webmap = urlObject.query.webmap;      
      } 
      if(urlObject.query.bingMapsKey){
        configOptions.bingmapskey = urlObject.query.bingMapsKey;      
      }



        var mapDeferred = esri.arcgis.utils.createMap(configOptions.webmap, "map", {
          mapOptions: {
            slider: true,
            nav: false,
            wrapAround180:true
          },
          ignorePoups:false,
          bingMapsKey: configOptions.bingmapskey
        });

        mapDeferred.addCallback(function (response) {
		  document.title = configOptions.title ||response.itemInfo.item.title;	
          dojo.byId("title").innerHTML = configOptions.title ||response.itemInfo.item.title;
          dojo.byId("subtitle").innerHTML = configOptions.subtitle || response.itemInfo.item.snippet || "";
          dojo.byId("owner").innerHTML = response.itemInfo.item.owner;
          dojo.byId("description").innerHTML = configOptions.description || response.itemInfo.item.description;
        
          map = response.map;
          if(map.loaded){
            initUI();
          }
          else{
            dojo.connect(map,"onLoad",function(){
              initUI();
            });
          }
          //resize the map when the browser resizes
          dojo.connect(dijit.byId('map'), 'resize', map,map.resize);
        });

        mapDeferred.addErrback(function (error) {
       		alert(i18n.viewer.errors.createMap + " : " +  error.message);
        });

    }

    function initUI(){
      //add theme for popup
      dojo.addClass(map.infoWindow.domNode, "pavement");
      //add a scalebar 
      var scalebar = new esri.dijit.Scalebar({
     	 map: map,
    	 scalebarUnit: i18n.viewer.main.scaleBarUnits //metric or english
   	 });          
    }
    
    
 