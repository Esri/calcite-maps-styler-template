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
      title: "比较 Web 地图",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "无法创建地图",
      general:"Error",
      webmapDescription: "...未提供任何描述...",
      legend:"No legend",
      bingMessage: "缺少 Bing 密钥"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        save:{
            label: "保存 Web 地图",
            alt: "保存",
            title: "保存 Web 地图",
            message: "当前保存的 Web 地图",
            changeMessage: "已更改 Web 地图",
            clearMessage: "已清除 Web 地图"
        },
        search:{
            alt: "搜索",
            title: "搜索",
            placeholder: "输入搜索文本",
            message: "正在搜索...",
            results: "找到的 Web 地图"
        },
        clear:{
            alt: "清除",
            title: "清除 Web 地图(使用默认的 Web 地图)"
        },
        find:{
            label: "查找 Web 地图"
        },
        sync:{
            label: "同步地图:",
            scaleLabel: "比例",
            locationLabel: "位置"
            
        },
        map:{
            label:"MAP INFORMATION",
            descriptionLabel: "描述",
            contentLabel: "内容",
            legendLabel: "图例"
        }
    }
  }
})

);