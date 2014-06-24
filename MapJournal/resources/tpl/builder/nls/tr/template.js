define(
	 ({
		builder: {
			layouts: {
				mainStage: "Ana Aşama",
				sideTitle: "Kenar Panosu",
				sideDescr: "Fotoğraflarınızı, videolarınızı ve haritalarınızı açık ve net bir mesajda mükemmel biçimde birleştiren metin yoğun hikaye düzeni.",
				floatTitle: "Kayar Pano",
				floatDescr: "Kartografinizi odağa koyarken, öykü anlamına yardımcı olan saydam kısa formlu bir metin paneline izin veren bir çıktı görünümü."
			},
			common: {
				lblStatus1: "Yayınlananlar",
				lblStatus2: "Taslak",
				lblStatus3: "Gizli"
			},
			settingsLayoutOptions: {
				title: "Düzen seçenekleri",
				cfgLeft: "Sol",
				cfgRight: "Sağ",
				cfgSmall: "Küçük",
				cfgMedium: "Orta",
				cfgLarge: "Büyük",
				socialLinksLabel: "Paylaşma bağlantılarını her bölümün en altında görüntüle",
				socialLinksDescr: "Bu, okuyuculara %TPL_NAME% öğenizin belirli bölümlerine başvuru yapma ve bunları tanıtma olanağı sağlar. Örneğin, bölüm paylaşımlı simge kullanıyorsanız, okuyucular hikayenizin başlangıcı yerine o belirli %TPL_NAME% bölümüne gider. okuyucularınız başlık bölümündeki sosyal medya bağlantısını kullanarak %TPL_NAME% (Başlık Sekmesi) öğenizin tamamını tanıtabilir ve %TPL_NAME% başlangıcına gidilmesini sağlayabilir."
			},
			initPopup: {
				title: "Hoş Geldiniz"
			},
			addEditPopup: {
				disabled: "ı_Add Section is disabled because the maximum number of allowed sections has been reached._İ",
				titleAdd: "Bölüm Ekle",
				titleAddHome: "ı_Add Home Section_İ",
				titleEdit: "Bölüm Düzenle",
				step: "Adım",
				stepMainStageExplain: "ı_Main Stage Content_İ",
				stepPanelExplain: "ı_Content_İ",
				stepMainStageNextTooltip: "Bölüm başlığı gir ve Ana Aşama içeriğini belirle",
				step2NextTooltip: "Bölüm başlığını ve %LAYOUT-TYPE% içeriğini gir",
				stepNextTooltipNext: "sonraki adıma gitmek için",
				stepNextTooltipAdd: "bölüm eklemek için",
				firstAddExplain: "ı_This first section is your Home Section, think of it as the 'cover page' to your story. The title you just defined will be displayed with large fonts._İ",
				firstAddLeanMore: "ı_Learn More_İ",
				titlePlaceholder: "Bölüm başlığı..."
			},
			addEditViewText: {
				editorPlaceholder: "Buraya metin, bağlantı ve küçük grafikler ekleyin.",
				editorActionsTitle: "Ana Aşama Eylemleri",
				editorActionsHelpDescr: "ı_Use these controls to create links that will change the main stage. For example, when the reader clicks a link, you may want to zoom the map to a specific location, display another web map or display an image._İ"
			},
			organizePopup: {
				title: "Düzenle",
				lblHeader: "İçeriğinizi düzenlemek için sürükleyip bırakın.",
				lblColTitle: "Başlık",
				lblColPubDate: "Yayımlanma tarihi",
				lblColStatus: "Durum",
				checkDisplayReverse: "Bölümleri ters sırada göster",
				btnApplyWarning: "ı_Confirm deletion of %NB% section(s)_İ",
				deleteTooltip: "Sil",
				firstSectionExplain: "(Ana sayfa bölümü taşınamaz)"
			},
			exportData: {
				btn: "ı_Export content_İ",
				tooltip: "ı_Use this button to export your content locally. This will open a new page that you can easily copy or save as a PDF.<br />Copying that page content in a word processor is the most effective way to recreate your Journal in case of an accidental deletion._İ"
			},
			help: {
				lblHelp: "Yardım",
				lblAdd: "Bölüm Ekle",
				lblSettings: "Ayarlar",
				lblOrga: "İçeriği düzenle",
				lblEdit: "Düzenlemeler",
				lblPublish: "Paylaş",
				lblTips: "ı_Tips_İ",
				lblMore: "Daha çok mu istiyorsunuz?",
				lblLink: "Story Maps web sitesini ziyaret edin.",
				content1Div1: "Hikayenizi oluştururken çeşitli stiller kullanabilirsiniz. <strong>%LAYOUT_TITLE%</strong> genellikle metninizi, resimlerinizi ve videonuzu saklar, haritalarınız ise <strong>Ana Aşama</strong> içindedir. Bununla birlikte %TPL_NAME%, size resimleri, grafikleri ve videoyu da ana aşama içinde gösterme olanağı tanır.",
				content1Div2: "Bölüm ekleme, hikaye aktarma deneyiminizi gerçek anlamda özelleştirmenize olanak tanır. Okuyucular %LAYOUT_TITLE% metninizde ilerledikçe, Ana Aşama üzerindeki bir harita temel noktalara genişleyerek veya yakınlaşarak ya da yeni haritalara ve resimlere otomatik geçiş yaparak mesajınızı destekler.",
				content2Div1: "%TPL_NAME% görünümünü ayarlayacağınız yer işte burasıdır. Renk şemalarının, düzenlerin ve genişliklerin tamamı burada hassaslaştırılır.",
				content2Div2: "Ayrıca Facebook, Twitter ve Bitly paylaşım bağlantıları ekleyerek, okuyucularınızın %TPL_NAME% adınızı kolayca diğerlerine yaymasını sağlayabilirsiniz.",
				content3Div1: "ı_Your content is organized into sections. You can have as many sections as you like (think of them like mini chapters). The flow of those chapters is important; within Organize you can reorder or delete sections as you wish._İ",
				content4Div1: "Bir hata mı buldunuz ya da malzemenizi mi değiştirmek istiyorsunuz? Hiç sorun değil. İçeriğinizde değişiklik yapmak için uygulama içinde düzenle simgesini arayın. %TPL_NAME% uygulamanızı geliştirirken düzenleme işlevlerini çok sık kullanacaksınız!",
				content5Div1: "%TPL_NAME% adınız %PORTAL% hesabınıza kaydedilir ve varsayılan olarak özeldir. Bunu organizasyonunuzla paylaşmayı seçebilir ya da dünyaya açabilirsiniz. Hatta size sunduğumuz kısaltılmış bir URL ile kolayca paylaşabilirsiniz.",
				content6Div1: "ı_The title of your Home section is also the title of your Journal; think of your the Home section as  the 'cover page' to your story. The Home Section title will remain visible when your readers will navigate the Journal._İ",
				content6Div2: "ı_Your %LAYOUT_TITLE% doesn't have to be just text, consider including photos and videos to help bring the story alive, and to break-up long sections of text!_İ"
			},
			landing: {
				lblAdd: "ı_What do you want to call your Map Journal?_İ",
				phAdd: "ı_Enter your title..._İ",
				lblOR: "Veya",
				lblHelp: "Tanıtım Gezisi"
			},
			firstAddSplash: {
				thisis: "Burası:"
			}
        }
    })

);
