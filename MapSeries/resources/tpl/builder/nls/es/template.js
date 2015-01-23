define(
	 ({
		builder: {
			layouts: {
				tabTitle: "á_Tabbed_Ó",
				tabDescr: "á_Present maps and other content using tabs with an optional panel for descriptive text_Ó.",
				sideTitle: "á_Side Accordion_Ó",
				sideDescr: "á_Present maps and other content using an expandable control that includes descriptive text_Ó.",
				bulletTitle: "á_Bulleted_Ó",
				bulletDescr: "á_Present maps and other content using bullets with an optional panel for descriptive text_Ó."
			},
			common: {
				lblStatus1: "á_Published_Ó",
				lblStatus3: "á_Hidden_Ó"
			},
			settingsLayoutOptions: {
				title: "á_Layout options_Ó",
				lblDescription: "á_Description_Ó",
				lblLegend: "á_Legend placement_Ó",
				tooltipLegend: "á_Choose where you want the map legend to be displayed. You can turn the legend on for any map when you add or configure it_Ó.",
				lblDropdown: "á_Dropdown_Ó",
				lblBelowDesc: "á_Below the description_Ó",
				lblOnPanel: "á_As a panel_Ó",
				lblPanelDescAndLegend: "á_Description and legend Panel_Ó",
				lblPanelDescAndOrLegend: "á_Description and/or legend Panel_Ó",
				lblPanelDesc: "á_Description Panel_Ó",
				lblPanelLegend: "á_Legend Panel_Ó",
				lblPanelAccordion: "á_Accordion Panel_Ó",
				cfgLeft: "á_Left_Ó",
				cfgRight: "á_Right_Ó",
				cfgSmall: "á_Small_Ó",
				cfgMedium: "á_Medium_Ó",
				cfgLarge: "á_Large_Ó",
				lblNumbering: "á_Entry numbering_Ó",
				lblReverse: "á_Reverse entry numbering_Ó"
			},
			settingsMapOptions: {
				title: "á_Map options_Ó",
				lblOverview: "á_Overview Map_Ó",
				tooltipOverview: "á_Display a small overview map along with the main map_Ó.",
				lblLocate: "á_Locate button_Ó",
				tooltipLocate: "á_This functionality is supported on most mobile device and desktop browsers (Internet Explorer 9)_Ó.",
				lblGeocoder: "á_Address or Place Finder_Ó",
				tooltipGeocoder: "á_Allow your users to find addresses and places on your maps_Ó.",
				lblSync: "á_Synchronize map locations_Ó",
				tooltipSync: "á_When enabled, the initial location of the first map in your series will be applied to all the maps, and navigation by users in any map will be reflected in all maps. Disable for each map's location to remain independent_Ó."
			},
			initPopup: {
				title: "á_Welcome to_Ó"
			},
			addEditPopup: {
				lblAdd: "á_Add_Ó",
				lblEdit: "á_Edit_Ó",
				disabled: "á_Add Entry is disabled because the maximum number of allowed sections has been reached_Ó.",
				titleAdd: "á_Add Entry_Ó",
				titleEdit: "á_Edit Entry_Ó",
				stepMainStageNextTooltip: "á_Enter the Entry title and content_Ó",
				titlePlaceholder: "á_Entry title_Ó..."
			},
			textEditor: {
				placeholder1: "á_Add text, links, and small graphics here_Ó.",
				placeholder2: "á_If left blank the panel will be hidden_Ó."
			},
			organizePopup: {
				title: "á_Organize_Ó",
				lblHeader: "á_Drag and drop entries to organize your series_Ó.",
				lblColTitle: "á_Title_Ó",
				lblColStatus: "á_Status_Ó",
				btnApplyWarning: "á_Confirm deletion of %NB% entries_Ó",
				deleteTooltip: "á_Delete_Ó",
				firstSectionExplain: "á_(The home section cannot be moved)_Ó"
			},
			help: {
				lblHelp: "á_Help_Ó",
				lblAdd: "á_Add_Ó",
				lblSettings: "á_Settings_Ó",
				lblOrga: "á_Organize_Ó",
				lblEdit: "á_Edits_Ó",
				lblPublish: "á_Share_Ó",
				lblTips: "á_Tips_Ó",
				lblMore: "á_Want more_Ó?",
				lblLink: "á_Visit the Esri Story Maps website_Ó.",
				content1Div1: "á_To create your %TPL_NAME%, use the Add button to add each map or other content into the layout. The other content can include images, videos or embedded web pages or code. For example you might want your readers to see an introductory image or video when they first launch your  %TPL_NAME%, before they move on to explore your maps_Ó.",
				content1Div2: "á_When you click the Add button a dialog will appear that lets you choose and configure the map or other content you want to add. For example you can specify the location you want the map to show, enable its legend, etc_Ó.",
				content2Div1: "á_The Settings dialog is where you can change the appearance of your %TPL_NAME%. You change the layout, choose a different color scheme, choose where the map legend will appear, etc_Ó.",
				content2Div2: "á_You can also replace the Esri logo in the header of your %TPL_NAME% with your own logo to reflect your brand. You can also specify the website that will be launched if readers click your logo, so they can get more information_Ó.",
				content3Div1: "á_The Organize dialog lets you manage your %TPL_NAME%. In this dialog you can change the order of the series by dragging and dropping_Ó.",
				content3Div2: "á_You can also delete content or hide it. Hiding is useful if you are preparing new content that isn't ready to be included in your story map yet_Ó.",
				content4Div1: "á_Found a mistake or want to change your material? No worries. Look for the edit icon throughout the app to make changes to your content. Youâ€™ll use the edit functions many times as you develop your %TPL_NAME%_Ó!",
				content5Div1: "á_When you save your %TPL_NAME% it is private initially. Use the Share button to share it with others. You can share your %TPL_NAME% publicly so anyone can access it_Ó.",
				content5Div2: "á_Depending on your account, you may also have the option to share your %TPL_NAME% just to people within your organization, so others can't access it_Ó.",
				content6Div1: "á_By default the maps in a series are synchronized to show the same location. This means that the location shown in the first map will be automatically applied to all the other maps, and that if a reader zooms or pans to a different location in the map they are currently looking at, this will also be applied to the other maps_Ó.",
				content6Div2: "á_For example if your series shows different thematic data for a city, a reader can zoom to their neighborhood and then simply switch between the tabs to see the maps for that area_Ó.",
				content6Div3: "á_To disable location synchronization, go to the Settings dialog and uncheck that setting in the Map Options tab_Ó.",
				content6AltDiv1: "á_By default the maps location are synchronized. Disabling synchronization allows each map to display a different location_Ó.",
				content6AltDiv2: "á_Synchronization ON_Ó",
				content6AltDiv3: "á_Synchronization OFF_Ó",
				content6AltDiv4: "á_To disable synchronization, go to Settings > Map Options and uncheck \"Synchronize map locations\"_Ó."
			},
			landing: {
				lblAdd: "á_What do you want to call your %LAYOUT_TITLE% Map Series_Ó?",
				phAdd: "á_Enter your title_Ó...",
				lblOR: "á_Or_Ó",
				lblHelp: "á_Take a Tour_Ó"
			}
        }
    })
);
