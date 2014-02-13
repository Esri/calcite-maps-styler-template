define(
	({
		viewer: {
			loading: {
				step1: "טעינת אפליקציה",
				step2: "טעינת מידע",
				step3: "מתחיל",
				fail: "סליחה, אך טעינת כלי ה- swipe נכשלה",
				loadBuilder: "החלפה למצב בניה",
				redirectSignIn: "כן_REDIRECTING TO SIGN-IN PAGE_ש",
				redirectSignIn2: "כן_(you will be redirected here after sign-in)_ש",
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
				buttonHelp: "כן_Help_ש",
				buttonShare: "כן_Share_ש",
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
				settingsExtentDateLineError: "כן_The extent cannot be across the meridian of 180ï¿½ longitude_ש",
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
				settingsDataModelExplainSpyGlass: "בחר את השכבה או את ה- web map שתופיע במשקפת.",
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
				switchMaps: "כן_Switch maps_ש",
				browseWebMaps: "כן_Browse web maps_ש"
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
				settingsLocateButton: "כן_Enable a 'Locate' button on supported browsers_ש",
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
				title: "כן_Help_ש",
				close: "כן_Close_ש",
				tab1: {
					div1: "כן_The Swipe/Spyglass template is designed to compare two seperate web maps or two layers of a single web map in an attractive, easy-to-use web application that can be used in any web browser on any device, including smartphones and tablets._ש",
					div2: "כן_For additional information on the Swipe/Spyglass template, including examples created by users, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visit the Story Maps website</a>. You can also follow us on Twitter at <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>._ש",
					div3: "כן_We would love to hear from you! Whether you have a question, want to request a new feature, or think you've found a bug, please visit the <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps User Forum</a>._ש"
				}
			},
			share: {
				firstSaveTitle: "כן_Application successfully saved_ש",
				firstSaveHeader: "כן_Your Application is now saved in ArcGIS Online. Please read the following answers to frequent questions._ש",
				firstSaveA1: "כן_If you are not familiar with ArcGIS Online or want a shortcut to access the authoring interface, you can save the following link: %LINK1%_ש",
				firstSaveA1bis: "כן_The Application can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>._ש",
				firstSaveQ2: "כן_Is my Application shared?_ש",
				firstSaveA2: "כן_Currently your Application is not shared. To share it, use the SHARE button._ש",
				shareTitle: "כן_Share your Application_ש",
				sharePrivateHeader: "כן_Your Application is not shared, would you like to share it?_ש",
				sharePrivateBtn1: "כן_Share publicly_ש",
				sharePrivateBtn2: "כן_Share with my Organization_ש",
				sharePrivateProgress: "כן_Sharing in progress..._ש",
				sharePrivateErr: "כן_Sharing failed, try again or_ש",
				sharePrivateOk: "כן_Sharing updated successfully, loading..._ש",
				shareStatus1: "כן_Application is not saved_ש",
				shareStatus2: "כן_Application is shared publicly_ש",
				shareStatus3: "כן_Application is shared within the organization_ש",
				shareStatus4: "כן_Application is not shared_ש",
				sharePreviewAsUser: "כן_Preview_ש",
				shareHeader1: "כן_Your Application is <strong>publicly accessible</strong>._ש",
				shareHeader2: "כן_Your Application is accessible by your organization members (login is required)._ש",
				shareLinkHeader: "כן_Share the Application with your audience_ש",
				shareLinkOpen: "כן_OPEN_ש",
				learnMore: "כן_Learn more_ש",
				shareQ1Opt1: "כן_How do I keep the Application private?_ש",
				shareQ1Opt2: "כן_How do I keep the Application private or share it publicly?_ש",
				shareA1: "כן_Use %SHAREIMG% on <a href='%LINK1%' target='_blank'>the application item page</a>. If you also want to unshare the web map, use <a href='%LINK2%' target='_blank'>the web map item page</a>._ש",
				shareA1bis: "כן_If you also want to unshare the Feature Service, use <a href='%LINK1%' target='_blank'>the Feature Service item page</a>._ש",
				shareQ2: "כן_How do I edit the Application later?_ש",
				shareQ2bis: "כן_How do I get back to the authoring interface?_ש",
				shareA2div1: "כן_Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the application item page</a>._ש",
				shareA2div2: "כן_As the owner of the application, when you are signed in on ArcGIS.com, the application includes a button to open the interactive builder:_ש",				
				shareQ3: "כן_Where is the data stored?_ש",
				shareA3: "כן_The Application configuration is stored in this web application item</a>._ש",
				shareWarning: "כן_Sharing %WITH% has been disabled because you are not the owner of the <a href='%LINK%' target='_blank'>webmap</a>._ש",
 				shareWarningWith1: "כן_publicly_ש",
 				shareWarningWith2: "כן_publicly and with the Organization_ש"
			},
			directCreation: {
				header: "כן_Welcome to the Swipe/Spyglass Builder_ש",
				mapPickHeader: "כן_To get started, please input a valid web map id, or use the search button to browse web maps._ש",
				launchBuilder: "כן_Launch Builder_ש"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "כן_My Organization_ש",
					onlineLabel: "כן_ArcGIS Online_ש",
					contentLabel: "כן_My Content_ש",
					favoritesLabel: "כן_My Favorites_ש"
				},
				title: "כן_Select Web Map_ש",
				searchTitle: "כן_Search_ש",
				ok: "כן_Ok_ש",
				cancel: "כן_Cancel_ש",
				placeholder: "כן_Enter search term_ש"
			}
		}
    })
);