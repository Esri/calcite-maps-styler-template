define(
	 ({
		viewer: {
			loading: {
				step1: "ł_LOADING STORY_____ą",
				step2: "WCZYTYWANIE DANYCH",
				step3: "INICJOWANIE",
				fail: "Przepraszamy, wczytywanie narzędzia zwijania nie powiodło się",
				loadBuilder: "PRZEŁĄCZANIE DO TRYBU KREATORA",
				redirectSignIn: "PRZEKIEROWANIE DO STRONY LOGOWANIA",
				redirectSignIn2: "(tutaj nastąpi przekierowanie po zalogowaniu)",
				failButton: "Ponów próbę"
			},
			errors: {
				boxTitle: "Wystąpił błąd",
				portalSelf: "Błąd krytyczny: Nie można pobrać konfiguracji portalu",
				invalidConfig: "Błąd krytyczny: Nieprawidłowa konfiguracja",
				invalidConfigNoWebmap: "Błąd krytyczny: Nieprawidłowa konfiguracja (brak zdefiniowanej mapy internetowej)",
				createMap: "Nie można utworzyć mapy",
				invalidApp: "ł_Fatal error: The story cannot be loaded_____________ą",
				initMobile: "Witamy w internetowej aplikacji swipe (z funkcją zwijania). Aplikacja nie została skonfigurowana. Interaktywny kreator nie jest obsługiwany na urządzeniach przenośnych.",
				initMobile2: "ł_The Swipe builder is not supported at this display size__________________ą.",
				noBuilderIE8: "Interaktywny kreator narzędzia zwijania nie jest obsługiwany przez przeglądarkę Internet Explorer w wersji starszej niż 9.",
				noLayerView: "Witamy w internetowej aplikacji swipe (z funkcją zwijania).<br />Aplikacja nie została jeszcze skonfigurowana.",
				appSave: "ł_Error saving the web story_________ą",
				mapSave: "Błąd podczas zapisywania mapy internetowej",
				notAuthorized: "ł_You are not authorized to access this story______________ą",
				conflictingProjectionsTitle: "Konflikt odwzorowań",
				conflictingProjections: "Narzędzie zwijania nie obsługuje dwóch map internetowych o różnych odwzorowaniach. Przejdź do ustawień i wybierz mapę internetową o tym samym odwzorowaniu, co pierwsza użyta mapa.",
				cpButton: "Zamknij",
				unspecifiedConfigOwner: "ł_Authorized owner hasn't been configured_____________ą.",
				invalidConfigOwner: "ł_Story owner is not authorized__________ą."
			},
			mobileView: {
				hideIntro: "UKRYJ WPROWADZENIE",
				navLeft: "Legenda",
				navMap: "Mapa",
				navRight: "Dane"
			},
			desktopView: {
				storymapsText: "Story Map",
				builderButton: "Przełącz do trybu kreatora",
				facebookTooltip: "Udostępnij na Facebooku",
				twitterTooltip: "Udostępnij na Twitterze",
				bitlyTooltip: "Utwórz skrócone łącze"
			}
		},
		builder: {
			builder: {
				panelHeader: "ł_STORY CONFIGURATION_______ą",
				buttonSave: "ZAPISZ",
				buttonHelp: "Pomoc",
				buttonShare: "Udostępnij",
				buttonDiscard: "ANULUJ",
				buttonSettings: "Ustawienia",
				buttonView: "Tryb wyświetlania",
				buttonItem: "Otwórz element aplikacji internetowej",
				noPendingChange: "Brak oczekujących zmian",
				unSavedChangeSingular: "1 niezapisana zmiana",
				unSavedChangePlural: "niezapisane zmiany",
				popoverDiscard: "Na pewno chcesz odrzucić wszystkie niezapisane zmiany?",
				yes: "Tak",
				no: "Nie",
				popoverOpenViewExplain: "Otwarcie przeglądarki spowoduje utratę niezapisanych zmian",
				popoverOpenViewOk: "OK",
				popoverOpenViewCancel: "Anuluj",
				popoverSaveWhenDone: "Nie zapomnij zapisać po zakończeniu pracy",
				closeWithPendingChange: "Na pewno chcesz zatwierdzić operację? Twoje zmiany zostaną utracone.",
				gotIt: "OK",
				savingApplication: "ł_Saving story_____ą",
				saveSuccess: "ł_Story saved successfully________ą",
				saveError: "Zapisywanie nie powiodło się, spróbuj ponownie",
				saveError2: "Próba zapisania nie powiodła się - błędny znacznik HTML w nazwie lub opisie",
				saveError3: "Tytuł nie może być pusty",
				signIn: "Zaloguj się na konto,",
				signInTwo: "ł_to save the story______ą."
			},
			header:{
				editMe: "Edytuj!",
				templateTitle: "Skonfiguruj tytuł szablonu",
				templateSubtitle: "Skonfiguruj podtytuł szablonu"
			},
			settings: {
				settingsHeader: "ł_Story settings_____ą",
				modalCancel: "Anuluj",
				modalApply: "Zastosuj"
			},
			settingsColors: {
				settingsTabColor: "Motyw",
				settingsColorExplain: "Wybierz motyw aplikacji lub zdefiniuj własną kolorystykę.",
				settingsLabelColor: "Kolory nagłówka i tła panelu bocznego"
			},
			settingsHeader: {
				settingsTabLogo: "Nagłówek",
				settingsLogoExplain: "Dostosuj logo w nagłówku (maksymalny rozmiar to 250 x 50 pikseli).",
				settingsLogoEsri: "Logo firmy Esri",
				settingsLogoNone: "Brak logo",
				settingsLogoCustom: "Logo niestandardowe",
				settingsLogoCustomPlaceholder: "Adres URL obrazu",
				settingsLogoCustomTargetPlaceholder: "łącze przekierowujące do innej strony",
				settingsLogoSocialExplain: "Dostosuj łącze nagłówka wyświetlane u góry po prawej.",
				settingsLogoSocialText: "Tekst",
				settingsLogoSocialLink: "Łącze",
				settingsLogoSocialDisabled: "Opcja ta została wyłączona przez Administratora"
			},
			settingsExtent: {
				settingsTabExtent: "Zasięg",
				settingsExtentExplain: "Skonfiguruj początkowy zasięg za pomocą poniższej mapy interaktywnej.",
				settingsExtentExplainBottom: "Zdefiniowany zasięg zostanie użyty do modyfikacji początkowego zasięgu mapy internetowej. Należy pamiętać, że zasięg ten nie będzie używany podczas korzystania z serii zwijania.",
				settingsExtentDateLineError: "Zasięg nie może przebiegać przez południk 180ï¿½",
				settingsExtentDateLineError2: "Błąd w obliczaniu zasięgu",
				settingsExtentDrawBtn: "Wyświetl nowy zasięg",
				settingsExtentModifyBtn: "Zmień bieżący zasięg",
				settingsExtentApplyBtn: "Zastosuj do mapy głównej",
				settingsExtentUseMainMap: "Użyj głównego zasięgu mapy"
			}
        },
		swipe: {
			mobileData: {
				noData: "Brak danych do wyświetlenia!",
				noDataExplain: "Dotknij mapę, aby wybrać obiekt i powrócić tutaj",
				noDataMap: "Brak danych dla tej mapy",
				noPopup: "Nie znaleziono okna podręcznego dla tego obiektu"
			},
			mobileLegend: {
				noLegend: "Brak legendy do wyświetlenia."
			},
			swipeSidePanel: {
				editTooltip: "Skonfiguruj opis panelu bocznego",
				editMe: "Edytuj!",
				legendTitle: "Legenda"
			},
			infoWindow: {
				noFeature: "Brak danych do wyświetlenia",
				noFeatureExplain: "Dotknij mapę, aby wybrać obiekt"
			},
			settingsLayout: {
				settingsTabLayout: "Styl zwijania",
				settingsLayoutExplain: "Wybierz styl dla narzędzia zwijania.",
				settingsLayoutSwipe: "Pasek pionowy",
				settingsLayoutSpyGlass: "Lunetka",
				settingsLayoutSelected: "Wybrany układ",
				settingsLayoutSelect: "Wybierz ten układ",
				settingsSaveConfirm: "ł_Some of your changes require that you save and reload the story____________________ą"
			},
			settingsDataModel: {
				settingsTabDataModel: "Typ zwijania",
				settingsDataModelExplainSwipe: "Co mogą zwijać użytkownicy?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Wybierz warstwę lub mapę internetową, która pojawi się w lunetce.",
				settingsDataModelOneMap: "Warstwa mapy internetowej",
				settingsDataModel1Explain: "Wybierz warstwę, która ma być zwijana.",
				settingsDataModel1Warning: "Jeśli warstwa jest ukryta pod górnymi warstwami, użycie zwijania nie przyniesie rezultatów.",
				settingsDataModel1SpyGlassExplain: "Wybierz warstwę, która ma pojawić się w lunetce.",
				settingsDataModelTwoMaps: "Dwie mapy internetowe",
				settingsDataModelLayerIds: "Identyfikatory warstwy mapy internetowej",
				settingsDataModelSelected: "Wybrany typ",
				settingsDataModelWebmapSwipeId1: "Identyfikator mapy internetowej po prawej stronie",
				settingsDataModelWebmapSwipeId2: "Identyfikator mapy internetowej po lewej stronie",
				settingsDataModelWebmapGlassId1: "Identyfikator głównej mapy internetowej",
				settingsDataModelWebmapGlassId2: "Identyfikator mapy internetowej z lunetki",
				settingsDataModelSelect: "Wybierz ten typ",
				settingsDataModel2Explain: "Odsłanianie z inną mapą internetową.",
				settingsDataModel2SpyGlassExplain: "Odkryj kolejną mapę internetową.",
				settingsDataModel2HelpTitle: "Jak odnaleźć identyfikator mapy internetowej?",
				settingsDataModel2HelpContent: "Skopiuj i wklej cyfry po znaku „=” w adresie URL mapy internetowej",
				switchMaps: "Przełącz mapy",
				browseWebMaps: "Przeglądaj mapy internetowe"
			},
			settingsLegend: {
				settingsTabLegend: "Układ aplikacji",
				settingsLegendExplain: "ł_Select the layout settings_________ą.",
				settingsLegendEnable: "Włącz legendę",
				settingsDescriptionEnable: "Włącz opis",
				settingsBookmarksEnable: "Włącz serię zwijania",
				settingsPopupDisable: "Włącz okno podręczne",
				settingsLocationSearchEnable: "Włącz wyszukiwanie przy użyciu lokatora",
				settingsGeolocatorEnable: "Włącz geolokator",
				settingsLegendHelpContent: "Aby ulepszyć zawartość legendy, skorzystaj z tabeli zawartości przeglądarki map ArcGIS.com (Ukryj w legendzie)",
				settingsSeriesHelpContent: "Seria zwijania to opcja nawigacji przy użyciu kart, która kieruje użytkownika do określonego zasięgu i wyświetla tytuł oraz tekst opisu w panelu bocznym. Podczas pierwszej aktywacji zakładki mapy internetowej zostaną użyte do wstępnego wypełnienia paska serii. Jeżeli wyłączysz później opcję serii, zostanie też wyłączony pasek serii, ale konfiguracja serii zostanie zachowana na przyszłość.",
				settingsSeriesHelpContent2: "Serie zwijania umożliwiają tworzenie i edycję wybranych lokalizacji z towarzyszącymi im tytułami i tekstem. Jeśli dana mapa internetowa zawiera zakładki, zostaną one wyświetlone. Istnieje możliwość wyłączenia serii, ale ta konfiguracja zostanie zapisana do późniejszego wykorzystania.",
				settingsSeriesHelpLink: "Tutaj znajduje się przykładowa aplikacja zawierająca serie zwijania",
				preview: "Zobacz podgląd interfejsu użytkownika",
				settingsLocateButtonExplain: "Ta funkcjonalność jest obsługiwana w większości urządzeń mobilnych i przeglądarek komputerowych (w tym Internet Explorer 9 i jego nowszych wersjach).",
				settingsLocateButton: "Włącz przycisk Lokalizuj w obsługiwanych przeglądarkach",
				settingsAddressSearch: "Włącz narzędzie wyszukiwania adresów"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Okno podręczne",
				settingsSwipePopupExplain: "Dostosuj wygląd nagłówka okien podręcznych, aby pomóc użytkownikom skojarzyć okna z warstwami map.",
				settingsSwipePopupSwipe1: "Mapa po lewej stronie",
				settingsSwipePopupSwipe2: "Mapa po prawej stronie",
				settingsSwipePopupGlass1: "Mapa główna",
				settingsSwipePopupGlass2: "Mapa w lunetce",
				settingsSwipePopupTitle: "Tytuł nagłówka",
				settingsSwipePopupColor: "Kolor nagłówka"
			},
			initPopup: {
				initHeader: "Witamy w kreatorze szablonu Zwijanie/Luneta",
				modalNext: "Dalej",
				modalPrev: "Powrót",
				modalApply: "Otwórz aplikację"
			},
			seriesPanel: {
				title: "Tytuł",
				descr: "Opis",
				discard: "Odrzuć zakładkę",
				saveExtent: "Skonfiguruj zasięg zakładki",
				discardDisabled: "Nie można usunąć tej zakładki. Serie zwijania można wyłączyć w Ustawieniach."
			},
			helpPopup: {
				title: "Pomoc",
				close: "Zamknij",
				tab1: {
					div1: "Szablon Zwijanie/Luneta umożliwia porównywanie dwóch różnych map internetowych albo dwóch warstw pojedynczej mapy internetowej za pomocą atrakcyjnie wyglądającej i łatwej w obsłudze aplikacji internetowej. Aplikacji tej można używać w dowolnej przeglądarce i na każdym urządzeniu, w tym również na smartfonie i tablecie.",
					div2: "Dodatkowe informacje dotyczące szablonu Zwijanie/Lupa, w tym przykłady utworzone przez użytkowników, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> znajdują się na stronie internetowej Story Maps</a>. Możesz także śledzić nas w serwisie Twitter pod adresem <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Czekamy na wiadomości od Ciebie! Niezależnie od tego, czy masz pytanie, chcesz poprosić o nową funkcjonalność lub poinformować nas o znalezionym błędzie, odwiedź <a href='http://links.esri.com/storymaps/forum' target='_blank'>Forum użytkowników Story Maps</a>."
				}
			},
			share: {
				firstSaveTitle: "ł_Story successfully saved________ą",
				firstSaveHeader: "ł_Your story is now saved in ArcGIS Online. Please read the following answers to frequent questions______________________________ą.",
				firstSaveA1: "Jeżeli nie znasz jeszcze usługi ArcGIS Online lub chcesz korzystać ze skrótu do interfejsu dla autorów, możesz zapisać następujące łącze: %LINK1%",
				firstSaveA1bis: "ł_The story can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>________________________________ą.",
				firstSaveQ2: "ł_Is my story shared_______ą?",
				firstSaveA2: "ł_Currently your story is not shared. To share it, use the SHARE button______________________ą.",
				shareTitle: "ł_Share your story______ą",
				sharePrivateHeader: "ł_Your story is not shared, would you like to share it_________________ą?",
				sharePrivateBtn1: "Udostępnij publicznie",
				sharePrivateBtn2: "Udostępnij mojej instytucji",
				sharePrivateProgress: "Trwa udostępnianie...",
				sharePrivateErr: "Udostępnianie nie powiodło się. Spróbuj ponownie lub",
				sharePrivateOk: "Aktualizacja udostępniania powiodła się. Trwa wczytywanie...",
				shareStatus1: "ł_Story is not saved______ą",
				shareStatus2: "ł_Story is shared publicly________ą",
				shareStatus3: "ł_Story is shared within the organization_____________ą",
				shareStatus4: "ł_Story is not shared_______ą",
				sharePreviewAsUser: "Zobacz podgląd",
				shareHeader1: "ł_Your story is <strong>publicly accessible</strong>________________ą.",
				shareHeader2: "ł_Your story is accessible by your organization members (login is required)_______________________ą.",
				shareLinkHeader: "ł_Share the story with your audience___________ą",
				shareLinkOpen: "OTWÓRZ",
				learnMore: "Dowiedz się więcej",
				shareQ1Opt1: "ł_How do I keep the story private___________ą?",
				shareQ1Opt2: "ł_How do I keep the story private or share it publicly_________________ą?",
				shareA1: "Odwiedź %SHAREIMG% <a href='%LINK1%' target='_blank'>stronę elementu aplikacji</a>. Jeżeli nie chcesz dłużej udostępniać mapy internetowej, odwiedź <a href='%LINK2%' target='_blank'>stronę elementu mapy internetowej</a>.",
				shareA1bis: "Jeśli chcesz przestać udostępniać Usługę obiektową, użyj <a href='%LINK1%' target='_blank'>strony elementu Usługi obiektowej</a>.",
				shareQ2: "ł_How do I edit the story later__________ą?",
				shareQ2bis: "W jaki sposób mogę wrócić do interfejsu tworzenia?",
				shareA2div1: "ł_Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the story item page</a>_________________________________ą.",
				shareA2div2: "ł_As the owner of the story, when you are signed in on ArcGIS.com, the story includes a button to open the interactive builder_______________________________________ą:",
				shareQ3: "Gdzie są przechowywane dane?",
				shareA3: "ł_The story configuration is stored in this web application item</a>_____________________ą.",
				shareWarning: "Udostępnianie %WITH% zostało wyłączone, ponieważ nie jesteś właścicielem <a href='%LINK%' target='_blank'>mapy internetowej</a>.",
 				shareWarningWith1: "publicznie",
 				shareWarningWith2: "publicznie i instytucji"
			},
			directCreation: {
				header: "Witamy w kreatorze szablonu Zwijanie/Luneta",
				mapPickHeader: "Aby rozpocząć, podaj prawidłowy identyfikator mapy internetowej albo skorzystaj z przycisku Wyszukaj w celu przeszukania map internetowych.",
				launchBuilder: "Kreator uruchamiania",
				chooseWebmapLbl: "Wybierz mapę internetową...",
				explain2: "Aby utworzyć story map Zwijanie lub Lupa, skorzystaj z poniższego przycisku i wybierz istniejącą mapę internetową ArcGIS Online, której chcesz użyć. Ewentualnie możesz wkleić do poniższego pola identyfikator mapy internetowej.",
				explain3: "Jeżeli na mapie narracji (story map) chcesz użyć dwóch map internetowych, po wybraniu tej opcji pojawi się później komunikat dotyczący drugiej mapy internetowej.",
				webmapPlaceholder: "Wprowadź identyfikator mapy internetowej..."
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Moja instytucja",
					onlineLabel: "Usługa ArcGIS Online",
					contentLabel: "Moje zasoby",
					favoritesLabel: "Moje ulubione"
				},
				title: "Wybierz mapę  internetową",
				searchTitle: "Wyszukaj",
				ok: "OK",
				cancel: "Anuluj",
				placeholder: "Wprowadź wyszukiwane wyrażenie"
			}
		}
    })
);
