define(
	 ({
		viewer: {
			loading: {
				step1: "HiKAYE YÜKLENiYOR",
				step2: "VERİLER YÜKLENİYOR",
				step3: "BAŞLATILIYOR",
				fail: "Özür dileriz; Swipe yüklenemedi",
				loadBuilder: "DERLEYİCİ MODUNA GEÇİLİYOR",
				redirectSignIn: "OTURUM AÇMA SAYFASINA YÖNLENDİRİLİYOR",
				redirectSignIn2: "(oturum açtıktan sonra buraya yeniden yönlendirileceksiniz)",
				failButton: "Tekrar dene"
			},
			errors: {
				boxTitle: "Hata oluştu",
				portalSelf: "Onarılamaz hata: Portal yapılandırması alınamadı",
				invalidConfig: "Onarılamaz: Geçersiz yapılandırma",
				invalidConfigNoWebmap: "ı_Fatal error: Invalid configuration (web map or application identifier not specified in index.html)______________________________İ",
				invalidConfigNoAppDev: "ı_No Web Mapping Application identifier or webmap are specified in URL parameters (?appid= or ?webmap=). In development mode, the appid and webmap configuration in index.html are ignored_________________________________________________________İ.",
				createMap: "Harita oluşturulamıyor",
				invalidApp: "Onarılamaz hata: Hikaye yüklenemiyor",
				initMobile: "Swipe web uygulamasına hoş geldiniz. Uygulama yapılandırılmadı. Etkileşimli derleyici mobil cihazlarda desteklenmez.",
				initMobile2: "ı_The Swipe builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen_____________________________________________________İ.",
				initMobile3: "ı_Please rotate your device to landscape orientation to use the Swipe builder________________________İ.",
				noBuilderIE8: "Swipe etkileşimli derleyicisi Internet Explorer\'ın 9. sürümünden öncesinde desteklenmez.",
				noLayerView: "Swipe web uygulamasına hoş geldiniz.<br />Uygulama henüz yapılandırılmadı.",
				appSave: "Web hikayesi kaydetme hatası",
				mapSave: "Web haritasını kaydederken hata oluştu",
				notAuthorized: "Bu hikayeye erişme yetkiniz yok",
				notAuthorizedBuilder: "ı_You are not authorized to use Swipe and Spyglass builder__________________İ.",
				conflictingProjectionsTitle: "Çelişen Projeksiyonlar",
				conflictingProjections: "Sıyır, farklı projeksiyonları olan iki web haritasını desteklemez. Ayarları açın ve ilk web haritasıyla aynı projeksiyonu kullanan bir web haritası kullanın.",
				cpButton: "Kapat",
				unspecifiedConfigOwner: "Yetkili sahip yapılandırılmamış.",
				invalidConfigOwner: "Hikaye sahibi yetkilendirilmemiş."
			},
			mobileView: {
				hideIntro: "GİRİŞİ GİZLE",
				navLeft: "Gösterim",
				navMap: "Harita",
				navRight: "Veri"
			},
			desktopView: {
				storymapsText: "Öykü haritası",
				builderButton: "Derleyici moduna geç",
				facebookTooltip: "Facebook\'ta Paylaş",
				twitterTooltip: "Twitter\'da Paylaş",
				bitlyTooltip: "Kısa bağlantı edin",
				tooltipAutoplayDisabled: "ı_This isn't available in autoplay mode____________İ",
				autoplayLabel: "ı_Autoplay mode_____İ",
				autoplayExplain1: "ı_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________İ.",
				autoplayExplain2: "ı_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________İ."
			}
		},
		builder: {
			builder: {
				panelHeader: "HİKAYE YAPILANDIRMASI",
				buttonSave: "KAYDET",
				buttonHelp: "Yardım",
				buttonShare: "Paylaş",
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
				savingApplication: "Hikaye kaydediliyor",
				saveSuccess: "ı_Story saved____İ",
				saveError: "Kaydetme başarısız; tekrar deneyin",
				saveError2: "Addaki veya açıklamadaki geçersiz bir html etiketi nedeniyle kaydetme başarısız oldu",
				saveError3: "Başlık boş olamaz",
				signIn: "Uygulamayı kaydetmek için",
				signInTwo: "hikayeyi kaydetmek için."
			},
			header:{
				editMe: "Beni düzenle!",
				templateTitle: "Şablon başlığını ayarla",
				templateSubtitle: "Şablon altyazısını ayarla"
			},
			settings: {
				settingsHeader: "Hikaye ayarları",
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
				settingsExtentDateLineError: "Yayılım 180ï¿½ boylamının meridyeni boyunca olamaz",
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
				editMe: "Beni düzenle!",
				legendTitle: "Gösterim"
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
				settingsSaveConfirm: "Değişikliklerinizden bazıları için hikayeyi kaydedip tekrar yüklemeniz gerekiyor"
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
				settingsDataModel2HelpContent: "Web haritasının URL\'sindeki \'=\' işaretinden sonraki rakamları kopyalayıp yapıştırın",
				switchMaps: "Haritaları değiştir",
				browseWebMaps: "Web haritalarına gözat"
			},
			settingsLegend: {
				settingsTabLegend: "Uygulama Düzeni",
				settingsLegendExplain: "Yerleşim ayarlarını seçin.",
				settingsLegendEnable: "Gösterimi Etkinleştir",
				settingsDescriptionEnable: "Açıklamayı Etkinleştir",
				settingsBookmarksEnable: "Swipe serisini etkinleştir",
				settingsPopupDisable: "ı_Enable pop-up_____İ",
				settingsLocationSearchEnable: "Bulucu aramasını etkinleştir",
				settingsGeolocatorEnable: "Coğrafi bulucuyu etkinleştir",
				settingsLegendHelpContent: "ı_To refine the legend content, use the ArcGIS web map viewer table of contents (Hide in Legend)_____________________________İ",
				settingsSeriesHelpContent: "Swipe serisi, izleyiciye belirli bir yayılım için kılavuzluk eden ve yan panelde bir başlık ve açıklama metni gösteren sekmeli bir gezinme seçeneğidir.  İlk etkinleştirme sırasında web haritalarının yer işaretleri içe aktarılır ve seri çubuğunu önceden doldurmak için kullanılır.  Seri seçeneğini devre dışı bırakmak seri çubuğunu kapatır, ancak seri yapılandırması gelecekte kullanılmak üzere saklanır.",
				settingsSeriesHelpContent2: "Swipe serisi, beraberinde başlıklar ve metin ile seçili bir konum kümesi oluşturmanıza ve bunu düzenlemenize izin verir.  Web haritanızın yer işaretleri varsa, bunlar görüntülenir.  Seriyi devre dışı bırakabilirsiniz, ancak yapılandırma gelecekte kullanılmak üzere saklanır.",
				settingsSeriesHelpLink: "Bir swipe serisi olan bir uygulama örneğini burada görebilirsiniz",
				preview: "Kullanıcı arayüzü önizlemesi",
				settingsLocateButtonExplain: "Bu işlevsellik çoğu mobil cihazda ve (Internet Explorer 9+ dahil) masaüstü tarayıcısında desteklenir.",
				settingsLocateButton: "Desteklenen tarayıcılarda \'Konum Bul\' düğmesini etkileştir",
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
				initHeader: "Swipe/Küçük Dürbün Derleyici\'ye Hoş Geldiniz",
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
				title: "Yardım",
				close: "Kapat",
				tab1: {
					div1: "Swipe/Küçük Dürbün şablonu iki ayrı web haritasını veya tek bir web haritasının iki katmanını akıllı telefonlar ve tabletler dahil herhangi bir cihazda herhangi bir web tarayıcısında kullanılabilecek çekici, kolay kullanılan bir web uygulamasında karşılaştırmak için tasarlanmıştır.",
					div2: "Swipe/Küçük Dürbün şablonu hakkında, kullanıcıların oluşturduğu örnekler dahil ek bilgi için, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> Öykü Haritaları web sitesini ziyaret edin</a>. Bizi <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a> adresinden Twitter\'da izleyebilirsiniz.",
					div3: "Bize yazmanızı istiyoruz! İster bir soru sormak istiyor, ister yeni bir özellik istiyor, ister bir hata bulduğunuzu düşünüyor olun, <a href='http://links.esri.com/storymaps/forum' target='_blank'>Öykü Haritaları Kullanıcı Forumu</a>\'nu ziyaret edin."
				}
			},
			share: {
				firstSaveTitle: "ı_Story saved____İ",
				manageStory: "ı_Manage your story______İ",
				manageStoryA1: "ı_Tip: You can use %LINK1% to check your story for errors and change how its components are shared. My Stories also helps you make your story look good when it is shared on social networks. You can learn about other useful features of My Stories in these %LINK2%_______________________________________________________________________________İ.",
				manageStoryA1V1: "ı_My Stories____İ",
				manageStoryA1V2: "ı_blog posts____İ",
				shareTitle: "Hikayenizi paylaşın",
				sharePrivateHeader: "Hikayeniz paylaşılmıyor, paylaşmak ister misiniz?",
				sharePrivateBtn1: "Herkesle paylaş",
				sharePrivateBtn2: "Kuruluşumla Paylaş",
				sharePrivateProgress: "Paylaşma sürüyor...",
				sharePrivateErr: "Paylaşma başarısız, tekrar deneyin veya",
				sharePrivateOk: "ı_Sharing updated, loading_________İ...",
				shareStatus1: "Hikaye kaydedilmedi",
				shareStatus2: "Hikaye herkes ile paylaşılıyor",
				shareStatus3: "Hikaye kuruluş içinde paylaşılıyor",
				shareStatus4: "Hikaye paylaşılmıyor",
				sharePreviewAsUser: "Önizleme",
				shareHeader1: "Hikayeniz <strong>genel olarak erişilebilir durumda</strong>.",
				shareHeader2: "Hikayenize kuruluşunuzun üyeleri erişebilir (Oturum açılması gerekir).",
				shareLinkHeader: "ı_Share your story______İ",
				shareLinkOpen: "AÇ",
				learnMore: "Daha fazla bilgi",
				shareA1: "<a href='%LINK1%' target='_blank'>Uygulama öğesi sayfasında</a> %SHAREIMG% kullanın. Ayrıca, web haritasını paylaşmayı kaldırmak istiyorsanız, <a href='%LINK2%' target='_blank'>web haritası öğe sayfasını</a> kullanın.",
				shareWarning: "%WITH% ile paylaşma devre dışı bırakıldı çünkü <a href='%LINK%' target='_blank'>web haritasının</a> sahibi değilsiniz.",
				shareWarningWith1: "ı_publicly___İ",
				shareWarningWith2: "ı_publicly and with the Organization___________İ"
			},
			directCreation: {
				header: "Swipe/Küçük Dürbün Derleyici\'ye Hoş Geldiniz",
				mapPickHeader: "Başlamak için geçerli bir web haritası kimliği girin veya web haritalarına göz atmak için arama düğmesini kullanın.",
				launchBuilder: "Derleyiciyi Başlat",
				chooseWebmapLbl: "Web haritası seç...",
				explain2: "ı_To create a Swipe or Spyglass story map, use the button below to choose the existing web map you want to use. Alternatively, you can paste the ID of the web map into the field below________________________________________________________İ.",
				explain3: "Öykü haritanızda iki web haritası kullanmak istiyorsanız, bu seçeneği belirlediğinizde daha sonra sizden ikinci web haritası istenir.",
				webmapPlaceholder: "Web haritası kimliği girin..."
			},
			saveErrorSocial: {
				title: "ı_Social media sharing update_________İ",
				panel1: "ı_Your storyâ€™s appearance on social media has been improved, but your ArcGIS web application item title is not the same as your story title___________________________________________İ.",
				panel1tooltip: "ı_By defining a title, summary and thumbnail image, your story will look like this_________________________İ:",
				panel2:	"ı_Which title would you like to use on social media________________İ:",
				panel2q1: "ı_Story title (recommended)_________İ",
				panel2q1tooltip: "ı_By choosing this option, your item title will be modified to match your story title and further changes in the builder will be synchronized___________________________________________İ.",
				panel2q2: "ı_Item title____İ",
				panel3: "ı_To further improve how your story looks on social media use ${MYSTORIES} to add a summary and a thumbnail image___________________________________İ.",
				panel4: "ı_Do not warn me again for this story____________İ",
				mystories: "ı_My Stories____İ",
				btnSave: "ı_Save__İ"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Kuruluşum",
					onlineLabel: "ArcGIS Online",
					contentLabel: "İçeriğim",
					favoritesLabel: "Favorilerim"
				},
				title: "ı_Select Web Map_____İ",
				searchTitle: "Ara",
				ok: "Tamam",
				cancel: "İptal",
				placeholder: "Arama terimini gir"
			}
		}
    })
);
