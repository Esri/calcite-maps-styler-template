define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Ĳ_Media_ä",
				lblSelect2: "Ĳ_Content_ä",
				lblMap: "Ĳ_Map_ä",
				lblImage: "Ĳ_Image_ä",
				lblVideo: "Ĳ_Video_ä",
				lblExternal: "Ĳ_Web page_ä",
				disabled: "Ĳ_This feature has been disabled by the Administrator_ä",
				url: "Ĳ_To manually enter the web address of an image_ä",
				userLookup: "Ĳ_Load albums_ä",
				notImplemented: "Ĳ_Not implemented yet_ä.",
				noData: "Ĳ_No public album found_ä"
			},
			imageSelector: {
				lblStep1: "Ĳ_Choose the service_ä",
				lblStep2: "Ĳ_Select your media_ä",
				lblStep3: "Ĳ_Configure_ä"
			},
			imageSelectorHome: {
				explain: "Ĳ_Load images from social media, <br /> or directly from a URL_ä"
			},
			imageSelectorFlickr: {
				userInputLbl: "Ĳ_User name_ä",
				signInMsg2: "Ĳ_User not found_ä",
				loadingFailed: "Ĳ_Loading failed_ä"
			},
			imageSelectorFacebook: {
				leftHeader: "Ĳ_Facebook User_ä",
				rightHeader: "Ĳ_Facebook Page_ä",
				pageExplain: "Ĳ_A Facebook page is a public brand/product or celebrity like <b>esrigis</b>. You can get the page name after the first '/' in the page URL_ä.",
				pageInputLbl: "Ĳ_Page name_ä",
				lookupMsgError: "Ĳ_Page not found_ä"
			},
			imageSelectorPicasa: {
				userInputLbl: "Ĳ_Email or Picasa/Google+ ID_ä",
				signInMsg2: "Ĳ_Account not found_ä",
				howToFind: "Ĳ_How to find a Picasa or Google+ account ID_ä",
				howToFind2: "Ĳ_Copy digits between the first and second '/' of any Picasa or G+ page_ä"
			},
			videoSelectorCommon: {
				check: "Ĳ_Check_ä",
				notFound: "Ĳ_Video not found_ä",
				found: "Ĳ_Video found_ä",
				select: "Ĳ_Select this video_ä"
			},
			videoSelectorHome: {
				other: "Ĳ_Other_ä"
			},
			videoSelectorYoutube: {
				url: "Ĳ_URL of a Youtube video_ä",
				pageInputLbl: "Ĳ_User name_ä",
				lookupMsgError: "Ĳ_User not found_ä",
				howToFind: "Ĳ_How to find a YouTube user name_ä",
				howToFind2: "Ĳ_User name is displayed under videos_ä",
				found: "Ĳ_Found_ä",
				noData: "Ĳ_No public videos found_ä"
			},
			videoSelectorVimeo: {
				url: "Ĳ_URL of a Vimeo video_ä"
			},
			videoSelectorOther: {
				explain1: "Ĳ_The application cannot play raw videos (e.g., avi, mpeg) but it can play hosted video files that have built-in players (e.g., YouTube or Vimeo)_ä.",
				explain2: "Ĳ_Most online video hosting services offer that feature, you have to find the option to embed the video, copy the given code and use the %WEBPAGE%_ä.",
				explain3: "Ĳ_Alternatively, if you want host the video yourself, you can create an HTML page that uses a video player like %EXAMPLE%, host that page and also use the %WEBPAGE%_ä.",
				webpage: "Ĳ_Web page feature_ä"
			},
			webpageSelectorHome: {
				lblUrl: "Ĳ_Webpage URL_ä",
				lblEmbed: "Ĳ_Embed code_ä",
				lblOR: "Ĳ_OR_ä",
				lblError1: "Ĳ_Error, clear one of the two input fields_ä.",
				lblError2: "Ĳ_Embed code can only contain one %IFRAMETAG%_ä",
				configure: "Ĳ_Configure_ä"
			},
			mediaConfigure: {
				lblURL: "Ĳ_URL_ä",
				lblURLPH: "Ĳ_An image URL should start with http:// and end with .jpg or .png_ä",
				lblURLError: "Ĳ_This image does not seem to be valid. Please specify a direct link to an image file (your URL will usually end with .jpg or .png). Links to a web page that contains an image won't work_ä.",
				lblURLCheck: "Ĳ_Checking image_ä...",
				lblLabel: "Ĳ_Image Caption_ä",
				lblLabel1: "Ĳ_Caption_ä",
				lblLabel2: "Ĳ_Hover text_ä",
				lblLabel3: "Ĳ_None_ä",
				lblLabelPH: "Ĳ_Enter some text_ä...",
				lblMaximize: "Ĳ_Include a maximize button in the corner of the image_ä",
				lblMaximizeHelp: "Ĳ_Recommended only for high quality photos_ä",
				lblPosition: "Ĳ_Position_ä",
				lblPosition1: "Ĳ_Center_ä",
				lblPosition2: "Ĳ_Fill_ä",
				lblPosition3: "Ĳ_Fit_ä",
				lblPosition4: "Ĳ_Stretch_ä",
				lblPosition5: "Ĳ_Custom_ä",
				tooltipDimension: "Ĳ_The value can be specified in 'px' or '%'_ä",
				tooltipDimension2: "Ĳ_The value has to be specified in 'px'_ä",
				lblPosition2Explain: "Ĳ_(may crop)_ä",
				lblPosition3Explain: "Ĳ_(won't crop)_ä",
				lblPosition3Explain2: "Ĳ_(width will always fit the panel)_ä",
				lblPosition4Explain: "Ĳ_(may distort)_ä",
				unloadLbl: "Ĳ_Unload when reader navigates away_ä",
				unloadHelp: "Ĳ_If the Web Page has audio or video media, keep this option checked to stop that content from playing when the reader navigates away. Uncheck it for example to keep a soundtrack playing as the reader advances through the story.<br />If the Web Page is an application, uncheck this option so that the application does not reload if the reader returns to it_ä."
			},
			editorActionGeocode: {
				lblTitle: "Ĳ_Locate an address or place_ä",
				mapMarkerExplain: "Ĳ_User will see a map marker when clicking the link_ä"
			},
			editorActionMedia: {
				lblTitle: "Ĳ_Change the Main Stage content_ä"
			},
			editorInlineMedia: {
				lblTitle: "Ĳ_Insert an image, video or web page_ä"
			}
		}
	})
);
