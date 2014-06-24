define(
	 ({
		builder: {
			layouts: {
				mainStage: "Main Stage",
				sideTitle: "פאנל בצד",
				sideDescr: "תצוגה לסיפור מלל אינטנסיבי שמצטיין בשילוב תמונות, קטעי הווידאו ומפות בהודעה ברורה וממוקדת.",
				floatTitle: "פאנל צף",
				floatDescr: "תצוגת מפה שמדגישה את הקרטוגרפיה ובמקביל פאנל טקסט שקוף מסייע לספר סיפור."
			},
			common: {
				lblStatus1: "פורסם",
				lblStatus2: "טיוטה",
				lblStatus3: "מוסתר"
			},
			settingsLayoutOptions: {
				title: "אפשרויות תצוגת המפה",
				cfgLeft: "שמאל",
				cfgRight: "ימין",
				cfgSmall: "קטן",
				cfgMedium: "בינוני",
				cfgLarge: "גדול",
				socialLinksLabel: "הצג את הקישורים השיתופיים בחלק התחתון של כל קטע",
				socialLinksDescr: "זה מאפשר לקוראים להתיחס ולקדם חלקים מסוימים של ה- %TPL_NAME% שלך. לדוגמא, אם אתה משתמש בסמל שיתוף קטעים, הקוראים יגיעו לקטע ספציפי ב- %TPL_NAME% במקום להגיע לתחילת הסיפור. הקוראים שלך יכולים להשתמש בקישור למדיות חברתיות  בקטע הכותרת כדי לקדם את כל ה- %TPL_NAME% (טאב הכותרת) ויעזור להם להגיע ל- %TPL_NAME%."
			},
			initPopup: {
				title: "ברועים הבאים ל-"
			},
			addEditPopup: {
				disabled: "כן_Add Section is disabled because the maximum number of allowed sections has been reached._ש",
				titleAdd: "הוסף קטע",
				titleAddHome: "כן_Add Home Section_ש",
				titleEdit: "ערוך קטע",
				step: "צעד",
				stepMainStageExplain: "כן_Main Stage Content_ש",
				stepPanelExplain: "כן_Content_ש",
				stepMainStageNextTooltip: "הכנס כותרת הקטע ובחר את תכולת ה Main Stage",
				step2NextTooltip: "הכנס את כותרת הקטע ותכולת %LAYOUT-TYPE%",
				stepNextTooltipNext: "התקדם לשלב הבא",
				stepNextTooltipAdd: "להוספת הקטע",
				firstAddExplain: "כן_This first section is your Home Section, think of it as the 'cover page' to your story. The title you just defined will be displayed with large fonts._ש",
				firstAddLeanMore: "כן_Learn More_ש",
				titlePlaceholder: "כותרת הקטע..."
			},
			addEditViewText: {
				editorPlaceholder: "הוסף כאן טקסט, קישורים וכמות מוגבלת של גרפיקה",
				editorActionsTitle: "פעולות של ה Main Stage",
				editorActionsHelpDescr: "כן_Use these controls to create links that will change the main stage. For example, when the reader clicks a link, you may want to zoom the map to a specific location, display another web map or display an image._ש"
			},
			organizePopup: {
				title: "ארגן",
				lblHeader: "גרור ושחרר קטעים כדי לארגן את התוכן שלך.",
				lblColTitle: "כותרת",
				lblColPubDate: "תאריך הפצה",
				lblColStatus: "סטטוס",
				checkDisplayReverse: "הצג קטעים בסדר הפוך",
				btnApplyWarning: "כן_Confirm deletion of %NB% section(s)_ש",
				deleteTooltip: "מחק",
				firstSectionExplain: "(לא ניתן להעביר את קטע הבית)"
			},
			exportData: {
				btn: "כן_Export content_ש",
				tooltip: "כן_Exporting your content allows you to view and create a back-up of your Journal should you accidentally delete it. Simply copy, paste, the content the page content into any word processor._ש"
			},
			help: {
				lblHelp: "עזרה",
				lblAdd: "הוסף קטע",
				lblSettings: "הגדרות",
				lblOrga: "ארגן תוכן",
				lblEdit: "עריכה",
				lblPublish: "שתף",
				lblTips: "כן_Tips_ש",
				lblMore: "נדרש עוד?",
				lblLink: "בקר באתר סיפורי מפות",
				content1Div1: "ניתן לשלב מגוון רחב של סגנונות בעת בניית הסיפור שלך. ה- <strong>%LAYOUT_TITLE%</strong> בדרך כלל מחזיק את הטקסט שלך, תמונות, ווידאו בזמן שהמפות שלך יועברו <strong>ל Main Stage</strong>. עם זאת, ה- %TPL_NAME% מאפשר לך לאפיין תמונות, תרשימים ווידאו בתוך ה Main Stage גם כן.",
				content1Div2: "הוספת סעיפים מאפשרת לך להתאים אישית את חויית המפה. כאשר הקוראים גוללים דרך ה- %LAYOUT_TITLE% טקסט, מפה בMain Stag הם יכולים להתמקד לנקודות מפתח, או להחליף באופן אוטומטי מפות חדשות ותמונות כדי לתמוך במסר שלך.",
				content2Div1: "כאן הוא מקום שבו אתה יכול להתאים את מראה ה- %TPL_NAME%. כאן ניתן לעדן את סכימות הצבעים, תצוגות המפה ועובי של פריטים שונים.",
				content2Div2: "אתה יכול גם להוסיף קישורי שיתוף לפייסבוק, טוויטר, ו- Bitly, כדי שקוראים יוכלו בקלות להפיץ את ה- %TPL_NAME% שלך לאחרים.",
				content3Div1: "כן_Your content is organized into sections. You can have as many sections as you like (think of them like mini chapters). The flow of those chapters is important; within Organize you can reorder or delete sections as you wish._ש",
				content4Div1: "מצאת שגיאות או רוצה לשנות את החומר שלך? אל דאגה. חפש את סמל העריכה באפליקציה כדי לבצע שינויים בתוכן שלך. אתה יכול להשתמש בפונקצית העריכה פעמים רבות בעת שאתה מפתח את ה-  %TPL_NAME% שלך!",
				content5Div1: "ה- %TPL_NAME% נשמר בחשבון ה- %PORTAL% פרטי כברירת מחדל. אתה יכול להחליט לחלוק אותו עם הארגון שלך, או לפתוח אותו לעולם. אנחנו אפילו נספק לך  URL מקוצר, כך שתוכל לשתף אותו קל יותר.",
				content6Div1: "כן_The title of your Home section is also the title of your Journal; think of your the Home section as  the 'cover page' to your story. The Home Section title will remain visible when your readers will navigate the Journal._ש",
				content6Div2: "כן_Your %LAYOUT_TITLE% doesn't have to be just text, consider including photos and videos to help bring the story alive, and to break-up long sections of text!_ש"
			},
			landing: {
				lblAdd: "כן_What do you want to call your Map Journal?_ש",
				phAdd: "כן_Enter your title..._ש",
				lblOR: "או",
				lblHelp: "סייר"
			},
			firstAddSplash: {
				thisis: "זה הוא"
			}
        }
    })

);
