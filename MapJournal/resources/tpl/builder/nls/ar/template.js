define(
	 ({
		builder: {
			layouts: {
				mainStage: "المرحلة الأساسية",
				sideTitle: "اللوحة الجانبية",
				sideDescr: "التخطيط الطباعي للحكاية النصية التي تدمج الصور ومقاطع الفيديو والخرائط في رسائل واضحة.",
				floatTitle: "اللوحة العائمة",
				floatDescr: "التخطيط الطباعي الذي يضع الخرائط في وضع التركيز أثناء السماح بشفافية لوحة نص النموذج القصير للمساعدة في تبادل القصص."
			},
			common: {
				lblStatus1: "تم النشر",
				lblStatus2: "مسودة",
				lblStatus3: "مخفي"
			},
			settingsLayoutOptions: {
				title: "خيارات التخطيط الطباعي",
				cfgLeft: "يسار",
				cfgRight: "يمين",
				cfgSmall: "صغير",
				cfgMedium: "متوسط",
				cfgLarge: "كبير",
				socialLinksLabel: "عرض مشاركة الروابط أسفل كل جزء",
				socialLinksDescr: "يُمكن ذلك القراء من إرجاع المقاطع المحددة لـ %TPL_NAME%. مثال، عند استخدام رمز مشاركة المقاطع، سيقوم القراء بالوصول إلى مقطع %TPL_NAME% المحدد عوضًا عن بداية الحكاية. يمكن للقراء استخدام رابط الوسائط الاجتماعية في مقطع العنوان لترقية %TPL_NAME% (علامة تبويب العنوان) الكلية وكذلك الوصول إلى بداية %TPL_NAME%."
			},
			initPopup: {
				title: "مرحبًا بك في"
			},
			addEditPopup: {
				titleAdd: "إضافة مقطع",
				titleEdit: "تحرير المقطع",
				step: "خطوة",
				stepMainStageExplain: "إضافة خريطة أو صورة أو مقطع فيديو إلى المرحلة الأساسية",
				stepPanelExplain: "إضافة المحتويات إلى",
				stepMainStageNextTooltip: "أدخل",
				step2NextTooltip: "أدخل عنوان المقطع ومحتويات %LAYOUT-TYPE%",
				stepNextTooltipNext: "للانتقال إلى الخطوة التالية",
				stepNextTooltipAdd: "لإضافة المقطع",
				titlePlaceholder: "عنوان المقطع...",
			},
			addEditViewText: {
				editorPlaceholder: "إضافة النص والروابط والرسومات الصغيرة هنا.",
				editorActionsTitle: "إجراءات المرحلة الأساسية",
				editorActionsHelpDescr: "بيت_Use these controls to create links that will change the main stage. For example, when the reader clicks a link, you may want to zoom the map to a specific location, display another web map or display an image._لاحقة"
			},
			organizePopup: {
				title: "ترتيب",
				lblHeader: "سحب وإفلات المقاطع لتنظيم المحتويات.",
				lblColTitle: "العنوان",
				lblColPubDate: "تاريخ المنشور",
				lblColStatus: "حالة",
				checkDisplayReverse: "عرض المقاطع بترتيب عكسي",
				btnApplyWarning: "بيت_Confirm deletion of %NB% section(s)_لاحقة",
				deleteTooltip: "حذف",
				firstSectionExplain: "(يتعذر نقل المقطع الأساسي)"
			},
			help: {
				lblHelp: "تعليمات",
				lblAdd: "إضافة مقطع",
				lblSettings: "الإعدادات",
				lblOrga: "تنظيم المحتويات",
				lblEdit: "تحرير",
				lblPublish: "مشاركة",
				lblMore: "هل تريد المزيد؟",
				lblLink: "تفضل بزيارة موقع خرائط الحكاية على الويب.",
				content1Div1: "يمكن تكامل أنماط متعددة عند بناء الحكاية. يحتفظ <strong>%LAYOUT_TITLE%</strong> بالنصوص والصور ومقاطع الفيديو عند وصول الخرائط<strong>إلى المرحلة الأساسية</strong>. مع ذلك، يسمح %TPL_NAME% بتمييز الصور والمخططات ومقاطع الفيديو داخل المرحلة الاساسية أيضًا.",
				content1Div2: "تسمح إضافة المقاطع بتخصيص خبرة تبادل القصص. بصفتك من القُراء قم بالتمرير خلال نصوص %LAYOUT_TITLE% أو يمكن تحريك أو تكبير الخريطة على المرحلة الأساسية أو يمكن للخرائط والصور الجديدة التبديل تلقائيًا لدعم الرسالة.",
				content2Div1: "يمكن هنا ضبط مظهر %TPL_NAME%. ستتم تنقية أنظمة الألوان والتخطيطات وكذلك العروض.",
				content2Div2: "يمكن أيضًا مشاركة الروابط على Facebook وTwitter ليتمكن القُراء من نشر %TPL_NAME% للآخرين بسهولة.",
				content3Div1: "بيت_Your content is organized into sections. You can have as many sections as you like (think of them like mini chapters). The flow of those chapters is important; within Organize you can reorder or delete sections as you wish._لاحقة",
				content4Div1: "هل تم إيجاد خطأ أو ترغب في تغيير المواد التعليمية؟ لا. ابحث عن رمز تحرير في التطبيق للقيام بالتغييرات في المحتويات. ستقوم باستخدام وظائف التحرير عدة مرات عند تطوير %TPL_NAME%!",
				content5Div1: "يتم حفظ %TPL_NAME% على حساب %PORTAL% افتراضيًا. يمكن إقرار مشاركته مع المؤسسة أو فتحه على العالم. سندعمك بعنوان URL لتتمكن من مشاركته بشكل أسهل."
			},
			landing: {
				lblAdd: "إضافة مقطع الصفحة الرئيسية",
				lblOR: "أو",
				lblHelp: "القيام بجولة"
			},
			firstAddSplash: {
				thisis: "هذا هو"
			}
        }
    })

);
