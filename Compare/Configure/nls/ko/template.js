define(
({
  viewer:{
    title: "웹 맵 비교",
    main:{
        loading:{
            loadingMessage: "웹 맵 로드 중…",
            title: "웹 맵 비교"
        },
        contextMenu:{
            title: "추가 옵션은 맵을 마우스 오른쪽 클릭하세요.",
            zoom: "초기 범위로 확대/축소",
            scale: "축척",
            location: "위치",
            scaleAndLocation: "축척 및 위치",
            adjust: "다른 맵을 이에 조정"
        },
      title: "3웨이 맵 뷰어",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "맵을 생성할 수 없음",
      general:"Error",
      webmapDescription: "...설명 없음…",
      legend:"No legend"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        sync:{
            label: "맵 동기화:",
            scaleLabel: "축척",
            locationLabel: "위치"
            
        },
        map:{
            label: "맵 정보",
            descriptionLabel: "설명",
            contentLabel: "내용 보기",
            legendLabel: "범례"
        }
    }
  }
})
);
