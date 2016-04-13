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
            error: "Kaart kan niet gemaakt worden"
        },
        webMapList: {
            owner: "Eigenaar", // Appears in web-map list description panel when it is set to true
            created: "Aanmaakdatum", // Appears in web-map list description panel when it is set to true
            modified: "Datum wijziging", // Appears in web-map list description panel when it is set to true
            description: "Beschrijving", // Appears in web-map list description panel when it is set to true
            snippet: "Samenvatting", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Gebruiks- en toegangsbeperkingen", // Appears in web-map list description panel when it is set to true
            accessInformation: "Credits", // Appears in web-map list description panel when it is set to true
            tags: "Labels", // Appears in web-map list description panel when it is set to true
            numViews: "Aantal weergaven", // Appears in web-map list description panel when it is set to true
            avgRating: "Beoordeling", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Geconfigureerde groep is ongeldig of er worden nog geen items gedeeld met deze groep", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Kaartinformatie", // Display tool-tip on command button to display description of web-map
            openWebmapList: "Ĳ_Open panel____ä", //tooltip for toggle button
            closeWebmapList: "Ĳ_Close panel____ä" //tooltip for toggle button
        },
        geoform: {
            enterInformation: "Ĳ_Details___ä", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "Ĳ_Attachments____ä", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "Ĳ_Browse___ä", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "Ĳ_Location___ä", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "Ĳ_Submit___ä", // Command button to submit the geoform to report an issue
            cancelButton: "Ĳ_Cancel___ä", //Command button to close the geoform
            requiredField: "Ĳ_(required)____ä", // Shown next to the field in which the data is mandatory
            selectDefaultText: "Ĳ_Select&hellip;_____ä", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "Ĳ_Please enter valid value_________ä.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "Ĳ_Layer fields are not configured to capture data_______________ä", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "Ĳ_Please enter an integer________ä", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "Een integer invoeren", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "Een nummer invoeren", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "Een nummer invoeren", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "Ĳ_Please provide values for all required fields_______________ä", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "Ĳ_Please select the location for your report______________ä", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "Ĳ_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________ä", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "Ĳ_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________ä", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "Ĳ_Report could not be submitted__________ä", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "Ĳ_attachment(s) selected________ä", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "Ĳ_${failed} of ${total} attachment(s) failed to upload_________________ä", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "Ĳ_Current location not available__________ä", // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "Ĳ_Current location is out of basemap extent_____________ä", // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "Ĳ_Save__ä", // Command button to open the geoform
            cancelButtonTooltip: "Ĳ_Cancel___ä", //tooltip for cancel button
            geoformBackButtonTooltip: "Ĳ_Return to the report list_________ä", //tooltip for Geoform back button
            updateFeaturesConfirmationMsg: "Ĳ_${count} features will be updated___________ä", //confirmation essage to be displayed before updating the features
            attachmentHeaderText: "Ĳ_Attachments____ä" //attachment header Text
        },
        mapViewer: {
            zoomInToolTip: "Ĳ_Zoom in___ä", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Uitzoomen" // Display tool-tip on command button to zoom out map
        },
        applicationHeader: {
            signInOption: "Aanmelden", // Appears when user has not signed in
            signOutOption: "Afmelden", // Appears when user has not signed in
            pleaseSignInText: "Meld u aan" // Appears when user needs to sign-in into the application
        },
        dataviewer: {
            noIssuesReported: "Geen rapporten beschikbaar", // Appears when no issues are available in current extent
            noFeatureGeometry: "Object kan niet worden weergegeven", // Appears when user selects/activates a feature and geometry is available for that
            ascendingFlagTitle: "Ĳ_Sort in ascending order________ä", // Appears as a label for Ascending flag as a sorting option
            descendingFlagTitle: "Ĳ_Sort in descending order________ä", // Appears as a label for Descending flag as a sorting option
            filterLabel: "Ĳ_Filter___ä", // Appears as a label for Filter container
            valueRadioButtonLabel: "Ĳ_Value___ä", // Appears as a label for 'Value' radio button in filter container
            uniqueRadioButtonLabel: "Ĳ_Unique___ä", // Appears as a label for 'Unique' radio button in filter container
            selectLayerToBegin: "Ĳ_Select a category to get started___________ä", // for showing default message on application load
            layerFeatureCount: "Ĳ_No of records: ${featureCount}__________ä" // Appears beside operational layer name to display count of feature
        },
        timeSlider: {
            timeSliderLabel: "Ĳ_Time range____ä", // Appears beside time slider widget
            timeSliderInEditModeAlert: "Ĳ_Time slider unavailable while editing____________ä" // Displayed when user tries to change time-slider in edit mode
        },
        comment: {
            commentsFormSubmitButton: "Ĳ_Save__ä", // Displayed on submit button to display comments
            commentsFormCancelButton: "Ĳ_Cancel___ä", // Displayed on cancel button to cancel comments
            errorInSubmittingComment: "Ĳ_Edits could not be saved_________ä.", // Shown when user is unable to add comments
            emptyCommentMessage: "Ĳ_Value required_____ä", // Shown when user submits a comment without any text/character
            placeHolderText: "", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "Ĳ_No records available_______ä", // Shown when no comments are available for the selected issue
            remainingTextCount: "Ĳ_${0} character(s) remain________ä", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "Ĳ_No__ä" // Shown when comments character limit is exceeded
        },
        main: {
            noGroup: "Geen groep geconfigureerd" // Appears when no group is configured
        },
        search: {
            searchIconTooltip: "Ĳ_Search this layer______ä", // Displayed on hover of search icon
            noResultFoundText: "Ĳ_No results found______ä", // Displayed when no results are found after search
            searchInEditModeAlert: "Ĳ_Search unavailable while editing___________ä" // Displayed when no results are found after search
        },
        manualRefresh: {
            manualRefreshIconTooltip: "Ĳ_Refresh___ä", // Displayed on hover of manual refresh icon
            confirmManualRefeshText: "Alle selecties en onopgeslagen wijzigingen worden genegeerd" // Appears when user wants to do manual refresh
        },
        help: {
            helpIconTooltip: "Ĳ_Help__ä" // Displayed on hover of manual refresh icon
        },
        filter: {
            noFeatureFoundText: "Ĳ_No feature found for this value___________ä.", // Displayed when no feature is found after applying filter
            distinctQueryFalied: "Ĳ_No distinct values found for the field_____________ä.", // Displayed when query fails while fetching distinct values in filter unique value section
            andText: "Ĳ_and__ä", // Displayed in filter UI when "is between" case is applied to its field
            filterInEditModeAlert: "Ĳ_Filters unavailable while editing___________ä", // Displayed when user tries to applies filter in edit mode
            dropdownSelectOption: "Ĳ_Select___ä" // Displayed as a first option in a filter dropdown
        },
        detailsPanel: {
            editContentText: "Ĳ_Edit record____ä" // Displayed on hover of edit toggle button
        },
        signOutPage: {
            signOutMessage: "U bent afgemeld.", // Appears when user is successfully signed-out from application
            reSignInMessage: "Klik hier om u aan te melden." // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);