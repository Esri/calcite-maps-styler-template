define({
	root: ({
		viewer: {
			loading: {
				step1: "Č_LOADING STORY_____ž",
				step2: "Č_LOADING DATA_____ž",
				step3: "Č_INITIALIZING_____ž",
				fail: "Č_Sorry, Swipe loading failed_________ž",
				loadBuilder: "Č_SWITCHING TO BUILDER MODE_________ž",
				redirectSignIn: "Č_REDIRECTING TO SIGN-IN PAGE_________ž",
				redirectSignIn2: "Č_(you will be redirected here after sign-in)______________ž",
				failButton: "Č_Retry___ž"
			},
			errors: {
				boxTitle: "Č_An error has occurred_______ž",
				portalSelf: "Č_Fatal error: Failed to get portal configuration_______________ž",
				invalidConfig: "Č_Fatal error: Invalid configuration___________ž",
				invalidConfigNoWebmap: "Č_Fatal error: Invalid configuration (web map or application identifier not specified in index.html)______________________________ž",
				invalidConfigNoAppDev: "Č_No Web Mapping Application identifier or webmap are specified in URL parameters (?appid= or ?webmap=). In development mode, the appid and webmap configuration in index.html are ignored_________________________________________________________ž.",
				createMap: "Č_Unable to create map_______ž",
				invalidApp: "Č_Fatal error: The story cannot be loaded_____________ž",
				initMobile: "Č_Welcome to the swipe web application. The application is not configured. The interactive builder is not supported on mobile devices_________________________________________ž.",
				initMobile2: "Č_The Swipe builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen_____________________________________________________ž.",
				initMobile3: "Č_Please rotate your device to landscape orientation to use the Swipe builder________________________ž.",
				noBuilderIE8: "Č_The Swipe interactive builder is not supported on Internet Explorer before version 9___________________________ž.",
				noLayerView: "Č_Welcome to the Swipe web application.<br />The application is not configured yet_________________________ž.",
				appSave: "Č_Error saving the web story_________ž",
				mapSave: "Č_Error saving the web map________ž",
				notAuthorized: "Č_You are not authorized to access this story______________ž",
				notAuthorizedBuilder: "Č_You are not authorized to use Swipe and Spyglass builder__________________ž.",
				conflictingProjectionsTitle: "Č_Conflicting Projections________ž",
				conflictingProjections: "Č_Swipe does not support using two web maps with different projections. Please open settings and use a web map that use the same projection than the first web map_________________________________________________ž.",
				cpButton: "Č_Close___ž",
				unspecifiedConfigOwner: "Č_Authorized owner hasn't been configured_____________ž.",
				invalidConfigOwner: "Č_Story owner is not authorized__________ž."
			},
			mobileView: {
				hideIntro: "Č_HIDE INTRO____ž",
				navLeft: "Č_Legend___ž",
				navMap: "Č_Map__ž",
				navRight: "Č_Data__ž"
			},
			desktopView: {
				storymapsText: "Č_A story map____ž",
				builderButton: "Č_Switch to builder mode________ž",
				facebookTooltip: "Č_Share on Facebook______ž",
				twitterTooltip: "Č_Share on Twitter______ž",
				bitlyTooltip: "Č_Get a short link______ž",
				tooltipAutoplayDisabled: "Č_This isn't available in autoplay mode____________ž",
				autoplayLabel: "Č_Autoplay mode_____ž",
				autoplayExplain1: "Č_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________ž.",
				autoplayExplain2: "Č_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________ž."
			}
		},
		builder: {
			builder: {
				panelHeader: "Č_STORY CONFIGURATION_______ž",
				buttonSave: "Č_SAVE__ž",
				buttonHelp: "Č_Help__ž",
				buttonShare: "Č_Share___ž",
				buttonDiscard: "Č_CANCEL___ž",
				buttonSettings: "Č_Settings___ž",
				buttonView: "Č_View mode____ž",
				buttonItem: "Č_Open the Web Application item__________ž",
				noPendingChange: "Č_No pending change______ž",
				unSavedChangeSingular: "Č_1 unsaved change______ž",
				unSavedChangePlural: "Č_unsaved changes______ž",
				popoverDiscard: "Č_Are you sure to want to discard any unsaved changes_________________ž?",
				yes: "Č_Yes__ž",
				no: "Č_No__ž",
				popoverOpenViewExplain: "Č_By opening the viewer, you will lose any unsaved changes__________________ž",
				popoverOpenViewOk: "Č_Ok__ž",
				popoverOpenViewCancel: "Č_Cancel___ž",
				popoverSaveWhenDone: "Č_Don't forget to save when you are done____________ž",
				closeWithPendingChange: "Č_Are you sure to want to confirm the action ? Your changes will be lost______________________ž.",
				gotIt: "Č_Ok__ž",
				savingApplication: "Č_Saving story_____ž",
				saveSuccess: "Č_Story saved____ž",
				saveError: "Č_Save failed, please try again__________ž",
				saveError2: "Č_Save failed due to an invalid html tag in a name or description____________________ž",
				saveError3: "Č_The title can't be empty________ž",
				signIn: "Č_Please sign in with an account on___________ž",
				signInTwo: "Č_to save the story______ž."
			},
			header:{
				editMe: "Č_Edit me___ž!",
				templateTitle: "Č_Set template title______ž",
				templateSubtitle: "Č_Set template subtitle_______ž"
			},
			settings: {
				settingsHeader: "Č_Story settings_____ž",
				modalCancel: "Č_Cancel___ž",
				modalApply: "Č_Apply___ž"
			},
			settingsColors: {
				settingsTabColor: "Č_Theme___ž",
				settingsColorExplain: "Č_Choose an app theme or define your own colors_______________ž.",
				settingsLabelColor: "Č_Header and side panel background colors_____________ž"
			},
			settingsHeader: {
				settingsTabLogo: "Č_Header___ž",
				settingsLogoExplain: "Č_Customize the header logo (maximum is 250 x 50px)________________ž.",
				settingsLogoEsri: "Č_Esri logo____ž",
				settingsLogoNone: "Č_No logo___ž",
				settingsLogoCustom: "Č_Custom logo____ž",
				settingsLogoCustomPlaceholder: "Č_Image URL____ž",
				settingsLogoCustomTargetPlaceholder: "Č_Click-through link______ž",
				settingsLogoSocialExplain: "Č_Customize the header top right link____________ž.",
				settingsLogoSocialText: "Č_Text__ž",
				settingsLogoSocialLink: "Č_Link__ž",
				settingsLogoSocialDisabled: "Č_This feature has been disabled by the Administrator________________ž"
			},
			settingsExtent: {
				settingsTabExtent: "Č_Extent___ž",
				settingsExtentExplain: "Č_Set the initial extent through the interactive map below__________________ž.",
				settingsExtentExplainBottom: "Č_The extent you define will modify your web map initial extent. Note that if you are doing a swipe series that extent won't be used________________________________________ž.",
				settingsExtentDateLineError: "Č_The extent cannot be across the meridian of 180ï¿½ longitude___________________ž",
				settingsExtentDateLineError2: "Č_Error computing the extent_________ž",
				settingsExtentDrawBtn: "Č_Draw a new extent______ž",
				settingsExtentModifyBtn: "Č_Edit the current extent________ž",
				settingsExtentApplyBtn: "Č_Apply on main map______ž",
				settingsExtentUseMainMap: "Č_Use main map extent_______ž"
			}
        },
		swipe: {
			mobileData: {
				noData: "Č_No data to display_______ž!",
				noDataExplain: "Č_Tap the map to select a feature and come back here________________ž",
				noDataMap: "Č_No data for this map_______ž",
				noPopup: "Č_No pop-up found for this feature___________ž"
			},
			mobileLegend: {
				noLegend: "Č_No legend to display_______ž."
			},
			swipeSidePanel: {
				editTooltip: "Č_Set the side panel description__________ž",
				editMe: "Č_Edit me___ž!",
				legendTitle: "Č_Legend___ž"
			},
			infoWindow: {
				noFeature: "Č_No data to display______ž",
				noFeatureExplain: "Č_Tap the map to select a feature__________ž"
			},
			settingsLayout: {
				settingsTabLayout: "Č_Swipe Style____ž",
				settingsLayoutExplain: "Č_Choose a style for the swipe tool___________ž.",
				settingsLayoutSwipe: "Č_Vertical bar_____ž",
				settingsLayoutSpyGlass: "Č_Spyglass___ž",
				settingsLayoutSelected: "Č_Selected layout______ž",
				settingsLayoutSelect: "Č_Select this layout______ž",
				settingsSaveConfirm: "Č_Some of your changes require that you save and reload the story____________________ž"
			},
			settingsDataModel: {
				settingsTabDataModel: "Č_Swipe Type____ž",
				settingsDataModelExplainSwipe: "Č_What do you want users to swipe___________ž?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Č_Choose the layer or the web map that will appear in the spyglass_____________________ž.",
				settingsDataModelOneMap: "Č_A layer in a web map_______ž",
				settingsDataModel1Explain: "Č_Select the layer you want to be swiped____________ž",
				settingsDataModel1Warning: "Č_If the layer is hidden by upper layers, swipe won't have any effect_____________________ž.",
				settingsDataModel1SpyGlassExplain: "Č_Select the layer to appear within the spyglass_______________ž.",
				settingsDataModelTwoMaps: "Č_Two web maps_____ž",
				settingsDataModelLayerIds: "Č_Web map Layer IDs______ž",
				settingsDataModelSelected: "Č_Selected type_____ž",
				settingsDataModelWebmapSwipeId1: "Č_Right Web map ID______ž",
				settingsDataModelWebmapSwipeId2: "Č_Left Web map ID______ž",
				settingsDataModelWebmapGlassId1: "Č_Main Web map ID______ž",
				settingsDataModelWebmapGlassId2: "Č_Spyglass Web map ID_______ž",
				settingsDataModelSelect: "Č_Select this type______ž",
				settingsDataModel2Explain: "Č_Swipe with another web map_________ž.",
				settingsDataModel2SpyGlassExplain: "Č_Reveal another web map________ž.",
				settingsDataModel2HelpTitle: "Č_How do I find a web map's ID__________ž?",
				settingsDataModel2HelpContent: "Č_Copy and paste digits after the '=' sign in the URL of the web map_____________________ž",
				switchMaps: "Č_Switch maps____ž",
				browseWebMaps: "Č_Browse web maps______ž"
			},
			settingsLegend: {
				settingsTabLegend: "Č_App Layout____ž",
				settingsLegendExplain: "Č_Select the layout settings_________ž.",
				settingsLegendEnable: "Č_Enable Legend_____ž",
				settingsDescriptionEnable: "Č_Enable Description______ž",
				settingsBookmarksEnable: "Č_Enable Swipe series_______ž",
				settingsPopupDisable: "Č_Enable pop-up_____ž",
				settingsLocationSearchEnable: "Č_Enable locator search_______ž",
				settingsGeolocatorEnable: "Č_Enable geolocator______ž",
				settingsLegendHelpContent: "Č_To refine the legend content, use the ArcGIS web map viewer table of contents (Hide in Legend)_____________________________ž",
				settingsSeriesHelpContent: "Č_Swipe series is a tabbed navigation option that will guide the viewer to a particular extent and display a title and description text in the side panel.  During initial activation, the bookmarks from the web map(s) will be imported and used to pre-populate the series bar.  Disabling the series option turns off the series bar, but the series configuration is preserved for future use_____________________________________________________________________________________________________________________ž.",
				settingsSeriesHelpContent2: "Č_Swipe series lets you create and edit a selection of locations with accompanying titles and text.  If your web map has bookmarks, they'll be displayed.  You can disable the series, but the configuration will be preserved for future use________________________________________________________________________ž.",
				settingsSeriesHelpLink: "Č_See an example of an application with a swipe series here__________________ž",
				preview: "Č_UI preview____ž",
				settingsLocateButtonExplain: "Č_This functionality is supported on most mobile devices and desktop browsers (including Internet Explorer 9+)__________________________________ž.",
				settingsLocateButton: "Č_Enable a 'Locate' button on supported browsers_______________ž",
				settingsAddressSearch: "Č_Enable an address search tool__________ž"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Č_Pop-up___ž",
				settingsSwipePopupExplain: "Č_Customize the appearance of the pop-ups header to help user associate pop-ups with maps layers______________________________ž.",
				settingsSwipePopupSwipe1: "Č_Left Map___ž",
				settingsSwipePopupSwipe2: "Č_Right Map____ž",
				settingsSwipePopupGlass1: "Č_Main Map___ž",
				settingsSwipePopupGlass2: "Č_Spyglass Map_____ž",
				settingsSwipePopupTitle: "Č_Header Title_____ž",
				settingsSwipePopupColor: "Č_Header Color_____ž"
			},
			initPopup: {
				initHeader: "Č_Welcome to the Swipe/Spyglass Builder____________ž",
				modalNext: "Č_Next__ž",
				modalPrev: "Č_Previous___ž",
				modalApply: "Č_Open the app_____ž"
			},
			seriesPanel: {
				title: "Č_Title___ž",
				descr: "Č_Description____ž",
				discard: "Č_Discard Bookmark______ž",
				saveExtent: "Č_Set Bookmark Extent_______ž",
				discardDisabled: "Č_You can't remove that bookmark. Swipe series can be disabled in the Settings________________________ž."
			},
			helpPopup: {
				title: "Č_Help__ž",
				close: "Č_Close___ž",
				tab1: {
					div1: "Č_The Swipe/Spyglass template is designed to compare two seperate web maps or two layers of a single web map in an attractive, easy-to-use web application that can be used in any web browser on any device, including smartphones and tablets________________________________________________________________________ž.",
					div2: "Č_For additional information on the Swipe/Spyglass template, including examples created by users, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visit the Story Maps website</a>. You can also follow us on Twitter at <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>_________________________________________________________________________________________________ž.",
					div3: "Č_We would love to hear from you! Whether you have a question, want to request a new feature, or think you've found a bug, please visit the <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps User Forum</a>_____________________________________________________________________ž."
				}
			},
			share: {
				firstSaveTitle: "Č_Story saved____ž",
				manageStory: "Č_Manage your story______ž",
				manageStoryA1: "Č_Tip: You can use %LINK1% to check your story for errors and change how its components are shared. My Stories also helps you make your story look good when it is shared on social networks. You can learn about other useful features of My Stories in these %LINK2%_______________________________________________________________________________ž.",
				manageStoryA1V1: "Č_My Stories____ž",
				manageStoryA1V2: "Č_blog posts____ž",
				shareTitle: "Č_Share your story______ž",
				sharePrivateHeader: "Č_Your story is not shared, would you like to share it_________________ž?",
				sharePrivateBtn1: "Č_Share publicly_____ž",
				sharePrivateBtn2: "Č_Share with my Organization_________ž",
				sharePrivateProgress: "Č_Sharing in progress________ž...",
				sharePrivateErr: "Č_Sharing failed, try again or_________ž",
				sharePrivateOk: "Č_Sharing updated, loading_________ž...",
				shareStatus1: "Č_Story is not saved______ž",
				shareStatus2: "Č_Story is shared publicly________ž",
				shareStatus3: "Č_Story is shared within the organization_____________ž",
				shareStatus4: "Č_Story is not shared_______ž",
				sharePreviewAsUser: "Č_Preview___ž",
				shareHeader1: "Č_Your story is <strong>publicly accessible</strong>________________ž.",
				shareHeader2: "Č_Your story is accessible by your organization members (login is required)_______________________ž.",
				shareLinkHeader: "Č_Share your story______ž",
				shareLinkOpen: "Č_OPEN__ž",
				learnMore: "Č_Learn more____ž",
				shareA1: "Č_Use %SHAREIMG% on <a href='%LINK1%' target='_blank'>the application item page</a>. If you also want to unshare the web map, use <a href='%LINK2%' target='_blank'>the web map item page</a>_________________________________________________________ž.",
				shareWarning: "Č_Sharing %WITH% has been disabled because you are not the owner of the <a href='%LINK%' target='_blank'>webmap</a>___________________________________ž.",
				shareWarningWith1: "Č_publicly___ž",
				shareWarningWith2: "Č_publicly and with the Organization___________ž"
			},
			directCreation: {
				header: "Č_Welcome to the Swipe/Spyglass Builder____________ž",
				mapPickHeader: "Č_To get started, please input a valid web map id, or use the search button to browse web maps_____________________________ž.",
				launchBuilder: "Č_Launch Builder_____ž",
				chooseWebmapLbl: "Č_Choose web map______ž...",
				explain2: "Č_To create a Swipe or Spyglass story map, use the button below to choose the existing web map you want to use. Alternatively, you can paste the ID of the web map into the field below________________________________________________________ž.",
				explain3: "Č_If you want to use two web maps in your story map, you'll be prompted for the second web map later when you choose that option_______________________________________ž.",
				webmapPlaceholder: "Č_Enter a web map id_______ž..."
			},
			saveErrorSocial: {
				title: "Č_Social media sharing update_________ž",
				panel1: "Č_Your storyâ€™s appearance on social media has been improved, but your ArcGIS web application item title is not the same as your story title___________________________________________ž.",
				panel1tooltip: "Č_By defining a title, summary and thumbnail image, your story will look like this_________________________ž:",
				panel2:	"Č_Which title would you like to use on social media________________ž:",
				panel2q1: "Č_Story title (recommended)_________ž",
				panel2q1tooltip: "Č_By choosing this option, your item title will be modified to match your story title and further changes in the builder will be synchronized___________________________________________ž.",
				panel2q2: "Č_Item title____ž",
				panel3: "Č_To further improve how your story looks on social media use ${MYSTORIES} to add a summary and a thumbnail image___________________________________ž.",
				panel4: "Č_Do not warn me again for this story____________ž",
				mystories: "Č_My Stories____ž",
				btnSave: "Č_Save__ž"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Č_My Organization______ž",
					onlineLabel: "Č_ArcGIS Online_____ž",
					contentLabel: "Č_My Content____ž",
					favoritesLabel: "Č_My Favorites_____ž"
				},
				title: "Č_Select Web Map_____ž",
				searchTitle: "Č_Search___ž",
				ok: "Č_Ok__ž",
				cancel: "Č_Cancel___ž",
				placeholder: "Č_Enter search term______ž"
			}
		}
    }),
	"ar": 1,
	"cs": 1,
	"da": 1,
	"de": 1,
	"el": 1,
	"es": 1,
	"et": 1,
	"fi": 1,
	"fr": 1,
	"he": 1,
	"hr": 1, 
	"it": 1,
	"ja": 1,
	"ko": 1,
	"lt": 1,
	"lv": 1,
	"nl": 1,
	"nb": 1,
	"pl": 1,
	"pt-br": 1,
	"pt-pt": 1,
	"ro": 1,
	"ru": 1,
	"sr": 1,
	"sv": 1,
	"th": 1,
	"tr": 1,
	"vi": 1,
	"zh-cn": 1,
	"zh-hk": 1, 
	"zh-tw": 1 
});
