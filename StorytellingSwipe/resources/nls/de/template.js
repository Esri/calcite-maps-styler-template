define(
	 ({
		viewer: {
			loading: {
				step1: "STORY WIRD GELADEN",
				step2: "DATEN WERDEN GELADEN",
				step3: "WIRD INITIALISIERT",
				fail: "\"Ausblenden\" konnte leider nicht geladen werden",
				loadBuilder: "ES WIRD ZUM BUILDER-MODUS GEWECHSELT",
				redirectSignIn: "UMLEITUNG ZUR ANMELDESEITE",
				redirectSignIn2: "(Sie werden nach der Anmeldung hierher umgeleitet)",
				failButton: "Wiederholen"
			},
			errors: {
				boxTitle: "Ein Fehler ist aufgetreten",
				portalSelf: "Schwerwiegender Fehler: Die Portalkonfiguration konnte nicht abgerufen werden",
				invalidConfig: "Schwerwiegender Fehler: Ungültige Konfiguration",
				invalidConfigNoWebmap: "ä_Fatal error: Invalid configuration (web map or application identifier not specified in index.html)______________________________Ü",
				invalidConfigNoAppDev: "ä_No Web Mapping Application identifier or webmap are specified in URL parameters (?appid= or ?webmap=). In development mode, the appid and webmap configuration in index.html are ignored_________________________________________________________Ü.",
				createMap: "Karte konnte nicht erstellt werden",
				invalidApp: "Schwerwiegender Fahler: Die Story kann nicht geladen werden",
				initMobile: "Willkommen bei der Webanwendung \"Ausblenden\". Die Anwendung ist nicht konfiguriert. Der interaktive Generator wird auf mobilen Geräten nicht unterstützt.",
				initMobile2: "ä_The Swipe builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen_____________________________________________________Ü.",
				initMobile3: "ä_Please rotate your device to landscape orientation to use the Swipe builder________________________Ü.",
				noBuilderIE8: "Der interaktive Generator \"Ausblenden\" wird in Internet Explorer vor Version 9 nicht unterstützt.",
				noLayerView: "Willkommen bei der Webanwendung \"Ausblenden\".<br />Die Anwendung ist noch nicht konfiguriert.",
				appSave: "Fehler beim Speichern der Webstory",
				mapSave: "Fehler beim Speichern der Webkarte",
				notAuthorized: "Sie sind nicht autorisiert, auf diese Story zuzugreifen.",
				notAuthorizedBuilder: "ä_You are not authorized to use Swipe and Spyglass builder__________________Ü.",
				conflictingProjectionsTitle: "In Konflikt stehende Projektionen",
				conflictingProjections: "Für zwei Webkarten mit unterschiedlichen Projektionen kann \"Ausblenden\ nicht verwendet werden. Bitte gehen Sie zu den Einstellungen und wählen Sie eine Webkarte, die die gleiche Projektion wie die erste Webkarte aufweist.",
				cpButton: "Schließen",
				unspecifiedConfigOwner: "Autorisierter Besitzer wurde nicht konfiguriert.",
				invalidConfigOwner: "Besitzer der Story ist nicht autorisiert."
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
				facebookTooltip: "Auf Facebook freigeben",
				twitterTooltip: "Auf Twitter freigeben",
				bitlyTooltip: "Kurzlink abrufen",
				tooltipAutoplayDisabled: "ä_This isn't available in autoplay mode____________Ü",
				autoplayLabel: "ä_Autoplay mode_____Ü",
				autoplayExplain1: "ä_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________Ü.",
				autoplayExplain2: "ä_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________Ü."
			}
		},
		builder: {
			builder: {
				panelHeader: "STORY-KONFIGURATION",
				buttonSave: "SPEICHERN",
				buttonHelp: "Hilfe",
				buttonShare: "Freigeben",
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
				popoverSaveWhenDone: "Vergessen Sie nicht zu speichern, wenn Sie fertig sind",
				closeWithPendingChange: "Möchten Sie die Aktion wirklich bestätigen? Ihre Änderungen gehen dabei verloren.",
				gotIt: "OK",
				savingApplication: "Story wird gespeichert",
				saveSuccess: "ä_Story saved____Ü",
				saveError: "Speichern fehlgeschlagen, versuchen Sie es erneut",
				saveError2: "Fehler beim Speichern aufgrund eines ungültigen HTML-Tags in einem Namen oder einer Beschreibung",
				saveError3: "Der Titel darf nicht leer sein",
				signIn: "Melden Sie sich mit einem Konto an,",
				signInTwo: ", um die Story zu speichern."
			},
			header:{
				editMe: "Bearbeiten!",
				templateTitle: "Vorlagentitel festlegen",
				templateSubtitle: "Untertitel der Vorlage festlegen"
			},
			settings: {
				settingsHeader: "Story-Einstellungen",
				modalCancel: "Abbrechen",
				modalApply: "Übernehmen"
			},
			settingsColors: {
				settingsTabColor: "Design",
				settingsColorExplain: "App-Design auswählen oder eigene Farben definieren.",
				settingsLabelColor: "Hintergrundfarben von Kopfzeile und seitlichem Bereich"
			},
			settingsHeader: {
				settingsTabLogo: "Kopfzeile",
				settingsLogoExplain: "Kopfzeilen-Logo anpassen (max. 250 x 50 Pixel).",
				settingsLogoEsri: "Esri Logo",
				settingsLogoNone: "Kein Logo",
				settingsLogoCustom: "Benutzerdefiniertes Logo",
				settingsLogoCustomPlaceholder: "Bild-URL",
				settingsLogoCustomTargetPlaceholder: "Ziel-URL",
				settingsLogoSocialExplain: "Den Link rechts oben für die Kopfzeile anpassen.",
				settingsLogoSocialText: "Text",
				settingsLogoSocialLink: "Link",
				settingsLogoSocialDisabled: "Diese Funktion wurde vom Administrator deaktiviert"
			},
			settingsExtent: {
				settingsTabExtent: "Ausdehnung",
				settingsExtentExplain: "Die Anfangsausdehnung über die nachstehende interaktive Karte festlegen.",
				settingsExtentExplainBottom: "Die definierte Ausdehnung ändert die Anfangsausdehnung Ihrer Webkarte. Beachten Sie, dass die Ausdehnung nicht verwendet wird, wenn Sie eine Ausblendereihe festlegen.",
				settingsExtentDateLineError: "Die Ausdehnung darf nicht über den Meridian von 180ï¿½ Längengrad hinausreichen",
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
				editTooltip: "Beschreibung des Seitenbereichs festlegen",
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
				settingsSaveConfirm: "Für einige Änderungen muss die Story gespeichert und neu geladen werden"
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
				settingsDataModel2HelpContent: "Kopieren Sie die Ziffern nach dem Zeichen \'=\' in der URL der Webkarte, und fügen Sie sie ein",
				switchMaps: "Karten wechseln",
				browseWebMaps: "Webkarten durchsuchen"
			},
			settingsLegend: {
				settingsTabLegend: "App-Layout",
				settingsLegendExplain: "Wählen Sie die Layouteinstellungen aus.",
				settingsLegendEnable: "Legende aktivieren",
				settingsDescriptionEnable: "Beschreibung aktivieren",
				settingsBookmarksEnable: "Ausblendereihe aktivieren",
				settingsPopupDisable: "ä_Enable pop-up_____Ü",
				settingsLocationSearchEnable: "Locator-Suche aktivieren",
				settingsGeolocatorEnable: "Geolocator aktivieren",
				settingsLegendHelpContent: "ä_To refine the legend content, use the ArcGIS web map viewer table of contents (Hide in Legend)_____________________________Ü",
				settingsSeriesHelpContent: "\"Ausblendereihe\" ist die Navigationsoption einer Registerkarte, die den Viewer zu einer bestimmten Ausdehnung führt und einen Titel und einen Beschreibungstext im Seitenbereich anzeigt. Bei der ersten Aktivierung werden Ihre Webkarten-Lesezeichen verwendet, um die Leiste der Reihe vorab auszufüllen. Durch Deaktivieren der Reihen-Option wird die Leiste der Reihen deaktiviert, die Konfiguration der Reihe wird jedoch zur zukünftigen Verwendung beibehalten.",
				settingsSeriesHelpContent2: "Mit Ausblendereihen können Sie eine Auswahl von Positionen mit zugehörigen Titeln und Texten erstellen und bearbeiten.  Wenn Ihre Webkarte über Lesezeichen verfügt, werden diese angezeigt.  Sie können die Reihen deaktivieren, die Konfiguration wird jedoch zur zukünftigen Verwendung beibehalten.",
				settingsSeriesHelpLink: "Nachfolgend finden Sie ein Beispiel für eine Anwendung mit einer Ausblendereihe",
				preview: "Benutzeroberflächen-Vorschau",
				settingsLocateButtonExplain: "Diese Funktion wird auf den meisten mobilen Geräten und Desktop-Browsern (einschließlich Internet Explorer 9+) unterstützt.",
				settingsLocateButton: "Schaltfläche \"Suchen\" für unterstützte Browser aktivieren",
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
				initHeader: "Willkommen beim Ausblenden/Fernglas-Generator",
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
				title: "Hilfe",
				close: "Schließen",
				tab1: {
					div1: "Mit der Vorlage Ausblenden/Fernglas können zwei getrennte Webkarten oder zwei Layer einer einzelnen Webkarte in einer ansprechenden, benutzerfreundlichen Webanwendung verglichen werden. Sie kann in jedem Webbrowser auf einem beliebigen Gerät, einschließlich Smartphones und Tablets verwendet werden.",
					div2: "Zusätzliche Informationen zur Vorlage Ausblenden/Fernglas, darunter von Benutzern erstellte Beispiele, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> finden Sie auf der Story Maps-Website</a>. Sie können uns unter <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a> auch auf Twitter folgen.",
					div3: "Wir freuen uns darauf, von Ihnen zu hören! Ob Sie eine Frage haben, ein neues Feature anfordern möchten oder einen Fehler gefunden haben, besuchen Sie das <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps-Benutzerforum</a>."
				}
			},
			share: {
				firstSaveTitle: "ä_Story saved____Ü",
				manageStory: "ä_Manage your story______Ü",
				manageStoryA1: "ä_Tip: You can use %LINK1% to check your story for errors and change how its components are shared. My Stories also helps you make your story look good when it is shared on social networks. You can learn about other useful features of My Stories in these %LINK2%_______________________________________________________________________________Ü.",
				manageStoryA1V1: "ä_My Stories____Ü",
				manageStoryA1V2: "ä_blog posts____Ü",
				shareTitle: "Story freigeben",
				sharePrivateHeader: "Ihre Story ist nicht freigegeben. Möchten Sie sie freigeben?",
				sharePrivateBtn1: "Öffentlich freigeben",
				sharePrivateBtn2: "Für meine Organisation freigeben",
				sharePrivateProgress: "Freigabe wird ausgeführt...",
				sharePrivateErr: "Fehler bei der Freigabe. Versuchen Sie es erneut, oder",
				sharePrivateOk: "ä_Sharing updated, loading_________Ü...",
				shareStatus1: "Story wurde nicht gespeichert",
				shareStatus2: "Story wurde öffentlich freigegeben",
				shareStatus3: "Die Story wurde in der Organisation freigegeben",
				shareStatus4: "Story wurde nicht freigegeben",
				sharePreviewAsUser: "Vorschau",
				shareHeader1: "Ihre Story ist <strong>öffentlich zugänglich</strong>.",
				shareHeader2: "Ihre Story ist für die Mitglieder Ihrer Organisation zugänglich (Anmeldung ist erforderlich).",
				shareLinkHeader: "ä_Share your story______Ü",
				shareLinkOpen: "ÖFFNEN",
				learnMore: "Weitere Informationen",
				shareA1: "Verwenden Sie %SHAREIMG% auf <a href='%LINK1%' target='_blank'>der Elementseite der Anwendung</a>. Wenn Sie die Freigabe der Webkarte ebenfalls aufheben möchten, verwenden Sie <a href='%LINK2%' target='_blank'>die Elementseite der Webkarte</a>.",
				shareWarning: "Die Freigabe von %WITH% wurde deaktiviert, da Sie nicht der Besitzer der <a href='%LINK%' target='_blank'>Webkarte</a> sind.",
				shareWarningWith1: "ä_publicly___Ü",
				shareWarningWith2: "ä_publicly and with the Organization___________Ü"
			},
			directCreation: {
				header: "Willkommen beim Ausblenden/Fernglas-Generator",
				mapPickHeader: "Um zu beginnen, geben Sie eine gültige Webkarten-ID ein, oder verwenden Sie die Schaltfläche \"Suchen\", um Webkarten zu durchsuchen.",
				launchBuilder: "Generator starten",
				chooseWebmapLbl: "Webkarte auswählen...",
				explain2: "ä_To create a Swipe or Spyglass story map, use the button below to choose the existing web map you want to use. Alternatively, you can paste the ID of the web map into the field below________________________________________________________Ü.",
				explain3: "Wenn Sie zwei Webkarten in der Story Map verwenden möchten, werden Sie bei Auswahl dieser Option später zur Eingabe der zweiten Webkarte aufgefordert.",
				webmapPlaceholder: "Webkarten-ID eingeben..."
			},
			saveErrorSocial: {
				title: "ä_Social media sharing update_________Ü",
				panel1: "ä_Your storyâ€™s appearance on social media has been improved, but your ArcGIS web application item title is not the same as your story title___________________________________________Ü.",
				panel1tooltip: "ä_By defining a title, summary and thumbnail image, your story will look like this_________________________Ü:",
				panel2:	"ä_Which title would you like to use on social media________________Ü:",
				panel2q1: "ä_Story title (recommended)_________Ü",
				panel2q1tooltip: "ä_By choosing this option, your item title will be modified to match your story title and further changes in the builder will be synchronized___________________________________________Ü.",
				panel2q2: "ä_Item title____Ü",
				panel3: "ä_To further improve how your story looks on social media use ${MYSTORIES} to add a summary and a thumbnail image___________________________________Ü.",
				panel4: "ä_Do not warn me again for this story____________Ü",
				mystories: "ä_My Stories____Ü",
				btnSave: "ä_Save__Ü"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Eigene Organisation",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Eigene Inhalte",
					favoritesLabel: "Eigene Favoriten"
				},
				title: "ä_Select Web Map_____Ü",
				searchTitle: "Suchen",
				ok: "OK",
				cancel: "Abbrechen",
				placeholder: "Suchbegriff eingeben"
			}
		}
    })
);
