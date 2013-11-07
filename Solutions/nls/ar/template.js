/*global define */
/*
 | ArcGIS Solutions
 | Version 10.2
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
define(
({
        tooltips: {
            search: "بحث",  // Command button to open a dialog box for searching for a feature or an address (depending on app)
            locate: "الموقع الحالي",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "إرسال التصحيح",  // Command button to submit a correction to the app's host
            collect: "بيت_Add content to map_لاحقة",  // Command button to open a template picker to add features to the map
            filter: "بيت_Filter map layers_لاحقة",  // Explains purpose of type-in box affiliated with template picker
            basemap: "تبديل خريطة الأساس",  // Command button to open a dialog box for switching basemaps
            share: "مشاركة",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "مشاركة عن طريق البريد الإلكتروني",  // Command button to share the current map extents via email
            shareViaFacebook: "مشاركة عن طريق Facebook",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "مشاركة عن طريق Twitter",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "طباعة الخريطة",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "عرض الخريطة المطبوعة",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "اتجاه صفحة أفقي",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "اتجاه صفحة عمودي",  // Command button in the print map dialog box to select the portrait page orientation
            help: "تعليمات"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "البريد الإلكتروني",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "فيس بوك",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "تويتر"  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
        },
        prompts: {
            search: "بحث:",  // Appears before a search text field in dialog box for searching for a feature
            markup: "رسم",  // Appears before a set of tools for drawing on the map
            mapLayers: "طبقات الخريطة:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the searchLayerMissing message
            layerFields: "حقول طبقة البحث:"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "لا يحتوي الموقع على أذن للحصول على الموقع الحالي",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "لم يتمكن المتصفح للحصول على الموقع الحالي",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "لم يتمكن المتصفح من الحصول على الموقع الحالي داخل الحالة في وقتها",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            searchLayerMissing: "لم يتم العثور على طبقة البحث في الخريطة",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the mapLayers prompt
            searchFieldMissing: "لم يتم العثور على هذا الحقل في طبقة بحث الخريطة"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the layerFields prompt
        }
    })
);
