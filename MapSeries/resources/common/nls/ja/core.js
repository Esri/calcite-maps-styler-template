define(
	 ({
		commonCore: {
			common: {
				add: "追加",
				edit: "編集",
				save: "保存",
				next: "次へ",
				cancel: "キャンセル",
				back: "戻る",
				apply: "適用",
				close: "閉じる",
				open: "開く",
				start: "開始",
				loading: "読み込んでいます",
				disabledAdmin: "この機能は、管理者によって無効にされています",
				width: "幅",
				height: "高さ",
				create: "作成",
				yes: "はい",
				no: "いいえ",
				mystories: "須_My Stories____鷗"
			},
			inlineFieldEdit: {
				editMe: "編集"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME% ビルダ",
				buttonSaving: "保存中",
				buttonSaved: "保存完了",
				buttonShare: "共有",
				buttonSettings: "設定",
				buttonHelp: "ヘルプ",
				buttonPreview: "須_View story____鷗",
				tooltipFirstSave: "これは保存するまで利用できません。",
				tooltipNotShared: "これは共有するまで利用できません。",
				tooltipNotShared2: "須_Your story isn't shared, only you can access it_______________鷗.",
				noPendingChange: "保留中の変更はありません",
				unSavedChangePlural: "保留中の変更",
				closeWithPendingChange: "このアクションを確認しますか？変更内容は失われます。",
				saveError: "保存に失敗しました。もう一度やり直してください。",
				status1: "ストーリーは共有されていますが、問題があります",
				status2: "ストーリーは共有されていませんが、問題があります",
				status3: "ストーリーはパブリックです",
				status4: "ストーリーは組織サイト内で共有されています",
				status5: "ストーリーはプライベートです",
				status6: "ストーリーはまだ保存されていません",
				checking: "チェック中",
				fix: "修正"
			},
			saveError: {
				title: "ストーリーの保存中にエラーが発生しました",
				err1Div1: "同じ名前の別のアイテムがすでに存在するため、ストーリーを保存できません。",
				err1Div2: "ストーリーのタイトルを変更して保存してください。",
				btnOk: "ストーリー タイトルの編集"
			},
			saveErrorSocial: {
				title: "須_Social media sharing update_________鷗",
				panel1: "須_Your storyâ€™s appearance on social media has been improved, but your ArcGIS web application item title is not the same as your story title___________________________________________鷗.",
				panel1tooltip: "須_By defining a title, summary and thumbnail image, your story will look like this_________________________鷗:",
				panel2:	"須_Which title would you like to use on social media________________鷗:",
				panel2q1: "須_Story title (recommended)_________鷗",
				panel2q1tooltip: "須_By choosing this option, your item title will be modified to match your story title and further changes in the builder will be synchronized___________________________________________鷗.",
				panel2q2: "須_Item title____鷗",
				panel3: "須_To further improve how your story looks on social media use ${MYSTORIES} to add a summary and a thumbnail image___________________________________鷗.",
				panel4: "須_Do not warn me again for this story____________鷗"
			},
			share: {
				shareTitle: "ストーリーの共有",
				preview: "プレビュー",
				viewlive: "須_View story____鷗",
				btnPrivate: "プライベート",
				btnPrivateTooltip: "このストーリーを表示できるのはあなただけです",
				btnOrg: "組織",
				btnOrgTooltip: "このストーリーを表示できるのは組織サイトのメンバーだけです",
				btnPublic: "パブリック",
				btnPublicTooltip: "すべてのユーザーがこのストーリーを表示できます",
				loadingMessage: "ストーリーの問題をチェックしています",
				viewToggle1: "ストーリーのコンテンツの表示",
				viewToggle2: "ストーリーのコンテンツを閉じる",
				socialize: "ソーシャライズ",
				statusPrivate: "ストーリーはプライベートです。このストーリーを表示できるのはあなただけです。",
				statusError: "ストーリーのコンテンツには、ユーザーに目立つ問題があります。それらの問題は、以下より特定して修正できます。",
				statusNoErrPrivate: "準備ができたら、ストーリーを共有しましょう。",
				mystoriesinvite: "すべてのストーリーの管理",
				notavailable1: "このアプリケーションは %PRODUCT% でホストされていないため、ビルダーからのストーリーの共有はサポートされていません。",
				notavailable2: "Portal for ArcGIS のこのバージョンでは、ビルダーからのストーリーの共有はサポートされていません (10.4以降が必要です)。",
				notavailable3: "このストーリーを %LINK% から共有できます。",
				notavailable4: "マイ ストーリー",
				notavailable5: "須_its item page_____鷗",
				notavailable6: "開発モードでは、この機能は一部サポートされません。配置シナリオによっては、配置時にこの機能がサポートされる場合があります。",
				notavailable7: "必ず %MYCONTENT% を参照し、ストーリーで使用されているマップとレイヤーも共有されていることを確認してください。",
				notavailable8: "マイ コンテンツ",
				mystoriesinvite2: "須_To improve how your story looks on social networks use ${MYSTORIES} to add a summary and a thumbnail image_________________________________鷗."
			},
			settings: {
				header: "設定",
				tabError: "すべてのタブでエラーを確認してください"
			},
			settingsLayout: {
				title: "須_Layout___鷗",
				explain: "使用するレイアウト",
				explainInit: "レイアウトは、設定ダイアログからいつでも変更できます。",
				viewExample: "最新例を表示"
			},
			settingsTheme: {
				title: "須_Theme___鷗"
			},
			settingsHeader: {
				title: "須_Header___鷗",
				logoEsri: "Esri ロゴ",
				logoNone: "ロゴなし",
				logoCustom: "カスタム ロゴ",
				logoCustomPlaceholder: "URL (最大 250x50 ピクセル)",
				logoCustomTargetPlaceholder: "クリックスルー リンク",
				logoSocialExplain: "ヘッダー リンクをカスタマイズします。",
				logoSocialText: "テキスト",
				logoSocialLink: "リンク",
				lblSmallHeader: "コンパクトなヘッダーを使用 (サブタイプなし)"
			},
			header: {
				title: "須_Edit the title of your %TPL_NAME%___________鷗",
				subtitle: "%TPL_NAME% のサブタイトルの編集"
			}
		}
	})
);
