define(
({
  viewer:{
    title: "عارض الخريطة الثلاثي",
    main:{
        loading:{
            loadingMessage: "جارِ تحميل خرائط الويب...",
            title: "مقارنة الخرائط"
        },
        contextMenu:{
            title: "انقر بزر الفأرة الأيمن على الخريطة لمزيد من الخيارات.",
            zoom: "تكبير إلى الحد الأولي",
            scale: "مقياس رسم",
            location: "الموقع",
            scaleAndLocation: "مقياس الرسم والموقع",
            adjust: "تعديل خرائط أخرى إلى هذا"
        },
      iosTooltip: "* انقر على عنوان الخريطة لتعيين خريطة المصدر",
      title: "عارض الخريطة الثلاثي",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "يتعذر إنشاء الخريطة",
      general:"Error",
      webmapDescription: "...لا يوجد وصف…",
      legend:"No legend"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        sync:{
            label: "تزامن الخرائط:",
            scaleLabel: "مقياس رسم",
            locationLabel: "موقع"
            
        },
        map:{
            label:"MAP INFORMATION",
            descriptionLabel: "الوصف",
            contentLabel: "المحتوى",
            legendLabel: "مفتاح الخريطة"
        }
    }
  }
})
);
