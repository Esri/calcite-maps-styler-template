define(
	 ({
		commonCore: {
			common: {
				add: "Tilføj",
				edit: "Redigér",
				save: "Gem",
				next: "Næste",
				cancel: "Annullér",
				back: "Tilbage",
				apply: "Anvend",
				close: "Luk",
				open: "Åbn",
				start: "Start",
				loading: "Indlæser",
				disabledAdmin: "Dette objekt er blevet deaktiveret af administratoren",
				width: "Bredde",
				height: "Højde",
				create: "Opret",
				yes: "Ja",
				no: "Nej",
				mystories: "ø_My Stories____å"
			},
			inlineFieldEdit: {
				editMe: "Redigér mig!"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME% Builder",
				buttonSaving: "Gemmer",
				buttonSaved: "Gemt",
				buttonShare: "Del",
				buttonSettings: "Indstillinger",
				buttonHelp: "Hjælp",
				buttonPreview: "ø_View story____å",
				tooltipFirstSave: "Er ikke tilgængelig, før du har gemt.",
				tooltipNotShared: "Er ikke tilgængelig, før du har delt.",
				tooltipNotShared2: "ø_Your story isn't shared, only you can access it_______________å.",
				noPendingChange: "Ingen ventende ændringer",
				unSavedChangePlural: "Ventende ændringer",
				closeWithPendingChange: "Er du sikker på, at du vil bekræfte denne handling? Dine ændringer vil gå tabt.",
				saveError: "Lagring mislykkedes, prøv igen",
				status1: "Historien deles, men der er problemer med den",
				status2: "Historien deles ikke, men der er problemer med den",
				status3: "Historien er offentlig",
				status4: "Historien deles inden for din organisation",
				status5: "Historien er privat",
				status6: "Historien er endnu ikke gemt",
				checking: "Kontrollerer",
				fix: "Ret"
			},
			saveError: {
				title: "Fejl under lagring af historie",
				err1Div1: "Historien kan ikke gemmes, fordi du allerede har et andet element med det samme navn.",
				err1Div2: "Redigér titlen på din historie, og gem den.",
				btnOk: "Redigér historiens titel"
			},
			saveErrorSocial: {
				title: "ø_Social media sharing update_________å",
				panel1: "ø_Your storyâ€™s appearance on social media has been improved, but your ArcGIS web application item title is not the same as your story title___________________________________________å.",
				panel1tooltip: "ø_By defining a title, summary and thumbnail image, your story will look like this_________________________å:",
				panel2:	"ø_Which title would you like to use on social media________________å:",
				panel2q1: "ø_Story title (recommended)_________å",
				panel2q1tooltip: "ø_By choosing this option, your item title will be modified to match your story title and further changes in the builder will be synchronized___________________________________________å.",
				panel2q2: "ø_Item title____å",
				panel3: "ø_To further improve how your story looks on social media use ${MYSTORIES} to add a summary and a thumbnail image___________________________________å.",
				panel4: "ø_Do not warn me again for this story____________å"
			},
			share: {
				shareTitle: "Del din historie",
				preview: "Eksempel",
				viewlive: "ø_View story____å",
				btnPrivate: "Privat",
				btnPrivateTooltip: "Kun du kan se historien",
				btnOrg: "Organisation",
				btnOrgTooltip: "Kun medlemmer af din organisation kan se historien",
				btnPublic: "Offentlig",
				btnPublicTooltip: "Alle kan se historien",
				loadingMessage: "Kontrollerer din historie for problemer",
				viewToggle1: "Vis historieindhold",
				viewToggle2: "Luk historieindhold",
				socialize: "Vær social",
				statusPrivate: "Din historie er privat, kun du kan se den.",
				statusError: "Der er problemer i historiens indhold, som dine læsere vil lægge mærke til. Du kan identificere og rette disse fejl nedenfor.",
				statusNoErrPrivate: "Del din historie, når du er klar!",
				mystoriesinvite: "Administrér alle dine historier",
				notavailable1: "Beklager, men deling af din historie via builder-programmet understøttes ikke, fordi denne applikation ikke er \"hosted\" i %PRODUCT%.",
				notavailable2: "Beklager, men deling af din historie via builder-programmet understøttes ikke på denne version af Portal for ArcGIS (kræver version 10.4 eller nyere).",
				notavailable3: "Du kan dele denne historie via %LINK%.",
				notavailable4: "Mine historier",
				notavailable5: "ø_its item page_____å",
				notavailable6: "Beklager, men denne funktion understøttes ikke fuldt ud i udviklertilstand. Afhængigt af dit installationsscenarie understøttes denne funktion muligvis, når den installeres.",
				notavailable7: "Sørg for at besøge %MYCONTENT% for at få bekræftet, om de kort og lag, der benyttes i din historie, også deles.",
				notavailable8: "Mit indhold",
				mystoriesinvite2: "ø_To improve how your story looks on social networks use ${MYSTORIES} to add a summary and a thumbnail image_________________________________å."
			},
			settings: {
				header: "Indstillinger",
				tabError: "Kontrollér alle faner for fejl"
			},
			settingsLayout: {
				title: "ø_Layout___å",
				explain: "Hvilket layout ønsker du at bruge?",
				explainInit: "Du kan altid ændre layoutet fra indstillingsdialogboksen.",
				viewExample: "Vis et live-eksempel"
			},
			settingsTheme: {
				title: "ø_Theme___å"
			},
			settingsHeader: {
				title: "ø_Header___å",
				logoEsri: "Esri-logo",
				logoNone: "Intet logo",
				logoCustom: "Brugerdefineret logo",
				logoCustomPlaceholder: "URL (maks. 250x50 pixels)",
				logoCustomTargetPlaceholder: "Klik gennem-link",
				logoSocialExplain: "Tilpas header-linket.",
				logoSocialText: "Tekst",
				logoSocialLink: "Link",
				lblSmallHeader: "Brug kompakt header (ingen undertitel)"
			},
			header: {
				title: "ø_Edit the title of your %TPL_NAME%___________å",
				subtitle: "Redigér undertitlen på din %TPL_NAME%"
			}
		}
	})
);
