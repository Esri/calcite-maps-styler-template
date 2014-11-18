define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "ก้_Media_ษฺ",
				lblSelect2: "ก้_Content_ษฺ",
				lblMap: "ก้_Map_ษฺ",
				lblImage: "ก้_Image_ษฺ",
				lblVideo: "ก้_Video_ษฺ",
				lblExternal: "ก้_Web page_ษฺ",
				disabled: "ก้_This feature has been disabled by the Administrator_ษฺ",
				url: "ก้_To manually enter the web address of an image_ษฺ",
				userLookup: "ก้_Load albums_ษฺ",
				notImplemented: "ก้_Not implemented yet_ษฺ.",
				noData: "ก้_No public album found_ษฺ"
			},
			imageSelector: {
				lblStep1: "ก้_Choose the service_ษฺ",
				lblStep2: "ก้_Select your media_ษฺ",
				lblStep3: "ก้_Configure_ษฺ"
			},
			imageSelectorHome: {
				explain: "ก้_Load images from social media, <br /> or directly from a URL_ษฺ"
			},
			imageSelectorFlickr: {
				userInputLbl: "ก้_User name_ษฺ",
				signInMsg2: "ก้_User not found_ษฺ",
				loadingFailed: "ก้_Loading failed_ษฺ"
			},
			imageSelectorFacebook: {
				leftHeader: "ก้_Facebook User_ษฺ",
				rightHeader: "ก้_Facebook Page_ษฺ",
				pageExplain: "ก้_A Facebook page is a public brand/product or celebrity like <b>esrigis</b>. You can get the page name after the first '/' in the page URL_ษฺ.",
				pageInputLbl: "ก้_Page name_ษฺ",
				lookupMsgError: "ก้_Page not found_ษฺ"
			},
			imageSelectorPicasa: {
				userInputLbl: "ก้_Email or Picasa/Google+ ID_ษฺ",
				signInMsg2: "ก้_Account not found_ษฺ",
				howToFind: "ก้_How to find a Picasa or Google+ account ID_ษฺ",
				howToFind2: "ก้_Copy digits between the first and second '/' of any Picasa or G+ page_ษฺ"
			},
			videoSelectorCommon: {
				check: "ก้_Check_ษฺ",
				notFound: "ก้_Video not found_ษฺ",
				found: "ก้_Video found_ษฺ",
				select: "ก้_Select this video_ษฺ"
			},
			videoSelectorHome: {
				other: "ก้_Other_ษฺ"
			},
			videoSelectorYoutube: {
				url: "ก้_URL of a Youtube video_ษฺ",
				pageInputLbl: "ก้_User name_ษฺ",
				lookupMsgError: "ก้_User not found_ษฺ",
				howToFind: "ก้_How to find a YouTube user name_ษฺ",
				howToFind2: "ก้_User name is displayed under videos_ษฺ",
				found: "ก้_Found_ษฺ",
				noData: "ก้_No public videos found_ษฺ"
			},
			videoSelectorVimeo: {
				url: "ก้_URL of a Vimeo video_ษฺ"
			},
			videoSelectorOther: {
				explain1: "ก้_The application cannot play raw videos (e.g., avi, mpeg) but it can play hosted video files that have built-in players (e.g., YouTube or Vimeo)_ษฺ.",
				explain2: "ก้_Most online video hosting services offer that feature, you have to find the option to embed the video, copy the given code and use the %WEBPAGE%_ษฺ.",
				explain3: "ก้_Alternatively, if you want host the video yourself, you can create an HTML page that uses a video player like %EXAMPLE%, host that page and also use the %WEBPAGE%_ษฺ.",
				webpage: "ก้_Web page feature_ษฺ"
			},
			webpageSelectorHome: {
				lblUrl: "ก้_Webpage URL_ษฺ",
				lblEmbed: "ก้_Embed code_ษฺ",
				lblOR: "ก้_OR_ษฺ",
				lblError1: "ก้_Error, clear one of the two input fields_ษฺ.",
				lblError2: "ก้_Embed code can only contain one %IFRAMETAG%_ษฺ",
				configure: "ก้_Configure_ษฺ"
			},
			mediaConfigure: {
				lblURL: "ก้_URL_ษฺ",
				lblURLPH: "ก้_An image URL should start with http:// and end with .jpg or .png_ษฺ",
				lblURLError: "ก้_This image does not seem to be valid. Please specify a direct link to an image file (your URL will usually end with .jpg or .png). Links to a web page that contains an image won't work_ษฺ.",
				lblURLCheck: "ก้_Checking image_ษฺ...",
				lblLabel: "ก้_Image Caption_ษฺ",
				lblLabel1: "ก้_Caption_ษฺ",
				lblLabel2: "ก้_Hover text_ษฺ",
				lblLabel3: "ก้_None_ษฺ",
				lblLabelPH: "ก้_Enter some text_ษฺ...",
				lblMaximize: "ก้_Include a maximize button in the corner of the image_ษฺ",
				lblMaximizeHelp: "ก้_Recommended only for high quality photos_ษฺ",
				lblPosition: "ก้_Position_ษฺ",
				lblPosition1: "ก้_Center_ษฺ",
				lblPosition2: "ก้_Fill_ษฺ",
				lblPosition3: "ก้_Fit_ษฺ",
				lblPosition4: "ก้_Stretch_ษฺ",
				lblPosition5: "ก้_Custom_ษฺ",
				tooltipDimension: "ก้_The value can be specified in 'px' or '%'_ษฺ",
				tooltipDimension2: "ก้_The value has to be specified in 'px'_ษฺ",
				lblPosition2Explain: "ก้_(may crop)_ษฺ",
				lblPosition3Explain: "ก้_(won't crop)_ษฺ",
				lblPosition3Explain2: "ก้_(width will always fit the panel)_ษฺ",
				lblPosition4Explain: "ก้_(may distort)_ษฺ",
				unloadLbl: "ก้_Unload when reader navigates away_ษฺ",
				unloadHelp: "ก้_If the Web Page has audio or video media, keep this option checked to stop that content from playing when the reader navigates away. Uncheck it for example to keep a soundtrack playing as the reader advances through the story.<br />If the Web Page is an application, uncheck this option so that the application does not reload if the reader returns to it_ษฺ."
			},
			editorActionGeocode: {
				lblTitle: "ก้_Locate an address or place_ษฺ",
				mapMarkerExplain: "ก้_User will see a map marker when clicking the link_ษฺ"
			},
			editorActionMedia: {
				lblTitle: "ก้_Change the Main Stage content_ษฺ"
			},
			editorInlineMedia: {
				lblTitle: "ก้_Insert an image, video or web page_ษฺ"
			}
		}
	})
);
