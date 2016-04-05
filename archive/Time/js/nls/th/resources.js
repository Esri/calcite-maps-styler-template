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
      error: "ไม่สามารถสร้างแผนที่ได้"
    },
    legend:{
      title: "คำอธิบายสัญลักษณ์"
    },
    share: {
      title: "แชร์"
    },
    about: {
      title: "เกี่ยวกับ",
      error: "โดยปกติแล้วคำอธิบายเวปแผนที่ หรือข้อความย่อยจะใช้เมื่อกำหนดแอพ สามารถกำหนดข้อความนี้สำหรับหน้าต่างเกี่ยวกับได้"
    },
    time: {
        enableTimeMessage: "แผนที่ของเวปไม่ได้ระบุการเปิดใช้งานชั้นข้อมูลเวลา ดูที่ ${ลิงค์}หัวข้อการช่วยเหลือ เพื่อดูรายละเอียด หากต้องการใช้รูปแบบ โดยไม่แสดงผลเวลา ให้ตั้งค่าเพื่อปิดการแสดงผลเวลา",
        enableTimeMessageLink: "http://doc.arcgis.com/en/arcgis-online/create-maps/configure-time.htm#ESRI_SECTION1_F1D4A275B4AB4CC79198CBA9D0AD8727",
        datePattern: "d MMMM,yyyy",
        hourTimePattern: "h a",
        millisecondTimePattern: "h:mm:ss a",
        minuteTimePattern: "h:mm a",
        secondTimePattern: "h:mm:ss a",
        timeRange: "${startTime} ถึง ${endTime}",
        yearPattern: "yyyy"
    },
    histogram:{
      error: "ไม่มีชั้นข้อมูลฟิเจอร์ที่เปิดแสดงเวลา ในโหมดสแนพช็อต อยู่ในเวปแผนที่ ให้กำหนดค่าของแอพใหม่เพื่อใช้งานเวปแผนที่อื่น หรือปิดตัวเลือกการแสดงฮิสโตแกรม"
    }
  })
);