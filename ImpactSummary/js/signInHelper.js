define([
    "dojo/Evented",
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dijit/_WidgetBase",
    "dijit/layout/ContentPane",
    "dojo/on",
    "esri/arcgis/utils",
    "esri/arcgis/Portal",
    "dojo/Deferred",
    "dojo/cookie"
],
function (Evented, declare, lang, _WidgetBase, ContentPane, on, arcgisUtils, portal, Deferred, cookie) {
    var Widget = declare([_WidgetBase], {
        declaredClass: "application.signInHelper",
        _portal: null,
        cred: "esri_jsapi_id_manager_data",
        constructor: function () {
            var portalURL = this._getPortalURL();
            this._portal = new portal.Portal(this._getPortalURL());
            dojo.portal = this._portal;
        },

        createPortal: function () {
            // create portal
            var deferred = new Deferred();
            var _self = this;
            // portal loaded
            this.own(on(this._portal, "Load", lang.hitch(this, function () {
                this._portal.signIn().then(function (loggedInUser) {
                    deferred.resolve(loggedInUser);
                }, function (err) {
                    alert("Sign-in Failed");
                });
            })));
            return deferred.promise;
        },

        _getPortalURL: function () {
            return arcgisUtils.arcgisUrl.split('/sharing/')[0];
        },

        getPortal: function () {
            return this._portal;
        },

        getPortalUser: function () {
            var esriCookie = cookie('esri_auth');
            if (!esriCookie)
                return;
            esriCookie = JSON.parse(esriCookie.replace('"ssl":undefined', '"ssl":""'));
            // Cookie has to be set on the same organization
            if (esriCookie.urlKey
						&& esriCookie.customBaseUrl
						&& (esriCookie.urlKey + '.' + esriCookie.customBaseUrl).toLowerCase() != document.location.hostname.toLowerCase())
                return;
            return esriCookie ? esriCookie.email : null;
        },

        userIsAppOwner: function (itemData) {
            return (itemData.item.owner == dojo.currentLoggedInUser);
        },

        /* Below two functions will be used to set and get credentials if user is signd in */
        loadCredentials: function () {
            var idJson, idObject;

            if (this.supports_local_storage()) {
                // read from local storage
                idJson = window.localStorage.getItem(this.cred);
            } else {
                // read from a cookie
                idJson = dojo.cookie(this.cred);
            }

            if (idJson && idJson != "null" && idJson.length > 4) {
                idObject = dojo.fromJson(idJson);
                esri.id.initialize(idObject);
            } else {
                // console.log("didn't find anything to load :(");
            }
        },

        storeCredentials: function () {
            // make sure there are some credentials to persist
            if (esri.id.credentials.length === 0) {
                return;
            }

            // serialize the ID manager state to a string
            var idString = dojo.toJson(esri.id.toJson());
            // store it client side
            if (supports_local_storage()) {
                // use local storage
                window.localStorage.setItem(this.cred, idString);
                // console.log("wrote to local storage");
            } else {
                // use a cookie
                dojo.cookie(this.cred, idString, { expires: 1 });
                // console.log("wrote a cookie :-/");
            }
        },

        supports_local_storage: function () {
            try {
                return "localStorage" in window && window["localStorage"] !== null;
            } catch (e) {
                return false;
            }
        }
    });
    return Widget;
});