/*global define */
/*jslint sloppy:true */
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
            error: "לא ניתן ליצור מפה"
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
            infoBtnToolTip: "מידע על המפה", // Display tool-tip on command button to display description of web-map
            openWebmapList: "כן_Open panel____ש", //tooltip for toggle button
            closeWebmapList: "כן_Close panel____ש" //tooltip for toggle button
        },
        geoform: {
            enterInformation: "כן_Details___ש", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "כן_Attachments____ש", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "כן_Browse___ש", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "כן_Location___ש", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "כן_Submit___ש", // Command button to submit the geoform to report an issue
            cancelButton: "כן_Cancel___ש", //Command button to close the geoform
            requiredField: "כן_(required)____ש", // Shown next to the field in which the data is mandatory
            selectDefaultText: "כן_Select&hellip;_____ש", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "כן_Please enter valid value_________ש.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "כן_Layer fields are not configured to capture data_______________ש", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "כן_Please enter an integer________ש", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "הזן מספר שלם", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "הזן מספר", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "הזן מספר", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "כן_Please provide values for all required fields_______________ש", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "כן_Please select the location for your report______________ש", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "כן_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________ש", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "כן_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________ש", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "כן_Report could not be submitted__________ש", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "כן_attachment(s) selected________ש", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "כן_${failed} of ${total} attachment(s) failed to upload_________________ש", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "כן_Current location not available__________ש", // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "כן_Current location is out of basemap extent_____________ש", // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "כן_Save__ש", // Command button to open the geoform
            cancelButtonTooltip: "כן_Cancel___ש", //tooltip for cancel button
            geoformBackButtonTooltip: "כן_Return to the report list_________ש", //tooltip for Geoform back button
            updateFeaturesConfirmationMsg: "כן_${count} features will be updated___________ש", //confirmation essage to be displayed before updating the features
            attachmentHeaderText: "כן_Attachments____ש" //attachment header Text
        },
        mapViewer: {
            zoomInToolTip: "כן_Zoom in___ש", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "התמקד החוצה" // Display tool-tip on command button to zoom out map
        },
        applicationHeader: {
            signInOption: "הירשם", // Appears when user has not signed in
            signOutOption: "התנתק", // Appears when user has not signed in
            pleaseSignInText: "אנא התחבר" // Appears when user needs to sign-in into the application
        },
        dataviewer: {
            noIssuesReported: "אין דוחות זמינים", // Appears when no issues are available in current extent
            noFeatureGeometry: "לא ניתן להציג את הישות", // Appears when user selects/activates a feature and geometry is available for that
            ascendingFlagTitle: "כן_Sort in ascending order________ש", // Appears as a label for Ascending flag as a sorting option
            descendingFlagTitle: "כן_Sort in descending order________ש", // Appears as a label for Descending flag as a sorting option
            filterLabel: "כן_Filter___ש", // Appears as a label for Filter container
            valueRadioButtonLabel: "כן_Value___ש", // Appears as a label for 'Value' radio button in filter container
            uniqueRadioButtonLabel: "כן_Unique___ש", // Appears as a label for 'Unique' radio button in filter container
            selectLayerToBegin: "כן_Select a category to get started___________ש", // for showing default message on application load
            layerFeatureCount: "כן_${featureCount} records________ש" // Appears beside operational layer name to display count of feature
        },
        timeSlider: {
            timeSliderLabel: "כן_Time range____ש", // Appears beside time slider widget
            timeSliderInEditModeAlert: "כן_Time slider unavailable while editing____________ש" // Displayed when user tries to change time-slider in edit mode
        },
        comment: {
            commentsFormSubmitButton: "כן_Save__ש", // Displayed on submit button to display comments
            commentsFormCancelButton: "כן_Cancel___ש", // Displayed on cancel button to cancel comments
            errorInSubmittingComment: "כן_Edits could not be saved_________ש.", // Shown when user is unable to add comments
            emptyCommentMessage: "כן_Value required_____ש", // Shown when user submits a comment without any text/character
            placeHolderText: "", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "כן_No records available_______ש", // Shown when no comments are available for the selected issue
            remainingTextCount: "כן_${0} character(s) remain________ש", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "כן_No__ש" // Shown when comments character limit is exceeded
        },
        main: {
            noGroup: "לא הוגדרה קבוצה" // Appears when no group is configured
        },
        search: {
            searchIconTooltip: "כן_Search this layer______ש", // Displayed on hover of search icon
            noResultFoundText: "כן_No results found______ש", // Displayed when no results are found after search
            searchInEditModeAlert: "כן_Search unavailable while editing___________ש" // Displayed when no results are found after search
        },
        manualRefresh: {
            manualRefreshIconTooltip: "כן_Refresh___ש", // Displayed on hover of manual refresh icon
            confirmManualRefeshText: "כל הבחירות והשינויים שלא נשמרו יבוטלו" // Appears when user wants to do manual refresh
        },
        help: {
            helpIconTooltip: "כן_Help__ש" // Displayed on hover of manual refresh icon
        },
        filter: {
            noFeatureFoundText: "כן_No feature found for this value___________ש.", // Displayed when no feature is found after applying filter
            distinctQueryFalied: "כן_No distinct values found for the field_____________ש.", // Displayed when query fails while fetching distinct values in filter unique value section
            andText: "כן_and__ש", // Displayed in filter UI when "is between" case is applied to its field
            filterInEditModeAlert: "כן_Filters unavailable while editing___________ש", // Displayed when user tries to applies filter in edit mode
            dropdownSelectOption: "כן_Select___ש" // Displayed as a first option in a filter dropdown
        },
        detailsPanel: {
            editContentText: "כן_Edit record____ש" // Displayed on hover of edit toggle button
        },
        signOutPage: {
            signOutMessage: "התנתקת בהצלחה", // Appears when user is successfully signed-out from application
            reSignInMessage: "לחץ כאן כדי להתחבר" // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);