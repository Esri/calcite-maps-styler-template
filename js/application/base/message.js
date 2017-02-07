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

  var Type = {
    error: "Error:",
    warning: "Warning:",
    attention: "Attention:",
    snap: "Aw, Snap!"
  };

  var _getMessage = function(error) {
      var userMsg;
      if (error.userMsg) {
        userMsg = error.userMsg + " " + error.message + ".";
      } else {
        userMsg = error.message + ".";
      }
      return userMsg;
  }

	var Message = {
 		show: function(errType, error, log, showMessages, clear) {
      errType = errType || Message.type.error;
      error = error || new Error("Styler error");
      var userMsg = Message.getMessage(error);
      // Hide loading
      domClass.remove(document.body, CSS.loading);
      // Show window
      if (showMessages) {
        var node = query(".calcite-alert .alert-message")[0];
        if (node) {
          // Accumulate all error messages
          if (node.innerHTML && !clear) {
            node.innerHTML = node.innerHTML + "<br><span><strong>" + errType + "</strong>&nbsp;" + userMsg + "</span>";
          } else {
            node.innerHTML = "<span><strong>" + errType + "</strong>&nbsp;" + userMsg + "</span>";
          }        
          query(".calcite-alert").removeClass("hidden");
          query(".calcite-alert .close").on("click", function(){
            query(".calcite-alert").addClass("hidden");
            if (node) {
              node.innerHTML = null;
            }
          });
        }
      }
      if (log) {
        console.error(userMsg + " " + error.name);
      }
      return error;
    },
    hide: function() {
      var node = dom.byId("calciteErrorMessage");
      if (node) {
        query(".calcite-alert").addClass("hidden");
      }
    },
    log: function(errType, error) {
      var userMsg = Message.getMessage(errType, error);
      console.error(userMsg + " " + error.name);
    },
    removeLoading: function() {
    	domClass.remove(document.body, CSS.loading);
    }	  
	}

	Message.CSS = CSS;
  Message.type = Type;
  Message.getMessage = _getMessage;

	return Message;
});