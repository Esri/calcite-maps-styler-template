/*global define,require,$ */
/*jslint browser:true */
define([], function () {
    'use strict';
    var data;
    data = {

        appUI: function (id) {
            var values = {
                id: id,
                numObjects: 0,
                ui0: "js.LGNotes"
            };

            switch (id) {
            case "apps2/Finder":
                values.numObjects = 31;
                break;
            case "apps2/Finder_try_it":
                values.numObjects = 31;
                break;
            case "apps2/GeneralMap":
                values.numObjects = 27;
                break;
            case "2ce4b44409a94f81a890881205c30393":
                values.numObjects = 31;
                break;
            }

            return values;
        },

        webmap: function (id) {
            var values = {
                webmapId: id,
                numOpLayers: 0,
                opLayer0Id: undefined,
                opLayer0ItemId: undefined,
                opLayer0Title: undefined,
                opLayer0Url: undefined
            };

            switch (id) {
            case "3c33240fbacd42339547a06a966dcbf7":
                values.numOpLayers = 1;
                values.opLayer0Id = "TaxParcelTIL_9803";
                values.opLayer0ItemId = "827118371d3547358954d0dbb39095da";
                values.opLayer0Title = "Tax Parcels";
                values.opLayer0Url = "http://services.arcgis.com/b6gLrKHqgkQb393u/arcgis/rest/services/TaxParcelTIL/FeatureServer/0";
                break;
            case "70430e570f0840b4a5eb8da09cfa82f1":
                values.numOpLayers = 1;
                values.opLayer0Id = "CodedValues_2288";
                values.opLayer0ItemId = "53aaf3281b64402d9435d8429dfaf809";
                values.opLayer0Title = "Numbers";
                values.opLayer0Url = "http://services.arcgis.com/b6gLrKHqgkQb393u/arcgis/rest/services/CodedValues/FeatureServer/0";
                break;
            }

            return values;
        }

    };
    return data;
});
