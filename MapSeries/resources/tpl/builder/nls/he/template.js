define(
	 ({
		builder: {
			layouts: {
				tabTitle: "כן_Tabbed_ש",
				tabDescr: "כן_Present maps and other content using tabs with an optional panel for descriptive text_ש.",
				sideTitle: "כן_Side Accordion_ש",
				sideDescr: "כן_Present maps and other content using an expandable control that includes descriptive text_ש.",
				bulletTitle: "כן_Bulleted_ש",
				bulletDescr: "כן_Present maps and other content using bullets with an optional panel for descriptive text_ש."
			},
			common: {
				lblStatus1: "כן_Published_ש",
				lblStatus3: "כן_Hidden_ש"
			},
			settingsLayoutOptions: {
				title: "כן_Layout options_ש",
				lblDescription: "כן_Description_ש",
				lblLegend: "כן_Legend placement_ש",
				tooltipLegend: "כן_Choose where you want the map legend to be displayed. You can turn the legend on for any map when you add or configure it_ש.",
				lblDropdown: "כן_Dropdown_ש",
				lblBelowDesc: "כן_Below the description_ש",
				lblOnPanel: "כן_As a panel_ש",
				lblPanelDescAndLegend: "כן_Description and legend Panel_ש",
				lblPanelDescAndOrLegend: "כן_Description and/or legend Panel_ש",
				lblPanelDesc: "כן_Description Panel_ש",
				lblPanelLegend: "כן_Legend Panel_ש",
				lblPanelAccordion: "כן_Accordion Panel_ש",
				cfgLeft: "כן_Left_ש",
				cfgRight: "כן_Right_ש",
				cfgSmall: "כן_Small_ש",
				cfgMedium: "כן_Medium_ש",
				cfgLarge: "כן_Large_ש",
				lblNumbering: "כן_Entry numbering_ש",
				lblReverse: "כן_Reverse entry numbering_ש"
			},
			settingsMapOptions: {
				title: "כן_Map options_ש",
				lblOverview: "כן_Overview Map_ש",
				tooltipOverview: "כן_Display a small overview map along with the main map_ש.",
				lblLocate: "כן_Locate button_ש",
				tooltipLocate: "כן_This functionality is supported on most mobile device and desktop browsers (Internet Explorer 9)_ש.",
				lblGeocoder: "כן_Address or Place Finder_ש",
				tooltipGeocoder: "כן_Allow your users to find addresses and places on your maps_ש.",
				lblSync: "כן_Synchronize map locations_ש",
				tooltipSync: "כן_When enabled, the initial location of the first map in your series will be applied to all the maps, and navigation by users in any map will be reflected in all maps. Disable for each map's location to remain independent_ש."
			},
			initPopup: {
				title: "כן_Welcome to_ש"
			},
			addEditPopup: {
				lblAdd: "כן_Add_ש",
				lblEdit: "כן_Edit_ש",
				disabled: "כן_Add Entry is disabled because the maximum number of allowed sections has been reached_ש.",
				titleAdd: "כן_Add Entry_ש",
				titleEdit: "כן_Edit Entry_ש",
				stepMainStageNextTooltip: "כן_Enter the Entry title and content_ש",
				titlePlaceholder: "כן_Entry title_ש..."
			},
			textEditor: {
				placeholder1: "כן_Add text, links, and small graphics here_ש.",
				placeholder2: "כן_If left blank the panel will be hidden_ש."
			},
			organizePopup: {
				title: "כן_Organize_ש",
				lblHeader: "כן_Drag and drop entries to organize your series_ש.",
				lblColTitle: "כן_Title_ש",
				lblColStatus: "כן_Status_ש",
				btnApplyWarning: "כן_Confirm deletion of %NB% entries_ש",
				deleteTooltip: "כן_Delete_ש",
				firstSectionExplain: "כן_(The home section cannot be moved)_ש"
			},
			help: {
				lblHelp: "כן_Help_ש",
				lblAdd: "כן_Add_ש",
				lblSettings: "כן_Settings_ש",
				lblOrga: "כן_Organize_ש",
				lblEdit: "כן_Edits_ש",
				lblPublish: "כן_Share_ש",
				lblTips: "כן_Tips_ש",
				lblMore: "כן_Want more_ש?",
				lblLink: "כן_Visit the Esri Story Maps website_ש.",
				content1Div1: "כן_To create your %TPL_NAME%, use the Add button to add each map or other content into the layout. The other content can include images, videos or embedded web pages or code. For example you might want your readers to see an introductory image or video when they first launch your  %TPL_NAME%, before they move on to explore your maps_ש.",
				content1Div2: "כן_When you click the Add button a dialog will appear that lets you choose and configure the map or other content you want to add. For example you can specify the location you want the map to show, enable its legend, etc_ש.",
				content2Div1: "כן_The Settings dialog is where you can change the appearance of your %TPL_NAME%. You change the layout, choose a different color scheme, choose where the map legend will appear, etc_ש.",
				content2Div2: "כן_You can also replace the Esri logo in the header of your %TPL_NAME% with your own logo to reflect your brand. You can also specify the website that will be launched if readers click your logo, so they can get more information_ש.",
				content3Div1: "כן_The Organize dialog lets you manage your %TPL_NAME%. In this dialog you can change the order of the series by dragging and dropping_ש.",
				content3Div2: "כן_You can also delete content or hide it. Hiding is useful if you are preparing new content that isn't ready to be included in your story map yet_ש.",
				content4Div1: "כן_Found a mistake or want to change your material? No worries. Look for the edit icon throughout the app to make changes to your content. Youâ€™ll use the edit functions many times as you develop your %TPL_NAME%_ש!",
				content5Div1: "כן_When you save your %TPL_NAME% it is private initially. Use the Share button to share it with others. You can share your %TPL_NAME% publicly so anyone can access it_ש.",
				content5Div2: "כן_Depending on your account, you may also have the option to share your %TPL_NAME% just to people within your organization, so others can't access it_ש.",
				content6Div1: "כן_By default the maps in a series are synchronized to show the same location. This means that the location shown in the first map will be automatically applied to all the other maps, and that if a reader zooms or pans to a different location in the map they are currently looking at, this will also be applied to the other maps_ש.",
				content6Div2: "כן_For example if your series shows different thematic data for a city, a reader can zoom to their neighborhood and then simply switch between the tabs to see the maps for that area_ש.",
				content6Div3: "כן_To disable location synchronization, go to the Settings dialog and uncheck that setting in the Map Options tab_ש.",
				content6AltDiv1: "כן_By default the maps location are synchronized. Disabling synchronization allows each map to display a different location_ש.",
				content6AltDiv2: "כן_Synchronization ON_ש",
				content6AltDiv3: "כן_Synchronization OFF_ש",
				content6AltDiv4: "כן_To disable synchronization, go to Settings > Map Options and uncheck \"Synchronize map locations\"_ש."
			},
			landing: {
				lblAdd: "כן_What do you want to call your %LAYOUT_TITLE% Map Series_ש?",
				phAdd: "כן_Enter your title_ש...",
				lblOR: "כן_Or_ש",
				lblHelp: "כן_Take a Tour_ש"
			}
        }
    })
);
