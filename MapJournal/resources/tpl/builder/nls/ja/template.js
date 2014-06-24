define(
	 ({
		builder: {
			layouts: {
				mainStage: "メイン ステージ",
				sideTitle: "サイド パネル",
				sideDescr: "テキスト中心のストーリー用のレイアウトで、写真、ビデオ、マップを組み合わせて的を絞った明快なメッセージを作成することができます。",
				floatTitle: "フローティング パネル",
				floatDescr: "カートグラフィに焦点を当てたレイアウトで、透明で簡易的な形式のテキスト パネルが、ストーリーの説明に役立ちます。"
			},
			common: {
				lblStatus1: "公開済み",
				lblStatus2: "ドラフト",
				lblStatus3: "非表示"
			},
			settingsLayoutOptions: {
				title: "レイアウト オプション",
				cfgLeft: "左",
				cfgRight: "右",
				cfgSmall: "小",
				cfgMedium: "中",
				cfgLarge: "大",
				socialLinksLabel: "各セクションの下部に共有リンクを表示",
				socialLinksDescr: "これを使用して、ユーザに %TPL_NAME% の特定のセクションを参照させたり推奨することができます。たとえば、セクションの共有アイコンを使用すると、ユーザはストーリーの最初ではなく、%TPL_NAME% の特定のセクションに移動します。ユーザは、タイトル セクションのソーシャル メディア リンクを使用して、%TPL_NAME% 全体 (ヘッダー タブ) を推奨し、%TPL_NAME% の冒頭に移動させることができます。"
			},
			initPopup: {
				title: "ようこそ"
			},
			addEditPopup: {
				disabled: "須_Add Section is disabled because the maximum number of allowed sections has been reached._鷗",
				titleAdd: "セクションの追加",
				titleAddHome: "須_Add Home Section_鷗",
				titleEdit: "セクションの編集",
				step: "ステップ",
				stepMainStageExplain: "須_Main Stage Content_鷗",
				stepPanelExplain: "須_Content_鷗",
				stepMainStageNextTooltip: "セクション タイトルとメイン ステージのコンテンツを入力",
				step2NextTooltip: "セクション タイトルと %LAYOUT-TYPE% のコンテンツを入力",
				stepNextTooltipNext: "次のステップに進みます。",
				stepNextTooltipAdd: "セクションに追加します。",
				firstAddExplain: "須_This first section is your Home Section, think of it as the 'cover page' to your story. The title you just defined will be displayed with large fonts._鷗",
				firstAddLeanMore: "須_Learn More_鷗",
				titlePlaceholder: "セクション タイトル..."
			},
			addEditViewText: {
				editorPlaceholder: "テキスト、リンク、小さなグラフィックスをここに追加します。",
				editorActionsTitle: "メイン ステージ アクション",
				editorActionsHelpDescr: "須_Use these controls to create links that will change the main stage. For example, when the reader clicks a link, you may want to zoom the map to a specific location, display another web map or display an image._鷗"
			},
			organizePopup: {
				title: "整理",
				lblHeader: "セクションをドラッグ アンド ドロップして、コンテンツを整理します。",
				lblColTitle: "タイトル",
				lblColPubDate: "公開日",
				lblColStatus: "ステータス",
				checkDisplayReverse: "セクションを逆順に表示",
				btnApplyWarning: "須_Confirm deletion of %NB% section(s)_鷗",
				deleteTooltip: "削除",
				firstSectionExplain: "(ホーム セクションを移動できません)"
			},
			exportData: {
				btn: "須_Export content_鷗",
				tooltip: "須_Exporting your content allows you to view and create a back-up of your Journal should you accidentally delete it. Simply copy, paste, the content the page content into any word processor._鷗"
			},
			help: {
				lblHelp: "ヘルプ",
				lblAdd: "セクションの追加",
				lblSettings: "設定",
				lblOrga: "コンテンツの整理",
				lblEdit: "編集",
				lblPublish: "共有",
				lblTips: "須_Tips_鷗",
				lblMore: "詳細",
				lblLink: "ストーリー マップ Web サイトに移動します。",
				content1Div1: "さまざまなスタイルを統合してストーリーを作成することができます。通常、<strong>%LAYOUT_TITLE%</strong> にはテキスト、画像、ビデオが含まれ、マップは<strong>メイン ステージ</strong>に配置されることが多いですが、%TPL_NAME% を使用すると、ユーザはメイン ステージ内にも注目の画像、チャート、ビデオを表示することができます。",
				content1Div2: "セクションを追加すると、ストーリーテリングを詳細にカスタマイズできます。ユーザが %LAYOUT_TITLE% のテキストをスクロールしたときに、メイン ステージ上のマップが画面移動または主要ポイントにズームしたり、新しいマップと画像を自動的に切り替えたりして、メッセージをサポートできます。",
				content2Div1: "ここで %TPL_NAME% の外観を調整できます。ここでは、配色、レイアウト、およびウィジェットをすべて調整できます。",
				content2Div2: "また、リンクを Facebook、Twitter、および Bitly で共有して、ユーザが簡単に %TPL_NAME% を他のユーザに広めることもできます。",
				content3Div1: "須_Your content is organized into sections. You can have as many sections as you like (think of them like mini chapters). The flow of those chapters is important; within Organize you can reorder or delete sections as you wish._鷗",
				content4Div1: "間違いを見つけた場合やマテリアルを変更したい場合でも簡単に編集できます。コンテンツを変更するには、アプリケーションに表示されている編集アイコンを使用します。%TPL_NAME% の開発では、編集機能を多く使用します。",
				content5Div1: "%TPL_NAME% は、%PORTAL% アカウントに保存され、デフォルトではプライベートになります。これを組織サイトで共有するか、世界中に公開するかを決定できます。また、簡単に共有できるように、短縮された URL を提供することもできます。",
				content6Div1: "須_The title of your Home section is also the title of your Journal; think of your the Home section as  the 'cover page' to your story. The Home Section title will remain visible when your readers will navigate the Journal._鷗",
				content6Div2: "須_Your %LAYOUT_TITLE% doesn't have to be just text, consider including photos and videos to help bring the story alive, and to break-up long sections of text!_鷗"
			},
			landing: {
				lblAdd: "須_What do you want to call your Map Journal?_鷗",
				phAdd: "須_Enter your title..._鷗",
				lblOR: "または",
				lblHelp: "ツアーの開始"
			},
			firstAddSplash: {
				thisis: "これは"
			}
        }
    })

);
