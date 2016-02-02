﻿define(
	 ({
		viewer: {
			common: {
				close: "閉じる"
			},
			loading: {
				step1: "ストーリーの読み込み",
				step2: "データを読み込んでいます",
				step3: "初期化しています",
				loadBuilder: "ビルダに切り替えています",
				long: "マップ ジャーナルを初期化しています",
				long2: "お待ちください",
				failButton: "ストーリーの再読み込み"
			},
			signin: {
				title: "認証が必要です",
				explainViewer: "ストーリーにアクセスするには、%PORTAL_LINK% でアカウントを使用してサイン インしてください。",
				explainBuilder: "ストーリーを構成するには、%PORTAL_LINK% でアカウントを使用してサイン インしてください。"
			},
			errors: {
				boxTitle: "エラーが発生しました",
				invalidConfig: "無効な構成",
				invalidConfigNoApp: "Web マッピング アプリケーションの識別子が index.html で指定されていません。",
				invalidConfigNoAppDev: "須_No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored______________________________________________鷗.",
				unspecifiedConfigOwner: "権限のある所有者が構成されていません。",
				invalidConfigOwner: "ストーリーの所有者に権限がありません。",
				createMap: "マップを作成できません",
				invalidApp: "%TPL_NAME% が存在しないか、アクセスできません。",
				appLoadingFail: "問題が発生しました。%TPL_NAME% を正しく読み込みませんでした。",
				notConfiguredDesktop: "このストーリーは、まだ構成されていません。",
				notConfiguredMobile: "須_The %TPL_NAME% builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen______________________________________________________鷗.",
				notConfiguredMobile2: "須_Please rotate your device to landscape orientation to use the %TPL_NAME% builder_________________________鷗.",
				notAuthorized: "このストーリーにアクセスする権限が与えられていません。",
				notAuthorizedBuilder: "須_You are not authorized to use %TPL_NAME% builder________________鷗.",
				noBuilderIE: "ビルダは、Internet Explorer %VERSION% より前のバージョンではサポートされていません。%アップグレード%",
				noViewerIE: "このストーリーは、Internet Explorer %VERSION% より前のバージョンではサポートされていません。%UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>ブラウザを更新してください</a>。",
				mapLoadingFail: "須_Something went wrong, the map did not load correctly_________________鷗.",
				signOut: "サイン アウト"
			},
			mobileView: {
				tapForDetails: "タップして詳細を表示",
				clickForDetails: "詳細",
				swipeToExplore: "スワイプして探索",
				tapForMap: "タップしてマップに戻る",
				clickForMap: "マップに戻る"
			},
			floatLayout: {
				scroll: "スクロール"
			},
			sideLayout: {
				scroll: "下にスクロールして詳細を表示"
			},
			mainStage: {
				back: "戻る"
			},
			headerFromCommon: {
				storymapsText: "ストーリー マップ",
				builderButton: "編集",
				facebookTooltip: "Facebook で共有",
				twitterTooltip: "Twitter で共有",
				bitlyTooltip: "ショート リンクを取得",
				templateTitle: "テンプレートのタイトルの設定",
				templateSubtitle: "テンプレートのサブタイトルの設定",
				share: "共有",
				checking: "ストーリーのコンテンツをチェックしています",
				fix: "ストーリーの問題を修正する",
				noerrors: "問題は見つかりませんでした",
				tooltipAutoplayDisabled: "須_This isn't available in autoplay mode____________鷗",
				notshared: "須_Story not shared______鷗"
			},
			overviewFromCommon: {
				title: "概観図"
			},
			legendFromCommon: {
				title: "凡例"
			},
			shareFromCommon: {
				copy: "コピー",
				copied: "コピー",
				open: "開く",
				embed: "Web ページに埋め込む",
				embedExplain: "ジャーナルを Web ページに埋め込むには、次の HTML コードを使用します。",
				size: "サイズ (幅/高さ):",
				autoplayLabel: "須_Autoplay mode_____鷗",
				autoplayExplain1: "須_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________鷗.",
				autoplayExplain2: "須_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________鷗.",
				linksupdated: "須_Links updated_____鷗!"
			}
        }
    })
);