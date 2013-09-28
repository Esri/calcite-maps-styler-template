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
      title: "Web マップの比較",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "マップを作成できません",
      general:"Error",
      webmapDescription: "...利用できる説明はありません…",
      legend:"No legend",
      bingMessage: "Bing キーが見つかりません"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        save:{
            label: "Web マップの保存",
            alt: "保存",
            title: "Web マップの保存",
            message: "Web マップは現在保存されています",
            changeMessage: "Web マップは変更されました",
            clearMessage: "Web マップは消去されました"
        },
        search:{
            alt: "検索",
            title: "検索",
            placeholder: "検索テキストを入力",
            message: "検索しています...",
            results: "Web マップは見つかりました"
        },
        clear:{
            alt: "消去",
            title: "Web マップの消去 (デフォルトの Web マップを使用)"
        },
        find:{
            label: "Web マップの検索"
        },
        sync:{
            label: "同期マップ:",
            scaleLabel: "縮尺",
            locationLabel: "位置"
            
        },
        map:{
            label:"MAP INFORMATION",
            descriptionLabel: "説明",
            contentLabel: "コンテンツ",
            legendLabel: "凡例"
        }
    }
  }
})

);