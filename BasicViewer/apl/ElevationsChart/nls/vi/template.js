define(
   ({
  display: {
    elevationProfileTitle: "Thông tin Độ cao",
    showMe: "hiển thị cho tôi",
    selectLine: "Chọn một đối tượng trong bản đồ.",
    popupRequirement: "LƯU Ý: đối tượng cần để ở trong một Lớp Đối tượng hoặc là một phần của dịch vụ bản đồ có Cửa sổ pop-up được bật.",
    digitizeDistanceMeasureTool: "Sử dụng nút <b>Đo lường</b>.",
    selectFeatureHelpUrl: "http://help.arcgis.com/vi/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/vi/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Di chuyển chuột qua ",
    touchIPad: "chạm trên iPad",
    locationOnMap: "biểu đồ Thông tin Độ cao để hiển thị độ cao và hiện vị trí trên bản đồ."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Độ cao: {0} mét",
  chart: {
    title: "Thông tin Độ cao",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Độ cao trong {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Khoảng cách trong {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Tối thiểu:{min}   Tối đa:{max}   Bắt đầu:{start}   Kết thúc:{end}   Thay đổi:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      name: 'Lỗi Cấu hình không hợp lệ',
      message: 'Cấu hình không hợp lệ.'
    },
    MissingConstructorParameters: {
      name: 'Lỗi thiếu Tham số của Hàm dựng',
      message: 'Thiếu tham số của hàm dựng.'
    },
    MissingInitParameter: {
      name: 'Lỗi thiếu Tham số Khởi tạo',
      message: 'Thiếu tham số khởi tạo.'
    },
    SOEOperationNotSupported: {
      name: 'Lỗi Hoạt động không được Hỗ trợ',
      message: 'Phiên bản SOE này KHÔNG hỗ trợ hoạt động này.'
    },
    SOEMultiPartGeometriesNotSupported: {
      name: 'Lỗi Hình học đa phần không được Hỗ trợ',
      message: "CHÚ Ý: các đường gồm nhiều phần hiện KHÔNG được hỗ trợ."
    }
  }
})
);
