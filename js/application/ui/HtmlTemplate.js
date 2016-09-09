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
  "application/base/selectors",

  "dojo/dom",
  "dojo/dom-attr",
  "dojo/dom-class",
  "dojo/query",
  "dojo/dom-construct",

  "dojo/_base/declare",
], function (
  SELECTORS,
  basemapDefs,
  Slide, Collection, Viewpoint, Extent,
  dom, domAttr, domClass, query, domConstruct,
  declare
) {

  return declare(null, {

    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    constructor: function () {

      var menuContainer = query(SELECTORS.dropdownMenu);
      if (menuContainer && menuContainer.length > 0) {
        this._menuContainer = menuContainer[0];
      }
      var panelContainer = query(SELECTORS.panelContainer);
      if (panelContainer && panelContainer.length > 0) {
        this._panelContainer = panelContainer;  
      }

	    // Menu
	    //this._setMenusTitleText(i18n);
	    // htmlBuilder.createMenuItem(i18n.menu.items.about, "About", "glyphicon-info-sign", "active", "last");
	    // htmlBuilder.createMenuItem(i18n.menu.items.legend, "Legend", "glyphicon-th-list", "", "last");
	    // htmlBuilder.createMenuItem(i18n.menu.items.basemaps, "Basemaps", "glyphicon-th-large", "", "last");
	    // htmlBuilder.createMenuItem(i18n.menu.items.slides, "Bookmarks", "glyphicon-picture", "", "last");
	    // htmlBuilder.createMenuItemToggle(i18n.menu.items.toggleNav,  "calciteToggleNavbar", "ToggleNav", "glyphicon-fullscreen", "last");

    },

    createMenuItem: function (id, name, icon, active, location) {
      if (this._menuContainer) {
        var menu = this._menuTemplate(id, name, icon, active);
        domConstruct.place(menu, this._menuContainer, location);
      }
    },

    createMenuItemToggle: function(id, id2, name, icon, location) {
      if (this._menuContainer) {
        var menu = this._menuTemplateToggle(id, id2, name, icon);
        domConstruct.place(menu, this._menuContainer, location);
      }
    },

    createPanel: function (id, name, icon, active, location, bodyContent) {
      if (this._panelContainer) {
        var panel = this._panelTemplate;
        domConstruct.place(panel, panelContainer[0], location);
      }
    },

    // Templates

    _menuTemplate: function(id, name, icon, active) {
      return `<li id="menu${id}" class="${active}"><a role="button" data-target="#panel${id}" aria-haspopup="true"><span class="glyphicon ${icon}"></span>${name}</a></li>`;
    },

    _menuTemplateToggle: function(id, id2, name, icon) {
      return `<li id="menu${id}"><a role="button" id="${id2}" aria-haspopup="true"><span class="glyphicon ${icon}"></span>${name}</a></li>`;
    },

    _panelTemplate: function (id, name, icon, active, bodyContent) {
      return `<div id="panel${id}" class="panel collapse ${active}">
        <div id="heading${id}" class="panel-heading" role="tab">
          <div class="panel-title">
            <a class="panel-toggle" role="button" data-toggle="collapse" href="#collapse${id}"  aria-expanded="true" aria-controls="collapse${id}"><span class="glyphicon ${icon}" aria-hidden="true"></span><span class="panel-label">${name}</span></a> 
            <a class="panel-close" role="button" data-toggle="collapse" data-target="#panel${id}"><span class="esri-icon esri-icon-close" aria-hidden="true"></span></a>  
          </div>
        </div>
        <div id="collapse${id}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading${id}">
          <div class="panel-body">${bodyContent}</div>
       </div>
      </div>`;      
    },

    _panelBodyLegend: function(legendDiv) {
      return `<div id="${legendDiv}"></div>`;
    }

  })
});

  

