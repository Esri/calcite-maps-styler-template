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
      title: "웹 맵 비교",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "맵을 생성할 수 없음",
      general:"Error",
      webmapDescription: "...설명 없음…",
      legend:"No legend",
      bingMessage: "누락된 Bing 키"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        save:{
            label: "웹 맵 저장",
            alt: "저장",
            title: "웹 맵 저장",
            message: "웹 맵이 현재 저장됨",
            changeMessage: "웹 맵이 변경됨",
            clearMessage: "웹 맵이 지워짐"
        },
        search:{
            alt: "검색",
            title: "검색",
            placeholder: "검색 텍스트 입력",
            message: "검색 중 …",
            results: "웹 맵 찾음"
        },
        clear:{
            alt: "지우기",
            title: "웹 맵 지우기(기본 웹 맵 사용)"
        },
        find:{
            label: "웹 맵 찾기"
        },
        sync:{
            label: "맵 동기화:",
            scaleLabel: "축척",
            locationLabel: "위치"
            
        },
        map:{
            label:"MAP INFORMATION",
            descriptionLabel: "설명",
            contentLabel: "내용 보기",
            legendLabel: "범례"
        }
    }
  }
})

);