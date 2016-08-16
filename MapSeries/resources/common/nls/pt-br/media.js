define({
  "commonMedia": {
    "mediaSelector": {
      "lblSelect1": "Mídia",
      "lblSelect2": "Conteúdo",
      "lblMap": "Mapa",
      "lblImage": "Imagem",
      "lblVideo": "Vídeo",
      "lblExternal": "Página da web",
      "disabled": "Este recurso foi desabilitado pelo Administrador",
      "url": "Para inserir manualmente o endereço da web de uma imagem",
      "userLookup": "Carregar álbuns",
      "notImplemented": "Não implementado ainda.",
      "noData": "Nenhum álbum público localizado"
    },
    "imageSelector": {
      "lblStep1": "Escolha o serviço",
      "lblStep2": "Selecione sua mídia",
      "lblStep3": "Configurar"
    },
    "imageSelectorHome": {
      "explain": "Carregue imagens da mídia social, <br /> ou diretamente de uma URL"
    },
    "imageSelectorFlickr": {
      "userInputLbl": "Nome de usuário",
      "signInMsg2": "Usuário não encontrado",
      "loadingFailed": "Falha ao carregar"
    },
    "imageSelectorFacebook": {
      "leftHeader": "Usuário do Facebook",
      "rightHeader": "Página do Facebook",
      "pageExplain": "A página do Facebook é um produto/marca pública ou figura pública como<b>esrigis</b>. Você pode obter um nome de página após o primeiro '/' na URL da página.",
      "pageInputLbl": "Nome da página",
      "lookupMsgError": "Página não encontrada",
      "warning": "ã_Facebook support has been discontinued, ${learn}________________Ç.",
      "learn": "ã_learn more____Ç"
    },
    "imageSelectorPicasa": {
      "userInputLbl": "ã_Email or Picasa id______Ç",
      "signInMsg2": "Conta não encontrada",
      "howToFind": "ã_How to find a Picasa id________Ç",
      "howToFind2": "ã_Copy digits between the first and second '/' of any Picasa page____________________Ç"
    },
    "videoSelectorCommon": {
      "check": "Verificar",
      "notFound": "Vídeo não encontrado",
      "found": "Vídeo encontrado",
      "select": "Selecionar este vídeo"
    },
    "videoSelectorHome": {
      "other": "Outro"
    },
    "videoSelectorYoutube": {
      "url": "URL de um vídeo do Youtube",
      "pageInputLbl": "Nome de usuário",
      "lookupMsgError": "Usuário não encontrado",
      "howToFind": "Como encontrar um nome de usuário do YouTube",
      "howToFind2": "O nome de usuário é exibido abaixo dos vídeos",
      "found": "Localizado",
      "noData": "Nenhum vídeo público localizado",
      "videoNotChecked": "O vídeo não foi verificado no YouTube, mas seu endereço parece bom.",
      "checkFailedAPI": "Falha ao verificar o YouTube, verifique a chave de API do YouTube."
    },
    "videoSelectorVimeo": {
      "url": "URL de um vídeo do Vimeo"
    },
    "videoSelectorOther": {
      "explain1": "A história não pode executar vídeos brutos (por exemplo, avi, mpeg) mas ela pode executar arquivos de vídeo hospedados com tocadores embutidos (por exemplo, YouTube ou Vimeo).",
      "explain2": "A maioria dos serviços de hospedagem de vídeo online oferecem esste recurso, você tem que encontrar a opção para embutir o vídeo, copiar o código fornecido e utilizar o %WEBPAGE%.",
      "explain3": "Alternativamente, se desejar você mesmo hospedar o vídeo, é possível criar uma página HTML que utiliza um botão de reprodução de vídeo como %EXAMPLE%, hospedar esta página e também utilizar o %WEBPAGE%.",
      "webpage": "Recurso da página da web"
    },
    "webpageSelectorHome": {
      "lblUrl": "URL de Página da Web",
      "lblEmbed": "Código embutido",
      "lblOR": "OU",
      "lblError1": "Erro, limpe um dos dois campos de entrada.",
      "lblError2": "O código embutido pode conter somente um %IFRAMETAG%",
      "configure": "Configurar"
    },
    "mediaConfigure": {
      "lblURL": "URL",
      "lblURLPH": "Uma URL de imagem deve iniciar com http:// e terminar com .jpg ou .png",
      "lblURLError": "Esta imagem parece não ser válida. Especifique um link direto para um arquivo de imagem (sua URL geralmente terminará com .jpg ou .png). Links para uma página da web que contêm uma imagem não funcionarão.",
      "lblURLCheck": "Verificando imagem...",
      "lblLabel": "Legenda da Imagem",
      "lblLabel1": "Legenda",
      "lblLabel2": "Pairar texto",
      "lblLabel3": "Nenhum",
      "lblLabelPH": "Inserir algum texto...",
      "lblMaximize": "Incluir um botão de maximizar no canto da imagem",
      "lblMaximizeHelp": "Recomendado somente para fotos de alta qualidade",
      "lblPosition": "Posição",
      "lblPosition1": "Centralizar",
      "lblPosition2": "Preencher",
      "lblPosition3": "Ajustar",
      "lblPosition4": "Esticar",
      "lblPosition5": "Personalizar",
      "tooltipDimension": "O valor pode ser especificado em 'px' ou '%'",
      "tooltipDimension2": "O valor tem que ser especificado em 'px'",
      "lblPosition2Explain": "(pode recortar)",
      "lblPosition3Explain": "(não cortará)",
      "lblPosition3Explain2": "(a largura sempre se ajustará no painel)",
      "lblPosition4Explain": "(pode distorcer)",
      "unloadLbl": "Descarregar quando o leitor navegar",
      "unloadHelp": "Se a Página da Web tiver mídia de áudio ou de vídeo, mantenha esta opção marcada para interromper a execução do conteúdo quando o leitor navegar fora da página. Desmarque isto, por exemplo, para manter uma trilha sonora tocando quando o leitor avançar pela história.<br />Se as Página da Web for um aplicativo, desmarque esta opção de forma que a história não recarregue se o leitor retornar a ela.",
      "embedProtocolLabel": "ã_Load page over a secure connection (HTTPS)______________Ç",
      "embedProtocolWarning1": "ã_Your story is configured to load over a secure connection (https), so web page show in the story must also use a secure connection. If the page does not load it may be because it is not available over a secure connection or that it cannot be included in your story (some websites restrict this). You may need to create a hyperlink to open the page in a new browser tab________________________________________________________________________________________________________________Ç.",
      "embedProtocolWarning2": "ã_Your story is configured to load over an insecure connection (http), so you can choose to load this page over a secure (recommended) or insecure connection. If the page does not load, it may be because it does not support the connection type you selected or that it cannot be included in your story (some websites restrict this). You may need to create a hyperlink to open the page in a new browser tab__________________________________________________________________________________________________________________________Ç."
    },
    "editorActionGeocode": {
      "lblTitle": "Localizar um endereço ou lugar",
      "mapMarkerExplain": "Usuários visualizarão um marcador de mapa ao clicar no link"
    },
    "editorActionMedia": {
      "lblTitle": "Altere o conteúdo do Nível Principal"
    },
    "editorInlineMedia": {
      "lblTitle": "Insira uma imagem, vídeo ou página da web"
    }
  }
});