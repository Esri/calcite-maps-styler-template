define(
	 ({
		viewer: {
			common: {
				close: "닫기"
			},
			loading: {
				long: "스토리를 초기화하는 중",
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
				invalidConfigNoApp: "index.html에 웹 매핑 응용프로그램 식별자가 지정되지 않았습니다.",
				invalidConfigNoAppDev: "한_No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored______________________________________________빠.",
				unspecifiedConfigOwner: "권한이 있는 소유자가 구성되지 않았습니다.",
				invalidConfigOwner: "스토리 소유자가 인증되지 않았습니다.",
				createMap: "맵을 생성할 수 없음",
				invalidApp: "%TPL_NAME%이(가) 없거나 액세스할 수 없습니다.",
				appLoadingFail: "오류가 발생했습니다. %TPL_NAME%을(를) 올바르게 불러오지 않았습니다.",
				notConfiguredDesktop: "스토리가 아직 구성되지 않았습니다.",
				notConfiguredMobile: "한_The %TPL_NAME% builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen______________________________________________________빠.",
				notConfiguredMobile2: "한_Please rotate your device to landscape orientation to use the %TPL_NAME% builder_________________________빠.",
				notAuthorized: "이 스토리에 접근할 권한 없음",
				notAuthorizedBuilder: "한_You are not authorized to use %TPL_NAME% builder________________빠.",
				noBuilderIE: "빌더는 %VERSION% 이전 버전의 Internet Explorer에서 지원되지 않습니다. %UPGRADE%",
				noViewerIE: "이 스토리는 %VERSION% 이전 버전의 Internet Explorer에서 지원되지 않습니다. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>브라우저를 업데이트하세요</a>.",
				mapLoadingFail: "오류가 발생했습니다. 맵을 올바르게 불러오지 않았습니다.",
				signOut: "로그아웃"
			},
			mobileInfo: {
				legend: "범례",
				description: "설명",
				lblLegendMobileError: "죄송합니다. 범례를 사용할 수 없습니다. 스토리를 다시 불러오세요.",
				lblLegendMobileErrorExplain: "스토리를 불러온 후 기기를 세로 모드로 회전하면 범례를 사용할 수 없습니다."
			},
			mobileFooter: {
				swipeInvite: "스토리를 탐색하려면 스와이프",
				lblNext: "다음",
				lblEnd: "스토리 끝에 도달했습니다."
			},
			headerFromCommon: {
				storymapsText: "스토리 맵",
				builderButton: "편집",
				facebookTooltip: "Facebook에  공유",
				twitterTooltip: "Twitter에  공유",
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
				title: "오버뷰 맵"
			},
			legendFromCommon: {
				title: "범례"
			},
			shareFromCommon: {
				copy: "복사",
				copied: "복사됨",
				open: "열기",
				embed: "웹 페이지에 임베드",
				embedExplain: "스토리를 웹 페이지에 임베드하려면 다음의 HTML 코드를 사용합니다.",
				size: "크기(너비/높이):",
				autoplayLabel: "한_Autoplay mode_____빠",
				autoplayExplain1: "한_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________빠.",
				autoplayExplain2: "한_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________빠.",
				linksupdated: "한_Links updated_____빠!"
			},
			locatorFromCommon: {
				error: "위치를 사용할 수 없음"
			}
        }
    })
);