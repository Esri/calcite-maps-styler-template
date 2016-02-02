define(
	 ({
		viewer: {
			common: {
				close: "닫기"
			},
			loading: {
				step1: "스토리 불러오는 중",
				step2: "데이터를 불러오는 중",
				step3: "초기화하는 중",
				loadBuilder: "빌더로 전환하는 중",
				long: "맵 저널을 초기화하는 중",
				long2: "기다려 주셔서 감사합니다.",
				failButton: "스토리 다시 불러오기"
			},
			signin: {
				title: "인증 필요",
				explainViewer: "스토리에 접근하려면 %PORTAL_LINK%에 계정으로 로그인하세요.",
				explainBuilder: "스토리를 구성하려면 %PORTAL_LINK%에 계정으로 로그인하세요."
			},
			errors: {
				boxTitle: "오류가 발생했습니다.",
				invalidConfig: "잘못된 구성",
				invalidConfigNoApp: "웹 매핑 응용프로그램 식별자가 index.html에 지정되어 있지 않습니다.",
				invalidConfigNoAppDev: "한_No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored______________________________________________빠.",
				unspecifiedConfigOwner: "권한 있는 소유자가 구성되지 않음",
				invalidConfigOwner: "스토리 소유자가 인증되지 않았습니다.",
				createMap: "맵을 생성할 수 없음",
				invalidApp: "%TPL_NAME%이(가) 존재하지 않거나 여기에 액세스할 수 없습니다.",
				appLoadingFail: "문제가 발생했습니다. %TPL_NAME%이(가) 올바르게 로드되지 않았습니다.",
				notConfiguredDesktop: "스토리가 아직 구성되지 않았습니다.",
				notConfiguredMobile: "한_The %TPL_NAME% builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen______________________________________________________빠.",
				notConfiguredMobile2: "한_Please rotate your device to landscape orientation to use the %TPL_NAME% builder_________________________빠.",
				notAuthorized: "이 스토리에 접근할 권한 없음",
				notAuthorizedBuilder: "한_You are not authorized to use %TPL_NAME% builder________________빠.",
				noBuilderIE: "이 빌더는 %VERSION%. %UPGRADE% 이전 버전의 Internet Explorer에서 지원되지 않습니다.",
				noViewerIE: "이 스토리는 %VERSION% 이전 버전의 Internet Explorer에서 지원되지 않습니다. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>브라우저를 업데이트하세요</a>.",
				mapLoadingFail: "한_Something went wrong, the map did not load correctly_________________빠.",
				signOut: "로그아웃"
			},
			mobileView: {
				tapForDetails: "세부정보를 보려면 누릅니다.",
				clickForDetails: "자세한 정보",
				swipeToExplore: "탐색하려면 스와이프",
				tapForMap: "맵으로 돌아가려면 누릅니다.",
				clickForMap: "맵으로 돌아가기"
			},
			floatLayout: {
				scroll: "스크롤"
			},
			sideLayout: {
				scroll: "더 많은 항목을 보려면 아래로 스크롤합니다."
			},
			mainStage: {
				back: "뒤로"
			},
			headerFromCommon: {
				storymapsText: "스토리 맵",
				builderButton: "편집",
				facebookTooltip: "Facebook에 공유",
				twitterTooltip: "Twitter에 공유",
				bitlyTooltip: "짧은 링크 가져오기",
				templateTitle: "템플릿 제목 설정",
				templateSubtitle: "템플릿 부제목 설정",
				share: "공유",
				checking: "스토리 콘텐츠를 확인하는 중",
				fix: "스토리의 문제 해결",
				noerrors: "문제가 감지되지 않음",
				tooltipAutoplayDisabled: "한_This isn't available in autoplay mode____________빠",
				notshared: "한_Story not shared______빠"
			},
			overviewFromCommon: {
				title: "개요 맵"
			},
			legendFromCommon: {
				title: "범례"
			},
			shareFromCommon: {
				copy: "복사",
				copied: "복사됨",
				open: "열기",
				embed: "웹 페이지에 포함",
				embedExplain: "다음 HTML 코드를 사용하여 저널을 웹 페이지에 포함시킵니다.",
				size: "크기(너비/높이):",
				autoplayLabel: "한_Autoplay mode_____빠",
				autoplayExplain1: "한_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________빠.",
				autoplayExplain2: "한_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________빠.",
				linksupdated: "한_Links updated_____빠!"
			}
        }
    })
);