define([

    "dojo/Evented",
    "dojo",
    "dojo/ready",
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/on",
    "esri/dijit/LocateButton",
    "esri/geometry"

],
function (
    Evented,
    dojo,
    ready,
    declare,
    lang,
    on,
    LocateButton,
    Geometry
    ) {
    return declare([Evented], {
        map: null,
        config: {},
        geoLocate: null,
        constructor: function (map, config) {
            this.map = map;
            this.config = config;
        },
        checkingEditing: function () {
            if (this.config.editingAllowed == null) {
                this.config.editingAllowed = false;

                if (this.config == null) {
                    this.config.editingAllowed = true;

                }
                if (this.config.userPrivileges == null) {
                    this.config.editingAllowed = true;

                } else {
                    for (var key in this.config.userPrivileges) {
                        if (this.config.userPrivileges[key] == "features:user:edit") {
                            this.config.editingAllowed = true;
                            return this.config.editingAllowed;

                        }
                    }
                }

            }
            return this.config.editingAllowed;

        },
        addLocatorButton: function (divID) {

            this.geoLocate = new LocateButton({
                map: this.map,
                pointerGraphic: null,
                centerAt: false,
                highlightLocation: false,
                setScale: false
            }, divID);

            on(this.geoLocate, "locate", lang.hitch(this, this._locate));

            this.geoLocate.startup();
        },
        _locate: function (location) {
            this.geoLocate.clear();

            if (location.error != null) {
                alert(location.error);

            } else {
                var point = new Geometry.Point({ "x": location.position.coords.longitude, "y": location.position.coords.latitude, " spatialReference": { " wkid": 4326 } });
                this.emit("locate",  point );
            }

        }
    });
});
