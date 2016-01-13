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
            error: "ไม่สามารถสร้างแผนที่ได้" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "ยังไม่กำหนดกลุ่ม" // Appears when no group is configured
        },
        webMapList: {
            owner: "เจ้าของ", // Appears in web-map list description panel when it is set to true
            created: "วันที่สร้าง", // Appears in web-map list description panel when it is set to true
            modified: "วันที่แก้ไข", // Appears in web-map list description panel when it is set to true
            description: "คำบรรยาย", // Appears in web-map list description panel when it is set to true
            snippet: "สรุป", // Appears in web-map list description panel when it is set to true
            licenseInfo: "การเข้าถึงและข้อจำกัด", // Appears in web-map list description panel when it is set to true
            accessInformation: "เครดิต", // Appears in web-map list description panel when it is set to true
            tags: "แท็กส์", // Appears in web-map list description panel when it is set to true
            numViews: "จำนวนวิว", // Appears in web-map list description panel when it is set to true
            avgRating: "อันดับ", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "กำหนดกลุ่มไม่ถูกต้องหรือยังไม่มีไอเท็มแชร์อยู่ในกลุ่ม", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "ข้อมูลรายละเอียดแผนที่" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "ลงชื่อออก", // Command button to sign-out from the application
            pleaseSignInText: "กรุณาลงชื่อเข้าใช้", // Appears when user needs to sign-in into the application
            showSelectedOption: "แสดงที่เลือก", // Command button to show selected records in data-viewer
            showAllOption: "แสดงทั้งหมด", // Command button to show all the records in data-viewer
            clearSelectionOption: "ยกเลิกบริเวณที่เลือก", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "ขยายไปบริเวณที่เลือกไว้", // Command button to zoom map to selected records
            gridViewOption: "รายการมุมมอง", // Command button to display list view
            mapViewOption: "มุมมองแผนที่", // Command button to display map view
            gridMapViewOption: "แบ่งมุมมอง", // Command button to display split view
            settingsBtnToolTip: "ตัวเลือกที่ใช้ในการเลือก", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "ตัวเลือกที่ใช้ในการแสดงผล", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "ค้นหาชั้นข้อมูล", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "รีเฟรช", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "การเลือกทั้งหมดและสิ่งที่ไม่ได้บันทึกการเปลี่ยนแปลงจะถูกละทิ้ง", // Appears when user wants to do manual refresh
            signInOption: "ลงชื่อเข้าใช้" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "ไม่มีรายงานให้", // Appears when no issues are available in current extent
            photoAttachmentHeader: "เอกสารแนบ", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "โปรดกรอกเลขจำนวนเต็ม ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "โปรดกรอกเลขจำนวนเต็ม", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "โปรดกรอกตัวเลข", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "โปรดกรอกตัวเลข", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "โปรดกรอกค่า", // Shown when user enters invalid string value
            invalidDate: "โปรดกรอกวันที่", // Shown when user enters invalid date value
            invalidNumericRange: "โปรดกรอกค่าระหว่าง ${minValue} และ ${maxValue}", // Shown when user enters value which is out of range
            moreInfolink: "ลิงค์", // Shown when value in field contains only URL.
            commentsText: "ความคิดเห็น", // Appears when comments are available for display in details tab
            noCommentsAvailable: "ไม่มีความคิดเห็น", // Appears when no comments are available
            noFeatureGeometry: "ไม่สามารถแสดงฟีเจอร์ได้" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "ไม่มีการกำหนดค่า" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "ไม่พบผลลัพธ์" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "แสดงรายละเอียดของข้อมูลที่ทำงานอยู่มากกว่านี้", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "ดูแผนที่", // Display tool-tip on command button to view map panel
            zoomInToolTip: "ขยายภาพ", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "ย่อภาพ" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "คุณได้ลงชื่อออกเรียบร้อยแล้ว", // Appears when user is successfully signed-out from application
            reSignInMessage: "กดที่นี่ เพื่อลงชื่อเข้าใช้" // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);