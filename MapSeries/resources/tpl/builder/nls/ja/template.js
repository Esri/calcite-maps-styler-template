define(
	 ({
		builder: {
			layouts: {
				tabTitle: "須_Tabbed_鷗",
				tabDescr: "須_Present maps and other content using tabs with an optional panel for descriptive text_鷗.",
				sideTitle: "須_Side Accordion_鷗",
				sideDescr: "須_Present maps and other content using an expandable control that includes descriptive text_鷗.",
				bulletTitle: "須_Bulleted_鷗",
				bulletDescr: "須_Present maps and other content using bullets with an optional panel for descriptive text_鷗."
			},
			common: {
				lblStatus1: "須_Published_鷗",
				lblStatus3: "須_Hidden_鷗"
			},
			settingsLayoutOptions: {
				title: "須_Layout options_鷗",
				lblDescription: "須_Description_鷗",
				lblLegend: "須_Legend placement_鷗",
				tooltipLegend: "須_Choose where you want the map legend to be displayed. You can turn the legend on for any map when you add or configure it_鷗.",
				lblDropdown: "須_Dropdown_鷗",
				lblBelowDesc: "須_Below the description_鷗",
				lblOnPanel: "須_As a panel_鷗",
				lblPanelDescAndLegend: "須_Description and legend Panel_鷗",
				lblPanelDescAndOrLegend: "須_Description and/or legend Panel_鷗",
				lblPanelDesc: "須_Description Panel_鷗",
				lblPanelLegend: "須_Legend Panel_鷗",
				lblPanelAccordion: "須_Accordion Panel_鷗",
				cfgLeft: "須_Left_鷗",
				cfgRight: "須_Right_鷗",
				cfgSmall: "須_Small_鷗",
				cfgMedium: "須_Medium_鷗",
				cfgLarge: "須_Large_鷗",
				lblNumbering: "須_Entry numbering_鷗",
				lblReverse: "須_Reverse entry numbering_鷗"
			},
			settingsMapOptions: {
				title: "須_Map options_鷗",
				lblOverview: "須_Overview Map_鷗",
				tooltipOverview: "須_Display a small overview map along with the main map_鷗.",
				lblLocate: "須_Locate button_鷗",
				tooltipLocate: "須_This functionality is supported on most mobile device and desktop browsers (Internet Explorer 9)_鷗.",
				lblGeocoder: "須_Address or Place Finder_鷗",
				tooltipGeocoder: "須_Allow your users to find addresses and places on your maps_鷗.",
				lblSync: "須_Synchronize map locations_鷗",
				tooltipSync: "須_When enabled, the initial location of the first map in your series will be applied to all the maps, and navigation by users in any map will be reflected in all maps. Disable for each map's location to remain independent_鷗."
			},
			initPopup: {
				title: "須_Welcome to_鷗"
			},
			addEditPopup: {
				lblAdd: "須_Add_鷗",
				lblEdit: "須_Edit_鷗",
				disabled: "須_Add Entry is disabled because the maximum number of allowed sections has been reached_鷗.",
				titleAdd: "須_Add Entry_鷗",
				titleEdit: "須_Edit Entry_鷗",
				stepMainStageNextTooltip: "須_Enter the Entry title and content_鷗",
				titlePlaceholder: "須_Entry title_鷗..."
			},
			textEditor: {
				placeholder1: "須_Add text, links, and small graphics here_鷗.",
				placeholder2: "須_If left blank the panel will be hidden_鷗."
			},
			organizePopup: {
				title: "須_Organize_鷗",
				lblHeader: "須_Drag and drop entries to organize your series_鷗.",
				lblColTitle: "須_Title_鷗",
				lblColStatus: "須_Status_鷗",
				btnApplyWarning: "須_Confirm deletion of %NB% entries_鷗",
				deleteTooltip: "須_Delete_鷗",
				firstSectionExplain: "須_(The home section cannot be moved)_鷗"
			},
			help: {
				lblHelp: "須_Help_鷗",
				lblAdd: "須_Add_鷗",
				lblSettings: "須_Settings_鷗",
				lblOrga: "須_Organize_鷗",
				lblEdit: "須_Edits_鷗",
				lblPublish: "須_Share_鷗",
				lblTips: "須_Tips_鷗",
				lblMore: "須_Want more_鷗?",
				lblLink: "須_Visit the Esri Story Maps website_鷗.",
				content1Div1: "須_To create your %TPL_NAME%, use the Add button to add each map or other content into the layout. The other content can include images, videos or embedded web pages or code. For example you might want your readers to see an introductory image or video when they first launch your  %TPL_NAME%, before they move on to explore your maps_鷗.",
				content1Div2: "須_When you click the Add button a dialog will appear that lets you choose and configure the map or other content you want to add. For example you can specify the location you want the map to show, enable its legend, etc_鷗.",
				content2Div1: "須_The Settings dialog is where you can change the appearance of your %TPL_NAME%. You change the layout, choose a different color scheme, choose where the map legend will appear, etc_鷗.",
				content2Div2: "須_You can also replace the Esri logo in the header of your %TPL_NAME% with your own logo to reflect your brand. You can also specify the website that will be launched if readers click your logo, so they can get more information_鷗.",
				content3Div1: "須_The Organize dialog lets you manage your %TPL_NAME%. In this dialog you can change the order of the series by dragging and dropping_鷗.",
				content3Div2: "須_You can also delete content or hide it. Hiding is useful if you are preparing new content that isn't ready to be included in your story map yet_鷗.",
				content4Div1: "須_Found a mistake or want to change your material? No worries. Look for the edit icon throughout the app to make changes to your content. Youâ€™ll use the edit functions many times as you develop your %TPL_NAME%_鷗!",
				content5Div1: "須_When you save your %TPL_NAME% it is private initially. Use the Share button to share it with others. You can share your %TPL_NAME% publicly so anyone can access it_鷗.",
				content5Div2: "須_Depending on your account, you may also have the option to share your %TPL_NAME% just to people within your organization, so others can't access it_鷗.",
				content6Div1: "須_By default the maps in a series are synchronized to show the same location. This means that the location shown in the first map will be automatically applied to all the other maps, and that if a reader zooms or pans to a different location in the map they are currently looking at, this will also be applied to the other maps_鷗.",
				content6Div2: "須_For example if your series shows different thematic data for a city, a reader can zoom to their neighborhood and then simply switch between the tabs to see the maps for that area_鷗.",
				content6Div3: "須_To disable location synchronization, go to the Settings dialog and uncheck that setting in the Map Options tab_鷗.",
				content6AltDiv1: "須_By default the maps location are synchronized. Disabling synchronization allows each map to display a different location_鷗.",
				content6AltDiv2: "須_Synchronization ON_鷗",
				content6AltDiv3: "須_Synchronization OFF_鷗",
				content6AltDiv4: "須_To disable synchronization, go to Settings > Map Options and uncheck \"Synchronize map locations\"_鷗."
			},
			landing: {
				lblAdd: "須_What do you want to call your %LAYOUT_TITLE% Map Series_鷗?",
				phAdd: "須_Enter your title_鷗...",
				lblOR: "須_Or_鷗",
				lblHelp: "須_Take a Tour_鷗"
			}
        }
    })
);
