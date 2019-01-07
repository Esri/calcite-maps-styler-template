/*
  Copyright 2017 Esri

  Licensed under the Apache License, Version 2.0 (the "License");

  you may not use this file except in compliance with the License.

  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software

  distributed under the License is distributed on an "AS IS" BASIS,

  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

  See the License for the specific language governing permissions and

  limitations under the License.​
*/

define([
  "require",
  "dojo/text!config/applicationBase.json",
  "dojo/text!config/application.json",
  "ApplicationBase/ApplicationBase",
  "application/base/message",
  "dojo/i18n!./nls/resources",
  "./Main"],
  function (
    require,
    applicationBaseConfig,
    applicationConfig,
    ApplicationBase,
    Message,
    i18n,
    Application
  ) {
    var Main = new Application();

    new ApplicationBase({
      config: applicationConfig,
      settings: applicationBaseConfig
    }).load().then(function (base) {
      return Main.init(base);}, function(message) {
        if (message === "identity-manager:not-authorized") {
          Message.show(Message.type.error, new Error(i18n.licenseError.title + " - " + i18n.licenseError.message), true, true);
        }
    });
  });
