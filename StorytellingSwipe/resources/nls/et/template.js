define(
	 ({
		viewer: {
			loading: {
				step1: "Š_LOADING STORY_____ä",
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
				invalidConfigNoWebmap: "Fataalne viga: vigane konfiguratsioon (ühtegi veebikaarti ei ole määratud)",
				createMap: "Võimetu koostama kaarti",
				invalidApp: "Š_Fatal error: The story cannot be loaded_____________ä",
				initMobile: "Tere tulemast rullimise veebirakendusse. Antud rakendus ei ole seadistatud. Interaktiivne koostaja ei ole mobiilsetes seadmetes toetatud.",
				initMobile2: "Š_The Swipe builder is not supported at this display size__________________ä.",
				noBuilderIE8: "Rullimise interaktiivne koostaja ei ole toetatud Internet Explorer 9 eelse(te)s  versiooni(de)s.",
				noLayerView: "Tere tulemast rullimise veebirakendusse.<br />Antud rakendus ei ole veel seadistatud.",
				appSave: "Š_Error saving the web story_________ä",
				mapSave: "Viga veebikaardi salvestamisel",
				notAuthorized: "Š_You are not authorized to access this story______________ä",
				conflictingProjectionsTitle: "Konfliktsed projektsioonid",
				conflictingProjections: "Rullimisel ei toetata kahe erineva projektsiooniga veebikaardi kasutamist. Avage seaded ja kasutage veebikaarti, mis kasutab samasugust projektsiooni nagu esimene kaart.",
				cpButton: "Sulge",
				unspecifiedConfigOwner: "Š_Authorized owner hasn't been configured_____________ä.",
				invalidConfigOwner: "Š_Story owner is not authorized__________ä."
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
				bitlyTooltip: "Hangi lühike link"
			}
		},
		builder: {
			builder: {
				panelHeader: "Š_STORY CONFIGURATION_______ä",
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
				savingApplication: "Š_Saving story_____ä",
				saveSuccess: "Š_Story saved successfully________ä",
				saveError: "Salvestamine ebaõnnestus, palun proovi uuesti",
				saveError2: "Salvestamine nurjus vigase HTML-märgendi tõttu nimes või kirjelduses",
				saveError3: "Pealkiri ei saa olla tühi",
				signIn: "Palun logige konto kaudu sisse",
				signInTwo: "Š_to save the story______ä."
			},
			header:{
				editMe: "Muuda mind !",
				templateTitle: "Määra mallile pealkiri",
				templateSubtitle: "Määra mallile alampealkiri"
			},
			settings: {
				settingsHeader: "Š_Story settings_____ä",
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
				settingsSaveConfirm: "Š_Some of your changes require that you save and reload the story____________________ä"
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
				settingsLegendExplain: "Š_Select the layout settings_________ä.",
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
				firstSaveTitle: "Š_Story successfully saved________ä",
				firstSaveHeader: "Š_Your story is now saved in ArcGIS Online. Please read the following answers to frequent questions______________________________ä.",
				firstSaveA1: "Kui te ei ole tuttav ArcGIS Online keskkonnaga või soovite otseteed redigeerimise liidesele, siis võite salvestada järgmise lingi: %LINK1%",
				firstSaveA1bis: "Š_The story can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>________________________________ä.",
				firstSaveQ2: "Š_Is my story shared_______ä?",
				firstSaveA2: "Š_Currently your story is not shared. To share it, use the SHARE button______________________ä.",
				shareTitle: "Š_Share your story______ä",
				sharePrivateHeader: "Š_Your story is not shared, would you like to share it_________________ä?",
				sharePrivateBtn1: "Jaga avalikult",
				sharePrivateBtn2: "Jaga oma organisatsiooniga",
				sharePrivateProgress: "Jagamine...",
				sharePrivateErr: "Jagamine ebaõnnestus, proovige uuesti või",
				sharePrivateOk: "Jagamine uuendatud edukalt, laadin...",
				shareStatus1: "Š_Story is not saved______ä",
				shareStatus2: "Š_Story is shared publicly________ä",
				shareStatus3: "Š_Story is shared within the organization_____________ä",
				shareStatus4: "Š_Story is not shared_______ä",
				sharePreviewAsUser: "Eelvaade",
				shareHeader1: "Š_Your story is <strong>publicly accessible</strong>________________ä.",
				shareHeader2: "Š_Your story is accessible by your organization members (login is required)_______________________ä.",
				shareLinkHeader: "Š_Share the story with your audience___________ä",
				shareLinkOpen: "AVA",
				learnMore: "Loe lähemalt",
				shareQ1Opt1: "Š_How do I keep the story private___________ä?",
				shareQ1Opt2: "Š_How do I keep the story private or share it publicly_________________ä?",
				shareA1: "Kasutage nuppu %SHAREIMG% <a href='%LINK1%' target='_blank'>rakenduse üksuse lehel</a>. Kui soovite tühistada ka veebikaardi jagamise, siis kasutage <a href='%LINK2%' target='_blank'>veebikaardi üksuse lehte</a>.",
				shareA1bis: "Kui soovite jagamise eemaldada ka objektiteenuselt, kasutage <a href='%LINK1%' target='_blank'>objektiteenuse sisu lehte</a>.",
				shareQ2: "Š_How do I edit the story later__________ä?",
				shareQ2bis: "Kuidas ma pääsen tagasi loomise liidesesse?",
				shareA2div1: "Š_Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the story item page</a>_________________________________ä.",
				shareA2div2: "Š_As the owner of the story, when you are signed in on ArcGIS.com, the story includes a button to open the interactive builder_______________________________________ä:",
				shareQ3: "Kuhu on andmed majutatud?",
				shareA3: "Š_The story configuration is stored in this web application item</a>_____________________ä.",
				shareWarning: "%WITH% jagamine on keelatud, kuna te pole <a href='%LINK%' target='_blank'>veebikaardi</a> omanik.",
 				shareWarningWith1: "Avalikult",
 				shareWarningWith2: "Avalikult ja organisatsiooniga"
			},
			directCreation: {
				header: "Tere tulemast kasutama Rullimise/pikksilma koostajat",
				mapPickHeader: "Alustamiseks sisestage veebikaardi id või kasutage otsingunuppu veebikaartide sirvimiseks.",
				launchBuilder: "Käivita koostaja",
				chooseWebmapLbl: "Valige veebikaart...",
				explain2: "Rullimise või pikksilma kaardiloo loomiseks kasutage allolevat nuppu kasutatava olemasoleva ArcGIS Online’i veebikaardi valimiseks. Teiseks võimaluseks on veebikaardi ID kleepimine allpool olevale väljale.",
				explain3: "Kui soovite kaardiloos kasutada kahte veebikaarti, siis küsitakse selle valiku valimisel hiljem teist veebikaarti.",
				webmapPlaceholder: "Sisestage kaardi id..."
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
				placeholder: "Sisestage otsingusõnad"
			}
		}
    })
);
