define(
	 ({
		builder: {
			layouts: {
				tabTitle: "é_Tabbed_È",
				tabDescr: "é_Present maps and other content using tabs with an optional panel for descriptive text_È.",
				tabItem: "é_Tab_È",
				tabItems: "é_Tabs_È",
				sideTitle: "é_Side Accordion_È",
				sideDescr: "é_Present maps and other content using an expandable control that includes descriptive text_È.",
				sideItem: "é_Entry_È",
				sideItems: "é_Entries_È",
				bulletTitle: "é_Bulleted_È",
				bulletDescr: "é_Present maps and other content using bullets with an optional panel for descriptive text_È.",
				bulletItem: "é_Bullet_È",
				bulletItems: "é_Bullets_È"
			},
			common: {
				lblStatus1: "é_Published_È",
				lblStatus3: "é_Hidden_È"
			},
			settingsLayoutOptions: {
				title: "é_Layout options_È",
				lblDescription: "é_Description_È",
				lblLegend: "é_Legend placement_È",
				tooltipLegend: "é_Choose where you want the map legend to be displayed. You can turn the legend on for any map when you add or configure it_È.",
				lblDropdown: "é_Dropdown_È",
				lblBelowDesc: "é_Below the description_È",
				lblOnPanel: "é_As a panel_È",
				lblPanelDescAndLegend: "é_Description and legend panel_È",
				lblPanelDescAndOrLegend: "é_Description and/or legend panel_È",
				lblPanelDesc: "é_Description panel_È",
				lblPanelLegend: "é_Legend panel_È",
				lblPanelAccordion: "é_Accordion panel_È",
				cfgLeft: "é_Left_È",
				cfgRight: "é_Right_È",
				cfgSmall: "é_Small_È",
				cfgMedium: "é_Medium_È",
				cfgLarge: "é_Large_È",
				lblNumbering: "é_Display numbers_È",
				lblReverse: "é_Reverse numbering_È",
				canOverlapMap: "é_can overlap map location_È"
			},
			settingsMapOptions: {
				title: "é_Map options_È",
				lblOverview: "é_Overview Map_È",
				tooltipOverview: "é_Display a small overview map along with the main map_È.",
				lblLocate: "é_Locate button_È",
				tooltipLocate: "é_This functionality is supported on most mobile device and desktop browsers (Internet Explorer 9)_È.",
				lblGeocoder: "é_Address or Place Finder_È",
				tooltipGeocoder: "é_Allow your users to find addresses and places on your maps_È.",
				lblSync: "é_Synchronize map locations_È",
				tooltipSync: "é_When enabled, the initial location of the first map in your series will be applied to all the maps, and navigation by users in any map will be reflected in all maps. Disable for each map's location to remain independent_È."
			},
			initPopup: {
				title: "é_Welcome to_È"
			},
			addEditPopup: {
				lblAdd: "é_Add_È",
				lblEdit: "é_Edit_È",
				disabled: "é_Add is disabled because the maximum number of allowed %LBL_LAYOUT% has been reached_È.",
				titleAdd: "é_Add_È",
				titleEdit: "é_Edit_È",
				stepMainStageNextTooltip: "é_Enter the %LBL_LAYOUT% title and content_È",
				titlePlaceholder: "é_%LBL_LAYOUT% title_È..."
			},
			textEditor: {
				placeholder1: "é_Add text, links, and small graphics here_È.",
				placeholder2: "é_If left blank the panel will be hidden_È."
			},
			organizePopup: {
				title: "é_Organize_È",
				lblHeader: "é_Drag and drop %LBL_LAYOUT% to organize your series_È.",
				lblColTitle: "é_Title_È",
				lblColStatus: "é_Status_È",
				btnApplyWarning: "é_Confirm deletion of %NB% %LBL_LAYOUT%_È",
				deleteTooltip: "é_Delete_È",
				firstSectionExplain: "é_(The home section cannot be moved)_È"
			},
			help: {
				lblHelp: "é_Help_È",
				lblAdd: "é_Add_È",
				lblSettings: "é_Settings_È",
				lblOrga: "é_Organize_È",
				lblEdit: "é_Edits_È",
				lblPublish: "é_Share_È",
				lblTips: "é_Tips_È",
				lblMore: "é_Want more_È?",
				lblLink: "é_Visit the Esri Story Maps website_È.",
				content1Div1: "é_To create your %TPL_NAME%, use the Add button to add each map or other content into the layout. The other content can include images, videos or embedded web pages or code. For example you might want your readers to see an introductory image or video when they first launch your  %TPL_NAME%, before they move on to explore your maps_È.",
				content1Div2: "é_When you click the Add button a dialog will appear that lets you choose and configure the map or other content you want to add. For example you can specify the location you want the map to show, enable its legend, etc_È.",
				content2Div1: "é_The Settings dialog is where you can change the appearance of your %TPL_NAME%. You change the layout, choose a different color scheme, choose where the map legend will appear, etc_È.",
				content2Div2: "é_You can also replace the Esri logo in the header of your %TPL_NAME% with your own logo to reflect your brand. You can also specify the website that will be launched if readers click your logo, so they can get more information_È.",
				content3Div1: "é_The Organize dialog lets you manage your %TPL_NAME%. In this dialog you can change the order of the series by dragging and dropping_È.",
				content3Div2: "é_You can also delete content or hide it. Hiding is useful if you are preparing new content that isn't ready to be included in your story map yet_È.",
				content4Div1: "é_Found a mistake or want to change your material? No worries. Look for the edit icon throughout the app to make changes to your content. Youâ€™ll use the edit functions many times as you develop your %TPL_NAME%_È!",
				content5Div1: "é_When you save your %TPL_NAME% it is private initially. Use the Share button to share it with others. You can share your %TPL_NAME% publicly so anyone can access it_È.",
				content5Div2: "é_Depending on your account, you may also have the option to share your %TPL_NAME% just to people within your organization, so others can't access it_È.",
				content6Div1: "é_By default the maps in a series are synchronized to show the same location. This means that the location shown in the first map will be automatically applied to all the other maps, and that if a reader zooms or pans to a different location in the map they are currently looking at, this will also be applied to the other maps_È.",
				content6Div2: "é_For example if your series shows different thematic data for a city, a reader can zoom to their neighborhood and then simply switch between the tabs to see the maps for that area_È.",
				content6Div3: "é_To disable location synchronization, go to the Settings dialog and uncheck that setting in the Map Options tab_È.",
				content6AltDiv1: "é_By default the maps location are synchronized. Disabling synchronization allows each map to display a different location_È.",
				content6AltDiv2: "é_Synchronization ON_È",
				content6AltDiv3: "é_Synchronization OFF_È",
				content6AltDiv4: "é_To disable synchronization, go to Settings > Map Options and uncheck \"Synchronize map locations\"_È."
			},
			landing: {
				lblAdd: "é_What do you want to call your %LAYOUT_TITLE% Map Series_È?",
				phAdd: "é_Enter your title_È...",
				lblOR: "é_Or_È",
				lblHelp: "é_Take a Tour_È"
			}
        }
    })
);
