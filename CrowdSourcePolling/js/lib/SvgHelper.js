/*global define,dojo */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true */
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
//============================================================================================================================//
define([
    "dojo/_base/declare",
    "dojox/gfx",
    "dojox/gfx/utils",
    "dojo/_base/array",
    "dojo/domReady!"
], function (
    declare,
    gfx,
    gfxUtils,
    array
) {

    //========================================================================================================================//

    return {

        /**
         * Creates an SVG item in the specified container.
         * @param {object} definition JSON text describing the SVG item, e.g.,
         * "[{'shape':{'type':'circle','cx':13,'cy':13,'r':10},...,'style':'solid','width':2,'cap':'butt','join':4}}]"
         * Its color(s) for lines and text fill are ignored
         * @param {object} container The div to receive the item
         * @param {number} width The width to use for the item
         * @param {number} height The height to use for the item
         * @return {object} The created SVG surface, which can be used, e.g., to change the
         * color of the SVG; @see {@link changeColor}
         */
        createSVGItem: function (definition, container, width, height) {
            var surface;

            // Create the vectors from the JSON description
            surface = gfx.createSurface(container, width, height);
            surface.whenLoaded(function () {
                // Wait until surface is ready before drawing on it
                // http://dojotoolkit.org/reference-guide/1.10/dojox/gfx.html#core-concepts
                gfxUtils.fromJson(surface, definition);
            });

            return surface;
        },

        /**
         * Changes the color of the children of an SVG surface.
         * @param {object} surface An SVG surface
         * @param {object} newColor The new color as "a named color, hex color,
         * linear gradient, or radial gradient"
         * (http://dojotoolkit.org/documentation/tutorials/1.10/gfx/)
         * @example
         * changeColor(surface, "#007ac2");
         * @example
         * changeColor(surface, "red");
         */
        changeColor: function (surface, newColor) {
            array.forEach(surface.children, function (component) {
                var stroke, fill;

                stroke = component.getStroke();
                if (stroke) {
                    stroke.color = newColor;
                    component.setStroke(stroke);
                }

                fill = component.getFill();
                if (fill) {
                    component.setFill(newColor);
                }
            });
        }

    };

    //========================================================================================================================//

});
