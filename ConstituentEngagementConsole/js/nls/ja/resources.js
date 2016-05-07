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
            error: "マップを作成できません"
        },
        webMapList: {
            owner: "所有者", // Appears in web-map list description panel when it is set to true
            created: "作成日", // Appears in web-map list description panel when it is set to true
            modified: "更新日", // Appears in web-map list description panel when it is set to true
            description: "説明", // Appears in web-map list description panel when it is set to true
            snippet: "サマリー", // Appears in web-map list description panel when it is set to true
            licenseInfo: "アクセスと使用の制限", // Appears in web-map list description panel when it is set to true
            accessInformation: "著作権", // Appears in web-map list description panel when it is set to true
            tags: "タグ", // Appears in web-map list description panel when it is set to true
            numViews: "ビュー数", // Appears in web-map list description panel when it is set to true
            avgRating: "評価", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "構成済みのグループが無効であるか、アイテムがこのグループと共有されていません", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "マップ情報", // Display tool-tip on command button to display description of web-map
            openWebmapList: "須_Open panel____鷗", //tooltip for toggle button
            closeWebmapList: "須_Close panel____鷗" //tooltip for toggle button
        },
        geoform: {
            enterInformation: "須_Details___鷗", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "須_Attachments____鷗", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "須_Browse___鷗", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "須_Location___鷗", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "須_Submit___鷗", // Command button to submit the geoform to report an issue
            cancelButton: "須_Cancel___鷗", //Command button to close the geoform
            requiredField: "須_(required)____鷗", // Shown next to the field in which the data is mandatory
            selectDefaultText: "須_Select&hellip;_____鷗", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "須_Please enter valid value_________鷗.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "須_Layer fields are not configured to capture data_______________鷗", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "須_Please enter an integer________鷗", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "整数を入力してください", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "数字を入力してください", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "数字を入力してください", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "須_Please provide values for all required fields_______________鷗", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "須_Please select the location for your report______________鷗", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "須_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________鷗", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "須_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________鷗", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "須_Report could not be submitted__________鷗", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "須_attachment(s) selected________鷗", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "須_${failed} of ${total} attachment(s) failed to upload_________________鷗", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "須_Current location not available__________鷗", // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "須_Current location is out of basemap extent_____________鷗", // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "須_Save__鷗", // Command button to open the geoform
            cancelButtonTooltip: "須_Cancel___鷗", //tooltip for cancel button
            geoformBackButtonTooltip: "須_Return to the report list_________鷗", //tooltip for Geoform back button
            updateFeaturesConfirmationMsg: "須_${count} features will be updated___________鷗", //confirmation essage to be displayed before updating the features
            attachmentHeaderText: "須_Attachments____鷗" //attachment header Text
        },
        mapViewer: {
            zoomInToolTip: "須_Zoom in___鷗", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "縮小" // Display tool-tip on command button to zoom out map
        },
        applicationHeader: {
            signInOption: "サイン イン", // Appears when user has not signed in
            signOutOption: "サイン アウト", // Appears when user has not signed in
            pleaseSignInText: "サイン インしてください" // Appears when user needs to sign-in into the application
        },
        dataviewer: {
            noIssuesReported: "レポートがありません", // Appears when no issues are available in current extent
            noFeatureGeometry: "フィーチャを表示できません", // Appears when user selects/activates a feature and geometry is available for that
            ascendingFlagTitle: "須_Sort in ascending order________鷗", // Appears as a label for Ascending flag as a sorting option
            descendingFlagTitle: "須_Sort in descending order________鷗", // Appears as a label for Descending flag as a sorting option
            filterLabel: "須_Filter___鷗", // Appears as a label for Filter container
            valueRadioButtonLabel: "須_Value___鷗", // Appears as a label for 'Value' radio button in filter container
            uniqueRadioButtonLabel: "須_Unique___鷗", // Appears as a label for 'Unique' radio button in filter container
            selectLayerToBegin: "須_Select a category to get started___________鷗", // for showing default message on application load
            layerFeatureCount: "須_${featureCount} records________鷗" // Appears beside operational layer name to display count of feature
        },
        timeSlider: {
            timeSliderLabel: "須_Time range____鷗", // Appears beside time slider widget
            timeSliderInEditModeAlert: "須_Time slider unavailable while editing____________鷗" // Displayed when user tries to change time-slider in edit mode
        },
        comment: {
            commentsFormSubmitButton: "須_Save__鷗", // Displayed on submit button to display comments
            commentsFormCancelButton: "須_Cancel___鷗", // Displayed on cancel button to cancel comments
            errorInSubmittingComment: "須_Edits could not be saved_________鷗.", // Shown when user is unable to add comments
            emptyCommentMessage: "須_Value required_____鷗", // Shown when user submits a comment without any text/character
            placeHolderText: "", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "須_No records available_______鷗", // Shown when no comments are available for the selected issue
            remainingTextCount: "須_${0} character(s) remain________鷗", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "須_No__鷗" // Shown when comments character limit is exceeded
        },
        main: {
            noGroup: "グループが構成されていません" // Appears when no group is configured
        },
        search: {
            searchIconTooltip: "須_Search this layer______鷗", // Displayed on hover of search icon
            noResultFoundText: "須_No results found______鷗", // Displayed when no results are found after search
            searchInEditModeAlert: "須_Search unavailable while editing___________鷗" // Displayed when no results are found after search
        },
        manualRefresh: {
            manualRefreshIconTooltip: "須_Refresh___鷗", // Displayed on hover of manual refresh icon
            confirmManualRefeshText: "すべての選択セットおよび保存されていない変更は破棄されます" // Appears when user wants to do manual refresh
        },
        help: {
            helpIconTooltip: "須_Help__鷗" // Displayed on hover of manual refresh icon
        },
        filter: {
            noFeatureFoundText: "須_No feature found for this value___________鷗.", // Displayed when no feature is found after applying filter
            distinctQueryFalied: "須_No distinct values found for the field_____________鷗.", // Displayed when query fails while fetching distinct values in filter unique value section
            andText: "須_and__鷗", // Displayed in filter UI when "is between" case is applied to its field
            filterInEditModeAlert: "須_Filters unavailable while editing___________鷗", // Displayed when user tries to applies filter in edit mode
            dropdownSelectOption: "須_Select___鷗" // Displayed as a first option in a filter dropdown
        },
        detailsPanel: {
            editContentText: "須_Edit record____鷗" // Displayed on hover of edit toggle button
        },
        signOutPage: {
            signOutMessage: "正常にサイン アウトしました", // Appears when user is successfully signed-out from application
            reSignInMessage: "ここをクリックしてサイン インします" // Appears when user is signed-out from application and wants to sign-in again
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