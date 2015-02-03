define(
	 ({
		builder: {
			layouts: {
				tabTitle: "ł_Tabbed_ą",
				tabDescr: "ł_Present maps and other content using tabs with an optional panel for descriptive text_ą.",
				tabItem: "ł_Tab_ą",
				tabItems: "ł_Tabs_ą",
				sideTitle: "ł_Side Accordion_ą",
				sideDescr: "ł_Present maps and other content using an expandable control that includes descriptive text_ą.",
				sideItem: "ł_Entry_ą",
				sideItems: "ł_Entries_ą",
				bulletTitle: "ł_Bulleted_ą",
				bulletDescr: "ł_Present maps and other content using bullets with an optional panel for descriptive text_ą.",
				bulletItem: "ł_Bullet_ą",
				bulletItems: "ł_Bullets_ą"
			},
			common: {
				lblStatus1: "ł_Published_ą",
				lblStatus3: "ł_Hidden_ą"
			},
			settingsLayoutOptions: {
				title: "ł_Layout options_ą",
				lblDescription: "ł_Description_ą",
				lblLegend: "ł_Legend placement_ą",
				tooltipLegend: "ł_Choose where you want the map legend to be displayed. You can turn the legend on for any map when you add or configure it_ą.",
				lblDropdown: "ł_Dropdown_ą",
				lblBelowDesc: "ł_Below the description_ą",
				lblOnPanel: "ł_As a panel_ą",
				lblPanelDescAndLegend: "ł_Description and legend panel_ą",
				lblPanelDescAndOrLegend: "ł_Description and/or legend panel_ą",
				lblPanelDesc: "ł_Description panel_ą",
				lblPanelLegend: "ł_Legend panel_ą",
				lblPanelAccordion: "ł_Accordion panel_ą",
				cfgLeft: "ł_Left_ą",
				cfgRight: "ł_Right_ą",
				cfgSmall: "ł_Small_ą",
				cfgMedium: "ł_Medium_ą",
				cfgLarge: "ł_Large_ą",
				lblNumbering: "ł_Display numbers_ą",
				lblReverse: "ł_Reverse numbering_ą",
				canOverlapMap: "ł_can overlap map location_ą"
			},
			settingsMapOptions: {
				title: "ł_Map options_ą",
				lblOverview: "ł_Overview Map_ą",
				tooltipOverview: "ł_Display a small overview map along with the main map_ą.",
				lblLocate: "ł_Locate button_ą",
				tooltipLocate: "ł_This functionality is supported on most mobile device and desktop browsers (Internet Explorer 9)_ą.",
				lblGeocoder: "ł_Address or Place Finder_ą",
				tooltipGeocoder: "ł_Allow your users to find addresses and places on your maps_ą.",
				lblSync: "ł_Synchronize map locations_ą",
				tooltipSync: "ł_When enabled, the initial location of the first map in your series will be applied to all the maps, and navigation by users in any map will be reflected in all maps. Disable for each map's location to remain independent_ą."
			},
			initPopup: {
				title: "ł_Welcome to_ą"
			},
			addEditPopup: {
				lblAdd: "ł_Add_ą",
				lblEdit: "ł_Edit_ą",
				disabled: "ł_Add is disabled because the maximum number of allowed %LBL_LAYOUT% has been reached_ą.",
				titleAdd: "ł_Add_ą",
				titleEdit: "ł_Edit_ą",
				stepMainStageNextTooltip: "ł_Enter the %LBL_LAYOUT% title and content_ą",
				titlePlaceholder: "ł_%LBL_LAYOUT% title_ą..."
			},
			textEditor: {
				placeholder1: "ł_Add text, links, and small graphics here_ą.",
				placeholder2: "ł_If left blank the panel will be hidden_ą."
			},
			organizePopup: {
				title: "ł_Organize_ą",
				lblHeader: "ł_Drag and drop %LBL_LAYOUT% to organize your series_ą.",
				lblColTitle: "ł_Title_ą",
				lblColStatus: "ł_Status_ą",
				btnApplyWarning: "ł_Confirm deletion of %NB% %LBL_LAYOUT%_ą",
				deleteTooltip: "ł_Delete_ą",
				firstSectionExplain: "ł_(The home section cannot be moved)_ą"
			},
			help: {
				lblHelp: "ł_Help_ą",
				lblAdd: "ł_Add_ą",
				lblSettings: "ł_Settings_ą",
				lblOrga: "ł_Organize_ą",
				lblEdit: "ł_Edits_ą",
				lblPublish: "ł_Share_ą",
				lblTips: "ł_Tips_ą",
				lblMore: "ł_Want more_ą?",
				lblLink: "ł_Visit the Esri Story Maps website_ą.",
				content1Div1: "ł_To create your %TPL_NAME%, use the Add button to add each map or other content into the layout. The other content can include images, videos or embedded web pages or code. For example you might want your readers to see an introductory image or video when they first launch your  %TPL_NAME%, before they move on to explore your maps_ą.",
				content1Div2: "ł_When you click the Add button a dialog will appear that lets you choose and configure the map or other content you want to add. For example you can specify the location you want the map to show, enable its legend, etc_ą.",
				content2Div1: "ł_The Settings dialog is where you can change the appearance of your %TPL_NAME%. You change the layout, choose a different color scheme, choose where the map legend will appear, etc_ą.",
				content2Div2: "ł_You can also replace the Esri logo in the header of your %TPL_NAME% with your own logo to reflect your brand. You can also specify the website that will be launched if readers click your logo, so they can get more information_ą.",
				content3Div1: "ł_The Organize dialog lets you manage your %TPL_NAME%. In this dialog you can change the order of the series by dragging and dropping_ą.",
				content3Div2: "ł_You can also delete content or hide it. Hiding is useful if you are preparing new content that isn't ready to be included in your story map yet_ą.",
				content4Div1: "ł_Found a mistake or want to change your material? No worries. Look for the edit icon throughout the app to make changes to your content. Youâ€™ll use the edit functions many times as you develop your %TPL_NAME%_ą!",
				content5Div1: "ł_When you save your %TPL_NAME% it is private initially. Use the Share button to share it with others. You can share your %TPL_NAME% publicly so anyone can access it_ą.",
				content5Div2: "ł_Depending on your account, you may also have the option to share your %TPL_NAME% just to people within your organization, so others can't access it_ą.",
				content6Div1: "ł_By default the maps in a series are synchronized to show the same location. This means that the location shown in the first map will be automatically applied to all the other maps, and that if a reader zooms or pans to a different location in the map they are currently looking at, this will also be applied to the other maps_ą.",
				content6Div2: "ł_For example if your series shows different thematic data for a city, a reader can zoom to their neighborhood and then simply switch between the tabs to see the maps for that area_ą.",
				content6Div3: "ł_To disable location synchronization, go to the Settings dialog and uncheck that setting in the Map Options tab_ą.",
				content6AltDiv1: "ł_By default the maps location are synchronized. Disabling synchronization allows each map to display a different location_ą.",
				content6AltDiv2: "ł_Synchronization ON_ą",
				content6AltDiv3: "ł_Synchronization OFF_ą",
				content6AltDiv4: "ł_To disable synchronization, go to Settings > Map Options and uncheck \"Synchronize map locations\"_ą."
			},
			landing: {
				lblAdd: "ł_What do you want to call your %LAYOUT_TITLE% Map Series_ą?",
				phAdd: "ł_Enter your title_ą...",
				lblOR: "ł_Or_ą",
				lblHelp: "ł_Take a Tour_ą"
			}
        }
    })
);
