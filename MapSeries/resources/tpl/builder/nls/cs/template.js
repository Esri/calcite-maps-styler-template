define(
	 ({
		builder: {
			layouts: {
				tabTitle: "Ř_Tabbed_ů",
				tabDescr: "Ř_Present maps and other content using tabs with an optional panel for descriptive text_ů.",
				tabItem: "Ř_Tab_ů",
				tabItems: "Ř_Tabs_ů",
				sideTitle: "Ř_Side Accordion_ů",
				sideDescr: "Ř_Present maps and other content using an expandable control that includes descriptive text_ů.",
				sideItem: "Ř_Entry_ů",
				sideItems: "Ř_Entries_ů",
				bulletTitle: "Ř_Bulleted_ů",
				bulletDescr: "Ř_Present maps and other content using bullets with an optional panel for descriptive text_ů.",
				bulletItem: "Ř_Bullet_ů",
				bulletItems: "Ř_Bullets_ů"
			},
			common: {
				lblStatus1: "Ř_Published_ů",
				lblStatus3: "Ř_Hidden_ů"
			},
			settingsLayoutOptions: {
				title: "Ř_Layout options_ů",
				lblDescription: "Ř_Description_ů",
				lblLegend: "Ř_Legend placement_ů",
				tooltipLegend: "Ř_Choose where you want the map legend to be displayed. You can turn the legend on for any map when you add or configure it_ů.",
				lblDropdown: "Ř_Dropdown_ů",
				lblBelowDesc: "Ř_Below the description_ů",
				lblOnPanel: "Ř_As a panel_ů",
				lblPanelDescAndLegend: "Ř_Description and legend panel_ů",
				lblPanelDescAndOrLegend: "Ř_Description and/or legend panel_ů",
				lblPanelDesc: "Ř_Description panel_ů",
				lblPanelLegend: "Ř_Legend panel_ů",
				lblPanelAccordion: "Ř_Accordion panel_ů",
				cfgLeft: "Ř_Left_ů",
				cfgRight: "Ř_Right_ů",
				cfgSmall: "Ř_Small_ů",
				cfgMedium: "Ř_Medium_ů",
				cfgLarge: "Ř_Large_ů",
				lblNumbering: "Ř_Display numbers_ů",
				lblReverse: "Ř_Reverse numbering_ů",
				canOverlapMap: "Ř_can overlap map location_ů"
			},
			settingsMapOptions: {
				title: "Ř_Map options_ů",
				lblOverview: "Ř_Overview Map_ů",
				tooltipOverview: "Ř_Display a small overview map along with the main map_ů.",
				lblLocate: "Ř_Locate button_ů",
				tooltipLocate: "Ř_This functionality is supported on most mobile device and desktop browsers (Internet Explorer 9)_ů.",
				lblGeocoder: "Ř_Address or Place Finder_ů",
				tooltipGeocoder: "Ř_Allow your users to find addresses and places on your maps_ů.",
				lblSync: "Ř_Synchronize map locations_ů",
				tooltipSync: "Ř_When enabled, the initial location of the first map in your series will be applied to all the maps, and navigation by users in any map will be reflected in all maps. Disable for each map's location to remain independent_ů."
			},
			initPopup: {
				title: "Ř_Welcome to_ů"
			},
			addEditPopup: {
				lblAdd: "Ř_Add_ů",
				lblEdit: "Ř_Edit_ů",
				disabled: "Ř_Add is disabled because the maximum number of allowed %LBL_LAYOUT% has been reached_ů.",
				titleAdd: "Ř_Add_ů",
				titleEdit: "Ř_Edit_ů",
				stepMainStageNextTooltip: "Ř_Enter the %LBL_LAYOUT% title and content_ů",
				titlePlaceholder: "Ř_%LBL_LAYOUT% title_ů..."
			},
			textEditor: {
				placeholder1: "Ř_Add text, links, and small graphics here_ů.",
				placeholder2: "Ř_If left blank the panel will be hidden_ů."
			},
			organizePopup: {
				title: "Ř_Organize_ů",
				lblHeader: "Ř_Drag and drop %LBL_LAYOUT% to organize your series_ů.",
				lblColTitle: "Ř_Title_ů",
				lblColStatus: "Ř_Status_ů",
				btnApplyWarning: "Ř_Confirm deletion of %NB% %LBL_LAYOUT%_ů",
				deleteTooltip: "Ř_Delete_ů",
				firstSectionExplain: "Ř_(The home section cannot be moved)_ů"
			},
			help: {
				lblHelp: "Ř_Help_ů",
				lblAdd: "Ř_Add_ů",
				lblSettings: "Ř_Settings_ů",
				lblOrga: "Ř_Organize_ů",
				lblEdit: "Ř_Edits_ů",
				lblPublish: "Ř_Share_ů",
				lblTips: "Ř_Tips_ů",
				lblMore: "Ř_Want more_ů?",
				lblLink: "Ř_Visit the Esri Story Maps website_ů.",
				content1Div1: "Ř_To create your %TPL_NAME%, use the Add button to add each map or other content into the layout. The other content can include images, videos or embedded web pages or code. For example you might want your readers to see an introductory image or video when they first launch your  %TPL_NAME%, before they move on to explore your maps_ů.",
				content1Div2: "Ř_When you click the Add button a dialog will appear that lets you choose and configure the map or other content you want to add. For example you can specify the location you want the map to show, enable its legend, etc_ů.",
				content2Div1: "Ř_The Settings dialog is where you can change the appearance of your %TPL_NAME%. You change the layout, choose a different color scheme, choose where the map legend will appear, etc_ů.",
				content2Div2: "Ř_You can also replace the Esri logo in the header of your %TPL_NAME% with your own logo to reflect your brand. You can also specify the website that will be launched if readers click your logo, so they can get more information_ů.",
				content3Div1: "Ř_The Organize dialog lets you manage your %TPL_NAME%. In this dialog you can change the order of the series by dragging and dropping_ů.",
				content3Div2: "Ř_You can also delete content or hide it. Hiding is useful if you are preparing new content that isn't ready to be included in your story map yet_ů.",
				content4Div1: "Ř_Found a mistake or want to change your material? No worries. Look for the edit icon throughout the app to make changes to your content. Youâ€™ll use the edit functions many times as you develop your %TPL_NAME%_ů!",
				content5Div1: "Ř_When you save your %TPL_NAME% it is private initially. Use the Share button to share it with others. You can share your %TPL_NAME% publicly so anyone can access it_ů.",
				content5Div2: "Ř_Depending on your account, you may also have the option to share your %TPL_NAME% just to people within your organization, so others can't access it_ů.",
				content6Div1: "Ř_By default the maps in a series are synchronized to show the same location. This means that the location shown in the first map will be automatically applied to all the other maps, and that if a reader zooms or pans to a different location in the map they are currently looking at, this will also be applied to the other maps_ů.",
				content6Div2: "Ř_For example if your series shows different thematic data for a city, a reader can zoom to their neighborhood and then simply switch between the tabs to see the maps for that area_ů.",
				content6Div3: "Ř_To disable location synchronization, go to the Settings dialog and uncheck that setting in the Map Options tab_ů.",
				content6AltDiv1: "Ř_By default the maps location are synchronized. Disabling synchronization allows each map to display a different location_ů.",
				content6AltDiv2: "Ř_Synchronization ON_ů",
				content6AltDiv3: "Ř_Synchronization OFF_ů",
				content6AltDiv4: "Ř_To disable synchronization, go to Settings > Map Options and uncheck \"Synchronize map locations\"_ů."
			},
			landing: {
				lblAdd: "Ř_What do you want to call your %LAYOUT_TITLE% Map Series_ů?",
				phAdd: "Ř_Enter your title_ů...",
				lblOR: "Ř_Or_ů",
				lblHelp: "Ř_Take a Tour_ů"
			}
        }
    })
);
