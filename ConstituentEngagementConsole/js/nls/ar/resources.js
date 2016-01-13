/*global define */
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
define(
     ({
        map: {
            error: "يتعذر إنشاء الخريطة" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "لم يتم تكوين المجموعة" // Appears when no group is configured
        },
        webMapList: {
            owner: "المالك", // Appears in web-map list description panel when it is set to true
            created: "التاريخ الذي تم إنشائه", // Appears in web-map list description panel when it is set to true
            modified: "تاريخ التعديل", // Appears in web-map list description panel when it is set to true
            description: "الوصف", // Appears in web-map list description panel when it is set to true
            snippet: "الملخص", // Appears in web-map list description panel when it is set to true
            licenseInfo: "الدخول والاستخدام", // Appears in web-map list description panel when it is set to true
            accessInformation: "اعتمادات", // Appears in web-map list description panel when it is set to true
            tags: "علامات", // Appears in web-map list description panel when it is set to true
            numViews: "عدد مرات العرض", // Appears in web-map list description panel when it is set to true
            avgRating: "التقييم", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "المجموعات التي تم تكوينها غير صحيحة أو لم تتم مشاركة العناصر مع هذه المجموعة بعد", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "معلومات الخريطة" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "تسجيل الخروج", // Command button to sign-out from the application
            pleaseSignInText: "الرجاء تسجيل الدخول", // Appears when user needs to sign-in into the application
            showSelectedOption: "إظهار سجلات المعالم المحددة", // Command button to show selected records in data-viewer
            showAllOption: "إظهار الكل", // Command button to show all the records in data-viewer
            clearSelectionOption: "مسح التحديد", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "تكبير المعالم المحددة", // Command button to zoom map to selected records
            gridViewOption: "عرض القائمة", // Command button to display list view
            mapViewOption: "عرض الخريطة", // Command button to display map view
            gridMapViewOption: "تقسيم العرض", // Command button to display split view
            settingsBtnToolTip: "Selection options", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "الخيارات", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "البحث عن هذه الطبقة", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "تحديث", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "سيتم تجاهل جميع عمليات التحديد والتغييرات غير المحفوظة", // Appears when user wants to do manual refresh
            signInOption: "تسجيل الدخول" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "لا توجد تقارير متاحة", // Appears when no issues are available in current extent
            photoAttachmentHeader: "المرفقات", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "برجاء إدخال عدد صحيح ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "برجاء إدخال عدد صحيح", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Please enter a number", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Please enter a number", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "برجاء إدخال قيمة", // Shown when user enters invalid string value
            invalidDate: "برجاء إدخال تاريخ صحيح", // Shown when user enters invalid date value
            invalidNumericRange: "برجاء إدخال قيمة بين ${minValue} و${maxValue}", // Shown when user enters value which is out of range
            moreInfolink: "ارتباط", // Shown when value in field contains only URL.
            commentsText: "التعليقات", // Appears when comments are available for display in details tab
            noCommentsAvailable: "لا توجد تعليقات متاحة", // Appears when no comments are available
            noFeatureGeometry: "يتعذر عرض المعالم" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "لم يتم تعريف التكوين" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "لم يتم العثور على أية نتائج" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "عرض المزيد من التفاصيل للمعالم النشطة", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "عرض الخريطة", // Display tool-tip on command button to view map panel
            zoomInToolTip: "التكبير", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "التصغير." // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "تم تسجيل الخروج بنجاح", // Appears when user is successfully signed-out from application
            reSignInMessage: "انقر هنا لتسجيل الدخول" // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);