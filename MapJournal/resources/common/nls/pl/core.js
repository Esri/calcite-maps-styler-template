define(
	 ({
		commonCore: {
			common: {
				add: "Dodaj",
				edit: "Edytuj",
				save: "Zapisz",
				next: "Dalej",
				cancel: "Anuluj",
				back: "Wstecz",
				apply: "Zastosuj",
				close: "Zamknij",
				open: "Otwórz",
				start: "Początek",
				loading: "Wczytywanie",
				disabledAdmin: "Opcja ta została wyłączona przez Administratora",
				width: "Szerokość",
				height: "Wysokość",
				create: "Utwórz",
				yes: "Tak",
				no: "Nie",
				mystories: "ł_My Stories____ą"
			},
			inlineFieldEdit: {
				editMe: "Edytuj!"
			},
			builderPanel: {
				panelHeader: "Kreator szablonu %TPL_NAME%",
				buttonSaving: "Zapisywanie",
				buttonSaved: "Zapisane",
				buttonShare: "Udostępnij",
				buttonSettings: "Ustawienia",
				buttonHelp: "Pomoc",
				buttonPreview: "ł_View story____ą",
				tooltipFirstSave: "Z tego elementu można skorzystać dopiero po zapisaniu.",
				tooltipNotShared: "Z tego elementu można skorzystać dopiero po udostępnieniu.",
				tooltipNotShared2: "ł_Your story isn't shared, only you can access it_______________ą.",
				noPendingChange: "Brak oczekujących zmian",
				unSavedChangePlural: "Oczekujące zmiany",
				closeWithPendingChange: "Czy na pewno chcesz potwierdzić tę operację? Zmiany zostaną utracone.",
				saveError: "Zapisywanie nie powiodło się, spróbuj ponownie",
				status1: "Narracja została udostępniona, ale wystąpiły problemy",
				status2: "Narracja nie została udostępniona, ale wystąpiły problemy",
				status3: "Narracja jest publiczna",
				status4: "Narracja została udostępniana w obrębie Twojej instytucji",
				status5: "Narracja jest prywatna",
				status6: "Narracja nie została jeszcze zapisana",
				checking: "Trwa sprawdzanie",
				fix: "Napraw"
			},
			saveError: {
				title: "Błąd podczas zapisywania narracji",
				err1Div1: "Nie można zapisać narracji, ponieważ istnieje już inny element o tej samej nazwie.",
				err1Div2: "Zmodyfikuj tytuł narracji i ponownie ją zapisz.",
				btnOk: "Edytuj tytuł narracji"
			},
			saveErrorSocial: {
				title: "ł_Social media sharing update_________ą",
				panel1: "ł_Your storyâ€™s appearance on social media has been improved, but your ArcGIS web application item title is not the same as your story title___________________________________________ą.",
				panel1tooltip: "ł_By defining a title, summary and thumbnail image, your story will look like this_________________________ą:",
				panel2:	"ł_Which title would you like to use on social media________________ą:",
				panel2q1: "ł_Story title (recommended)_________ą",
				panel2q1tooltip: "ł_By choosing this option, your item title will be modified to match your story title and further changes in the builder will be synchronized___________________________________________ą.",
				panel2q2: "ł_Item title____ą",
				panel3: "ł_To further improve how your story looks on social media use ${MYSTORIES} to add a summary and a thumbnail image___________________________________ą.",
				panel4: "ł_Do not warn me again for this story____________ą"
			},
			share: {
				shareTitle: "Udostępnij narrację",
				preview: "Zobacz podgląd",
				viewlive: "ł_View story____ą",
				btnPrivate: "Prywatny",
				btnPrivateTooltip: "Tylko Ty widzisz narrację",
				btnOrg: "Instytucja",
				btnOrgTooltip: "Tylko członkowie Twojej instytucji widzą narrację",
				btnPublic: "Publiczny",
				btnPublicTooltip: "Każdy widzi narrację",
				loadingMessage: "Sprawdzanie narracji pod kątem problemów",
				viewToggle1: "Wyświetl zawartość narracji",
				viewToggle2: "Zamknij zawartość narracji",
				socialize: "Udostępnij w mediach społecznościowych",
				statusPrivate: "Twoja narracja jest prywatna. Tylko Ty ją widzisz.",
				statusError: "W zawartości Twojej narracji wystąpiły problemy, które będą widoczne dla czytelników. Poniżej możesz je znaleźć i rozwiązać.",
				statusNoErrPrivate: "Udostępnij narrację, gdy będzie gotowa!",
				mystoriesinvite: "Zarządzaj narracjami",
				notavailable1: "Przykro nam, ale nie można udostępnić narracji z poziomu Kreatora, ponieważ ta aplikacja nie jest hostowana przez produkt %PRODUCT%.",
				notavailable2: "Przykro nam, ale z poziomu Kreatora nie można udostępnić narracji w tej wersji witryny Portal for ArcGIS (wymagana jest wersja 10.4 lub nowsza).",
				notavailable3: "Można udostępnić narrację tutaj: %LINK%.",
				notavailable4: "Moje narracje",
				notavailable5: "ł_its item page_____ą",
				notavailable6: "Przykro nam, ale ta funkcja nie jest obsługiwana w trybie deweloperskim. W zależności od planu wdrożenia ta funkcja może być obsługiwana po jej wdrożeniu.",
				notavailable7: "Sprawdź na karcie %MYCONTENT%, czy mapy i warstwy wykorzystane w narracji zostały również udostępnione.",
				notavailable8: "Moje zasoby",
				mystoriesinvite2: "ł_To improve how your story looks on social networks use ${MYSTORIES} to add a summary and a thumbnail image_________________________________ą."
			},
			settings: {
				header: "Ustawienia",
				tabError: "Sprawdź, czy poszczególne karty nie zawierają błędnych danych"
			},
			settingsLayout: {
				title: "ł_Layout___ą",
				explain: "Jakiego układu chcesz użyć?",
				explainInit: "W oknie dialogowym ustawień możesz zmienić układ w dowolnej chwili.",
				viewExample: "Wyświetl przykład online"
			},
			settingsTheme: {
				title: "ł_Theme___ą"
			},
			settingsHeader: {
				title: "ł_Header___ą",
				logoEsri: "Logo firmy Esri",
				logoNone: "Brak logo",
				logoCustom: "Logo niestandardowe",
				logoCustomPlaceholder: "Adres URL (maks. 250x50 pikseli)",
				logoCustomTargetPlaceholder: "łącze przekierowujące do innej strony",
				logoSocialExplain: "Dostosuj łącze w nagłówku.",
				logoSocialText: "Tekst",
				logoSocialLink: "Łącze",
				lblSmallHeader: "Użyj nagłówka kompaktowego (bez podtytułu)"
			},
			header: {
				title: "ł_Edit the title of your %TPL_NAME%___________ą",
				subtitle: "Zmień podtytuł swojej aplikacji %TPL_NAME%"
			}
		}
	})
);
