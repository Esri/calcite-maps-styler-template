define(
	 ({
		builder: {
			layouts: {
				mainStage: "المرحلة الأساسية",
				sideTitle: "اللوحة الجانبية",
				sideDescr: "التخطيط الطباعي للحكاية النصية التي تدمج الصور ومقاطع الفيديو والخرائط في رسائل واضحة.",
				floatTitle: "اللوحة العائمة",
				floatDescr: "بيت_A layout that puts your cartography in focus while allowing a transparent short form text panel to help tell the story._لاحقة"
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
				editorActionsHelpDescr: "استخدام عناصر التحكم الحالية لإنشاء الروابط التي ستقوم بتغيير المرحلة الأساسية. مثال، عند نقر القارئ على الرابط المطلوب لتكبير الخريطة وصولا للموقع المحدد أو عرض خريطة ويب أخرى أو عرض الصورة."
			},
			organizePopup: {
				title: "ترتيب",
				lblHeader: "بيت_Drag and drop sections to organize your content._لاحقة",
				lblColTitle: "العنوان",
				lblColPubDate: "تاريخ المنشور",
				lblColStatus: "حالة",
				checkDisplayReverse: "عرض المقاطع بترتيب عكسي",
				btnApplyWarning: "تأكيد إزالة مقاطع %NB%",
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
				content1Div2: "بيت_Adding sections allows you to truly customize your storytelling experience. As readers scroll through your %LAYOUT_TITLE% text, a map on the Main Stage can pan or zoom to key points, or new maps and images can automatically toggle to support your message._لاحقة",
				content2Div1: "يمكن هنا ضبط مظهر %TPL_NAME%. ستتم تنقية أنظمة الألوان والتخطيطات وكذلك العروض.",
				content2Div2: "بيت_You can also add sharing links to Facebook, Twitter, and Bitly so readers can easily spread your %TPL_NAME% to others._لاحقة",
				content3Div1: "يتم تنظيم المحتويات داخل المقاطع. يمكن الحصول على العديد من المقاطع كما تريد (بصفتها فصول صغيرة). مسار هذه الفصول هام جدًا، بذلك سيصبح من الممكن إعادة ترتيب بعض المقاطع أو حذفها كما تريد.",
				content4Div1: "هل تم إيجاد خطأ أو ترغب في تغيير المواد التعليمية؟ لا. ابحث عن رمز تحرير في التطبيق للقيام بالتغييرات في المحتويات. ستقوم باستخدام وظائف التحرير عدة مرات عند تطوير %TPL_NAME%!",
				content5Div1: "بيت_Your %TPL_NAME% is saved to your %PORTAL% account and private by default. You can decide to share it with your organization, or open it to the world. We even provide you with a shortened URL so you can share it easier._لاحقة"
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
