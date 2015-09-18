/*global define,require,$,console */
/*jslint browser:true,for:true */
define(['tests/tools'], function (tools) {
    'use strict';

    tools.init(6);

    // Set up common tests (test group 0)
    require(['tests/commonTests'], function () {
        return null;
    });

    // Set up tests appropriate to URL
    var i, testFile = null, testURLSplit = tools.separateTestUrlParams(document.location.search);
    switch (testURLSplit.url) {

    // Main cases
    case "appid=2ce4b44409a94f81a890881205c30393":
        testFile = "testSet1";
        break;

    case "webmap=70430e570f0840b4a5eb8da09cfa82f1&app=apps2/Finder":
        testFile = "testSet2";
        break;

    case "app=apps2/Finder_try_it":
        testFile = "testSet3";
        break;

    case "webmap=70430e570f0840b4a5eb8da09cfa82f1":
        testFile = "testSet4";
        break;

    // Variants of main cases
    case "":
        testFile = "testSet5";
        break;

    case "appid=2ce4b44409a94f81a890881205c30393&ex=-9279312,5238092,-9259324,5256972,102100":
        testFile = "testSet6";
        break;

    case "webmap=3c33240fbacd42339547a06a966dcbf7&appid=2ce4b44409a94f81a890881205c30393":
        testFile = "testSet7";
        break;

    default:
        for (i = 1; i < 6; i += 1) {
            tools.showStatus(i, false, "uncovered URL");
        }
        break;
    }

    if (testFile) {
        require(['tests/' + testFile], function () {
            return null;
        });
    }

});
