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
      error: "Harita oluşturulamıyor"
    },
    legend:{
      title: "Açıklama"
    },
    share: {
      title: "Paylaş"
    },
    about: {
      title: "Hakkında",
      error: "Varsayılan olarak web haritası açıklaması veya kod parçacığı kullanılacak. Uygulamayı hakkında panosuna özel bir kod parçacığı ekleyecek biçimde yapılandırın."
    },
    time: {
        enableTimeMessage: "Belirtilen web haritası zaman etkin katman bulundurmuyor. Ayrıntılar için ${link} yardım başlığını görüntüleyin. Şablonu zamanı görüntülemeden kullanmak için yapılandırma panelini kullanarak zaman seçeneğini devre dışı bırakın.",
        enableTimeMessageLink: "http://doc.arcgis.com/en/arcgis-online/create-maps/configure-time.htm#ESRI_SECTION1_F1D4A275B4AB4CC79198CBA9D0AD8727",
        datePattern: "d MMMM yyyy",
        hourTimePattern: "h a",
        millisecondTimePattern: "h:mm:ss a",
        minuteTimePattern: "h:mm a",
        secondTimePattern: "h:mm:ss a",
        timeRange: "${startTime} ile ${endTime} arası",
        yearPattern: "yyyy"
    },
    histogram:{
      error: "Web haritasında, anlık görünüm modunda, zaman etkin detay katmanı yok. Uygulamayı başka bir web haritası kullanacak biçimde yapılandırın veya histogram seçeneğini devre dışı bırakın."
    }
  })
);