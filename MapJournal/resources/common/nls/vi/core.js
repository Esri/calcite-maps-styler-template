define(
	 ({
		commonCore: {
			common: {
				add: "Thêm",
				edit: "Chỉnh sửa",
				save: "Lưu",
				next: "Tiếp theo",
				cancel: "Hủy",
				back: "Quay lại",
				apply: "Áp dụng",
				close: "Đóng",
				open: "Mở",
				start: "Bắt đầu",
				loading: "Đang tải",
				disabledAdmin: "Người quản trị đã vô hiệu hóa tính năng này",
				width: "Chiều rộng",
				height: "Chiều cao",
				create: "Tạo",
				yes: "Có",
				no: "Không",
				mystories: "Đ_My Stories____ớ"
			},
			inlineFieldEdit: {
				editMe: "Chỉnh sửa tôi!"
			},
			builderPanel: {
				panelHeader: "Bộ thiết lập %TPL_NAME%",
				buttonSaving: "Đang lưu",
				buttonSaved: "Đã lưu",
				buttonShare: "Chia sẻ",
				buttonSettings: "Thiết lập",
				buttonHelp: "Trợ giúp",
				buttonPreview: "Đ_View story____ớ",
				tooltipFirstSave: "Ứng dụng này không khả dụng cho đến khi bạn lưu.",
				tooltipNotShared: "Ứng dụng này không khả dụng cho đến khi bạn chia sẻ.",
				tooltipNotShared2: "Đ_Your story isn't shared, only you can access it_______________ớ.",
				noPendingChange: "Không có thay đổi chờ xử lý",
				unSavedChangePlural: "Thay đổi chờ xử lý",
				closeWithPendingChange: "Bạn có chắc chắn muốn xác nhận hành động này không? Các thay đổi của bạn sẽ bị mất.",
				saveError: "Lưu thất bại, vui lòng thử lại",
				status1: "Câu chuyện được chia sẻ nhưng có sự cố",
				status2: "Câu chuyện không được chia sẻ nhưng có sự cố",
				status3: "Câu chuyện ở chế độ công khai",
				status4: "Câu chuyện được chia sẻ trong tổ chức của bạn",
				status5: "Câu chuyện ở chế độ riêng tư",
				status6: "Câu chuyện chưa được lưu",
				checking: "Đang kiểm tra",
				fix: "Sửa"
			},
			saveError: {
				title: "Lỗi khi lưu câu chuyện",
				err1Div1: "Không thể lưu câu chuyện do bạn đã có mục khác có cùng tên.",
				err1Div2: "Vui lòng sửa đổi tiêu đề câu chuyện của bạn, sau đó lưu lại.",
				btnOk: "Chỉnh sửa tiêu đề câu chuyện"
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
				panel4: "Đ_Do not warn me again for this story____________ớ"
			},
			share: {
				shareTitle: "Chia sẻ câu chuyện của bạn",
				preview: "Xem trước",
				viewlive: "Đ_View story____ớ",
				btnPrivate: "Riêng tư",
				btnPrivateTooltip: "Chỉ có bạn được quyền xem câu chuyện",
				btnOrg: "Tổ chức",
				btnOrgTooltip: "Chỉ có thành viên tổ chức của bạn được quyền xem câu chuyện",
				btnPublic: "Công khai",
				btnPublicTooltip: "Ai cũng có thể xem câu chuyện",
				loadingMessage: "Kiểm tra câu chuyện của bạn để phát hiện sự cố",
				viewToggle1: "Hiển thị nội dung câu chuyện",
				viewToggle2: "Đóng nội dung câu chuyện",
				socialize: "Xã hội hóa",
				statusPrivate: "Câu chuyện của bạn đang ở chế độ riêng tư, chỉ có bạn được quyền xem câu chuyện.",
				statusError: "Có sự cố trong nội dung câu chuyện của bạn mà người đọc sẽ nhận thấy. Bạn có thể xác định và sửa các sự cố này bên dưới.",
				statusNoErrPrivate: "Hãy chia sẻ câu chuyện của bạn khi bạn đã sẵn sàng!",
				mystoriesinvite: "Quản lý tất cả các câu chuyện của bạn",
				notavailable1: "Xin lỗi, chia sẻ câu chuyện của bạn từ Bộ thiết lập không được hỗ trợ do ứng dụng story map không được lưu trữ trong %PRODUCT%.",
				notavailable2: "Xin lỗi, chia sẻ câu chuyện của bạn từ Bộ thiết lập không được hỗ trợ trên phiên bản Portal for ArcGIS này (yêu cầu phiên bản 10.4 trở lên).",
				notavailable3: "Bạn có thể chia sẻ câu chuyện từ %LINK%.",
				notavailable4: "Câu chuyện của Tôi",
				notavailable5: "Đ_its item page_____ớ",
				notavailable6: "Xin lỗi, tính năng này không được hỗ trợ đầy đủ trong chế độ phát triển. Tùy theo kịch bản triển khai của bạn, tính năng này có thể được hỗ trợ khi được triển khai.",
				notavailable7: "Hãy bảo đảm truy cập %MYCONTENT% để xác nhận bản đồ và lớp được sử dụng trong câu chuyện của bạn cũng được chia sẻ.",
				notavailable8: "Nội dung của tôi",
				mystoriesinvite2: "Đ_To improve how your story looks on social networks use ${MYSTORIES} to add a summary and a thumbnail image_________________________________ớ."
			},
			settings: {
				header: "Thiết lập",
				tabError: "Vui lòng kiểm tra lỗi trong tất cả các tab"
			},
			settingsLayout: {
				title: "Đ_Layout___ớ",
				explain: "Bạn muốn sử dụng bố cục nào?",
				explainInit: "Bạn có thể thay đổi bố cục bất kỳ lúc nào từ hộp thoại thiết lập.",
				viewExample: "Xem ví dụ trực tiếp"
			},
			settingsTheme: {
				title: "Đ_Theme___ớ"
			},
			settingsHeader: {
				title: "Đ_Header___ớ",
				logoEsri: "Logo Esri",
				logoNone: "Không có logo",
				logoCustom: "Logo tùy chỉnh",
				logoCustomPlaceholder: "URL (tối đa 250x50 điểm ảnh)",
				logoCustomTargetPlaceholder: "Bấm vào liên kết",
				logoSocialExplain: "Tùy chỉnh liên kết đầu mục.",
				logoSocialText: "Văn bản",
				logoSocialLink: "Liên kết",
				lblSmallHeader: "Sử dụng đầu trang ngắn gọn (không có phụ đề)"
			},
			header: {
				title: "Đ_Edit the title of your %TPL_NAME%___________ớ",
				subtitle: "Chỉnh sửa phụ đề %TPL_NAME% của bạn"
			}
		}
	})
);
