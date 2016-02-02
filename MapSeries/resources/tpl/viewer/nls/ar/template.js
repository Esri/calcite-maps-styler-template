﻿define(
	 ({
		viewer: {
			common: {
				close: "إغلاق"
			},
			loading: {
				long: "يتم تهيئة القصة",
				long2: "شكرًا للانتظار",
				failButton: "إعادة تحميل القصة"
			},
			signin: {
				title: "مطلوب المصادقة",
				explainViewer: "يرجى تسجيل الدخول بحساب في %PORTAL_LINK% للوصول إلى القصة.",
				explainBuilder: "يرجى تسجيل الدخول بحساب في %PORTAL_LINK% لتكوين القصة."
			},
			errors: {
				boxTitle: "حدث خطأ",
				invalidConfig: "تكوين غير صحيح",
				invalidConfigNoApp: "مُعرّف تطبيق تخطيط الويب غير محدد في index.html.",
				invalidConfigNoAppDev: "بيت_No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored______________________________________________لاحقة.",
				unspecifiedConfigOwner: "لم يتم تكوين المالك المعتمد.",
				invalidConfigOwner: "مالك القصة غير مُعتمد.",
				createMap: "يتعذر إنشاء الخريطة",
				invalidApp: "%TPL_NAME% غير موجود أو لا يمكن الوصول إليه.",
				appLoadingFail: "‏‏حدث خطأ ما، لم يتم تحميل %TPL_NAME% بشكل صحيح.",
				notConfiguredDesktop: "لم يتم تكوين القصة بعد.",
				notConfiguredMobile: "بيت_The %TPL_NAME% builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen______________________________________________________لاحقة.",
				notConfiguredMobile2: "بيت_Please rotate your device to landscape orientation to use the %TPL_NAME% builder_________________________لاحقة.",
				notAuthorized: "يجب أن تكون مُعتمدًا للوصول إلى هذه القصة",
				notAuthorizedBuilder: "بيت_You are not authorized to use %TPL_NAME% builder________________لاحقة.",
				noBuilderIE: "المُنشئ غير مدعوم في Internet Explorer قبل الإصدار %VERSION%. %UPGRADE%",
				noViewerIE: "هذه القصة غير مدعومة في Internet Explorer قبل الإصدار %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>يرجى تحديث المستعرض</a>.",
				mapLoadingFail: "‏‏حدث خطأ ما، لم يتم تحميل الخريطة بشكل صحيح.",
				signOut: "تسجيل المغادرة"
			},
			mobileInfo: {
				legend: "وسيلة إيضاح",
				description: "الوصف",
				lblLegendMobileError: "عذرًا، وسيلة الإيضاح غير متاحة. يرجى إعادة تحميل القصة.",
				lblLegendMobileErrorExplain: "وسيلة الإيضاح غير متاحة عند استدارة الجهاز في الوضع العمودي بعد تحميل القصة."
			},
			mobileFooter: {
				swipeInvite: "سحب انتقال القصة",
				lblNext: "التالي",
				lblEnd: "وصلت إلى نهاية القصة"
			},
			headerFromCommon: {
				storymapsText: "خريطة قصة",
				builderButton: "تحرير",
				facebookTooltip: "مشاركة على الفيس بوك",
				twitterTooltip: "مشاركة على تويتر",
				bitlyTooltip: "الحصول على رابط قصير",
				templateTitle: "تعيين عنوان للقالب",
				templateSubtitle: "تعيين عنوان فرعي للقالب",
				share: "مشاركة",
				checking: "فحص محتوى القصة",
				fix: "إصلاح المشكلات في القصة",
				noerrors: "لم يتم الكشف عن المشكلات",
				tooltipAutoplayDisabled: "بيت_This isn't available in autoplay mode____________لاحقة",
				notshared: "بيت_Story not shared______لاحقة"
			},
			overviewFromCommon: {
				title: "خريطة النظرة العامة"
			},
			legendFromCommon: {
				title: "وسيلة إيضاح"
			},
			shareFromCommon: {
				copy: "نسخ",
				copied: "تم النسخ",
				open: "فتح",
				embed: "تضمين في صفحة الويب",
				embedExplain: "استخدم كود HTML التالي لتضمين القصة في صفحة الويب.",
				size: "الحجم (العرض/الارتفاع)",
				autoplayLabel: "بيت_Autoplay mode_____لاحقة",
				autoplayExplain1: "بيت_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________لاحقة.",
				autoplayExplain2: "بيت_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________لاحقة.",
				linksupdated: "بيت_Links updated_____لاحقة!"
			},
			locatorFromCommon: {
				error: "الموقع غير متاح"
			}
        }
    })
);