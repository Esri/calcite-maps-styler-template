define(
	 ({
		viewer: {
			loading: {
				step1: "ĐANG TẢI CÂU CHUYỆN",
				step2: "ĐANG TẢI DỮ LIỆU",
				step3: "ĐANG KHỞI TẠO",
				fail: "Xin lỗi, tải chức năng Trượt nhanh thất bại",
				loadBuilder: "ĐANG CHUYỂN SANG CHẾ ĐỘ THIẾT LẬP",
				redirectSignIn: "ĐANG CHUYỂN HƯỚNG ĐẾN TRANG ĐĂNG NHẬP",
				redirectSignIn2: "(bạn sẽ được chuyển hướng ở đây sau khi đăng nhập)",
				failButton: "Thử lại"
			},
			errors: {
				boxTitle: "Đã xảy ra lỗi",
				portalSelf: "Lỗi nghiêm trọng: Không thể tải cấu hình cổng thông tin",
				invalidConfig: "Lỗi nghiêm trọng: Cấu hình không hợp lệ",
				invalidConfigNoWebmap: "Đ_Fatal error: Invalid configuration (web map or application identifier not specified in index.html)______________________________ớ",
				invalidConfigNoAppDev: "Đ_No Web Mapping Application identifier or webmap are specified in URL parameters (?appid= or ?webmap=). In development mode, the appid and webmap configuration in index.html are ignored_________________________________________________________ớ.",
				createMap: "Không thể tạo bản đồ",
				invalidApp: "Lỗi nghiêm trọng: Không thể tải câu chuyện",
				initMobile: "Chào mừng bạn đến với ứng dụng web trượt nhanh. Ứng dụng này không được cấu hình. Bộ thiết lập tương tác không được hỗ trợ trên các thiết bị di động.",
				initMobile2: "Đ_The Swipe builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen_____________________________________________________ớ.",
				initMobile3: "Đ_Please rotate your device to landscape orientation to use the Swipe builder________________________ớ.",
				noBuilderIE8: "Bộ thiết lập tương tác chức năng trượt nhanh không được hỗ trợ trên trình duyệt Internet Explorer trước phiên bản 9.",
				noLayerView: "Chào mừng bạn đến ứng dụng web Trượt nhanh.<br />Ứng dụng này vẫn chưa được cấu hình.",
				appSave: "Lỗi khi lưu câu chuyện web",
				mapSave: "Lỗi khi lưu bản đồ web",
				notAuthorized: "Bạn không được phép truy cập vào câu chuyện này",
				notAuthorizedBuilder: "Đ_You are not authorized to use Swipe and Spyglass builder__________________ớ.",
				conflictingProjectionsTitle: "Xung đột Phép chiếu",
				conflictingProjections: "Chức năng Trượt nhanh không hỗ trợ sử dụng hai bản đồ web với các phép chiếu khác nhau. Vui lòng vào phần thiết lập và sử dụng một bản đồ web có sử dụng cùng một phép chiếu với bản đồ web đầu tiên.",
				cpButton: "Đóng",
				unspecifiedConfigOwner: "Chủ sở hữu được ủy quyền chưa được cấu hình.",
				invalidConfigOwner: "Chủ sở hữu câu chuyện chưa được ủy quyền."
			},
			mobileView: {
				hideIntro: "ẨN GIỚI THIỆU",
				navLeft: "Chú giải",
				navMap: "Bản đồ",
				navRight: "Dữ liệu"
			},
			desktopView: {
				storymapsText: "Story map",
				builderButton: "Chuyển sang chế độ thiết lập",
				facebookTooltip: "Chia sẻ trên Facebook",
				twitterTooltip: "Chia sẻ trên Twitter",
				bitlyTooltip: "Tải liên kết ngắn",
				tooltipAutoplayDisabled: "Đ_This isn't available in autoplay mode____________ớ",
				autoplayLabel: "Đ_Autoplay mode_____ớ",
				autoplayExplain1: "Đ_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________ớ.",
				autoplayExplain2: "Đ_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________ớ."
			}
		},
		builder: {
			builder: {
				panelHeader: "CẤU HÌNH CÂU CHUYỆN",
				buttonSave: "LƯU",
				buttonHelp: "Trợ giúp",
				buttonShare: "Chia sẻ",
				buttonDiscard: "HỦY",
				buttonSettings: "Thiết lập",
				buttonView: "Chế độ xem",
				buttonItem: "Mở mục Ứng dụng Web",
				noPendingChange: "Không có thay đổi chờ xử lý",
				unSavedChangeSingular: "1 thay đổi chưa được lưu",
				unSavedChangePlural: "thay đổi chưa được lưu",
				popoverDiscard: "Bạn có chắc chắn muốn hủy mọi thay đổi chưa được lưu không?",
				yes: "Có",
				no: "Không",
				popoverOpenViewExplain: "Bằng cách mở trình xem, bạn sẽ mất mọi thay đổi chưa được lưu",
				popoverOpenViewOk: "Ok",
				popoverOpenViewCancel: "Hủy",
				popoverSaveWhenDone: "Đừng quên lưu khi bạn hoàn tất",
				closeWithPendingChange: "Bạn có chắc chắn muốn xác nhận hành động này không? Các thay đổi của bạn sẽ bị mất.",
				gotIt: "Ok",
				savingApplication: "Đang lưu câu chuyện",
				saveSuccess: "Đ_Story saved____ớ",
				saveError: "Lưu thất bại, vui lòng thử lại",
				saveError2: "Lưu thất bại do thẻ html trong tên hoặc mô tả không hợp lệ",
				saveError3: "Không được để trống tiêu đề",
				signIn: "Vui lòng đăng nhập bằng một tài khoản vào",
				signInTwo: "để lưu câu chuyện."
			},
			header:{
				editMe: "Chỉnh sửa tôi!",
				templateTitle: "Thiết lập tiêu đề mẫu",
				templateSubtitle: "Thiết lập phụ đề mẫu"
			},
			settings: {
				settingsHeader: "Thiết lập câu chuyện",
				modalCancel: "Hủy",
				modalApply: "Áp dụng"
			},
			settingsColors: {
				settingsTabColor: "Chủ đề",
				settingsColorExplain: "Chọn chủ đề ứng dụng hoặc xác định màu sắc riêng của bạn.",
				settingsLabelColor: "Màu nền đầu mục và bảng điều khiển bên"
			},
			settingsHeader: {
				settingsTabLogo: "Đầu mục",
				settingsLogoExplain: "Tùy chỉnh logo đầu mục (tối đa là 250 x 50px).",
				settingsLogoEsri: "Logo Esri",
				settingsLogoNone: "Không có logo",
				settingsLogoCustom: "Logo tùy chỉnh",
				settingsLogoCustomPlaceholder: "URL Hình ảnh",
				settingsLogoCustomTargetPlaceholder: "Bấm vào liên kết",
				settingsLogoSocialExplain: "Tùy chỉnh liên kết trên cùng bên phải đầu mục.",
				settingsLogoSocialText: "Văn bản",
				settingsLogoSocialLink: "Liên kết",
				settingsLogoSocialDisabled: "Người quản trị đã vô hiệu hóa tính năng này"
			},
			settingsExtent: {
				settingsTabExtent: "Phạm vi",
				settingsExtentExplain: "Thiết lập phạm vi ban đầu thông qua bản đồ tương tác dưới đây.",
				settingsExtentExplainBottom: "Phạm vi bạn xác định sẽ thay đổi phạm vi bản đồ web ban đầu của bạn. Lưu ý rằng nếu bạn đang thực hiện một loạt trượt nhanh, phạm vi đó sẽ không được sử dụng.",
				settingsExtentDateLineError: "Phạm vi không thể vượt qua kinh tuyến 180ï¿½",
				settingsExtentDateLineError2: "Lỗi khi tính toán phạm vi",
				settingsExtentDrawBtn: "Vẽ một phạm vi mới",
				settingsExtentModifyBtn: "Chỉnh sửa phạm vi hiện tại",
				settingsExtentApplyBtn: "Áp dụng trên bản đồ chính",
				settingsExtentUseMainMap: "Sử dụng phạm vi bản đồ chính"
			}
        },
		swipe: {
			mobileData: {
				noData: "Không có dữ liệu để hiển thị!",
				noDataExplain: "Chạm vào bản đồ để chọn một đối tượng và trở lại đây",
				noDataMap: "Không có dữ liệu cho bản đồ này",
				noPopup: "Không tìm thấy cửa sổ pop-up cho tính năng này"
			},
			mobileLegend: {
				noLegend: "Không có chú giải để hiển thị."
			},
			swipeSidePanel: {
				editTooltip: "Đặt mô tả bảng điều khiển bên",
				editMe: "Chỉnh sửa tôi!",
				legendTitle: "Chú giải"
			},
			infoWindow: {
				noFeature: "Không có dữ liệu để hiển thị",
				noFeatureExplain: "Chạm vào bản đồ để chọn một đối tượng"
			},
			settingsLayout: {
				settingsTabLayout: "Kiểu Trượt nhanh",
				settingsLayoutExplain: "Chọn một kiểu cho công cụ trượt nhanh.",
				settingsLayoutSwipe: "Thanh dọc",
				settingsLayoutSpyGlass: "Kính thiên văn nhỏ",
				settingsLayoutSelected: "Bố cục được chọn",
				settingsLayoutSelect: "Chọn bố cục này",
				settingsSaveConfirm: "Một số thay đổi của bạn yêu cầu bạn lưu và tải lại câu chuyện"
			},
			settingsDataModel: {
				settingsTabDataModel: "Loại Trượt nhanh",
				settingsDataModelExplainSwipe: "Bạn muốn người dùng trượt nhanh gì?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Chọn lớp hoặc bản đồ web xuất hiện trong kính thiên văn nhỏ.",
				settingsDataModelOneMap: "Một lớp trong bản đồ web",
				settingsDataModel1Explain: "Chọn lớp bạn muốn trượt nhanh",
				settingsDataModel1Warning: "Nếu lớp bị ẩn bởi các lớp trên, trượt nhanh sẽ không có hiệu lực.",
				settingsDataModel1SpyGlassExplain: "Chọn lớp xuất hiện trong phạm vi kính thiên văn nhỏ.",
				settingsDataModelTwoMaps: "Hai bản đồ web",
				settingsDataModelLayerIds: "Các ID Lớp bản đồ Web",
				settingsDataModelSelected: "Loại đã chọn",
				settingsDataModelWebmapSwipeId1: "ID bản đồ Web phải",
				settingsDataModelWebmapSwipeId2: "ID bản đồ Web trái",
				settingsDataModelWebmapGlassId1: "ID bản đồ Web chính",
				settingsDataModelWebmapGlassId2: "ID bản đồ Web kính thiên văn nhỏ",
				settingsDataModelSelect: "Chọn loại này",
				settingsDataModel2Explain: "Trượt nhanh bằng một bản đồ web khác.",
				settingsDataModel2SpyGlassExplain: "Hiển thị một bản đồ web khác.",
				settingsDataModel2HelpTitle: "Làm cách nào để tìm một ID bản đồ web?",
				settingsDataModel2HelpContent: "Sao chép và dán chữ số sau dấu '=' trong URL bản đồ web",
				switchMaps: "Chuyển đổi các bản đồ",
				browseWebMaps: "Duyệt các bản đồ web"
			},
			settingsLegend: {
				settingsTabLegend: "Bố cục Ứng dụng",
				settingsLegendExplain: "Chọn thiết lập bố cục.",
				settingsLegendEnable: "Bật Chú giải",
				settingsDescriptionEnable: "Bật Mô tả",
				settingsBookmarksEnable: "Bật chuỗi Trượt nhanh",
				settingsPopupDisable: "Đ_Enable pop-up_____ớ",
				settingsLocationSearchEnable: "Bật tìm kiếm định vị",
				settingsGeolocatorEnable: "Bật bộ định vị địa lý",
				settingsLegendHelpContent: "Đ_To refine the legend content, use the ArcGIS web map viewer table of contents (Hide in Legend)_____________________________ớ",
				settingsSeriesHelpContent: "Chuỗi trượt nhanh là một lựa chọn điều hướng theo thẻ sẽ đưa trình xem đến một phạm vi cụ thể và hiển thị tiêu đề và văn bản mô tả trong bảng điều khiển bên. Trong thời gian kích hoạt ban đầu, các đánh dấu từ (các) bản đồ web sẽ được nhập vào và sử dụng để tự động điền trước vào thanh chuỗi. Việc vô hiệu hóa tùy chọn chuỗi sẽ làm tắt thanh chuỗi, nhưng cấu hình chuỗi được lưu trữ để sử dụng trong tương lai.",
				settingsSeriesHelpContent2: "Chuỗi Trượt nhanh cho phép bạn tạo và sửa một loạt các địa điểm cùng với tiêu đề và văn bản. Nếu bản đồ web của bạn có đánh dấu, chúng sẽ được hiển thị. Bạn có thể tắt thanh chuỗi, nhưng cấu hình chuỗi được lưu giữ để sử dụng trong tương lai.",
				settingsSeriesHelpLink: "Xem ví dụ về một ứng dụng có chuỗi trượt nhanh tại đây",
				preview: "Xem trước giao diện người dùng",
				settingsLocateButtonExplain: "Chức năng này được hỗ trợ trên hầu hết các thiết bị di động và trình duyệt máy tính để bàn (bao gồm cả Internet Explorer 9 +).",
				settingsLocateButton: "Bật nút 'Định vị' trên các trình duyệt hỗ trợ",
				settingsAddressSearch: "Bật công cụ tìm kiếm địa chỉ"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Cửa sổ pop-up",
				settingsSwipePopupExplain: "Tùy chỉnh hình dạng tiêu đề cửa sổ pop-up để giúp người dùng liên kết cửa sổ pop-up với lớp bản đồ.",
				settingsSwipePopupSwipe1: "Bản đồ trái",
				settingsSwipePopupSwipe2: "Bản đồ phải",
				settingsSwipePopupGlass1: "Bản đồ chính",
				settingsSwipePopupGlass2: "Bản đồ Kính thiên văn nhỏ",
				settingsSwipePopupTitle: "Tiêu đề Đầu mục",
				settingsSwipePopupColor: "Màu sắc Đầu mục"
			},
			initPopup: {
				initHeader: "Chào mừng bạn đến với Bộ thiết lập Trượt nhanh/Kính thiên văn nhỏ",
				modalNext: "Tiếp theo",
				modalPrev: "Trước",
				modalApply: "Mở ứng dụng"
			},
			seriesPanel: {
				title: "Tiêu đề",
				descr: "Mô tả",
				discard: "Hủy Đánh dấu",
				saveExtent: "Thiết lập Phạm vi Đánh dấu",
				discardDisabled: "Bạn không thể xóa đánh dấu. Chuỗi Trượt nhanh có thể bị tắt trong Thiết lập."
			},
			helpPopup: {
				title: "Trợ giúp",
				close: "Đóng",
				tab1: {
					div1: "Mẫu Trượt nhanh/Kính thiên văn nhỏ được thiết kế để so sánh hai bản đồ web riêng biệt hoặc hai lớp bản đồ web duy nhất trong một ứng dụng web dễ sử dụng và đầy hấp dẫn có thể được sử dụng trong bất kỳ trình duyệt web nào trên bất kỳ thiết bị nào, bao gồm cả điện thoại thông minh và máy tính bảng.",
					div2: "Để biết thêm thông tin về mẫu Trượt nhanh/Kính thiên văn nhỏ, bao gồm các mẫu do người dùng tạo, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> truy cập trang web Story Maps</a>. Bạn cũng có thể theo dõi chúng tôi trên Twitter tại <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Chúng tôi muốn nhận phản hồi từ bạn! Cho dù bạn có một câu hỏi, muốn yêu cầu một tính năng mới hoặc cho rằng bạn đã tìm thấy một lỗi, vui lòng truy cập <a href='http://links.esri.com/storymaps/forum' target='_blank'>Diễn đàn Người dùng Story Maps</a>."
				}
			},
			share: {
				firstSaveTitle: "Đ_Story saved____ớ",
				manageStory: "Đ_Manage your story______ớ",
				manageStoryA1: "Đ_Tip: You can use %LINK1% to check your story for errors and change how its components are shared. My Stories also helps you make your story look good when it is shared on social networks. You can learn about other useful features of My Stories in these %LINK2%_______________________________________________________________________________ớ.",
				manageStoryA1V1: "Đ_My Stories____ớ",
				manageStoryA1V2: "Đ_blog posts____ớ",
				shareTitle: "Chia sẻ câu chuyện của bạn",
				sharePrivateHeader: "Câu chuyện của bạn không được chia sẻ, bạn có muốn chia sẻ không?",
				sharePrivateBtn1: "Chia sẻ công khai",
				sharePrivateBtn2: "Chia sẻ với Tổ chức của tôi",
				sharePrivateProgress: "Đang tiến hành chia sẻ...",
				sharePrivateErr: "Chia sẻ thất bại, thử lại hoặc",
				sharePrivateOk: "Đ_Sharing updated, loading_________ớ...",
				shareStatus1: "Câu chuyện chưa được lưu",
				shareStatus2: "Câu chuyện được chia sẻ công khai",
				shareStatus3: "Câu chuyện được chia sẻ trong tổ chức",
				shareStatus4: "Câu chuyện không được chia sẻ",
				sharePreviewAsUser: "Xem trước",
				shareHeader1: "Câu chuyện của bạn <strong>có thể truy cập công khai</strong>.",
				shareHeader2: "Các thành viên trong tổ chức của bạn có thể truy cập câu chuyện của bạn (yêu cầu đăng nhập).",
				shareLinkHeader: "Đ_Share your story______ớ",
				shareLinkOpen: "MỞ",
				learnMore: "Tìm hiểu thêm",
				shareA1: "Sử dụng %SHAREIMG% trên <a href='%LINK1%' target='_blank'>trang mục ứng dụng</a>. Nếu bạn cũng muốn hủy chia sẻ bản đồ web, sử dụng <a href='%LINK2%' target='_blank'>trang mục bản đồ web</a>.",
				shareWarning: "Chia sẻ %WITH% đã bị vô hiệu hóa vì bạn không phải là chủ sở hữu <a href='%LINK%' target='_blank'>bản đồ web</a>.",
				shareWarningWith1: "Đ_publicly___ớ",
				shareWarningWith2: "Đ_publicly and with the Organization___________ớ"
			},
			directCreation: {
				header: "Chào mừng bạn đến với Bộ thiết lập Trượt nhanh/Kính thiên văn nhỏ",
				mapPickHeader: "Để bắt đầu, vui lòng nhập vào một id bản đồ web hợp lệ hoặc sử dụng nút tìm kiếm để duyệt bản đồ web.",
				launchBuilder: "Khởi chạy Bộ thiết lập",
				chooseWebmapLbl: "Chọn bản đồ web...",
				explain2: "Đ_To create a Swipe or Spyglass story map, use the button below to choose the existing web map you want to use. Alternatively, you can paste the ID of the web map into the field below________________________________________________________ớ.",
				explain3: "Nếu bạn muốn sử dụng hai bản đồ web trong story map của bạn, bạn sẽ được nhắc nhở cho bản đồ web thứ hai sau khi bạn chọn tùy chọn đó.",
				webmapPlaceholder: "Nhập id bản đồ web..."
			},
			saveErrorSocial: {
				title: "Đ_Social media sharing update_________ớ",
				panel1: "Đ_Your storyâ€™s appearance on social media has been improved, but your ArcGIS web application item title is not the same as your story title___________________________________________ớ.",
				panel1tooltip: "Đ_By defining a title, summary and thumbnail image, your story will look like this_________________________ớ:",
				panel2:	"Đ_Which title would you like to use on social media________________ớ:",
				panel2q1: "Đ_Story title (recommended)_________ớ",
				panel2q1tooltip: "Đ_By choosing this option, your item title will be modified to match your story title and further changes in the builder will be synchronized___________________________________________ớ.",
				panel2q2: "Đ_Item title____ớ",
				panel3: "Đ_To further improve how your story looks on social media use ${MYSTORIES} to add a summary and a thumbnail image___________________________________ớ.",
				panel4: "Đ_Do not warn me again for this story____________ớ",
				mystories: "Đ_My Stories____ớ",
				btnSave: "Đ_Save__ớ"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Tổ chức của tôi",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Nội dung của tôi",
					favoritesLabel: "Yêu thích của tôi"
				},
				title: "Đ_Select Web Map_____ớ",
				searchTitle: "Tìm kiếm",
				ok: "Ok",
				cancel: "Hủy",
				placeholder: "Nhập cụm từ tìm kiếm"
			}
		}
    })
);
