define(
({
  viewer:{
    title: "צפיין מפה עם שלושה פאנלים",
    main:{
        loading:{
            loadingMessage: "טוען Web Maps...",
            title: "השווה מפות"
        },
        contextMenu:{
            title: "לחיצה ימנית על מפה תפתח אפשרויות נוספות.",
            zoom: "התמקדות לתיחום המקורי",
            scale: "קנה מידה",
            location: "מיקום",
            scaleAndLocation: "קנה מידה ומיקום",
            adjust: "התאם מפות אחרות לזו"
        },
      iosTooltip: "* לחץ על כותרת המפה כדי לקבוע את מקור המפה",
      title: "צפיין מפה עם 3 פאנלים",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "לא ניתן ליצור מפה",
      general:"Error",
      webmapDescription: "...אין תיאור זמין...",
      legend:"No legend"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        sync:{
            label: "סנכרן מפות:",
            scaleLabel: "קנה מידה",
            locationLabel: "מיקום"
            
        },
        map:{
            label:"MAP INFORMATION",
            descriptionLabel: "תיאור",
            contentLabel: "תוכן",
            legendLabel: "מקרא"
        }
    }
  }
})
);
