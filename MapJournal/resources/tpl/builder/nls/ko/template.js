define(
	 ({
		builder: {
			layouts: {
				mainStage: "기본 단계",
				sideTitle: "사이드 패널",
				sideDescr: "사진, 동영상 및 맵을 간결한 요약 메시지로 조합할 수 있는 텍스트가 많은 스토리의 레이아웃입니다.",
				floatTitle: "부동 패널",
				floatDescr: "지도에 포커스를 두고 간단한 양식의 투명한 텍스트 패널을 통해 스토리를 전달할 수 있는 레이아웃입니다."
			},
			common: {
				lblStatus1: "발행됨",
				lblStatus2: "드래프트",
				lblStatus3: "숨김"
			},
			settingsLayoutOptions: {
				title: "레이아웃 옵션",
				cfgLeft: "왼쪽",
				cfgRight: "오른쪽",
				cfgSmall: "소",
				cfgMedium: "중간",
				cfgLarge: "대",
				socialLinksLabel: "각 섹션의 하단에 공유 링크 표시",
				socialLinksDescr: "사용자가 %TPL_NAME%의 특정 섹션을 참조하고 홍보할 수 있도록 합니다. 예를 들어 섹션 공유 아이콘을 사용하는 경우 사용자는 스토리 시작 부분 대신 특정 %TPL_NAME% 섹션으로 이동합니다. 사용자는 제목 섹션에 있는 소셜 미디어 링크를 사용하여 전체 %TPL_NAME%(헤더 탭)을(를) 홍보하고 %TPL_NAME% 시작 부분에 둘 수 있습니다."
			},
			initPopup: {
				title: "시작"
			},
			addEditPopup: {
				disabled: "한_Add Section is disabled because the maximum number of allowed sections has been reached._빠",
				titleAdd: "섹션 추가",
				titleAddHome: "한_Add Home Section_빠",
				titleEdit: "섹션 편집",
				step: "단계",
				stepMainStageExplain: "한_Main Stage Content_빠",
				stepPanelExplain: "한_Content_빠",
				stepMainStageNextTooltip: "섹션 제목을 입력하고 기본 단계 컨텐츠를 선택합니다.",
				step2NextTooltip: "섹션 제목과 %LAYOUT-TYPE% 컨텐츠를 입력합니다.",
				stepNextTooltipNext: "다음 단계로 이동하려면",
				stepNextTooltipAdd: "섹션을 추가하려면",
				firstAddExplain: "한_This first section is your Home Section, think of it as the 'cover page' to your story. The title you just defined will be displayed with large fonts._빠",
				firstAddLeanMore: "한_Learn More_빠",
				titlePlaceholder: "섹션 제목..."
			},
			addEditViewText: {
				editorPlaceholder: "여기에 텍스트, 링크 및 작은 그래픽을 추가합니다.",
				editorActionsTitle: "기본 단계 작업",
				editorActionsHelpDescr: "한_Use these controls to create links that will change the main stage. For example, when the reader clicks a link, you may want to zoom the map to a specific location, display another web map or display an image._빠"
			},
			organizePopup: {
				title: "구성",
				lblHeader: "섹션을 끌어서 놓고 컨텐츠를 구성합니다.",
				lblColTitle: "제목",
				lblColPubDate: "발행 날짜",
				lblColStatus: "상태",
				checkDisplayReverse: "역순으로 섹션 표시",
				btnApplyWarning: "한_Confirm deletion of %NB% section(s)_빠",
				deleteTooltip: "삭제",
				firstSectionExplain: "(홈 섹션은 이동할 수 없음)"
			},
			exportData: {
				btn: "한_Export content_빠",
				tooltip: "한_Exporting your content allows you to view and create a back-up of your Journal should you accidentally delete it. Simply copy, paste, the content the page content into any word processor._빠"
			},
			help: {
				lblHelp: "도움말",
				lblAdd: "섹션 추가",
				lblSettings: "설정",
				lblOrga: "컨텐츠 구성",
				lblEdit: "편집",
				lblPublish: "공유",
				lblTips: "한_Tips_빠",
				lblMore: "자세히 알아보시겠습니까?",
				lblLink: "스토리 맵 웹 사이트를 방문하세요.",
				content1Div1: "스토리를 작성할 때 다양한 스타일을 통합할 수 있습니다. <strong>%LAYOUT_TITLE%</strong>에는 일반적으로 텍스트, 이미지 및 동영상이 포함되고, 맵은 <strong>기본 단계</strong>로 이동합니다. 그러나 %TPL_NAME%을(를) 통해 이미지, 차트 및 동영상도 기본 단계에 포함할 수 있습니다.",
				content1Div2: "섹션을 추가하면 스토리텔링 환경을 사용자 정의할 수 있습니다. 사용자가 %LAYOUT_TITLE% 텍스트를 스크롤하면 기본 단계의 맵이 주요 포인트로 이동 또는 확대/축소되거나, 새 맵 및 이미지가 자동으로 전환되어 메시지를 보완합니다.",
				content2Div1: "여기에서 %TPL_NAME%의 모양을 조정할 수 있습니다. 색 구성표, 레이아웃 및 너비가 모두 여기에서 세부적으로 조정됩니다.",
				content2Div2: "사용자가 %TPL_NAME%을(를) 다른 사람에게 쉽게 퍼뜨릴 수 있도록 Facebook, Twitter 및 Bitly에 공유 링크를 추가할 수도 있습니다.",
				content3Div1: "한_Your content is organized into sections. You can have as many sections as you like (think of them like mini chapters). The flow of those chapters is important; within Organize you can reorder or delete sections as you wish._빠",
				content4Div1: "실수를 발견했거나 자료를 변경하고 싶으십니까? 걱정하지 마세요. 앱 전체에서 편집 아이콘을 찾아 컨텐츠를 변경할 수 있습니다. %TPL_NAME%을(를) 개발할 때 원하는 만큼 편집 기능을 사용할 수 있습니다.",
				content5Div1: "%TPL_NAME%은(는) %PORTAL% 계정에 저장되며 기본적으로 비공개 상태입니다. 사용자는 이 컨텐츠를 기관과만 공유할지 또는 세상에 공개할지를 결정할 수 있습니다. 짧은 URL도 제공되므로 더욱 쉽게 공유할 수 있습니다.",
				content6Div1: "한_The title of your Home section is also the title of your Journal; think of your the Home section as  the 'cover page' to your story. The Home Section title will remain visible when your readers will navigate the Journal._빠",
				content6Div2: "한_Your %LAYOUT_TITLE% doesn't have to be just text, consider including photos and videos to help bring the story alive, and to break-up long sections of text!_빠"
			},
			landing: {
				lblAdd: "한_What do you want to call your Map Journal?_빠",
				phAdd: "한_Enter your title..._빠",
				lblOR: "또는",
				lblHelp: "둘러보기"
			},
			firstAddSplash: {
				thisis: "이것은"
			}
        }
    })

);
