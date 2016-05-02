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
            error: "无法创建地图"
        },
        webMapList: {
            owner: "所有者", // Appears in web-map list description panel when it is set to true
            created: "创建日期", // Appears in web-map list description panel when it is set to true
            modified: "修改日期", // Appears in web-map list description panel when it is set to true
            description: "描述", // Appears in web-map list description panel when it is set to true
            snippet: "摘要", // Appears in web-map list description panel when it is set to true
            licenseInfo: "访问和使用限制", // Appears in web-map list description panel when it is set to true
            accessInformation: "制作者名单", // Appears in web-map list description panel when it is set to true
            tags: "标签", // Appears in web-map list description panel when it is set to true
            numViews: "查看次数", // Appears in web-map list description panel when it is set to true
            avgRating: "评级", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "已配置的群组无效，或者没有与该群组共享的任何项目", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "地图信息", // Display tool-tip on command button to display description of web-map
            openWebmapList: "试_Open panel____验", //tooltip for toggle button
            closeWebmapList: "试_Close panel____验" //tooltip for toggle button
        },
        geoform: {
            enterInformation: "试_Details___验", // Shown as the first section of the geoform, where the user can enter details of the issue
            selectAttachments: "试_Attachments____验", // Appears above 'Select file' button indicating option to attach files
            selectFileText: "试_Browse___验", // Command button to open a dialog box to select file(s) to be attached
            enterLocation: "试_Location___验", // Shown as the second section of the geoform, where the user can select a location on the map
            reportItButton: "试_Submit___验", // Command button to submit the geoform to report an issue
            cancelButton: "试_Cancel___验", //Command button to close the geoform
            requiredField: "试_(required)____验", // Shown next to the field in which the data is mandatory
            selectDefaultText: "试_Select&hellip;_____验", // Shown in the dropdown field indicating to select an option
            invalidInputValue: "试_Please enter valid value_________验.", // Shown when user clicks/taps the required field but does not enter the data and comes out of the required field
            noFieldsConfiguredMessage: "试_Layer fields are not configured to capture data_______________验", // Shown when all the fields of the selected layer are disabled
            invalidSmallNumber: "试_Please enter an integer________验", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -32768 and 32767.)
            invalidNumber: "请输入一个整数", // Shown when the entered value is beyond the specified range (valid ${openStrong}integer${closeStrong} value between -2147483648 and 2147483647.)
            invalidFloat: "请输入一个数字", // Shown when the entered value is beyond the specified range (valid ${openStrong}floating point${closeStrong} value between -3.4E38 and 1.2E38 )
            invalidDouble: "请输入一个数字", // Shown when the entered value is beyond the specified range (valid ${openStrong}double${closeStrong} value between -2.2E308 and 1.8E308)
            requiredFields: "试_Please provide values for all required fields_______________验", // Shown when user submits the geoform without entering data in the mandatory field(s)
            selectLocation: "试_Please select the location for your report______________验", // Shown when user submits the geoform without selecting location on the map
            numericRangeHintMessage: "试_${openStrong}Hint:${closeStrong} Minimum value ${minValue} and maximum value ${maxValue}___________________________验", // Shown as a pop over above the fields with numeric values, indicating the minimum and maximum range
            dateRangeHintMessage: "试_${openStrong}Hint:${closeStrong} Minimum date ${minValue} and Maximum date ${maxValue}___________________________验", // Shown as a pop over above the fields with date values, indicating the minimum and maximum date range
            errorsInApplyEdits: "试_Report could not be submitted__________验", // Shown when there is an error in any of the services while submitting the geoform
            attachmentSelectedMsg: "试_attachment(s) selected________验", // Shown besides the select file button indicating the number of files attached
            attachmentUploadStatus: "试_${failed} of ${total} attachment(s) failed to upload_________________验", // Shown when there is error while uploading the attachment, while submitting the geoform
            geoLocationError: "试_Current location not available__________验", // Shown when the browser returns an error instead of the current geographical position
            geoLocationOutOfExtent: "试_Current location is out of basemap extent_____________验", // Shown when the current geographical position is out of the basemap extent
            submitButtonTooltip: "试_Save__验", // Command button to open the geoform
            cancelButtonTooltip: "试_Cancel___验", //tooltip for cancel button
            geoformBackButtonTooltip: "试_Return to the report list_________验", //tooltip for Geoform back button
            updateFeaturesConfirmationMsg: "试_${count} features will be updated___________验", //confirmation essage to be displayed before updating the features
            attachmentHeaderText: "试_Attachments____验" //attachment header Text
        },
        mapViewer: {
            zoomInToolTip: "试_Zoom in___验", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "缩小" // Display tool-tip on command button to zoom out map
        },
        applicationHeader: {
            signInOption: "登录", // Appears when user has not signed in
            signOutOption: "登出", // Appears when user has not signed in
            pleaseSignInText: "请登录" // Appears when user needs to sign-in into the application
        },
        dataviewer: {
            noIssuesReported: "无任何报告可用", // Appears when no issues are available in current extent
            noFeatureGeometry: "无法显示要素", // Appears when user selects/activates a feature and geometry is available for that
            ascendingFlagTitle: "试_Sort in ascending order________验", // Appears as a label for Ascending flag as a sorting option
            descendingFlagTitle: "试_Sort in descending order________验", // Appears as a label for Descending flag as a sorting option
            filterLabel: "试_Filter___验", // Appears as a label for Filter container
            valueRadioButtonLabel: "试_Value___验", // Appears as a label for 'Value' radio button in filter container
            uniqueRadioButtonLabel: "试_Unique___验", // Appears as a label for 'Unique' radio button in filter container
            selectLayerToBegin: "试_Select a category to get started___________验", // for showing default message on application load
            layerFeatureCount: "试_${featureCount} records________验" // Appears beside operational layer name to display count of feature
        },
        timeSlider: {
            timeSliderLabel: "试_Time range____验", // Appears beside time slider widget
            timeSliderInEditModeAlert: "试_Time slider unavailable while editing____________验" // Displayed when user tries to change time-slider in edit mode
        },
        comment: {
            commentsFormSubmitButton: "试_Save__验", // Displayed on submit button to display comments
            commentsFormCancelButton: "试_Cancel___验", // Displayed on cancel button to cancel comments
            errorInSubmittingComment: "试_Edits could not be saved_________验.", // Shown when user is unable to add comments
            emptyCommentMessage: "试_Value required_____验", // Shown when user submits a comment without any text/character
            placeHolderText: "", // Shown as a placeholder in comments textbox
            noCommentsAvailableText: "试_No records available_______验", // Shown when no comments are available for the selected issue
            remainingTextCount: "试_${0} character(s) remain________验", // Shown below the comments textbox indicating the number of characters that can be added
            showNoText: "试_No__验" // Shown when comments character limit is exceeded
        },
        main: {
            noGroup: "未配置任何群组" // Appears when no group is configured
        },
        search: {
            searchIconTooltip: "试_Search this layer______验", // Displayed on hover of search icon
            noResultFoundText: "试_No results found______验", // Displayed when no results are found after search
            searchInEditModeAlert: "试_Search unavailable while editing___________验" // Displayed when no results are found after search
        },
        manualRefresh: {
            manualRefreshIconTooltip: "试_Refresh___验", // Displayed on hover of manual refresh icon
            confirmManualRefeshText: "将放弃所有选择和未保存的更改" // Appears when user wants to do manual refresh
        },
        help: {
            helpIconTooltip: "试_Help__验" // Displayed on hover of manual refresh icon
        },
        filter: {
            noFeatureFoundText: "试_No feature found for this value___________验.", // Displayed when no feature is found after applying filter
            distinctQueryFalied: "试_No distinct values found for the field_____________验.", // Displayed when query fails while fetching distinct values in filter unique value section
            andText: "试_and__验", // Displayed in filter UI when "is between" case is applied to its field
            filterInEditModeAlert: "试_Filters unavailable while editing___________验", // Displayed when user tries to applies filter in edit mode
            dropdownSelectOption: "试_Select___验" // Displayed as a first option in a filter dropdown
        },
        detailsPanel: {
            editContentText: "试_Edit record____验" // Displayed on hover of edit toggle button
        },
        signOutPage: {
            signOutMessage: "您已成功登出", // Appears when user is successfully signed-out from application
            reSignInMessage: "单击此处以登录" // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);