define(
	 ({
		builder: {
			layouts: {
				tabTitle: "Ă_Tabbed_ș",
				tabDescr: "Ă_Present maps and other content using tabs with an optional panel for descriptive text_ș.",
				sideTitle: "Ă_Side Accordion_ș",
				sideDescr: "Ă_Present maps and other content using an expandable control that includes descriptive text_ș.",
				bulletTitle: "Ă_Bulleted_ș",
				bulletDescr: "Ă_Present maps and other content using bullets with an optional panel for descriptive text_ș."
			},
			common: {
				lblStatus1: "Ă_Published_ș",
				lblStatus3: "Ă_Hidden_ș"
			},
			settingsLayoutOptions: {
				title: "Ă_Layout options_ș",
				lblDescription: "Ă_Description_ș",
				lblLegend: "Ă_Legend placement_ș",
				tooltipLegend: "Ă_Choose where you want the map legend to be displayed. You can turn the legend on for any map when you add or configure it_ș.",
				lblDropdown: "Ă_Dropdown_ș",
				lblBelowDesc: "Ă_Below the description_ș",
				lblOnPanel: "Ă_As a panel_ș",
				lblPanelDescAndLegend: "Ă_Description and legend Panel_ș",
				lblPanelDescAndOrLegend: "Ă_Description and/or legend Panel_ș",
				lblPanelDesc: "Ă_Description Panel_ș",
				lblPanelLegend: "Ă_Legend Panel_ș",
				lblPanelAccordion: "Ă_Accordion Panel_ș",
				cfgLeft: "Ă_Left_ș",
				cfgRight: "Ă_Right_ș",
				cfgSmall: "Ă_Small_ș",
				cfgMedium: "Ă_Medium_ș",
				cfgLarge: "Ă_Large_ș",
				lblNumbering: "Ă_Entry numbering_ș",
				lblReverse: "Ă_Reverse entry numbering_ș"
			},
			settingsMapOptions: {
				title: "Ă_Map options_ș",
				lblOverview: "Ă_Overview Map_ș",
				tooltipOverview: "Ă_Display a small overview map along with the main map_ș.",
				lblLocate: "Ă_Locate button_ș",
				tooltipLocate: "Ă_This functionality is supported on most mobile device and desktop browsers (Internet Explorer 9)_ș.",
				lblGeocoder: "Ă_Address or Place Finder_ș",
				tooltipGeocoder: "Ă_Allow your users to find addresses and places on your maps_ș.",
				lblSync: "Ă_Synchronize map locations_ș",
				tooltipSync: "Ă_When enabled, the initial location of the first map in your series will be applied to all the maps, and navigation by users in any map will be reflected in all maps. Disable for each map's location to remain independent_ș."
			},
			initPopup: {
				title: "Ă_Welcome to_ș"
			},
			addEditPopup: {
				lblAdd: "Ă_Add_ș",
				lblEdit: "Ă_Edit_ș",
				disabled: "Ă_Add Entry is disabled because the maximum number of allowed sections has been reached_ș.",
				titleAdd: "Ă_Add Entry_ș",
				titleEdit: "Ă_Edit Entry_ș",
				stepMainStageNextTooltip: "Ă_Enter the Entry title and content_ș",
				titlePlaceholder: "Ă_Entry title_ș..."
			},
			textEditor: {
				placeholder1: "Ă_Add text, links, and small graphics here_ș.",
				placeholder2: "Ă_If left blank the panel will be hidden_ș."
			},
			organizePopup: {
				title: "Ă_Organize_ș",
				lblHeader: "Ă_Drag and drop entries to organize your series_ș.",
				lblColTitle: "Ă_Title_ș",
				lblColStatus: "Ă_Status_ș",
				btnApplyWarning: "Ă_Confirm deletion of %NB% entries_ș",
				deleteTooltip: "Ă_Delete_ș",
				firstSectionExplain: "Ă_(The home section cannot be moved)_ș"
			},
			help: {
				lblHelp: "Ă_Help_ș",
				lblAdd: "Ă_Add_ș",
				lblSettings: "Ă_Settings_ș",
				lblOrga: "Ă_Organize_ș",
				lblEdit: "Ă_Edits_ș",
				lblPublish: "Ă_Share_ș",
				lblTips: "Ă_Tips_ș",
				lblMore: "Ă_Want more_ș?",
				lblLink: "Ă_Visit the Esri Story Maps website_ș.",
				content1Div1: "Ă_To create your %TPL_NAME%, use the Add button to add each map or other content into the layout. The other content can include images, videos or embedded web pages or code. For example you might want your readers to see an introductory image or video when they first launch your  %TPL_NAME%, before they move on to explore your maps_ș.",
				content1Div2: "Ă_When you click the Add button a dialog will appear that lets you choose and configure the map or other content you want to add. For example you can specify the location you want the map to show, enable its legend, etc_ș.",
				content2Div1: "Ă_The Settings dialog is where you can change the appearance of your %TPL_NAME%. You change the layout, choose a different color scheme, choose where the map legend will appear, etc_ș.",
				content2Div2: "Ă_You can also replace the Esri logo in the header of your %TPL_NAME% with your own logo to reflect your brand. You can also specify the website that will be launched if readers click your logo, so they can get more information_ș.",
				content3Div1: "Ă_The Organize dialog lets you manage your %TPL_NAME%. In this dialog you can change the order of the series by dragging and dropping_ș.",
				content3Div2: "Ă_You can also delete content or hide it. Hiding is useful if you are preparing new content that isn't ready to be included in your story map yet_ș.",
				content4Div1: "Ă_Found a mistake or want to change your material? No worries. Look for the edit icon throughout the app to make changes to your content. Youâ€™ll use the edit functions many times as you develop your %TPL_NAME%_ș!",
				content5Div1: "Ă_When you save your %TPL_NAME% it is private initially. Use the Share button to share it with others. You can share your %TPL_NAME% publicly so anyone can access it_ș.",
				content5Div2: "Ă_Depending on your account, you may also have the option to share your %TPL_NAME% just to people within your organization, so others can't access it_ș.",
				content6Div1: "Ă_By default the maps in a series are synchronized to show the same location. This means that the location shown in the first map will be automatically applied to all the other maps, and that if a reader zooms or pans to a different location in the map they are currently looking at, this will also be applied to the other maps_ș.",
				content6Div2: "Ă_For example if your series shows different thematic data for a city, a reader can zoom to their neighborhood and then simply switch between the tabs to see the maps for that area_ș.",
				content6Div3: "Ă_To disable location synchronization, go to the Settings dialog and uncheck that setting in the Map Options tab_ș.",
				content6AltDiv1: "Ă_By default the maps location are synchronized. Disabling synchronization allows each map to display a different location_ș.",
				content6AltDiv2: "Ă_Synchronization ON_ș",
				content6AltDiv3: "Ă_Synchronization OFF_ș",
				content6AltDiv4: "Ă_To disable synchronization, go to Settings > Map Options and uncheck \"Synchronize map locations\"_ș."
			},
			landing: {
				lblAdd: "Ă_What do you want to call your %LAYOUT_TITLE% Map Series_ș?",
				phAdd: "Ă_Enter your title_ș...",
				lblOR: "Ă_Or_ș",
				lblHelp: "Ă_Take a Tour_ș"
			}
        }
    })
);
