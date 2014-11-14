define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Phương tiện",
				lblSelect2: "Nội dung",
				lblMap: "Bản đồ",
				lblImage: "Hình ảnh",
				lblVideo: "Video",
				lblExternal: "Trang web",
				disabled: "Người quản trị đã vô hiệu hóa tính năng này",
				url: "Để nhập địa chỉ trang web của một hình ảnh theo cách thủ công",
				userLookup: "Tải album",
				notImplemented: "Chưa được thực hiện.",
				noData: "á»‡_No public album found_á»"
			},
			imageSelector: {
				lblStep1: "Chọn dịch vụ",
				lblStep2: "Chọn phương tiện của bạn",
				lblStep3: "Cấu hình"
			},
			imageSelectorHome: {
				explain: "Tải ảnh từ mạng xã hội <br /> hoặc trực tiếp từ URL"
			},
			imageSelectorFlickr: {
				userInputLbl: "Tên đăng nhập",
				signInMsg2: "Không tìm thấy người dùng",
				loadingFailed: "Tải thất bại"
			},
			imageSelectorFacebook: {
				leftHeader: "Người dùng Facebook",
				rightHeader: "Trang Facebook",
				pageExplain: "Trang Facebook là một thương hiệu/sản phẩm công cộng hay nổi tiếng như <b>esrigis</b>. Bạn có thể lấy tên trang sau '/' đầu tiên trong URL trang.",
				pageInputLbl: "Tên trang",
				lookupMsgError: "Không tìm thấy trang"
			},
			imageSelectorPicasa: {
				userInputLbl: "ID Email hoặc ID Picasa/Google+",
				signInMsg2: "Không tìm thấy tài khoản",
				howToFind: "Cách tìm ID tài khoản Picasa hoặc Google+",
				howToFind2: "Sao chép chữ số giữa '/' đầu tiên và thứ hai của bất kỳ trang Picasa hoặc G+ nào"
			},
			videoSelectorCommon: {
				check: "Kiểm tra",
				notFound: "Không tìm thấy video",
				found: "Đã tìm thấy video",
				select: "Chọn video này"
			},
			videoSelectorHome: {
				other: "Khác"
			},
			videoSelectorYoutube: {
				url: "URL của một video trên Youtube",
				pageInputLbl: "Tên đăng nhập",
				lookupMsgError: "Không tìm thấy người dùng",
				howToFind: "Cách tìm tên đăng nhập Youtube",
				howToFind2: "Tên đăng nhập được hiển thị dưới video",
				found: "Tìm thấy",
				noData: "Không tìm thấy video công khai"
			},
			videoSelectorVimeo: {
				url: "URL của một video trên Vimeo"
			},
			videoSelectorOther: {
				explain1: "á»‡_The application cannot play raw videos (e.g., avi, mpeg) but it can play hosted video files that have built-in players (e.g., YouTube or Vimeo)_á».",
				explain2: "Hầu hết dịch vụ lưu trữ video trực tuyến đều cung cấp tính năng này, bạn cần phải tìm tùy chọn để nhúng video, sao chép mã đã cung cấp và sử dụng %WEBPAGE%.",
				explain3: "á»‡_Alternatively, if you want host the video yourself, you can create an HTML page that uses a video player like %EXAMPLE%, host that page and also use the %WEBPAGE%_á».",
				webpage: "Tính năng của trang web"
			},
			webpageSelectorHome: {
				lblUrl: "URL trang web",
				lblEmbed: "Mã nhúng",
				lblOR: "HOẶC",
				lblError1: "Lỗi, xóa một trong hai trường nhập.",
				lblError2: "á»‡_Embed code can only contain one %IFRAMETAG%_á»",
				configure: "á»‡_Configure_á»"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "URL Hình ảnh nên bắt đầu bằng http:// và kết thúc bằng .jpg hoặc .png",
				lblURLError: "á»‡_This image does not seem to be valid. Please specify a direct link to an image file (your URL will usually end with .jpg or .png). Links to a web page that contains an image won't work_á».",
				lblURLCheck: "á»‡_Checking image_á»...",
				lblLabel: "Chú thích Hình ảnh",
				lblLabel1: "Chú thích",
				lblLabel2: "Di chuột qua văn bản",
				lblLabel3: "Không có",
				lblLabelPH: "Nhập một số chữ...",
				lblMaximize: "Bao gồm một nút phóng đại ở góc hình ảnh",
				lblMaximizeHelp: "Chỉ dành cho hình ảnh chất lượng cao",
				lblPosition: "Vị trí",
				lblPosition1: "Căn giữa",
				lblPosition2: "Tô",
				lblPosition3: "Đặt vừa",
				lblPosition4: "Kéo giãn",
				lblPosition5: "Tùy chỉnh",
				tooltipDimension: "Giá trị có thể được chỉ định theo 'px' hoặc '%'",
				tooltipDimension2: "á»‡_The value has to be specified in 'px'_á»",
				lblPosition2Explain: "(có thể xén)",
				lblPosition3Explain: "(không xén)",
				lblPosition3Explain2: "(chiều rộng sẽ luôn luôn vừa với bảng điều khiển)",
				lblPosition4Explain: "(có thể bóp méo)",
				unloadLbl: "á»‡_Unload when reader navigates away_á»",
				unloadHelp: "á»‡_If the Web Page has audio or video media, keep this option checked to stop that content from playing when the reader navigates away. Uncheck it for example to keep a soundtrack playing as the reader advances through the story.<br />If the Web Page is an application, uncheck this option so that the application does not reload if the reader returns to it_á»."
			},
			editorActionGeocode: {
				lblTitle: "Định vị một địa chỉ hoặc địa điểm",
				mapMarkerExplain: "Người dùng sẽ thấy một điểm đánh dấu trên bản đồ khi bấm vào liên kết"
			},
			editorActionMedia: {
				lblTitle: "Thay đổi nội dung Tầng Chính"
			},
			editorInlineMedia: {
				lblTitle: "á»‡_Insert an image, video or web page_á»"
			}
		}
	})
);
