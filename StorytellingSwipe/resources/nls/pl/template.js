define(
	({
		viewer: {
			loading: {
				step1: "WCZYTYWANIE APLIKACJI",
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
				invalidApp: "Błąd krytyczny: Nie można wczytać aplikacji",
				initMobile: "Witamy w internetowej aplikacji swipe (z funkcją zwijania). Aplikacja nie została skonfigurowana. Interaktywny kreator nie jest obsługiwany na urządzeniach przenośnych.",
				noBuilderIE8: "Interaktywny kreator narzędzia zwijania nie jest obsługiwany przez przeglądarkę Internet Explorer w wersji starszej niż 9.",
				noLayerView: "Witamy w internetowej aplikacji swipe (z funkcją zwijania).<br />Aplikacja nie została jeszcze skonfigurowana.",
				appSave: "Błąd podczas zapisywania aplikacji internetowej",
				mapSave: "Błąd podczas zapisywania mapy internetowej",
				notAuthorized: "Nie masz uprawnień do uzyskania dostępu do tej aplikacji.",
				conflictingProjectionsTitle: "Konflikt odwzorowań",
				conflictingProjections: "Narzędzie zwijania nie obsługuje dwóch map internetowych o różnych odwzorowaniach. Przejdź do ustawień i wybierz mapę internetową o tym samym odwzorowaniu co pierwsza użyta mapa.",
				cpButton: "Zamknij"
			},
			mobileView: {
				hideIntro: "UKRYJ WPROWADZENIE",
				navLeft: "Legenda",
				navMap: "Mapa",
				navRight: "Dane"
			},
			desktopView: {
				storymapsText: "Mapa z historią",
				builderButton: "Przełącz do trybu kreatora",
				bitlyTooltip: "Pobierz skrócone łącze do aplikacji"
			}
		},
		builder: {
			builder: {
				panelHeader: "KONFIGURACJA APLIKACJI",
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
				closeWithPendingChange: "Na pewno chcesz zatwierdzić czynność? Twoje zmiany zostaną utracone.",
				gotIt: "OK",
				savingApplication: "Zapisywanie aplikacji",
				saveSuccess: "Aplikacja została pomyślnie zapisana",
				saveError: "Zapisywanie nie powiodło się, spróbuj ponownie",
				saveError2: "ł_Save failed due to an invalid html tag in a name or description_ą",
				saveError3: "ł_The title can't be empty_ą",
				signIn: "Zaloguj się na konto,",
				signInTwo: "aby zapisać aplikację."
			},
			header:{
				editMe: "Zmodyfikuj mnie!",
				templateTitle: "Ustaw tytuł szablonu",
				templateSubtitle: "Ustaw podtytuł szablonu"
			},
			settings: {
				settingsHeader: "Ustawienia aplikacji",
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
				settingsExtentExplain: "Ustaw początkowy zasięg za pomocą poniższej mapy interaktywnej.",
				settingsExtentExplainBottom: "Zdefiniowany zasięg zostanie użyty do modyfikacji początkowego zasięgu mapy internetowej. Należy pamiętać, że zasięg ten nie będzie używany podczas korzystania z serii zwijania.",
				settingsExtentDateLineError: "Zasięg nie może przebiegać przez południk 180ï¿½",
				settingsExtentDateLineError2: "Błąd w obliczaniu zasięgu",
				settingsExtentDrawBtn: "Określ nowy zasięg",
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
				editTooltip: "Ustaw opis panelu bocznego",
				editMe: "Zmodyfikuj mnie!",
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
				settingsSaveConfirm: "Niektóre z wprowadzonych zmian wymagają zapisania i ponownego wczytania aplikacji"
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
				settingsLegendExplain: "Wybierz ustawienia układu aplikacji.",
				settingsLegendEnable: "Włącz legendę",
				settingsDescriptionEnable: "Włącz opis",
				settingsBookmarksEnable: "Włącz serię zwijania",
				settingsPopupDisable: "Włącz okno podręczne",
				settingsLocationSearchEnable: "Włącz wyszukiwanie przy użyciu lokatora",
				settingsGeolocatorEnable: "Włącz geolokator",
				settingsLegendHelpContent: "Aby ulepszyć zawartość legendy, skorzystaj z tabeli zawartości przeglądarki map ArcGIS.com (Ukryj w legendzie)",
				settingsSeriesHelpContent: "Seria zwijania to opcja nawigacji przy użyciu kart, która kieruje użytkownika w pewnym zakresie i wyświetla tytuł oraz tekst opisu w panelu bocznym. Podczas pierwszej aktywacji zakładki mapy internetowej zostaną użyte do wstępnego wypełnienia paska serii. Jeżeli wyłączysz później opcję serii, zostanie też wyłączony pasek serii, ale konfiguracja serii zostanie zachowana na przyszłość.", 
				settingsSeriesHelpContent2: "Serie zwijania umożliwiają tworzenie i edycję wybranych lokalizacji z towarzyszącymi im tytułami i tekstem. Jeśli dana mapa internetowa zawiera zakładki, zostaną one wyświetlone. Istnieje możliwość wyłączenia serii, ale ta konfiguracja zostanie zapisana do późniejszego wykorzystania.",
				settingsSeriesHelpLink: "Tutaj znajduje się przykładowa aplikacja zawierająca serie zwijania",
				preview: "Podgląd interfejsu użytkownika",
				settingsLocateButtonExplain: "Ten sposób działania jest obsługiwany w większości urządzeń mobilnych i przeglądarek komputerowych (łącznie z programem Internet Explorer 9 i nowszymi wersjami).",
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
				initHeader: "ł_Welcome to the Swipe/Spyglass Builder_ą",
				modalNext: "Dalej",
				modalPrev: "Wstecz",
				modalApply: "Otwórz aplikację"
			},
			seriesPanel: {
				title: "Tytuł",
				descr: "Opis",
				discard: "Odrzuć zakładkę",
				saveExtent: "Ustaw zasięg zakładki",
				discardDisabled: "Nie można usunąć tej zakładki. Serie zwijania można wyłączyć w Ustawieniach."
			},
			helpPopup: {
				title: "Pomoc",
				close: "Zamknij",
				tab1: {
					div1: "Szablon Zwijanie/Luneta umożliwia porównywanie dwóch różnych map internetowych albo dwóch warstw pojedynczej mapy internetowej za pomocą atrakcyjnie wyglądającej i łatwej w obsłudze aplikacji internetowej. Aplikacji tej można używać w dowolnej przeglądarce i na każdym urządzeniu, w tym również na smartfonie i tablecie.",
					div2: "ł_For additional information on the Swipe/Spyglass template, including examples created by users, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visit the Story Maps website</a>. You can also follow us on Twitter at <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>._ą",
					div3: "Czekamy na wiadomości od Ciebie! Niezależnie od tego, czy masz pytanie, chcesz poprosić o nowy obiekt lub poinformować nas o znalezionym błędzie, odwiedź <a href='http://links.esri.com/storymaps/forum' target='_blank'>Forum użytkowników map opowiadań</a>."
				}
			},
			share: {
				firstSaveTitle: "Aplikacja zapisana pomyślnie",
				firstSaveHeader: "Twoja aplikacja została zapisana w serwisie ArcGIS Online. Zapoznaj się z poniższymi odpowiedziami na często zadawane pytania.",
				firstSaveA1: "Jeżeli nie znasz jeszcze serwisu ArcGIS Online lub chcesz korzystać ze skrótu do interfejsu dla autorów, możesz zapisać następujące łącze: %LINK1%",
				firstSaveA1bis: "Dostęp do aplikacji można uzyskać również za pośrednictwem <a href='%LINK2%' target='_blank'>folderu zasobów w serwisie ArcGIS Online</a>.",
				firstSaveQ2: "Czy moja aplikacja jest udostępniona?",
				firstSaveA2: "Obecnie Twoja aplikacja nie jest udostępniana. Aby ją udostępnić, użyj przycisku UDOSTĘPNIJ.",
				shareTitle: "Udostępnij aplikację",
				sharePrivateHeader: "Aplikacja nie jest udostępniana. Czy chcesz ją udostępnić?",
				sharePrivateBtn1: "Udostępnij publicznie",
				sharePrivateBtn2: "Udostępnij mojej instytucji",
				sharePrivateProgress: "Trwa udostępnianie...",
				sharePrivateErr: "Udostępnianie nie powiodło się. Spróbuj ponownie lub",
				sharePrivateOk: "Aktualizacja udostępniania powiodła się. Trwa wczytywanie...",
				shareStatus1: "Aplikacja nie została zapisana",
				shareStatus2: "Aplikacja jest udostępniania publicznie",
				shareStatus3: "Aplikacja jest udostępniana w obrębie tej instytucji",
				shareStatus4: "Aplikacja nie jest udostępniana",
				sharePreviewAsUser: "Ogólnie",
				shareHeader1: "Aplikacja jest <strong>dostępna publicznie</strong>.",
				shareHeader2: "Aplikacja jest dostępna dla członków instytucji (wymagane jest logowanie).",
				shareLinkHeader: "Udostępnij aplikację odbiorcom",
				shareLinkOpen: "OTWÓRZ",
				learnMore: "Dowiedz się więcej",
				shareQ1Opt1: "Jak mogę zachować prywatny status aplikacji?",
				shareQ1Opt2: "Jak mogę zachować prywatny status aplikacji albo udostępnić ją publicznie?",
				shareA1: "Odwiedź %SHAREIMG% <a href='%LINK1%' target='_blank'>stronę elementu aplikacji</a>. Jeżeli nie chcesz dłużej udostępniać mapy internetowej, odwiedź <a href='%LINK2%' target='_blank'>stronę elementu mapy internetowej</a>.",
				shareA1bis: "Jeśli chcesz przestać udostępniać Usługę obiektową, użyj <a href='%LINK1%' target='_blank'>strony elementu Usługi obiektowej</a>.",
				shareQ2: "W jaki sposób mogę edytować aplikację w przyszłości?",
				shareQ2bis: "W jaki sposób mogę wrócić do interfejsu tworzenia?",
				shareA2div1: "Zapisz i użyj ponownie następującego łącza %LINK1% lub <a href='%LINK2%' target='_blank'>strony elementu aplikacji</a>.",
				shareA2div2: "Kiedy właściciel aplikacji zaloguje się w serwisie ArcGIS.com, aplikacja zawiera przycisk do otwierania interaktywnego kreatora:",				
				shareQ3: "Gdzie są przechowywane dane?",
				shareA3: "Pliki konfiguracyjne aplikacji są zapisane w tym elemencie aplikacji internetowej</a>.",
				shareWarning: "ł_Sharing %WITH% has been disabled because you are not the owner of the <a href='%LINK%' target='_blank'>webmap</a>._ą",
 				shareWarningWith1: "ł_publicly_ą",
 				shareWarningWith2: "ł_publicly and with the Organization_ą"
			},
			directCreation: {
				header: "Witamy w kreatorze szablonu Zwijanie/Luneta",
				mapPickHeader: "Aby rozpocząć, podaj prawidłowy identyfikator mapy internetowej albo skorzystaj z przycisku Wyszukaj w celu przeszukania map internetowych.",
				launchBuilder: "Kreator uruchamiania",
				chooseWebmapLbl: "ł_Choose web map..._ą",
				explain2: "ł_To create a Swipe or Spyglass story map, use the button below to choose the existing ArcGIS Online web map you want to use. Alternatively, you can paste the ID of the web map into the field below._ą",
				explain3: "ł_If you want to use two web maps in your story map, you'll be prompted for the second web map later when you choose that option._ą",
				webmapPlaceholder: "ł_Enter a web map id..._ą"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Moja instytucja",
					onlineLabel: "Serwis ArcGIS Online",
					contentLabel: "Moje zasoby",
					favoritesLabel: "Ulubione"
				},
				title: "Wybór mapy internetowej",
				searchTitle: "Wyszukaj",
				ok: "OK",
				cancel: "Anuluj",
				placeholder: "Wprowadź hasło wyszukiwania"
			}
		}
    })
);