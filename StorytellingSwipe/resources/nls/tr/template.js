define(
	({
		viewer: {
			loading: {
				step1: "UYGULAMA YÜKLENİYOR",
				step2: "VERİLER YÜKLENİYOR",
				step3: "BAŞLATILIYOR",
				fail: "Özür dileriz; Swipe yüklenemedi",
				loadBuilder: "DERLEYİCİ MODUNA GEÇİLİYOR",
				failButton: "Tekrar dene"
			},
			errors: {
				boxTitle: "Hata oluştu",
				portalSelf: "Onarılamaz hata: Portal yapılandırması alınamadı",
				invalidConfig: "Onarılamaz: Geçersiz yapılandırma",
				invalidConfigNoWebmap: "Onarılamaz hata: Geçersiz yapılandırma (hiçbir web haritası belirtilmedi)",
				createMap: "Harita oluşturulamıyor",
				invalidApp: "Onarılamaz hata: Uygulama yüklenemiyor",
				initMobile: "Swipe web uygulamasına hoş geldiniz. Uygulama yapılandırılmadı. Etkileşimli derleyici mobil cihazlarda desteklenmez.",
				noBuilderIE8: "Swipe etkileşimli derleyicisi Internet Explorer\'ın 9. sürümünden öncesinde desteklenmez.",
				noLayerView: "Swipe web uygulamasına hoş geldiniz.<br />Uygulama henüz yapılandırılmadı.",
				appSave: "Web uygulamasını kaydederken hata oluştu",
				mapSave: "Web haritasını kaydederken hata oluştu",
				notAuthorized: "Bu uygulamaya erişim yetkiniz yok",
				conflictingProjectionsTitle: "Çelişen Projeksiyonlar",
				conflictingProjections: "Swipe farklı projeksiyonları olan iki web haritasını desteklemez. Ayarları açın ve ilk web haritasıyla aynı projeksiyonu kullanan bir web haritası kullanın.",
				cpButton: "Kapat"
			},
			mobileView: {
				hideIntro: "GİRİŞİ GİZLE",
				navLeft: "Gösterge",
				navMap: "Harita",
				navRight: "Veri"
			},
			desktopView: {
				storymapsText: "Öykü haritası",
				builderButton: "Derleyici moduna geç",
				bitlyTooltip: "Uygulamaya bir kısa bağlantı alın"
			}
		},
		builder: {
			builder: {
				panelHeader: "UYGULAMA YAPILANDIRMASI",
				buttonSave: "KAYDET",
				buttonDiscard: "İPTAL",
				buttonSettings: "Ayarlar",
				buttonView: "Modu görüntüle",
				buttonItem: "Web Uygulaması öğesini açın",
				noPendingChange: "Bekleyen değişiklik yok",
				unSavedChangeSingular: "Kaydedilmemiş 1 değişiklik var",
				unSavedChangePlural: "kaydedilmemiş değişiklikler",
				popoverDiscard: "Kaydedilmemiş değişiklerden vazgeçmek istediğinizden emin misiniz?",
				yes: "Evet",
				no: "Hayır",
				popoverOpenViewExplain: "Görüntüleyiciyi açarsanız, kaydedilmemiş değişiklikleri kaybedeceksiniz",
				popoverOpenViewOk: "Tamam",
				popoverOpenViewCancel: "İptal",
				popoverSaveWhenDone: "İşiniz bittiğinde kaydetmeyi unutmayın",
				closeWithPendingChange: "Eylemi onaylamak istediğinizden emin misiniz? Değişiklikleriniz kaybolacak.",
				gotIt: "Tamam",
				savingApplication: "Uygulama kaydediliyor",
				saveSuccess: "Uygulama başarıyla kaydedildi",
				saveError: "Kaydetme başarısız; tekrar deneyin",
				signIn: "Uygulamayı kaydetmek için",
				signInTwo: "üzerindeki başka bir hesap ile oturum açın."
			},
			header:{
				editMe: "Beni düzenle !",
				templateTitle: "Şablon başlığını ayarla",
				templateSubtitle: "Şablon altyazısını ayarla"
			},
			settings: {
				settingsHeader: "Uygulama ayarları",
				modalCancel: "İptal",
				modalApply: "Uygula"
			},
			settingsColors: {
				settingsTabColor: "Tema",
				settingsColorExplain: "Uygulama teması seçin veya kendi renklerinizi tanımlayın.",
				settingsLabelColor: "Üstbilgi ve yan panel arka plan renkleri"
			},
			settingsHeader: {
				settingsTabLogo: "Üstbilgi",
				settingsLogoExplain: "Üstbilgi logosunu özelleştirin. (Maksimum 250 x 50 px\'tir.)",
				settingsLogoEsri: "Esri logosu",
				settingsLogoNone: "Logo yok",
				settingsLogoCustom: "Özel logo",
				settingsLogoCustomPlaceholder: "Görüntü URL\'si",
				settingsLogoCustomTargetPlaceholder: "Tıklanabilir bağlantı",
				settingsLogoSocialExplain: "Üstbilgi üst sağ bağlantısını özelleştirin.",
				settingsLogoSocialText: "Metin",
				settingsLogoSocialLink: "Bağlantı",
				settingsLogoSocialDisabled: "Bu özellik Yönetici tarafından devre dışı bırakıldı"
			},
			settingsExtent: {
				settingsTabExtent: "Yayılım",
				settingsExtentExplain: "Aşağıdaki harita yoluyla ilk yayılımı ayarlayın.",
				settingsExtentExplainBottom: "Tanımladığınız yayılım web haritanızın ilk yayılımını değiştirir. Bir swipe serisi yapıyorsanız, yayılımın kullanılmayacağına dikkat edin.",
				settingsExtentDateLineError: "ı_The extent cannot be across the meridian of 180ï¿½ longitude_İ",
				settingsExtentDateLineError2: "Yayılımı hesaplanırken hata oluştu",
				settingsExtentDrawBtn: "Yeni yayılım çiz",
				settingsExtentModifyBtn: "Geçerli yayılımı düzenle",
				settingsExtentApplyBtn: "Ana haritaya uygula",
				settingsExtentUseMainMap: "Ana harita yayılımını kullan"
			}
        },
		swipe: {
			mobileData: {
				noData: "Görüntülenecek veri yok!",
				noDataExplain: "Detay seçmek ve buraya geri dönmek için haritaya dokunun",
				noDataMap: "Bu harita için veri yok",
				noPopup: "Bu özellik için açılan bir pencere bulunamadı"
			},
			mobileLegend: {
				noLegend: "Görüntülenecek gösterim yok."
			},
			swipeSidePanel: {
				editTooltip: "Yan panel açıklamasını ayarlayın",
				editMe: "Beni düzenle !",
				legendTitle: "Gösterge"
			},
			infoWindow: {
				noFeature: "Görüntülenecek veri yok",
				noFeatureExplain: "Detay seçmek için haritaya dokunun"
			},
			settingsLayout: {
				settingsTabLayout: "Swipe Tarzı",
				settingsLayoutExplain: "Swipe aracı için bir tarz seçin.",
				settingsLayoutSwipe: "Dikey çubuk",
				settingsLayoutSpyGlass: "Küçük dürbün",
				settingsLayoutSelected: "Seçili düzen",
				settingsLayoutSelect: "Bu düzeni seç",
				settingsSaveConfirm: "Değişikliklerinizden bazıları kaydedip uygulamayı tekrar yüklemenizi gerektiriyor"
			},
			settingsDataModel: {
				settingsTabDataModel: "Swipe Türü",
				settingsDataModelExplainSwipe: "Kullanıcıların swipe ile gezmesini istersiniz?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Küçük dürbünde görünecek katmanı veya web haritasını seçin.",
				settingsDataModelOneMap: "Web haritasındaki bir katman",
				settingsDataModel1Explain: "Swipe ile gezilmesini istediğiniz katmanı seçin",
				settingsDataModel1Warning: "Katman üst katmanlar tarafından gizlenirse, swipe\'ın bir etkisi olmaz.",
				settingsDataModel1SpyGlassExplain: "Küçük dürbünde görünecek katmanı seçin.",
				settingsDataModelTwoMaps: "İki web haritası",
				settingsDataModelLayerIds: "Web haritası Katman Kimlikleri",
				settingsDataModelSelected: "Seçilen tür",
				settingsDataModelWebmapSwipeId1: "Sağ Web haritası kimliği",
				settingsDataModelWebmapSwipeId2: "Sol Web haritası kimliği",
				settingsDataModelWebmapGlassId1: "Ana Web haritası kimliği",
				settingsDataModelWebmapGlassId2: "Küçük Dürbün Web haritası kimliği",
				settingsDataModelSelect: "Bu türü seç",
				settingsDataModel2Explain: "Başka bir web haritasıyla swipe kullan.",
				settingsDataModel2SpyGlassExplain: "Başka bir web haritasını ortaya çıkarın.",
				settingsDataModel2HelpTitle: "Bir web haritasının kimliğini nasıl bulabilirim?",
				settingsDataModel2HelpContent: "Web haritasının URL'sindeki '=' işaretinden sonraki rakamları kopyalayıp yapıştırın"
			},
			settingsLegend: {
				settingsTabLegend: "Uygulama Düzeni",
				settingsLegendExplain: "Uygulama yerleşim ayarlarını seçin.",
				settingsLegendEnable: "Gösterimi Etkinleştir",
				settingsDescriptionEnable: "Açıklamayı Etkinleştir",
				settingsBookmarksEnable: "Swipe serisini etkinleştir",
				settingsPopupDisable: "Açılan pencereyi etkinleştir",
				settingsLocationSearchEnable: "Bulucu aramasını etkinleştir",
				settingsGeolocatorEnable: "Coğrafi bulucuyu etkinleştir",
				settingsLegendHelpContent: "Gösterge içeriğini netleştirmek için, ArcGIS.com web haritası görüntüleyicisi içindekiler tablosunu kullanın (Göstergede Gizle)",
				settingsSeriesHelpContent: "Swipe serisi, izleyiciye belirli bir yayılım için kılavuzluk eden ve yan panelde bir başlık ve açıklama metni gösteren sekmeli bir gezinme seçeneğidir.  İlk etkinleştirme sırasında web haritalarının yer işaretleri içe aktarılır ve seri çubuğunu önceden doldurmak için kullanılır.  Seri seçeneğini devre dışı bırakmak seri çubuğunu kapatır, ancak seri yapılandırması gelecekte kullanılmak üzere saklanır.", 
				settingsSeriesHelpContent2: "Swipe serisi, beraberinde başlıklar ve metin ile seçili bir konum kümesi oluşturmanıza ve bunu düzenlemenize izin verir.  Web haritanızın yer işaretleri varsa, bunlar görüntülenir.  Seriyi devre dışı bırakabilirsiniz, ancak yapılandırma gelecekte kullanılmak üzere saklanır.",
				settingsSeriesHelpLink: "Bir swipe serisi olan bir uygulama örneğini burada görebilirsiniz",
				preview: "Kullanıcı arayüzü önizlemesi",
				settingsLocateButtonExplain: "Bu işlevsellik çoğu mobil cihazda ve (Internet Explorer 9+ dahil) masaüstü tarayıcısında desteklenir.",
				settingsLocateButton: "ı_Enable a 'Locate' button on supported browsers_İ",
				settingsAddressSearch: "Adres arama aracını etkinleştir"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Açılan Pencere",
				settingsSwipePopupExplain: "Açılan pencere üstbilgisinin görünümünü, kullanıcının açılan pencereleri katmanlar ile ilişkilendirmesine yardımcı olacak şekilde özelleştirin.",
				settingsSwipePopupSwipe1: "Sol Harita",
				settingsSwipePopupSwipe2: "Sağ Harita",
				settingsSwipePopupGlass1: "Ana Harita",
				settingsSwipePopupGlass2: "Küçük Dürbün Haritası",
				settingsSwipePopupTitle: "Üstbilgi Başlığı",
				settingsSwipePopupColor: "Üstbilgi Rengi"
			},
			initPopup: {
				initHeader: "Swipe Derleyicisine Hoş Geldiniz",
				modalNext: "Sonraki",
				modalPrev: "Önceki",
				modalApply: "Uygulamayı aç"
			},
			seriesPanel: {
				title: "Başlık",
				descr: "Açıklama",
				discard: "Yer İşaretinden Vazgeç",
				saveExtent: "Yer İşareti Yayılımını Ayarla",
				discardDisabled: "Bu yer işaretini kaldıramazsınız. Swipe serisi Ayarlar\'da devre dışı bırakılabilir."
			}
		}
    })
);