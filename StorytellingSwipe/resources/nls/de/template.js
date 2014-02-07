define(
	({
		viewer: {
			loading: {
				step1: "ANWENDUNG WIRD GELADEN",
				step2: "DATEN WERDEN GELADEN",
				step3: "WIRD INITIALISIERT",
				fail: "\"Ausblenden\" konnte leider nicht geladen werden",
				loadBuilder: "ES WIRD ZUM BUILDER-MODUS GEWECHSELT",
				redirectSignIn: "ä_REDIRECTING TO SIGN-IN PAGE_Ü",
				redirectSignIn2: "ä_(you will be redirected here after sign-in)_Ü",
				failButton: "Wiederholen"
			},
			errors: {
				boxTitle: "Ein Fehler ist aufgetreten",
				portalSelf: "Schwerwiegender Fehler: Die Portalkonfiguration konnte nicht abgerufen werden",
				invalidConfig: "Schwerwiegender Fehler: Ungültige Konfiguration",
				invalidConfigNoWebmap: "Schwerwiegender Fehler: Ungültige Konfiguration (keine Webkarte angegeben)",
				createMap: "Karte konnte nicht erstellt werden",
				invalidApp: "Schwerwiegender Fahler: Die Anwendung kann nicht geladen werden",
				initMobile: "Willkommen bei der Webanwendung \"Ausblenden\". Die Anwendung ist nicht konfiguriert. Der interaktive Generator wird auf mobilen Geräten nicht unterstützt.",
				noBuilderIE8: "Der interaktive Generator \"Ausblenden\" wird in Internet Explorer vor Version 9 nicht unterstützt.",
				noLayerView: "Willkommen bei der Webanwendung \"Ausblenden\".<br />Die Anwendung ist noch nicht konfiguriert.",
				appSave: "Fehler beim Speichern der Webanwendung",
				mapSave: "Fehler beim Speichern der Webkarte",
				notAuthorized: "Sie sind nicht autorisiert, auf diese Anwendung zuzugreifen",
				conflictingProjectionsTitle: "In Konflikt stehende Projektionen",
				conflictingProjections: "Für zwei Webkarten mit unterschiedlichen Projektionen kann \"Ausblenden\ nicht verwendet werden. Bitte gehen Sie zu den Einstellungen und wählen Sie eine Webkarte, die die gleiche Projektion wie die erste Webkarte aufweist.",
				cpButton: "Schließen"
			},
			mobileView: {
				hideIntro: "INTRO AUSBLENDEN",
				navLeft: "Legende",
				navMap: "Karte",
				navRight: "Daten"
			},
			desktopView: {
				storymapsText: "Eine Story Map",
				builderButton: "Zum Generator-Modus wechseln",
				bitlyTooltip: "Kurzlink zur Anwendung abrufen"
			}
		},
		builder: {
			builder: {
				panelHeader: "ANWENDUNGSKONFIGURATION",
				buttonSave: "SPEICHERN",
				buttonHelp: "ä_Help_Ü",
				buttonShare: "ä_Share_Ü",
				buttonDiscard: "ABBRECHEN",
				buttonSettings: "Einstellungen",
				buttonView: "Anzeigemodus",
				buttonItem: "Webanwendungselement öffnen",
				noPendingChange: "Keine ausstehende Änderung",
				unSavedChangeSingular: "1 nicht gespeicherte Änderung",
				unSavedChangePlural: "nicht gespeicherte Änderungen",
				popoverDiscard: "Möchten Sie wirklich alle nicht gespeicherten Änderungen verwerfen?",
				yes: "Ja",
				no: "Nein",
				popoverOpenViewExplain: "Durch Öffnen des Viewers gehen alle nicht gespeicherten Änderungen verloren",
				popoverOpenViewOk: "OK",
				popoverOpenViewCancel: "Abbrechen",
				popoverSaveWhenDone: "Denken Sie daran, nach Abschluss des Vorgangs eine Speicherung durchzuführen",
				closeWithPendingChange: "Möchten Sie die Aktion wirklich bestätigen? Ihre Änderungen gehen dabei verloren.",
				gotIt: "OK",
				savingApplication: "Anwendung wird gespeichert",
				saveSuccess: "Anwendung wurde erfolgreich gespeichert",
				saveError: "Speichern fehlgeschlagen, versuchen Sie es erneut",
				saveError2: "ä_Save failed due to an invalid html tag in a name or description_Ü",
				saveError3: "ä_The title can't be empty_Ü",
				signIn: "Melden Sie sich mit einem Konto an,",
				signInTwo: "um die Anwendung zu speichern."
			},
			header:{
				editMe: "Bearbeiten!",
				templateTitle: "Vorlagentitel festlegen",
				templateSubtitle: "Untertitel der Vorlage festlegen"
			},
			settings: {
				settingsHeader: "Anwendungseinstellungen",
				modalCancel: "Abbrechen",
				modalApply: "Übernehmen"
			},
			settingsColors: {
				settingsTabColor: "Design",
				settingsColorExplain: "App-Design auswählen oder eigene Farben definieren.",
				settingsLabelColor: "Hintergrundfarben von Kopfzeile und seitlichem Fenster"
			},
			settingsHeader: {
				settingsTabLogo: "Kopfzeile",
				settingsLogoExplain: "Kopfzeilen-Logo anpassen (max. 250 x 50 Pixel).",
				settingsLogoEsri: "Esri Logo",
				settingsLogoNone: "Kein Logo",
				settingsLogoCustom: "Benutzerdefiniertes Logo",
				settingsLogoCustomPlaceholder: "Bild-URL",
				settingsLogoCustomTargetPlaceholder: "Link zum Durchklicken",
				settingsLogoSocialExplain: "Den Link rechts oben für die Kopfzeile anpassen.",
				settingsLogoSocialText: "Text",
				settingsLogoSocialLink: "Link",
				settingsLogoSocialDisabled: "Diese Funktion wurde vom Administrator deaktiviert"
			},
			settingsExtent: {
				settingsTabExtent: "Ausdehnung",
				settingsExtentExplain: "Die Anfangsausdehnung über die nachstehende interaktive Karte festlegen.",
				settingsExtentExplainBottom: "Die definierte Ausdehnung ändert die Anfangsausdehnung Ihrer Webkarte. Beachten Sie, dass die Ausdehnung nicht verwendet wird, wenn Sie eine Ausblendereihe festlegen.",
				settingsExtentDateLineError: "ä_The extent cannot be across the meridian of 180ï¿½ longitude_Ü",
				settingsExtentDateLineError2: "Fehler beim Berechnen der Ausdehnung",
				settingsExtentDrawBtn: "Eine neue Ausdehnung darstellen",
				settingsExtentModifyBtn: "Die aktuelle Ausdehnung bearbeiten",
				settingsExtentApplyBtn: "Auf Hauptkarte anwenden",
				settingsExtentUseMainMap: "Ausdehnung der Haupkarte verwenden"
			}
        },
		swipe: {
			mobileData: {
				noData: "Keine Daten, die angezeigt werden können!",
				noDataExplain: "Auf die Karte tippen, um ein Feature auszuwählen und hierher zurückzukehren",
				noDataMap: "Keine Daten für diese Karte",
				noPopup: "Kein Pop-up für dieses Feature gefunden"
			},
			mobileLegend: {
				noLegend: "Keine Legende vorhanden."
			},
			swipeSidePanel: {
				editTooltip: "Beschreibung des Seitenfensters festlegen",
				editMe: "Bearbeiten!",
				legendTitle: "Legende"
			},
			infoWindow: {
				noFeature: "Keine anzeigbaren Daten vorhanden",
				noFeatureExplain: "Tippen Sie zum Auswählen eines Features auf die Karte"
			},
			settingsLayout: {
				settingsTabLayout: "Style für \"Ausblenden\"",
				settingsLayoutExplain: "Style für das Werkzeug \"Ausblenden\" auswählen.",
				settingsLayoutSwipe: "Vertikaler Balken",
				settingsLayoutSpyGlass: "Fernglas",
				settingsLayoutSelected: "Ausgewähltes Layout",
				settingsLayoutSelect: "Dieses Layout auswählen",
				settingsSaveConfirm: "Für einige Änderungen muss die Anwendung gespeichert und neu geladen werden"
			},
			settingsDataModel: {
				settingsTabDataModel: "Ausblendungstyp",
				settingsDataModelExplainSwipe: "Welche Elemente sollen Benutzer ausblenden können?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Layer oder Webkarte auswählen, der bzw. die im Fernglas angezeigt werden soll.",
				settingsDataModelOneMap: "Ein Layer in einer Webkarte",
				settingsDataModel1Explain: "Wählen Sie den Layer aus, der ausgeblendet werden soll",
				settingsDataModel1Warning: "Wenn der Layer von darüberliegenden Layern verdeckt wird, hat \"Ausblenden\" keine Wirkung.",
				settingsDataModel1SpyGlassExplain: "Layer auswählen, der im Fernglas angezeigt werden soll.",
				settingsDataModelTwoMaps: "Zwei Webkarten",
				settingsDataModelLayerIds: "Webkarten-Layer-IDs",
				settingsDataModelSelected: "Ausgewählter Typ",
				settingsDataModelWebmapSwipeId1: "ID der rechten Webkarte",
				settingsDataModelWebmapSwipeId2: "ID der linken Webkarte",
				settingsDataModelWebmapGlassId1: "ID der Hauptwebkarte",
				settingsDataModelWebmapGlassId2: "ID der Fernglas-Webkarte",
				settingsDataModelSelect: "Diesen Typ auswählen",
				settingsDataModel2Explain: "Mit anderer Webkarte ausblenden.",
				settingsDataModel2SpyGlassExplain: "Andere Webkarte einblenden.",
				settingsDataModel2HelpTitle: "Suchen der ID einer Webkarte",
				settingsDataModel2HelpContent: "Kopieren Sie die Ziffern nach dem Zeichen '=' in der URL der Webkarte, und fügen Sie sie ein",
				switchMaps: "ä_Switch maps_Ü",
				browseWebMaps: "ä_Browse web maps_Ü"
			},
			settingsLegend: {
				settingsTabLegend: "App-Layout",
				settingsLegendExplain: "Layouteinstellungen der Anwendung auswählen.",
				settingsLegendEnable: "Legende aktivieren",
				settingsDescriptionEnable: "Beschreibung aktivieren",
				settingsBookmarksEnable: "Ausblendereihe aktivieren",
				settingsPopupDisable: "Pop-up aktivieren",
				settingsLocationSearchEnable: "Locator-Suche aktivieren",
				settingsGeolocatorEnable: "Geolocator aktivieren",
				settingsLegendHelpContent: "Verwenden Sie das Inhaltsverzeichnis des ArcGIS.com-Webkarten-Viewers, um den Legendeninhalt zu optimieren (In Legende ausblenden)",
				settingsSeriesHelpContent: "\"Ausblendereihe\" ist die Navigationsoption einer Registerkarte, die den Viewer zu einer bestimmten Ausdehnung führt und einen Titel und einen Beschreibungstext im Seitenfenster anzeigt. Bei der ersten Aktivierung werden Ihre Webkarten-Lesezeichen verwendet, um die Leiste der Reihe vorab auszufüllen. Durch Deaktivieren der Reihen-Option wird die Leiste der Reihen deaktiviert, die Konfiguration der Reihe wird jedoch zur zukünftigen Verwendung beibehalten.", 
				settingsSeriesHelpContent2: "Mit Ausblendereihen können Sie eine Auswahl von Positionen mit zugehörigen Titeln und Texten erstellen und bearbeiten.  Wenn Ihre Webkarte über Lesezeichen verfügt, werden diese angezeigt.  Sie können die Reihen deaktivieren, die Konfiguration wird jedoch zur zukünftigen Verwendung beibehalten.",
				settingsSeriesHelpLink: "Nachfolgend finden Sie ein Beispiel für eine Anwendung mit einer Ausblendereihe",
				preview: "Benutzeroberflächen-Vorschau",
				settingsLocateButtonExplain: "Diese Funktion wird auf den meisten mobilen Geräten und Desktop-Browsern (einschließlich Internet Explorer 9+) unterstützt.",
				settingsLocateButton: "ä_Enable a 'Locate' button on supported browsers_Ü",
				settingsAddressSearch: "Werkzeug für Adressensuche aktivieren"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Pop-up",
				settingsSwipePopupExplain: "Darstellung der Pop-up-Kopfzeile anpassen, damit Benutzer Pop-ups mit Karten-Layern in Verbindung bringen können.",
				settingsSwipePopupSwipe1: "Linke Karte",
				settingsSwipePopupSwipe2: "Rechte Karte",
				settingsSwipePopupGlass1: "Hauptkarte",
				settingsSwipePopupGlass2: "Fernglas-Karte",
				settingsSwipePopupTitle: "Kopfzeilentitel",
				settingsSwipePopupColor: "Kopfzeilenfarbe"
			},
			initPopup: {
				initHeader: "ä_Welcome to the Swipe/Spyglass Builder_Ü",
				modalNext: "Weiter",
				modalPrev: "Zurück",
				modalApply: "App öffnen"
			},
			seriesPanel: {
				title: "Titel",
				descr: "Beschreibung",
				discard: "Lesezeichen verwerfen",
				saveExtent: "Lesezeichenausdehnung festlegen",
				discardDisabled: "Sie können dieses Lesezeichen nicht entfernen. Das Ausblenden von Reihen lässt sich in den Einstellungen deaktivieren."
			},
			helpPopup: {
				title: "ä_Help_Ü",
				close: "ä_Close_Ü",
				tab1: {
					div1: "ä_The Swipe/Spyglass template is designed to compare two seperate web maps or two layers of a single web map in an attractive, easy-to-use web application that can be used in any web browser on any device, including smartphones and tablets._Ü",
					div2: "ä_For additional information on the Swipe/Spyglass template, including examples created by users, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visit the Story Maps website</a>. You can also follow us on Twitter at <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>._Ü",
					div3: "ä_We would love to hear from you! Whether you have a question, want to request a new feature, or think you've found a bug, please visit the <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps User Forum</a>._Ü"
				}
			},
			share: {
				firstSaveTitle: "ä_Application successfully saved_Ü",
				firstSaveHeader: "ä_Your Application is now saved in ArcGIS Online. Please read the following answers to frequent questions._Ü",
				firstSaveA1: "ä_If you are not familiar with ArcGIS Online or want a shortcut to access the authoring interface, you can save the following link: %LINK1%_Ü",
				firstSaveA1bis: "ä_The Application can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>._Ü",
				firstSaveQ2: "ä_Is my Application shared?_Ü",
				firstSaveA2: "ä_Currently your Application is not shared. To share it, use the SHARE button._Ü",
				shareTitle: "ä_Share your Application_Ü",
				sharePrivateHeader: "ä_Your Application is not shared, would you like to share it?_Ü",
				sharePrivateBtn1: "ä_Share publicly_Ü",
				sharePrivateBtn2: "ä_Share with my Organization_Ü",
				sharePrivateProgress: "ä_Sharing in progress..._Ü",
				sharePrivateErr: "ä_Sharing failed, try again or_Ü",
				sharePrivateOk: "ä_Sharing updated successfully, loading..._Ü",
				shareStatus1: "ä_Application is not saved_Ü",
				shareStatus2: "ä_Application is shared publicly_Ü",
				shareStatus3: "ä_Application is shared within the organization_Ü",
				shareStatus4: "ä_Application is not shared_Ü",
				sharePreviewAsUser: "ä_Preview_Ü",
				shareHeader1: "ä_Your Application is <strong>publicly accessible</strong>._Ü",
				shareHeader2: "ä_Your Application is accessible by your organization members (login is required)._Ü",
				shareLinkHeader: "ä_Share the Application with your audience_Ü",
				shareLinkOpen: "ä_OPEN_Ü",
				learnMore: "ä_Learn more_Ü",
				shareQ1Opt1: "ä_How do I keep the Application private?_Ü",
				shareQ1Opt2: "ä_How do I keep the Application private or share it publicly?_Ü",
				shareA1: "ä_Use %SHAREIMG% on <a href='%LINK1%' target='_blank'>the application item page</a>. If you also want to unshare the web map, use <a href='%LINK2%' target='_blank'>the web map item page</a>._Ü",
				shareA1bis: "ä_If you also want to unshare the Feature Service, use <a href='%LINK1%' target='_blank'>the Feature Service item page</a>._Ü",
				shareQ2: "ä_How do I edit the Application later?_Ü",
				shareQ2bis: "ä_How do I get back to the authoring interface?_Ü",
				shareA2div1: "ä_Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the application item page</a>._Ü",
				shareA2div2: "ä_As the owner of the application, when you are signed in on ArcGIS.com, the application includes a button to open the interactive builder:_Ü",				
				shareQ3: "ä_Where is the data stored?_Ü",
				shareA3: "ä_The Application configuration is stored in this web application item</a>._Ü",
				shareWarning: "ä_Sharing %WITH% has been disabled because you are not the owner of the <a href='%LINK%' target='_blank'>webmap</a>._Ü",
 				shareWarningWith1: "ä_publicly_Ü",
 				shareWarningWith2: "ä_publicly and with the Organization_Ü"
			},
			directCreation: {
				header: "ä_Welcome to the Swipe/Spyglass Builder_Ü",
				mapPickHeader: "ä_To get started, please input a valid web map id, or use the search button to browse web maps._Ü",
				launchBuilder: "ä_Launch Builder_Ü"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "ä_My Organization_Ü",
					onlineLabel: "ä_ArcGIS Online_Ü",
					contentLabel: "ä_My Content_Ü",
					favoritesLabel: "ä_My Favorites_Ü"
				},
				title: "ä_Select Web Map_Ü",
				searchTitle: "ä_Search_Ü",
				ok: "ä_Ok_Ü",
				cancel: "ä_Cancel_Ü",
				placeholder: "ä_Enter search term_Ü"
			}
		}
    })
);