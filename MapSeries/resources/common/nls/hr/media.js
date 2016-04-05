define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Č_Media___ž",
				lblSelect2: "Č_Content___ž",
				lblMap: "Č_Map__ž",
				lblImage: "Č_Image___ž",
				lblVideo: "Č_Video___ž",
				lblExternal: "Č_Web page___ž",
				disabled: "Č_This feature has been disabled by the Administrator________________ž",
				url: "Č_To manually enter the web address of an image_______________ž",
				userLookup: "Č_Load albums____ž",
				notImplemented: "Č_Not implemented yet_______ž.",
				noData: "Č_No public album found_______ž"
			},
			imageSelector: {
				lblStep1: "Č_Choose the service______ž",
				lblStep2: "Č_Select your media______ž",
				lblStep3: "Č_Configure____ž"
			},
			imageSelectorHome: {
				explain: "Č_Load images from social media, <br /> or directly from a URL___________________ž"
			},
			imageSelectorFlickr: {
				userInputLbl: "Č_User name____ž",
				signInMsg2: "Č_User not found_____ž",
				loadingFailed: "Č_Loading failed_____ž"
			},
			imageSelectorFacebook: {
				leftHeader: "Č_Facebook User_____ž",
				rightHeader: "Č_Facebook Page_____ž",
				pageExplain: "Č_A Facebook page is a public brand/product or celebrity like <b>esrigis</b>. You can get the page name after the first '/' in the page URL__________________________________________ž.",
				pageInputLbl: "Č_Page name____ž",
				lookupMsgError: "Č_Page not found_____ž"
			},
			imageSelectorPicasa: {
				userInputLbl: "Č_Email or Picasa/Google+ ID_________ž",
				signInMsg2: "Č_Account not found______ž",
				howToFind: "Č_How to find a Picasa or Google+ account ID______________ž",
				howToFind2: "Č_Copy digits between the first and second '/' of any Picasa or G+ page______________________ž"
			},
			videoSelectorCommon: {
				check: "Č_Check___ž",
				notFound: "Č_Video not found______ž",
				found: "Č_Video found____ž",
				select: "Č_Select this video______ž"
			},
			videoSelectorHome: {
				other: "Č_Other___ž"
			},
			videoSelectorYoutube: {
				url: "Č_URL of a Youtube video________ž",
				pageInputLbl: "Č_User name____ž",
				lookupMsgError: "Č_User not found_____ž",
				howToFind: "Č_How to find a YouTube user name__________ž",
				howToFind2: "Č_User name is displayed under videos____________ž",
				found: "Č_Found___ž",
				noData: "Č_No public videos found________ž",
				videoNotChecked: "Č_The video hasn't been checked on YouTube but its address looks good_____________________ž.",
				checkFailedAPI: "Č_YouTube check has failed, please check YouTube API key__________________ž."
			},
			videoSelectorVimeo: {
				url: "Č_URL of a Vimeo video_______ž"
			},
			videoSelectorOther: {
				explain1: "Č_The story cannot play raw videos (e.g., avi, mpeg) but it can play hosted video files that have built-in players (e.g., YouTube or Vimeo)__________________________________________ž.",
				explain2: "Č_Most online video hosting services offer that feature, you have to find the option to embed the video, copy the given code and use the %WEBPAGE%_____________________________________________ž.",
				explain3: "Č_Alternatively, if you want host the video yourself, you can create an HTML page that uses a video player like %EXAMPLE%, host that page and also use the %WEBPAGE%__________________________________________________ž.",
				webpage: "Č_Web page feature______ž"
			},
			webpageSelectorHome: {
				lblUrl: "Č_Webpage URL____ž",
				lblEmbed: "Č_Embed code____ž",
				lblOR: "Č_OR__ž",
				lblError1: "Č_Error, clear one of the two input fields_____________ž.",
				lblError2: "Č_Embed code can only contain one %IFRAMETAG%______________ž",
				configure: "Č_Configure____ž"
			},
			mediaConfigure: {
				lblURL: "Č_URL__ž",
				lblURLPH: "Č_An image URL should start with http:// and end with .jpg or .png____________________ž",
				lblURLError: "Č_This image does not seem to be valid. Please specify a direct link to an image file (your URL will usually end with .jpg or .png). Links to a web page that contains an image won't work_________________________________________________________ž.",
				lblURLCheck: "Č_Checking image______ž...",
				lblLabel: "Č_Image Caption_____ž",
				lblLabel1: "Č_Caption___ž",
				lblLabel2: "Č_Hover text____ž",
				lblLabel3: "Č_None__ž",
				lblLabelPH: "Č_Enter some text______ž...",
				lblMaximize: "Č_Include a maximize button in the corner of the image_________________ž",
				lblMaximizeHelp: "Č_Recommended only for high quality photos_____________ž",
				lblPosition: "Č_Position___ž",
				lblPosition1: "Č_Center___ž",
				lblPosition2: "Č_Fill__ž",
				lblPosition3: "Č_Fit__ž",
				lblPosition4: "Č_Stretch___ž",
				lblPosition5: "Č_Custom___ž",
				tooltipDimension: "Č_The value can be specified in 'px' or '%'_____________ž",
				tooltipDimension2: "Č_The value has to be specified in 'px'____________ž",
				lblPosition2Explain: "Č_(may crop)____ž",
				lblPosition3Explain: "Č_(won't crop)_____ž",
				lblPosition3Explain2: "Č_(width will always fit the panel)___________ž",
				lblPosition4Explain: "Č_(may distort)_____ž",
				unloadLbl: "Č_Unload when reader navigates away___________ž",
				unloadHelp: "Č_If the Web Page has audio or video media, keep this option checked to stop that content from playing when the reader navigates away. Uncheck it for example to keep a soundtrack playing as the reader advances through the story.<br />If the Web Page is an application, uncheck this option so that the story does not reload if the reader returns to it__________________________________________________________________________________________________________ž."
			},
			editorActionGeocode: {
				lblTitle: "Č_Locate an address or place_________ž",
				mapMarkerExplain: "Č_User will see a map marker when clicking the link________________ž"
			},
			editorActionMedia: {
				lblTitle: "Č_Change the Main Stage content__________ž"
			},
			editorInlineMedia: {
				lblTitle: "Č_Insert an image, video or web page___________ž"
			}
		}
	})
);
