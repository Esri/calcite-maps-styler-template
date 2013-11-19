define(
	({
		viewer: {
			loading: {
				step1: "טעינת אפליקציה",
				step2: "טעינת מידע",
				step3: "מתחיל",
				fail: "סליחה, אך טעינת כלי ה- swipe נכשלה",
				loadBuilder: "החלפה למצב בניה",
				failButton: "נסה שוב"
			},
			errors: {
				boxTitle: "אירעה שגיאה",
				portalSelf: "שגיאה חמורה: נכשל ניסיון לקבל תצורת פורטל",
				invalidConfig: "שגיאה קריטית: קביעת תצורה לא תקינה",
				invalidConfigNoWebmap: "שגיאה קריטית: קביעת תצורה לא תקינה (לא הוגדר web map)",
				createMap: "לא ניתן ליצור מפה",
				invalidApp: "שגיאה קריטית: לא ניתן לטעון את האפליקציה",
				initMobile: "ברוכים הבאים לאפליקצית ה- web של כלי ה- swipe. עדיין לא הוגדרה תצורה לאפליקציה. הבונה האינטראקטיבי לא נמתך במכשירים ניידים.",
				noBuilderIE8: "הבונה האינטראקטיבי של ה- Swipe לא נתמך באינטרנט אקספלורר לפני גרסה 9.",
				noLayerView: "ברוכים הבאים לאפליקצית ה- web של כלי ה- swipe. <br />עדיין לא הוגדרה תצורה לאפליקציה.",
				appSave: "שגיאה בשמירת אפליקצית ה- web",
				mapSave: "שגיאה בשמירת ה- web map",
				notAuthorized: "אינך מורשה לגשת לאפליקציה זו",
				conflictingProjectionsTitle: "היטלים סותרים",
				conflictingProjections: "כלי ה- Swipe לא ישים כאשר ישנם היטלים שונים לשני webmaps. אנא פתח את ההגדרות והשתמש ב- webmap שמשתמשת באותו היטל של ה- webmap הראשון.",
				cpButton: "סגור"
			},
			mobileView: {
				hideIntro: "הסתר הקדמה",
				navLeft: "מקרא",
				navMap: "מפה",
				navRight: "מידע"
			},
			desktopView: {
				storymapsText: "מפת סיפור",
				builderButton: "עבור למצב בנייה",
				bitlyTooltip: "קבל קישור קצר ליישום"
			}
		},
		builder: {
			builder: {
				panelHeader: "קביעת תצורת אפליקציה",
				buttonSave: "שמירה",
				buttonDiscard: "ביטול",
				buttonSettings: "הגדרות",
				buttonView: "מצב צפיה",
				buttonItem: "פתח פריט של אפליקצית web",
				noPendingChange: "אין שינוי לביצוע",
				unSavedChangeSingular: "שינוי אחד שלא נשמר",
				unSavedChangePlural: "שינויים שלא נשמרו",
				popoverDiscard: "האם אתה בטוח שברצונך להיפטר מכל השינויים שלא נשמרו?",
				yes: "כן",
				no: "לא",
				popoverOpenViewExplain: "על ידי פתיחת החלון, תאבד את כל השינויים שלא נשמרו",
				popoverOpenViewOk: "אישור",
				popoverOpenViewCancel: "ביטול",
				popoverSaveWhenDone: "אל תשכח לשמור ברגע שתסיים",
				closeWithPendingChange: "האם הינך בטוח שברצונך לאשר פעולה זו? אתה עלול לאבד את השינויים שביצעת",
				gotIt: "אישור",
				savingApplication: "שמירת אפליקציה",
				saveSuccess: "שמירת אפליקציה בוצעה בהצלחה",
				saveError: "שמירה נכשלה, יש לנסות שוב",
				signIn: "אנא התחבר עם חשבון ב",
				signInTwo: "כדי לשמור את האפליקציה."
			},
			header:{
				editMe: "ערוך אותי !",
				templateTitle: "קבע כותרת תבנית",
				templateSubtitle: "קבע כותרת משנה לתבנית"
			},
			settings: {
				settingsHeader: "הגדרות אפליקציה",
				modalCancel: "ביטול",
				modalApply: "בצע"
			},
			settingsColors: {
				settingsTabColor: "נושא",
				settingsColorExplain: "בחר את נושא האפליקציה או הגדר את הצבעים שלך.",
				settingsLabelColor: "צבעי כותרת עליונה ורקע הפאנל הצידי"
			},
			settingsHeader: {
				settingsTabLogo: "כותרת עליונה",
				settingsLogoExplain: "התאם את הלוגו של הכותרת העליונה (המקסימום הוא 250 x 50 פיקסלים)",
				settingsLogoEsri: "לוגו של Esri",
				settingsLogoNone: "אין לוגו",
				settingsLogoCustom: "לוגו מותאם",
				settingsLogoCustomPlaceholder: "URL של תמונה",
				settingsLogoCustomTargetPlaceholder: "קישור זמין",
				settingsLogoSocialExplain: "התאם הלינק בצד ימין עליון של הכותרת העליונה",
				settingsLogoSocialText: "טקסט",
				settingsLogoSocialLink: "קישור",
				settingsLogoSocialDisabled: "תכונה זו הוגדרה כלא זמינה על ידי המנהל"
			},
			settingsExtent: {
				settingsTabExtent: "תיחום",
				settingsExtentExplain: "בחר את התיחום ההתחלתי באמצעות המפה האינטראקטיבית שלהלן.",
				settingsExtentExplainBottom: "התיחום אותו הגדרת ישנה את התיחום ההתחלתי של ה- web map שלך. שים לב שאם אתה עושה סדרות swipe תיחום זה לא יהיה בשימוש.",
				settingsExtentDateLineError: "התיחום לא יכול להיותבין המרידיאן של קו אורך 180°",
				settingsExtentDateLineError2: "שגיאה בחישוב התיחום",
				settingsExtentDrawBtn: "שרטט תיחום חדש",
				settingsExtentModifyBtn: "ערוך את התיחום הנוכחי",
				settingsExtentApplyBtn: "יישם על המפה המרכזית",
				settingsExtentUseMainMap: "השתמש בתיחום של המפה הראשית"
			}
        },
		swipe: {
			mobileData: {
				noData: "אין נתונים לתצוגה!",
				noDataExplain: "לחץ על המפה בכדי לבחור את הישות וחזור לכאן",
				noDataMap: "אין נתונים עבור מפה זו",
				noPopup: "לא נמצאה חלונית קופצת עבור ישות זו"
			},
			mobileLegend: {
				noLegend: "אין מקרא לתצוגה"
			},
			swipeSidePanel: {
				editTooltip: "קבע את תיאור הפאנל הצידי",
				editMe: "ערוך אותי !",
				legendTitle: "מקרא"
			},
			infoWindow: {
				noFeature: "אין נתונים לתצוגה",
				noFeatureExplain: "לחץ על המפה בכדי לבחור ישות"
			},
			settingsLayout: {
				settingsTabLayout: "סגנון Swipe",
				settingsLayoutExplain: "בחר את הסגנון לכלי ה- swipe",
				settingsLayoutSwipe: "בר אנכי",
				settingsLayoutSpyGlass: "Spyglass",
				settingsLayoutSelected: "תצוגה נבחרת",
				settingsLayoutSelect: "בחר תצוגה זו",
				settingsSaveConfirm: "חלק מהשינויים שלך דורשים שמירה וטעינה מחדש של האפליקציה"
			},
			settingsDataModel: {
				settingsTabDataModel: "כן_Swipe Type_ש",
				settingsDataModelExplainSwipe: "כן_What do you want users to swipe?_ש",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "בחר את השכבה או את ה- web map שתופיע במשקפת.",
				settingsDataModelOneMap: "כן_A layer in a web map_ש",
				settingsDataModel1Explain: "כן_Select the layer you want to be swiped_ש",
				settingsDataModel1Warning: "אם השכבה מוסתרת על ידי שכבות עליונות יותר, לכלי ה- swipe לא תהיה השפעה.",
				settingsDataModel1SpyGlassExplain: "בחר את השכבה שתופיע בתוך ה- spyglass.",
				settingsDataModelTwoMaps: "שני web maps",
				settingsDataModelLayerIds: "ה-  IDs של שכבת ה- Web map",
				settingsDataModelSelected: "הסוג הנבחר",
				settingsDataModelWebmapSwipeId1: "ה- ID של ה- Web map הימני",
				settingsDataModelWebmapSwipeId2: "ה- ID של ה- Web map השמאלי",
				settingsDataModelWebmapGlassId1: "ה- ID של ה- Web map המרכזי",
				settingsDataModelWebmapGlassId2: "ה- ID של ה- Spyglass Web map",
				settingsDataModelSelect: "בחר את הסוג הזה",
				settingsDataModel2Explain: "בצע Swipe באמצעות web map נוסף.",
				settingsDataModel2SpyGlassExplain: "חשוף web map נוסף.",
				settingsDataModel2HelpTitle: "כן_How do I find a web map's ID?_ש",
				settingsDataModel2HelpContent: "העתק והדבק תווים אחרי סימן ה =בכתובת ה- URL של ה- web map"
			},
			settingsLegend: {
				settingsTabLegend: "אפליקצית תצוגה",
				settingsLegendExplain: "בחר את הגדרות תצוגת האפליקציה.",
				settingsLegendEnable: "הדלק מקרא",
				settingsDescriptionEnable: "הדלק תיאור",
				settingsBookmarksEnable: "הדלק סדרת Swipe",
				settingsPopupDisable: "אפשר חלון קופץ",
				settingsLocationSearchEnable: "כן_Enable locator search_ש",
				settingsGeolocatorEnable: "כן_Enable geolocator_ש",
				settingsLegendHelpContent: "כדי לעדן את תוכן המקרא, השתמש בתוכן העניינים של צפיין ה- ArcGIS.com web map (הסתר במקרא)",
				settingsSeriesHelpContent: "כן_Swipe series is a tabbed navigation option that will guide the viewer to a particular extent and display a title and description text in the side panel.  During initial activation, the bookmarks from the web map(s) will be imported and used to pre-populate the series bar.  Disabling the series option turns off the series bar, but the series configuration is preserved for future use._ש", 
				preview: "תצוגה מקדימה של UI",
				settingsLocateButtonExplain: "כן_This functionality if supported on most mobile devices and desktop browsers (including Internet Explorer 9+)._ש",
				settingsLocateButton: "כן_Enable a 'Locate' button supported browsers_ש",
				settingsAddressSearch: "כן_Enable an address search tool_ש"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "חלונית קופצת",
				settingsSwipePopupExplain: "התאם את הניראות של כותרת החלוניות הקופצות בכדי לסייע למשתמש המקשר בין חלוניות קופצות לשכבות מפות.",
				settingsSwipePopupSwipe1: "מפה שמאלית",
				settingsSwipePopupSwipe2: "מפה ימנית",
				settingsSwipePopupGlass1: "מפה מרכזית",
				settingsSwipePopupGlass2: "מפת Spyglass",
				settingsSwipePopupTitle: "תואר כותרת עליונה",
				settingsSwipePopupColor: "צבע כותרת עליונה"
			},
			initPopup: {
				initHeader: "ברוכים הבאים לבונה ה- Swipe",
				modalNext: "הבא",
				modalPrev: "כן_Previous_ש",
				modalApply: "פתח את האפליקציה"
			},
			seriesPanel: {
				title: "כותרת",
				descr: "תיאור",
				discard: "אל תשמור סימניות",
				saveExtent: "הגדר תיחום סימניות",
				discardDisabled: "אינך יכול להסיר סימניה זו. ניתן להפוך סדרות swipe ללא פעילות בהגדרות."
			}
		}
    })
);