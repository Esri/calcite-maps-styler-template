define(
	({
		viewer: {
			loading: {
				step1: "á»‡_LOADING APPLICATION_á»",
				step2: "á»‡_LOADING DATA_á»",
				step3: "á»‡_INITIALIZING_á»",
				fail: "á»‡_Sorry, Swipe loading failed_á»",
				loadBuilder: "á»‡_SWITCHING TO BUILDER MODE_á»",
				redirectSignIn: "á»‡_REDIRECTING TO SIGN-IN PAGE_á»",
				redirectSignIn2: "á»‡_(you will be redirected here after sign-in)_á»",
				failButton: "á»‡_Retry_á»"
			},
			errors: {
				boxTitle: "á»‡_An error has occurred_á»",
				portalSelf: "á»‡_Fatal error: Failed to get portal configuration_á»",
				invalidConfig: "á»‡_Fatal error: Invalid configuration_á»",
				invalidConfigNoWebmap: "á»‡_Fatal error: Invalid configuration (no web map specified)_á»",
				createMap: "á»‡_Unable to create map_á»",
				invalidApp: "á»‡_Fatal error: The application cannot be loaded_á»",
				initMobile: "á»‡_Welcome to the swipe web application. The application is not configured. The interactive builder is not supported on mobile devices_á».",
				noBuilderIE8: "á»‡_The Swipe interactive builder is not supported on Internet Explorer before version 9_á».",
				noLayerView: "á»‡_Welcome to the Swipe web application.<br />The application is not configured yet_á».",
				appSave: "á»‡_Error saving the web application_á»",
				mapSave: "á»‡_Error saving the web map_á»",
				notAuthorized: "á»‡_You are not authorized to access this application_á»",
				conflictingProjectionsTitle: "á»‡_Conflicting Projections_á»",
				conflictingProjections: "á»‡_Swipe does not support using two web maps with different projections. Please open settings and use a web map that use the same projection than the first web map_á».",
				cpButton: "á»‡_Close_á»"
			},
			mobileView: {
				hideIntro: "á»‡_HIDE INTRO_á»",
				navLeft: "á»‡_Legend_á»",
				navMap: "á»‡_Map_á»",
				navRight: "á»‡_Data_á»"
			},
			desktopView: {
				storymapsText: "á»‡_A story map_á»",
				builderButton: "á»‡_Switch to builder mode_á»",
				bitlyTooltip: "á»‡_Get a short link to the application_á»"
			}
		},
		builder: {
			builder: {
				panelHeader: "á»‡_APPLICATION CONFIGURATION_á»",
				buttonSave: "á»‡_SAVE_á»",
				buttonHelp: "á»‡_Help_á»",
				buttonShare: "á»‡_Share_á»",
				buttonDiscard: "á»‡_CANCEL_á»",
				buttonSettings: "á»‡_Settings_á»",
				buttonView: "á»‡_View mode_á»",
				buttonItem: "á»‡_Open the Web Application item_á»",
				noPendingChange: "á»‡_No pending change_á»",
				unSavedChangeSingular: "á»‡_1 unsaved change_á»",
				unSavedChangePlural: "á»‡_unsaved changes_á»",
				popoverDiscard: "á»‡_Are you sure to want to discard any unsaved changes_á»?",
				yes: "á»‡_Yes_á»",
				no: "á»‡_No_á»",
				popoverOpenViewExplain: "á»‡_By opening the viewer, you will lose any unsaved changes_á»",
				popoverOpenViewOk: "á»‡_Ok_á»",
				popoverOpenViewCancel: "á»‡_Cancel_á»",
				popoverSaveWhenDone: "á»‡_Don't forget to save when you are done_á»",
				closeWithPendingChange: "á»‡_Are you sure to want to confirm the action ? Your changes will be lost_á».",
				gotIt: "á»‡_Ok_á»",
				savingApplication: "á»‡_Saving application_á»",
				saveSuccess: "á»‡_Application saved successfully_á»",
				saveError: "á»‡_Save failed, please try again_á»",
				saveError2: "á»‡_Save failed due to an invalid html tag in a name or description_á»",
				saveError3: "á»‡_The title can't be empty_á»",
				signIn: "á»‡_Please sign in with an account on_á»",
				signInTwo: "á»‡_to save the application_á»."
			},
			header:{
				editMe: "á»‡_Edit me_á»!",
				templateTitle: "á»‡_Set template title_á»",
				templateSubtitle: "á»‡_Set template subtitle_á»"
			},
			settings: {
				settingsHeader: "á»‡_Application settings_á»",
				modalCancel: "á»‡_Cancel_á»",
				modalApply: "á»‡_Apply_á»"
			},
			settingsColors: {
				settingsTabColor: "á»‡_Theme_á»",
				settingsColorExplain: "á»‡_Choose an app theme or define your own colors_á».",
				settingsLabelColor: "á»‡_Header and side panel background colors_á»"
			},
			settingsHeader: {
				settingsTabLogo: "á»‡_Header_á»",
				settingsLogoExplain: "á»‡_Customize the header logo (maximum is 250 x 50px)_á».",
				settingsLogoEsri: "á»‡_Esri logo_á»",
				settingsLogoNone: "á»‡_No logo_á»",
				settingsLogoCustom: "á»‡_Custom logo_á»",
				settingsLogoCustomPlaceholder: "á»‡_Image URL_á»",
				settingsLogoCustomTargetPlaceholder: "á»‡_Click-through link_á»",
				settingsLogoSocialExplain: "á»‡_Customize the header top right link_á».",
				settingsLogoSocialText: "á»‡_Text_á»",
				settingsLogoSocialLink: "á»‡_Link_á»",
				settingsLogoSocialDisabled: "á»‡_This feature has been disabled by the Administrator_á»"
			},
			settingsExtent: {
				settingsTabExtent: "á»‡_Extent_á»",
				settingsExtentExplain: "á»‡_Set the initial extent through the interactive map below_á».",
				settingsExtentExplainBottom: "á»‡_The extent you define will modify your web map initial extent. Note that if you are doing a swipe series that extent won't be used_á».",
				settingsExtentDateLineError: "á»‡_The extent cannot be across the meridian of 180ï¿½ longitude_á»",
				settingsExtentDateLineError2: "á»‡_Error computing the extent_á»",
				settingsExtentDrawBtn: "á»‡_Draw a new extent_á»",
				settingsExtentModifyBtn: "á»‡_Edit the current extent_á»",
				settingsExtentApplyBtn: "á»‡_Apply on main map_á»",
				settingsExtentUseMainMap: "á»‡_Use main map extent_á»"
			}
        },
		swipe: {
			mobileData: {
				noData: "á»‡_No data to display_á»!",
				noDataExplain: "á»‡_Tap the map to select a feature and come back here_á»",
				noDataMap: "á»‡_No data for this map_á»",
				noPopup: "á»‡_No pop-up found for this feature_á»"
			},
			mobileLegend: {
				noLegend: "á»‡_No legend to display_á»."
			},
			swipeSidePanel: {
				editTooltip: "á»‡_Set the side panel description_á»",
				editMe: "á»‡_Edit me_á»!",
				legendTitle: "á»‡_Legend_á»"
			},
			infoWindow: {
				noFeature: "á»‡_No data to display_á»",
				noFeatureExplain: "á»‡_Tap the map to select a feature_á»"
			},
			settingsLayout: {
				settingsTabLayout: "á»‡_Swipe Style_á»",
				settingsLayoutExplain: "á»‡_Choose a style for the swipe tool_á».",
				settingsLayoutSwipe: "á»‡_Vertical bar_á»",
				settingsLayoutSpyGlass: "á»‡_Spyglass_á»",
				settingsLayoutSelected: "á»‡_Selected layout_á»",
				settingsLayoutSelect: "á»‡_Select this layout_á»",
				settingsSaveConfirm: "á»‡_Some of your changes require that you save and reload the application_á»"
			},
			settingsDataModel: {
				settingsTabDataModel: "á»‡_Swipe Type_á»",
				settingsDataModelExplainSwipe: "á»‡_What do you want users to swipe_á»?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "á»‡_Choose the layer or the web map that will appear in the spyglass_á».",
				settingsDataModelOneMap: "á»‡_A layer in a web map_á»",
				settingsDataModel1Explain: "á»‡_Select the layer you want to be swiped_á»",
				settingsDataModel1Warning: "á»‡_If the layer is hidden by upper layers, swipe won't have any effect_á».",
				settingsDataModel1SpyGlassExplain: "á»‡_Select the layer to appear within the spyglass_á».",
				settingsDataModelTwoMaps: "á»‡_Two web maps_á»",
				settingsDataModelLayerIds: "á»‡_Web map Layer IDs_á»",
				settingsDataModelSelected: "á»‡_Selected type_á»",
				settingsDataModelWebmapSwipeId1: "á»‡_Right Web map ID_á»",
				settingsDataModelWebmapSwipeId2: "á»‡_Left Web map ID_á»",
				settingsDataModelWebmapGlassId1: "á»‡_Main Web map ID_á»",
				settingsDataModelWebmapGlassId2: "á»‡_Spyglass Web map ID_á»",
				settingsDataModelSelect: "á»‡_Select this type_á»",
				settingsDataModel2Explain: "á»‡_Swipe with another web map_á».",
				settingsDataModel2SpyGlassExplain: "á»‡_Reveal another web map_á».",
				settingsDataModel2HelpTitle: "á»‡_How do I find a web map's ID_á»?",
				settingsDataModel2HelpContent: "á»‡_Copy and paste digits after the '=' sign in the URL of the web map_á»",
				switchMaps: "á»‡_Switch maps_á»",
				browseWebMaps: "á»‡_Browse web maps_á»"
			},
			settingsLegend: {
				settingsTabLegend: "á»‡_App Layout_á»",
				settingsLegendExplain: "á»‡_Select the application layout settings_á».",
				settingsLegendEnable: "á»‡_Enable Legend_á»",
				settingsDescriptionEnable: "á»‡_Enable Description_á»",
				settingsBookmarksEnable: "á»‡_Enable Swipe series_á»",
				settingsPopupDisable: "á»‡_Enable popup_á»",
				settingsLocationSearchEnable: "á»‡_Enable locator search_á»",
				settingsGeolocatorEnable: "á»‡_Enable geolocator_á»",
				settingsLegendHelpContent: "á»‡_To refine the legend content, use ArcGIS.com web map viewer table of contents (Hide in Legend)_á»",
				settingsSeriesHelpContent: "á»‡_Swipe series is a tabbed navigation option that will guide the viewer to a particular extent and display a title and description text in the side panel.  During initial activation, the bookmarks from the web map(s) will be imported and used to pre-populate the series bar.  Disabling the series option turns off the series bar, but the series configuration is preserved for future use_á».", 
				settingsSeriesHelpContent2: "á»‡_Swipe series lets you create and edit a selection of locations with accompanying titles and text.  If your web map has bookmarks, they'll be displayed.  You can disable the series, but the configuration will be preserved for future use_á».",
				settingsSeriesHelpLink: "á»‡_See an example of an application with a swipe series here_á»",
				preview: "á»‡_UI preview_á»",
				settingsLocateButtonExplain: "á»‡_This functionality is supported on most mobile devices and desktop browsers (including Internet Explorer 9+)_á».",
				settingsLocateButton: "á»‡_Enable a 'Locate' button on supported browsers_á»",
				settingsAddressSearch: "á»‡_Enable an address search tool_á»"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "á»‡_Pop-up_á»",
				settingsSwipePopupExplain: "á»‡_Customize the appearance of the pop-ups header to help user associate pop-ups with maps layers_á».",
				settingsSwipePopupSwipe1: "á»‡_Left Map_á»",
				settingsSwipePopupSwipe2: "á»‡_Right Map_á»",
				settingsSwipePopupGlass1: "á»‡_Main Map_á»",
				settingsSwipePopupGlass2: "á»‡_Spyglass Map_á»",
				settingsSwipePopupTitle: "á»‡_Header Title_á»",
				settingsSwipePopupColor: "á»‡_Header Color_á»"
			},
			initPopup: {
				initHeader: "á»‡_Welcome to the Swipe/Spyglass Builder_á»",
				modalNext: "á»‡_Next_á»",
				modalPrev: "á»‡_Previous_á»",
				modalApply: "á»‡_Open the app_á»"
			},
			seriesPanel: {
				title: "á»‡_Title_á»",
				descr: "á»‡_Description_á»",
				discard: "á»‡_Discard Bookmark_á»",
				saveExtent: "á»‡_Set Bookmark Extent_á»",
				discardDisabled: "á»‡_You can't remove that bookmark. Swipe series can be disabled in the Settings_á»."
			},
			helpPopup: {
				title: "á»‡_Help_á»",
				close: "á»‡_Close_á»",
				tab1: {
					div1: "á»‡_The Swipe/Spyglass template is designed to compare two seperate web maps or two layers of a single web map in an attractive, easy-to-use web application that can be used in any web browser on any device, including smartphones and tablets_á».",
					div2: "á»‡_For additional information on the Swipe/Spyglass template, including examples created by users, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visit the Story Maps website</a>. You can also follow us on Twitter at <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>_á».",
					div3: "á»‡_We would love to hear from you! Whether you have a question, want to request a new feature, or think you've found a bug, please visit the <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps User Forum</a>_á»."
				}
			},
			share: {
				firstSaveTitle: "á»‡_Application successfully saved_á»",
				firstSaveHeader: "á»‡_Your Application is now saved in ArcGIS Online. Please read the following answers to frequent questions_á».",
				firstSaveA1: "á»‡_If you are not familiar with ArcGIS Online or want a shortcut to access the authoring interface, you can save the following link: %LINK1%_á»",
				firstSaveA1bis: "á»‡_The Application can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>_á».",
				firstSaveQ2: "á»‡_Is my Application shared_á»?",
				firstSaveA2: "á»‡_Currently your Application is not shared. To share it, use the SHARE button_á».",
				shareTitle: "á»‡_Share your Application_á»",
				sharePrivateHeader: "á»‡_Your Application is not shared, would you like to share it_á»?",
				sharePrivateBtn1: "á»‡_Share publicly_á»",
				sharePrivateBtn2: "á»‡_Share with my Organization_á»",
				sharePrivateProgress: "á»‡_Sharing in progress_á»...",
				sharePrivateErr: "á»‡_Sharing failed, try again or_á»",
				sharePrivateOk: "á»‡_Sharing updated successfully, loading_á»...",
				shareStatus1: "á»‡_Application is not saved_á»",
				shareStatus2: "á»‡_Application is shared publicly_á»",
				shareStatus3: "á»‡_Application is shared within the organization_á»",
				shareStatus4: "á»‡_Application is not shared_á»",
				sharePreviewAsUser: "á»‡_Preview_á»",
				shareHeader1: "á»‡_Your Application is <strong>publicly accessible</strong>_á».",
				shareHeader2: "á»‡_Your Application is accessible by your organization members (login is required)_á».",
				shareLinkHeader: "á»‡_Share the Application with your audience_á»",
				shareLinkOpen: "á»‡_OPEN_á»",
				learnMore: "á»‡_Learn more_á»",
				shareQ1Opt1: "á»‡_How do I keep the Application private_á»?",
				shareQ1Opt2: "á»‡_How do I keep the Application private or share it publicly_á»?",
				shareA1: "á»‡_Use %SHAREIMG% on <a href='%LINK1%' target='_blank'>the application item page</a>. If you also want to unshare the web map, use <a href='%LINK2%' target='_blank'>the web map item page</a>_á».",
				shareA1bis: "á»‡_If you also want to unshare the Feature Service, use <a href='%LINK1%' target='_blank'>the Feature Service item page</a>_á».",
				shareQ2: "á»‡_How do I edit the Application later_á»?",
				shareQ2bis: "á»‡_How do I get back to the authoring interface_á»?",
				shareA2div1: "á»‡_Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the application item page</a>_á».",
				shareA2div2: "á»‡_As the owner of the application, when you are signed in on ArcGIS.com, the application includes a button to open the interactive builder_á»:",				
				shareQ3: "á»‡_Where is the data stored_á»?",
				shareA3: "á»‡_The Application configuration is stored in this web application item</a>_á».",
				shareWarning: "á»‡_Sharing %WITH% has been disabled because you are not the owner of the <a href='%LINK%' target='_blank'>webmap</a>_á».",
 				shareWarningWith1: "á»‡_publicly_á»",
 				shareWarningWith2: "á»‡_publicly and with the Organization_á»"
			},
			directCreation: {
				header: "á»‡_Welcome to the Swipe/Spyglass Builder_á»",
				mapPickHeader: "á»‡_To get started, please input a valid web map id, or use the search button to browse web maps_á».",
				launchBuilder: "á»‡_Launch Builder_á»",
				chooseWebmapLbl: "á»‡_Choose web map_á»...",
				explain2: "á»‡_To create a Swipe or Spyglass story map, use the button below to choose the existing ArcGIS Online web map you want to use. Alternatively, you can paste the ID of the web map into the field below_á».",
				explain3: "á»‡_If you want to use two web maps in your story map, you'll be prompted for the second web map later when you choose that option_á».",
				webmapPlaceholder: "á»‡_Enter a web map id_á»..."
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "á»‡_My Organization_á»",
					onlineLabel: "á»‡_ArcGIS Online_á»",
					contentLabel: "á»‡_My Content_á»",
					favoritesLabel: "á»‡_My Favorites_á»"
				},
				title: "á»‡_Select Web Map_á»",
				searchTitle: "á»‡_Search_á»",
				ok: "á»‡_Ok_á»",
				cancel: "á»‡_Cancel_á»",
				placeholder: "á»‡_Enter search term_á»"
			}
		}
    })
);