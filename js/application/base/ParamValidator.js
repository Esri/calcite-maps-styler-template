/*
 | Copyright 2016 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define([
  "dojo/text!config/appParams.json",
  "dojo/_base/declare"
], function (
  AppParamsJSON,
  declare
) {

  return declare(null, {

    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    constructor: function () {

      this._defaultParams = JSON.parse(AppParamsJSON);

    },

    //--------------------------------------------------------------------------
    //
    //  Variables
    //
    //--------------------------------------------------------------------------

    _params: null,

    _outParam: {
      valid: false, 
      default: null
    },

    //--------------------------------------------------------------------------
    //
    //  Public Functions
    //
    //--------------------------------------------------------------------------

    getValidParams: function(paramsIn) {
      var validatedParams = {};
      var invalidParams = "";
      for (var param in paramsIn) {
        if (!paramsIn.hasOwnProperty(param)) continue;
        var val = paramsIn[param];
        if (this._isValidParamValue(param,val)) {
          validatedParams[param] = val;
        } else {
          //console.warn("Styler - Unrecognized parameter or value: " + param + "=" + val) // TODO
          invalidParams = invalidParams + param + "=" + val + " ";
        }
      }

      // Remove params not needed - TODO
      //this._trimParams(validatedParams);

      return { validParams: validatedParams,
          invalidParams: invalidParams
        };
    },

    //--------------------------------------------------------------------------
    //
    //  Private Functions
    //
    //--------------------------------------------------------------------------

    _trimParams: function(validParams) {
      // Scale and Zoom, just need one
      if (validParams.hasOwnProperty("scale") && validParams.hasOwnProperty("zoom")) {
        delete validParams["zoom"];
      }
      // Rotation, remove if "0"
      if (validParams.hasOwnProperty("rotation") && validParams["rotation"] === "0") {
        delete validParams["rotation"];
      }
    },

    _isValidParamValue: function(param,value) {
      var valid = false;
      if (this._isValidParam(param)) {
        if (this._isValidValue(param,value)) {
          valid = true;
        } 
      }
      return valid;
    },

    _isValidParam: function(param) {
      return this._defaultParams.hasOwnProperty(param);
    },

    _isValidValue: function(param,val) {
      var valid = false;
      var validParam = this._defaultParams[param];
      switch (validParam.type) {
        case "boolean":
          valid = this._isValidTypeBoolean(val); // no need to get vals
          break;
        case "float":
          valid = this._isValidTypeFloat(val, validParam.values);
          break;
        case "integer":
          valid = this._isValidTypeInteger(val, validParam.values);
          break;
        case "value":
          valid = this._isValidTypeValue(val, validParam.values);
          break;
        case "string":
          valid = true; // All null or strings are valid
          break;
      }
      return valid;
    },

    _isValidTypeBoolean: function(val) {
      if (val === true || val === "true" || val === false || val === "false") {
        return true;
      } else  {
        return false;
      }
    },

    _isValidTypeInteger: function(val, values) {
      var v = parseInt(val);
      if (v !== NaN && v >= values[0] && v <= values[1]) {
        return true;
      } else {
        return false;
      }
    },

    _isValidTypeFloat: function(val, values) {
      var v = parseFloat(val);
      if (v !== NaN && v >= values[0] && v <= values[1]) {
        return true;
      } else {
        return false;
      }
    },

    _isValidTypeValue: function(val, values) {
      if (val && values.indexOf(val) > -1) {
        return true;
      } else {
        return false;
      }
    }

  })
});





