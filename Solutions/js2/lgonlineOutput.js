/*global define,dojo,js,console,touchScroll */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true */
/*
 | Copyright 2012 Esri
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
    "dojo/dom-construct",
    "dojo/dom-class",
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/topic",
    "js/lgonlineBase"
], function (
    declare,
    domConstruct,
    domClass,
    array,
    lang,
    topic
) {

    //========================================================================================================================//

    declare("js.LGNotes", js.LGObject, {
        /**
         * Constructs an LGNotes.
         *
         * @constructor
         * @class
         * @name js.LGNotes
         * @extends js.LGObject
         * @classdesc
         * Displays a list of notes to the console.
         */
        constructor: function () {
            if (console && this.notes) {
                array.forEach(this.notes, function (note) {
                    console.log(note);
                });
            }
        }
    });

    //========================================================================================================================//

    declare("js.LGBusy", js.LGGraphic, {
        /**
         * Constructs an LGBusy.
         *
         * @constructor
         * @class
         * @name js.LGBusy
         * @extends js.LGGraphic
         * @classdesc
         * Manages the app's busy indicator.
         */
        constructor: function () {
            if (this.busyImageClass) {
                domClass.add(this.rootDiv, this.busyImageClass);
            }
        }
    });

    //========================================================================================================================//

    declare("js.LGLogBox", js.LGDropdownBox, {
        /**
         * Constructs an LGLogBox.
         *
         * @see Sets the global variable window.gLogMessageBox to point to
         *       this object.
         *
         * @constructor
         * @class
         * @name js.LGLogBox
         * @extends js.LGGraphic
         * @classdesc
         * Provides a UI display of log messages to supplement the
         * console.
         */
        constructor: function () {
            window.gLogMessageBox = this;
            touchScroll(this.rootDiv);
        },

        /**
         * Appends content to the root div.
         * @param {string|object} newContent A string that forms the
         *        innerHTML of a new div that's appended to the root div
         *        or an object that's appended to the root div
         * @memberOf js.LGLogBox#
         */
        append: function (newContent) {
            if (typeof newContent === "string") {
                domConstruct.create("div", {innerHTML: newContent, style: "margin:2px"}, this.rootDiv);

            } else if (typeof newContent === "object" && newContent !== null) {
                this.rootDiv.appendChild(newContent);
            }
        }
    });

    //========================================================================================================================//

    declare("js.LGMessageBox", js.LGDropdownBox, {
        /**
         * Constructs an LGMessageBox.
         *
         * @param {string} content HTML to insert into box
         *
         * @constructor
         * @class
         * @name js.LGMessageBox
         * @extends js.LGDropdownBox
         * @classdesc
         * Provides a UI display of a chunk of HTML.
         */
        constructor: function () {
            if (this.content) {
                this.content = this.checkForSubstitution(this.content);
            } else {
                this.content = "";
            }
            this.rootDiv.innerHTML = this.content;

            touchScroll(this.rootDiv);
        },

        /**
         * Sets the content of the message box and makes the box visible
         * @param {string} content HTML to insert into box
         * @memberOf js.LGMessageBox#
         */
        setMessage: function (content) {
            this.show();
            this.content = content;
            this.rootDiv.innerHTML = this.content;
        }
    });

    //========================================================================================================================//

    declare("js.LGSelfHidingMessageBox", js.LGMessageBox, {
        /**
         * Constructs an LGSelfHidingMessageBox.
         *
         * @param {string} content HTML to insert into box
         *
         * @constructor
         * @class
         * @name js.LGSelfHidingMessageBox
         * @extends js.LGMessageBox
         * @classdesc
         * Provides a UI display of a chunk of HTML; closes after the specified period of time
         */
        constructor: function () {
            this.timeoutSeconds = this.toNumber(this.timeoutSeconds, 5);
        },

        /**
         * Set up a listener for generic command activation.
         * @memberOf js.LGDropdownBox#
         * @override
         */
        setUpListeningForCommands: function () {
            // We ignore command activations--only close with timeout
            return;
        },

        /**
         * Handles a trigger by toggling visibility.
         * @param {object} [data] Data accompanying trigger.
         * @memberOf js.LGSelfHidingMessageBox#
         * @override
         */
        handleTrigger: function () {
            // If we're not visible, show ourselves for the specified time; box
            // only closes after timeout, not via trigger
            if (!this.getIsVisible()) {
                if (this.pendingClosure) {
                    clearTimeout(this.pendingClosure);
                    this.pendingClosure = null;
                }

                this.show();

                this.pendingClosure = setTimeout(lang.hitch(this, function () {
                    this.hide();
                    this.pendingClosure = null;
                }), this.timeoutSeconds * 1000);
            }
        }
    });

    //========================================================================================================================//

    declare("js.LGPublishEcho", js.LGDropdownBox, {
        /**
         * Constructs an LGPublishEcho.
         *
         * @class
         * @name js.LGPublishEcho
         * @extends js.LGDropdownBox
         * @classdesc
         * Provides a UI display of a published message.
         */

        /**
         * Handles a trigger by toggling visibility and displaying the
         * trigger's data.
         * @param {object} [data] Data accompanying trigger.
         * @memberOf js.LGPublishEcho#
         * @override
         */
        handleTrigger: function (data) {
            this.rootDiv.innerHTML = data.toString();
            this.setIsVisible(true);
        }
    });

    //========================================================================================================================//

    declare("js.LGMessageWatch", js.LGObject, {
        /**
         * Constructs an LGMessageWatch.
         *
         * @constructor
         * @class
         * @name js.LGMessageWatch
         * @extends js.LGObject
         * @classdesc
         * Listens to and logs message passing.
         */
        constructor: function () {
            var pThis = this;

            topic.subscribe("publish", function (message) {
                pThis.showMessage("message from", message);
            });

            topic.subscribe("receive", function (message) {
                pThis.showMessage("received by", message);
            });
        },

        /**
         * Echoes a message to the log.
         * @param {string} label Label to prefix message with
         * @param {object} message Message structure containing id, tag, and data
         * @memberOf js.LGMessageWatch#
         */
        showMessage: function (label, message) {
            var dataString = "";
            if (message.data) {
                try {
                    dataString = JSON.stringify(message.data);
                } catch (error) {
                    dataString = "<data>";
                }
            }
            this.log(label + " " + message.id + ": \"" + message.tag + "\" " + (dataString || ""));
        }
    });

    //========================================================================================================================//

});
/* 
This source is part of the git commit 
bb868ac73d73edfd 2016-04-20 09:49:59 -0700
It is available from https://github.com/Esri/local-government-online-apps 
*/ 
