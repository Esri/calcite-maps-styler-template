define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "須_Media_鷗",
				lblSelect2: "須_Content_鷗",
				lblMap: "マップ",
				lblImage: "画像",
				lblVideo: "ビデオ",
				lblExternal: "Web ページ",
				disabled: "この機能は、管理者によって無効にされています",
				url: "画像の Web アドレスを手動で入力",
				userLookup: "アルバムを読み込む",
				notImplemented: "まだ実装されていません。"
			},
			imageSelector: {
				lblStep1: "サービスの選択",
				lblStep2: "メディアの選択",
				lblStep3: "構成"
			},
			imageSelectorHome: {
				explain: "画像をソーシャル メディアから読み込むか、<br />URL から直接読み込みます"
			},
			imageSelectorFlickr: {
				userInputLbl: "ユーザ名",
				signInMsg2: "ユーザが見つかりません",
				loadingFailed: "読み込みに失敗しました"
			},
			imageSelectorFacebook: {
				leftHeader: "Facebook ユーザ",
				rightHeader: "Facebook ページ",
				pageExplain: "Facebook ページは、<b>esrigis</b> などの、公開されたブランド/製品または著名人です。ページ URL 内の最初の「/」以降から、ページ名を取得できます。",
				pageInputLbl: "ページ名",
				lookupMsgError: "ページが見つかりません"
			},
			imageSelectorPicasa: {
				userInputLbl: "電子メールまたは Picasa/Google+ ID",
				signInMsg2: "アカウントが見つかりません",
				signInMsg3: "パブリック アルバムがありません",
				howToFind: "Picasa または Google+ アカウントの ID の検索方法",
				howToFind2: "任意の Picasa または Google+ のページの 1 番目と 2 番目の「/」の間の数字をコピーします。"
			},
			videoSelectorCommon: {
				check: "須_Check_鷗",
				notFound: "須_Video not found_鷗",
				found: "須_Video found_鷗",
				select: "須_Select this video_鷗"
			},
			videoSelectorHome: {
				other: "須_Other_鷗"
			},
			videoSelectorYoutube: {
				url: "須_URL of a Youtube video_鷗",
				pageInputLbl: "ユーザ名",
				lookupMsgError: "ユーザが見つかりません",
				howToFind: "YouTube のユーザ名の検索方法",
				howToFind2: "ビデオの下にユーザ名が表示されます",
				found: "須_Found_鷗",
				noData: "パブリックなビデオが見つかりませんでした"
			},
			videoSelectorVimeo: {
				url: "須_URL of a Vimeo video_鷗"
			},
			videoSelectorOther: {
				explain1: "須_Map Journal cannot play raw videos (e.g., avi, mpeg) but it can play hosted video files that have built-in players (e.g., YouTube or Vimeo)._鷗",
				explain2: "須_Most online video hosting services offer that feature, you have to find the option to embed the video, copy the given code and use the %WEBPAGE%._鷗",
				explain3: "須_Alternatively, if you want host the video yourself, you can create an HTML page that use a video player like %EXAMPLE%, host that page and also use the %WEBPAGE%._鷗",
				webpage: "須_Web page feature_鷗"
			},
			webpageSelectorHome: {
				lblUrl: "須_Webpage URL_鷗",
				lblEmbed: "須_Embed code_鷗",
				lblOR: "須_OR_鷗",
				lblError1: "須_Error, clear one of the two input fields._鷗",
				lblError2: "須_Embed code can only contain one <iframe>_鷗"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "須_An image URL should start with http:// and end with .jpg or .png_鷗",
				lblLabel: "須_Image Caption_鷗",
				lblLabel1: "キャプション",
				lblLabel2: "ホバー テキスト",
				lblLabel3: "なし",
				lblLabelPH: "テキストの入力...",
				lblMaximize: "須_Include a maximize button in the corner of the image_鷗",
				lblMaximizeHelp: "須_Recommended only for high quality photos_鷗",
				lblPosition: "位置",
				lblPosition1: "中央",
				lblPosition2: "塗りつぶし",
				lblPosition3: "調整",
				lblPosition4: "ストレッチ",
				lblPosition5: "須_Custom_鷗",
				tooltipDimension: "須_The value can be specified in 'px' or '%'_鷗",
				lblPosition2Explain: "(トリミングの可能性あり)",
				lblPosition3Explain: "(トリミングなし)",
				lblPosition3Explain2: "須_(width will always fit the panel)_鷗",
				lblPosition4Explain: "(歪みの可能性あり)"
			},
			editorActionGeocode: {
				lblTitle: "住所または位置の検索",
				mapMarkerExplain: "リンクをクリックすると、マップ マーカーが表示されます"
			},
			editorActionMedia: {
				lblTitle: "メイン ステージのコンテンツを変更"
			},
			editorInlineMedia: {
				lblTitle: "画像またはビデオの挿入"
			}
		}
	})

);
