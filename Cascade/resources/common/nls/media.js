define({
  root: {
    mediaPicker: {
      browseToggle: {
        arcGIS: "ArcGIS",
        flickr: "Flickr",
        googlePhotos: "Google Photos",
        facebook: "Facebook",
        urls: "URLs"
      },
      browsePanel: {
        providers: {
          albums: "albums",
          searchingFor: "Searching for",
          albumsOf: "Albums of", // Context: when displaying "Albums of [user]". Possessive.
          noAlbums: "No public album found",
          noPhotosFound: "No photos matched your search. Please try again.",
          noItemsFound: "No items matched your search. Please try again.",
          cantRetrieveImages: "Unable to retrieve images",
          googlePhotos: {
            userNotFound: "Account not found"
          },
          flickr: {
            userNotFound: "User not found",
            photostream: "Photostream"
          }
        },
        sidePanel: {
          googlePhotos: {
            placeholder: "Email or Picasa/Google+ ID"
          },
          flickr: {
            // tabs for search type
            accountSearchType: "Flickr Account",
            textSearchType: "All Flickr",
            // placeholders for text search inputs
            userSearchPlaceholder: "Search for account",
            userTextSearchPlaceholder: "Search this account for photos",
            textSearchPlaceholder: "Search for photos",
            // error/warning messages
            cannotFindUser: "Cannot find user", // Context: "Cannot find user 'helloworld'. Did you mean 'hello world'?"
            noUserPhotos: "does not have any public photos.", // Context: "'helloworld' does not have any public photos. Did you mean 'hello world'?"
            didYouMean: "Did you mean", // Context: "'helloworld' does not have any public photos. Did you mean 'hello world'?"
            generalUserError: "Something went wrong when searching for user",
            // licenses
            licenses: {
              public: 'Public Domain',
              commercial: 'OK for Commercial Use',
              nonCommercial: 'OK for Non-Commercial Use',
              reserved: 'All Rights Reserved',
              any: 'Any License'
            }
          },
          agol: {
            searchLocation: {
              thisStory: "This Story",
              agol: "ArcGIS Online",
              myOrg: "My Organization",
              myContent: "My Content"
            },
            createContent: {
              or: "OR",
              dragAndDrop: "Drop an image here",
              uploadImage: "Upload an image",
              useDifferent: "Use a different photo"
            },
            filterAndSort: {
              webmap: "Web Map",
              webscene: "Web Scene",
              image: "Image",
              date: "Date",
              title: "Title",
              search: "Search by keyword or ID"
            }
          }
        }
      }
    }
  },
  "ar": 1,
  "cs": 1,
  "da": 1,
  "de": 1,
  "el": 1,
  "es": 1,
  "et": 1,
  "fi": 1,
  "fr": 1,
  "he": 1,
  "hr": 1,
  "it": 1,
  "ja": 1,
  "ko": 1,
  "lt": 1,
  "lv": 1,
  "nl": 1,
  "nb": 1,
  "pl": 1,
  "pt-br": 1,
  "pt-pt": 1,
  "ro": 1,
  "ru": 1,
  "sr": 1,
  "sv": 1,
  "th": 1,
  "tr": 1,
  "vi": 1,
  "zh-cn": 1,
  "zh-hk": 1,
  "zh-tw": 1
});
