define(
	 ({
		builder: {
			layouts: {
				mainStage: "Sân khấu Chính",
				sideTitle: "Bảng điều khiển Bên",
				sideDescr: "Bố cục cho một câu chuyện tỉ mỉ bằng chữ vượt trội nhờ kết hợp hình ảnh, video và bản đồ của bạn trong một thông điệp tập trung và rõ ràng.",
				floatTitle: "Bảng điều khiển Nổi",
				floatDescr: "Một bố cục tập trung vào đồ họa của bạn cùng với việc cho phép một bảng điều khiển dạng văn bản ngắn trong suốt để giúp kể câu chuyện."
			},
			common: {
				lblStatus1: "Đã xuất bản",
				lblStatus2: "Bản thảo",
				lblStatus3: "Đã ẩn"
			},
			settingsLayoutOptions: {
				title: "Tùy chọn bố cục",
				cfgLeft: "Trái",
				cfgRight: "Phải",
				cfgSmall: "Nhỏ",
				cfgMedium: "Trung bình",
				cfgLarge: "Lớn",
				socialLinksLabel: "Hiển thị liên kết chia sẻ ở cuối mỗi phần",
				socialLinksDescr: "á»‡_This enables readers to reference and promote specific sections of your %TPL_NAME%. For instance, if you use a sections share icon, readers will land at that specific %TPL_NAME% section rather than the beginning of your story. Your readers can use the social media link in the title section to promote your entire %TPL_NAME% (header tab) and have them land at the start of the %TPL_NAME%_á»."
			},
			settingsLayoutFonts: {
				title: "á»‡_Fonts_á»",
				defaultLbl: "á»‡_Default_á»",
				sectionTitleLbl: "á»‡_Section title_á»",
				sectionContentLbl: "á»‡_Section content_á»"
			},
			initPopup: {
				title: "Chào mừng đến với"
			},
			addEditPopup: {
				disabled: "Thêm Phần bị vô hiệu hóa bởi vì đã đạt số lượng phần được tối đa.",
				titleAdd: "Thêm Phần",
				titleAddHome: "Thêm Phần Trang chủ",
				titleEdit: "Chỉnh sửa Phần",
				step: "Bước",
				stepMainStageExplain: "Nội dung Sân khấu Chính",
				stepPanelExplain: "Nội dung",
				stepMainStageNextTooltip: "Nhập tiêu đề phần và chọn nội dung Sân khấu Chính",
				stepMainStageNextTooltip2: "á»‡_Select the Main Stage content_á»",
				step2NextTooltip: "Nhập tiêu đề phần và nội dung %LAYOUT-TYPE%",
				stepNextTooltipNext: "để chuyển sang bước tiếp theo",
				stepNextTooltipAdd: "để thêm phần",
				firstAddExplain: "Phần đầu này là Mục Trang chủ của bạn, hãy xem đó là ' trang bìa' cho câu chuyện của bạn. Tiêu đề bạn vừa xác định sẽ được hiển thị bằng phông chữ lớn.",
				firstAddLeanMore: "Tìm hiểu thêm",
				titlePlaceholder: "Tiêu đề phần..."
			},
			addEditViewText: {
				editorPlaceholder: "Thêm văn bản, liên kết và đồ họa nhỏ ở đây.",
				editorActionsTitle: "Hành động trong Sân khấu Chính",
				editorActionsHelpDescr: "Sử dụng các điều khiển này để tạo ra các liên kết sẽ thay đổi giai đoạn chính. Ví dụ: khi người đọc bấm vào một liên kết, bạn có thể muốn phóng to bản đồ đến một vị trí cụ thể, hiển thị một bản đồ web hay hiển thị một hình ảnh.",
				mainStageDisabled: "á»‡_Main Stage Actions are disabled when the editor is maximized_á»"
			},
			organizePopup: {
				title: "Tổ chức",
				lblHeader: "Kéo và thả các phần để tổ chức nội dung của bạn.",
				lblColTitle: "Tiêu đề",
				lblColPubDate: "Ngày xuất bản",
				lblColStatus: "Trạng thái",
				checkDisplayReverse: "Hiển thị các phần theo thứ tự đảo ngược",
				btnApplyWarning: "Xác nhận xóa (các) phần %NB%",
				deleteTooltip: "Xóa",
				firstSectionExplain: "(Không thể di chuyển phần trang chủ)",
				exportMainStage: "á»‡_Main Stage content_á»",
				exportPanel: "á»‡_Panel content_á»",
				exportActions: "á»‡_Main Stage actions_á»"
			},
			exportData: {
				btn: "Xuất nội dung",
				tooltip: "á»‡_Exporting your content allows you to view and create a back-up of your content should you accidentally delete it. Simply copy and paste the content from the page into any word processor_á»."
			},
			help: {
				lblHelp: "Trợ giúp",
				lblAdd: "Thêm Phần",
				lblSettings: "Thiết lập",
				lblOrga: "Tổ chức nội dung",
				lblEdit: "Sửa",
				lblPublish: "Chia sẻ",
				lblTips: "Mẹo",
				lblMore: "Bạn muốn biết thêm?",
				lblLink: "á»‡_Visit the Esri Story Maps website_á».",
				content1Div1: "Bạn có thể tích hợp một loạt phong cách khi xây dựng câu chuyện của mình. <strong>%LAYOUT_TITLE%</strong> thường giữ văn bản, hình ảnh và video trong khi bản đồ của bạn có xu hướng đi đến <strong>Sân khấu Chính</strong>. Tuy nhiên, %TPL_NAME% cũng cho phép bạn mô tả các hình ảnh, biểu đồ và video trong sân khấu chính.",
				content1Div2: "Thêm các phần cho phép bạn thực sự tuỳ chỉnh trải nghiệm kể chuyện của mình. Khi người đọc cuộn qua văn bản %LAYOUT_TITLE%, một bản đồ về Sân khấu Chính có thể quay hoặc phóng to đến các điểm chính hoặc các bản đồ và hình ảnh mới có thể tự động chuyển đổi để hỗ trợ thông báo của bạn.",
				content2Div1: "á»‡_The Settings dialog is where you can change the appearance of your %TPL_NAME%. You change the layout, choose a different color scheme, change the text font, etc_á».",
				content2Div2: "á»‡_You can also replace the Esri logo with your own logo to reflect your brand. You can also specify the website that will be launched if readers click your logo, so they can get more information_á».",
				content3Div1: "Nội dung của bạn được tổ chức thành các phần. Bạn có thể có nhiều phần như bạn muốn (xem chúng là các chương nhỏ). Điều quan trọng là các chương đó phải liền mạch; trong Tổ chức bạn có thể sắp xếp lại hoặc xóa các phần như bạn muốn.",
				content4Div1: "Phát hiện một lỗi hoặc muốn thay đổi tài liệu của bạn? Đừng lo lắng. Hãy tìm biểu tượng sửa trong ứng dụng để thay đổi nội dung của bạn. Bạnâ€™ll sử dụng các chức năng sửa nhiều lần khi bạn phát triển %TPL_NAME% của bạn!",
				content5Div1: "á»‡_When you save your %TPL_NAME% it is private initially. Use the Share button to share it with others. You can share your %TPL_NAME% publicly so anyone can access it_á».",
				content5Div2: "á»‡_Depending on your account, you may also have the option to share your %TPL_NAME% just to people within your organization, so others can't access it_á».",
				content6Div1: "á»‡_The title of your Home section is also the title of your journal; think of your the Home section as  the 'cover page' to your story. The Home Section title will remain visible when your readers will navigate the Journal_á».",
				content6Div2: "%LAYOUT_TITLE% của bạn không nhất thiết chỉ là văn bản, xem xét hình ảnh và video kèm theo để giúp mang lại câu chuyện sống và để ngắt các phần dài của văn bản!"
			},
			landing: {
				lblAdd: "Bạn muốn gọi Map Journal của bạn là gì?",
				phAdd: "Nhập tiêu đề của bạn...",
				lblOR: "Hoặc",
				lblHelp: "Tham quan một Hành trình"
			},
			firstAddSplash: {
				thisis: "Đây là",
				lblMain: "á»‡_This is the %BR% Main Stage_á»"
			}
        }
    })
);
