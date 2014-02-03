define(
	({
		viewer: {
			loading: {
				step1: "ก้_LOADING APPLICATION_ษฺ",
				step2: "ก้_LOADING DATA_ษฺ",
				step3: "ก้_INITIALIZING_ษฺ",
				fail: "ก้_Sorry, Swipe loading failed_ษฺ",
				loadBuilder: "ก้_SWITCHING TO BUILDER MODE_ษฺ",
				failButton: "ก้_Retry_ษฺ"
			},
			errors: {
				boxTitle: "ก้_An error has occurred_ษฺ",
				portalSelf: "ก้_Fatal error: Failed to get portal configuration_ษฺ",
				invalidConfig: "ก้_Fatal error: Invalid configuration_ษฺ",
				invalidConfigNoWebmap: "ก้_Fatal error: Invalid configuration (no web map specified)_ษฺ",
				createMap: "ก้_Unable to create map_ษฺ",
				invalidApp: "ก้_Fatal error: The application cannot be loaded_ษฺ",
				initMobile: "ก้_Welcome to the swipe web application. The application is not configured. The interactive builder is not supported on mobile devices._ษฺ",
				noBuilderIE8: "ก้_The Swipe interactive builder is not supported on Internet Explorer before version 9._ษฺ",
				noLayerView: "ก้_Welcome to the Swipe web application.<br />The application is not configured yet._ษฺ",
				appSave: "ก้_Error saving the web application_ษฺ",
				mapSave: "ก้_Error saving the web map_ษฺ",
				notAuthorized: "ก้_You are not authorized to access this application_ษฺ",
				conflictingProjectionsTitle: "ก้_Conflicting Projections_ษฺ",
				conflictingProjections: "ก้_Swipe does not support using two webmaps with different projections. Please open settings and use a webmap that use the same projection than the first webmap._ษฺ",
				cpButton: "ก้_Close_ษฺ"
			},
			mobileView: {
				hideIntro: "ก้_HIDE INTRO_ษฺ",
				navLeft: "ก้_Legend_ษฺ",
				navMap: "ก้_Map_ษฺ",
				navRight: "ก้_Data_ษฺ"
			},
			desktopView: {
				storymapsText: "ก้_A story map_ษฺ",
				builderButton: "ก้_Switch to builder mode_ษฺ",
				bitlyTooltip: "ก้_Get a short link to the application_ษฺ"
			}
		},
		builder: {
			builder: {
				panelHeader: "ก้_APPLICATION CONFIGURATION_ษฺ",
				buttonSave: "ก้_SAVE_ษฺ",
				buttonDiscard: "ก้_CANCEL_ษฺ",
				buttonSettings: "ก้_Settings_ษฺ",
				buttonView: "ก้_View mode_ษฺ",
				buttonItem: "ก้_Open the Web Application item_ษฺ",
				noPendingChange: "ก้_No pending change_ษฺ",
				unSavedChangeSingular: "ก้_1 unsaved change_ษฺ",
				unSavedChangePlural: "ก้_unsaved changes_ษฺ",
				popoverDiscard: "ก้_Are you sure to want to discard any unsaved changes?_ษฺ",
				yes: "ก้_Yes_ษฺ",
				no: "ก้_No_ษฺ",
				popoverOpenViewExplain: "ก้_By opening the viewer, you will lose any unsaved changes_ษฺ",
				popoverOpenViewOk: "ก้_Ok_ษฺ",
				popoverOpenViewCancel: "ก้_Cancel_ษฺ",
				popoverSaveWhenDone: "ก้_Don't forget to save when you are done_ษฺ",
				closeWithPendingChange: "ก้_Are you sure to want to confirm the action ? Your changes will be lost._ษฺ",
				gotIt: "ก้_Ok_ษฺ",
				savingApplication: "ก้_Saving application_ษฺ",
				saveSuccess: "ก้_Application saved successfully_ษฺ",
				saveError: "ก้_Save failed, please try again_ษฺ",
				signIn: "ก้_Please sign in with an account on_ษฺ",
				signInTwo: "ก้_to save the application._ษฺ"
			},
			header:{
				editMe: "ก้_Edit me !_ษฺ",
				templateTitle: "ก้_Set template title_ษฺ",
				templateSubtitle: "ก้_Set template subtitle_ษฺ"
			},
			settings: {
				settingsHeader: "ก้_Application settings_ษฺ",
				modalCancel: "ก้_Cancel_ษฺ",
				modalApply: "ก้_Apply_ษฺ"
			},
			settingsColors: {
				settingsTabColor: "ก้_Theme_ษฺ",
				settingsColorExplain: "ก้_Choose an app theme or define your own colors._ษฺ",
				settingsLabelColor: "ก้_Header and side panel background colors_ษฺ"
			},
			settingsHeader: {
				settingsTabLogo: "ก้_Header_ษฺ",
				settingsLogoExplain: "ก้_Customize the header logo (maximum is 250 x 50px)._ษฺ",
				settingsLogoEsri: "ก้_Esri logo_ษฺ",
				settingsLogoNone: "ก้_No logo_ษฺ",
				settingsLogoCustom: "ก้_Custom logo_ษฺ",
				settingsLogoCustomPlaceholder: "ก้_Image URL_ษฺ",
				settingsLogoCustomTargetPlaceholder: "ก้_Click-through link_ษฺ",
				settingsLogoSocialExplain: "ก้_Customize the header top right link._ษฺ",
				settingsLogoSocialText: "ก้_Text_ษฺ",
				settingsLogoSocialLink: "ก้_Link_ษฺ",
				settingsLogoSocialDisabled: "ก้_This feature has been disabled by the Administrator_ษฺ"
			},
			settingsExtent: {
				settingsTabExtent: "ก้_Extent_ษฺ",
				settingsExtentExplain: "ก้_Set the initial extent through the interactive map below._ษฺ",
				settingsExtentExplainBottom: "ก้_The extent you define will modify your web map initial extent. Note that if you are doing a swipe series that extent won't be used._ษฺ",
				settingsExtentDateLineError: "ก้_The extent cannot be across the meridian of 180ï¿½ longitude_ษฺ",
				settingsExtentDateLineError2: "ก้_Error computing the extent_ษฺ",
				settingsExtentDrawBtn: "ก้_Draw a new extent_ษฺ",
				settingsExtentModifyBtn: "ก้_Edit the current extent_ษฺ",
				settingsExtentApplyBtn: "ก้_Apply on main map_ษฺ",
				settingsExtentUseMainMap: "ก้_Use main map extent_ษฺ"
			}
        },
		swipe: {
			mobileData: {
				noData: "ก้_No data to display!_ษฺ",
				noDataExplain: "ก้_Tap the map to select a feature and come back here_ษฺ",
				noDataMap: "ก้_No data for this map_ษฺ",
				noPopup: "ก้_No pop-up found for this feature_ษฺ"
			},
			mobileLegend: {
				noLegend: "ก้_No legend to display._ษฺ"
			},
			swipeSidePanel: {
				editTooltip: "ก้_Set the side panel description_ษฺ",
				editMe: "ก้_Edit me !_ษฺ",
				legendTitle: "ก้_Legend_ษฺ"
			},
			infoWindow: {
				noFeature: "ก้_No data to display_ษฺ",
				noFeatureExplain: "ก้_Tap the map to select a feature_ษฺ"
			},
			settingsLayout: {
				settingsTabLayout: "ก้_Swipe Style_ษฺ",
				settingsLayoutExplain: "ก้_Choose a style for the swipe tool._ษฺ",
				settingsLayoutSwipe: "ก้_Vertical bar_ษฺ",
				settingsLayoutSpyGlass: "ก้_Spyglass_ษฺ",
				settingsLayoutSelected: "ก้_Selected layout_ษฺ",
				settingsLayoutSelect: "ก้_Select this layout_ษฺ",
				settingsSaveConfirm: "ก้_Some of your changes require that you save and reload the application_ษฺ"
			},
			settingsDataModel: {
				settingsTabDataModel: "ก้_Swipe Type_ษฺ",
				settingsDataModelExplainSwipe: "ก้_What do you want users to swipe?_ษฺ",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "ก้_Choose the layer or the web map that will appear in the spyglass._ษฺ",
				settingsDataModelOneMap: "ก้_A layer in a web map_ษฺ",
				settingsDataModel1Explain: "ก้_Select the layer you want to be swiped_ษฺ",
				settingsDataModel1Warning: "ก้_If the layer is hidden by upper layers, swipe won't have any effect._ษฺ",
				settingsDataModel1SpyGlassExplain: "ก้_Select the layer to appear within the spyglass._ษฺ",
				settingsDataModelTwoMaps: "ก้_Two web maps_ษฺ",
				settingsDataModelLayerIds: "ก้_Web map Layer IDs_ษฺ",
				settingsDataModelSelected: "ก้_Selected type_ษฺ",
				settingsDataModelWebmapSwipeId1: "ก้_Right Web map ID_ษฺ",
				settingsDataModelWebmapSwipeId2: "ก้_Left Web map ID_ษฺ",
				settingsDataModelWebmapGlassId1: "ก้_Main Web map ID_ษฺ",
				settingsDataModelWebmapGlassId2: "ก้_Spyglass Web map ID_ษฺ",
				settingsDataModelSelect: "ก้_Select this type_ษฺ",
				settingsDataModel2Explain: "ก้_Swipe with another web map._ษฺ",
				settingsDataModel2SpyGlassExplain: "ก้_Reveal another web map._ษฺ",
				settingsDataModel2HelpTitle: "ก้_How do I find a web map's ID?_ษฺ",
				settingsDataModel2HelpContent: "ก้_Copy and paste digits after the '=' sign in the URL of the web map_ษฺ"
			},
			settingsLegend: {
				settingsTabLegend: "ก้_App Layout_ษฺ",
				settingsLegendExplain: "ก้_Select the application layout settings._ษฺ",
				settingsLegendEnable: "ก้_Enable Legend_ษฺ",
				settingsDescriptionEnable: "ก้_Enable Description_ษฺ",
				settingsBookmarksEnable: "ก้_Enable Swipe series_ษฺ",
				settingsPopupDisable: "ก้_Enable popup_ษฺ",
				settingsLocationSearchEnable: "ก้_Enable locator search_ษฺ",
				settingsGeolocatorEnable: "ก้_Enable geolocator_ษฺ",
				settingsLegendHelpContent: "ก้_To refine the legend content, use ArcGIS.com web map viewer table of contents (Hide in Legend)_ษฺ",
				settingsSeriesHelpContent: "ก้_Swipe series is a tabbed navigation option that will guide the viewer to a particular extent and display a title and description text in the side panel.  During initial activation, the bookmarks from the web map(s) will be imported and used to pre-populate the series bar.  Disabling the series option turns off the series bar, but the series configuration is preserved for future use._ษฺ", 
				settingsSeriesHelpContent2: "ก้_Swipe series lets you create and edit a selection of locations with accompanying titles and text.  If your web map has bookmarks, they'll be displayed.  You can disable the series, but the configuration will be preserved for future use._ษฺ",
				settingsSeriesHelpLink: "ก้_See an example of an application with a swipe series here_ษฺ",
				preview: "ก้_UI preview_ษฺ",
				settingsLocateButtonExplain: "ก้_This functionality is supported on most mobile devices and desktop browsers (including Internet Explorer 9+)._ษฺ",
				settingsLocateButton: "ก้_Enable a 'Locate' button on supported browsers_ษฺ",
				settingsAddressSearch: "ก้_Enable an address search tool_ษฺ"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "ก้_Pop-up_ษฺ",
				settingsSwipePopupExplain: "ก้_Customize the appearance of the pop-ups header to help user associate pop-ups with maps layers._ษฺ",
				settingsSwipePopupSwipe1: "ก้_Left Map_ษฺ",
				settingsSwipePopupSwipe2: "ก้_Right Map_ษฺ",
				settingsSwipePopupGlass1: "ก้_Main Map_ษฺ",
				settingsSwipePopupGlass2: "ก้_Spyglass Map_ษฺ",
				settingsSwipePopupTitle: "ก้_Header Title_ษฺ",
				settingsSwipePopupColor: "ก้_Header Color_ษฺ"
			},
			initPopup: {
				initHeader: "ก้_Welcome to the Swipe Builder_ษฺ",
				modalNext: "ก้_Next_ษฺ",
				modalPrev: "ก้_Previous_ษฺ",
				modalApply: "ก้_Open the app_ษฺ"
			},
			seriesPanel: {
				title: "ก้_Title_ษฺ",
				descr: "ก้_Description_ษฺ",
				discard: "ก้_Discard Bookmark_ษฺ",
				saveExtent: "ก้_Set Bookmark Extent_ษฺ",
				discardDisabled: "ก้_You can't remove that bookmark. Swipe series can be disabled in the Settings._ษฺ"
			}
		}
    })
);