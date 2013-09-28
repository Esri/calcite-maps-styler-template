var pageUtils = {

  /**
   * Load the homepage.
   */
  loadHomePage:function (docTitle) {
    // dynamically set the page title
    document.title = docTitle;
    dojo.forEach(appConfig.homepageContent.bindings, function (data) {
      // build DOM that will hold each link
      utils.buildCustomCellNode(dojo, data.url, data.label, data.id);
    });
    // add header
    customHeaderUtils.buildHeader();
  },

  /**
   * Load the featured groups page.
   */
  loadGroups:function (docTitle) {
    // dynamically set the page title
    document.title = docTitle;
    // iterate over each element (group) of the featured groups of the organization and apply a callback
    // callback wil query the current group in the featuredGroups array
    var _groups = dojo.map(portal.featuredGroups, function (group) {
      var _params = {
        q:'title:' + group.title + ' AND owner:' + group.owner
      };
      var _deferred = new dojo.Deferred();
      _deferred = portal.queryGroups(_params);
      return _deferred;
    });

    var _dl = new dojo.DeferredList(_groups);
    _dl.then(function (response) {
      // build a node (link) for each group that will hold the groups URL, title, and unique id
      dojo.forEach(response, function (data, i) {
        var _url = 'group.html?owner=' + data[1].results[0].owner + '&title=' + data[1].results[0].title;
        var _label = '<img class="groupThumbnail" src="' + data[1].results[0].thumbnailUrl + '">' + data[1].results[0].title;
        var _id = data[1].results[0].id;
        utils.buildCustomCellNode(dojo, _url, _label, _id);
      });
    });
    // add header
    customHeaderUtils.buildHeader();
  },

  /**
   * User has selected a group within the featured groups.
   */
  loadGroup:function () {
    jQuery(document).ready();
    // load the scrolling logic
    utils.scrollEventHandler();

    // Extract the owner and title of the URL and use these values as the parameters to query the group.
    // return the string URL of the HTML document
    var _uri = document.URL;
    // extracts the characters from the URL, between ? the end of the URL, return the new sub string to _query
    var _query = _uri.substring(_uri.indexOf('?') + 1, _uri.length);
    // queryToObject is a helper function for converting a URI query string to a JavaScript Object
    var _queryObject = dojo.queryToObject(_query);
    var _owner = _queryObject.owner;
    var _title = _queryObject.title;
    var _queryGroupParams = {
      q:'owner:' + _owner + ' AND title:' + _title
    };
    // dynamically set the page title
    document.title = _title;
    // execute a query a against the portal and build a list of items for the selected group
    pageUtils.executeQuery(_queryGroupParams);

    // add header
    customHeaderUtils.buildHeader();
  },

  /**
   * Load the gallery
   */
  loadGallery:function (docTitle) {
    jQuery(document).ready();
    // dynamically set the page title
    document.title = docTitle;
    utils.scrollEventHandler();
    // Check if there is a cookie set
    if (authenticationUtils.idObject !== '') {
      portal.signIn().then(function (result) {
        var _params = {
          q    :"(accountid:" + result.portal.id + ") AND ((" +
            "type:\"service\" -type:\"Service Definition\") OR " +
            "type:\"Web Map\" OR " +
            "type:\"web mapping application\" OR (" +
            "type:\"feature collection\")) ",
          start:1,
          num  :appConfig.NUM_ITEMS
        };
        result.portal.queryItems(_params).then(function (res) {
          pageUtils.processItem(res);
        });
        // update the header
        customHeaderUtils.buildHeader();
      });

      utils.queryMoreItems();
    } else {
      var _queryParams = '';
      // when signed in to an org, the featuredItemsGroupQuery can be empty
      if (portal.featuredItemsGroupQuery === '') {
        _queryParams = 'title:Featured Maps and Apps for United States AND owner:Esri_cy_US';
      } else {
        _queryParams = portal.featuredItemsGroupQuery;
      }
      pageUtils.executeQuery(_queryParams);
      customHeaderUtils.buildHeader();
    }
  },

  /**
   *
   * @param groupParams
   */
  executeQuery:function (groupParams) {
    // Execute a query against the Portal
    portal.queryGroups(groupParams).then(function (response) {
      var _group = response.results[0];
      var _itemParams = {
        q    :'type:"Web Map" -type:"Web Mapping Application"',
        start:1,
        num  :appConfig.NUM_ITEMS
      };
      _group.queryItems(_itemParams).then(function (results) {
        pageUtils.processItem(results);
      });
    });
    // query more items
    utils.queryMoreItems();
    // hide the loading overlay
    utils.hideLoader();
  },

  /**
   * Build a list of items.
   *
   * @param res
   */
  processItem:function (res) {
    // iterate through each item in the resultSet
    var _items = [];
    // User may or may not have items
    if (res.results.length === 0) {
      // no items
      var _msgNode = dojo.create('div', {
        innerHTML:'<p>' + appConfig.NO_ITEMS_MSG + '</p>'
      }, dojo.byId('content'), 'first');
      _msgNode.setAttribute('class', 'grid_2');
      _msgNode.setAttribute('class', 'noItemsMsg');
    } else {
      // 1 or more items
      $.each(res.results, function (index, result) {
        var _type = '';
        if (result.type === 'Web Map') {
          // Web Map
          _type = 'viewer.html?webmap=';
        } else if (result.type === 'Map Service') {
          // Map Service
          _type = 'viewer.html?services=';
        } else if (result.type === 'Feature Service') {
          // Feature Service
          _type = 'viewer.html?services=';
        }

        var _tmpUrl = appConfig.DEVEXT_PATH + _type + result.id;
        var itemUrl = appConfig.DEPLOY_ROOT + appConfig.DEVEXT_PATH + 'item.html?id=' + result.id;
        _items.push('<li class="ui-li-has-thumb">');

        if (dojo.indexOf(result.typeKeywords, 'Collector') === -1) {
          // Collector type not found, check to see if it's a webmap or map service
          if (_type !== '') {
            // item should be viewed in a map
            _items.push('<a href="' + appConfig.DEPLOY_ROOT + _tmpUrl + '" target="_self">');
          } else {
            //
            _items.push('<a href="' + itemUrl + '" target="_self">');
          }
        } else {
          var _appurl = "arcgis-collect://" + appConfig.DEPLOY_ROOT + "/sharing/rest/content/items/" + result.id + '/data';
          _items.push('<a href="' + _appurl + '" target="_self">');
        }

        _items.push('<img class="itemThumbnail" src="' + result.thumbnailUrl + '"/>');
        _items.push('<p class="snippet ui-li-desc itemTitle">' + result.title + '</p>');
        _items.push('</a><a href="' + itemUrl + '" target="_self"></a></li>');
      });
      $('#listOfItems').append(_items.join('')).listview().listview('refresh');
    }
    // hide the loading overlay
    utils.hideLoader();
  },

  /**
   * Build the 'My Content' page
   */
  loadMyContent:function (docTitle) {
    jQuery(document).ready();
    // dynamically set the page title
    document.title = docTitle;
    // add container node for the header
    customHeaderUtils.addHeaderNode();
    // listen for scroll events
    utils.scrollEventHandler();
    // check if there is a cookie set
    if (authenticationUtils.idObject !== '') {
      portal.signIn().then(function (result) {
        // update header to reflect the organization's name and thumbnail
        customHeaderUtils.updateHeader();
        var _q;
        if (!portal.isOrganization) {
          // not an organization
          _q = "(owner: " + result.portal.user.username + ") AND ((" +
            "type:\"service\" -type:\"Service Definition\") OR " +
            "type:\"Web Map\" OR " +
            "type:\"web mapping application\" OR (" +
            "type:\"feature collection\")) ";
        } else {
          // organization, use id
          _q = "(accountid:" + result.portal.id + ") AND (owner: " + result.portal.user.username + ") AND ((" +
            "type:\"service\" -type:\"Service Definition\") OR " +
            "type:\"Web Map\" OR " +
            "type:\"web mapping application\" OR (" +
            "type:\"feature collection\")) ";
        }
        var params = {
          q    :_q,
          start:1,
          num  :appConfig.NUM_ITEMS
        };
        result.portal.queryItems(params).then(function (res) {
          pageUtils.processItem(res);
        });
      });
      utils.queryMoreItems();
    } else {
      // no cookie, user is not logged in, so load the login form
      // update header to reflect the portal's name and thumbnail
      customHeaderUtils.updateHeader();
      var node = dojo.create('div', {
        innerHTML:appConfig.MY_CONTENT
      }, dojo.byId('content'), 'first');
      dojo.style(node, {
        'color' :'#024672',
        'margin':'10px'
      });
      // TODO Duplicate code
      portal.signIn().then(function (result) {
        authenticationUtils.storeCredentials();
        window.location = appConfig.DEPLOY_ROOT + appConfig.DEVEXT_PATH;
      });
    }

  },

  /**
   *
   */
  loadSignIn:function (docTitle) {
    // dynamically set the page title
    document.title = docTitle;
    // add 'Sign In' label
    var node = dojo.create('div', {
      innerHTML:appConfig.signInLabel
    }, dojo.byId('content'), 'first');
    dojo.style(node, {
      'color' :'#024672',
      'margin':'10px'
    });
    // TODO Duplicate code
    portal.signIn().then(function (result) {
      authenticationUtils.storeCredentials();
      window.location = appConfig.DEPLOY_ROOT + appConfig.DEVEXT_PATH;
    });
  },

  /**
   * Page used to view a map.
   *
   * @param url The URL is passed in and parsed to determine if the user is viewing the AGO default basemap, or an item
   */
  loadMapViewer:function (url) {
    // Aliasing the jQuery Namespace
    jQuery(document).ready();
    // show the loading overlay
    utils.showLoader('Loading map...', 'd');
    // mobile popup dijit
    var popup = new esri.dijit.PopupMobile(null, dojo.create('div'));

    // TODO Duplicate code!!!
    if (esri.urlToObject(url).query.useExisting === '1') {
      // Portal's default basemap
      // http://www.arcgis.com/home/webmap/viewer.html?useExisting=1
      var _webmap = {};
      _webmap.itemData = {
        "baseMap":{
          "baseMapLayers":[
            {
              "opacity"   :1,
              "visibility":true,
              "url"       :portal.defaultBasemap.baseMapLayers[0].url
            }
          ]
        }
      };
      // create a map using JSON
      mapDeferred = esri.arcgis.utils.createMap(_webmap, 'map', {
        mapOptions        :{
          sliderStyle:'small',
          infoWindow :popup
        },
        bingMapsKey       :appConfig.BING_MAPS_KEY,
        geometryServiceURL:appConfig.GEOMETRY_SERVICE_URL
      });

      mapDeferred.then(function (response) {
        map = response.map;
        // set the extent of the map
        var _initExtent = new esri.geometry.Extent(portal.defaultExtent);
        map.setExtent(_initExtent);

        if (map.loaded) {
          // register the navigation bar event handlers (geolocation, legend, etc...)
          customMapUtils.registerNavBarHandlers(map);
          // hide the legend
          $('#legendDiv').toggle();
        }
      }, function (error) {
        console.log("Map creation failed: ", dojo.toJson(error));
      });
    } else {
      // return the query portion of the URL and split the returned array into
      // the type (webmap or services) and the item's id
      var _type = location.search.split('?')[1].split('=')[0];
      var _itemId = location.search.split('?')[1].split('=')[1];
      if (_type === 'services') {
        // Feature Service
        // TODO This should not be hardoced!!!
        var _webmapId = '6e03e8c26aad4b9c92a87c1063ddb0e3';
        mapDeferred = esri.arcgis.utils.createMap(_webmapId, 'map', {
          mapOptions        :{
            sliderStyle:'small',
            infoWindow :popup
          },
          bingMapsKey       :appConfig.BING_MAPS_KEY,
          geometryServiceURL:appConfig.GEOMETRY_SERVICE_URL
        });

        mapDeferred.then(function (response) {
          map = response.map;
          if (map.loaded) {
            customMapUtils.addLayer(_itemId);
            customMapUtils.registerNavBarHandlers(map);
          } else {
            dojo.connect(map, 'onLoad', customMapUtils.addLayer);
          }
        }, function (error) {
          console.log("Map creation failed: ", dojo.toJson(error));
        });

      } else if (_type === 'webmap') {
        // Web Map
        // Create a map using information from an ArcGIS.com item.
        mapDeferred = esri.arcgis.utils.createMap(_itemId, 'map', {
          mapOptions        :{
            sliderStyle:'small',
            infoWindow :popup
          },
          bingMapsKey       :appConfig.BING_MAPS_KEY,
          geometryServiceURL:appConfig.GEOMETRY_SERVICE_URL
        });

        // returns a new promise that is fulfilled when the callback completes
        mapDeferred.then(function (response) {
          map = response.map;
          var _layers;
          if (response.itemInfo !== null) {
            _layers = response.itemInfo.itemData.operationalLayers;
          }

          if (map.loaded) {
            customMapUtils.initMap(_layers);
          } else {
            dojo.connect(map, 'onLoad', function () {
              customMapUtils.initMap(_layers);
            });
          }
        }, function (error) {
          console.log('Map creation failed: ', dojo.toJson(error));
        });
      }
      // nav bar button listeners
      // Legend dijit toggle button
      $('#legendBtn').bind('click', function (event, ui) {
        $('#legendDiv').fadeToggle('slow');
      });
    }

    // hide the loading overlay
    utils.hideLoader();

    // Basemap gallery dijit toggle button
    $('#basemapBtn').bind('click', function (event, ui) {
      $('#basemapGallery').fadeToggle('slow');
    });

    // Geolocation button
    $('#geolocateBtn').bind('click', function (event, ui) {
      customMapUtils.getLocation();
    });

    // Find button
    $('#searchBtn').bind('click', function (event, ui) {
      $('#search').fadeToggle('slow');
    });
  },


  /**
   *  Load the page used for viewing details about an item in AGO
   *
   *  @param url
   */
  loadItemViewer:function (url) {
    // the item
    var _itemDeferred = esri.arcgis.utils.getItem(esri.urlToObject(url).query.id);
    _itemDeferred.addCallback(dojo.hitch(this, function (response) {
      // item's title
      dojo.byId('itemTitle').innerHTML = response.item.title;
      // set the title of the document
      document.title = response.item.title;
      // item's thumbnail
      dojo.byId('itemThumbnail').innerHTML = response.item.thumbnail;
      var _thumbNailUrl = appConfig.SHARING_URL + '/' + response.item.id + '/info/' + response.item.thumbnail;
      dojo.attr(dojo.byId('itemThumbnail'), 'src', _thumbNailUrl);
      var _date = new Date(response.item.modified);
      dojo.byId('itemModified').innerHTML = 'Last modified: ' + appConfig.monthNames[_date.getMonth()] + ' ' + _date.getDate() + ', ' + _date.getFullYear();
      dojo.byId('itemOwner').innerHTML = response.item.type + ' by ' + response.item.owner;
      dojo.byId('itemSnippet').innerHTML = response.item.snippet;
      if (response.item.description !== null) {
        // item's description
        dojo.byId('itemDescription').innerHTML = response.item.description;
      } else {
        // No description has been provided by the owner of the item
        dojo.byId('itemDescription').innerHTML = appConfig.NO_ITEM_DESCRIPTION;
      }
    }));
    // add header
    customHeaderUtils.buildHeader();
  }
};