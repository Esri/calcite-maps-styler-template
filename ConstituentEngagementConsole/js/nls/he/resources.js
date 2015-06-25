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
            error: "לא ניתן ליצור מפה" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "לא הוגדרה קבוצה" // Appears when no group is configured
        },
        webMapList: {
            owner: "יוצר", // Appears in web-map list description panel when it is set to true
            created: "תאריך יצירה", // Appears in web-map list description panel when it is set to true
            modified: "תאריך שינוי", // Appears in web-map list description panel when it is set to true
            description: "תיאור", // Appears in web-map list description panel when it is set to true
            snippet: "סיכום", // Appears in web-map list description panel when it is set to true
            licenseInfo: "מגבלות גישה ושימוש", // Appears in web-map list description panel when it is set to true
            accessInformation: "קרדיט", // Appears in web-map list description panel when it is set to true
            tags: "תגיות", // Appears in web-map list description panel when it is set to true
            numViews: "מספר מבטים", // Appears in web-map list description panel when it is set to true
            avgRating: "דירוג", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "הקבוצה שהוגדרה לא חוקית או שלא שותפו עדיין פריטים עם קבוצה זו", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "מידע על המפה" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "התנתק", // Command button to sign-out from the application
            pleaseSignInText: "אנא התחבר", // Appears when user needs to sign-in into the application
            showSelectedOption: "הצג בחורים", // Command button to show selected records in data-viewer
            showAllOption: "הצג הכל", // Command button to show all the records in data-viewer
            clearSelectionOption: "נקה בחירה", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "התמקד לנבחרים", // Command button to zoom map to selected records
            gridViewOption: "תצוגת רשימה", // Command button to display list view
            mapViewOption: "תצוגת מפה", // Command button to display map view
            gridMapViewOption: "תצוגה מפוצלת", // Command button to display split view
            settingsBtnToolTip: "אפשרויות בחירה", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "הצג אפשרויות", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "חפש בשכבה זו", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "רענן", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "כל הבחירות והשינויים שלא נשמרו יבוטלו", // Appears when user wants to do manual refresh
            signInOption: "הירשם" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "אין דוחות זמינים", // Appears when no issues are available in current extent
            photoAttachmentHeader: "קישורים", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "הזן מספר שלם ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "הזן מספר שלם", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "הזן מספר", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "הזן מספר", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "הזן ערך", // Shown when user enters invalid string value
            invalidDate: "הזן תאריך חוקי", // Shown when user enters invalid date value
            invalidNumericRange: "הזן ערך בין ${minValue} ל-‏${maxValue}", // Shown when user enters value which is out of range
            moreInfolink: "קישור", // Shown when value in field contains only URL.
            commentsText: "הערות", // Appears when comments are available for display in details tab
            noCommentsAvailable: "אין הערות זמינות", // Appears when no comments are available
            noFeatureGeometry: "לא ניתן להציג את הישות" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "לא הוגדרה קונפיגורציה" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "לא נמצאו תוצאות" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "הצג פרטים נוספים עבור הישות הפעילה", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "צפה במפה", // Display tool-tip on command button to view map panel
            zoomInToolTip: "התמקד פנימה", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "התמקד החוצה" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "התנתקת בהצלחה", // Appears when user is successfully signed-out from application
            reSignInMessage: "לחץ כאן כדי להתחבר" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "Crowdsource Manager, תבנית קבוצתית הנלווית ל-<a href=\'http://solutions.arcgis.com/local-government/help/crowdsource-reporter/\' target=\'_blank\'>Crowdsource Reporter</a>‏, היא תבנית אפליקציה קבוצתית בעלת כושר תגובה (להתקנים שולחניים ולמחשבי לוח) המאפשרת למשתמשים בתוך הארגון לבחון בעיות/הערות אשר הוזנו דרך אפליקציית Manager.", // Appears when preview page is loaded
            section2: "האפליקציה מציגה למשתמשים מפה אחת או יותר כדי לבחון בעיה או הערה. משתמשים יכולים לחפש דפוסים ואשכולות, לבחון את פרטי הבעיה, לעדכן סטטוס ולהקצות תחומי אחריות.", // Appears when preview page is loaded
            section3: "ניתן להוריד את קוד המקור של האפליקציה לביצוע הגדרות קונפיגורציה נוספות. את הגדרות הקונפיגורציה הנוספות הללו ניתן ליישם בחזרה על פריט אפליקציית אינטרנט ניתן להגדרה של ArcGIS Online או לארח בשרת האינטרנט שלך.<br /> למידע נוסף על הגדרת האפליקציה, עיין במסמכי <a href=\'http://solutions.arcgis.com/local-government/help/crowdsource-manager/\' target=\'_blank\'>Crowdsource Manager</a>‏." // Appears when preview page is loaded
        }
    })
);