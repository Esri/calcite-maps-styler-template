/*global define,require,$,alert,console */
/*jslint browser:true */
define([], function () {
    'use strict';
    var tools;
    tools = {
        overallOK: true,

        init: function (numOfGroups) {
            // Create the test results display box
            $("head").append("<link href='js/tests/tests.css' rel='stylesheet'>");
            $("body").append("<div id='testsOut'><img id='testsAnchor' src='js/tests/anchor.png'/><div id='testsStatus'></div></div>");

            var i = 0, testsStatusDiv = $("#testsStatus")[0];
            while (i < numOfGroups) {
                $(testsStatusDiv).append("<div id='testStatusBlock" + i + "' class='testStatusBlock'></div>");
                i += 1;
            }
        },

        separateTestUrlParams: function (origURL) {
            var url, locale, test, browserLocale = window.navigator.language.substr(0, 2);

            url = origURL;

            locale = origURL.match(/(\?|&)locale=([\w\-]+)/);
            locale = (locale && locale[0]);
            if (locale) {
                url = url.replace(locale, "");
                locale = locale.substr(8);  // "*locale=".length
            } else if (browserLocale !== "en") {
                locale = browserLocale;
            } else {
                locale = undefined;
            }

            test = origURL.match(/(\?|&)test=[^&]+/);
            test = (test && test[0]);
            if (test) {
                url = url.replace(test, "");
                test = test.substr(6);  // "*test=".length
            }

            if (url.length > 0) {
                url = url.substr(1);
            }

            return {
                url: url,
                locale: locale,
                test: test
            };
        },

        showStatus: function (groupNum, isOK, testTag) {
            console.log((testTag || ""), isOK);
            if (tools.overallOK) {
                $("#testStatusBlock" + groupNum).css("background-color", isOK
                    ? "#00ff00"
                    : "red");

                // Just alert for the first failure
                if (!isOK) {
                    tools.overallOK = false;
                    alert(testTag);
                }
            } else if (!isOK) {
                $("#testStatusBlock" + groupNum).css("background-color", "red");
            }
        },

        clearStatus: function (groupNum) {
            $("#testStatusBlock" + groupNum).css("background-color", "gray");
        }

    };
    return tools;
});
