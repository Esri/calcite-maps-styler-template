define(
({
  viewer:{
    title: "Web マップの比較",
    main:{
        loading:{
            loadingMessage: "Web マップを読み込んでいます...",
            title: "Web マップの比較"
        },
        contextMenu:{
            title: "マップ上で右クリックすると他のオプションが表示されます。",
            zoom: "全体表示",
            scale: "縮尺",
            location: "場所",
            scaleAndLocation: "縮尺と位置",
            adjust: "他のマップをこれに合わせて調整"
        },
      title: "3 方向マップ ビューア",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "マップを作成できません",
      general:"Error",
      webmapDescription: "...利用できる説明はありません...",
      legend:"No legend"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        sync:{
            label: "同期マップ:",
            scaleLabel: "縮尺",
            locationLabel: "位置"
            
        },
        map:{
            label: "マップ情報",
            descriptionLabel: "説明",
            contentLabel: "コンテンツ",
            legendLabel: "凡例"
        }
    }
  }
})
);
