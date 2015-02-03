define(
	 ({
		builder: {
			layouts: {
				tabTitle: "æ_Tabbed_Â",
				tabDescr: "æ_Present maps and other content using tabs with an optional panel for descriptive text_Â.",
				tabItem: "æ_Tab_Â",
				tabItems: "æ_Tabs_Â",
				sideTitle: "æ_Side Accordion_Â",
				sideDescr: "æ_Present maps and other content using an expandable control that includes descriptive text_Â.",
				sideItem: "æ_Entry_Â",
				sideItems: "æ_Entries_Â",
				bulletTitle: "æ_Bulleted_Â",
				bulletDescr: "æ_Present maps and other content using bullets with an optional panel for descriptive text_Â.",
				bulletItem: "æ_Bullet_Â",
				bulletItems: "æ_Bullets_Â"
			},
			common: {
				lblStatus1: "æ_Published_Â",
				lblStatus3: "æ_Hidden_Â"
			},
			settingsLayoutOptions: {
				title: "æ_Layout options_Â",
				lblDescription: "æ_Description_Â",
				lblLegend: "æ_Legend placement_Â",
				tooltipLegend: "æ_Choose where you want the map legend to be displayed. You can turn the legend on for any map when you add or configure it_Â.",
				lblDropdown: "æ_Dropdown_Â",
				lblBelowDesc: "æ_Below the description_Â",
				lblOnPanel: "æ_As a panel_Â",
				lblPanelDescAndLegend: "æ_Description and legend panel_Â",
				lblPanelDescAndOrLegend: "æ_Description and/or legend panel_Â",
				lblPanelDesc: "æ_Description panel_Â",
				lblPanelLegend: "æ_Legend panel_Â",
				lblPanelAccordion: "æ_Accordion panel_Â",
				cfgLeft: "æ_Left_Â",
				cfgRight: "æ_Right_Â",
				cfgSmall: "æ_Small_Â",
				cfgMedium: "æ_Medium_Â",
				cfgLarge: "æ_Large_Â",
				lblNumbering: "æ_Display numbers_Â",
				lblReverse: "æ_Reverse numbering_Â",
				canOverlapMap: "æ_can overlap map location_Â"
			},
			settingsMapOptions: {
				title: "æ_Map options_Â",
				lblOverview: "æ_Overview Map_Â",
				tooltipOverview: "æ_Display a small overview map along with the main map_Â.",
				lblLocate: "æ_Locate button_Â",
				tooltipLocate: "æ_This functionality is supported on most mobile device and desktop browsers (Internet Explorer 9)_Â.",
				lblGeocoder: "æ_Address or Place Finder_Â",
				tooltipGeocoder: "æ_Allow your users to find addresses and places on your maps_Â.",
				lblSync: "æ_Synchronize map locations_Â",
				tooltipSync: "æ_When enabled, the initial location of the first map in your series will be applied to all the maps, and navigation by users in any map will be reflected in all maps. Disable for each map's location to remain independent_Â."
			},
			initPopup: {
				title: "æ_Welcome to_Â"
			},
			addEditPopup: {
				lblAdd: "æ_Add_Â",
				lblEdit: "æ_Edit_Â",
				disabled: "æ_Add is disabled because the maximum number of allowed %LBL_LAYOUT% has been reached_Â.",
				titleAdd: "æ_Add_Â",
				titleEdit: "æ_Edit_Â",
				stepMainStageNextTooltip: "æ_Enter the %LBL_LAYOUT% title and content_Â",
				titlePlaceholder: "æ_%LBL_LAYOUT% title_Â..."
			},
			textEditor: {
				placeholder1: "æ_Add text, links, and small graphics here_Â.",
				placeholder2: "æ_If left blank the panel will be hidden_Â."
			},
			organizePopup: {
				title: "æ_Organize_Â",
				lblHeader: "æ_Drag and drop %LBL_LAYOUT% to organize your series_Â.",
				lblColTitle: "æ_Title_Â",
				lblColStatus: "æ_Status_Â",
				btnApplyWarning: "æ_Confirm deletion of %NB% %LBL_LAYOUT%_Â",
				deleteTooltip: "æ_Delete_Â",
				firstSectionExplain: "æ_(The home section cannot be moved)_Â"
			},
			help: {
				lblHelp: "æ_Help_Â",
				lblAdd: "æ_Add_Â",
				lblSettings: "æ_Settings_Â",
				lblOrga: "æ_Organize_Â",
				lblEdit: "æ_Edits_Â",
				lblPublish: "æ_Share_Â",
				lblTips: "æ_Tips_Â",
				lblMore: "æ_Want more_Â?",
				lblLink: "æ_Visit the Esri Story Maps website_Â.",
				content1Div1: "æ_To create your %TPL_NAME%, use the Add button to add each map or other content into the layout. The other content can include images, videos or embedded web pages or code. For example you might want your readers to see an introductory image or video when they first launch your  %TPL_NAME%, before they move on to explore your maps_Â.",
				content1Div2: "æ_When you click the Add button a dialog will appear that lets you choose and configure the map or other content you want to add. For example you can specify the location you want the map to show, enable its legend, etc_Â.",
				content2Div1: "æ_The Settings dialog is where you can change the appearance of your %TPL_NAME%. You change the layout, choose a different color scheme, choose where the map legend will appear, etc_Â.",
				content2Div2: "æ_You can also replace the Esri logo in the header of your %TPL_NAME% with your own logo to reflect your brand. You can also specify the website that will be launched if readers click your logo, so they can get more information_Â.",
				content3Div1: "æ_The Organize dialog lets you manage your %TPL_NAME%. In this dialog you can change the order of the series by dragging and dropping_Â.",
				content3Div2: "æ_You can also delete content or hide it. Hiding is useful if you are preparing new content that isn't ready to be included in your story map yet_Â.",
				content4Div1: "æ_Found a mistake or want to change your material? No worries. Look for the edit icon throughout the app to make changes to your content. Youâ€™ll use the edit functions many times as you develop your %TPL_NAME%_Â!",
				content5Div1: "æ_When you save your %TPL_NAME% it is private initially. Use the Share button to share it with others. You can share your %TPL_NAME% publicly so anyone can access it_Â.",
				content5Div2: "æ_Depending on your account, you may also have the option to share your %TPL_NAME% just to people within your organization, so others can't access it_Â.",
				content6Div1: "æ_By default the maps in a series are synchronized to show the same location. This means that the location shown in the first map will be automatically applied to all the other maps, and that if a reader zooms or pans to a different location in the map they are currently looking at, this will also be applied to the other maps_Â.",
				content6Div2: "æ_For example if your series shows different thematic data for a city, a reader can zoom to their neighborhood and then simply switch between the tabs to see the maps for that area_Â.",
				content6Div3: "æ_To disable location synchronization, go to the Settings dialog and uncheck that setting in the Map Options tab_Â.",
				content6AltDiv1: "æ_By default the maps location are synchronized. Disabling synchronization allows each map to display a different location_Â.",
				content6AltDiv2: "æ_Synchronization ON_Â",
				content6AltDiv3: "æ_Synchronization OFF_Â",
				content6AltDiv4: "æ_To disable synchronization, go to Settings > Map Options and uncheck \"Synchronize map locations\"_Â."
			},
			landing: {
				lblAdd: "æ_What do you want to call your %LAYOUT_TITLE% Map Series_Â?",
				phAdd: "æ_Enter your title_Â...",
				lblOR: "æ_Or_Â",
				lblHelp: "æ_Take a Tour_Â"
			}
        }
    })
);
