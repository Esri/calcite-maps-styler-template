define(
	 ({
		viewer: {
			loading: {
				step1: "LOADING STORY",
				step2: "تحميل البيانات",
				step3: "تهيئة",
				fail: "للأسف، فشل تحميل السحب",
				loadBuilder: "التبديل إلى وضع المُنشيء",
				redirectSignIn: "إعادة التوجيه لصفحة تسجيل الدخول",
				redirectSignIn2: "(سيتم إعادة توجيهك هنا بعد تسجيل الدخول)",
				failButton: "إعادة المحاولة"
			},
			errors: {
				boxTitle: "حدث خطأ",
				portalSelf: "خطأ فادح: فشل في الحصول على تكوين المدخل",
				invalidConfig: "خطأ فادح: تكوين غير صحيح",
				invalidConfigNoWebmap: "بيت_Fatal error: Invalid configuration (web map or application identifier not specified in index.html)______________________________لاحقة",
				invalidConfigNoAppDev: "بيت_No Web Mapping Application identifier or webmap are specified in URL parameters (?appid= or ?webmap=). In development mode, the appid and webmap configuration in index.html are ignored_________________________________________________________لاحقة.",
				createMap: "يتعذر إنشاء الخريطة",
				invalidApp: "خطأ فادح: يتعذر تحميل القصة",
				initMobile: "مرحبًا بك في تطبيق خريطة السحب. تعذر تكوين التطبيق. المنشئ التفاعلي غير مدعوم على أجهزة الجوال.",
				initMobile2: "بيت_The Swipe builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen_____________________________________________________لاحقة.",
				initMobile3: "بيت_Please rotate your device to landscape orientation to use the Swipe builder________________________لاحقة.",
				noBuilderIE8: "منشئ السحب التفاعلي غير مدعوم على Internet Explorer فيما قبل الإصدار 9.",
				noLayerView: "مرحبًا في تطبيق السحب على الويب. <br /> لم يتم تكوين التطبيق بعد.",
				appSave: "خطأ في حفظ قصة الويب",
				mapSave: "خطأ أثناء حفظ خريطة الويب",
				notAuthorized: "يجب أن تكون مُعتمدًا للوصول إلى هذه القصة",
				notAuthorizedBuilder: "بيت_You are not authorized to use Swipe and Spyglass builder__________________لاحقة.",
				conflictingProjectionsTitle: "تعارض الإسقاطات",
				conflictingProjections: "لا يدعم السحب استخدام اثنان من خرائط الويب ذات إسقاطات مختلفة. الرجاء فتح الإعدادات واستخدام خريطة الويب التي تستخدم نفس إسقاط خريطة الويب الأولى.",
				cpButton: "إغلاق",
				unspecifiedConfigOwner: "لم يتم تكوين المالك المعتمد.",
				invalidConfigOwner: "مالك القصة غير مُعتمد."
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
				facebookTooltip: "مشاركة على الفيس بوك",
				twitterTooltip: "مشاركة على تويتر",
				bitlyTooltip: "الحصول على رابط قصير",
				tooltipAutoplayDisabled: "بيت_This isn't available in autoplay mode____________لاحقة",
				autoplayLabel: "بيت_Autoplay mode_____لاحقة",
				autoplayExplain1: "بيت_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________لاحقة.",
				autoplayExplain2: "بيت_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________لاحقة."
			}
		},
		builder: {
			builder: {
				panelHeader: "STORY CONFIGURATION",
				buttonSave: "حفظ",
				buttonHelp: "تعليمات",
				buttonShare: "مشاركة",
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
				savingApplication: "حفظ القصة",
				saveSuccess: "بيت_Story saved____لاحقة",
				saveError: "حدث فشل أثناء الحفظ، يرجى المحاولة مرة أخرى",
				saveError2: "فشل الحفظ نظرًا لعلامة html غير الصحيحة في اسم أو وصف",
				saveError3: "يتعذر أن يكون العنوان فارغًا",
				signIn: "يرجى تسجيل الدخول بحساب داخل",
				signInTwo: "لحفظ القصة."
			},
			header:{
				editMe: "تحرير!",
				templateTitle: "تحديد عنوان القالب",
				templateSubtitle: "تحديد العنوان الفرعي للقالب"
			},
			settings: {
				settingsHeader: "إعدادات القصة",
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
				settingsExtentDateLineError: "لا يمكن أن يكون المدى عبر خط الطول 180ï¿½",
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
				editMe: "تحرير!",
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
				settingsSaveConfirm: "بعض التغييرات تتطلب الحفظ وإعادة تحميل القصة"
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
				switchMaps: "تبديل الخرائط",
				browseWebMaps: "استعرض خرائط الويب"
			},
			settingsLegend: {
				settingsTabLegend: "التخطيط الطباعي للتطبيق",
				settingsLegendExplain: "تحديد إعدادات التخطيط.",
				settingsLegendEnable: "تمكين وسيلة الإيضاح",
				settingsDescriptionEnable: "تمكين الوصف",
				settingsBookmarksEnable: "تمكين سلاسل السحب",
				settingsPopupDisable: "بيت_Enable pop-up_____لاحقة",
				settingsLocationSearchEnable: "تمكين بحث محدد المواقع",
				settingsGeolocatorEnable: "تمكين محدد المواقع الجغرافي",
				settingsLegendHelpContent: "بيت_To refine the legend content, use the ArcGIS web map viewer table of contents (Hide in Legend)_____________________________لاحقة",
				settingsSeriesHelpContent: "سلاسل السحب هي خيارات التنقل التي سترشد العارض خلال النطاق المحدد وعرض العنوان ونص الوصف في اللوحة الجانبية. أثناء التفعيل الأولي، سيتم استيراد العلامات المرجعية من خرائط الويب وسيتم استخدامها لإعادة تعبئة شريط السلاسل. يقوم تعطيل خيار السلاسل بإيقاف تشغيل شريط السلاسل،لكن يتم الاحتفاظ بتكوين السلاسل للاستخدام المستقبلي.",
				settingsSeriesHelpContent2: "تتيح عملية سحب السلسلة إنشاء وتحرير مجموعة مختارة من المواقع مع النص والعناوين المصاحبة. إذا كانت خريطة الويب الخاص بك لديها علامات مرجعية، فإنه سيتم عرضهم. ويمكنك تعطيل هذه السلسلة، ولكن سيتم الاحتفاظ بالتكوين للاستخدام في المستقبل.",
				settingsSeriesHelpLink: "راجع مثال على التطبيق مع سحب السلاسل هنا",
				preview: "معاينة واجهة المستخدم",
				settingsLocateButtonExplain: "يتم دعم هذه الوظيفة على معظم أجهزة الجوال ومستعرضات سطح المكتب (بما في ذلك Internet Explorer 9+(.",
				settingsLocateButton: "تمكين زر \'تحديد الموقع\' في المستعرضات المدعومة",
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
				initHeader: "مرحبًا بك في مُنشئ Swipe/Spyglass",
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
				title: "تعليمات",
				close: "إغلاق",
				tab1: {
					div1: "يتم تصميم قالب Swipe/Spyglass لمقارنة خريطتي ويب منفصلتين أو طبقتي خريطة ويب مفردة في تطبيق ويب جذّاب سهل الاستخدام يمكن استخدامه في أي مستعرض ويب على أي جهاز، بما في ذلك الهواتف الذكية والحواسب اللوحية.",
					div2: "فيما يتعلق بالمعلومات الإضافية المتعلقة بقالب السحب، بما في ذلك الأمثلة التي يتم إنشائها بواسطة المستخدمين، <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> تفضل بزيارة موقع خرائط القصص على الويب</a>. يمكن اتباعنا على Twitter <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "نرغب في الاستماع إليك! سواء كان لديك سؤال، وترغب في طلب ميزة جديدة، أو تعتقد أنك وجدت خلل، يرجى زيارة <a href='http://links.esri.com/storymaps/forum' target='_blank'>منتدى مستخدمي خرائط القصة</a>."
				}
			},
			share: {
				firstSaveTitle: "بيت_Story saved____لاحقة",
				manageStory: "بيت_Manage your story______لاحقة",
				manageStoryA1: "بيت_Tip: You can use %LINK1% to check your story for errors and change how its components are shared. My Stories also helps you make your story look good when it is shared on social networks. You can learn about other useful features of My Stories in these %LINK2%_______________________________________________________________________________لاحقة.",
				manageStoryA1V1: "بيت_My Stories____لاحقة",
				manageStoryA1V2: "بيت_blog posts____لاحقة",
				shareTitle: "مشاركة القصة",
				sharePrivateHeader: "لم يتم مشاركة القصة. هل تريد مشاركتها؟",
				sharePrivateBtn1: "مشاركتها بشكل عام",
				sharePrivateBtn2: "مشاركتها مع المنظمة",
				sharePrivateProgress: "المشاركة قيد التقدم...",
				sharePrivateErr: "فشلت المشاركة، أعد المحاولة مرة أخرى أو",
				sharePrivateOk: "بيت_Sharing updated, loading_________لاحقة...",
				shareStatus1: "لم يتم حفظ القصة",
				shareStatus2: "تم مشاركة الخريطة مع كل المستخدمين",
				shareStatus3: "تم مشاركة القصة في المؤسسة",
				shareStatus4: "لم يتم مشاركة القصة",
				sharePreviewAsUser: "معاينة",
				shareHeader1: "القصة هي <strong>publicly accessible</strong>.",
				shareHeader2: "يمكن لأعضاء المؤسسة الوصول إلى القصة (يجب تسجيل الدخول).",
				shareLinkHeader: "بيت_Share your story______لاحقة",
				shareLinkOpen: "فتح",
				learnMore: "تعلم المزيد",
				shareA1: "استخدم %SHAREIMG% في <a href='%LINK1%' target='_blank'> صفحة عنصر التطبيق</a>. إذا أردت أيضًا إلغاء مشاركة طبقة الويب، استخدام <a href='%LINK2%' target='_blank'>صفحة عنصر خريطة الويب</a>.",
				shareWarning: "تم تعطيل مشاركة %WITH% وذلك لأنك ليس مالك <a href='%LINK%' target='_blank'>خريطة الويب</a>.",
				shareWarningWith1: "بيت_publicly___لاحقة",
				shareWarningWith2: "بيت_publicly and with the Organization___________لاحقة"
			},
			directCreation: {
				header: "مرحبًا بك في مُنشئ Swipe/Spyglass",
				mapPickHeader: "لبدء الاستخدام، يرجى إدخال مُعرف خريطة ويب صحيح أو استخدام زر البحث لاستعراض خرائط الويب.",
				launchBuilder: "تشغيل المُنشئ",
				chooseWebmapLbl: "اختيار خريطة الويب...",
				explain2: "بيت_To create a Swipe or Spyglass story map, use the button below to choose the existing web map you want to use. Alternatively, you can paste the ID of the web map into the field below________________________________________________________لاحقة.",
				explain3: "عند الرغبة في استخدام اثنان من خرائط الويب في خريطة الحكاية، ستطلب خريطة الويب الثانية فيما بعد عند اختيار هذا الخيار.",
				webmapPlaceholder: "أدخل مُعرف خريطة الويب..."
			},
			saveErrorSocial: {
				title: "بيت_Social media sharing update_________لاحقة",
				panel1: "بيت_Your storyâ€™s appearance on social media has been improved, but your ArcGIS web application item title is not the same as your story title___________________________________________لاحقة.",
				panel1tooltip: "بيت_By defining a title, summary and thumbnail image, your story will look like this_________________________لاحقة:",
				panel2:	"بيت_Which title would you like to use on social media________________لاحقة:",
				panel2q1: "بيت_Story title (recommended)_________لاحقة",
				panel2q1tooltip: "بيت_By choosing this option, your item title will be modified to match your story title and further changes in the builder will be synchronized___________________________________________لاحقة.",
				panel2q2: "بيت_Item title____لاحقة",
				panel3: "بيت_To further improve how your story looks on social media use ${MYSTORIES} to add a summary and a thumbnail image___________________________________لاحقة.",
				panel4: "بيت_Do not warn me again for this story____________لاحقة",
				mystories: "بيت_My Stories____لاحقة",
				btnSave: "بيت_Save__لاحقة"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "المؤسسة",
					onlineLabel: "ArcGIS Online",
					contentLabel: "المحتوى",
					favoritesLabel: "المفضلات"
				},
				title: "بيت_Select Web Map_____لاحقة",
				searchTitle: "بحث",
				ok: "موافق",
				cancel: "إلغاء الأمر",
				placeholder: "إدخال مصطلح البحث"
			}
		}
    })
);
