define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Đ_Media_ớ",
				lblSelect2: "Đ_Content_ớ",
				lblMap: "Đ_Map_ớ",
				lblImage: "Đ_Image_ớ",
				lblVideo: "Đ_Video_ớ",
				lblExternal: "Đ_Web page_ớ",
				disabled: "Đ_This feature has been disabled by the Administrator_ớ",
				url: "Đ_To manually enter the web address of an image_ớ",
				userLookup: "Đ_Load albums_ớ",
				notImplemented: "Đ_Not implemented yet_ớ.",
				noData: "Đ_No public album found_ớ"
			},
			imageSelector: {
				lblStep1: "Đ_Choose the service_ớ",
				lblStep2: "Đ_Select your media_ớ",
				lblStep3: "Đ_Configure_ớ"
			},
			imageSelectorHome: {
				explain: "Đ_Load images from social media, <br /> or directly from a URL_ớ"
			},
			imageSelectorFlickr: {
				userInputLbl: "Đ_User name_ớ",
				signInMsg2: "Đ_User not found_ớ",
				loadingFailed: "Đ_Loading failed_ớ"
			},
			imageSelectorFacebook: {
				leftHeader: "Đ_Facebook User_ớ",
				rightHeader: "Đ_Facebook Page_ớ",
				pageExplain: "Đ_A Facebook page is a public brand/product or celebrity like <b>esrigis</b>. You can get the page name after the first '/' in the page URL_ớ.",
				pageInputLbl: "Đ_Page name_ớ",
				lookupMsgError: "Đ_Page not found_ớ"
			},
			imageSelectorPicasa: {
				userInputLbl: "Đ_Email or Picasa/Google+ ID_ớ",
				signInMsg2: "Đ_Account not found_ớ",
				howToFind: "Đ_How to find a Picasa or Google+ account ID_ớ",
				howToFind2: "Đ_Copy digits between the first and second '/' of any Picasa or G+ page_ớ"
			},
			videoSelectorCommon: {
				check: "Đ_Check_ớ",
				notFound: "Đ_Video not found_ớ",
				found: "Đ_Video found_ớ",
				select: "Đ_Select this video_ớ"
			},
			videoSelectorHome: {
				other: "Đ_Other_ớ"
			},
			videoSelectorYoutube: {
				url: "Đ_URL of a Youtube video_ớ",
				pageInputLbl: "Đ_User name_ớ",
				lookupMsgError: "Đ_User not found_ớ",
				howToFind: "Đ_How to find a YouTube user name_ớ",
				howToFind2: "Đ_User name is displayed under videos_ớ",
				found: "Đ_Found_ớ",
				noData: "Đ_No public videos found_ớ"
			},
			videoSelectorVimeo: {
				url: "Đ_URL of a Vimeo video_ớ"
			},
			videoSelectorOther: {
				explain1: "Đ_The application cannot play raw videos (e.g., avi, mpeg) but it can play hosted video files that have built-in players (e.g., YouTube or Vimeo)_ớ.",
				explain2: "Đ_Most online video hosting services offer that feature, you have to find the option to embed the video, copy the given code and use the %WEBPAGE%_ớ.",
				explain3: "Đ_Alternatively, if you want host the video yourself, you can create an HTML page that uses a video player like %EXAMPLE%, host that page and also use the %WEBPAGE%_ớ.",
				webpage: "Đ_Web page feature_ớ"
			},
			webpageSelectorHome: {
				lblUrl: "Đ_Webpage URL_ớ",
				lblEmbed: "Đ_Embed code_ớ",
				lblOR: "Đ_OR_ớ",
				lblError1: "Đ_Error, clear one of the two input fields_ớ.",
				lblError2: "Đ_Embed code can only contain one %IFRAMETAG%_ớ",
				configure: "Đ_Configure_ớ"
			},
			mediaConfigure: {
				lblURL: "Đ_URL_ớ",
				lblURLPH: "Đ_An image URL should start with http:// and end with .jpg or .png_ớ",
				lblURLError: "Đ_This image does not seem to be valid. Please specify a direct link to an image file (your URL will usually end with .jpg or .png). Links to a web page that contains an image won't work_ớ.",
				lblURLCheck: "Đ_Checking image_ớ...",
				lblLabel: "Đ_Image Caption_ớ",
				lblLabel1: "Đ_Caption_ớ",
				lblLabel2: "Đ_Hover text_ớ",
				lblLabel3: "Đ_None_ớ",
				lblLabelPH: "Đ_Enter some text_ớ...",
				lblMaximize: "Đ_Include a maximize button in the corner of the image_ớ",
				lblMaximizeHelp: "Đ_Recommended only for high quality photos_ớ",
				lblPosition: "Đ_Position_ớ",
				lblPosition1: "Đ_Center_ớ",
				lblPosition2: "Đ_Fill_ớ",
				lblPosition3: "Đ_Fit_ớ",
				lblPosition4: "Đ_Stretch_ớ",
				lblPosition5: "Đ_Custom_ớ",
				tooltipDimension: "Đ_The value can be specified in 'px' or '%'_ớ",
				tooltipDimension2: "Đ_The value has to be specified in 'px'_ớ",
				lblPosition2Explain: "Đ_(may crop)_ớ",
				lblPosition3Explain: "Đ_(won't crop)_ớ",
				lblPosition3Explain2: "Đ_(width will always fit the panel)_ớ",
				lblPosition4Explain: "Đ_(may distort)_ớ",
				unloadLbl: "Đ_Unload when reader navigates away_ớ",
				unloadHelp: "Đ_If the Web Page has audio or video media, keep this option checked to stop that content from playing when the reader navigates away. Uncheck it for example to keep a soundtrack playing as the reader advances through the story.<br />If the Web Page is an application, uncheck this option so that the application does not reload if the reader returns to it_ớ."
			},
			editorActionGeocode: {
				lblTitle: "Đ_Locate an address or place_ớ",
				mapMarkerExplain: "Đ_User will see a map marker when clicking the link_ớ"
			},
			editorActionMedia: {
				lblTitle: "Đ_Change the Main Stage content_ớ"
			},
			editorInlineMedia: {
				lblTitle: "Đ_Insert an image, video or web page_ớ"
			}
		}
	})
);
