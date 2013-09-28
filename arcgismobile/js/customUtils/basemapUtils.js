// dojo.provide() tells the loader that the module has been provided for the given name. 
// It also creates a JavaScript object for the name.
dojo.provide('customUtils.basemapUtils');
// TODO Stylize the basemap gallery dijit
/**
 * Creation and event handlers for the baemap gallery dijit.
 *
 * @type {Object}
 */
var customBasemapUtils = {

  _gallery :null,
  _basemaps:null,

  /**
   * Basemap Gallery button handler
   */
  loadBaseMapHandler:function () {
    // listen for click events on the basemap btn
    dojo.connect(dojo.byId('basemapBtn'), 'onclick', function (evt) {
      // user could press the basemap btn twice
      if (customBasemapUtils._gallery === null) {
        // create the basemap gallery background div
        var galleryBackground = dojo.create('div', null, dojo.byId('mapView'));
        dojo.attr(galleryBackground, 'id', 'galleryBackgroundDiv');
        dojo.setStyle(galleryBackground, 'margin', '0');
        dojo.setStyle(galleryBackground, 'height', '105%');
        dojo.setStyle(galleryBackground, 'width', '100%');
        dojo.setStyle(galleryBackground, 'background-color', '#FFF');
        dojo.setStyle(galleryBackground, 'position', 'absolute');
        dojo.setStyle(galleryBackground, 'z-index', '2');
        dojo.setStyle(galleryBackground, 'opacity', '0.80');

        // create the basemap gallery node
        var galleryNode = dojo.create('div', null, galleryBackground);
        dojo.attr(galleryNode, 'id', 'galleryDiv');
        dojo.setStyle(galleryNode, 'padding-top', '50%');

        // Displays a collection basemaps from ArcGIS.com
        //
        // showArcGISBasemaps set to true to include ArcGIS.com basemaps
        customBasemapUtils._basemaps = new esri.dijit.BasemapGallery({
          showArcGISBasemaps:true,
          map               :map
        });

        // Fires after the map is updated with a new basemap.
        // (destroy the basemap gallery dijit)
        dojo.connect(customBasemapUtils._basemaps, 'onSelectionChange', function () {
          // destroy the basemap gallery after the user has selected a basemap
          customBasemapUtils._gallery.destroy();
          customBasemapUtils._gallery = null;
          dojo.destroy(dojo.byId('galleryBackgroundDiv'));
        });

        // Fires when the BasemapGallery retrieves the ArcGIS.com basemaps.
        dojo.connect(customBasemapUtils._basemaps, 'onLoad', function () {
          // Applies callback that applies a thumbnail, id, and title to each basemap in the array of basemaps and
          // returns an Array with the results.
          items = dojo.map(customBasemapUtils._basemaps.basemaps, function (basemap) {
            return {
              thumbnailUrl:basemap.thumbnailUrl,
              id          :basemap.id,
              title       :basemap.title
            };
          });

          //display basemaps in the gallery
          var params = {};
          params.items = items;
          // make the thumbnails small
          params.thumbnailStyle = 'small';
          // The Gallery widget provides a touch-aware thumbnail gallery for mobile devices
          customBasemapUtils._gallery = new esri.dijit.Gallery(params, 'galleryDiv');

          // Fires when an item (basemap thumbnail) is selected.
          dojo.connect(customBasemapUtils._gallery, 'onSelect', function (item) {
            // Select a new basemap for the map. The map refreshes to display the new basemap.
            // Returns null if a basemap with the specified id is not found.
            customBasemapUtils._basemaps.select(item.id);
          });

          // Finalize the creation of the gallery.
          customBasemapUtils._gallery.startup();
        });
      }
    });
  }
};