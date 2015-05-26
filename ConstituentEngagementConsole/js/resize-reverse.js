/*global $*/
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
$(window).load(function () {
    $.ui.plugin.add("resizable", "alsoResizeReverse", {

        start: function () {
            var that = $(this).data("ui-resizable"),
                o = that.options,
                _store = function (exp) {
                    $(exp).each(function () {
                        var el = $(this);
                        el.data("ui-resizable-alsoresize-reverse", {
                            width: parseInt(el.width(), 10),
                            height: parseInt(el.height(), 10),
                            left: parseInt(el.css("left"), 10),
                            top: parseInt(el.css("top"), 10)
                        });
                    });
                };

            if (typeof (o.alsoResizeReverse) === "object" && !o.alsoResizeReverse.parentNode) {
                if (o.alsoResizeReverse.length) {
                    o.alsoResizeReverse = o.alsoResizeReverse[0];
                    _store(o.alsoResizeReverse);
                } else {
                    $.each(o.alsoResizeReverse, function (exp) {
                        _store(exp);
                    });
                }
            } else {
                _store(o.alsoResizeReverse);
            }
        },

        resize: function (event, ui) {
            var that = $(this).data("ui-resizable"),
                o = that.options,
                os = that.originalSize,
                op = that.originalPosition,
                delta = {
                    height: (that.size.height - os.height) || 0,
                    width: (that.size.width - os.width) || 0,
                    top: (that.position.top - op.top) || 0,
                    left: (that.position.left - op.left) || 0
                },

                _alsoResizeReverse = function (exp, c) {
                    $(exp).each(function () {
                        var el = $(this),
                            start = $(this).data("ui-resizable-alsoresize-reverse"),
                            style = {},
                            css = c && c.length ? c : el.parents(ui.originalElement[0]).length ? ["width", "height", "top", "left"] : ["width", "height", "top", "left"];

                        $.each(css, function (i, prop) {
                            var sum = (start[prop] || 0) - (delta[prop] || 0);
                            if (sum && sum >= 0) {
                                style[prop] = sum || null;
                            }
                        });

                        el.css(style);
                    });
                };

            if (typeof (o.alsoResizeReverse) === "object" && !o.alsoResizeReverse.nodeType) {
                $.each(o.alsoResizeReverse, function (exp, c) {
                    _alsoResizeReverse(exp, c);
                });
            } else {
                _alsoResizeReverse(o.alsoResizeReverse);
            }
        },

        stop: function () {
            $(this).removeData("resizable-alsoresize-reverse");
        }
    });
});