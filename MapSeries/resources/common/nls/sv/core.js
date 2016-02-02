define(
	 ({
		commonCore: {
			common: {
				add: "Lägg till",
				edit: "Redigera",
				save: "Spara",
				next: "Nästa",
				cancel: "Avbryt",
				back: "Bakåt",
				apply: "Använd",
				close: "Stäng",
				open: "Öppna",
				start: "Starta",
				loading: "Läser in",
				disabledAdmin: "Den här funktionen har inaktiverats av administratören",
				width: "Bredd",
				height: "Höjd",
				create: "Skapa",
				yes: "Ja",
				no: "Nej",
				mystories: "Å_My Stories____ö"
			},
			inlineFieldEdit: {
				editMe: "Redigera mig!"
			},
			builderPanel: {
				panelHeader: "Byggverktyget %TPL_NAME%",
				buttonSaving: "Sparar",
				buttonSaved: "Sparad",
				buttonShare: "Dela",
				buttonSettings: "Inställningar",
				buttonHelp: "Hjälp",
				buttonPreview: "Å_View story____ö",
				tooltipFirstSave: "Funktionen finns inte tillgänglig förrän du sparar.",
				tooltipNotShared: "Funktionen finns inte tillgänglig förrän du delar.",
				tooltipNotShared2: "Å_Your story isn't shared, only you can access it_______________ö.",
				noPendingChange: "Ingen väntande ändring",
				unSavedChangePlural: "Väntande ändringar",
				closeWithPendingChange: "Är du säker på att du vill bekräfta åtgärden? Dina ändringar sparas inte.",
				saveError: "Det gick inte att spara, försök igen",
				status1: "Berättelsen är delad men det har uppstått vissa problem med den",
				status2: "Berättelsen är inte delad men det har uppstått vissa problem med den",
				status3: "Berättelsen är offentlig",
				status4: "Berättelsen delas inom din organisation",
				status5: "Berättelsen är privat",
				status6: "Berättelsen har inte sparats än",
				checking: "Kontrollerar",
				fix: "Fixa"
			},
			saveError: {
				title: "Det uppstod ett fel när berättelsen skulle sparas",
				err1Div1: "Berättelsen kan inte sparas efter du redan har ett annat objekt med samma namn.",
				err1Div2: "Ändra titeln på berättelsen och spara den sedan.",
				btnOk: "Redigera berättelsens titel"
			},
			saveErrorSocial: {
				title: "Å_Social media sharing update_________ö",
				panel1: "Å_Your storyâ€™s appearance on social media has been improved, but your ArcGIS web application item title is not the same as your story title___________________________________________ö.",
				panel1tooltip: "Å_By defining a title, summary and thumbnail image, your story will look like this_________________________ö:",
				panel2:	"Å_Which title would you like to use on social media________________ö:",
				panel2q1: "Å_Story title (recommended)_________ö",
				panel2q1tooltip: "Å_By choosing this option, your item title will be modified to match your story title and further changes in the builder will be synchronized___________________________________________ö.",
				panel2q2: "Å_Item title____ö",
				panel3: "Å_To further improve how your story looks on social media use ${MYSTORIES} to add a summary and a thumbnail image___________________________________ö.",
				panel4: "Å_Do not warn me again for this story____________ö"
			},
			share: {
				shareTitle: "Dela din berättelse",
				preview: "Förhandsgranska",
				viewlive: "Å_View story____ö",
				btnPrivate: "Privat",
				btnPrivateTooltip: "Bara du kan se berättelsen",
				btnOrg: "Organisation",
				btnOrgTooltip: "Bara medlemmar i din organisation kan se berättelsen",
				btnPublic: "Allmän",
				btnPublicTooltip: "Alla kan se berättelsen",
				loadingMessage: "Kontrollerar om berättelsen innehåller fel",
				viewToggle1: "Visa berättelsens innehåll",
				viewToggle2: "Stäng berättelsens innehåll",
				socialize: "Sociala sammanhang",
				statusPrivate: "Din berättelse är privat. Det är bara du som kan se den.",
				statusError: "Det finns fel i berättelsens innehåll som kommer att märkas för läsarna. Du kan hitta och rätta till problemen nedan.",
				statusNoErrPrivate: "Dela din berättelse när du är klar!",
				mystoriesinvite: "Hantera alla dina berättelser",
				notavailable1: "Tyvärr går det inte att dela din berättelse från byggverktyget, eftersom %PRODUCT% inte är värd för det här programmet.",
				notavailable2: "Tyvärr stöds inte din berättelse från byggverktyget i den här versionen av Portal for ArcGIS (kräver 10.4 eller senare).",
				notavailable3: "Du kan dela din berättelse från %LINK%.",
				notavailable4: "Mina berättelser",
				notavailable5: "Å_its item page_____ö",
				notavailable6: "Det här geoobjektet stöds tyvärr inte i utvecklingsläge. Beroende på hur ditt distributionsscenario ser ut kan det eventuellt finnas stöd för geoobjektet när det har distribuerats.",
				notavailable7: "Besök %MYCONTENT% och kontrollera att de kartor och lager som används i din berättelse även delas.",
				notavailable8: "Mitt innehåll",
				mystoriesinvite2: "Å_To improve how your story looks on social networks use ${MYSTORIES} to add a summary and a thumbnail image_________________________________ö."
			},
			settings: {
				header: "Inställningar",
				tabError: "Kontrollera alla flikar efter fel"
			},
			settingsLayout: {
				title: "Å_Layout___ö",
				explain: "Vilken layout vill du använda?",
				explainInit: "Du kan byta layout när som helst via inställningsdialogrutan.",
				viewExample: "Visa ett liveexempel"
			},
			settingsTheme: {
				title: "Å_Theme___ö"
			},
			settingsHeader: {
				title: "Å_Header___ö",
				logoEsri: "Esris logotyp",
				logoNone: "Ingen logotyp",
				logoCustom: "Egen logotyp",
				logoCustomPlaceholder: "URL (max 250x50 pixlar)",
				logoCustomTargetPlaceholder: "Genomklickningslänkar",
				logoSocialExplain: "Anpassa rubriklänken.",
				logoSocialText: "Text",
				logoSocialLink: "Länk",
				lblSmallHeader: "Använd kompakt rubrik (ingen undertitel)"
			},
			header: {
				title: "Å_Edit the title of your %TPL_NAME%___________ö",
				subtitle: "Redigera undertitel för %TPL_NAME%"
			}
		}
	})
);
