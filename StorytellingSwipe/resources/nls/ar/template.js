define(
	({
		viewer: {
			loading: {
				step1: "تحميل التطبيق",
				step2: "تحميل البيانات",
				step3: "تهيئة",
				fail: "للأسف، فشل تحميل السحب",
				loadBuilder: "التبديل إلى وضع المُنشيء",
				redirectSignIn: "بيت_REDIRECTING TO SIGN-IN PAGE_لاحقة",
				redirectSignIn2: "بيت_(you will be redirected here after sign-in)_لاحقة",
				failButton: "إعادة المحاولة"
			},
			errors: {
				boxTitle: "حدث خطأ",
				portalSelf: "خطأ فادح: فشل في الحصول على تكوين المدخل",
				invalidConfig: "خطأ فادح: تكوين غير صحيح",
				invalidConfigNoWebmap: "خطأ فادح: تكوين غير صحيح (لا توجد خرائط ويب محددة)",
				createMap: "تعذر إنشاء الخريطة",
				invalidApp: "خطأ فادح: لا يمكن تحميل التطبيق",
				initMobile: "مرحبًا بك في تطبيق خريطة السحب. تعذر تكوين التطبيق. المنشئ التفاعلي غير مدعوم على أجهزة الجوال.",
				noBuilderIE8: "منشئ السحب التفاعلي غير مدعوم على Internet Explorer فيما قبل الإصدار 9.",
				noLayerView: "مرحبًا في تطبيق السحب على الويب. <br /> لم يتم تكوين التطبيق بعد.",
				appSave: "خطأ اثناء حفظ تطبيق الويب",
				mapSave: "خطأ أثناء حفظ خريطة الويب",
				notAuthorized: "لست مخولاً لتكوين التطبيق للوصول إلى هذا التطبيق",
				conflictingProjectionsTitle: "تعارض الإسقاطات",
				conflictingProjections: "لا يدعم السحب استخدام اثنان من خرائط الويب ذات إسقاطات مختلفة. الرجاء فتح الإعدادات واستخدم خريطة الويب التي تستخدم نفس الإسقاط لخريطة الويب الأولى.",
				cpButton: "إغلاق"
			},
			mobileView: {
				hideIntro: "إخفاء المقدمة",
				navLeft: "مفتاح الخريطة",
				navMap: "خريطة",
				navRight: "البيانات"
			},
			desktopView: {
				storymapsText: "قصة داخل خريطة",
				builderButton: "الانتقال إلى وضع المنشئ",
				bitlyTooltip: "الحصول على رابط قصير إلى التطبيق"
			}
		},
		builder: {
			builder: {
				panelHeader: "تكوين التطبيق",
				buttonSave: "حفظ",
				buttonHelp: "بيت_Help_لاحقة",
				buttonShare: "بيت_Share_لاحقة",
				buttonDiscard: "إلغاء الأمر",
				buttonSettings: "الإعدادات",
				buttonView: "عرض الوضع",
				buttonItem: "فتح عنصر تطبيق الويب",
				noPendingChange: "لا يوجد تغيير معلق",
				unSavedChangeSingular: "1 تغيير غير محفوظ",
				unSavedChangePlural: "تغييرات غير محفوظة",
				popoverDiscard: "هل تريد تجاهل أية تغييرات غير محفوظة؟",
				yes: "نعم",
				no: "لا",
				popoverOpenViewExplain: "عند فتح العارض، سوف تخسر أية تغييرات غير محفوظة",
				popoverOpenViewOk: "موافق",
				popoverOpenViewCancel: "إلغاء الأمر",
				popoverSaveWhenDone: "لا تنسى الحفظ بعد الانتهاء",
				closeWithPendingChange: "هل تريد تأكيد الإجراء؟ سوف تخسر جميع التغييرات.",
				gotIt: "موافق",
				savingApplication: "حفظ التطبيق",
				saveSuccess: "تم حفظ التطبيق بنجاح",
				saveError: "حدث فشل أثناء الحفظ، يرجى المحاولة مرة أخرى",
				saveError2: "بيت_Save failed due to an invalid html tag in a name or description_لاحقة",
				saveError3: "بيت_The title can't be empty_لاحقة",
				signIn: "يرجى تسجيل الدخول بحساب داخل",
				signInTwo: "لحفظ التطبيق"
			},
			header:{
				editMe: "حررني !",
				templateTitle: "تحديد عنوان القالب",
				templateSubtitle: "تحديد العنوان الفرعي للقالب"
			},
			settings: {
				settingsHeader: "إعدادات التطبيق",
				modalCancel: "إلغاء الأمر",
				modalApply: "تطبيق"
			},
			settingsColors: {
				settingsTabColor: "سمة",
				settingsColorExplain: "اختر سمة التطبيق أو قم بتعريف الألوان الخاصة بك.",
				settingsLabelColor: "ألوان خلفية اللوحة الجانبية والعنوان"
			},
			settingsHeader: {
				settingsTabLogo: "رأس الصفحة",
				settingsLogoExplain: "تخصيص شعار (الحد الأقصى 250 x 50 px).",
				settingsLogoEsri: "شعار Esri",
				settingsLogoNone: "لا يوجد شعار",
				settingsLogoCustom: "تخصيص الشعار",
				settingsLogoCustomPlaceholder: "عنوان URL للصورة",
				settingsLogoCustomTargetPlaceholder: "انقر فوق الرابط",
				settingsLogoSocialExplain: "تخصيص عنوان الرابط الموجود أعلى اليمين.",
				settingsLogoSocialText: "النص",
				settingsLogoSocialLink: "رابط",
				settingsLogoSocialDisabled: "لقد تم تعطيل هذا المعلم بواسطة المدير"
			},
			settingsExtent: {
				settingsTabExtent: "المدى",
				settingsExtentExplain: "تعيين النطاق الأولي خلال الخريطة التفاعلية الموضحة أدناه.",
				settingsExtentExplainBottom: "سيقوم النطاق الذي تم تعريفه بتعديل النطاق الأولي لخريطة الويب. لاحظ أنه إذا كنت تقوم بعمل سلسلة من السحب، فلن يتم استخدام هذا النطاق.",
				settingsExtentDateLineError: "بيت_The extent cannot be across the meridian of 180ï¿½ longitude_لاحقة",
				settingsExtentDateLineError2: "حدث خطأ أثناء حساب النطاق",
				settingsExtentDrawBtn: "ارسم النطاق الجديد",
				settingsExtentModifyBtn: "تحرير النطاق الحالي",
				settingsExtentApplyBtn: "التطبيق على الخريطة الرئيسية",
				settingsExtentUseMainMap: "استخدام نطاق الخريطة الأساسي"
			}
        },
		swipe: {
			mobileData: {
				noData: "لا توجد بيانات للعرض!",
				noDataExplain: "اضغط على الخريطة لتحديد المعالم والرجوع إلى هنا مرة أخرى",
				noDataMap: "لا يوجد بيانات لهذه الخريطة",
				noPopup: "لا توجد أي عناصر منبثقة لهذه المعالم"
			},
			mobileLegend: {
				noLegend: "لا يوجد أي وسائل إيضاح لعرضها"
			},
			swipeSidePanel: {
				editTooltip: "تعيين وصف اللوحة الجانبية",
				editMe: "حررني !",
				legendTitle: "مفتاح الخريطة"
			},
			infoWindow: {
				noFeature: "لا توجد بيانات لعرضها",
				noFeatureExplain: "اضغط فوق الخريطة لتحديد المعالم"
			},
			settingsLayout: {
				settingsTabLayout: "نمط السحب",
				settingsLayoutExplain: "اختر النمط لأداة السحب.",
				settingsLayoutSwipe: "الشريط العمودي",
				settingsLayoutSpyGlass: "منظار",
				settingsLayoutSelected: "مخطط محدد",
				settingsLayoutSelect: "حدد هذا المخطط",
				settingsSaveConfirm: "تتطلب بعض من التغيرات حفظ التطبيق وإعادة تحميله مرة أخرى"
			},
			settingsDataModel: {
				settingsTabDataModel: "نوع السحب",
				settingsDataModelExplainSwipe: "ما ترغب أن يقوم المستخدمين بسحبه؟",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "اختر الطبقة أو خريطة الويب التي ستظهر في المنظار.",
				settingsDataModelOneMap: "الطبقة في خريطة الويب",
				settingsDataModel1Explain: "تحديد الطبقة التي تود سحبها",
				settingsDataModel1Warning: "إذا كانت الطبقة مختفية من قبل الطبقات العلوية، لن يكون السحب ذو تأثير يذكر.",
				settingsDataModel1SpyGlassExplain: "حدد الطبقة لتظهر داخل المنظار.",
				settingsDataModelTwoMaps: "اثنان من خرائط الويب",
				settingsDataModelLayerIds: "معرفات طبقة خريطة الويب",
				settingsDataModelSelected: "النوع المحدد",
				settingsDataModelWebmapSwipeId1: "معرف خريطة الويب الأيمن",
				settingsDataModelWebmapSwipeId2: "معرف خريطة الويب الأيسر",
				settingsDataModelWebmapGlassId1: "معرف خريطة الويب الرئيسي",
				settingsDataModelWebmapGlassId2: "معرف خريطة ويب المنظار",
				settingsDataModelSelect: "حدد هذا النوع",
				settingsDataModel2Explain: "اسحب مع خريطة ويب أخرى",
				settingsDataModel2SpyGlassExplain: "كشف خريطة ويب أخرى.",
				settingsDataModel2HelpTitle: "كيف أقوم بالعثور على معرف خريطة الويب؟",
				settingsDataModel2HelpContent: "انسخ والصق الأرقام بعد علامة \"=\" داخل عنوان URL لخريطة الويب",
				switchMaps: "بيت_Switch maps_لاحقة",
				browseWebMaps: "بيت_Browse web maps_لاحقة"
			},
			settingsLegend: {
				settingsTabLegend: "التخطيط الطباعي للتطبيق",
				settingsLegendExplain: "حدد إعدادات التخطيط الطباعي للتطبيق.",
				settingsLegendEnable: "تمكين وسيلة الإيضاح",
				settingsDescriptionEnable: "تمكين الوصف",
				settingsBookmarksEnable: "تمكين سلاسل السحب",
				settingsPopupDisable: "تمكين عنصر منبثق",
				settingsLocationSearchEnable: "تمكين بحث محدد المواقع",
				settingsGeolocatorEnable: "تمكين محدد المواقع الجغرافي",
				settingsLegendHelpContent: "لتحسين محتوى مفتاح الخريطة، استخدم جدول محتويات عارض خريطة الويب ArcGIS.com (مخفي في وسيلة الإيضاح)",
				settingsSeriesHelpContent: "سلاسل السحب هي خيارات التنقل التي سترشد العارض خلال النطاق المحدد وعرض العنوان ونص الوصف في اللوحة الجانبية. أثناء التفعيل الأولي، سيتم استيراد العلامات المرجعية من خرائط الويب وسيتم استخدامها لإعادة تعبئة شريط السلاسل. يقوم تعطيل خيار السلاسل بإيقاف تشغيل شريط السلاسل،لكن يتم الاحتفاظ بتكوين السلاسل للاستخدام المستقبلي.", 
				settingsSeriesHelpContent2: "تتيح عملية سحب السلسلة إنشاء وتحرير مجموعة مختارة من المواقع مع النص والعناوين المصاحبة. إذا كانت خريطة الويب الخاص بك لديها علامات مرجعية، فإنه سيتم عرضهم. ويمكنك تعطيل هذه السلسلة، ولكن سيتم الاحتفاظ بالتكوين للاستخدام في المستقبل.",
				settingsSeriesHelpLink: "راجع مثال على التطبيق مع سحب السلاسل هنا",
				preview: "معاينة واجهة المستخدم",
				settingsLocateButtonExplain: "يتم دعم هذه الوظيفة على معظم أجهزة الجوال ومستعرضات سطح المكتب (بما في ذلك Internet Explorer 9+(.",
				settingsLocateButton: "بيت_Enable a 'Locate' button on supported browsers_لاحقة",
				settingsAddressSearch: "تمكين أداة البحث عن العنوان"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "العنصر المنبثق",
				settingsSwipePopupExplain: "تخصيص مظهر العنوان المنبثق لمساعدة المستخدمين في مشاركة العناصر المنبثقة مع طبقات الخريطة.",
				settingsSwipePopupSwipe1: "الخريطة اليسرى",
				settingsSwipePopupSwipe2: "الخريطة اليمنى",
				settingsSwipePopupGlass1: "الخريطة الأساسية",
				settingsSwipePopupGlass2: "خريطة المنظار",
				settingsSwipePopupTitle: "عنوان رأس الصفحة",
				settingsSwipePopupColor: "لون رأس الصفحة"
			},
			initPopup: {
				initHeader: "بيت_Welcome to the Swipe/Spyglass Builder_لاحقة",
				modalNext: "التالي",
				modalPrev: "السابق",
				modalApply: "فتح التطبيق"
			},
			seriesPanel: {
				title: "العنوان",
				descr: "الوصف",
				discard: "تجاهل العلامة المرجعية",
				saveExtent: "تعيين نطاق العلامة المرجعية",
				discardDisabled: "لا يمكنك إزالة العلامة المرجعية. يمكن تعطيل سلسلة السحب في الإعدادات."
			},
			helpPopup: {
				title: "بيت_Help_لاحقة",
				close: "بيت_Close_لاحقة",
				tab1: {
					div1: "بيت_The Swipe/Spyglass template is designed to compare two seperate web maps or two layers of a single web map in an attractive, easy-to-use web application that can be used in any web browser on any device, including smartphones and tablets._لاحقة",
					div2: "بيت_For additional information on the Swipe/Spyglass template, including examples created by users, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visit the Story Maps website</a>. You can also follow us on Twitter at <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>._لاحقة",
					div3: "بيت_We would love to hear from you! Whether you have a question, want to request a new feature, or think you've found a bug, please visit the <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps User Forum</a>._لاحقة"
				}
			},
			share: {
				firstSaveTitle: "بيت_Application successfully saved_لاحقة",
				firstSaveHeader: "بيت_Your Application is now saved in ArcGIS Online. Please read the following answers to frequent questions._لاحقة",
				firstSaveA1: "بيت_If you are not familiar with ArcGIS Online or want a shortcut to access the authoring interface, you can save the following link: %LINK1%_لاحقة",
				firstSaveA1bis: "بيت_The Application can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>._لاحقة",
				firstSaveQ2: "بيت_Is my Application shared?_لاحقة",
				firstSaveA2: "بيت_Currently your Application is not shared. To share it, use the SHARE button._لاحقة",
				shareTitle: "بيت_Share your Application_لاحقة",
				sharePrivateHeader: "بيت_Your Application is not shared, would you like to share it?_لاحقة",
				sharePrivateBtn1: "بيت_Share publicly_لاحقة",
				sharePrivateBtn2: "بيت_Share with my Organization_لاحقة",
				sharePrivateProgress: "بيت_Sharing in progress..._لاحقة",
				sharePrivateErr: "بيت_Sharing failed, try again or_لاحقة",
				sharePrivateOk: "بيت_Sharing updated successfully, loading..._لاحقة",
				shareStatus1: "بيت_Application is not saved_لاحقة",
				shareStatus2: "بيت_Application is shared publicly_لاحقة",
				shareStatus3: "بيت_Application is shared within the organization_لاحقة",
				shareStatus4: "بيت_Application is not shared_لاحقة",
				sharePreviewAsUser: "بيت_Preview_لاحقة",
				shareHeader1: "بيت_Your Application is <strong>publicly accessible</strong>._لاحقة",
				shareHeader2: "بيت_Your Application is accessible by your organization members (login is required)._لاحقة",
				shareLinkHeader: "بيت_Share the Application with your audience_لاحقة",
				shareLinkOpen: "بيت_OPEN_لاحقة",
				learnMore: "بيت_Learn more_لاحقة",
				shareQ1Opt1: "بيت_How do I keep the Application private?_لاحقة",
				shareQ1Opt2: "بيت_How do I keep the Application private or share it publicly?_لاحقة",
				shareA1: "بيت_Use %SHAREIMG% on <a href='%LINK1%' target='_blank'>the application item page</a>. If you also want to unshare the web map, use <a href='%LINK2%' target='_blank'>the web map item page</a>._لاحقة",
				shareA1bis: "بيت_If you also want to unshare the Feature Service, use <a href='%LINK1%' target='_blank'>the Feature Service item page</a>._لاحقة",
				shareQ2: "بيت_How do I edit the Application later?_لاحقة",
				shareQ2bis: "بيت_How do I get back to the authoring interface?_لاحقة",
				shareA2div1: "بيت_Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the application item page</a>._لاحقة",
				shareA2div2: "بيت_As the owner of the application, when you are signed in on ArcGIS.com, the application includes a button to open the interactive builder:_لاحقة",				
				shareQ3: "بيت_Where is the data stored?_لاحقة",
				shareA3: "بيت_The Application configuration is stored in this web application item</a>._لاحقة",
				shareWarning: "بيت_Sharing %WITH% has been disabled because you are not the owner of the <a href='%LINK%' target='_blank'>webmap</a>._لاحقة",
 				shareWarningWith1: "بيت_publicly_لاحقة",
 				shareWarningWith2: "بيت_publicly and with the Organization_لاحقة"
			},
			directCreation: {
				header: "بيت_Welcome to the Swipe/Spyglass Builder_لاحقة",
				mapPickHeader: "بيت_To get started, please input a valid web map id, or use the search button to browse web maps._لاحقة",
				launchBuilder: "بيت_Launch Builder_لاحقة"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "بيت_My Organization_لاحقة",
					onlineLabel: "بيت_ArcGIS Online_لاحقة",
					contentLabel: "بيت_My Content_لاحقة",
					favoritesLabel: "بيت_My Favorites_لاحقة"
				},
				title: "بيت_Select Web Map_لاحقة",
				searchTitle: "بيت_Search_لاحقة",
				ok: "بيت_Ok_لاحقة",
				cancel: "بيت_Cancel_لاحقة",
				placeholder: "بيت_Enter search term_لاحقة"
			}
		}
    })
);