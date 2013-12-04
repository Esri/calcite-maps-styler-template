dojo.require('esri.arcgis.Portal');
dojo.require('esri.arcgis.utils');
dojo.require("esri.map");
dojo.require('esri.dijit.Attribution');
dojo.require("utilities.app");
dojo.require("dojo.string");
dojo.require("templateConfig.commonConfig");
dojo.requireLocalization('esriTemplate', 'template');


var portal, items;
var configOptions;
var webmaps = [], map, currentMap = 0;

dojo.ready( function(){             
  var defaults = {
     "id": "908dd46e749d4565a17d2b646ace7b1a", //specfiy the group id 
     "appid": "",
     "numitems":100, //100 is max value
     "bingmapskey": this.commonConfig.bingMapsKey,
     "proxyurl":"",
     "sharinghost":"",
     "portalurl":"",
     "helperServices": this.commonConfig.helperServices
  };

    var app = new utilities.App(defaults, true);
    app.on("ready", dojo.hitch(this, function(config){
      configOptions = config;
      if(configOptions.group){
        configOptions.id = configOptions.group;
      }
      init();
    }));
    
 });
function init() {
  
  document.title = configOptions.i18n.app.title;

   //use esri.request to query the group - if group query fails identity manager will kick-in and get credentials.      
  esri.request({
    url: configOptions.portalurl + '/sharing/rest/community/groups/' + configOptions.id,
    content: {'f':'json'},
    callbackParamName: 'callback',
    load: function (response) {
      //load the portal      
      var signInRequired = (response.access !== 'public')? true : false;
      portal = new esri.arcgis.Portal(configOptions.portalurl);

      dojo.connect(portal, 'onLoad', function(){
      loadPortal(signInRequired);
      });

    }
  });
}       


function loadPortal(signInRequired) {
  if(signInRequired){
    portal.signIn();
  }

  esri.show(dojo.byId('loadingImg'));
  //query the group and retrieve the Web Maps.
  portal.queryGroups(configOptions.id).then(function (response) {
    if (response.results.length > 0) {
      var group = response.results[0];
      var queryParams = {
        q: 'type:"Web Map" -type:"Web Mapping Application"',
        num: configOptions.numitems
      };
      group.queryItems(queryParams).then(function (response) {
        if(response.results.length > 0){
        items = response.results;
        //load the first map 
        createMap(items[0]);
        //create thumbnail gallery 
        createThumbs(items);
        }else{
          alert('This group does not contain any public web maps to display.');
          esri.hide(dojo.byId('loadingImg'));  
        }
        
      });
    }else{
      alert('Group not found');
      esri.hide(dojo.byId('loadingImg'));
    }
  });
}

function createMap(item) {
  var mapDeferred = esri.arcgis.utils.createMap(item.id, dojo.create('div', {
    id: item.id
  }, dojo.byId('mainMap')), {
    mapOptions: {
      wrapAround180: true,
      showAttribution:true,
      slider: false
    },
    bingMapsKey: configOptions.bingmapskey
  });
  mapDeferred.addCallback(function (response) {

    map = response.map;
    map.id = item.id;
    map.title = item.title;
    map.owner = item.owner;
    map.snippet = item.snippet;
    webmaps[currentMap] = map;


    updateDetails(map);
    resizeMap();
    esri.hide(dojo.byId('loadingImg'));
  });
  mapDeferred.addErrback(function (error) {
    if (map) {
      map.destroy();
      dojo.destroy(map.container);
      getNext();
    }
  });
}

function createThumbs(items) {
  var frag = document.createDocumentFragment();
  dojo.forEach(items, function (item, index) {
    if (item.id) {
      var thumbnail = item.thumbnailUrl || "images/desktopapp.png"; //use default image if one is not provided
      var li = dojo.create('li', {
       innerHTML: '<img src="' + thumbnail + '"/><p class="ellipsis">' + item.title + '</p>'
  
      }, frag);
      dojo.addClass(li, 'grid_2 gallery_grid');


    }
    dojo.connect(li, 'onclick', function () {
      //close the thumbnail panel 
      hideMap();
      esri.hide(dojo.byId('thumbnailContainer'));
      currentMap = index;
      showMap();
    });
  });

  dojo.place(frag, 'thumbnailList');
}

function showMap() {
  //animate the display of the next map to fade-in 
  //increment the map count div
  var myMap = webmaps[currentMap];
  if (myMap && myMap.id) {
    var node = dojo.byId(myMap.id);
    esri.show(node);
    updateDetails(myMap);
    var anim = dojo.fadeIn({
      node: node
    });
    anim.play();
  } else {
    //create the map 
    esri.show(dojo.byId('loadingImg'));
    createMap(items[currentMap]);
  }

}

function updateDetails(item) {
  dojo.byId('mapTitle').innerHTML = item.title;
  dojo.byId('mapOwner').innerHTML = item.snippet;
  dojo.byId('mapCount').innerHTML = dojo.string.substitute(
  configOptions.i18n.app.mapcount, {
    page: (currentMap + 1),
    total: items.length
  });

 
}

function hideMap() {
  //Fade out the previous map 
  var node = dojo.byId(webmaps[currentMap].id);
  esri.hide(node);
  dojo.byId('mapTitle').innerHTML = '';
  dojo.byId('mapOwner').innerHTML = '';
  dojo.byId('mapCount').innerHTML = '';

  var anim = dojo.fadeOut({
    node: node
  });
  anim.play();
}

function getNext() {
  //hide the existing map 
  hideMap();
  (currentMap >= -1 && currentMap < (items.length - 1)) ? currentMap += 1 : currentMap = 0;
  showMap();
}

function getPrevious() {
  hideMap();
  (currentMap <= items.length && currentMap > 0) ? currentMap -= 1 : currentMap = items.length - 1;
  showMap();
}

function toggleGallery() {
  var tc = dojo.byId('thumbnailContainer');
  tc.style.display === 'none' ? esri.show(tc) : esri.hide(tc);

}

function resizeMap() {
  //window resizes - resize current map 
  if (webmaps.length > 0) {
    webmaps[currentMap].resize();
  }
}

