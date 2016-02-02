define(
	 ({
		viewer: {
			common: {
				close: "Kapat"
			},
			loading: {
				long: "Hikaye başlatılıyor",
				long2: "Beklendiğiniz için teşekkürler",
				failButton: "Hikayeyi yeniden yükle"
			},
			signin: {
				title: "Kimlik doğrulama gerekli",
				explainViewer: "Hikayeye erişmek için %PORTAL_LINK% üzerindeki bir hesapla oturum açın.",
				explainBuilder: "Hikayeyi yapılandırmak için %PORTAL_LINK% üzerindeki bir hesapla oturum açın."
			},
			errors: {
				boxTitle: "Bir hata oluştu",
				invalidConfig: "Geçersiz yapılandırma",
				invalidConfigNoApp: "Web Mapping Application tanımlayıcısı index.html dosyasında tanımlı değil.",
				invalidConfigNoAppDev: "ı_No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored______________________________________________İ.",
				unspecifiedConfigOwner: "Yetkili malik yapılandırılmamış.",
				invalidConfigOwner: "Hikaye sahibi yetkilendirilmemiş.",
				createMap: "Harita oluşturulamıyor",
				invalidApp: "%TPL_NAME% mevcut değil ya da erişilemez.",
				appLoadingFail: "Hata oluştu, %TPL_NAME% doğru şekilde yüklenmedi.",
				notConfiguredDesktop: "Hikaye henüz yapılandırılmadı.",
				notConfiguredMobile: "ı_The %TPL_NAME% builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen______________________________________________________İ.",
				notConfiguredMobile2: "ı_Please rotate your device to landscape orientation to use the %TPL_NAME% builder_________________________İ.",
				notAuthorized: "Bu hikayeye erişme yetkiniz yok",
				notAuthorizedBuilder: "ı_You are not authorized to use %TPL_NAME% builder________________İ.",
				noBuilderIE: "Oluşturucu %VERSION% öncesindeki Internet Explorer sürümlerinde desteklenmiyor. %UPGRADE%",
				noViewerIE: "Bu hikaye %VERSION% öncesindeki Internet Explorer sürümlerinde desteklenmiyor. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Tarayıcınızı güncelleyin</a>.",
				mapLoadingFail: "Hata oluştu, harita düzgün şekilde yüklenmedi.",
				signOut: "Oturumu Kapat"
			},
			mobileInfo: {
				legend: "Gösterim",
				description: "Açıklama",
				lblLegendMobileError: "Üzgünüz, gösterim kullanılamıyor. Hikayeyi yeniden yükleyin.",
				lblLegendMobileErrorExplain: "Hikaye yüklendikten sonra cihaz dikey moda döndürülürse gösterim kullanılamaz."
			},
			mobileFooter: {
				swipeInvite: "Öyküde gezinmek için kaydır",
				lblNext: "Sonraki",
				lblEnd: "Öykünün sonuna geldiniz"
			},
			headerFromCommon: {
				storymapsText: "Öykü haritası",
				builderButton: "Düzenle",
				facebookTooltip: "Facebook\'ta Paylaş",
				twitterTooltip: "Twitter\'da Paylaş",
				bitlyTooltip: "Kısa bağlantı edin",
				templateTitle: "Şablon başlığını ayarla",
				templateSubtitle: "Şablon altyazısını ayarla",
				share: "Paylaş",
				checking: "Hikaye içeriğiniz denetleniyor",
				fix: "Hikayenizdeki sorunları düzeltin",
				noerrors: "Sorun bulunmadı",
				tooltipAutoplayDisabled: "ı_This isn't available in autoplay mode____________İ",
				notshared: "ı_Story not shared______İ"
			},
			overviewFromCommon: {
				title: "Genel Bakış Haritası"
			},
			legendFromCommon: {
				title: "Gösterim"
			},
			shareFromCommon: {
				copy: "Kopyala",
				copied: "Kopyalandı",
				open: "Aç",
				embed: "Web sayfasının içine yerleştir",
				embedExplain: "Hikayeyi bir web sayfasının içine yerleştirmek için aşağıdaki HTML kodunu kullanın.",
				size: "Boyut (genişlik/yükseklik):",
				autoplayLabel: "ı_Autoplay mode_____İ",
				autoplayExplain1: "ı_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________İ.",
				autoplayExplain2: "ı_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________İ.",
				linksupdated: "ı_Links updated_____İ!"
			},
			locatorFromCommon: {
				error: "Konum kullanılamıyor"
			}
        }
    })
);