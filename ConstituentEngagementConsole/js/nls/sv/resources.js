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
            error: "Det går inte att skapa kartan"
        },
        webMapList: {
            owner: "Ägare", // Appears in web-map list description panel when it is set to true
            created: "Skapad den", // Appears in web-map list description panel when it is set to true
            modified: "Ändrad den", // Appears in web-map list description panel when it is set to true
            description: "Beskrivning", // Appears in web-map list description panel when it is set to true
            snippet: "Sammanfattning", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Begränsningar av åtkomst och användning", // Appears in web-map list description panel when it is set to true
            accessInformation: "Krediter", // Appears in web-map list description panel when it is set to true
            tags: "Taggar", // Appears in web-map list description panel when it is set to true
            numViews: "Antal visningar", // Appears in web-map list description panel when it is set to true
            avgRating: "Bedömning", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Den konfigurerade gruppen är ogiltig eller inga objekt har delats med den här gruppen ännu", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Kartinformation", // Display tool-tip on command button to display description of web-map
            openWebmapList: "Å_Open panel____ö", //tooltip for toggle button
            closeWebmapList: "Å_Close panel____ö" //tooltip for toggle button
        },
        geoform: {
            enterInformation: "Å_Details___ö", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "Å_Attachments____ö", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "Å_Browse___ö", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "Å_Location___ö", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "Å_Submit___ö", // Command button to submit the geoform to report an issue
            cancelButton: "Å_Cancel___ö", //Command button to close the geoform
            requiredField: "Å_(required)____ö", // Shown next to the field in which the data is mandatory
            selectDefaultText: "Å_Select&hellip;_____ö", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "Å_Please enter valid value_________ö.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "Å_Layer fields are not configured to capture data_______________ö", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "Å_Please enter an integer________ö", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "Ange ett heltal", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "Ange ett tal", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "Ange ett tal", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "Å_Please provide values for all required fields_______________ö", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "Å_Please select the location for your report______________ö", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "Å_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________ö", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "Å_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________ö", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "Å_Report could not be submitted__________ö", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "Å_attachment(s) selected________ö", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "Å_${failed} of ${total} attachment(s) failed to upload_________________ö", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "Å_Current location not available__________ö", // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "Å_Current location is out of basemap extent_____________ö", // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "Å_Save__ö", // Command button to open the geoform
            cancelButtonTooltip: "Å_Cancel___ö", //tooltip for cancel button
            geoformBackButtonTooltip: "Å_Return to the report list_________ö", //tooltip for Geoform back button
            updateFeaturesConfirmationMsg: "Å_${count} features will be updated___________ö", //confirmation essage to be displayed before updating the features
            attachmentHeaderText: "Å_Attachments____ö" //attachment header Text
        },
        mapViewer: {
            zoomInToolTip: "Å_Zoom in___ö", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Zooma ut" // Display tool-tip on command button to zoom out map
        },
        applicationHeader: {
            signInOption: "Logga in", // Appears when user has not signed in
            signOutOption: "Logga ut", // Appears when user has not signed in
            pleaseSignInText: "Logga in" // Appears when user needs to sign-in into the application
        },
        dataviewer: {
            noIssuesReported: "Inga rapporter tillgängliga", // Appears when no issues are available in current extent
            noFeatureGeometry: "Geoobjektet kan inte visas", // Appears when user selects/activates a feature and geometry is available for that
            ascendingFlagTitle: "Å_Sort in ascending order________ö", // Appears as a label for Ascending flag as a sorting option
            descendingFlagTitle: "Å_Sort in descending order________ö", // Appears as a label for Descending flag as a sorting option
            filterLabel: "Å_Filter___ö", // Appears as a label for Filter container
            valueRadioButtonLabel: "Å_Value___ö", // Appears as a label for 'Value' radio button in filter container
            uniqueRadioButtonLabel: "Å_Unique___ö", // Appears as a label for 'Unique' radio button in filter container
            selectLayerToBegin: "Å_Select a category to get started___________ö", // for showing default message on application load
            layerFeatureCount: "Å_No of records: ${featureCount}__________ö" // Appears beside operational layer name to display count of feature
        },
        timeSlider: {
            timeSliderLabel: "Å_Time range____ö", // Appears beside time slider widget
            timeSliderInEditModeAlert: "Å_Time slider unavailable while editing____________ö" // Displayed when user tries to change time-slider in edit mode
        },
        comment: {
            commentsFormSubmitButton: "Å_Save__ö", // Displayed on submit button to display comments
            commentsFormCancelButton: "Å_Cancel___ö", // Displayed on cancel button to cancel comments
            errorInSubmittingComment: "Å_Edits could not be saved_________ö.", // Shown when user is unable to add comments
            emptyCommentMessage: "Å_Value required_____ö", // Shown when user submits a comment without any text/character
            placeHolderText: "", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "Å_No records available_______ö", // Shown when no comments are available for the selected issue
            remainingTextCount: "Å_${0} character(s) remain________ö", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "Å_No__ö" // Shown when comments character limit is exceeded
        },
        main: {
            noGroup: "Ingen grupp konfigurerad" // Appears when no group is configured
        },
        search: {
            searchIconTooltip: "Å_Search this layer______ö", // Displayed on hover of search icon
            noResultFoundText: "Å_No results found______ö", // Displayed when no results are found after search
            searchInEditModeAlert: "Å_Search unavailable while editing___________ö" // Displayed when no results are found after search
        },
        manualRefresh: {
            manualRefreshIconTooltip: "Å_Refresh___ö", // Displayed on hover of manual refresh icon
            confirmManualRefeshText: "Alla urval och osparade ändringar ignoreras" // Appears when user wants to do manual refresh
        },
        help: {
            helpIconTooltip: "Å_Help__ö" // Displayed on hover of manual refresh icon
        },
        filter: {
            noFeatureFoundText: "Å_No feature found for this value___________ö.", // Displayed when no feature is found after applying filter
            distinctQueryFalied: "Å_No distinct values found for the field_____________ö.", // Displayed when query fails while fetching distinct values in filter unique value section
            andText: "Å_and__ö", // Displayed in filter UI when "is between" case is applied to its field
            filterInEditModeAlert: "Å_Filters unavailable while editing___________ö", // Displayed when user tries to applies filter in edit mode
            dropdownSelectOption: "Å_Select___ö" // Displayed as a first option in a filter dropdown
        },
        detailsPanel: {
            editContentText: "Å_Edit record____ö" // Displayed on hover of edit toggle button
        },
        signOutPage: {
            signOutMessage: "Du har loggat ut", // Appears when user is successfully signed-out from application
            reSignInMessage: "Klicka här för att logga in" // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);