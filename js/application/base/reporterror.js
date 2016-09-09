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
  "dojo/dom",
  "dojo/dom-class",
  "dojo/query"
], function (
  dom, domClass, query) {

	var CSS = {
    loading: "boilerplate--loading",
    error: "boilerplate--error",
    errorIcon: "esri-icon-notice-round"
  };

  var Name = {
    error: "Error:",
    warning: "Warning:",
    attention: "Attention:",
    snap: "Aw, Snap!"
  };

	var Err = {
 		show: function(errType, errMsg) {
      domClass.remove(document.body, CSS.loading);
      var node = dom.byId("calciteErrorMessage");
      if (node) {
        node.innerHTML = `<span class="esri-icon-notice-round"></span><span class="calcite-err-msg"><strong>&nbsp;&nbsp;${errType}</strong>&nbsp;${errMsg}</span>`;
        query(".calcite-alert").removeClass("hidden");
      }
      var err = new Error(errType + " " + errMsg);
      return err;
    },
    hide: function() {
       var node = dom.byId("calciteErrorMessage");
      if (node) {
        query(".calcite-alert").addClass("hidden");
      }
    },
    removeLoading: function() {
    	domClass.remove(document.body, CSS.loading);
    }	  
	}

	Err.CSS = CSS;
  Err.name = Name;

	return Err;
});