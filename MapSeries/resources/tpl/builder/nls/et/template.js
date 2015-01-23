define(
	 ({
		builder: {
			layouts: {
				tabTitle: "Š_Tabbed_ä",
				tabDescr: "Š_Present maps and other content using tabs with an optional panel for descriptive text_ä.",
				sideTitle: "Š_Side Accordion_ä",
				sideDescr: "Š_Present maps and other content using an expandable control that includes descriptive text_ä.",
				bulletTitle: "Š_Bulleted_ä",
				bulletDescr: "Š_Present maps and other content using bullets with an optional panel for descriptive text_ä."
			},
			common: {
				lblStatus1: "Š_Published_ä",
				lblStatus3: "Š_Hidden_ä"
			},
			settingsLayoutOptions: {
				title: "Š_Layout options_ä",
				lblDescription: "Š_Description_ä",
				lblLegend: "Š_Legend placement_ä",
				tooltipLegend: "Š_Choose where you want the map legend to be displayed. You can turn the legend on for any map when you add or configure it_ä.",
				lblDropdown: "Š_Dropdown_ä",
				lblBelowDesc: "Š_Below the description_ä",
				lblOnPanel: "Š_As a panel_ä",
				lblPanelDescAndLegend: "Š_Description and legend Panel_ä",
				lblPanelDescAndOrLegend: "Š_Description and/or legend Panel_ä",
				lblPanelDesc: "Š_Description Panel_ä",
				lblPanelLegend: "Š_Legend Panel_ä",
				lblPanelAccordion: "Š_Accordion Panel_ä",
				cfgLeft: "Š_Left_ä",
				cfgRight: "Š_Right_ä",
				cfgSmall: "Š_Small_ä",
				cfgMedium: "Š_Medium_ä",
				cfgLarge: "Š_Large_ä",
				lblNumbering: "Š_Entry numbering_ä",
				lblReverse: "Š_Reverse entry numbering_ä"
			},
			settingsMapOptions: {
				title: "Š_Map options_ä",
				lblOverview: "Š_Overview Map_ä",
				tooltipOverview: "Š_Display a small overview map along with the main map_ä.",
				lblLocate: "Š_Locate button_ä",
				tooltipLocate: "Š_This functionality is supported on most mobile device and desktop browsers (Internet Explorer 9)_ä.",
				lblGeocoder: "Š_Address or Place Finder_ä",
				tooltipGeocoder: "Š_Allow your users to find addresses and places on your maps_ä.",
				lblSync: "Š_Synchronize map locations_ä",
				tooltipSync: "Š_When enabled, the initial location of the first map in your series will be applied to all the maps, and navigation by users in any map will be reflected in all maps. Disable for each map's location to remain independent_ä."
			},
			initPopup: {
				title: "Š_Welcome to_ä"
			},
			addEditPopup: {
				lblAdd: "Š_Add_ä",
				lblEdit: "Š_Edit_ä",
				disabled: "Š_Add Entry is disabled because the maximum number of allowed sections has been reached_ä.",
				titleAdd: "Š_Add Entry_ä",
				titleEdit: "Š_Edit Entry_ä",
				stepMainStageNextTooltip: "Š_Enter the Entry title and content_ä",
				titlePlaceholder: "Š_Entry title_ä..."
			},
			textEditor: {
				placeholder1: "Š_Add text, links, and small graphics here_ä.",
				placeholder2: "Š_If left blank the panel will be hidden_ä."
			},
			organizePopup: {
				title: "Š_Organize_ä",
				lblHeader: "Š_Drag and drop entries to organize your series_ä.",
				lblColTitle: "Š_Title_ä",
				lblColStatus: "Š_Status_ä",
				btnApplyWarning: "Š_Confirm deletion of %NB% entries_ä",
				deleteTooltip: "Š_Delete_ä",
				firstSectionExplain: "Š_(The home section cannot be moved)_ä"
			},
			help: {
				lblHelp: "Š_Help_ä",
				lblAdd: "Š_Add_ä",
				lblSettings: "Š_Settings_ä",
				lblOrga: "Š_Organize_ä",
				lblEdit: "Š_Edits_ä",
				lblPublish: "Š_Share_ä",
				lblTips: "Š_Tips_ä",
				lblMore: "Š_Want more_ä?",
				lblLink: "Š_Visit the Esri Story Maps website_ä.",
				content1Div1: "Š_To create your %TPL_NAME%, use the Add button to add each map or other content into the layout. The other content can include images, videos or embedded web pages or code. For example you might want your readers to see an introductory image or video when they first launch your  %TPL_NAME%, before they move on to explore your maps_ä.",
				content1Div2: "Š_When you click the Add button a dialog will appear that lets you choose and configure the map or other content you want to add. For example you can specify the location you want the map to show, enable its legend, etc_ä.",
				content2Div1: "Š_The Settings dialog is where you can change the appearance of your %TPL_NAME%. You change the layout, choose a different color scheme, choose where the map legend will appear, etc_ä.",
				content2Div2: "Š_You can also replace the Esri logo in the header of your %TPL_NAME% with your own logo to reflect your brand. You can also specify the website that will be launched if readers click your logo, so they can get more information_ä.",
				content3Div1: "Š_The Organize dialog lets you manage your %TPL_NAME%. In this dialog you can change the order of the series by dragging and dropping_ä.",
				content3Div2: "Š_You can also delete content or hide it. Hiding is useful if you are preparing new content that isn't ready to be included in your story map yet_ä.",
				content4Div1: "Š_Found a mistake or want to change your material? No worries. Look for the edit icon throughout the app to make changes to your content. Youâ€™ll use the edit functions many times as you develop your %TPL_NAME%_ä!",
				content5Div1: "Š_When you save your %TPL_NAME% it is private initially. Use the Share button to share it with others. You can share your %TPL_NAME% publicly so anyone can access it_ä.",
				content5Div2: "Š_Depending on your account, you may also have the option to share your %TPL_NAME% just to people within your organization, so others can't access it_ä.",
				content6Div1: "Š_By default the maps in a series are synchronized to show the same location. This means that the location shown in the first map will be automatically applied to all the other maps, and that if a reader zooms or pans to a different location in the map they are currently looking at, this will also be applied to the other maps_ä.",
				content6Div2: "Š_For example if your series shows different thematic data for a city, a reader can zoom to their neighborhood and then simply switch between the tabs to see the maps for that area_ä.",
				content6Div3: "Š_To disable location synchronization, go to the Settings dialog and uncheck that setting in the Map Options tab_ä.",
				content6AltDiv1: "Š_By default the maps location are synchronized. Disabling synchronization allows each map to display a different location_ä.",
				content6AltDiv2: "Š_Synchronization ON_ä",
				content6AltDiv3: "Š_Synchronization OFF_ä",
				content6AltDiv4: "Š_To disable synchronization, go to Settings > Map Options and uncheck \"Synchronize map locations\"_ä."
			},
			landing: {
				lblAdd: "Š_What do you want to call your %LAYOUT_TITLE% Map Series_ä?",
				phAdd: "Š_Enter your title_ä...",
				lblOR: "Š_Or_ä",
				lblHelp: "Š_Take a Tour_ä"
			}
        }
    })
);
