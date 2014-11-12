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
				height: "高さ"
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
				buttonPreview: "最新表示",
				tooltipFirstSave: "須_This isn't available until you save_鷗.",
				tooltipNotShared: "須_This isn't available until you share_鷗.",
				noPendingChange: "保留中の変更はありません",
				unSavedChangePlural: "保留中の変更",
				closeWithPendingChange: "このアクションを確認しますか？変更内容は失われます。",
				saveError: "保存に失敗しました。もう一度やり直してください。",
				shareStatus1: "アプリケーションはまだ保存されていません",
				shareStatus2: "アプリケーションがパブリックに共有されています",
				shareStatus3: "アプリケーションが組織サイト内で共有されています",
				shareStatus4: "アプリケーションが共有されていません"
			},
			saveError: {
				title: "アプリケーションの保存中にエラーが発生しました",
				err1Div1: "すでに同じ名前のアイテムがあるためアプリケーションが保存できません (<a class='linkagolroot' target='_blank'>コンテンツ フォルダ</a>をご参照ください)。",
				err1Div2: "須_Please modify the title of your application and then save it_鷗.",
				btnOk: "須_Edit the application title_鷗"
			},
			share: {
				firstSaveTitle: "アプリケーションが保存されました",
				firstSaveHeader: "アプリケーションが %PORTAL% に保存されましたが、まだ共有されていません。",
				firstSavePreview: "プレビュー",
				firstSaveShare: "共有",
				firstSaveA1: "%PORTAL% の操作に慣れていない、またはビルダ インタフェースに簡単にアクセスしたい場合は、次のリンクを保存できます: %LINK1%",
				firstSaveA1bis: "アプリケーションは、<a href='%LINK2%' target='_blank'>%PORTAL% のコンテンツ フォルダ</a>内にもあります。",
				shareTitle: "アプリケーションの共有",
				sharePrivateHeader: "アプリケーションが共有されていません。共有しますか？",
				sharePrivateBtn1: "パブリックに共有",
				sharePrivateBtn2: "組織サイト内で共有",
				sharePrivateWarning: "<a href='%LINK%' target='_blank'>Web マップ</a>の所有者でないため、%WITH% の共有は無効化されています。",
				sharePrivateWarningWith1: "パブリック",
				sharePrivateWarningWith2: "パブリックおよび組織",
				sharePrivateProgress: "共有の実行中...",
				sharePrivateErr: "共有に失敗しました。もう一度行ってください。",
				sharePrivateOk: "共有の更新に成功しました。読み込んでいます...",
				shareHeader1: "アプリケーションには<strong>一般ユーザがアクセスできます</strong>。",
				shareHeader2: "アプリケーションには組織のメンバーがアクセスできます (ログインが必要)。",
				shareLinkCopy: "コピー",
				shareLinkCopied: "コピー",
				shareQ0: "須_How do I embed the application in a web page_鷗?",
				shareQ1Opt1: "アプリケーションをプライベートにする方法",
				shareQ1Opt2: "アプリケーションのプライベート使用とパブリック使用を切り替える方法",
				shareA1: "<a href='%LINK1%' target='_blank'>アプリケーション アイテム ページ</a>で %SHAREIMG% を使用します。",
				shareQ2bis: "ビルダ インタフェースに戻る方法",
				shareA2div1: "次のリンク %LINK1% を保存および再利用するか、<a href='%LINK2%' target='_blank'>アプリケーション アイテム ページ</a>を使用します。",
				shareA2div2: "アプリケーションの所有者として %PORTAL% にサイン インした場合、アプリケーションにビルダを開くボタンが含まれます。",				
				shareQ3: "データの保存場所は？",
				shareA3: "%TPL_NAME% のデータと構成は、<a href='%LINK2%' target='_blank'>この Web アプリケーション アイテム</a>に保存されます。Flickr、Picasa、Facebook、または YouTube のインポートを使用した場合、画像とビデオは %PORTAL% に複製されていません。"
			},
			settings: {
				header: "設定",
				tabError: "すべてのタブでエラーを確認してください"
			},
			settingsLayout: {
				title: "レイアウト",
				explain: "使用するレイアウト",
				explainInit: "レイアウトは、設定ダイアログからいつでも変更できます。",
				viewExample: "最新例を表示"
			},
			settingsTheme: {
				title: "主題"
			},
			settingsHeader: {
				title: "ヘッダー",
				logoEsri: "Esri ロゴ",
				logoNone: "ロゴなし",
				logoCustom: "カスタム ロゴ",
				logoCustomPlaceholder: "URL (最大 250x50 ピクセル)",
				logoCustomTargetPlaceholder: "クリックスルー リンク",
				logoSocialExplain: "ヘッダー リンクをカスタマイズします。",
				logoSocialText: "テキスト",
				logoSocialLink: "リンク",
				lblSmallHeader: "須_Use compact header (no subtitle)_鷗"
			},
			header: {
				title: "須_Edit the title of your %TPL_NAME%_鷗",
				subtitle: "須_Edit the subtitle of your %TPL_NAME%_鷗"
			}
		}
	})
);
