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
            error: "Võimetu koostama kaarti"
        },
        webMapList: {
            owner: "Omanik", // Appears in web-map list description panel when it is set to true
            created: "Kuupäev loodud", // Appears in web-map list description panel when it is set to true
            modified: "Muutmise kuupäev", // Appears in web-map list description panel when it is set to true
            description: "Kirjeldus", // Appears in web-map list description panel when it is set to true
            snippet: "Kokkuvõte", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Ligipääsu ja kasutuse piirangud", // Appears in web-map list description panel when it is set to true
            accessInformation: "Krediidid", // Appears in web-map list description panel when it is set to true
            tags: "Märksõnad", // Appears in web-map list description panel when it is set to true
            numViews: "Vaatamiste arv", // Appears in web-map list description panel when it is set to true
            avgRating: "Hinnang", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Konfigureeritud grupp ei kehti või ei ole selle grupiga veel objekte jagatud.", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Kaarditeave", // Display tool-tip on command button to display description of web-map
            openWebmapList: "Š_Open panel____ä", //tooltip for toggle button
            closeWebmapList: "Š_Close panel____ä" //tooltip for toggle button
        },
        geoform: {
            enterInformation: "Š_Details___ä", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "Š_Attachments____ä", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "Š_Browse___ä", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "Š_Location___ä", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "Š_Submit___ä", // Command button to submit the geoform to report an issue
            cancelButton: "Š_Cancel___ä", //Command button to close the geoform
            requiredField: "Š_(required)____ä", // Shown next to the field in which the data is mandatory
            selectDefaultText: "Š_Select&hellip;_____ä", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "Š_Please enter valid value_________ä.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "Š_Layer fields are not configured to capture data_______________ä", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "Š_Please enter an integer________ä", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "Palun sisestage täisarv", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "Palun sisestage arv", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "Palun sisestage arv", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "Š_Please provide values for all required fields_______________ä", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "Š_Please select the location for your report______________ä", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "Š_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________ä", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "Š_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________ä", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "Š_Report could not be submitted__________ä", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "Š_attachment(s) selected________ä", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "Š_${failed} of ${total} attachment(s) failed to upload_________________ä", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "Š_Current location not available__________ä", // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "Š_Current location is out of basemap extent_____________ä", // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "Š_Save__ä", // Command button to open the geoform
            cancelButtonTooltip: "Š_Cancel___ä", //tooltip for cancel button
            geoformBackButtonTooltip: "Š_Return to the report list_________ä", //tooltip for Geoform back button
            updateFeaturesConfirmationMsg: "Š_${count} features will be updated___________ä", //confirmation essage to be displayed before updating the features
            attachmentHeaderText: "Š_Attachments____ä" //attachment header Text
        },
        mapViewer: {
            zoomInToolTip: "Š_Zoom in___ä", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Vähenda" // Display tool-tip on command button to zoom out map
        },
        applicationHeader: {
            signInOption: "Logi sisse", // Appears when user has not signed in
            signOutOption: "Logi välja", // Appears when user has not signed in
            pleaseSignInText: "Palun logi sisse" // Appears when user needs to sign-in into the application
        },
        dataviewer: {
            noIssuesReported: "Ühtki aruannet ei ole saadaval.", // Appears when no issues are available in current extent
            noFeatureGeometry: "Objekti ei saa kuvada.", // Appears when user selects/activates a feature and geometry is available for that
            ascendingFlagTitle: "Š_Sort in ascending order________ä", // Appears as a label for Ascending flag as a sorting option
            descendingFlagTitle: "Š_Sort in descending order________ä", // Appears as a label for Descending flag as a sorting option
            filterLabel: "Š_Filter___ä", // Appears as a label for Filter container
            valueRadioButtonLabel: "Š_Value___ä", // Appears as a label for 'Value' radio button in filter container
            uniqueRadioButtonLabel: "Š_Unique___ä", // Appears as a label for 'Unique' radio button in filter container
            selectLayerToBegin: "Š_Select a category to get started___________ä", // for showing default message on application load
            layerFeatureCount: "Š_No of records: ${featureCount}__________ä" // Appears beside operational layer name to display count of feature
        },
        timeSlider: {
            timeSliderLabel: "Š_Time range____ä", // Appears beside time slider widget
            timeSliderInEditModeAlert: "Š_Time slider unavailable while editing____________ä" // Displayed when user tries to change time-slider in edit mode
        },
        comment: {
            commentsFormSubmitButton: "Š_Save__ä", // Displayed on submit button to display comments
            commentsFormCancelButton: "Š_Cancel___ä", // Displayed on cancel button to cancel comments
            errorInSubmittingComment: "Š_Edits could not be saved_________ä.", // Shown when user is unable to add comments
            emptyCommentMessage: "Š_Value required_____ä", // Shown when user submits a comment without any text/character
            placeHolderText: "", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "Š_No records available_______ä", // Shown when no comments are available for the selected issue
            remainingTextCount: "Š_${0} character(s) remain________ä", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "Š_No__ä" // Shown when comments character limit is exceeded
        },
        main: {
            noGroup: "Ühtki gruppi ei ole konfigureeritud" // Appears when no group is configured
        },
        search: {
            searchIconTooltip: "Š_Search this layer______ä", // Displayed on hover of search icon
            noResultFoundText: "Š_No results found______ä", // Displayed when no results are found after search
            searchInEditModeAlert: "Š_Search unavailable while editing___________ä" // Displayed when no results are found after search
        },
        manualRefresh: {
            manualRefreshIconTooltip: "Š_Refresh___ä", // Displayed on hover of manual refresh icon
            confirmManualRefeshText: "Teie salvestamata valikud ja muudatused lähevad kaotsi." // Appears when user wants to do manual refresh
        },
        help: {
            helpIconTooltip: "Š_Help__ä" // Displayed on hover of manual refresh icon
        },
        filter: {
            noFeatureFoundText: "Š_No feature found for this value___________ä.", // Displayed when no feature is found after applying filter
            distinctQueryFalied: "Š_No distinct values found for the field_____________ä.", // Displayed when query fails while fetching distinct values in filter unique value section
            andText: "Š_and__ä", // Displayed in filter UI when "is between" case is applied to its field
            filterInEditModeAlert: "Š_Filters unavailable while editing___________ä", // Displayed when user tries to applies filter in edit mode
            dropdownSelectOption: "Š_Select___ä" // Displayed as a first option in a filter dropdown
        },
        detailsPanel: {
            editContentText: "Š_Edit record____ä" // Displayed on hover of edit toggle button
        },
        signOutPage: {
            signOutMessage: "Olete edukalt välja logitud.", // Appears when user is successfully signed-out from application
            reSignInMessage: "Sisse logimiseks klikkige siia." // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);