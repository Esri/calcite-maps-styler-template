define(
	 ({
		builder: {
			layouts: {
				tabTitle: "Å_Tabbed_ö",
				tabDescr: "Å_Present maps and other content using tabs with an optional panel for descriptive text_ö.",
				sideTitle: "Å_Side Accordion_ö",
				sideDescr: "Å_Present maps and other content using an expandable control that includes descriptive text_ö.",
				bulletTitle: "Å_Bulleted_ö",
				bulletDescr: "Å_Present maps and other content using bullets with an optional panel for descriptive text_ö."
			},
			common: {
				lblStatus1: "Å_Published_ö",
				lblStatus3: "Å_Hidden_ö"
			},
			settingsLayoutOptions: {
				title: "Å_Layout options_ö",
				lblDescription: "Å_Description_ö",
				lblLegend: "Å_Legend placement_ö",
				tooltipLegend: "Å_Choose where you want the map legend to be displayed. You can turn the legend on for any map when you add or configure it_ö.",
				lblDropdown: "Å_Dropdown_ö",
				lblBelowDesc: "Å_Below the description_ö",
				lblOnPanel: "Å_As a panel_ö",
				lblPanelDescAndLegend: "Å_Description and legend Panel_ö",
				lblPanelDescAndOrLegend: "Å_Description and/or legend Panel_ö",
				lblPanelDesc: "Å_Description Panel_ö",
				lblPanelLegend: "Å_Legend Panel_ö",
				lblPanelAccordion: "Å_Accordion Panel_ö",
				cfgLeft: "Å_Left_ö",
				cfgRight: "Å_Right_ö",
				cfgSmall: "Å_Small_ö",
				cfgMedium: "Å_Medium_ö",
				cfgLarge: "Å_Large_ö",
				lblNumbering: "Å_Entry numbering_ö",
				lblReverse: "Å_Reverse entry numbering_ö"
			},
			settingsMapOptions: {
				title: "Å_Map options_ö",
				lblOverview: "Å_Overview Map_ö",
				tooltipOverview: "Å_Display a small overview map along with the main map_ö.",
				lblLocate: "Å_Locate button_ö",
				tooltipLocate: "Å_This functionality is supported on most mobile device and desktop browsers (Internet Explorer 9)_ö.",
				lblGeocoder: "Å_Address or Place Finder_ö",
				tooltipGeocoder: "Å_Allow your users to find addresses and places on your maps_ö.",
				lblSync: "Å_Synchronize map locations_ö",
				tooltipSync: "Å_When enabled, the initial location of the first map in your series will be applied to all the maps, and navigation by users in any map will be reflected in all maps. Disable for each map's location to remain independent_ö."
			},
			initPopup: {
				title: "Å_Welcome to_ö"
			},
			addEditPopup: {
				lblAdd: "Å_Add_ö",
				lblEdit: "Å_Edit_ö",
				disabled: "Å_Add Entry is disabled because the maximum number of allowed sections has been reached_ö.",
				titleAdd: "Å_Add Entry_ö",
				titleEdit: "Å_Edit Entry_ö",
				stepMainStageNextTooltip: "Å_Enter the Entry title and content_ö",
				titlePlaceholder: "Å_Entry title_ö..."
			},
			textEditor: {
				placeholder1: "Å_Add text, links, and small graphics here_ö.",
				placeholder2: "Å_If left blank the panel will be hidden_ö."
			},
			organizePopup: {
				title: "Å_Organize_ö",
				lblHeader: "Å_Drag and drop entries to organize your series_ö.",
				lblColTitle: "Å_Title_ö",
				lblColStatus: "Å_Status_ö",
				btnApplyWarning: "Å_Confirm deletion of %NB% entries_ö",
				deleteTooltip: "Å_Delete_ö",
				firstSectionExplain: "Å_(The home section cannot be moved)_ö"
			},
			help: {
				lblHelp: "Å_Help_ö",
				lblAdd: "Å_Add_ö",
				lblSettings: "Å_Settings_ö",
				lblOrga: "Å_Organize_ö",
				lblEdit: "Å_Edits_ö",
				lblPublish: "Å_Share_ö",
				lblTips: "Å_Tips_ö",
				lblMore: "Å_Want more_ö?",
				lblLink: "Å_Visit the Esri Story Maps website_ö.",
				content1Div1: "Å_To create your %TPL_NAME%, use the Add button to add each map or other content into the layout. The other content can include images, videos or embedded web pages or code. For example you might want your readers to see an introductory image or video when they first launch your  %TPL_NAME%, before they move on to explore your maps_ö.",
				content1Div2: "Å_When you click the Add button a dialog will appear that lets you choose and configure the map or other content you want to add. For example you can specify the location you want the map to show, enable its legend, etc_ö.",
				content2Div1: "Å_The Settings dialog is where you can change the appearance of your %TPL_NAME%. You change the layout, choose a different color scheme, choose where the map legend will appear, etc_ö.",
				content2Div2: "Å_You can also replace the Esri logo in the header of your %TPL_NAME% with your own logo to reflect your brand. You can also specify the website that will be launched if readers click your logo, so they can get more information_ö.",
				content3Div1: "Å_The Organize dialog lets you manage your %TPL_NAME%. In this dialog you can change the order of the series by dragging and dropping_ö.",
				content3Div2: "Å_You can also delete content or hide it. Hiding is useful if you are preparing new content that isn't ready to be included in your story map yet_ö.",
				content4Div1: "Å_Found a mistake or want to change your material? No worries. Look for the edit icon throughout the app to make changes to your content. Youâ€™ll use the edit functions many times as you develop your %TPL_NAME%_ö!",
				content5Div1: "Å_When you save your %TPL_NAME% it is private initially. Use the Share button to share it with others. You can share your %TPL_NAME% publicly so anyone can access it_ö.",
				content5Div2: "Å_Depending on your account, you may also have the option to share your %TPL_NAME% just to people within your organization, so others can't access it_ö.",
				content6Div1: "Å_By default the maps in a series are synchronized to show the same location. This means that the location shown in the first map will be automatically applied to all the other maps, and that if a reader zooms or pans to a different location in the map they are currently looking at, this will also be applied to the other maps_ö.",
				content6Div2: "Å_For example if your series shows different thematic data for a city, a reader can zoom to their neighborhood and then simply switch between the tabs to see the maps for that area_ö.",
				content6Div3: "Å_To disable location synchronization, go to the Settings dialog and uncheck that setting in the Map Options tab_ö.",
				content6AltDiv1: "Å_By default the maps location are synchronized. Disabling synchronization allows each map to display a different location_ö.",
				content6AltDiv2: "Å_Synchronization ON_ö",
				content6AltDiv3: "Å_Synchronization OFF_ö",
				content6AltDiv4: "Å_To disable synchronization, go to Settings > Map Options and uncheck \"Synchronize map locations\"_ö."
			},
			landing: {
				lblAdd: "Å_What do you want to call your %LAYOUT_TITLE% Map Series_ö?",
				phAdd: "Å_Enter your title_ö...",
				lblOR: "Å_Or_ö",
				lblHelp: "Å_Take a Tour_ö"
			}
        }
    })
);
