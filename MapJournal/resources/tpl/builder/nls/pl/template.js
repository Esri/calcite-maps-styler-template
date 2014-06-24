define(
	 ({
		builder: {
			layouts: {
				mainStage: "Obszar główny",
				sideTitle: "Panel boczny",
				sideDescr: "Układ dla opowiadania z dużą ilością tekstu, doskonały do połączenia zdjęć, filmów wideo oraz map w przejrzystą prezentację.",
				floatTitle: "Panel przestawny",
				floatDescr: "Układ umożliwiający wyróżnienie map, którym towarzyszy przezroczysty panel z krótkimi informacjami tekstowymi pomagającymi w przedstawieniu opowiadania."
			},
			common: {
				lblStatus1: "Opublikowane",
				lblStatus2: "Wersja robocza",
				lblStatus3: "Ukryte"
			},
			settingsLayoutOptions: {
				title: "Opcje układu",
				cfgLeft: "Lewy",
				cfgRight: "Prawy",
				cfgSmall: "Mały",
				cfgMedium: "Średni",
				cfgLarge: "Duży",
				socialLinksLabel: "Wyświetlaj łącza do udostępniania u dołu każdej sekcji",
				socialLinksDescr: "Umożliwia to użytkownikom tworzenie odnośników do określonych sekcji aplikacji %TPL_NAME% i ich promowanie. Na przykład, jeżeli użyjesz ikony udostępniania sekcji, użytkownicy zostaną przekierowani do określonej sekcji aplikacji %TPL_NAME%, zamiast początku opowiadania. Użytkownicy mogą skorzystać z łącza mediów społecznościowych w sekcji tytułu, aby promować całą aplikację %TPL_NAME% (Karta nagłówka) — w tym przypadku użytkownicy są przekierowywani na początek aplikacji %TPL_NAME%."
			},
			initPopup: {
				title: "Witamy w"
			},
			addEditPopup: {
				disabled: "ł_Add Section is disabled because the maximum number of allowed sections has been reached._ą",
				titleAdd: "Dodaj sekcję",
				titleAddHome: "ł_Add Home Section_ą",
				titleEdit: "Edytuj sekcję",
				step: "Etap",
				stepMainStageExplain: "ł_Main Stage Content_ą",
				stepPanelExplain: "ł_Content_ą",
				stepMainStageNextTooltip: "Wpisz tytuł sekcji i wybierz zawartość, która znajdzie się w obszarze głównym",
				step2NextTooltip: "Wpisz tytuł sekcji i zawartość, która będzie wyświetlana w układzie %LAYOUT-TYPE%",
				stepNextTooltipNext: "aby przejść do kolejnego etapu",
				stepNextTooltipAdd: "aby dodać sekcję",
				firstAddExplain: "ł_This first section is your Home Section, think of it as the 'cover page' to your story. The title you just defined will be displayed with large fonts._ą",
				firstAddLeanMore: "ł_Learn More_ą",
				titlePlaceholder: "Tytuł sekcji"
			},
			addEditViewText: {
				editorPlaceholder: "Tutaj możesz dodać tekst, łącza oraz niewielkie elementy graficzne.",
				editorActionsTitle: "Operacje w obszarze głównym",
				editorActionsHelpDescr: "ł_Use these controls to create links that will change the main stage. For example, when the reader clicks a link, you may want to zoom the map to a specific location, display another web map or display an image._ą"
			},
			organizePopup: {
				title: "Organizuj",
				lblHeader: "Przeciągaj i upuszczaj sekcje, aby zorganizować zawartość.",
				lblColTitle: "Tytuł",
				lblColPubDate: "Data publikacji",
				lblColStatus: "Status",
				checkDisplayReverse: "Wyświetlaj sekcje w odwrotnej kolejności",
				btnApplyWarning: "ł_Confirm deletion of %NB% section(s)_ą",
				deleteTooltip: "Usuń",
				firstSectionExplain: "(Sekcji Start nie można przenieść)."
			},
			exportData: {
				btn: "ł_Export content_ą",
				tooltip: "ł_Use this button to export your content locally. This will open a new page that you can easily copy or save as a PDF.<br />Copying that page content in a word processor is the most effective way to recreate your Journal in case of an accidental deletion._ą"
			},
			help: {
				lblHelp: "Pomoc",
				lblAdd: "Dodaj sekcję",
				lblSettings: "Ustawienia",
				lblOrga: "Organizuj zawartość",
				lblEdit: "Edycje",
				lblPublish: "Udostępnij",
				lblTips: "ł_Tips_ą",
				lblMore: "Chcesz mieć więcej możliwości?",
				lblLink: "Odwiedź witrynę Story Maps.",
				content1Div1: "Podczas tworzenia opowiadania możesz łączyć różne style. W układzie <strong>%LAYOUT_TITLE%</strong> zwykle znajduje się tekst, obrazy oraz filmy wideo, mapy natomiast są na ogół widoczne w <strong>obszarze głównym</strong>. Jednak aplikacja %TPL_NAME% pozwala również na umieszczenie w obszarze głównym także obrazów obiektów, diagramów i filmów wideo.",
				content1Div2: "Dodanie sekcji umożliwia personalizację korzystania z aplikacji opowiadania. Możliwe jest dostosowanie aplikacji tak, aby podczas przewijania tekstu w układzie %LAYOUT_TITLE% mapa znajdująca się w obszarze głównym była przesuwana i powiększana do najważniejszych punktów lub automatycznie przełączane były nowe mapy i obrazy, stanowiące kontekst dla przekazywanych treści.",
				content2Div1: "Tutaj możesz dostosować wygląd aplikacji %TPL_NAME%. Dostępne są tutaj szczegółowe ustawienia schematów kolorów, układów i szerokości.",
				content2Div2: "Możesz również dodać łącza udostępniania w serwisach Facebook, Twitter i Bitly, dzięki czemu użytkownicy będą mogli łatwo rozpowszechniać aplikację %TPL_NAME% wśród szerokiego grona odbiorców.",
				content3Div1: "ł_Your content is organized into sections. You can have as many sections as you like (think of them like mini chapters). The flow of those chapters is important; within Organize you can reorder or delete sections as you wish._ą",
				content4Div1: "Czy znaleziono błąd w aplikacji, czy chcesz zmienić materiały? Odszukaj ikonę edycji w odpowiednim miejscu w aplikacji i zmodyfikuj zawartość. Podczas tworzenia aplikacji %TPL_NAME% konieczne może być wielokrotne korzystanie z funkcji edycji!",
				content5Div1: "Aplikacja %TPL_NAME% zostaje zapisana na koncie w portalu %PORTAL% i domyślnie zostaje oznaczona jako prywatna. Użytkownik może zadecydować, czy będzie ona udostępniona instytucji, czy też dostępna dla użytkowników z całego świata. W celu ułatwienia użytkownikom udostępniania zapewniamy im skrócony adres URL.",
				content6Div1: "ł_The title of your Home section is also the title of your Journal; think of your the Home section as  the 'cover page' to your story. The Home Section title will remain visible when your readers will navigate the Journal._ą",
				content6Div2: "ł_Your %LAYOUT_TITLE% doesn't have to be just text, consider including photos and videos to help bring the story alive, and to break-up long sections of text!_ą"
			},
			landing: {
				lblAdd: "ł_What do you want to call your Map Journal?_ą",
				phAdd: "ł_Enter your title..._ą",
				lblOR: "Lub",
				lblHelp: "Dowiedz się więcej"
			},
			firstAddSplash: {
				thisis: "To jest"
			}
        }
    })

);
