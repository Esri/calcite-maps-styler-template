define(
	 ({
		builder: {
			layouts: {
				tabTitle: "Đ_Tabbed_ớ",
				tabDescr: "Đ_Present maps and other content using tabs with an optional panel for descriptive text_ớ.",
				sideTitle: "Đ_Side Accordion_ớ",
				sideDescr: "Đ_Present maps and other content using an expandable control that includes descriptive text_ớ.",
				bulletTitle: "Đ_Bulleted_ớ",
				bulletDescr: "Đ_Present maps and other content using bullets with an optional panel for descriptive text_ớ."
			},
			common: {
				lblStatus1: "Đ_Published_ớ",
				lblStatus3: "Đ_Hidden_ớ"
			},
			settingsLayoutOptions: {
				title: "Đ_Layout options_ớ",
				lblDescription: "Đ_Description_ớ",
				lblLegend: "Đ_Legend placement_ớ",
				tooltipLegend: "Đ_Choose where you want the map legend to be displayed. You can turn the legend on for any map when you add or configure it_ớ.",
				lblDropdown: "Đ_Dropdown_ớ",
				lblBelowDesc: "Đ_Below the description_ớ",
				lblOnPanel: "Đ_As a panel_ớ",
				lblPanelDescAndLegend: "Đ_Description and legend Panel_ớ",
				lblPanelDescAndOrLegend: "Đ_Description and/or legend Panel_ớ",
				lblPanelDesc: "Đ_Description Panel_ớ",
				lblPanelLegend: "Đ_Legend Panel_ớ",
				lblPanelAccordion: "Đ_Accordion Panel_ớ",
				cfgLeft: "Đ_Left_ớ",
				cfgRight: "Đ_Right_ớ",
				cfgSmall: "Đ_Small_ớ",
				cfgMedium: "Đ_Medium_ớ",
				cfgLarge: "Đ_Large_ớ",
				lblNumbering: "Đ_Entry numbering_ớ",
				lblReverse: "Đ_Reverse entry numbering_ớ"
			},
			settingsMapOptions: {
				title: "Đ_Map options_ớ",
				lblOverview: "Đ_Overview Map_ớ",
				tooltipOverview: "Đ_Display a small overview map along with the main map_ớ.",
				lblLocate: "Đ_Locate button_ớ",
				tooltipLocate: "Đ_This functionality is supported on most mobile device and desktop browsers (Internet Explorer 9)_ớ.",
				lblGeocoder: "Đ_Address or Place Finder_ớ",
				tooltipGeocoder: "Đ_Allow your users to find addresses and places on your maps_ớ.",
				lblSync: "Đ_Synchronize map locations_ớ",
				tooltipSync: "Đ_When enabled, the initial location of the first map in your series will be applied to all the maps, and navigation by users in any map will be reflected in all maps. Disable for each map's location to remain independent_ớ."
			},
			initPopup: {
				title: "Đ_Welcome to_ớ"
			},
			addEditPopup: {
				lblAdd: "Đ_Add_ớ",
				lblEdit: "Đ_Edit_ớ",
				disabled: "Đ_Add Entry is disabled because the maximum number of allowed sections has been reached_ớ.",
				titleAdd: "Đ_Add Entry_ớ",
				titleEdit: "Đ_Edit Entry_ớ",
				stepMainStageNextTooltip: "Đ_Enter the Entry title and content_ớ",
				titlePlaceholder: "Đ_Entry title_ớ..."
			},
			textEditor: {
				placeholder1: "Đ_Add text, links, and small graphics here_ớ.",
				placeholder2: "Đ_If left blank the panel will be hidden_ớ."
			},
			organizePopup: {
				title: "Đ_Organize_ớ",
				lblHeader: "Đ_Drag and drop entries to organize your series_ớ.",
				lblColTitle: "Đ_Title_ớ",
				lblColStatus: "Đ_Status_ớ",
				btnApplyWarning: "Đ_Confirm deletion of %NB% entries_ớ",
				deleteTooltip: "Đ_Delete_ớ",
				firstSectionExplain: "Đ_(The home section cannot be moved)_ớ"
			},
			help: {
				lblHelp: "Đ_Help_ớ",
				lblAdd: "Đ_Add_ớ",
				lblSettings: "Đ_Settings_ớ",
				lblOrga: "Đ_Organize_ớ",
				lblEdit: "Đ_Edits_ớ",
				lblPublish: "Đ_Share_ớ",
				lblTips: "Đ_Tips_ớ",
				lblMore: "Đ_Want more_ớ?",
				lblLink: "Đ_Visit the Esri Story Maps website_ớ.",
				content1Div1: "Đ_To create your %TPL_NAME%, use the Add button to add each map or other content into the layout. The other content can include images, videos or embedded web pages or code. For example you might want your readers to see an introductory image or video when they first launch your  %TPL_NAME%, before they move on to explore your maps_ớ.",
				content1Div2: "Đ_When you click the Add button a dialog will appear that lets you choose and configure the map or other content you want to add. For example you can specify the location you want the map to show, enable its legend, etc_ớ.",
				content2Div1: "Đ_The Settings dialog is where you can change the appearance of your %TPL_NAME%. You change the layout, choose a different color scheme, choose where the map legend will appear, etc_ớ.",
				content2Div2: "Đ_You can also replace the Esri logo in the header of your %TPL_NAME% with your own logo to reflect your brand. You can also specify the website that will be launched if readers click your logo, so they can get more information_ớ.",
				content3Div1: "Đ_The Organize dialog lets you manage your %TPL_NAME%. In this dialog you can change the order of the series by dragging and dropping_ớ.",
				content3Div2: "Đ_You can also delete content or hide it. Hiding is useful if you are preparing new content that isn't ready to be included in your story map yet_ớ.",
				content4Div1: "Đ_Found a mistake or want to change your material? No worries. Look for the edit icon throughout the app to make changes to your content. Youâ€™ll use the edit functions many times as you develop your %TPL_NAME%_ớ!",
				content5Div1: "Đ_When you save your %TPL_NAME% it is private initially. Use the Share button to share it with others. You can share your %TPL_NAME% publicly so anyone can access it_ớ.",
				content5Div2: "Đ_Depending on your account, you may also have the option to share your %TPL_NAME% just to people within your organization, so others can't access it_ớ.",
				content6Div1: "Đ_By default the maps in a series are synchronized to show the same location. This means that the location shown in the first map will be automatically applied to all the other maps, and that if a reader zooms or pans to a different location in the map they are currently looking at, this will also be applied to the other maps_ớ.",
				content6Div2: "Đ_For example if your series shows different thematic data for a city, a reader can zoom to their neighborhood and then simply switch between the tabs to see the maps for that area_ớ.",
				content6Div3: "Đ_To disable location synchronization, go to the Settings dialog and uncheck that setting in the Map Options tab_ớ.",
				content6AltDiv1: "Đ_By default the maps location are synchronized. Disabling synchronization allows each map to display a different location_ớ.",
				content6AltDiv2: "Đ_Synchronization ON_ớ",
				content6AltDiv3: "Đ_Synchronization OFF_ớ",
				content6AltDiv4: "Đ_To disable synchronization, go to Settings > Map Options and uncheck \"Synchronize map locations\"_ớ."
			},
			landing: {
				lblAdd: "Đ_What do you want to call your %LAYOUT_TITLE% Map Series_ớ?",
				phAdd: "Đ_Enter your title_ớ...",
				lblOR: "Đ_Or_ớ",
				lblHelp: "Đ_Take a Tour_ớ"
			}
        }
    })
);
