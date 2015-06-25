/*global define */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define(
     ({
        map: {
            error: "Não foi possível criar mapa" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "Nenhum grupo configurado" // Appears when no group is configured
        },
        webMapList: {
            owner: "Proprietário", // Appears in web-map list description panel when it is set to true
            created: "Data criada", // Appears in web-map list description panel when it is set to true
            modified: "Data de modificação", // Appears in web-map list description panel when it is set to true
            description: "Descrição", // Appears in web-map list description panel when it is set to true
            snippet: "Resumo", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Restrições de utilização e acesso", // Appears in web-map list description panel when it is set to true
            accessInformation: "Créditos", // Appears in web-map list description panel when it is set to true
            tags: "Palavras-chave", // Appears in web-map list description panel when it is set to true
            numViews: "Número de visualizações", // Appears in web-map list description panel when it is set to true
            avgRating: "Avaliação", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "Grupo configurado é inválido ou itens ainda não foram partilhados com este grupo", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Informação de mapa" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Terminar sessão", // Command button to sign-out from the application
            pleaseSignInText: "Por favor inicie sessão", // Appears when user needs to sign-in into the application
            showSelectedOption: "Exibir Selecionados", // Command button to show selected records in data-viewer
            showAllOption: "Mostrar Todos", // Command button to show all the records in data-viewer
            clearSelectionOption: "Limpar Seleção", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Zoom para ser Seleccionado", // Command button to zoom map to selected records
            gridViewOption: "Visualização da Lista", // Command button to display list view
            mapViewOption: "Vista de Mapa", // Command button to display map view
            gridMapViewOption: "Exibição de Divisão", // Command button to display split view
            settingsBtnToolTip: "Opcções de Selecção", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Opções de visualização", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Pesquisar esta camada", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Actualizar", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "Todas as selecções e alterações não guardadas serão discartadas", // Appears when user wants to do manual refresh
            signInOption: "Iniciar sessão" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "Não existem relatórios disponíveis", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Anexos", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Por favor introduza um número inteiro ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Por favor introduza um número inteiro", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Por favor introduza um número", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Por favor introduza um número", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Por favor introduza um valor", // Shown when user enters invalid string value
            invalidDate: "Por favor introduza uma data válida", // Shown when user enters invalid date value
            invalidNumericRange: "Por favor introduza um valor entre ${minValue} e ${maxValue}", // Shown when user enters value which is out of range
            moreInfolink: "Ligação", // Shown when value in field contains only URL.
            commentsText: "Comentários", // Appears when comments are available for display in details tab
            noCommentsAvailable: "Não existem comentários disponíveis", // Appears when no comments are available
            noFeatureGeometry: "Elemento não pode ser exibido" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "Não existe configuração definida" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "Nenhum resultado encontrado" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "Ver mais detalhes para o elemento activo", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "Visualizar mapas", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Aumentar Zoom", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Reduzir zoom" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "Terminou sessão com sucesso", // Appears when user is successfully signed-out from application
            reSignInMessage: "Clique aqui para iniciar sessão" // Appears when user is signed-out from application and wants to sign-in again
        },
        preview: {
            section1: "Gestir Crowdsource, um modelo de grupo de companhia para <a href=\'http://solutions.arcgis.com/local-government/help/crowdsource-reporter/\' target=\'_blank\'>Relatório Crowdsource</a>, é um modelo de aplicação de grupo de resposta (desktop e serviços de tablet) que permite utilizadores dentro de uma organização reverem problemas/observações submetidas através da aplicação de Gestão.", // Appears when preview page is loaded
            section2: "A aplicação apresenta um ou mais mapas para os utilizadores avaliarem um problema ou observação. Os utilizadores podem procurar por padrões e clusters, rever detalhes de problemas, status de actualização, e atribuir responsabilidades.", // Appears when preview page is loaded
            section3: "O código fonte da aplicação pode ser descarregado para mais configurações. Esta configuração adicional da aplicação pode ser aplicada de volta a um item de aplicação web configurável ArcGIS Online ou alojada no seu próprio servidor web.<br /> Para mais informação sobre como configurar esta aplicação, consulte a documentação <a href=\'http://solutions.arcgis.com/local-government/help/crowdsource-manager/\' target=\'_blank\'>Gestor Crowdsource</a> ." // Appears when preview page is loaded
        }
    })
);