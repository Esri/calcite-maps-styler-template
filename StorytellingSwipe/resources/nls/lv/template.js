define(
	({
		viewer: {
			loading: {
				step1: "IELĀDĒ APLIKĀCIJU",
				step2: "IELĀDĒ DATUS",
				step3: "INICIALIZĒŠANA",
				fail: "Diemžēl neizdevās pārvilkt ielādēšanu",
				loadBuilder: "PĀRSLĒGT UZ BUILDER MODE",
				redirectSignIn: "ķ_REDIRECTING TO SIGN-IN PAGE_ū",
				redirectSignIn2: "ķ_(you will be redirected here after sign-in)_ū",
				failButton: "Atkārtot"
			},
			errors: {
				boxTitle: "Kļūda",
				portalSelf: "Fatāla kļūda: Neizdevās iegūt portāla konfigurāciju",
				invalidConfig: "Fatāla kļūda: konfigurācijas neveiksme",
				invalidConfigNoWebmap: "Fatāla kļūda: nederīga konfigurācija (nav norādīta web karte)",
				createMap: "Nevar izveidot karti",
				invalidApp: "Fatāla kļūda: aplikāciju nevar ielādēt",
				initMobile: "Laipni lūdzam pārvilkšanas web aplikācijā. Aplikācija nav konfigurēta. Interaktīvais būvētājs netiek atbalstīts mobilajās ierīcēs.",
				noBuilderIE8: "Pārvilkšanas interaktīvais veidotājs netiek atbalstīts pārlūkprogrammas Internet Explorer versijās, kas jaunākas par 9. versiju.",
				noLayerView: "Laipni lūdzam Pārvilkt web aplikācijā.<br />Aplikācija vēl nav konfigurēta.",
				appSave: "Kļūda, saglabājot web aplikāciju",
				mapSave: "Kļūda, saglabājot web karti",
				notAuthorized: "Jums nav atļauts piekļūt šai aplikācijai",
				conflictingProjectionsTitle: "Konfliktējošas projekcijas",
				conflictingProjections: "Pārvilkt neatbalsta divu web karšu ar dažādām projekcijām lietošanu. Lūdzu, atveriet iestatījumus un izmantojiet web karti, kas izmanto to pašu projekciju nekā pirmā web karte.",
				cpButton: "Aizvērt"
			},
			mobileView: {
				hideIntro: "PASLĒPT IEVADU",
				navLeft: "Leģenda",
				navMap: "Karte",
				navRight: "Dati"
			},
			desktopView: {
				storymapsText: "Stāstu karte",
				builderButton: "Pārslēgties uz veidotāja režīmu",
				bitlyTooltip: "Iegūt īsceļu uz aplikāciju"
			}
		},
		builder: {
			builder: {
				panelHeader: "APLIKĀCIJAS KONFIGURĀCIJA",
				buttonSave: "SAGLABĀT",
				buttonHelp: "ķ_Help_ū",
				buttonShare: "ķ_Share_ū",
				buttonDiscard: "ATCELT",
				buttonSettings: "Iestatījumi",
				buttonView: "Skata režīms",
				buttonItem: "Atvērt web aplikācijas vienību",
				noPendingChange: "Nav neizpildītu izmaiņu",
				unSavedChangeSingular: "1 nesaglabāta izmaiņa",
				unSavedChangePlural: "nesaglabātas izmaiņas",
				popoverDiscard: "Vai esat pārliecināts, ka vēlaties izmest visas nesaglabātās izmaiņas?",
				yes: "Jā",
				no: "Nē",
				popoverOpenViewExplain: "Atverot skatītāju, jūs zaudēsiet visas nesaglabātās izmaiņas",
				popoverOpenViewOk: "Labi",
				popoverOpenViewCancel: "Atcelt",
				popoverSaveWhenDone: "Neaizmirstiet saglabāt, kad jūs pabeidzat",
				closeWithPendingChange: "Vai esat pārliecināts, ka vēlaties apstiprināt darbību? Jūsu izmaiņas tiks zaudētas.",
				gotIt: "Labi",
				savingApplication: "Saglabā aplikāciju",
				saveSuccess: "Aplikācija saglabāta veiksmīgi",
				saveError: "Saglabāt neizdevās, lūdzu, mēģiniet vēlreiz",
				saveError2: "ķ_Save failed due to an invalid html tag in a name or description_ū",
				saveError3: "ķ_The title can't be empty_ū",
				signIn: "Lūdzu, pierakstieties kontā uz",
				signInTwo: "lai saglabātu aplikāciju."
			},
			header:{
				editMe: "Rediģē mani !",
				templateTitle: "Iestatīt šablona virsrakstu",
				templateSubtitle: "Iestatīt šablona apakšvirsrakstu"
			},
			settings: {
				settingsHeader: "Aplikācijas iestatījumi",
				modalCancel: "Atcelt",
				modalApply: "Lietot"
			},
			settingsColors: {
				settingsTabColor: "Tēma",
				settingsColorExplain: "Izvēlieties lietotņu tēmu vai definējiet savas krāsas.",
				settingsLabelColor: "Galvenes un sānu paneļa fona krāsas"
			},
			settingsHeader: {
				settingsTabLogo: "Galvene",
				settingsLogoExplain: "Pielāgot galvenes logotipu (maksimums  ir 250 x 50piks).",
				settingsLogoEsri: "Esri logotips",
				settingsLogoNone: "Nav logotipa",
				settingsLogoCustom: "Pielāgots logotips",
				settingsLogoCustomPlaceholder: "Attēla URL",
				settingsLogoCustomTargetPlaceholder: "Klikšķis caur saiti",
				settingsLogoSocialExplain: "Pielāgot galvenes labās augšējās saites.",
				settingsLogoSocialText: "Teksts",
				settingsLogoSocialLink: "Saite",
				settingsLogoSocialDisabled: "Administrators ir atspējojis elementu."
			},
			settingsExtent: {
				settingsTabExtent: "Pārklājums",
				settingsExtentExplain: "Izmantojot zemāk esošo interaktīvo karti, iestatiet sākotnējo pārklājumu.",
				settingsExtentExplainBottom: "Jūsu definētais pārklājums modificēs web kartes sākotnējo pārklājumu. Atcerieties ja jūs veicat kartes lasīšanas serijas, šis pārklājums netiks lietots.",
				settingsExtentDateLineError: "ķ_The extent cannot be across the meridian of 180ï¿½ longitude_ū",
				settingsExtentDateLineError2: "Kļūda aprēķinot pārklājumu",
				settingsExtentDrawBtn: "Zīmēt jaunu pārklājumu",
				settingsExtentModifyBtn: "Rediģēt pašreizējo pārklājumu",
				settingsExtentApplyBtn: "Lietot galvenajā kartē",
				settingsExtentUseMainMap: "Lietot galveno kartes pārklājumu"
			}
        },
		swipe: {
			mobileData: {
				noData: "Nav nekādu parādāmu datu",
				noDataExplain: "Pieskarieties kartei, lai izvēlētos elementu un atgriezieties šeit",
				noDataMap: "Nav datu par šo karti",
				noPopup: "Nav atrasti šī elementa uznirstošie logi"
			},
			mobileLegend: {
				noLegend: "Nav leģendas, ko parādīt."
			},
			swipeSidePanel: {
				editTooltip: "Iestatiet sānu paneļa aprakstu",
				editMe: "Rediģē mani !",
				legendTitle: "Leģenda"
			},
			infoWindow: {
				noFeature: "Nav datu, ko parādīt.",
				noFeatureExplain: "Pieskarieties kartei, lai izvēlētos elementu"
			},
			settingsLayout: {
				settingsTabLayout: "Pārvilkšanas stils",
				settingsLayoutExplain: "Izvēlieties pārvilkšanas rīka stilu.",
				settingsLayoutSwipe: "Vertikāla josla",
				settingsLayoutSpyGlass: "Tālskatis",
				settingsLayoutSelected: "Izvēlētais izkārtojums",
				settingsLayoutSelect: "Izvēlieties šo izkārtojumu",
				settingsSaveConfirm: "Lai dažas no jūsu veiktajām izmaiņām stātos spēkā, ir nepieciešams saglabāt un atkārtoti ielādēt aplikāciju."
			},
			settingsDataModel: {
				settingsTabDataModel: "Pārvilkšanas tips",
				settingsDataModelExplainSwipe: "Ko jūs vēlaties lai lietotāji pārvelk?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Izvēlieties slāni vai web karti, kas tiks rādīta tālskatī.",
				settingsDataModelOneMap: "Slānis web kartē",
				settingsDataModel1Explain: "Izvēlieties slāni, ko vēlaties pārvilkt",
				settingsDataModel1Warning: "Ja slānis ir paslēpts augšējos slāņos, pārvilkšanai nebūs nekāda efekta.",
				settingsDataModel1SpyGlassExplain: "Izvēlieties slāni, ko parādīt tālskatī.",
				settingsDataModelTwoMaps: "Divas web kartes",
				settingsDataModelLayerIds: "Web kartes slāņa ID",
				settingsDataModelSelected: "Izvēlieties tipu",
				settingsDataModelWebmapSwipeId1: "Labās puses web kartes ID",
				settingsDataModelWebmapSwipeId2: "Kreisās puses web kartes ID",
				settingsDataModelWebmapGlassId1: "Galvenās web kartes ID",
				settingsDataModelWebmapGlassId2: "Tālskata web kartes ID",
				settingsDataModelSelect: "Izvēlieties šo tipu",
				settingsDataModel2Explain: "Pārvilkt ar citu web karti.",
				settingsDataModel2SpyGlassExplain: "Atklāt citu web karti.",
				settingsDataModel2HelpTitle: "Kā atrast web kartes ID?",
				settingsDataModel2HelpContent: "Kopēt un ielīmēt ciparus aiz zīmes \"=\" vietrādī URL no web kartes",
				switchMaps: "ķ_Switch maps_ū",
				browseWebMaps: "ķ_Browse web maps_ū"
			},
			settingsLegend: {
				settingsTabLegend: "Lietotnes izkārtojums",
				settingsLegendExplain: "Izvēlieties aplikācijas izkārtojuma iestatījumus.",
				settingsLegendEnable: "Iespējot leģendu",
				settingsDescriptionEnable: "Iespējot aprakstu",
				settingsBookmarksEnable: "Iespējot sēriju Pārvilkt",
				settingsPopupDisable: "Iespējot uznirstošo logu",
				settingsLocationSearchEnable: "Iespējot meklētāja meklēšanu",
				settingsGeolocatorEnable: "Iespējot ģeolokatoru",
				settingsLegendHelpContent: "Lai attīrītu leģendas saturu izmantojiet ArcGIS.com web kartes skatītāja satura tabulu (Paslēpt leģendā)",
				settingsSeriesHelpContent: "Pārvilkšanas sērijas ir cilņu navigācijas opcija, kas virzīs skatītāju uz noteiktu pārklājumu un attēlos virsrakstu un apraksta tekstu sānu panelī. Sākotnējās aktivizācijas laikā, web karšu grāmatzīmes tiks importētas un izmantotas, lai aizpildītu seriju joslu. Sēriju opciju atiespējošana izslēgs sēriju joslu, bet sēriju konfigurācija tiks saglabāta izmantošanai nākotnē.", 
				settingsSeriesHelpContent2: "Pārvilkšanas sērijas ļauj izveidot un rediģēt izvēlētus izvietojumus ar pavadošajiem virsrakstiem un tekstiem. Ja jūsu web kartei ir grāmatzīmes, tās tiks attēlotas. Jūs varat atiespējot sērijas, bet konfigurācija tiks saglabāta izmantošanai nākotnē.",
				settingsSeriesHelpLink: "Aopskatiet aplikācijas piemēru ar pārvilkšanas sērijām šeit",
				preview: "Saskarnes priekšskatījums",
				settingsLocateButtonExplain: "Šī funkcionalitāte tiek atbalstīta uz vairuma mobilo ierīču un darbvirsmas pārlūkiem (ieskaitot Internet Explorer 9+).",
				settingsLocateButton: "ķ_Enable a 'Locate' button on supported browsers_ū",
				settingsAddressSearch: "Iespējot adreses meklēšanas rīku"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Uznirstošie logi",
				settingsSwipePopupExplain: "Pielāgot izskatu uznirstošā loga galvenē, lai palīdzētu lietotājam saistīt uznirstošā logu ar kartēm slāņiem.",
				settingsSwipePopupSwipe1: "Kreisās puses karte",
				settingsSwipePopupSwipe2: "Labās puses karte",
				settingsSwipePopupGlass1: "Galvenā karte",
				settingsSwipePopupGlass2: "Tālskata karte",
				settingsSwipePopupTitle: "Galvenes virsraksts",
				settingsSwipePopupColor: "Galvenes krāsa"
			},
			initPopup: {
				initHeader: "ķ_Welcome to the Swipe/Spyglass Builder_ū",
				modalNext: "Nākošais",
				modalPrev: "Iepriekšējs",
				modalApply: "Atveriet lietotni"
			},
			seriesPanel: {
				title: "Virsraksts",
				descr: "Apraksts",
				discard: "Atmest grāmatzīmi",
				saveExtent: "Iesatīt grāmatzīmes pārklājumu",
				discardDisabled: "Jūs nevarat noņemt grāmatzīmi. Pārvilktās sērijas var tikt atiespējotas iestatījumu sadaļā."
			},
			helpPopup: {
				title: "ķ_Help_ū",
				close: "ķ_Close_ū",
				tab1: {
					div1: "ķ_The Swipe/Spyglass template is designed to compare two seperate web maps or two layers of a single web map in an attractive, easy-to-use web application that can be used in any web browser on any device, including smartphones and tablets._ū",
					div2: "ķ_For additional information on the Swipe/Spyglass template, including examples created by users, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visit the Story Maps website</a>. You can also follow us on Twitter at <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>._ū",
					div3: "ķ_We would love to hear from you! Whether you have a question, want to request a new feature, or think you've found a bug, please visit the <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps User Forum</a>._ū"
				}
			},
			share: {
				firstSaveTitle: "ķ_Application successfully saved_ū",
				firstSaveHeader: "ķ_Your Application is now saved in ArcGIS Online. Please read the following answers to frequent questions._ū",
				firstSaveA1: "ķ_If you are not familiar with ArcGIS Online or want a shortcut to access the authoring interface, you can save the following link: %LINK1%_ū",
				firstSaveA1bis: "ķ_The Application can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>._ū",
				firstSaveQ2: "ķ_Is my Application shared?_ū",
				firstSaveA2: "ķ_Currently your Application is not shared. To share it, use the SHARE button._ū",
				shareTitle: "ķ_Share your Application_ū",
				sharePrivateHeader: "ķ_Your Application is not shared, would you like to share it?_ū",
				sharePrivateBtn1: "ķ_Share publicly_ū",
				sharePrivateBtn2: "ķ_Share with my Organization_ū",
				sharePrivateProgress: "ķ_Sharing in progress..._ū",
				sharePrivateErr: "ķ_Sharing failed, try again or_ū",
				sharePrivateOk: "ķ_Sharing updated successfully, loading..._ū",
				shareStatus1: "ķ_Application is not saved_ū",
				shareStatus2: "ķ_Application is shared publicly_ū",
				shareStatus3: "ķ_Application is shared within the organization_ū",
				shareStatus4: "ķ_Application is not shared_ū",
				sharePreviewAsUser: "ķ_Preview_ū",
				shareHeader1: "ķ_Your Application is <strong>publicly accessible</strong>._ū",
				shareHeader2: "ķ_Your Application is accessible by your organization members (login is required)._ū",
				shareLinkHeader: "ķ_Share the Application with your audience_ū",
				shareLinkOpen: "ķ_OPEN_ū",
				learnMore: "ķ_Learn more_ū",
				shareQ1Opt1: "ķ_How do I keep the Application private?_ū",
				shareQ1Opt2: "ķ_How do I keep the Application private or share it publicly?_ū",
				shareA1: "ķ_Use %SHAREIMG% on <a href='%LINK1%' target='_blank'>the application item page</a>. If you also want to unshare the web map, use <a href='%LINK2%' target='_blank'>the web map item page</a>._ū",
				shareA1bis: "ķ_If you also want to unshare the Feature Service, use <a href='%LINK1%' target='_blank'>the Feature Service item page</a>._ū",
				shareQ2: "ķ_How do I edit the Application later?_ū",
				shareQ2bis: "ķ_How do I get back to the authoring interface?_ū",
				shareA2div1: "ķ_Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the application item page</a>._ū",
				shareA2div2: "ķ_As the owner of the application, when you are signed in on ArcGIS.com, the application includes a button to open the interactive builder:_ū",				
				shareQ3: "ķ_Where is the data stored?_ū",
				shareA3: "ķ_The Application configuration is stored in this web application item</a>._ū",
				shareWarning: "ķ_Sharing %WITH% has been disabled because you are not the owner of the <a href='%LINK%' target='_blank'>webmap</a>._ū",
 				shareWarningWith1: "ķ_publicly_ū",
 				shareWarningWith2: "ķ_publicly and with the Organization_ū"
			},
			directCreation: {
				header: "ķ_Welcome to the Swipe/Spyglass Builder_ū",
				mapPickHeader: "ķ_To get started, please input a valid web map id, or use the search button to browse web maps._ū",
				launchBuilder: "ķ_Launch Builder_ū"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "ķ_My Organization_ū",
					onlineLabel: "ķ_ArcGIS Online_ū",
					contentLabel: "ķ_My Content_ū",
					favoritesLabel: "ķ_My Favorites_ū"
				},
				title: "ķ_Select Web Map_ū",
				searchTitle: "ķ_Search_ū",
				ok: "ķ_Ok_ū",
				cancel: "ķ_Cancel_ū",
				placeholder: "ķ_Enter search term_ū"
			}
		}
    })
);