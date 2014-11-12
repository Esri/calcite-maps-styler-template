define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Multimedia",
				lblSelect2: "Zasoby",
				lblMap: "Mapa",
				lblImage: "Obraz",
				lblVideo: "Wideo",
				lblExternal: "Strona internetowa",
				disabled: "Opcja ta została wyłączona przez Administratora",
				url: "W celu manualnego wprowadzenia adresu internetowego obrazu",
				userLookup: "Wczytaj albumy",
				notImplemented: "Jeszcze nie wprowadzone",
				noData: "Nie znaleziono żadnych albumów publicznych"
			},
			imageSelector: {
				lblStep1: "Wybierz usługę",
				lblStep2: "Wybierz nośnik",
				lblStep3: "Konfiguruj"
			},
			imageSelectorHome: {
				explain: "Wczytaj obrazy z portalu społecznościowego <br /> lub bezpośrednio z adresu URL"
			},
			imageSelectorFlickr: {
				userInputLbl: "Nazwa użytkownika",
				signInMsg2: "Nie odnaleziono użytkownika",
				loadingFailed: "Wczytywanie zakończyło się niepowodzeniem"
			},
			imageSelectorFacebook: {
				leftHeader: "Użytkownik Facebook",
				rightHeader: "Strona Facebook",
				pageExplain: "Strona Facebook to publiczna strona marki/produktu lub znanej osoby, np.<b>esrigis</b>. Nazwa strony została umieszczona po pierwszym znaku „/” w adresie URL strony.",
				pageInputLbl: "Nazwa strony",
				lookupMsgError: "Nie znaleziono strony"
			},
			imageSelectorPicasa: {
				userInputLbl: "Adres e-mail lub identyfikator z serwisu Picasa/Google+",
				signInMsg2: "Nie odnaleziono konta",
				howToFind: "Jak znaleźć identyfikator konta Picasa lub Google+",
				howToFind2: "Skopiuj cyfry znajdujące się między pierwszym a drugim znakiem „/” dowolnej strony Picasa lub G+"
			},
			videoSelectorCommon: {
				check: "Zaznacz",
				notFound: "Nie znaleziono pliku wideo",
				found: "Znaleziono plik wideo",
				select: "Wybierz ten plik wideo"
			},
			videoSelectorHome: {
				other: "Inny"
			},
			videoSelectorYoutube: {
				url: "Adres URL pliku wideo dostępnego w serwisie YouTube",
				pageInputLbl: "Nazwa użytkownika",
				lookupMsgError: "Nie odnaleziono użytkownika",
				howToFind: "W jaki sposób wyszukać nazwę użytkownika serwisu YouTube",
				howToFind2: "Nazwa użytkownika jest wyświetlana pod każdym filmem",
				found: "Znaleziono",
				noData: "Nie znaleziono żadnych filmów publicznych"
			},
			videoSelectorVimeo: {
				url: "Adres URL pliku wideo dostępnego w serwisie Vimeo"
			},
			videoSelectorOther: {
				explain1: "ł_The application cannot play raw videos (e.g., avi, mpeg) but it can play hosted video files that have built-in players (e.g., YouTube or Vimeo)_ą.",
				explain2: "Funkcja ta jest udostępniana w ramach większości usług hostowania plików wideo w Internecie, konieczne jest znalezienie opcji osadzenia pliku wideo, skopiowanie danego kodu oraz skorzystanie z witryny %WEBPAGE%.",
				explain3: "Ewentualnie, jeżeli użytkownik chce samodzielnie hostować plik wideo, może utworzyć stronę HTML, w ramach której wykorzystywany będzie odtwarzacz plików wideo, taki jak %EXAMPLE%, hostować tę stronę, a także skorzystać z witryny %WEBPAGE%.",
				webpage: "Obiekt witryny internetowej"
			},
			webpageSelectorHome: {
				lblUrl: "Adres URL witryny internetowej",
				lblEmbed: "Kod do osadzenia",
				lblOR: "LUB",
				lblError1: "Błąd, wyczyść jedno z dwóch pól danych wejściowych.",
				lblError2: "Kod do osadzenia może zawierać tylko jedną ramkę %IFRAMETAG%",
				configure: "Konfiguruj"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "Adres URL obrazu powinien zaczynać się od http:// i kończyć na .jpg lub .png",
				lblURLError: "Prawdopodobnie ten obraz nie jest prawidłowy. Podaj bezpośredni adres łącza do pliku obrazu (wtedy adres URL zwykle kończy się rozszerzeniem .jpg lub .png). Adresy łączy do witryn internetowych zawierających dany obraz są nieobsługiwane.",
				lblURLCheck: "Sprawdzanie obrazu...",
				lblLabel: "Legenda do obrazu",
				lblLabel1: "Podpis",
				lblLabel2: "Aktywuj tekst",
				lblLabel3: "Brak",
				lblLabelPH: "Wprowadź tekst",
				lblMaximize: "Wstaw przycisk maksymalizacji w rogu obrazu",
				lblMaximizeHelp: "Zalecany tylko w przypadku zdjęć o wysokiej jakości",
				lblPosition: "Położenie",
				lblPosition1: "Wyśrodkuj",
				lblPosition2: "Wypełnij",
				lblPosition3: "Dopasuj",
				lblPosition4: "Rozciągnij",
				lblPosition5: "Niestandardowy",
				tooltipDimension: "Wartość można podać w „px” lub „%”",
				tooltipDimension2: "Wartość należy podać w „px”",
				lblPosition2Explain: "(obraz może zostać przycięty)",
				lblPosition3Explain: "(obraz nie zostanie przycięty)",
				lblPosition3Explain2: "(szerokość będzie zawsze dopasowana do panelu)",
				lblPosition4Explain: "(obraz może zostać zniekształcony)",
				unloadLbl: "ł_Unload when reader navigates away_ą",
				unloadHelp: "ł_If the Web Page has audio or video media, keep this option checked to stop that content from playing when the reader navigates away. Uncheck it for example to keep a soundtrack playing as the reader advances through the story.<br />If the Web Page is an application, uncheck this option so that the application does not reload if the reader returns to it_ą."
			},
			editorActionGeocode: {
				lblTitle: "Lokalizuj adres lub miejsce",
				mapMarkerExplain: "Po kliknięciu łącza na mapie wyświetlony zostanie marker"
			},
			editorActionMedia: {
				lblTitle: "Zmień zasoby w obszarze głównym"
			},
			editorInlineMedia: {
				lblTitle: "Wstaw obraz, film wideo lub witrynę internetową"
			}
		}
	})
);
