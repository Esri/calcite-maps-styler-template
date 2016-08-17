define({
  "commonMedia": {
    "mediaSelector": {
      "lblSelect1": "Multimedia",
      "lblSelect2": "Zasoby",
      "lblMap": "Mapa",
      "lblImage": "Obraz",
      "lblVideo": "Wideo",
      "lblExternal": "Strona internetowa",
      "disabled": "Opcja ta została wyłączona przez Administratora",
      "url": "W celu manualnego wprowadzenia adresu internetowego obrazu",
      "userLookup": "Wczytaj albumy",
      "notImplemented": "Jeszcze nie wprowadzone",
      "noData": "Nie znaleziono żadnych albumów publicznych"
    },
    "imageSelector": {
      "lblStep1": "Wybierz usługę",
      "lblStep2": "Wybierz nośnik",
      "lblStep3": "Konfiguruj"
    },
    "imageSelectorHome": {
      "explain": "Wczytaj obrazy z portalu społecznościowego <br /> lub bezpośrednio z adresu URL"
    },
    "imageSelectorFlickr": {
      "userInputLbl": "Nazwa użytkownika",
      "signInMsg2": "Nie odnaleziono użytkownika",
      "loadingFailed": "Wczytywanie zakończyło się niepowodzeniem"
    },
    "imageSelectorFacebook": {
      "leftHeader": "Użytkownik Facebook",
      "rightHeader": "Strona Facebook",
      "pageExplain": "Strona Facebook to publiczna strona marki/produktu lub znanej osoby, np.<b>esrigis</b>. Nazwa strony została umieszczona po pierwszym znaku „/” w adresie URL strony.",
      "pageInputLbl": "Nazwa strony",
      "lookupMsgError": "Nie znaleziono strony",
      "warning": "ł_Facebook support has been discontinued, ${learn}________________ą.",
      "learn": "ł_learn more____ą"
    },
    "imageSelectorPicasa": {
      "userInputLbl": "ł_Email or Picasa id______ą",
      "signInMsg2": "Nie odnaleziono konta",
      "howToFind": "ł_How to find a Picasa id________ą",
      "howToFind2": "ł_Copy digits between the first and second '/' of any Picasa page____________________ą"
    },
    "videoSelectorCommon": {
      "check": "Zaznacz",
      "notFound": "Nie znaleziono pliku wideo",
      "found": "Znaleziono plik wideo",
      "select": "Wybierz ten plik wideo"
    },
    "videoSelectorHome": {
      "other": "Inne"
    },
    "videoSelectorYoutube": {
      "url": "Adres URL pliku wideo dostępnego w serwisie YouTube",
      "pageInputLbl": "Nazwa użytkownika",
      "lookupMsgError": "Nie odnaleziono użytkownika",
      "howToFind": "W jaki sposób wyszukać nazwę użytkownika serwisu YouTube",
      "howToFind2": "Nazwa użytkownika jest wyświetlana pod każdym filmem",
      "found": "Znaleziono",
      "noData": "Nie znaleziono żadnych filmów publicznych",
      "videoNotChecked": "Materiał wideo nie został sprawdzony w serwisie YouTube, ale jego adres wygląda na poprawny.",
      "checkFailedAPI": "Podczas sprawdzania YouTube wystąpił błąd. Sprawdź klucz YouTube API."
    },
    "videoSelectorVimeo": {
      "url": "Adres URL pliku wideo dostępnego w serwisie Vimeo"
    },
    "videoSelectorOther": {
      "explain1": "Narracja nie jest w stanie odtwarzać zwykłych plików wideo (np. w formacie .avi, .mpeg), ale może odtwarzać hostowane pliki wideo, które mają wbudowane odtwarzacze (np. pliki dostępne w serwisie YouTube lub Vimeo).",
      "explain2": "Funkcja ta jest udostępniana w ramach większości usług hostowania plików wideo w Internecie, konieczne jest znalezienie opcji osadzenia pliku wideo, skopiowanie danego kodu oraz skorzystanie z witryny %WEBPAGE%.",
      "explain3": "Ewentualnie, jeżeli użytkownik chce samodzielnie hostować plik wideo, może utworzyć stronę HTML, w ramach której wykorzystywany będzie odtwarzacz plików wideo, taki jak %EXAMPLE%, hostować tę stronę, a także skorzystać z witryny %WEBPAGE%.",
      "webpage": "Obiekt witryny internetowej"
    },
    "webpageSelectorHome": {
      "lblUrl": "Adres URL witryny internetowej",
      "lblEmbed": "Kod do osadzenia",
      "lblOR": "LUB",
      "lblError1": "Błąd, wyczyść jedno z dwóch pól danych wejściowych.",
      "lblError2": "Kod do osadzenia może zawierać tylko jedną ramkę %IFRAMETAG%",
      "configure": "Konfiguruj"
    },
    "mediaConfigure": {
      "lblURL": "URL",
      "lblURLPH": "Adres URL obrazu powinien zaczynać się od http:// i kończyć na .jpg lub .png",
      "lblURLError": "Prawdopodobnie ten obraz nie jest prawidłowy. Podaj bezpośredni adres łącza do pliku obrazu (wtedy adres URL zwykle kończy się rozszerzeniem .jpg lub .png). Adresy łączy do witryn internetowych zawierających dany obraz są nieobsługiwane.",
      "lblURLCheck": "Sprawdzanie obrazu...",
      "lblLabel": "Legenda do obrazu",
      "lblLabel1": "Podpis",
      "lblLabel2": "Aktywuj tekst",
      "lblLabel3": "Brak",
      "lblLabelPH": "Wprowadź tekst",
      "lblMaximize": "Wstaw przycisk maksymalizacji w rogu obrazu",
      "lblMaximizeHelp": "Zalecany tylko w przypadku zdjęć o wysokiej jakości",
      "lblPosition": "Położenie",
      "lblPosition1": "Wyśrodkuj",
      "lblPosition2": "Wypełnij",
      "lblPosition3": "Dopasuj",
      "lblPosition4": "Rozciągnij",
      "lblPosition5": "Niestandardowy",
      "tooltipDimension": "Wartość można podać w „px” lub „%”",
      "tooltipDimension2": "Wartość należy podać w „px”",
      "lblPosition2Explain": "(obraz może zostać przycięty)",
      "lblPosition3Explain": "(obraz nie zostanie przycięty)",
      "lblPosition3Explain2": "(szerokość będzie zawsze dopasowana do panelu)",
      "lblPosition4Explain": "(obraz może zostać zniekształcony)",
      "unloadLbl": "Usuń, gdy czytelnik przechodzi dalej",
      "unloadHelp": "Gdy w witrynie internetowej są udostępnione materiały audio lub wideo, ta opcja powinna być zaznaczona, aby po przejściu czytelnika dalej odtwarzanie tych treści było przerywane. Należy wyłączyć zaznaczenie opcji, aby na przykład podczas czytania tekstu przez czytelnika odtwarzane były utwory muzyczne.<br />Jeżeli witryna internetowa jest aplikacją, tę opcję należy odznaczyć, aby uniknąć ponownego wczytywania tej aplikacji, gdy czytelnik do niej wróci.",
      "embedProtocolLabel": "ł_Load page over a secure connection (HTTPS)______________ą",
      "embedProtocolWarning1": "ł_Your story is configured to load over a secure connection (https), so web page show in the story must also use a secure connection. If the page does not load it may be because it is not available over a secure connection or that it cannot be included in your story (some websites restrict this). You may need to create a hyperlink to open the page in a new browser tab________________________________________________________________________________________________________________ą.",
      "embedProtocolWarning2": "ł_Your story is configured to load over an insecure connection (http), so you can choose to load this page over a secure (recommended) or insecure connection. If the page does not load, it may be because it does not support the connection type you selected or that it cannot be included in your story (some websites restrict this). You may need to create a hyperlink to open the page in a new browser tab__________________________________________________________________________________________________________________________ą."
    },
    "editorActionGeocode": {
      "lblTitle": "Lokalizuj adres lub miejsce",
      "mapMarkerExplain": "Po kliknięciu łącza na mapie wyświetlony zostanie znak"
    },
    "editorActionMedia": {
      "lblTitle": "Zmień zasoby w obszarze głównym"
    },
    "editorInlineMedia": {
      "lblTitle": "Wstaw obraz, film wideo lub witrynę internetową"
    }
  }
});