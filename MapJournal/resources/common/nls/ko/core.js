define(
	({
		commonCore: {
			common: {
				add: "추가",
				edit: "편집",
				save: "저장",
				next: "다음",
				cancel: "취소",
				back: "뒤로",
				apply: "적용",
				close: "닫기",
				open: "열기",
				start: "시작",
				loading: "로드 중",
				disabledAdmin: "이 기능은 관리자가 사용하지 않도록 설정했습니다."
			},
			inlineFieldEdit: {
				editMe: "편집!"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME% 빌더",
				buttonSaving: "저장",
				buttonSaved: "저장됨",
				buttonShare: "공유",
				buttonSettings: "설정",
				buttonHelp: "도움말",
				buttonPreview: "라이브 보기",
				tooltipFirstSave: "한_This function is not available until the application is saved_빠",
				tooltipNotShared: "한_This function is not available until the application is shared_빠",
				noPendingChange: "보류 중인 변경 사항 없음",
				unSavedChangePlural: "보류 중인 변경 내용",
				closeWithPendingChange: "이 작업을 확인하시겠습니까? 변경 내용이 손실됩니다.",
				saveError: "저장하지 못했습니다. 다시 시도하세요.",
				shareStatus1: "응용프로그램을 아직 저장하지 않습니다.",
				shareStatus2: "응용프로그램이 공개적으로 공유됨",
				shareStatus3: "응용프로그램이 기관 내에서 공유됨",
				shareStatus4: "응용프로그램이 공유되지 않음"
			},
			share: {
				firstSaveTitle: "응용프로그램이 저장됨",
				firstSaveHeader: "한_Your application is now saved in %PORTAL% but it is not shared yet._빠",
				firstSavePreview: "미리보기",
				firstSaveShare: "공유",
				firstSaveA1: "%PORTAL%에 익숙하지 않거나 바로가기를 통해 빌더 인터페이스에 접근하려면 다음 링크를 저장하면 됩니다. %LINK1%",
				firstSaveA1bis: "<a href='%LINK2%' target='_blank'>%PORTAL% 컨텐츠 폴더</a>에서도 응용프로그램을 찾을 수 있습니다.",
				shareTitle: "응용프로그램 공유",
				sharePrivateHeader: "응용프로그램이 공유되고 있지 않습니다. 공유하시겠습니까?",
				sharePrivateBtn1: "공개적으로 공유",
				sharePrivateBtn2: "내 기관과 공유",
				sharePrivateWarning: "<a href='%LINK%' target='_blank'>웹 맵</a>의 소유자가 아니므로 %WITH% 공유를 사용할 수 없습니다.",
				sharePrivateWarningWith1: "공개",
				sharePrivateWarningWith2: "기관에 공개",
				sharePrivateProgress: "공유 처리 중...",
				sharePrivateErr: "공유에 실패했습니다. 다시 시도하거나",
				sharePrivateOk: "공유가 업데이트되었습니다. 로그하는 중...",
				shareHeader1: "응용프로그램에 <strong>공개적으로 접근 가능</strong>합니다.",
				shareHeader2: "기관의 구성원이 응용프로그램에 접근할 수 있습니다(로그인 필요).",
				shareLinkCopy: "복사",
				shareLinkCopied: "복사됨",
				shareQ1Opt1: "응용프로그램을 비공개 상태로 유지하려면 어떻게 해야 합니까?",
				shareQ1Opt2: "응용프로그램을 비공개 상태로 유지하거나 공개적으로 공유하려면 어떻게 해야 합니까?",
				shareA1: "<a href='%LINK1%' target='_blank'>응용프로그램 항목 페이지</a>의 %SHAREIMG%를 사용합니다.",
				shareQ2bis: "빌더 인터페이스로 돌아가려면 어떻게 해야 합니까?",
				shareA2div1: "%LINK1% 링크를 저장하여 다시 사용하거나 <a href='%LINK2%' target='_blank'>응용프로그램 항목 페이지</a>를 사용하세요.",
				shareA2div2: "응용프로그램의 소유자인 경우 %PORTAL%에 로그인하면 빌더를 열 수 있는 버튼이 응용프로그램에 표시됩니다.",				
				shareQ3: "데이터는 어디에 저장되나요?",
				shareA3: "한_%TPL_NAME% data and configuration are stored in <a href='%LINK2%' target='_blank'>this web application item</a>. If you have used Flickr, Picasa, Facebook or YouTube import, your images and videos have not been duplicated in %PORTAL%._빠"
			},
			settings: {
				header: "설정",
				tabError: "한_Please check all tabs for errors_빠"
			},
			settingsLayout: {
				title: "레이아웃",
				explain: "한_Which layout do you want to use?_빠",
				explainInit: "한_You can change the layout anytime from the settings panel._빠",
				viewExample: "라이브 예 보기"
			},
			settingsTheme: {
				title: "테마"
			},
			settingsHeader: {
				title: "헤더",
				logoEsri: "Esri 로고",
				logoNone: "로고 없음",
				logoCustom: "사용자 지정 로고",
				logoCustomPlaceholder: "URL(최대 250x50픽셀)",
				logoCustomTargetPlaceholder: "클릭 이동 링크",
				logoSocialExplain: "헤더 링크를 사용자 정의합니다.",
				logoSocialText: "텍스트",
				logoSocialLink: "링크"
			}
		}
	})

);
