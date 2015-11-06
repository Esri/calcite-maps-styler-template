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
        map: {  // Map, feature layer, and comments table loading and checking
            error: "Kan ikke opprette kart",
            layerLoad: "Kartet ble ikke fullstendig innlastet",
            missingItemsFeatureLayer: "Konfigurer programmet til å bruke et geoobjektslag"
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "Vis meny",
            signInButton: "Logg på",
            signInButtonTooltip: "Logg på",
            signOutButton: "Logg ut",
            signOutButtonTooltip: "Logg av",
            helpButtonLabel: "Hjelp",
            helpButtonTooltip: "Lær mer",
            gotoListViewLabel: "Listevisning",
            gotoListViewTooltip: "Gå til listevisning", // Go to List view tooltip text
            gotoMapViewLabel: "Kartvisning",
            gotoMapViewTooltip: "Gå til kartvisning" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "Lukk"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "Logg på med Facebook",
            signIntoGooglePlusTooltip: "Logg på med Google+",
            signIntoTwitterTooltip: "Logg på med Twitter",
            signOutOfFacebookTooltip: "Logg av Facebook",
            signOutOfGooglePlusTooltip: "Logg av Google+",
            signOutOfTwitterTooltip: "Logg av Twitter"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (valgfritt)",
            requiredFormItemFlag: " (obligatorisk)",
            unsettableRequiredField: "Et obligatorisk felt er verken initialisert eller i skjemaet",
            countOfRemainingCharactersTooltip: "Gjenstående tegn",
            cancelButtonLabel: "Avbryt",
            submitButtonLabel: "Send inn"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "Stem på dette elementet",
            commentButtonTooltip: "Legg til en kommentar",
            gotoMapViewTooltip: "Gå til kartvisning",
            galleryButtonTooltip: "Se vedlagte filer",
            commentsListHeading: "Kommentarer",
            noCommentsPlaceholder: "Ingen kommentarer"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "Filtrer listen etter kart",
            linkToMapViewOptionTooltip: "Vis elementer som er tilgjengelige i gjeldende kart",
            likesForThisItemTooltip: "Stem på dette elementet"
        }
    })
);
