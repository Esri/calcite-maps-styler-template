﻿define(
   ({
    map: {
      error: "Harita oluşturulamıyor"
    },
    onlineStatus: {
      offline: "Şu anda çevrimdışı çalışıyorsunuz. Form iletimleri, sunucu ile bir bağlantı kurulana kadar yerel olarak kaydedilecek.",
      reconnecting: "Yeniden bağlanıyor&hellip;",
      pending: "Bekleyen ${total} düzenleme ağ bağlantısı yeniden kurulduğunda gönderilecektir."
    },
    configure: {
      mapdlg: {
        items: {
          organizationLabel: "Kuruluşum",
          onlineLabel: "ArcGIS Online",
          contentLabel: "İçeriğim",
          favoritesLabel: "Favorilerim"
        },
        title: "Web Haritası Seç",
        searchTitle: "Ara",
        ok: "Tamam",
        cancel: "İptal",
        placeholder: "Arama terimi gir"
      },
      groupdlg: {
        items: {
          organizationLabel: "Kuruluşum",
          onlineLabel: "ArcGIS Online",
          contentLabel: "İçeriğim",
          favoritesLabel: "Favorilerim"
        },
        title: "Grup Seç",
        searchTitle: "Ara",
        ok: "Tamam",
        cancel: "İptal",
        placeholder: "Arama terimi gir"
      },
      sharedlg: {
        items: {},
        mailtoLinkDescription: "Aşağıda bir GeoForm bağlantısı verilmiştir"
      }
    },
    user: {
      all: "Tümü",
      mgrs: "MGRS",
      usng: "USNG",
      utm: "UTM",
      utm_northing: "Kuzeye Yöneltme",
      utm_easting: "Doğuya Yöneltme",
      utm_zone_number: "Bölge Numarası",
      selectLayerTabText: "${formSection} Form Seç",
      geoFormGeneralTabText: "${formSection} Bilgi Gir",
      locationInformationText: "${formSection} Konum Seç",
      submitInformationText: "${formSection} Formu Tamamla",
      submitInstructions: "Bu bilgileri haritaya ekleyin.",
      myLocationText: "Geçerli Konum",
      locationDescriptionForMoreThanOneOption: "Haritaya dokunarak/tıklayarak ya da aşağıdaki seçeneklerden birini kullanarak bu giriş için bir konum belirtin.",
      locationDescriptionForOneOption: "Haritaya dokunarak/tıklayarak ya da aşağıdaki seçeneği kullanarak bu giriş için bir konum belirtin.",
      locationDescriptionForNoOption: "Haritaya tıklayarak/dokunarak bu giriş için konum belirtin.",
      addressText: "Ara",
      geographic: "Enlem/Boylam",
      locationTabText: "Konum",
      locationPopupTitle: "Konum",
      submitButtonText: "Giriş Gönder",
      submitButtonTextLoading: "Gönderiliyor&hellip;",
      formValidationMessageAlertText: "Aşağıdaki alanlar gereklidir:",
      selectLocation: "İletiminiz için bir konum seçin.",
      emptylatitudeAlertMessage: "Bir ${openLink}latitude${closeLink} koordinatı girin.",
      emptylongitudeAlertMessage: "Bir ${openLink}longitude${closeLink} koordinatı girin.",
      shareUserTitleMessage: "Katkılarınız için teşekkürler!",
      entrySubmitted: "Girişiniz haritaya gönderildi.",
      shareThisForm: "Bu Formu Paylaş",
      shareUserTextMessage: "Aşağıdaki seçenekleri kullanarak başka kullanıcılara katkıda bulunmasını söyleyin.",
      addAttachmentFailedMessage: "Eklenti katmana eklenemiyor",
      addFeatureFailedMessage: "Özellik katmana eklenemiyor",
      noLayerConfiguredMessage: "Düzenlenebilir bir detay katmanı yüklenirken ya da bulunurken bir hata oluştu. Formu görüntülemek ve iletimleri toplama işlemini başlatmak amacıyla Web haritasına düzenlenebilir Detay Katmanı ekleyin.",
      placeholderLatitude: "Enlem (Y)",
      placeholderLongitude: "Boylam (X)",
      latitude: "Enlem",
      longitude: "Boylam",
      findMyLocation: "Beni Bul",
      finding: "&hellip; bulunuyor",
      backToTop: "Başa dön",
      addressSearchText: "Gönderiminiz burada görünecek. Konumu düzeltmek için raptiyeyi sürükleyebilirsiniz.",
      shareModalFormText: "Form Bağlantısı",
      close: "Kapat",
      locationNotFound: "Konum bulunamadı.",
      setLocation: "Konum Ayarla",
      find: "Adres veya yer bul",
      attachment: "Ek",
      toggleDropdown: "Açılır Menüyü Değiştir",
      invalidString: "Geçerli değer girin.",
      invalidSmallNumber: "-32768 ile 32767 arasında geçerli bir ${openStrong}tamsayı${closeStrong} değeri girin.",
      invalidNumber: "-2147483648 ile 2147483647 arasında geçerli ${openStrong}tamsayı${closeStrong} değeri girin.",
      invalidFloat: "Geçerli ${openStrong}kayan nokta${closeStrong} değeri girin.",
      invalidDouble: "Geçerli ${openStrong}çift${closeStrong} değeri girin.",
      invalidLatLong: "Geçerli enlem ve boylam koordinatları girin.",
      invalidUTM: "Geçerli UTM koordinatları girin.",
      invalidUSNG: "Geçerli USNG koordinatları girin.",
      invalidMGRS: "Geçerli MGRS koordinatları girin.",
      geoformTitleText: "GeoForm",
      domainDefaultText: "Seç&hellip;",
      applyEditsFailedMessage: "Üzgünüz girişiniz gönderilemedi. Yeniden deneyin.",
      requiredFields: "Aşağıdaki alan gereklidir. Geçerli bir giriş sağlayın.",
      requiredField: "(gerekli)",
      error: "Hata",
      textRangeHintMessage: "${openStrong}İpucu:${closeStrong} Minimum değer ${minValue} ve Maksimum değer ${maxValue}",
      dateRangeHintMessage: "${openStrong}İpucu:${closeStrong} Minimum Tarih ${minValue} ve Maksimum Tarih ${maxValue}",
      remainingCharactersHintMessage: "${value} karakter kaldı",
      mapFullScreen: "Tam Ekran",
      mapRestore: "Geri Yükle",
      filterSelectEmptyText: "Seç",
      invalidLayerMessage: "ı_A valid layer to create the GeoForm was not found. If the GeoForm has been configured with a layer, the layer may no longer be available, or authorization failed__________________________________________________İ.",
      selectedLayerText: "Tümü",
      fileUploadStatus: "Dosya Yükleme Durumu",
      uploadingBadge: "&nbsp;Yükleniyor&hellip;",
      successBadge: "&nbsp;Yüklendi",
      retryBadge: "Tekrar Dene",
      errorBadge: "Yükleme hatası&nbsp;&nbsp;&nbsp;",
      fileTooLargeError: "Dosya eklenemeyecek kadar büyük",
      exceededFileCountError: "İzin verilen ek sayısı üst sınırı aşıldı",
      selectFileTitle: "Dosya seç",
      btnSelectFileText: "Dosya Seç",
      btnViewSubmissions: "Gönderimleri Görüntüle"
    },
    builder: {
      gettingStarted: "Başlarken",
      dateSettings: "Tarih Ayarları",
      hiddenDateField: "Bu tarih alanını gizle",
      preventPastDates: "Geçmiş tarihleri engelle",
      preventFutureDates: "Gelecek tarihleri engelle",
      useCurrentDate: "Bu alanı geçerli tarih ve saat ile ayarla",
      configure: "Yapılandır",
      configureField: "\'${fieldName}\' Alanını Yapılandır",
      invalidUser: "Üzgünüz, bu öğeyi görüntüleme izniniz yok",
      invalidWebmapSelectionAlert: "Seçilen web haritası kullanılacak geçerli bir katman içermiyor. Devam etmek için web haritanıza düzenlenebilir bir FeatureLayer ekleyin.",
      invalidWebmapSelectionAlert2: "Daha fazla bilgi için bkz. ${openLink}Detay Servisi nedir?${closeLink}",
      selectFieldsText: "Form Alanlarını Seç",
      selectThemeText: "Form Teması Seç",
      setViewerText: "Görüntüleyiciyi Yapılandır",
      introText: "Başlangıç",
      webmapText: "Web haritası",
      layerText: "Katman",
      detailsText: "Ayrıntılar",
      fieldsText: "Alanlar",
      styleText: "Stil",
      viewerText: "Görüntüleyici",
      optionText: "Seçenekler",
      previewText: "Önizleme",
      publishText: "Yayınla",
      optionsApplicationText: "Seçenekler",
      submitButtonText: "ı_Submit Button Text (Optional)__________İ",
      submitButtonDesc: "ı_Optionally label the button to submit a new entry. This text will not be translated__________________________İ.",
      viewSubmissionsText: "ı_View Submissions Text (Optional)___________İ",
      viewSubmissionsDesc: "ı_Optionally label the button to view existing entries. This text will not be translated___________________________İ.",
      titleText: "Oluşturucu",
      descriptionText: "GeoForm, ${link1}Detay Hizmeti${closeLink} içindeki form tabanlı verilerin düzenlenmesi için kullanılan yapılandırılabilir bir şablondur. Bu uygulama kullanıcıların ${link2}Web Haritası${closeLink} ve düzenlenebilir Detay Servislerini kullanırken veri girişini haritanın açılır penceresi yerine bir form üzerinden yapmasına olanak tanır. GeoForm öğenizi özelleştirmek ve dağıtmak için aşağıdaki adımları uygulayın.",
      btnPreviousText: "Önceki",
      btnNextText: "Sonraki",
      webmapTabTitleText: "Web haritası seç",
      viewWebmap: "Web haritasını görüntüle",
      webmapDetailsText: "Seçilen web haritası ${webMapTitleLink}${webMapTitle}${closeLink}. Farklı bir web haritası seçmek için \'Web Haritası Seç\' düğmesine tıklayın",
      btnSelectWebmapText: "Web Haritası Seç",
      btnSelectWebmapTextLoading: "Yükleniyor&hellip;",
      layerTabTitleText: "Düzenlenebilir Katmanları Seç",
      selectLayerLabelText: "Katman",
      selectLayerDefaultOptionText: "Katman seç",
      enableBasemapToggle: "Altlık Haritası Geçiş Ayarını Göster",
      enableBasemapToggleDescription: "GeoForm öğesini Altlık Haritayı Gösterecek/Gizleyecek biçimde yapılandırabilirsiniz",
      defaultBasemap: "Altlık Harita Geçişi",
      secondaryBasemap: "Varsayılan Altlık Harita",
      detailsTabTitleText: "Form Ayrıntıları",
      detailTitleLabelText: "Başlık",
      detailLogoLabelText: "Logo Görseli",
      descriptionLabelText: "Talimatlar ve Ayrıntılar Oluştur",
      fieldDescriptionLabelText: "Yardım Metni (isteğe bağlı)",
      fieldDescriptionHelpText: "Bu alan için kısa bir açıklama veya yönerge girin.",
      fieldHintHelpText: "Alan yer tutucu metni.",
      fieldTabFieldHeaderText: "Alan",
      fieldTabLabelHeaderText: "Etiket",
      fieldTabDisplayTypeHeaderText: "Farklı Görüntüle",
      fieldTabOrderColumnText: "Derece",
      fieldTabVisibleColumnText: "Etkin",
      displayFieldText: "Alan Görüntüle",
      selectMenuOption: "Menü Seç",
      selectRadioOption: "Radyo Düğmesi",
      selectTextOption: "Metin",
      selectDateOption: "Tarih Seçici",
      selectRangeOption: "Dokunmatik Döndürücü",
      selectCheckboxOption: "Onay Kutusu",
      selectMailOption: "E-posta",
      selectUrlOption: "URL",
      selectTextAreaOption: "Metin Alanı",
      previewApplicationText: "Uygulamayı Önizle",
      saveApplicationText: "Uygulamayı Kaydet",
      saveText: "Kaydet",
      toggleNavigationText: "Gezinmeye geç",
      formPlaceholderText: "Formum",
      shareBuilderInProgressTitleMessage: "GeoForm Yayınlanıyor",
      shareBuilderProgressBarMessage: "Bekleyin&hellip;",
      shareBuilderTitleMessage: "Başarılı! Öğe kaydedildi",
      shareBuilderTextMessage: "Başkaları ile paylaşarak bilgiyi toplamaya başlayabilirsiniz",
      shareModalFormText: "Form Bağlantısı",
      shareBuilderSuccess: "GeoForm\'unuz güncellendi ve yayınlandı!",
      geoformTitleText: "Geo Form",
      layerTabText: "Bu, GeoForm öğesinin oluşturulacağı katmanlardır. Katman, hedef kitleniz için uygun paylaşım izinleri ile düzenleme için etkinleştirilmiş bir detay hizmeti olmalıdır. Katmanların tümü seçilirse; form, kullanıcının gönderme yapacağı form katmanını seçmesine olanak tanır.",
      detailsTabText: "Başlığı düzenlemek için aşağıdaki Form Ayrıntısı kutularını kullanın, özel bir logo ekleyin ve GeoForm hedef kitleniz için kısa bir açıklama girin. Açıklamada diğer kaynaklara bağlantılar, iletişim bilgileri ekleyebilir ve hatta hedef kitlenizi GeoForm ile toplanan tüm veriyi içeren web haritalama uygulamasına yönlendirebilirsiniz.",
      fieldsTabText: "Burada hangi alanların GeoForm hedef kitleniz için görünür olacağını seçebilir, bunların göreceği etiketleri düzenleyebilir ve veri girişine yardımcı olmak için kısa bir Açıklama ekleyebilirsiniz.",
      styleTabText: "Tercihinize göre aşağıdaki temaları kullanarak GeoForm\'unuzu biçimlendirin.",
      viewerTabText: "GeoForm öğesinden gelen gönderileri görüntüleme seçeneklerini ayarlayın.",
      publishTabText: "GeoForm\'unuzu özelleştirmeyi bitirdiyseniz, uygulamayı kaydedin ve kitlenizle paylaşmaya başlayın. Her zaman bu oluşturucuya geri dönebilir ve geri bildirimlere bağlı olarak özelleştirmeye devam edebilirsiniz.",
      headerSizeLabel: "Başlık Boyutu",
      smallHeader: "Küçük Başlık Kullan",
      bigHeader: "Büyük Başlık Kullan",
      pushpinText: "Raptiye",
      doneButtonText: "Kaydet ve Çık",
      fieldTabPlaceHolderHeaderText: "İpucu (isteğe bağlı)",
      enableAttachmentLabelText: "${openStrong}Eklentileri Etkinleştir${closeStrong}",
      enableAttachmentLabelHint: "Eklentileri burada etkinleştirebilir/devre dışı bırakabilirsiniz",
      attachmentIsRequiredLabelText: "${openStrong}Eklenti Gerekiyor${closeStrong}",
      attachmentIsRequiredLabelHint: "Gerekiyorsa, kullanıcıların bir eklenti girmesi gerekebilir.",
      attachmentLabelText: "Eklenti Düğmesi Etiketi",
      attachmentLabelHint: "Bu metin Ek Düğmesinin yanında görüntülenir. Bu alanı kullanıcıların eklemesini istediğiniz öğeleri (fotoğraf, video, belge vb.), istediğiniz dosya biçimini (.jpeg, .png, .docx, .pdf, vb.) açıklamak ve diğer ek talimatlar için kullanabilirsiniz",
      attachmentDescription: "Eklenti Tanımı",
      attachmentHint: "Gerekiyorsa, burada ilave eklenti talimatları sunun.",
      jumbotronDescription: "Formunuz için büyük ya da küçük başlık kullanın. Büyük bir başlık uygulamanızın amacını tanımlamanıza yardımcı olabilir ancak ekranınızda daha fazla yer kaplayacaktır",
      shareGeoformText: "Sosyal medya paylaşma düğmeleri",
      shareDescription: "Sosyal medya düğmeleri, gönderi yapıldığında kitlenizin GeoForm öğenizi kolayca paylaşmasına olanak tanır",
      defaultMapExtent: "Varsayılan Harita Yayılımı",
      defaultMapExtentDescription: "Harita, iletimden sonra web haritanızın varsayılan yayılımına sıfırlanacak; bu işlev istenildiğinde devre dışı bırakılabilir.",
      pushpinOptionsDescription: "Harita raptiyesi için çeşitli renkler arasından seçim yapın, kullanıcının haritada kendi iletimini yerleştirmesi için harita sembolojisinden farklı olmalıdır",
      selectLocationText: "Konum Seçme Kriteri:",
      myLocationText: "Konumum",
      searchText: "Ara",
      coordinatesText: "Enlem ve Boylam Koordinatları",
      usng: "USNG Koordinatları",
      mgrs: "MGRS Koordinatları",
      utm: "UTM Koordinatları",
      selectLocationSDescription: "Kullanıcıların bu yöntemleri kullanarak bir konum seçmesine izin verin.",
      dragTooltipText: "Alanı, görünmesini istediğiniz yere sürükleyin",
      showHideLayerText: "Katmanı Göster",
      showHideLayerHelpText: "GeoForm\'u Katmanı Gösterecek/Gizleyecek biçimde yapılandırabilirsiniz. Bu seçenek yalnızca tek katmanlı kurulumlar için geçerlidir.",
      enableOfflineSupport: "ı_Enable offline support________İ",
      enableOfflineSupportHelpText: "ı_Store submissions when there is no network connection and submit them when a connection is restored_______________________________İ.",
      labelHelpMessage: "Etiket",
      placeHolderHintMessage: "İpucu Metni",
      placeHolderHelpMessage: "Yardım Metni",
      selectTextOptionValue: "Filtre Seçimi",
      disableLogo: "Logoyu Devre Dışı Bırak",
      disableLogoDescription: "GeoForm öğesini form başlığında Logoyu Gösterecek/Gizleyecek biçimde yapılandırabilirsiniz",
      locateOnLoadText: "Yüklerken Bul",
      locateOnLoadDescription: "GeoForm öğesini sayfa yüklenirken geçerli konumu kullanacak biçimde yapılandırabilirsiniz",
      selectLayerFieldTabText: "Katman seç",
      allLayerSelectOptionText: "Tüm Katmanlar",
      disableViewer: "Görüntüleyiciyi Devre Dışı Bırak",
      disableViewerDescription: "GeoForm öğesini, görüntüleyiciyi devre dışı bırakacak/etkinleştirecek biçimde yapılandırabilirsiniz",
      displayFieldHintText: "Seçili görüntüleme alanı, görüntüleyicide başlık olarak gösterilir"
    },
    viewer: {
      geocoderCancelText: "İptal",
      viewMapTabText: "Harita",
      sortHeaderText: "Sıralama Ölçütü:",
      geocoderPlaceholderText: "Posta Kodu, şehir vb.",
      noSearchResult: "Hiçbir sonuç bulunamadı",
      legendTabTooltip: "Gösterim",
      aboutUsTabTooltip: "Hakkımızda",
      mapTabTooltip: "Harita",
      btnDescendingText: "Azalan",
      btnAscendingText: "Artan",
      geometryUnavailableErrorMessage: "Detay geometrisi bulma hatası",
      infoPopupOffErrorMessage: "Görüntülenecek bilgi yok",
      btnLoadMoreText: "Daha Fazla Yükle",
      unavailableTitleText: "Başlıksız",
      unavailableConfigMessage: "Yapılandırma yüklenemiyor",
      share: "Paylaş",
      viewReportsTabText: "Raporlar",
      viewLegendTabText: "Gösterim",
      viewAboutusTabText: "Hakkında",
      appLoadingFailedMessage: "Görüntüleyici yükleme hatası oluştu"
    }
  })
);