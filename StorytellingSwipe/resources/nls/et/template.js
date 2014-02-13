define(
	({
		viewer: {
			loading: {
				step1: "RAKENDUSE LAADIMINE",
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
				portalSelf: "Totaalne viga: Portaali seadistuse hankimine nurjus",
				invalidConfig: "Totaalne viga: vigane konfiguratsioon",
				invalidConfigNoWebmap: "Totaalne viga: Vigane konfiguratsioon (ühtegi veebikaarti ei ole määratud)",
				createMap: "Võimetu koostama kaarti",
				invalidApp: "Totaalne viga: Rakendust ei saa laadida",
				initMobile: "Tere tulemast rullimise veebirakendusse. Antud rakendus ei ole seadistatud. Interaktiivne koostaja ei ole mobiilsetes seadmetes toetatud.",
				noBuilderIE8: "Rullimise interaktiivne koostaja ei ole toetatud Internet Explorer 9 eelse(te)s  versiooni(de)s.",
				noLayerView: "Tere tulemast rullimise veebirakendusse.<br />Antud rakendus ei ole veel seadistatud.",
				appSave: "Viga veebirakenduse salvestamisel",
				mapSave: "Viga veebikaardi salvestamisel",
				notAuthorized: "Te ei ole sellele rakendusele ligipääsuks autoriseeritud",
				conflictingProjectionsTitle: "Konfliktsed projektsioonid",
				conflictingProjections: "Rullimine ei ole toetatud kahe erineva projektsiooniga veebikaardil. Palun avage seaded ja kasutage veebikaarti, mis kasutab esimese kaardiga samasugust projektsiooni.",
				cpButton: "Sulge"
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
				bitlyTooltip: "Tekita kiirlink rakendusele"
			}
		},
		builder: {
			builder: {
				panelHeader: "RAKENDUSE KONFIGURATSIOON",
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
				savingApplication: "Salvestan rakenduse",
				saveSuccess: "Rakenduse salvestamine õnnestus",
				saveError: "Salvestamine ebaõnnestus, palun proovi uuesti",
				saveError2: "Š_Save failed due to an invalid html tag in a name or description_ä",
				saveError3: "Š_The title can't be empty_ä",
				signIn: "Palun logige konto kaudu sisse",
				signInTwo: ", et salvestada rakendus."
			},
			header:{
				editMe: "Muuda mind !",
				templateTitle: "Määra mallile pealkiri",
				templateSubtitle: "Määra mallile alampealkiri"
			},
			settings: {
				settingsHeader: "Rakenduse seaded",
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
				settingsLogoSocialDisabled: "See funktsionaalsus on administraatori poolt välja lülitatud"
			},
			settingsExtent: {
				settingsTabExtent: "Kuvaulatus",
				settingsExtentExplain: "Määra sisemine ulatus läbi alloleva interaktiivse kaardi.",
				settingsExtentExplainBottom: "Määratud ulatus muudab veebikaardi sisemist ulatust. Pange tähele, et kui teete rullimise seeriaid, siis ulatust ei kasutata.",
				settingsExtentDateLineError: "Ulatus ei saa ületada 180ï¿½ pikkuskraadi",
				settingsExtentDateLineError2: "Viga ulatuse arvutamisel",
				settingsExtentDrawBtn: "Joonista uus ulatus",
				settingsExtentModifyBtn: "Muuda praegust ulatust",
				settingsExtentApplyBtn: "Kehtesta peamisele kaardile",
				settingsExtentUseMainMap: "Kasuta peamist kaardi ulatust"
			}
        },
		swipe: {
			mobileData: {
				noData: "Pole andmeid, mida kuvada!",
				noDataExplain: "Koputa kaardile, et valida objekt ning tule siia tagasi",
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
				noFeatureExplain: "Koputa kaardile, et valida objekt"
			},
			settingsLayout: {
				settingsTabLayout: "Rullimise stiil",
				settingsLayoutExplain: "Vali rullimisvahendi stiil.",
				settingsLayoutSwipe: "Vertikaalne riba",
				settingsLayoutSpyGlass: "Pikksilm",
				settingsLayoutSelected: "Valitud paigutus",
				settingsLayoutSelect: "Vali see paigutus",
				settingsSaveConfirm: "Mõned muudatustest eeldavad, et salvestad tööseisu ning avad rakenduse uuesti"
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
				settingsLegendExplain: "Vali rakenduse paigutuse seaded.",
				settingsLegendEnable: "Lülita legend sisse",
				settingsDescriptionEnable: "Lülita kirjeldus sisse",
				settingsBookmarksEnable: "Võimalda rullimise seeriad",
				settingsPopupDisable: "Luba hüpikaken",
				settingsLocationSearchEnable: "Luba asukoha otsing",
				settingsGeolocatorEnable: "Luba geolokaator",
				settingsLegendHelpContent: "Legendi sisu täpsustamiseks kasuta ArcGIS.com veebikaardi akna kihtide loendit (peidetud legendi)",
				settingsSeriesHelpContent: "Rullimiste seeria on vahelehtedega navigeerimise valik, mis viib vaataja konkreetsele kuvaulatusele ja kuvab pealkirja ning kirjeldust külje paneelil. Algselt aktiveerimiseks imporditakse veebikaardi järjehoidjad ja kasutatakse seeriate lehe eelgenereerimiseks. Seeriate valiku keelamine lülitab välja ka seeriate riba, aga seeriate konfiguratsioon säilitatakse tulevikus kasutamiseks.", 
				settingsSeriesHelpContent2: "Vahetamise seeriad lubab teil luua ja muuta asukohtade selektsiooni koos vastavate pealkirjade ja tekstidega. Kui teie veebikaartidel on järjehoidjad, siis kuvatakse neid. Võite keelata seeriad, kuid konfiguratsioon säilitatakse võimalikuks kasutuseks tulevikuks.",
				settingsSeriesHelpLink: "Vaata vahetatavate seeriatega rakenduse näidet siit",
				preview: "UI vaade",
				settingsLocateButtonExplain: "Funktsionaalsus on toetatud enamustel nutiseadmetel ja töökoha brauserites (k.a Internet Explorer 9+).",
				settingsLocateButton: "Luba positsioneerimise nupp toetatud brauserites",
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
				initHeader: "Š_Welcome to the Swipe/Spyglass Builder_ä",
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
					div1: "Võrdlev/pikksilm mall on loodud kahe erineva veebikaardi või kihi võrdlemiseks ühel veebikaardil atraktiivselt ja lihtsasti kasutatava rakendusena, mida saab vaadata igas veebibrauseris ja seadmes, k.a nutitelefonitel ja tahvelarvutitel.",
					div2: "Š_For additional information on the Swipe/Spyglass template, including examples created by users, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visit the Story Maps website</a>. You can also follow us on Twitter at <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>._ä",
					div3: "Ootame tagasisidet!  Kui teil on küsimusi, soovite küsida uusi võimalusi või arvate, et olete leidnud vea, siis palun külastage meid <a href='http://links.esri.com/storymaps/forum' target='_blank'>Kaardilugide kasutajate foorumis</a>."
				}
			},
			share: {
				firstSaveTitle: "Rakendus edukalt salvestatud",
				firstSaveHeader: "Teie rakendus on nüüd salvestatud ArcGIS Online keskkonda. Palun lugege järgnevaid sagedasemaid küsimusi.",
				firstSaveA1: "Kui te ei ole tuttav ArcGIS Online keskkonnaga või soovite otseteed redigeerimise liidesele, siis võite salvestada järgmise lingi: %LINK1%",
				firstSaveA1bis: "Rakenduse leiab samuti oma<a href='%LINK2%' target='_blank'>ArcGIS Online sisu kaustast</a>.",
				firstSaveQ2: "Kas mu rakendus on jagatud?",
				firstSaveA2: "Hetkel ei ole sinu rakendus jagatud. Selle jagamiseks kasuta JAGA nuppu.",
				shareTitle: "Jaga oma rakendust",
				sharePrivateHeader: "Sinu rakendus ei ole jagatud, kas sa soovid seda jagada?",
				sharePrivateBtn1: "Jaga avalikult",
				sharePrivateBtn2: "Jaga oma organisatsiooniga",
				sharePrivateProgress: "Jagamine töös...",
				sharePrivateErr: "Jagamine ebaõnnestus, proovi uuesti või",
				sharePrivateOk: "Jagamine uuendatud edukalt, laen...",
				shareStatus1: "Rakendus ei ole salvestatud",
				shareStatus2: "Rakendus on jagatud avalikult",
				shareStatus3: "Rakendus on jagatud organisatsiooniga",
				shareStatus4: "Rakendus ei ole jagatud",
				sharePreviewAsUser: "Eelvaade",
				shareHeader1: "Sinu rakendus on <strong>avalikult kättesaadav</strong>.",
				shareHeader2: "Sinu rakendus on kättesaadav organisatsiooni liikmetele (sisselogimine nõutud).",
				shareLinkHeader: "Jaga rakendust oma inimestega",
				shareLinkOpen: "AVA",
				learnMore: "Loe lähemalt",
				shareQ1Opt1: "Kuidas saan hoida rakenduse privaatsena?",
				shareQ1Opt2: "Kuidas saan hoida rakenduse privaatsena või jagada seda avalikult?",
				shareA1: "Kasuta %SHAREIMG% <a href='%LINK1%' target='_blank'>rakenduse sisu lehel</a>.Kui soovid samuti eemaldada veebikaardi jagamise, siis kasuta <a href='%LINK2%' target='_blank'>veebikaardi sisu lehte</a>.",
				shareA1bis: "Kui soovite jagamise eemaldada ka objektiteenuselt, kasutage <a href='%LINK1%' target='_blank'>objektiteenuse sisu lehte</a>.",
				shareQ2: "Kuidas saab rakendust hiljem muuta?",
				shareQ2bis: "Kuidas ma pääsen tagasi loomise liidesesse?",
				shareA2div1: "Salvestage ja taaskasutage järgnevat linki %LINK1% või kasutage <a href='%LINK2%' target='_blank'>rakenduse sisu lehte</a>.",
				shareA2div2: "Rakenduse omanikuna, ArcGIS.com sisselogituna, sisaldab rakendus nuppu interaktiivse looja avamiseks.",				
				shareQ3: "Kus on andmed majutatud?",
				shareA3: "Rakenduse konfiguratsioon on salvestatud selles veebirakenduse sisus</a>.",
				shareWarning: "Š_Sharing %WITH% has been disabled because you are not the owner of the <a href='%LINK%' target='_blank'>webmap</a>._ä",
 				shareWarningWith1: "Š_publicly_ä",
 				shareWarningWith2: "Š_publicly and with the Organization_ä"
			},
			directCreation: {
				header: "Teretulemast Võrdlus/pikksilm loojasse",
				mapPickHeader: "Alustamiseks palun sisesta veebikaaardi id või kasuta otsingu nuppu veebikaartide sirvimiseks.",
				launchBuilder: "Käivita Looja",
				chooseWebmapLbl: "Š_Choose web map..._ä",
				explain2: "Š_To create a Swipe or Spyglass story map, use the button below to choose the existing ArcGIS Online web map you want to use. Alternatively, you can paste the ID of the web map into the field below._ä",
				explain3: "Š_If you want to use two web maps in your story map, you'll be prompted for the second web map later when you choose that option._ä",
				webmapPlaceholder: "Š_Enter a web map id..._ä"
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
				title: "Vali veebikaart",
				searchTitle: "Otsi",
				ok: "Ok",
				cancel: "Tühista",
				placeholder: "Sisesta otsingu sõnad"
			}
		}
    })
);