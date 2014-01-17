define(
	({
		viewer: {
			loading: {
				step1: "ı_LOADING APPLICATION_İ",
				step2: "ı_LOADING DATA_İ",
				step3: "ı_INITIALIZING_İ",
				fail: "ı_Sorry, Swipe loading failed_İ",
				loadBuilder: "ı_SWITCHING TO BUILDER MODE_İ",
				failButton: "ı_Retry_İ"
			},
			errors: {
				boxTitle: "ı_An error has occurred_İ",
				portalSelf: "ı_Fatal error: Failed to get portal configuration_İ",
				invalidConfig: "ı_Fatal error: Invalid configuration_İ",
				invalidConfigNoWebmap: "ı_Fatal error: Invalid configuration (no web map specified)_İ",
				createMap: "ı_Unable to create map_İ",
				invalidApp: "ı_Fatal error: The application cannot be loaded_İ",
				initMobile: "ı_Welcome to the swipe web application. The application is not configured. The interactive builder is not supported on mobile devices._İ",
				noBuilderIE8: "ı_The Swipe interactive builder is not supported on Internet Explorer before version 9._İ",
				noLayerView: "ı_Welcome to the Swipe web application.<br />The application is not configured yet._İ",
				appSave: "ı_Error saving the web application_İ",
				mapSave: "ı_Error saving the web map_İ",
				notAuthorized: "ı_You are not authorized to access this application_İ",
				conflictingProjectionsTitle: "ı_Conflicting Projections_İ",
				conflictingProjections: "ı_Swipe does not support using two webmaps with different projections. Please open settings and use a webmap that use the same projection than the first webmap._İ",
				cpButton: "ı_Close_İ"
			},
			mobileView: {
				hideIntro: "ı_HIDE INTRO_İ",
				navLeft: "ı_Legend_İ",
				navMap: "ı_Map_İ",
				navRight: "ı_Data_İ"
			},
			desktopView: {
				storymapsText: "ı_A story map_İ",
				builderButton: "ı_Switch to builder mode_İ",
				bitlyTooltip: "ı_Get a short link to the application_İ"
			}
		},
		builder: {
			builder: {
				panelHeader: "ı_APPLICATION CONFIGURATION_İ",
				buttonSave: "ı_SAVE_İ",
				buttonDiscard: "ı_CANCEL_İ",
				buttonSettings: "ı_Settings_İ",
				buttonView: "ı_View mode_İ",
				buttonItem: "ı_Open the Web Application item_İ",
				noPendingChange: "ı_No pending change_İ",
				unSavedChangeSingular: "ı_1 unsaved change_İ",
				unSavedChangePlural: "ı_unsaved changes_İ",
				popoverDiscard: "ı_Are you sure to want to discard any unsaved changes?_İ",
				yes: "ı_Yes_İ",
				no: "ı_No_İ",
				popoverOpenViewExplain: "ı_By opening the viewer, you will lose any unsaved changes_İ",
				popoverOpenViewOk: "ı_Ok_İ",
				popoverOpenViewCancel: "ı_Cancel_İ",
				popoverSaveWhenDone: "ı_Don't forget to save when you are done_İ",
				closeWithPendingChange: "ı_Are you sure to want to confirm the action ? Your changes will be lost._İ",
				gotIt: "ı_Ok_İ",
				savingApplication: "ı_Saving application_İ",
				saveSuccess: "ı_Application saved successfully_İ",
				saveError: "ı_Save failed, please try again_İ",
				signIn: "ı_Please sign in with an account on_İ",
				signInTwo: "ı_to save the application._İ"
			},
			header:{
				editMe: "ı_Edit me !_İ",
				templateTitle: "ı_Set template title_İ",
				templateSubtitle: "ı_Set template subtitle_İ"
			},
			settings: {
				settingsHeader: "ı_Application settings_İ",
				modalCancel: "ı_Cancel_İ",
				modalApply: "ı_Apply_İ"
			},
			settingsColors: {
				settingsTabColor: "ı_Theme_İ",
				settingsColorExplain: "ı_Choose an app theme or define your own colors._İ",
				settingsLabelColor: "ı_Header and side panel background colors_İ"
			},
			settingsHeader: {
				settingsTabLogo: "ı_Header_İ",
				settingsLogoExplain: "ı_Customize the header logo (maximum is 250 x 50px)._İ",
				settingsLogoEsri: "ı_Esri logo_İ",
				settingsLogoNone: "ı_No logo_İ",
				settingsLogoCustom: "ı_Custom logo_İ",
				settingsLogoCustomPlaceholder: "ı_Image URL_İ",
				settingsLogoCustomTargetPlaceholder: "ı_Click-through link_İ",
				settingsLogoSocialExplain: "ı_Customize the header top right link._İ",
				settingsLogoSocialText: "ı_Text_İ",
				settingsLogoSocialLink: "ı_Link_İ",
				settingsLogoSocialDisabled: "ı_This feature has been disabled by the Administrator_İ"
			},
			settingsExtent: {
				settingsTabExtent: "ı_Extent_İ",
				settingsExtentExplain: "ı_Set the initial extent through the interactive map below._İ",
				settingsExtentExplainBottom: "ı_The extent you define will modify your web map initial extent. Note that if you are doing a swipe series that extent won't be used._İ",
				settingsExtentDateLineError: "ı_The extent cannot be across the meridian of 180° longitude_İ",
				settingsExtentDateLineError2: "ı_Error computing the extent_İ",
				settingsExtentDrawBtn: "ı_Draw a new extent_İ",
				settingsExtentModifyBtn: "ı_Edit the current extent_İ",
				settingsExtentApplyBtn: "ı_Apply on main map_İ",
				settingsExtentUseMainMap: "ı_Use main map extent_İ"
			}
        },
		swipe: {
			mobileData: {
				noData: "ı_No data to display!_İ",
				noDataExplain: "ı_Tap the map to select a feature and come back here_İ",
				noDataMap: "ı_No data for this map_İ",
				noPopup: "ı_No pop-up found for this feature_İ"
			},
			mobileLegend: {
				noLegend: "ı_No legend to display._İ"
			},
			swipeSidePanel: {
				editTooltip: "ı_Set the side panel description_İ",
				editMe: "ı_Edit me !_İ",
				legendTitle: "ı_Legend_İ"
			},
			infoWindow: {
				noFeature: "ı_No data to display_İ",
				noFeatureExplain: "ı_Tap the map to select a feature_İ"
			},
			settingsLayout: {
				settingsTabLayout: "ı_Swipe Style_İ",
				settingsLayoutExplain: "ı_Choose a style for the swipe tool._İ",
				settingsLayoutSwipe: "ı_Vertical bar_İ",
				settingsLayoutSpyGlass: "ı_Spyglass_İ",
				settingsLayoutSelected: "ı_Selected layout_İ",
				settingsLayoutSelect: "ı_Select this layout_İ",
				settingsSaveConfirm: "ı_Some of your changes require that you save and reload the application_İ"
			},
			settingsDataModel: {
				settingsTabDataModel: "ı_Swipe Type_İ",
				settingsDataModelExplainSwipe: "ı_What do you want users to swipe?_İ",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "ı_Choose the layer or the web map that will appear in the spyglass._İ",
				settingsDataModelOneMap: "ı_A layer in a web map_İ",
				settingsDataModel1Explain: "ı_Select the layer you want to be swiped_İ",
				settingsDataModel1Warning: "ı_If the layer is hidden by upper layers, swipe won't have any effect._İ",
				settingsDataModel1SpyGlassExplain: "ı_Select the layer to appear within the spyglass._İ",
				settingsDataModelTwoMaps: "ı_Two web maps_İ",
				settingsDataModelLayerIds: "ı_Web map Layer IDs_İ",
				settingsDataModelSelected: "ı_Selected type_İ",
				settingsDataModelWebmapSwipeId1: "ı_Right Web map ID_İ",
				settingsDataModelWebmapSwipeId2: "ı_Left Web map ID_İ",
				settingsDataModelWebmapGlassId1: "ı_Main Web map ID_İ",
				settingsDataModelWebmapGlassId2: "ı_Spyglass Web map ID_İ",
				settingsDataModelSelect: "ı_Select this type_İ",
				settingsDataModel2Explain: "ı_Swipe with another web map._İ",
				settingsDataModel2SpyGlassExplain: "ı_Reveal another web map._İ",
				settingsDataModel2HelpTitle: "ı_How do I find a web map's ID?_İ",
				settingsDataModel2HelpContent: "ı_Copy and paste digits after the '=' sign in the URL of the web map_İ"
			},
			settingsLegend: {
				settingsTabLegend: "ı_App Layout_İ",
				settingsLegendExplain: "ı_Select the application layout settings._İ",
				settingsLegendEnable: "ı_Enable Legend_İ",
				settingsDescriptionEnable: "ı_Enable Description_İ",
				settingsBookmarksEnable: "ı_Enable Swipe series_İ",
				settingsPopupDisable: "ı_Enable popup_İ",
				settingsLocationSearchEnable: "ı_Enable locator search_İ",
				settingsGeolocatorEnable: "ı_Enable geolocator_İ",
				settingsLegendHelpContent: "ı_To refine the legend content, use ArcGIS.com web map viewer table of contents (Hide in Legend)_İ",
				settingsSeriesHelpContent: "ı_Swipe series is a tabbed navigation option that will guide the viewer to a particular extent and display a title and description text in the side panel.  During initial activation, the bookmarks from the web map(s) will be imported and used to pre-populate the series bar.  Disabling the series option turns off the series bar, but the series configuration is preserved for future use._İ", 
				settingsSeriesHelpContent2: "ı_Swipe series lets you create and edit a selection of locations with accompanying titles and text.  If your web map has bookmarks, they'll be displayed.  You can disable the series, but the configuration will be preserved for future use._İ",
				settingsSeriesHelpLink: "ı_See an example of an application with a swipe series here_İ",
				preview: "ı_UI preview_İ",
				settingsLocateButtonExplain: "ı_This functionality is supported on most mobile devices and desktop browsers (including Internet Explorer 9+)._İ",
				settingsLocateButton: "ı_Enable a 'Locate' button supported browsers_İ",
				settingsAddressSearch: "ı_Enable an address search tool_İ"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "ı_Pop-up_İ",
				settingsSwipePopupExplain: "ı_Customize the appearance of the pop-ups header to help user associate pop-ups with maps layers._İ",
				settingsSwipePopupSwipe1: "ı_Left Map_İ",
				settingsSwipePopupSwipe2: "ı_Right Map_İ",
				settingsSwipePopupGlass1: "ı_Main Map_İ",
				settingsSwipePopupGlass2: "ı_Spyglass Map_İ",
				settingsSwipePopupTitle: "ı_Header Title_İ",
				settingsSwipePopupColor: "ı_Header Color_İ"
			},
			initPopup: {
				initHeader: "ı_Welcome to the Swipe Builder_İ",
				modalNext: "ı_Next_İ",
				modalPrev: "ı_Previous_İ",
				modalApply: "ı_Open the app_İ"
			},
			seriesPanel: {
				title: "ı_Title_İ",
				descr: "ı_Description_İ",
				discard: "ı_Discard Bookmark_İ",
				saveExtent: "ı_Set Bookmark Extent_İ",
				discardDisabled: "ı_You can't remove that bookmark. Swipe series can be disabled in the Settings._İ"
			}
		}
    })
);