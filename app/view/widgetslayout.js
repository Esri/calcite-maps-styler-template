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
define([], function () {

  var POSITION = {
    topLeft: "top-left",
    topRight: "top-right",
    bottomLeft: "bottom-left",
    bottomRight: "bottom-right"
  };

  var WIDGETS_LAYOUTS = {
    topLeft: {
      zoomin: POSITION.topLeft,
      home: POSITION.topLeft,
      navtoggle: POSITION.topLeft,
      locate: POSITION.topLeft,
      track: POSITION.topLeft,
      compass: POSITION.topLeft,
      scalebar: POSITION.bottomLeft,
      search: POSITION.topRight,
      basemaptoggle: POSITION.bottomRight
    },
    topRight:  {
      zoomin: POSITION.topRight,
      home: POSITION.topRight,
      navtoggle: POSITION.topRight,
      locate: POSITION.topRight,
      track: POSITION.topRight,
      compass: POSITION.topRight,
      scalebar: POSITION.bottomLeft,
      search: POSITION.topLeft,
      basemaptoggle: POSITION.bottomRight
    },
    bottomLeft: {
      zoomin: POSITION.bottomLeft,
      home: POSITION.bottomLeft,
      navtoggle: POSITION.bottomLeft,
      locate: POSITION.bottomLeft,
      track: POSITION.bottomLeft,
      scalebar: POSITION.topLeft,
      compass: POSITION.bottomLeft,
      search: POSITION.topRight,
      basemaptoggle: POSITION.bottomRight
    },
    bottomRight: {
      zoomin: POSITION.bottomRight,
      home: POSITION.bottomRight,
      navtoggle: POSITION.bottomRight,
      locate: POSITION.bottomRight,
      track: POSITION.bottomRight,
      compass: POSITION.bottomRight,
      scalebar: POSITION.bottomLeft,
      search: POSITION.topLeft,
      basemaptoggle: POSITION.bottomLeft
    }
  };

  WIDGETS_LAYOUTS.POSITION = POSITION;

  return WIDGETS_LAYOUTS;
});
 