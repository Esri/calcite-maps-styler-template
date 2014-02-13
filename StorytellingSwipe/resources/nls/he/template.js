define(
	({
		viewer: {
			loading: {
				step1: "טעינת אפליקציה",
				step2: "טעינת מידע",
				step3: "מתחיל",
				fail: "סליחה, אך טעינת כלי ה- swipe נכשלה",
				loadBuilder: "החלפה למצב בניה",
				redirectSignIn: "הפניה לדף ההתחברות",
				redirectSignIn2: "(תופנה מחדש לאחר ההתחברות)",
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
				bitlyTooltip: "קבל קישור קצר לאפליקציה"
			}
		},
		builder: {
			builder: {
				panelHeader: "קביעת תצורת אפליקציה",
				buttonSave: "שמירה",
				buttonHelp: "עזרה",
				buttonShare: "שיתוף",
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
				saveError2: "כן_Save failed due to an invalid html tag in a name or description_ש",
				saveError3: "כן_The title can't be empty_ש",
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
				settingsLogoExplain: "התאם את הלוגו של הכותרת העליונה (המקסימום הוא 250 x‏ 50 פיקסלים)",
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
				settingsExtentDateLineError: "התיחום לא יכול להיות על המרידיאן של קו אורך 180ï¿½",
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
				settingsTabDataModel: "סוג Swipe",
				settingsDataModelExplainSwipe: "למה אתה רוצה שמשתמשים יבצעו swipe?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "בחר את השכבה או את ה- web map שיופיע ב spyglass.",
				settingsDataModelOneMap: "שכבה ב- web map",
				settingsDataModel1Explain: "בחר שכבה שתנוהל על ידי כלי ה- swipe.",
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
				settingsDataModel2HelpTitle: "כיצד למצוא את ה- ID של ה- web map",
				settingsDataModel2HelpContent: "העתק והדבק תווים אחרי סימן ה =בכתובת ה- URL של ה- web map",
				switchMaps: "החלף מפות",
				browseWebMaps: "עיין ב web maps"
			},
			settingsLegend: {
				settingsTabLegend: "אפליקצית תצוגה",
				settingsLegendExplain: "בחר את הגדרות תצוגת האפליקציה.",
				settingsLegendEnable: "הדלק מקרא",
				settingsDescriptionEnable: "הדלק תיאור",
				settingsBookmarksEnable: "הדלק סדרת Swipe",
				settingsPopupDisable: "אפשר חלון קופץ",
				settingsLocationSearchEnable: "הפעל חיפוש עיגון כתובות",
				settingsGeolocatorEnable: "הפעל חיפוש מרחבי",
				settingsLegendHelpContent: "כדי לעדן את תוכן המקרא, השתמש בתוכן העניינים של צפיין ה- ArcGIS.com web map (הסתר במקרא)",
				settingsSeriesHelpContent: "Swipe להסדרות היא אפשרות ניווט באמצעות כרטיסיות שתדריך את הצופה לתיחום מסוים והצג הכותרת וטקסט תיאור בפאנל בצד. במהלך הפעלה ראשונית, סימניות מה- web map ייבוא וישמשו לאכלוס מראש של מוט הסדרה. הפסקת אפשרות הסדרה מכבה את מוט הסדרה, אבל תצורת הסדרות נשמרת לשימוש עתידי.", 
				settingsSeriesHelpContent2: "סדרת ה-Swipe מאפשרת לך ליצור ולערוך מבחר מיקומים מלווים בכיתוביות כותרות וטקסט. אם ל- web map יש סימניות, הן יוצגו. אתה יכול לבטל את הסדרה, אך ההגדרות תישמרנה לשימוש עתידי.",
				settingsSeriesHelpLink: "ראה כאן דוגמא לאלפליקציה עם סדרת ה-Swipe",
				preview: "תצוגה מקדימה של UI",
				settingsLocateButtonExplain: "פונקציונליות זו נתמכת ברוב המכשירים הניידים ובדפדפנים השולחניים (Internet Explorer 9).",
				settingsLocateButton: "הפוך לפעיל את כפתור 'איתור' לדפדפנים נתמכים",
				settingsAddressSearch: "הפוך לפעיל כלי חיפוש כתובת"
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
				initHeader: "כן_Welcome to the Swipe/Spyglass Builder_ש",
				modalNext: "הבא",
				modalPrev: "קודם",
				modalApply: "פתח את האפליקציה"
			},
			seriesPanel: {
				title: "כותרת",
				descr: "תיאור",
				discard: "אל תשמור סימניות",
				saveExtent: "הגדר תיחום סימניות",
				discardDisabled: "אינך יכול להסיר סימניה זו. ניתן להפוך סדרות swipe ללא פעילות בהגדרות."
			},
			helpPopup: {
				title: "עזרה",
				close: "סגור",
				tab1: {
					div1: "תבנית ה Swipe/Spyglass  להשוואה בין שני web maps או בין שתי שכבות של web map בודד באופן, באפליקצית web קלה לשימוש בה ניתן להשתמש מכל דפדפן על כל מכשיר, כולל טלפונים חכמים וטאבלטים.",
					div2: "כן_For additional information on the Swipe/Spyglass template, including examples created by users, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visit the Story Maps website</a>. You can also follow us on Twitter at <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>._ש",
					div3: "נשמח לשמוע ממך! בין אם יש לך שאלה, רוצה לבקש יכולת חדשה, או חושב שמצאת באג, אנא בקר ב- <a href='http://links.esri.com/storymaps/forum' target='_blank'>פורום המשתמשים של מפות סיפור</a>."
				}
			},
			share: {
				firstSaveTitle: "האפליקציה נשמרה בהצלחה",
				firstSaveHeader: "האפליקציה נשמרה כעת ב- ArcGIS Online . אנא קרא את התשובות לשאלות השכיחות הבאות.",
				firstSaveA1: "אם אינך מכיר את ArcGIS Online או שאתה מעוניין בקיצור דרך לממשק העריכה, אתה יכול לשמור את הלינק הבא: %LINK1%",
				firstSaveA1bis: "ניתן למצוא את האפליקציה גם ב- <a href='%LINK2%' target='_blank'>מחיצת התוכן של ArcGIS Online </a>.",
				firstSaveQ2: "האם האפליקציה שלי נמצאת בשיתוף?",
				firstSaveA2: "כעת האפליקציה שלך אינה משותפת. כדי לשתף אותה, השתמש בכפתור שתף.",
				shareTitle: "שתף את האפליקציה שלך",
				sharePrivateHeader: "האפליקציה שלך אינה משותפת, ​​היית רוצה לשתף אותה?",
				sharePrivateBtn1: "שתף באופן ציבורי",
				sharePrivateBtn2: "שתף עם הארגון שלי",
				sharePrivateProgress: "שיתוף בתהליך...",
				sharePrivateErr: "השיתוף נכשל, נסה שנית או",
				sharePrivateOk: "עדכון השיתוף הצליח, טוען...",
				shareStatus1: "האפליקציה לא נשמרה",
				shareStatus2: "האפליקציה משותפת לציבור",
				shareStatus3: "האפליקציה משותפת לארגון",
				shareStatus4: "האפליקציה לא משותפת",
				sharePreviewAsUser: "תצוגה מקדימה",
				shareHeader1: "האפליקציה שלך <strong>נגישה לציבור</strong>.",
				shareHeader2: "האפליקציה שלך נגישה לחברי הארגון שלך (נדרש להתחבר).",
				shareLinkHeader: "שתף את האפליקציה עם קהל המטרה שלך",
				shareLinkOpen: "פתח",
				learnMore: "מידע נוסף",
				shareQ1Opt1: "כיצד אני יכול לשמור את האפליקציה פרטית?",
				shareQ1Opt2: "כיצד אני יכול לשמור את האפליקציה פרטית או לשתף אותה לציבור?",
				shareA1: "השתמש ב- %SHAREIMG% ב- <a href='%LINK1%' target='_blank'>דף פריט האפליקציה</a>. אם אתה רוצה גם לבטל את שיתוף של ה- webmap, השתמש ב- <a href='%LINK2%' target='_blank'>דף פריט webmap</a>.",
				shareA1bis: "אם אתה רוצה לבטל גם את השיתוף לשירות הישויות, השתמש <a href='%LINK1%' target='_blank'>דף פריט שירות הישויות</a>.",
				shareQ2: "כיצד אני יכול לערוך את האפליקציה מאוחר יותר?",
				shareQ2bis: "כיצד אני יכול לחזור לממשק העריכה?",
				shareA2div1: "שמור והשתמש שוב בקישור הבא %LINK1% או השתמש ב- <a href='%LINK2%' target='_blank'>דף פריט האפליקציה</a>.",
				shareA2div2: "כבעלים של האפליקציה, כאשר אתה מתחבר אל ArcGIS.com האפליקציה כוללת כפתור הפותח את הבונה האינטראקטיבי.",				
				shareQ3: "היכן מאוחסן המידע?",
				shareA3: "תצורת האפליקציה אינה שמורה בפריט  web application</a> זה.",
				shareWarning: "כן_Sharing %WITH% has been disabled because you are not the owner of the <a href='%LINK%' target='_blank'>webmap</a>._ש",
 				shareWarningWith1: "כן_publicly_ש",
 				shareWarningWith2: "כן_publicly and with the Organization_ש"
			},
			directCreation: {
				header: "ברוך הבא ל Swipe/Spyglass Builder",
				mapPickHeader: "כדי להתחיל, אנא בחר מזהה web map תקין, או השתמש בכפתור החיפוש כדי למצא web maps.",
				launchBuilder: "התחל Builder",
				chooseWebmapLbl: "כן_Choose web map..._ש",
				explain2: "כן_To create a Swipe or Spyglass story map, use the button below to choose the existing ArcGIS Online web map you want to use. Alternatively, you can paste the ID of the web map into the field below._ש",
				explain3: "כן_If you want to use two web maps in your story map, you'll be prompted for the second web map later when you choose that option._ש",
				webmapPlaceholder: "כן_Enter a web map id..._ש"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "הארגון שלי",
					onlineLabel: "ArcGIS Online",
					contentLabel: "התוכן שלי",
					favoritesLabel: "המועדפים שלי"
				},
				title: "בחר Web Map",
				searchTitle: "חפש",
				ok: "אישור",
				cancel: "ביטול",
				placeholder: "הכנס מונח לחיפוש"
			}
		}
    })
);