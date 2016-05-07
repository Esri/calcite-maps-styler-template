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
define({
    root: ({
        map: {
            error: "Δεν είναι δυνατή η δημιουργία χάρτη"
        },
        webMapList: {
            owner: "Κάτοχος", // Appears in web-map list description panel when it is set to true
            created: "Ημερομηνία δημιουργίας", // Appears in web-map list description panel when it is set to true
            modified: "Ημερομηνία τροποποίησης", // Appears in web-map list description panel when it is set to true
            description: "Περιγραφή", // Appears in web-map list description panel when it is set to true
            snippet: "Σύνοψη", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Περιορισμοί στην πρόσβαση και τη χρήση", // Appears in web-map list description panel when it is set to true
            accessInformation: "Συντελεστές", // Appears in web-map list description panel when it is set to true
            tags: "Ετικέτες", // Appears in web-map list description panel when it is set to true
            numViews: "Αριθμός προβολών", // Appears in web-map list description panel when it is set to true
            avgRating: "Αξιολόγηση", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Η παραμετροποιημένη ομάδα δεν είναι έγκυρη ή δεν έχει γίνει ακόμη κοινοποίηση στοιχείων σε αυτήν την ομάδα", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Πληροφορίες χάρτη", // Display tool-tip on command button to display description of web-map
            openWebmapList: "Đ_Open panel____ớ", //tooltip for toggle button
            closeWebmapList: "Đ_Close panel____ớ" //tooltip for toggle button
        },
        geoform: {
            enterInformation: "Đ_Details___ớ", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "Đ_Attachments____ớ", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "Đ_Browse___ớ", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "Đ_Location___ớ", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "Đ_Submit___ớ", // Command button to submit the geoform to report an issue
            cancelButton: "Đ_Cancel___ớ", //Command button to close the geoform
            requiredField: "Đ_(required)____ớ", // Shown next to the field in which the data is mandatory
            selectDefaultText: "Đ_Select&hellip;_____ớ", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "Đ_Please enter valid value_________ớ.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "Đ_Layer fields are not configured to capture data_______________ớ", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "Đ_Please enter an integer________ớ", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "Εισαγάγετε έναν ακέραιο αριθμό", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "Εισαγάγετε έναν αριθμό", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "Εισαγάγετε έναν αριθμό", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "Đ_Please provide values for all required fields_______________ớ", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "Đ_Please select the location for your report______________ớ", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "Đ_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________ớ", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "Đ_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________ớ", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "Đ_Report could not be submitted__________ớ", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "Đ_attachment(s) selected________ớ", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "Đ_${failed} of ${total} attachment(s) failed to upload_________________ớ", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "Đ_Current location not available__________ớ", // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "Đ_Current location is out of basemap extent_____________ớ", // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "Đ_Save__ớ", // Command button to open the geoform
            cancelButtonTooltip: "Đ_Cancel___ớ", //tooltip for cancel button
            geoformBackButtonTooltip: "Đ_Return to the report list_________ớ", //tooltip for Geoform back button
            updateFeaturesConfirmationMsg: "Đ_${count} features will be updated___________ớ", //confirmation essage to be displayed before updating the features
            attachmentHeaderText: "Đ_Attachments____ớ" //attachment header Text
        },
        mapViewer: {
            zoomInToolTip: "Đ_Zoom in___ớ", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Απομάκρυνση σε μικρότερη κλίμακα" // Display tool-tip on command button to zoom out map
        },
        applicationHeader: {
            signInOption: "Είσοδος", // Appears when user has not signed in
            signOutOption: "Έξοδος", // Appears when user has not signed in
            pleaseSignInText: "Εισέλθετε" // Appears when user needs to sign-in into the application
        },
        dataviewer: {
            noIssuesReported: "Δεν υπάρχουν διαθέσιμες αναφορές", // Appears when no issues are available in current extent
            noFeatureGeometry: "Δεν είναι δυνατή η εμφάνιση του στοιχείου", // Appears when user selects/activates a feature and geometry is available for that
            ascendingFlagTitle: "Đ_Sort in ascending order________ớ", // Appears as a label for Ascending flag as a sorting option
            descendingFlagTitle: "Đ_Sort in descending order________ớ", // Appears as a label for Descending flag as a sorting option
            filterLabel: "Đ_Filter___ớ", // Appears as a label for Filter container
            valueRadioButtonLabel: "Đ_Value___ớ", // Appears as a label for 'Value' radio button in filter container
            uniqueRadioButtonLabel: "Đ_Unique___ớ", // Appears as a label for 'Unique' radio button in filter container
            selectLayerToBegin: "Đ_Select a category to get started___________ớ", // for showing default message on application load
            layerFeatureCount: "Đ_${featureCount} records________ớ" // Appears beside operational layer name to display count of feature
        },
        timeSlider: {
            timeSliderLabel: "Đ_Time range____ớ", // Appears beside time slider widget
            timeSliderInEditModeAlert: "Đ_Time slider unavailable while editing____________ớ" // Displayed when user tries to change time-slider in edit mode
        },
        comment: {
            commentsFormSubmitButton: "Đ_Save__ớ", // Displayed on submit button to display comments
            commentsFormCancelButton: "Đ_Cancel___ớ", // Displayed on cancel button to cancel comments
            errorInSubmittingComment: "Đ_Edits could not be saved_________ớ.", // Shown when user is unable to add comments
            emptyCommentMessage: "Đ_Value required_____ớ", // Shown when user submits a comment without any text/character
            placeHolderText: "", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "Đ_No records available_______ớ", // Shown when no comments are available for the selected issue
            remainingTextCount: "Đ_${0} character(s) remain________ớ", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "Đ_No__ớ" // Shown when comments character limit is exceeded
        },
        main: {
            noGroup: "Δεν έχει παραμετροποιηθεί κάποια ομάδα" // Appears when no group is configured
        },
        search: {
            searchIconTooltip: "Đ_Search this layer______ớ", // Displayed on hover of search icon
            noResultFoundText: "Đ_No results found______ớ", // Displayed when no results are found after search
            searchInEditModeAlert: "Đ_Search unavailable while editing___________ớ" // Displayed when no results are found after search
        },
        manualRefresh: {
            manualRefreshIconTooltip: "Đ_Refresh___ớ", // Displayed on hover of manual refresh icon
            confirmManualRefeshText: "Όλες οι επιλογές και οι μη αποθηκευμένες αλλαγές θα απορριφθούν" // Appears when user wants to do manual refresh
        },
        help: {
            helpIconTooltip: "Đ_Help__ớ" // Displayed on hover of manual refresh icon
        },
        filter: {
            noFeatureFoundText: "Đ_No feature found for this value___________ớ.", // Displayed when no feature is found after applying filter
            distinctQueryFalied: "Đ_No distinct values found for the field_____________ớ.", // Displayed when query fails while fetching distinct values in filter unique value section
            andText: "Đ_and__ớ", // Displayed in filter UI when "is between" case is applied to its field
            filterInEditModeAlert: "Đ_Filters unavailable while editing___________ớ", // Displayed when user tries to applies filter in edit mode
            dropdownSelectOption: "Đ_Select___ớ" // Displayed as a first option in a filter dropdown
        },
        detailsPanel: {
            editContentText: "Đ_Edit record____ớ" // Displayed on hover of edit toggle button
        },
        signOutPage: {
            signOutMessage: "Αποσυνδεθήκατε με επιτυχία", // Appears when user is successfully signed-out from application
            reSignInMessage: "Κάντε κλικ εδώ για να συνδεθείτε" // Appears when user is signed-out from application and wants to sign-in again
        }
    }),
    "ar": 1,
    "cs": 1,
    "da": 1,
    "de": 1,
    "el": 1,
    "es": 1,
    "et": 1,
    "fi": 1,
    "fr": 1,
    "he": 1,
    "hr": 1,
    "it": 1,
    "ja": 1,
    "ko": 1,
    "lt": 1,
    "lv": 1,
    "nb": 1,
    "nl": 1,
    "pl": 1,
    "pt-br": 1,
    "pt-pt": 1,
    "ro": 1,
    "ru": 1,
    "sr": 1,
    "sv": 1,
    "th": 1,
    "tr": 1,
    "vi": 1,
    "zh-cn": 1,
    "zh-hk": 1,
    "zh-tw": 1
});