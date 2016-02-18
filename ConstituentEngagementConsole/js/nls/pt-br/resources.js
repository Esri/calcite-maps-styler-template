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
            error: "Não foi possível criar o mapa" // Shown when error occurs while creation of map
        },
        main: {
            noGroup: "Nenhum grupo configurado" // Appears when no group is configured
        },
        webMapList: {
            owner: "Proprietário", // Appears in web-map list description panel when it is set to true
            created: "Data de criação", // Appears in web-map list description panel when it is set to true
            modified: "Data modificada", // Appears in web-map list description panel when it is set to true
            description: "Descrição", // Appears in web-map list description panel when it is set to true
            snippet: "Resumo", // Appears in web-map list description panel when it is set to true
            licenseInfo: "Restrições de uso e acesso", // Appears in web-map list description panel when it is set to true
            accessInformation: "Créditos", // Appears in web-map list description panel when it is set to true
            tags: "Tags", // Appears in web-map list description panel when it is set to true
            numViews: "Número de visualizações", // Appears in web-map list description panel when it is set to true
            avgRating: "Classificação", // Appears in web-map list description panel when it is set to true
            noWebMapInGroup: "O grupo configurado é inválido ou nenhum item ainda foi compartilhado com este grupo", // Appears when invalid group in configured or no web-map is available in that group
            infoBtnToolTip: "Informações do Mapa" // Display tool-tip on command button to display description of web-map
        },
        applicationHeader: {
            signOutOption: "Sair", // Command button to sign-out from the application
            pleaseSignInText: "Entrar", // Appears when user needs to sign-in into the application
            showSelectedOption: "Mostrar Selecionados", // Command button to show selected records in data-viewer
            showAllOption: "Mostrar Todos", // Command button to show all the records in data-viewer
            clearSelectionOption: "Limpar Seleção", // Command button to clear selected records in data-viewer
            zoomToSelectedOption: "Zoom para Selecionado", // Command button to zoom map to selected records
            gridViewOption: "Visualização da Lista", // Command button to display list view
            mapViewOption: "Visualização do Mapa", // Command button to display map view
            gridMapViewOption: "Dividir Visualização", // Command button to display split view
            settingsBtnToolTip: "Opções de seleção", // Display tool-tip on command button to open a list of settings options
            viewModeBtnToolTip: "Opções de visualização", // Display tool-tip on command button to open a list of view options
            searchModeBtnToolTip: "Pesquisar esta camada", // Display tool-tip on command button to open a dialog box for finding a feature
            manualRefreshBtnToolTip: "Atualizar", // Display tool-tip on command button to manually refresh the selected operational layer
            confirmManualRefeshText: "Todas as seleções e alterações não salvas serão descartadas", // Appears when user wants to do manual refresh
            signInOption: "Acessar" // Appears when user has not signed in
        },
        dataviewer: {
            noIssuesReported: "Nenhum relatório disponível", // Appears when no issues are available in current extent
            photoAttachmentHeader: "Anexos", // Appears when attachments are available for display in details tab
            invalidSmallNumber: "Digite um número inteiro ", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -32768 and 32767)
            invalidNumber: "Digite um número inteiro", // Shown when invalid integer value is entered while editing in data-viewer (valid integer value between -2147483648 and 2147483647)
            invalidFloat: "Digite um número", // Shown when invalid floating value is entered while editing in data-viewer (floating point value between -3.4E38 and 1.2E38)
            invalidDouble: "Digite um número", // Shown when invalid double value is entered while editing in data-viewer (double value between -2.2E308 and 1.8E308)
            invalidString: "Digite um valor", // Shown when user enters invalid string value
            invalidDate: "Digite uma data válida", // Shown when user enters invalid date value
            invalidNumericRange: "Digite um valor entre ${minValue} e ${maxValue}", // Shown when user enters value which is out of range
            moreInfolink: "Vincular", // Shown when value in field contains only URL.
            commentsText: "Comentários", // Appears when comments are available for display in details tab
            noCommentsAvailable: "Nenhum comentário disponível", // Appears when no comments are available
            noFeatureGeometry: "A feição não pode ser exibida" // Appears when user selects/activates a feature and geometry is available for that
        },
        config: {
            configNotDefined: "Nenhuma configuração definida" // Shown when there is an issue with config file
        },
        searchPanel: {
            noResultsFound: "Nenhum resultado encontrado" // Appears when user search for features and no feature is found
        },
        mapViewer: {
            detailsBtnToolTip: "Visualize mais detalhes para a feição ativa", // Display tool-tip on command button to view details of selected feature
            locationBtnToolTip: "Visualizar mapas", // Display tool-tip on command button to view map panel
            zoomInToolTip: "Mais Zoom", // Display tool-tip on command button to zoom in map
            zoomOutToolTip: "Menos Zoom" // Display tool-tip on command button to zoom out map
        },
        signOutPage: {
            signOutMessage: "Você saiu com sucesso", // Appears when user is successfully signed-out from application
            reSignInMessage: "Clique aqui para entrar" // Appears when user is signed-out from application and wants to sign-in again
        }
    })
);