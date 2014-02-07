define(
	({
		viewer: {
			loading: {
				step1: "UYGULAMA YÜKLENİYOR",
				step2: "VERİLER YÜKLENİYOR",
				step3: "BAŞLATILIYOR",
				fail: "Özür dileriz; Swipe yüklenemedi",
				loadBuilder: "DERLEYİCİ MODUNA GEÇİLİYOR",
				redirectSignIn: "ı_REDIRECTING TO SIGN-IN PAGE_İ",
				redirectSignIn2: "ı_(you will be redirected here after sign-in)_İ",
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
				buttonHelp: "ı_Help_İ",
				buttonShare: "ı_Share_İ",
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
				saveError2: "ı_Save failed due to an invalid html tag in a name or description_İ",
				saveError3: "ı_The title can't be empty_İ",
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
				settingsDataModel2HelpContent: "Web haritasının URL'sindeki '=' işaretinden sonraki rakamları kopyalayıp yapıştırın",
				switchMaps: "ı_Switch maps_İ",
				browseWebMaps: "ı_Browse web maps_İ"
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
				initHeader: "ı_Welcome to the Swipe/Spyglass Builder_İ",
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
			},
			helpPopup: {
				title: "ı_Help_İ",
				close: "ı_Close_İ",
				tab1: {
					div1: "ı_The Swipe/Spyglass template is designed to compare two seperate web maps or two layers of a single web map in an attractive, easy-to-use web application that can be used in any web browser on any device, including smartphones and tablets._İ",
					div2: "ı_For additional information on the Swipe/Spyglass template, including examples created by users, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visit the Story Maps website</a>. You can also follow us on Twitter at <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>._İ",
					div3: "ı_We would love to hear from you! Whether you have a question, want to request a new feature, or think you've found a bug, please visit the <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps User Forum</a>._İ"
				}
			},
			share: {
				firstSaveTitle: "ı_Application successfully saved_İ",
				firstSaveHeader: "ı_Your Application is now saved in ArcGIS Online. Please read the following answers to frequent questions._İ",
				firstSaveA1: "ı_If you are not familiar with ArcGIS Online or want a shortcut to access the authoring interface, you can save the following link: %LINK1%_İ",
				firstSaveA1bis: "ı_The Application can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>._İ",
				firstSaveQ2: "ı_Is my Application shared?_İ",
				firstSaveA2: "ı_Currently your Application is not shared. To share it, use the SHARE button._İ",
				shareTitle: "ı_Share your Application_İ",
				sharePrivateHeader: "ı_Your Application is not shared, would you like to share it?_İ",
				sharePrivateBtn1: "ı_Share publicly_İ",
				sharePrivateBtn2: "ı_Share with my Organization_İ",
				sharePrivateProgress: "ı_Sharing in progress..._İ",
				sharePrivateErr: "ı_Sharing failed, try again or_İ",
				sharePrivateOk: "ı_Sharing updated successfully, loading..._İ",
				shareStatus1: "ı_Application is not saved_İ",
				shareStatus2: "ı_Application is shared publicly_İ",
				shareStatus3: "ı_Application is shared within the organization_İ",
				shareStatus4: "ı_Application is not shared_İ",
				sharePreviewAsUser: "ı_Preview_İ",
				shareHeader1: "ı_Your Application is <strong>publicly accessible</strong>._İ",
				shareHeader2: "ı_Your Application is accessible by your organization members (login is required)._İ",
				shareLinkHeader: "ı_Share the Application with your audience_İ",
				shareLinkOpen: "ı_OPEN_İ",
				learnMore: "ı_Learn more_İ",
				shareQ1Opt1: "ı_How do I keep the Application private?_İ",
				shareQ1Opt2: "ı_How do I keep the Application private or share it publicly?_İ",
				shareA1: "ı_Use %SHAREIMG% on <a href='%LINK1%' target='_blank'>the application item page</a>. If you also want to unshare the web map, use <a href='%LINK2%' target='_blank'>the web map item page</a>._İ",
				shareA1bis: "ı_If you also want to unshare the Feature Service, use <a href='%LINK1%' target='_blank'>the Feature Service item page</a>._İ",
				shareQ2: "ı_How do I edit the Application later?_İ",
				shareQ2bis: "ı_How do I get back to the authoring interface?_İ",
				shareA2div1: "ı_Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the application item page</a>._İ",
				shareA2div2: "ı_As the owner of the application, when you are signed in on ArcGIS.com, the application includes a button to open the interactive builder:_İ",				
				shareQ3: "ı_Where is the data stored?_İ",
				shareA3: "ı_The Application configuration is stored in this web application item</a>._İ",
				shareWarning: "ı_Sharing %WITH% has been disabled because you are not the owner of the <a href='%LINK%' target='_blank'>webmap</a>._İ",
 				shareWarningWith1: "ı_publicly_İ",
 				shareWarningWith2: "ı_publicly and with the Organization_İ"
			},
			directCreation: {
				header: "ı_Welcome to the Swipe/Spyglass Builder_İ",
				mapPickHeader: "ı_To get started, please input a valid web map id, or use the search button to browse web maps._İ",
				launchBuilder: "ı_Launch Builder_İ"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "ı_My Organization_İ",
					onlineLabel: "ı_ArcGIS Online_İ",
					contentLabel: "ı_My Content_İ",
					favoritesLabel: "ı_My Favorites_İ"
				},
				title: "ı_Select Web Map_İ",
				searchTitle: "ı_Search_İ",
				ok: "ı_Ok_İ",
				cancel: "ı_Cancel_İ",
				placeholder: "ı_Enter search term_İ"
			}
		}
    })
);