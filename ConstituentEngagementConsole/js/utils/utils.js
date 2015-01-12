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
    "dojo/dom-construct",
    "dojo/query"
    ], function (
    dom,
    coreFx,
    domClass,
    ThemeCss,
    string,
    domConstruct,
    query
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
            var cssString, head, style;
            //if theme is configured
            if (dojo.configData.theme) {
                //substitute theme color values in theme template
                cssString = string.substitute(ThemeCss, {
                    SelectedThemeColor: dojo.configData.theme
                });
                //Create Style using theme template and append it to head
                //On Lower versions of IE10 Style tag is read only so create theme using styleSheet.cssText
                if (dojo.isIE < 10) {
                    head = document.getElementsByTagName('head')[0];
                    style = document.createElement('style');
                    style.type = 'text/css';
                    style.styleSheet.cssText = cssString;
                    head.appendChild(style);
                } else {
                    domConstruct.create("style", {
                        "type": "text/css",
                        "innerHTML": cssString
                    }, dojo.query("head")[0]);
                }
            }
        },

        /**
        * This function is used to get format of date
        * @memberOf utils/utils
        */
        getDateFormat: function (type) {
            switch (type) {
            case "shortDate":
                return "MM/DD/YYYY";
            case "shortDateLE":
                return "DD/MM/YYYY";
            case "longMonthDayYear":
                return "MMMM DD,YYYY";
            case "dayShortMonthYear":
                return "DD MMM YYYY";
            case "longDate":
                return "dddd, MMMM DD, YYYY";
            case "shortDateLongTime":
                return "MM/DD/YYYY h:mm:ss a";
            case "shortDateLELongTime":
                return "DD/MM/YYYY h:mm:ss a";
            case "shortDateShortTime":
                return "DD/MM/YYYY h:mm a";
            case "shortDateLEShortTime":
                return "MM/DD/YYYY h:mm a";
            case "shortDateShortTime24":
                return "MM/DD/YYYY HH:mm";
            case "shortDateLEShortTime24":
                return "MM/DD/YYYY HH:mm";
            case "longMonthYear":
                return "MMMM YYYY";
            case "shortMonthYear":
                return "MMM YYYY";
            case "year":
                return "YYYY";
            default:
                return "MMMM DD,YYYY";
            }
        },

        /**
        * This function is used to convert number to thousand seperator
        * @memberOf utils/utils
        */
        convertNumberToThousandSeperator: function (number) {
            return number.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        }
    };
});