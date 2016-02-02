define(
	 ({
		viewer: {
			loading: {
				step1: "LOO LAADIMINE",
				step2: "ANDMETE LAADIMINE",
				step3: "LÄHTESTAMINE",
				fail: "Vabandust, rullimisvahendi laadimine nurjus",
				loadBuilder: "VAHETA KOOSTAJA TÜÜP",
				redirectSignIn: "SUUNAN ÜMBER SISSELOGIMISE LEHELE",
				redirectSignIn2: "(Teid suunatakse peale sisselogimist siia)",
				failButton: "Proovi uuesti"
			},
			errors: {
				boxTitle: "Esines tõrge",
				portalSelf: "Fataalne viga: portaali seadistuse hankimine nurjus",
				invalidConfig: "Fataalne viga: vigane konfiguratsioon",
				invalidConfigNoWebmap: "Š_Fatal error: Invalid configuration (web map or application identifier not specified in index.html)______________________________ä",
				invalidConfigNoAppDev: "Š_No Web Mapping Application identifier or webmap are specified in URL parameters (?appid= or ?webmap=). In development mode, the appid and webmap configuration in index.html are ignored_________________________________________________________ä.",
				createMap: "Võimetu koostama kaarti",
				invalidApp: "Pöördumatu tõrge. Lugu ei saa laadida",
				initMobile: "Tere tulemast rullimise veebirakendusse. Antud rakendus ei ole seadistatud. Interaktiivne koostaja ei ole mobiilsetes seadmetes toetatud.",
				initMobile2: "Š_The Swipe builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen_____________________________________________________ä.",
				initMobile3: "Š_Please rotate your device to landscape orientation to use the Swipe builder________________________ä.",
				noBuilderIE8: "Rullimise interaktiivne koostaja ei ole toetatud Internet Explorer 9 eelse(te)s  versiooni(de)s.",
				noLayerView: "Tere tulemast rullimise veebirakendusse.<br />Antud rakendus ei ole veel seadistatud.",
				appSave: "Tõrge veebiloo salvestamisel",
				mapSave: "Viga veebikaardi salvestamisel",
				notAuthorized: "Teil puudub õigus sellele loole juurde pääseda",
				notAuthorizedBuilder: "Š_You are not authorized to use Swipe and Spyglass builder__________________ä.",
				conflictingProjectionsTitle: "Konfliktsed projektsioonid",
				conflictingProjections: "Rullimisel ei toetata kahe erineva projektsiooniga veebikaardi kasutamist. Avage seaded ja kasutage veebikaarti, mis kasutab samasugust projektsiooni nagu esimene kaart.",
				cpButton: "Sulge",
				unspecifiedConfigOwner: "Omanikuõigusi pole määratud.",
				invalidConfigOwner: "Loo omanikul puuduvad õigused."
			},
			mobileView: {
				hideIntro: "PEIDA INTRO",
				navLeft: "Legend",
				navMap: "Kaart",
				navRight: "Andmed"
			},
			desktopView: {
				storymapsText: "Kaardilugu",
				builderButton: "Vaheta koostamise režiimile",
				facebookTooltip: "Jaga Facebookis",
				twitterTooltip: "Jaga Twitteris",
				bitlyTooltip: "Hangi lühike link",
				tooltipAutoplayDisabled: "Š_This isn't available in autoplay mode____________ä",
				autoplayLabel: "Š_Autoplay mode_____ä",
				autoplayExplain1: "Š_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________ä.",
				autoplayExplain2: "Š_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________ä."
			}
		},
		builder: {
			builder: {
				panelHeader: "LOO KONFIGUREERIMINE",
				buttonSave: "SALVESTA",
				buttonHelp: "Abi",
				buttonShare: "Jaga",
				buttonDiscard: "TÜHISTA",
				buttonSettings: "Seaded",
				buttonView: "Vaaterežiim",
				buttonItem: "Ava veebirakenduse sisu",
				noPendingChange: "Ühtegi muudatust ei ole ootel",
				unSavedChangeSingular: "1 mittesalvestatud muudatus",
				unSavedChangePlural: "mittesalvestatud muudatust",
				popoverDiscard: "Olete kindel, et soovite loobuda salvestamata muudatustest?",
				yes: "Jah",
				no: "Ei",
				popoverOpenViewExplain: "Kui avate sirvija, siis kaotate kõik salvestamata muudatused",
				popoverOpenViewOk: "Ok",
				popoverOpenViewCancel: "Tühista",
				popoverSaveWhenDone: "Ärge unustage salvestada, kui olete lõpetanud",
				closeWithPendingChange: "Olete kindel, et soovite tegevuse kinnitada? Teie tehtud muudatused võivad kaduma minna.",
				gotIt: "Ok",
				savingApplication: "Loo salvestamine",
				saveSuccess: "Š_Story saved____ä",
				saveError: "Salvestamine ebaõnnestus, palun proovi uuesti",
				saveError2: "Salvestamine nurjus vigase HTML-märgendi tõttu nimes või kirjelduses",
				saveError3: "Pealkiri ei saa olla tühi",
				signIn: "Palun logige konto kaudu sisse",
				signInTwo: "loo salvestamiseks."
			},
			header:{
				editMe: "Muuda mind !",
				templateTitle: "Määra mallile pealkiri",
				templateSubtitle: "Määra mallile alampealkiri"
			},
			settings: {
				settingsHeader: "Loo sätted",
				modalCancel: "Tühista",
				modalApply: "Kehtesta"
			},
			settingsColors: {
				settingsTabColor: "Teema",
				settingsColorExplain: "Vali apiga seotud teema või määra  värvid.",
				settingsLabelColor: "Päise ja küljepaneeli taustvärvid"
			},
			settingsHeader: {
				settingsTabLogo: "Päis",
				settingsLogoExplain: "Kohanda päise logo (maksimum on 250 x 50px).",
				settingsLogoEsri: "Esri logo",
				settingsLogoNone: "Logo puudub",
				settingsLogoCustom: "Valikuline logo",
				settingsLogoCustomPlaceholder: "Pildi URL",
				settingsLogoCustomTargetPlaceholder: "Kliki läbi lingi",
				settingsLogoSocialExplain: "Kohanda päist ülemise paremal pool asuva lingi kaudu.",
				settingsLogoSocialText: "Tekst",
				settingsLogoSocialLink: "Link",
				settingsLogoSocialDisabled: "See funktsioon on administraatori poolt välja lülitatud"
			},
			settingsExtent: {
				settingsTabExtent: "Kuvaulatus",
				settingsExtentExplain: "Määra sisemine ulatus läbi alloleva interaktiivse kaardi.",
				settingsExtentExplainBottom: "Määratud ulatus muudab veebikaardi sisemist ulatust. Pange tähele, et kui teete rullimise seeriaid, siis ulatust ei kasutata.",
				settingsExtentDateLineError: "Ulatus ei saa ületada 180ï¿½ pikkuskraadi",
				settingsExtentDateLineError2: "Ulatuse arvutamise viga",
				settingsExtentDrawBtn: "Joonista uus ulatus",
				settingsExtentModifyBtn: "Muuda praegust ulatust",
				settingsExtentApplyBtn: "Kehtesta peamisele kaardile",
				settingsExtentUseMainMap: "Kasuta peamist kaardiulatust"
			}
        },
		swipe: {
			mobileData: {
				noData: "Pole andmeid, mida kuvada!",
				noDataExplain: "Puuduta kaarti, et valida objekt ning tule siia tagasi",
				noDataMap: "Sellel kaardil pole andmeid",
				noPopup: "Selle objekti kohta ei leitud hüpikakent"
			},
			mobileLegend: {
				noLegend: "Kuvamiseks puudub legend."
			},
			swipeSidePanel: {
				editTooltip: "Määra küljepaneeli kirjeldus",
				editMe: "Muuda mind !",
				legendTitle: "Legend"
			},
			infoWindow: {
				noFeature: "Pole andmeid, mida kuvada",
				noFeatureExplain: "Objekti valimiseks puudutage kaarti"
			},
			settingsLayout: {
				settingsTabLayout: "Rullimise stiil",
				settingsLayoutExplain: "Vali rullimisvahendi stiil.",
				settingsLayoutSwipe: "Vertikaalne riba",
				settingsLayoutSpyGlass: "Pikksilm",
				settingsLayoutSelected: "Valitud paigutus",
				settingsLayoutSelect: "Vali see paigutus",
				settingsSaveConfirm: "Mõned teie tehtud muudatused eeldavad, et salvestate loo ning avate selle uuesti"
			},
			settingsDataModel: {
				settingsTabDataModel: "Rullitav tüüp",
				settingsDataModelExplainSwipe: "Mida kasutajad peaksid rullima?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Vali kiht või veebikaart, mis ilmub pikksilma.",
				settingsDataModelOneMap: "Kiht veebikaardil",
				settingsDataModel1Explain: "Vali kiht rullimiseks",
				settingsDataModel1Warning: "Rullimine ei mõju, kui vastav kiht on peidetud ülemiste kihtide alla.",
				settingsDataModel1SpyGlassExplain: "Vali kiht, mis ilmub pikksilma.",
				settingsDataModelTwoMaps: "Kaks veebikaarti",
				settingsDataModelLayerIds: "Veebikaardi kihi ID-d",
				settingsDataModelSelected: "Valitud tüüp",
				settingsDataModelWebmapSwipeId1: "Parempoolse veebikaardi ID",
				settingsDataModelWebmapSwipeId2: "Vasakpoolse veebikaardi ID",
				settingsDataModelWebmapGlassId1: "Peamise veebikaardi ID",
				settingsDataModelWebmapGlassId2: "Pikksilma veebikaardi ID",
				settingsDataModelSelect: "Vali see tüüp",
				settingsDataModel2Explain: "Rulli mõne teise veebikaardiga.",
				settingsDataModel2SpyGlassExplain: "Ilmu teises veebikaardis.",
				settingsDataModel2HelpTitle: "Kuidas leida veebikaardi ID-d?",
				settingsDataModel2HelpContent: "Kopeeri ja kleebi numbrid pärast \'=\' märki veebikaardi URL sisust",
				switchMaps: "Vaheta kaarti",
				browseWebMaps: "Sirvi veebikaarte"
			},
			settingsLegend: {
				settingsTabLegend: "Rakenduse paigutus",
				settingsLegendExplain: "Valige paigutuse sätted.",
				settingsLegendEnable: "Lülita legend sisse",
				settingsDescriptionEnable: "Lülita kirjeldus sisse",
				settingsBookmarksEnable: "Võimalda rullimise seeriad",
				settingsPopupDisable: "Š_Enable pop-up_____ä",
				settingsLocationSearchEnable: "Luba asukoha otsing",
				settingsGeolocatorEnable: "Luba geolokaator",
				settingsLegendHelpContent: "Š_To refine the legend content, use the ArcGIS web map viewer table of contents (Hide in Legend)_____________________________ä",
				settingsSeriesHelpContent: "Rullimiste seeria on vahelehtedega navigeerimise valik, mis viib vaataja konkreetsele kuvaulatusele ja kuvab pealkirja ning kirjeldust külje paneelil. Algselt aktiveerimiseks imporditakse veebikaardi järjehoidjad ja kasutatakse seeriate lehe eelgenereerimiseks. Seeriate valiku keelamine lülitab välja ka seeriate riba, aga seeriate konfiguratsioon säilitatakse tulevikus kasutamiseks.",
				settingsSeriesHelpContent2: "Vahetamise seeriad lubab teil luua ja muuta asukohtade selektsiooni koos vastavate pealkirjade ja tekstidega. Kui teie veebikaartidel on järjehoidjad, siis kuvatakse neid. Võite keelata seeriad, kuid konfiguratsioon säilitatakse võimalikuks kasutuseks tulevikuks.",
				settingsSeriesHelpLink: "Vaata vahetatavate seeriatega rakenduse näidet siit",
				preview: "UI vaade",
				settingsLocateButtonExplain: "Funktsionaalsus on toetatud enamustel nutiseadmetel ja töökoha brauserites (k.a Internet Explorer 9+).",
				settingsLocateButton: "Luba asukoha määramise nupp toetatud brauserites",
				settingsAddressSearch: "Luba aadressi otsimise tööriist"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Hüpikaken",
				settingsSwipePopupExplain: "Kohanda hüpikakende päise välimust, et hõlbustada kasutajal seostada hüpikaknaid kaartide kihtidega.",
				settingsSwipePopupSwipe1: "Vasakpoolne kaart",
				settingsSwipePopupSwipe2: "Parempoolne kaart",
				settingsSwipePopupGlass1: "Peamine kaart",
				settingsSwipePopupGlass2: "Pikksilma kaart",
				settingsSwipePopupTitle: "Päise pealkiri",
				settingsSwipePopupColor: "Päise värv"
			},
			initPopup: {
				initHeader: "Tere tulemast koostajasse Võrdlus/pikksilm",
				modalNext: "Järgmine",
				modalPrev: "Eelmine",
				modalApply: "Ava app"
			},
			seriesPanel: {
				title: "Pealkiri",
				descr: "Kirjeldus",
				discard: "Loobu järjehoidjast",
				saveExtent: "Määra järjehoidja ulatus",
				discardDisabled: "Te ei saa seda järjehoidjat eemaldada. Vahetamise seeriaid saab keelata seadetest."
			},
			helpPopup: {
				title: "Abi",
				close: "Sulge",
				tab1: {
					div1: "Mall Rullimine/pikksilm on loodud kahe erineva veebikaardi või ühe veebikaardi kahe kihi võrdlemiseks meeldivas ja lihtsasti kasutatavas veebirakenduses, mida saab kasutada mis tahes veebibrauseris ja seadmes, k.a nutitelefonides ja tahvelarvutites.",
					div2: "Lisateabe saamiseks malli Rullimine/pikksilm kohta (sh kasutajate loodud näidised) <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> külastage kaardilugude veebisaiti</a>. Saate jälgida ka meie Twitteri kontot <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Ootame tagasisidet!  Kui teil on küsimusi, soovite küsida uue funktsiooni kohta või arvate, et olete leidnud vea, siis külastage meid <a href='http://links.esri.com/storymaps/forum' target='_blank'>Kaardilugude kasutajate foorumis</a>."
				}
			},
			share: {
				firstSaveTitle: "Š_Story saved____ä",
				manageStory: "Š_Manage your story______ä",
				manageStoryA1: "Š_Tip: You can use %LINK1% to check your story for errors and change how its components are shared. My Stories also helps you make your story look good when it is shared on social networks. You can learn about other useful features of My Stories in these %LINK2%_______________________________________________________________________________ä.",
				manageStoryA1V1: "Š_My Stories____ä",
				manageStoryA1V2: "Š_blog posts____ä",
				shareTitle: "Jagage oma lugu",
				sharePrivateHeader: "Teie lugu ei ole jagatud. Kas soovite seda jagada?",
				sharePrivateBtn1: "Jaga avalikult",
				sharePrivateBtn2: "Jaga oma organisatsiooniga",
				sharePrivateProgress: "Jagamine...",
				sharePrivateErr: "Jagamine ebaõnnestus, proovige uuesti või",
				sharePrivateOk: "Š_Sharing updated, loading_________ä...",
				shareStatus1: "Lugu ei ole salvestatud",
				shareStatus2: "Lugu on jagatud avalikult",
				shareStatus3: "Lugu on jagatud organisatsiooni sees",
				shareStatus4: "Lugu ei ole jagatud",
				sharePreviewAsUser: "Eelvaade",
				shareHeader1: "Teie lugu on <strong>avalikult kättesaadav</strong>.",
				shareHeader2: "Teie lugu on kättesaadav teie organisatsiooni liikmetele (sisselogimine nõutud).",
				shareLinkHeader: "Š_Share your story______ä",
				shareLinkOpen: "AVA",
				learnMore: "Loe lähemalt",
				shareA1: "Kasutage nuppu %SHAREIMG% <a href='%LINK1%' target='_blank'>rakenduse üksuse lehel</a>. Kui soovite tühistada ka veebikaardi jagamise, siis kasutage <a href='%LINK2%' target='_blank'>veebikaardi üksuse lehte</a>.",
				shareWarning: "%WITH% jagamine on keelatud, kuna te pole <a href='%LINK%' target='_blank'>veebikaardi</a> omanik.",
				shareWarningWith1: "Š_publicly___ä",
				shareWarningWith2: "Š_publicly and with the Organization___________ä"
			},
			directCreation: {
				header: "Tere tulemast kasutama Rullimise/pikksilma koostajat",
				mapPickHeader: "Alustamiseks sisestage veebikaardi id või kasutage otsingunuppu veebikaartide sirvimiseks.",
				launchBuilder: "Käivita koostaja",
				chooseWebmapLbl: "Valige veebikaart...",
				explain2: "Š_To create a Swipe or Spyglass story map, use the button below to choose the existing web map you want to use. Alternatively, you can paste the ID of the web map into the field below________________________________________________________ä.",
				explain3: "Kui soovite kaardiloos kasutada kahte veebikaarti, siis küsitakse selle valiku valimisel hiljem teist veebikaarti.",
				webmapPlaceholder: "Sisestage kaardi id..."
			},
			saveErrorSocial: {
				title: "Š_Social media sharing update_________ä",
				panel1: "Š_Your storyâ€™s appearance on social media has been improved, but your ArcGIS web application item title is not the same as your story title___________________________________________ä.",
				panel1tooltip: "Š_By defining a title, summary and thumbnail image, your story will look like this_________________________ä:",
				panel2:	"Š_Which title would you like to use on social media________________ä:",
				panel2q1: "Š_Story title (recommended)_________ä",
				panel2q1tooltip: "Š_By choosing this option, your item title will be modified to match your story title and further changes in the builder will be synchronized___________________________________________ä.",
				panel2q2: "Š_Item title____ä",
				panel3: "Š_To further improve how your story looks on social media use ${MYSTORIES} to add a summary and a thumbnail image___________________________________ä.",
				panel4: "Š_Do not warn me again for this story____________ä",
				mystories: "Š_My Stories____ä",
				btnSave: "Š_Save__ä"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Minu organisatsioon",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Minu sisu",
					favoritesLabel: "Minu lemmikud"
				},
				title: "Š_Select Web Map_____ä",
				searchTitle: "Otsi",
				ok: "Ok",
				cancel: "Tühista",
				placeholder: "Sisestage otsingusõnad"
			}
		}
    })
);
