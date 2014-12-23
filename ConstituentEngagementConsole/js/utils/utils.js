/*global define,document,alert,dojo */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true,indent:4 */
/*
| Copyright 2014 Esri
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
define(["dojo/dom",
    "dojo/_base/fx",
    "dojo/dom-class",
    "dojo/text!css/theme-template.css",
    "dojo/string",
    "dojo/dom-construct"
    ], function (
    dom,
    coreFx,
    domClass,
    ThemeCss,
    string,
    domConstruct
) {
    return {

        /**
        * This function is used to show loading indicator.
        * @memberOf utils/utils
        */
        showLoadingIndicator: function () {
            domClass.add(document.body, "app-loading");
        },

        /**
        * This function is used to hide loading indicator.
        * @memberOf utils/utils
        */
        hideLoadingIndicator: function () {
            domClass.remove(document.body, "app-loading");
        },

        /**
        * This function is used to show error
        * @param {string} error to be shown
        * @memberOf utils/utils
        */
        showError: function (error) {
            alert(error);
        },

        /**
        * This function is used to show message.
        * @param {string} message to be shown
        * @memberOf utils/utils
        */
        showMessage: function (message) {
            alert(message);
        },

        /**
        * This function is used to load application theme.
        * @memberOf utils/utils
        */
        loadApplicationTheme: function () {
            try {
                var cssString;
                if (dojo.configData.theme) {
                    cssString = string.substitute(ThemeCss, {
                        SelectedThemeColor: dojo.configData.theme
                    });
                    domConstruct.create("style", {
                        "type": "text/css",
                        "innerHTML": cssString
                    }, dojo.query("head")[0]);
                }
            } catch (err) {
                dojo.applicationUtils.showError(err.message);
            }
        }
    };
});