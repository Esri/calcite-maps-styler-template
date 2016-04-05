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
            error: "Harita oluşturulamıyor"
        },
        webMapList: {
            owner: "Sahibi", // Appears in web-map list description panel when it is set to true
            created: "Oluşturulma tarihi", // Appears in web-map list description panel when it is set to true
            modified: "Değiştirme tarihi:", // Appears in web-map list description panel when it is set to true
            description: "Tanım", // Appears in web-map list description panel when it is set to true
            snippet: "Özet", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Kısıtlamalara eriş ve bunları kullan", // Appears in web-map list description panel when it is set to true
            accessInformation: "Katkı Yapanlar", // Appears in web-map list description panel when it is set to true
            tags: "Etiketler", // Appears in web-map list description panel when it is set to true
            numViews: "Görüntülenme sayısı", // Appears in web-map list description panel when it is set to true
            avgRating: "Derecelendirme", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Yapılandırılmış grup geçersiz veya bu grupla henüz öğe paylaşılmamış", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Harita bilgileri", // Display tool-tip on command button to display description of web-map
            openWebmapList: "ı_Open panel____İ", //tooltip for toggle button
            closeWebmapList: "ı_Close panel____İ" //tooltip for toggle button
        },
        geoform: {
            enterInformation: "ı_Details___İ", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "ı_Attachments____İ", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "ı_Browse___İ", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "ı_Location___İ", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "ı_Submit___İ", // Command button to submit the geoform to report an issue
            cancelButton: "ı_Cancel___İ", //Command button to close the geoform
            requiredField: "ı_(required)____İ", // Shown next to the field in which the data is mandatory
            selectDefaultText: "ı_Select&hellip;_____İ", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "ı_Please enter valid value_________İ.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "ı_Layer fields are not configured to capture data_______________İ", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "ı_Please enter an integer________İ", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "Tamsayı girin", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "Lütfen bir sayı girin", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "Lütfen bir sayı girin", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "ı_Please provide values for all required fields_______________İ", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "ı_Please select the location for your report______________İ", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "ı_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________İ", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "ı_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________İ", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "ı_Report could not be submitted__________İ", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "ı_attachment(s) selected________İ", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "ı_${failed} of ${total} attachment(s) failed to upload_________________İ", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "ı_Current location not available__________İ", // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "ı_Current location is out of basemap extent_____________İ", // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "ı_Save__İ", // Command button to open the geoform
            cancelButtonTooltip: "ı_Cancel___İ", //tooltip for cancel button
            geoformBackButtonTooltip: "ı_Return to the report list_________İ", //tooltip for Geoform back button
            updateFeaturesConfirmationMsg: "ı_${count} features will be updated___________İ", //confirmation essage to be displayed before updating the features
            attachmentHeaderText: "ı_Attachments____İ" //attachment header Text
        },
        mapViewer: {
            zoomInToolTip: "ı_Zoom in___İ", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Küçült" // Display tool-tip on command button to zoom out map
        },
        applicationHeader: {
            signInOption: "Oturum Açma", // Appears when user has not signed in
            signOutOption: "Oturum Kapat", // Appears when user has not signed in
            pleaseSignInText: "Oturum açın" // Appears when user needs to sign-in into the application
        },
        dataviewer: {
            noIssuesReported: "Kullanılabilir rapor yok", // Appears when no issues are available in current extent
            noFeatureGeometry: "Detay görüntülenemiyor", // Appears when user selects/activates a feature and geometry is available for that
            ascendingFlagTitle: "ı_Sort in ascending order________İ", // Appears as a label for Ascending flag as a sorting option
            descendingFlagTitle: "ı_Sort in descending order________İ", // Appears as a label for Descending flag as a sorting option
            filterLabel: "ı_Filter___İ", // Appears as a label for Filter container
            valueRadioButtonLabel: "ı_Value___İ", // Appears as a label for 'Value' radio button in filter container
            uniqueRadioButtonLabel: "ı_Unique___İ", // Appears as a label for 'Unique' radio button in filter container
            selectLayerToBegin: "ı_Select a category to get started___________İ" // for showing default message on application load
        },
        timeSlider: {
            timeSliderLabel: "ı_Time range____İ", // Appears beside time slider widget
            timeSliderInEditModeAlert: "ı_Time slider unavailable while editing____________İ" // Displayed when user tries to change time-slider in edit mode
        },
        comment: {
            commentsFormSubmitButton: "ı_Save__İ", // Displayed on submit button to display comments
            commentsFormCancelButton: "ı_Cancel___İ", // Displayed on cancel button to cancel comments
            errorInSubmittingComment: "ı_Edits could not be saved_________İ.", // Shown when user is unable to add comments
            emptyCommentMessage: "ı_Value required_____İ", // Shown when user submits a comment without any text/character
            placeHolderText: "", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "ı_No records available_______İ", // Shown when no comments are available for the selected issue
            remainingTextCount: "ı_${0} character(s) remain________İ", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "ı_No__İ" // Shown when comments character limit is exceeded
        },
        main: {
            noGroup: "Yapılandırılan grup yok" // Appears when no group is configured
        },
        search: {
            searchIconTooltip: "ı_Search this layer______İ", // Displayed on hover of search icon
            noResultFoundText: "ı_No results found______İ", // Displayed when no results are found after search
            searchInEditModeAlert: "ı_Search unavailable while editing___________İ" // Displayed when no results are found after search
        },
        manualRefresh: {
            manualRefreshIconTooltip: "ı_Refresh___İ", // Displayed on hover of manual refresh icon
            confirmManualRefeshText: "Tüm seçimler ve kaydedilmemiş değişiklikler silinecek" // Appears when user wants to do manual refresh
        },
        help: {
            helpIconTooltip: "ı_Help__İ" // Displayed on hover of manual refresh icon
        },
        filter: {
            noFeatureFoundText: "ı_No feature found for this value___________İ.", // Displayed when no feature is found after applying filter
            distinctQueryFalied: "ı_No distinct values found for the field_____________İ.", // Displayed when query fails while fetching distinct values in filter unique value section
            andText: "ı_and__İ", // Displayed in filter UI when "is between" case is applied to its field
            filterInEditModeAlert: "ı_Filters unavailable while editing___________İ" // Displayed when user tries to applies filter in edit mode
        },
        detailsPanel: {
            editContentText: "ı_Edit record____İ" // Displayed on hover of edit toggle button
        },
        signOutPage: {
            signOutMessage: "Oturumunuz başarıyla kapatıldı", // Appears when user is successfully signed-out from application
            reSignInMessage: "Oturum açmak için buraya tıklayın" // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);