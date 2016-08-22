define({
  "commonMedia": {
    "mediaSelector": {
      "lblSelect1": "媒体",
      "lblSelect2": "内容",
      "lblMap": "地图",
      "lblImage": "图像",
      "lblVideo": "视频",
      "lblExternal": "Web 页面",
      "disabled": "此功能已被管理员禁用",
      "url": "要手动输入图像的 web 地址",
      "userLookup": "加载图片集",
      "notImplemented": "尚未实现。",
      "noData": "未找到公共图片集"
    },
    "imageSelector": {
      "lblStep1": "选择服务",
      "lblStep2": "选择媒体",
      "lblStep3": "配置"
    },
    "imageSelectorHome": {
      "explain": "从社交媒体加载图像，<br /> 或直接从 URL 进行加载"
    },
    "imageSelectorFlickr": {
      "userInputLbl": "用户名",
      "signInMsg2": "未找到用户",
      "loadingFailed": "加载失败"
    },
    "imageSelectorFacebook": {
      "leftHeader": "Facebook 用户",
      "rightHeader": "Facebook 页面",
      "pageExplain": "Facebook 页面属于公共品牌/产品或像 <b>esrigis</b> 一样的名品。可以在页面 URL 的第一个 '/' 后面获取页面名称。",
      "pageInputLbl": "页面名称",
      "lookupMsgError": "未找到页面",
      "warning": "试_Facebook support has been discontinued, ${learn}________________验.",
      "learn": "试_learn more____验"
    },
    "imageSelectorPicasa": {
      "userInputLbl": "试_Email or Picasa id______验",
      "signInMsg2": "未找到帐户",
      "howToFind": "试_How to find a Picasa id________验",
      "howToFind2": "试_Copy digits between the first and second '/' of any Picasa page____________________验"
    },
    "videoSelectorCommon": {
      "check": "选中",
      "notFound": "未找到视频",
      "found": "已找到视频",
      "select": "选择此视频"
    },
    "videoSelectorHome": {
      "other": "其他"
    },
    "videoSelectorYoutube": {
      "url": "Youtube 视频的 URL",
      "pageInputLbl": "用户名",
      "lookupMsgError": "未找到用户",
      "howToFind": "如何查找 YouTube 用户名",
      "howToFind2": "用户名显示在视频下方",
      "found": "已找到",
      "noData": "未找到公开视频",
      "videoNotChecked": "未在 YouTube 上检查该视频，但其地址看起来一切正常。",
      "checkFailedAPI": "YouTube 检查失败，请检查 YouTube API 密钥。"
    },
    "videoSelectorVimeo": {
      "url": "Vimeo 视频的 URL"
    },
    "videoSelectorOther": {
      "explain1": "此故事无法播放原始视频(例如 avi、mpeg)，但可以播放带有内置播放器的托管视频文件(例如 YouTube 或 Vimeo)。",
      "explain2": "大多数在线视频托管服务均提供此功能，您必须查找此选项以嵌入视频，复制给定代码并使用 %WEBPAGE%。",
      "explain3": "或者，如果您希望自己托管视频，则可以创建使用视频播放器(如 %EXAMPLE%)的 HTML 页面，托管此页面并同样使用 %WEBPAGE%。",
      "webpage": "网页要素"
    },
    "webpageSelectorHome": {
      "lblUrl": "网页 URL",
      "lblEmbed": "嵌入代码",
      "lblOR": "或",
      "lblError1": "错误，请清除其中一个输入字段。",
      "lblError2": "嵌入代码仅可包含一个 %IFRAMETAG%",
      "configure": "配置"
    },
    "mediaConfigure": {
      "lblURL": "URL",
      "lblURLPH": "图像 URL 应该以 http:// 开始，以 .jpg 或 .png 结束",
      "lblURLError": "此图像可能无效。请指定图像文件的直接链接(URL 通常以 .jpg 或 .png 结尾)。包含图像的网页链接无法使用。",
      "lblURLCheck": "正在检查图像...",
      "lblLabel": "图像标题",
      "lblLabel1": "说明文字",
      "lblLabel2": "悬停文本",
      "lblLabel3": "无",
      "lblLabelPH": "请输入文本...",
      "lblMaximize": "在图像拐角位置放置一个最大化按钮",
      "lblMaximizeHelp": "建议仅用于高质量照片",
      "lblPosition": "位置",
      "lblPosition1": "居中",
      "lblPosition2": "填充",
      "lblPosition3": "适应",
      "lblPosition4": "拉伸",
      "lblPosition5": "自定义",
      "tooltipDimension": "可使用 'px' 或 '%' 指定值",
      "tooltipDimension2": "值必须在 'px'中指定",
      "lblPosition2Explain": "（可裁切）",
      "lblPosition3Explain": "（不裁切）",
      "lblPosition3Explain2": "(宽度将始终适应面板)",
      "lblPosition4Explain": "（可变形）",
      "unloadLbl": "读者定位到其他部分时进行卸载",
      "unloadHelp": "如果网页中包含音频或视频介质，请将该选项选中以在读者定位到其他部分时停止内容播放。取消选中该选项可使读者在浏览故事的同时持续播放音轨。<br />如果网页是应用程序，请取消选中该选项，这样应用程序不必在读者返回此部分时重新加载。",
      "embedProtocolLabel": "试_Load page over a secure connection (HTTPS)______________验",
      "embedProtocolWarning1": "试_Your story is configured to load over a secure connection (https), so web page show in the story must also use a secure connection. If the page does not load it may be because it is not available over a secure connection or that it cannot be included in your story (some websites restrict this). You may need to create a hyperlink to open the page in a new browser tab________________________________________________________________________________________________________________验.",
      "embedProtocolWarning2": "试_Your story is configured to load over an insecure connection (http), so you can choose to load this page over a secure (recommended) or insecure connection. If the page does not load, it may be because it does not support the connection type you selected or that it cannot be included in your story (some websites restrict this). You may need to create a hyperlink to open the page in a new browser tab__________________________________________________________________________________________________________________________验."
    },
    "editorActionGeocode": {
      "lblTitle": "定位地址或地点",
      "mapMarkerExplain": "用户在单击链接时会看到地图标记"
    },
    "editorActionMedia": {
      "lblTitle": "更改主舞台内容"
    },
    "editorInlineMedia": {
      "lblTitle": "插入图像、视频或网页"
    }
  }
});