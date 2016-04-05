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
            error: "맵을 생성할 수 없음"
        },
        webMapList: {
            owner: "소유자", // Appears in web-map list description panel when it is set to true
            created: "생성된 날짜", // Appears in web-map list description panel when it is set to true
            modified: "수정된 날짜", // Appears in web-map list description panel when it is set to true
            description: "설명", // Appears in web-map list description panel when it is set to true
            snippet: "요약", // Appears in web-map list description panel when it is set to true
            licenseInfo: "접근 및 사용 제약 조건", // Appears in web-map list description panel when it is set to true
            accessInformation: "크레딧", // Appears in web-map list description panel when it is set to true
            tags: "태그", // Appears in web-map list description panel when it is set to true
            numViews: "조회수", // Appears in web-map list description panel when it is set to true
            avgRating: "평점", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "구성된 그룹이 유효하지 않거나 이 그룹과 공유된 항목이 아직 없습니다.", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "맵 정보", // Display tool-tip on command button to display description of web-map
            openWebmapList: "한_Open panel____빠", //tooltip for toggle button
            closeWebmapList: "한_Close panel____빠" //tooltip for toggle button
        },
        geoform: {
            enterInformation: "한_Details___빠", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "한_Attachments____빠", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "한_Browse___빠", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "한_Location___빠", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "한_Submit___빠", // Command button to submit the geoform to report an issue
            cancelButton: "한_Cancel___빠", //Command button to close the geoform
            requiredField: "한_(required)____빠", // Shown next to the field in which the data is mandatory
            selectDefaultText: "한_Select&hellip;_____빠", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "한_Please enter valid value_________빠.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "한_Layer fields are not configured to capture data_______________빠", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "한_Please enter an integer________빠", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "정수를 입력하세요.", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "숫자를 입력하세요.", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "숫자를 입력하세요.", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "한_Please provide values for all required fields_______________빠", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "한_Please select the location for your report______________빠", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "한_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________빠", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "한_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________빠", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "한_Report could not be submitted__________빠", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "한_attachment(s) selected________빠", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "한_${failed} of ${total} attachment(s) failed to upload_________________빠", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "한_Current location not available__________빠", // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "한_Current location is out of basemap extent_____________빠", // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "한_Save__빠", // Command button to open the geoform
            cancelButtonTooltip: "한_Cancel___빠", //tooltip for cancel button
            geoformBackButtonTooltip: "한_Return to the report list_________빠", //tooltip for Geoform back button
            updateFeaturesConfirmationMsg: "한_${count} features will be updated___________빠", //confirmation essage to be displayed before updating the features
            attachmentHeaderText: "한_Attachments____빠" //attachment header Text
        },
        mapViewer: {
            zoomInToolTip: "한_Zoom in___빠", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "축소" // Display tool-tip on command button to zoom out map
        },
        applicationHeader: {
            signInOption: "로그인", // Appears when user has not signed in
            signOutOption: "로그아웃", // Appears when user has not signed in
            pleaseSignInText: "로그인하세요." // Appears when user needs to sign-in into the application
        },
        dataviewer: {
            noIssuesReported: "보고서를 사용할 수 없음", // Appears when no issues are available in current extent
            noFeatureGeometry: "피처를 표시할 수 없음", // Appears when user selects/activates a feature and geometry is available for that
            ascendingFlagTitle: "한_Sort in ascending order________빠", // Appears as a label for Ascending flag as a sorting option
            descendingFlagTitle: "한_Sort in descending order________빠", // Appears as a label for Descending flag as a sorting option
            filterLabel: "한_Filter___빠", // Appears as a label for Filter container
            valueRadioButtonLabel: "한_Value___빠", // Appears as a label for 'Value' radio button in filter container
            uniqueRadioButtonLabel: "한_Unique___빠", // Appears as a label for 'Unique' radio button in filter container
            selectLayerToBegin: "한_Select a category to get started___________빠" // for showing default message on application load
        },
        timeSlider: {
            timeSliderLabel: "한_Time range____빠", // Appears beside time slider widget
            timeSliderInEditModeAlert: "한_Time slider unavailable while editing____________빠" // Displayed when user tries to change time-slider in edit mode
        },
        comment: {
            commentsFormSubmitButton: "한_Save__빠", // Displayed on submit button to display comments
            commentsFormCancelButton: "한_Cancel___빠", // Displayed on cancel button to cancel comments
            errorInSubmittingComment: "한_Edits could not be saved_________빠.", // Shown when user is unable to add comments
            emptyCommentMessage: "한_Value required_____빠", // Shown when user submits a comment without any text/character
            placeHolderText: "", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "한_No records available_______빠", // Shown when no comments are available for the selected issue
            remainingTextCount: "한_${0} character(s) remain________빠", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "한_No__빠" // Shown when comments character limit is exceeded
        },
        main: {
            noGroup: "구성된 그룹 없음" // Appears when no group is configured
        },
        search: {
            searchIconTooltip: "한_Search this layer______빠", // Displayed on hover of search icon
            noResultFoundText: "한_No results found______빠", // Displayed when no results are found after search
            searchInEditModeAlert: "한_Search unavailable while editing___________빠" // Displayed when no results are found after search
        },
        manualRefresh: {
            manualRefreshIconTooltip: "한_Refresh___빠", // Displayed on hover of manual refresh icon
            confirmManualRefeshText: "모든 선택 내역과 저장하지 않은 변경 내용이 취소됩니다." // Appears when user wants to do manual refresh
        },
        help: {
            helpIconTooltip: "한_Help__빠" // Displayed on hover of manual refresh icon
        },
        filter: {
            noFeatureFoundText: "한_No feature found for this value___________빠.", // Displayed when no feature is found after applying filter
            distinctQueryFalied: "한_No distinct values found for the field_____________빠.", // Displayed when query fails while fetching distinct values in filter unique value section
            andText: "한_and__빠", // Displayed in filter UI when "is between" case is applied to its field
            filterInEditModeAlert: "한_Filters unavailable while editing___________빠" // Displayed when user tries to applies filter in edit mode
        },
        detailsPanel: {
            editContentText: "한_Edit record____빠" // Displayed on hover of edit toggle button
        },
        signOutPage: {
            signOutMessage: "로그아웃되었습니다.", // Appears when user is successfully signed-out from application
            reSignInMessage: "로그인하려면 여기를 클릭" // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);