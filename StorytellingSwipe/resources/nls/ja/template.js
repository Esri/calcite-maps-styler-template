define(
	({
		viewer: {
			loading: {
				step1: "アプリケーションを読み込んでいます",
				step2: "データを読み込んでいます",
				step3: "初期化",
				fail: "スワイプの読み込みに失敗しました",
				loadBuilder: "ビルダ モードへの切り替え",
				redirectSignIn: "須_REDIRECTING TO SIGN-IN PAGE_鷗",
				redirectSignIn2: "須_(you will be redirected here after sign-in)_鷗",
				failButton: "再試行"
			},
			errors: {
				boxTitle: "エラーが発生しました",
				portalSelf: "致命的なエラー: ポータルの構成情報を取得できませんでした",
				invalidConfig: "致命的なエラー: 無効な構成",
				invalidConfigNoWebmap: "致命的なエラー: 無効な構成 (Web マップが指定されていません)",
				createMap: "マップを作成できません",
				invalidApp: "致命的なエラー: アプリケーションを読み込めません",
				initMobile: "スワイプ Web アプリケーションへようこそ。アプリケーションは構成されていません。 モバイル デバイスでは、対話型ビルダはサポートされていません。",
				noBuilderIE8: "バージョン 9 よりも前の Internet Explorer では、スワイプ対話型ビルダはサポートされていません。",
				noLayerView: "スワイプ Web アプリケーションへようこそ。<br />アプリケーションは、まだ構成されていません。",
				appSave: "Web アプリケーションの保存中にエラーが発生しました",
				mapSave: "Web マップの保存中にエラーが発生しました",
				notAuthorized: "このアプリケーションにアクセスする権限がありません",
				conflictingProjectionsTitle: "投影法の競合",
				conflictingProjections: "スワイプでは、投影法の異なる 2 つの Web マップを使用できません。設定を開き、最初の Web マップと投影法が同じである Web マップを使用してください。",
				cpButton: "閉じる"
			},
			mobileView: {
				hideIntro: "概要を非表示",
				navLeft: "凡例",
				navMap: "マップ",
				navRight: "データ"
			},
			desktopView: {
				storymapsText: "ストーリー マップ",
				builderButton: "ビルダ モードに切り替え",
				bitlyTooltip: "アプリケーションへのショート リンクを取得"
			}
		},
		builder: {
			builder: {
				panelHeader: "アプリケーション構成",
				buttonSave: "保存",
				buttonHelp: "須_Help_鷗",
				buttonShare: "須_Share_鷗",
				buttonDiscard: "キャンセル",
				buttonSettings: "設定",
				buttonView: "ビュー モード",
				buttonItem: "Web アプリケーション アイテムを開く",
				noPendingChange: "保留中の変更はありません",
				unSavedChangeSingular: "1 つの保存されていない変更",
				unSavedChangePlural: "複数の保存されていない変更",
				popoverDiscard: "保存されていない変更を破棄しますか？",
				yes: "はい",
				no: "いいえ",
				popoverOpenViewExplain: "ビューアを開くと、保存されていない変更は失われます",
				popoverOpenViewOk: "OK",
				popoverOpenViewCancel: "キャンセル",
				popoverSaveWhenDone: "完了したら必ず保存してください",
				closeWithPendingChange: "アクションを確認しますか？変更内容は失われます。",
				gotIt: "OK",
				savingApplication: "アプリケーションを保存しています",
				saveSuccess: "アプリケーションは正常に保存されました",
				saveError: "保存に失敗しました。もう一度やり直してください。",
				saveError2: "須_Save failed due to an invalid html tag in a name or description_鷗",
				saveError3: "須_The title can't be empty_鷗",
				signIn: "アカウントでサイン インして",
				signInTwo: "アプリケーションを保存してください。"
			},
			header:{
				editMe: "編集",
				templateTitle: "テンプレートのタイトルの設定",
				templateSubtitle: "テンプレートのサブタイトルの設定"
			},
			settings: {
				settingsHeader: "アプリケーション設定",
				modalCancel: "キャンセル",
				modalApply: "適用"
			},
			settingsColors: {
				settingsTabColor: "主題",
				settingsColorExplain: "アプリケーションの主題を選択したり、独自の色を定義したりします。",
				settingsLabelColor: "ヘッダーとサイド パネルの背景色"
			},
			settingsHeader: {
				settingsTabLogo: "ヘッダー",
				settingsLogoExplain: "ヘッダー ロゴをカスタマイズします (最大 250 x 50 ピクセル)。",
				settingsLogoEsri: "Esri ロゴ",
				settingsLogoNone: "ロゴなし",
				settingsLogoCustom: "カスタム ロゴ",
				settingsLogoCustomPlaceholder: "画像の URL",
				settingsLogoCustomTargetPlaceholder: "クリックスルー リンク",
				settingsLogoSocialExplain: "ヘッダー右上にあるリンクのカスタマイズ",
				settingsLogoSocialText: "テキスト",
				settingsLogoSocialLink: "リンク",
				settingsLogoSocialDisabled: "この機能は、管理者によって無効にされています"
			},
			settingsExtent: {
				settingsTabExtent: "範囲",
				settingsExtentExplain: "以下の対話型マップを使用して初期範囲を設定します。",
				settingsExtentExplainBottom: "定義した範囲によって、Web マップの初期範囲が変更されます。スワイプ操作を実行する場合、その範囲は使用されないことに注意してください。",
				settingsExtentDateLineError: "須_The extent cannot be across the meridian of 180ï¿½ longitude_鷗",
				settingsExtentDateLineError2: "範囲を計算中にエラーが発生しました",
				settingsExtentDrawBtn: "新しい範囲の描画",
				settingsExtentModifyBtn: "現在の範囲の編集",
				settingsExtentApplyBtn: "メイン マップに適用",
				settingsExtentUseMainMap: "メイン マップ範囲の使用"
			}
        },
		swipe: {
			mobileData: {
				noData: "表示するデータがありません",
				noDataExplain: "マップをタップしてフィーチャを選択してから、ここに戻ってください",
				noDataMap: "このマップ用のデータがありません",
				noPopup: "このフィーチャにはポップアップがありません"
			},
			mobileLegend: {
				noLegend: "表示する凡例がありません。"
			},
			swipeSidePanel: {
				editTooltip: "サイド パネルの説明を設定",
				editMe: "編集",
				legendTitle: "凡例"
			},
			infoWindow: {
				noFeature: "表示するデータがありません",
				noFeatureExplain: "マップをタップしてフィーチャを選択します"
			},
			settingsLayout: {
				settingsTabLayout: "スワイプのスタイル",
				settingsLayoutExplain: "スワイプ ツールのスタイルを選択します。",
				settingsLayoutSwipe: "垂直バー",
				settingsLayoutSpyGlass: "スパイグラス (のぞき窓)",
				settingsLayoutSelected: "選択したレイアウト",
				settingsLayoutSelect: "このレイアウトを選択",
				settingsSaveConfirm: "一部の変更は、保存してアプリケーションを再読み込みする必要があります"
			},
			settingsDataModel: {
				settingsTabDataModel: "スワイプのタイプ",
				settingsDataModelExplainSwipe: "ユーザに許可するスワイプ操作の対象",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "スパイグラスに表示するレイヤまたは Web マップを選択します。",
				settingsDataModelOneMap: "Web マップのレイヤ",
				settingsDataModel1Explain: "スワイプ操作の対象となるレイヤの選択",
				settingsDataModel1Warning: "レイヤが上に重なっているレイヤによって隠れている場合、スワイプは機能しません。",
				settingsDataModel1SpyGlassExplain: "スパイグラス内に表示するレイヤを選択します。",
				settingsDataModelTwoMaps: "2 つの Web マップ",
				settingsDataModelLayerIds: "Web マップ レイヤ ID",
				settingsDataModelSelected: "選択されたタイプ",
				settingsDataModelWebmapSwipeId1: "右の Web マップ ID",
				settingsDataModelWebmapSwipeId2: "左の Web マップ ID",
				settingsDataModelWebmapGlassId1: "メイン Web マップ ID",
				settingsDataModelWebmapGlassId2: "スパイグラス Web マップ ID",
				settingsDataModelSelect: "このタイプを選択",
				settingsDataModel2Explain: "別の Web マップでスワイプします。",
				settingsDataModel2SpyGlassExplain: "別の Web マップを公開します。",
				settingsDataModel2HelpTitle: "Web マップ ID の検索方法",
				settingsDataModel2HelpContent: "Web マップの URL 内の「=」記号から後ろの数字をコピーして貼り付けます。",
				switchMaps: "須_Switch maps_鷗",
				browseWebMaps: "須_Browse web maps_鷗"
			},
			settingsLegend: {
				settingsTabLegend: "アプリケーションのレイアウト",
				settingsLegendExplain: "アプリケーションのレイアウト設定を選択します。",
				settingsLegendEnable: "凡例を有効化",
				settingsDescriptionEnable: "説明を有効化",
				settingsBookmarksEnable: "一連のスワイプを有効化",
				settingsPopupDisable: "ポップアップの有効化",
				settingsLocationSearchEnable: "ロケータ検索の有効化",
				settingsGeolocatorEnable: "ジオロケータの有効化",
				settingsLegendHelpContent: "凡例のコンテンツを更新するには、ArcGIS.com Web マップ ビューアのコンテンツ ウィンドウを使用します (凡例では非表示)",
				settingsSeriesHelpContent: "スワイプは、タブ付きのナビゲーション オプションで、ビューアを特定の範囲に移動したり、サイド パネルにタイトルや説明文を表示したりできます。最初に起動したときに、Web マップのブックマークがインポートされ使用されて、一連のバーに値が事前入力されます。一連のオプションを無効にすると、一連のバーは無効になりますが、一連の構成は保持され、後で使用することができます。", 
				settingsSeriesHelpContent2: "スワイプ操作を使用すると、選択した場所とそのタイトルおよびテキストを作成および編集できます。Web マップにブックマークがある場合は表示されます。スワイプ操作は無効化できますが、構成は今後の使用のために維持されます。",
				settingsSeriesHelpLink: "スワイプ操作を使用したアプリケーションの例を表示",
				preview: "UI のプレビュー",
				settingsLocateButtonExplain: "この機能は、ほとんどのモバイル デバイスとデスクトップ ブラウザ (Internet Explorer 9 以上) でサポートされています。",
				settingsLocateButton: "須_Enable a 'Locate' button on supported browsers_鷗",
				settingsAddressSearch: "アドレス検索ツールの有効化"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "ポップアップ",
				settingsSwipePopupExplain: "簡単にポップアップをマップ レイヤに関連付けできるよう、ポップアップ ヘッダーの外観をカスタマイズします。",
				settingsSwipePopupSwipe1: "左マップ",
				settingsSwipePopupSwipe2: "右マップ",
				settingsSwipePopupGlass1: "メイン マップ",
				settingsSwipePopupGlass2: "スパイグラス マップ",
				settingsSwipePopupTitle: "ヘッダーのタイトル",
				settingsSwipePopupColor: "ヘッダーの色"
			},
			initPopup: {
				initHeader: "須_Welcome to the Swipe/Spyglass Builder_鷗",
				modalNext: "次へ",
				modalPrev: "前へ",
				modalApply: "アプリケーションを開く"
			},
			seriesPanel: {
				title: "タイトル",
				descr: "説明",
				discard: "ブックマークの破棄",
				saveExtent: "ブックマークの範囲の設定",
				discardDisabled: "そのブックマークを削除することができません。[設定] で、スワイプが無効化されている可能性があります。"
			},
			helpPopup: {
				title: "須_Help_鷗",
				close: "須_Close_鷗",
				tab1: {
					div1: "須_The Swipe/Spyglass template is designed to compare two seperate web maps or two layers of a single web map in an attractive, easy-to-use web application that can be used in any web browser on any device, including smartphones and tablets._鷗",
					div2: "須_For additional information on the Swipe/Spyglass template, including examples created by users, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visit the Story Maps website</a>. You can also follow us on Twitter at <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>._鷗",
					div3: "須_We would love to hear from you! Whether you have a question, want to request a new feature, or think you've found a bug, please visit the <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps User Forum</a>._鷗"
				}
			},
			share: {
				firstSaveTitle: "須_Application successfully saved_鷗",
				firstSaveHeader: "須_Your Application is now saved in ArcGIS Online. Please read the following answers to frequent questions._鷗",
				firstSaveA1: "須_If you are not familiar with ArcGIS Online or want a shortcut to access the authoring interface, you can save the following link: %LINK1%_鷗",
				firstSaveA1bis: "須_The Application can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>._鷗",
				firstSaveQ2: "須_Is my Application shared?_鷗",
				firstSaveA2: "須_Currently your Application is not shared. To share it, use the SHARE button._鷗",
				shareTitle: "須_Share your Application_鷗",
				sharePrivateHeader: "須_Your Application is not shared, would you like to share it?_鷗",
				sharePrivateBtn1: "須_Share publicly_鷗",
				sharePrivateBtn2: "須_Share with my Organization_鷗",
				sharePrivateProgress: "須_Sharing in progress..._鷗",
				sharePrivateErr: "須_Sharing failed, try again or_鷗",
				sharePrivateOk: "須_Sharing updated successfully, loading..._鷗",
				shareStatus1: "須_Application is not saved_鷗",
				shareStatus2: "須_Application is shared publicly_鷗",
				shareStatus3: "須_Application is shared within the organization_鷗",
				shareStatus4: "須_Application is not shared_鷗",
				sharePreviewAsUser: "須_Preview_鷗",
				shareHeader1: "須_Your Application is <strong>publicly accessible</strong>._鷗",
				shareHeader2: "須_Your Application is accessible by your organization members (login is required)._鷗",
				shareLinkHeader: "須_Share the Application with your audience_鷗",
				shareLinkOpen: "須_OPEN_鷗",
				learnMore: "須_Learn more_鷗",
				shareQ1Opt1: "須_How do I keep the Application private?_鷗",
				shareQ1Opt2: "須_How do I keep the Application private or share it publicly?_鷗",
				shareA1: "須_Use %SHAREIMG% on <a href='%LINK1%' target='_blank'>the application item page</a>. If you also want to unshare the web map, use <a href='%LINK2%' target='_blank'>the web map item page</a>._鷗",
				shareA1bis: "須_If you also want to unshare the Feature Service, use <a href='%LINK1%' target='_blank'>the Feature Service item page</a>._鷗",
				shareQ2: "須_How do I edit the Application later?_鷗",
				shareQ2bis: "須_How do I get back to the authoring interface?_鷗",
				shareA2div1: "須_Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the application item page</a>._鷗",
				shareA2div2: "須_As the owner of the application, when you are signed in on ArcGIS.com, the application includes a button to open the interactive builder:_鷗",				
				shareQ3: "須_Where is the data stored?_鷗",
				shareA3: "須_The Application configuration is stored in this web application item</a>._鷗",
				shareWarning: "須_Sharing %WITH% has been disabled because you are not the owner of the <a href='%LINK%' target='_blank'>webmap</a>._鷗",
 				shareWarningWith1: "須_publicly_鷗",
 				shareWarningWith2: "須_publicly and with the Organization_鷗"
			},
			directCreation: {
				header: "須_Welcome to the Swipe/Spyglass Builder_鷗",
				mapPickHeader: "須_To get started, please input a valid web map id, or use the search button to browse web maps._鷗",
				launchBuilder: "須_Launch Builder_鷗"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "須_My Organization_鷗",
					onlineLabel: "須_ArcGIS Online_鷗",
					contentLabel: "須_My Content_鷗",
					favoritesLabel: "須_My Favorites_鷗"
				},
				title: "須_Select Web Map_鷗",
				searchTitle: "須_Search_鷗",
				ok: "須_Ok_鷗",
				cancel: "須_Cancel_鷗",
				placeholder: "須_Enter search term_鷗"
			}
		}
    })
);