dojo.require("esri.map");
dojo.require("esri.dijit.Scalebar");
dojo.require("esri.arcgis.utils");
dojo.require("esri.IdentityManager");

 var map, urlObject;
 var i18n;
 
 function initMap(){

      
  	  i18n = dojo.i18n.getLocalization("esriTemplate","template"); 
  	 
  	  dojo.byId('footerText').innerHTML = i18n.viewer.footer.label;

    if(configOptions.geometryserviceurl && location.protocol === "https:"){
      configOptions.geometryserviceurl = configOptions.geometryserviceurl.replace('http:','https:');
    }
    esri.config.defaults.geometryService = new esri.tasks.GeometryService(configOptions.geometryserviceurl);  
      
      if(!configOptions.sharingurl){
        configOptions.sharingurl = location.protocol + '//' + location.host + "/sharing/content/items";
      }
      esri.arcgis.utils.arcgisUrl = configOptions.sharingurl;
       
      if(!configOptions.proxyurl){   
        configOptions.proxyurl = location.protocol + '//' + location.host + "/sharing/proxy";
      }

      esri.config.defaults.io.proxyUrl =  configOptions.proxyurl;

      esri.config.defaults.io.alwaysUseProxy = false;
      
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
          nav: true,
          wrapAround180:true
        },
        ignorePopups:false,
        bingMapsKey: configOptions.bingmapskey
      });

      mapDeferred.addCallback(function (response) {
        dojo.byId("title").innerHTML = configOptions.title || response.itemInfo.item.title;			
		document.title = configOptions.title || response.itemInfo.item.title;
		
        dojo.byId("subtitle").innerHTML = configOptions.subtitle|| response.itemInfo.item.snippet || "";
        dojo.byId("owner").innerHTML = response.itemInfo.item.owner;
      
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
      //add chrome theme for popup
      dojo.addClass(map.infoWindow.domNode, "chrome");
      
      var scalebar = new esri.dijit.Scalebar({
        map: map,
    	 scalebarUnit: i18n.viewer.main.scaleBarUnits //metric or english
      });         
    }

    