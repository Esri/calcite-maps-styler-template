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
            error: "Karttaa ei voi luoda",
            layerLoad: "Kartan lataus kokonaan ei onnistu",
            missingItemsFeatureLayer: "Käytä kohdekarttatasoa määrittämällä sovellus"
        },
        sidebar_header: {  // Top panel of right-side display; contains social media sign-in, help button, title
            menuButtonTooltip: "Näytä valikko",
            signInButton: "Kirjaudu sisään",
            signInButtonTooltip: "Kirjaudu sisään",
            signOutButton: "Kirjaudu ulos",
            signOutButtonTooltip: "Kirjaudu ulos",
            helpButtonLabel: "Ohje",
            helpButtonTooltip: "Lisätietoja",
            gotoListViewLabel: "Luettelonäkymä",
            gotoListViewTooltip: "Siirry luettelonäkymään", // Go to List view tooltip text
            gotoMapViewLabel: "Karttanäkymä",
            gotoMapViewTooltip: "Siirry karttanäkymään" // Tooltip for map-it icon in list header
        },
        popup_Close: {  // Close button for help and social-media-sign-in popup box
            closeButtonTooltip: "Tallennettu"
        },
        social_media: {  // Social media sign-in/out
            signIntoFacebookTooltip: "Kirjaudu sisään Facebook-tunnuksella",
            signIntoGooglePlusTooltip: "Kirjaudu sisään Google+-tunnuksella",
            signIntoTwitterTooltip: "Kirjaudu sisään Twitter-tunnuksella",
            signOutOfFacebookTooltip: "Kirjaudu ulos Facebookista",
            signOutOfGooglePlusTooltip: "Kirjaudu ulos Google+:sta",
            signOutOfTwitterTooltip: "Kirjaudu ulos Twitteristä"
        },
        dynamic_form: {  // General-purpose form; used to receive comment entry
            optionalFormItemFlag: " (valinnainen)",
            requiredFormItemFlag: " (pakollinen)",
            unsettableRequiredField: "Pakollista kenttää ei ole alustettu eikä sitä ole lomakkeessa",
            countOfRemainingCharactersTooltip: "Merkkiä jäljellä",
            cancelButtonLabel: "Peruuta",
            submitButtonLabel: "Lähetä"
        },
        item_details: {  // Detailed information about an item and a list of its comments
            likeButtonTooltip: "ääni tälle kohteelle",
            commentButtonTooltip: "Lisää kommentti",
            gotoMapViewTooltip: "Siirry karttanäkymään",
            galleryButtonTooltip: "Näytä liitetyt tiedostot",
            commentsListHeading: "Kommentit",
            noCommentsPlaceholder: "Ei kommentteja"
        },
        item_list: {  // List of feature layer items
            linkToMapViewOptionLabel: "Suodata luettelo kartan perusteella",
            linkToMapViewOptionTooltip: "Luettele kohteet, jotka näkyvät nykyisessä kartassa",
            likesForThisItemTooltip: "ääntä tälle kohteelle"
        }
    })
);
