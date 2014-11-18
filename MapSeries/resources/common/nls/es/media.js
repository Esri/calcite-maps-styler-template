define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "á_Media_Ó",
				lblSelect2: "á_Content_Ó",
				lblMap: "á_Map_Ó",
				lblImage: "á_Image_Ó",
				lblVideo: "á_Video_Ó",
				lblExternal: "á_Web page_Ó",
				disabled: "á_This feature has been disabled by the Administrator_Ó",
				url: "á_To manually enter the web address of an image_Ó",
				userLookup: "á_Load albums_Ó",
				notImplemented: "á_Not implemented yet_Ó.",
				noData: "á_No public album found_Ó"
			},
			imageSelector: {
				lblStep1: "á_Choose the service_Ó",
				lblStep2: "á_Select your media_Ó",
				lblStep3: "á_Configure_Ó"
			},
			imageSelectorHome: {
				explain: "á_Load images from social media, <br /> or directly from a URL_Ó"
			},
			imageSelectorFlickr: {
				userInputLbl: "á_User name_Ó",
				signInMsg2: "á_User not found_Ó",
				loadingFailed: "á_Loading failed_Ó"
			},
			imageSelectorFacebook: {
				leftHeader: "á_Facebook User_Ó",
				rightHeader: "á_Facebook Page_Ó",
				pageExplain: "á_A Facebook page is a public brand/product or celebrity like <b>esrigis</b>. You can get the page name after the first '/' in the page URL_Ó.",
				pageInputLbl: "á_Page name_Ó",
				lookupMsgError: "á_Page not found_Ó"
			},
			imageSelectorPicasa: {
				userInputLbl: "á_Email or Picasa/Google+ ID_Ó",
				signInMsg2: "á_Account not found_Ó",
				howToFind: "á_How to find a Picasa or Google+ account ID_Ó",
				howToFind2: "á_Copy digits between the first and second '/' of any Picasa or G+ page_Ó"
			},
			videoSelectorCommon: {
				check: "á_Check_Ó",
				notFound: "á_Video not found_Ó",
				found: "á_Video found_Ó",
				select: "á_Select this video_Ó"
			},
			videoSelectorHome: {
				other: "á_Other_Ó"
			},
			videoSelectorYoutube: {
				url: "á_URL of a Youtube video_Ó",
				pageInputLbl: "á_User name_Ó",
				lookupMsgError: "á_User not found_Ó",
				howToFind: "á_How to find a YouTube user name_Ó",
				howToFind2: "á_User name is displayed under videos_Ó",
				found: "á_Found_Ó",
				noData: "á_No public videos found_Ó"
			},
			videoSelectorVimeo: {
				url: "á_URL of a Vimeo video_Ó"
			},
			videoSelectorOther: {
				explain1: "á_The application cannot play raw videos (e.g., avi, mpeg) but it can play hosted video files that have built-in players (e.g., YouTube or Vimeo)_Ó.",
				explain2: "á_Most online video hosting services offer that feature, you have to find the option to embed the video, copy the given code and use the %WEBPAGE%_Ó.",
				explain3: "á_Alternatively, if you want host the video yourself, you can create an HTML page that uses a video player like %EXAMPLE%, host that page and also use the %WEBPAGE%_Ó.",
				webpage: "á_Web page feature_Ó"
			},
			webpageSelectorHome: {
				lblUrl: "á_Webpage URL_Ó",
				lblEmbed: "á_Embed code_Ó",
				lblOR: "á_OR_Ó",
				lblError1: "á_Error, clear one of the two input fields_Ó.",
				lblError2: "á_Embed code can only contain one %IFRAMETAG%_Ó",
				configure: "á_Configure_Ó"
			},
			mediaConfigure: {
				lblURL: "á_URL_Ó",
				lblURLPH: "á_An image URL should start with http:// and end with .jpg or .png_Ó",
				lblURLError: "á_This image does not seem to be valid. Please specify a direct link to an image file (your URL will usually end with .jpg or .png). Links to a web page that contains an image won't work_Ó.",
				lblURLCheck: "á_Checking image_Ó...",
				lblLabel: "á_Image Caption_Ó",
				lblLabel1: "á_Caption_Ó",
				lblLabel2: "á_Hover text_Ó",
				lblLabel3: "á_None_Ó",
				lblLabelPH: "á_Enter some text_Ó...",
				lblMaximize: "á_Include a maximize button in the corner of the image_Ó",
				lblMaximizeHelp: "á_Recommended only for high quality photos_Ó",
				lblPosition: "á_Position_Ó",
				lblPosition1: "á_Center_Ó",
				lblPosition2: "á_Fill_Ó",
				lblPosition3: "á_Fit_Ó",
				lblPosition4: "á_Stretch_Ó",
				lblPosition5: "á_Custom_Ó",
				tooltipDimension: "á_The value can be specified in 'px' or '%'_Ó",
				tooltipDimension2: "á_The value has to be specified in 'px'_Ó",
				lblPosition2Explain: "á_(may crop)_Ó",
				lblPosition3Explain: "á_(won't crop)_Ó",
				lblPosition3Explain2: "á_(width will always fit the panel)_Ó",
				lblPosition4Explain: "á_(may distort)_Ó",
				unloadLbl: "á_Unload when reader navigates away_Ó",
				unloadHelp: "á_If the Web Page has audio or video media, keep this option checked to stop that content from playing when the reader navigates away. Uncheck it for example to keep a soundtrack playing as the reader advances through the story.<br />If the Web Page is an application, uncheck this option so that the application does not reload if the reader returns to it_Ó."
			},
			editorActionGeocode: {
				lblTitle: "á_Locate an address or place_Ó",
				mapMarkerExplain: "á_User will see a map marker when clicking the link_Ó"
			},
			editorActionMedia: {
				lblTitle: "á_Change the Main Stage content_Ó"
			},
			editorInlineMedia: {
				lblTitle: "á_Insert an image, video or web page_Ó"
			}
		}
	})
);
