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
define([
    "dojo/dom-class",
    "dojo/text!css/theme-template.css",
    "dojo/string",
    "dojo/dom-construct",
    "dojo/query"
], function (
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
        * @param{object} application configuration
        * @memberOf utils/utils
        */
        loadApplicationTheme: function (appConfig) {
            var cssString, head, style, link;
            //if theme is configured
            if (appConfig.theme) {
                //substitute theme color values in theme template
                cssString = string.substitute(ThemeCss, {
                    SelectedThemeColor: appConfig.theme,
                    ActivatedRowColor: appConfig.activeRow
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
                    }, query("head")[0]);
                }
                // If application is loaded in RTL mode, change styles of required nodes
                if (appConfig.i18n.direction === "rtl") {
                    link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.type = 'text/css';
                    link.href = "./css/rtl.css";
                    document.getElementsByTagName('head')[0].appendChild(link);
                }
            }
        },

        /**
        * This function is used to get format of date
        * @param{string} type of date
        * @memberOf utils/utils
        */
        getDateFormat: function (type) {
            var obj = {};
            switch (type) {
                case "shortDate":
                    obj.dateFormat = "MM/DD/YYYY";
                    obj.showTime = false;
                    return obj;
                case "shortDateLE":
                    obj.dateFormat = "DD/MM/YYYY";
                    obj.showTime = false;
                    return obj;
                case "longMonthDayYear":
                    obj.dateFormat = "MMMM DD, YYYY";
                    obj.showTime = false;
                    return obj;
                case "dayShortMonthYear":
                    obj.dateFormat = "DD MMM YYYY";
                    obj.showTime = false;
                    return obj;
                case "longDate":
                    obj.dateFormat = "dddd, MMMM DD, YYYY";
                    obj.showTime = false;
                    return obj;
                case "shortDateLongTime":
                    obj.dateFormat = "MM/DD/YYYY h:mm:ss a";
                    obj.showTime = true;
                    return obj;
                case "shortDateLELongTime":
                    obj.dateFormat = "DD/MM/YYYY h:mm:ss a";
                    obj.showTime = true;
                    return obj;
                case "shortDateShortTime":
                    obj.dateFormat = "DD/MM/YYYY h:mm a";
                    obj.showTime = true;
                    return obj;
                case "shortDateLEShortTime":
                    obj.dateFormat = "MM/DD/YYYY h:mm a";
                    obj.showTime = true;
                    return obj;
                case "shortDateShortTime24":
                    obj.dateFormat = "MM/DD/YYYY HH:mm";
                    obj.showTime = true;
                    return obj;
                case "shortDateLEShortTime24":
                    obj.dateFormat = "DD/MM/YYYY HH:mm";
                    obj.showTime = true;
                    return obj;
                case "longMonthYear":
                    obj.dateFormat = "MMMM YYYY";
                    obj.showTime = false;
                    return obj;
                case "shortMonthYear":
                    obj.dateFormat = "MMM YYYY";
                    obj.showTime = false;
                    return obj;
                case "year":
                    obj.dateFormat = "YYYY";
                    obj.showTime = false;
                    return obj;
                default:
                    obj.dateFormat = "MMMM DD, YYYY";
                    obj.showTime = false;
                    return obj;
            }
        },

        /**
        * This function is used to convert number to thousand seperator
        * @param{integer} number that needs to be converted into thousand seperator
        * @memberOf utils/utils
        */
        convertNumberToThousandSeperator: function (number) {
            return number.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        },

        /**
        * To determine the andriod operating system
        * @returns {bool}
        * @memberOf utils/utils
        */
        isAndroid: function () {
            var ua = navigator.userAgent.toLowerCase();
            return ua.indexOf("android") > -1;
        },

        /**
        * To determine the ios operating system
        * @returns {bool}
        * @memberOf utils/utils
        */
        isIos: function () {
            var ua = navigator.userAgent.toLowerCase();
            return ua.indexOf("ipad") > -1;
        }
    };
});