define(
({
  viewer:{
    title: "比较 Web 地图",
    main:{
        loading:{
            loadingMessage: "正在加载 Web 地图...",
            title: "比较 Web 地图"
        },
        contextMenu:{
            title: "右键单击地图可显示更多选项。",
            zoom: "缩放至初始范围",
            scale: "比例",
            location: "位置",
            scaleAndLocation: "比例和位置",
            adjust: "据此调整其他地图"
        },
      title: "三向地图查看器",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "无法创建地图",
      general:"Error",
      webmapDescription: "...未提供任何描述...",
      legend:"No legend"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        sync:{
            label: "同步地图:",
            scaleLabel: "比例",
            locationLabel: "位置"
            
        },
        map:{
            label: "地图信息",
            descriptionLabel: "描述",
            contentLabel: "内容",
            legendLabel: "图例"
        }
    }
  }
})
);
