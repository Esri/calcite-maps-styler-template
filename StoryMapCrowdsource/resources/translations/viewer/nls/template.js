define({
  root: {
    loading: {
      initializing: 'Loading story',
      map: 'Loading map'
    },
    common: {
      or: 'or',
      appNamePrepend: 'Story Map',
      appName: 'Crowdsource',
      buttons: {
        save: 'Save',
        saving: 'Saving',
        close: 'Close'
      }
    },
    banner: {
      buttons: {
        edit: 'Edit Story',
        hide: 'Hide'
      }
    },
    sharing: {
      buttonTitleAttr: {
        facebook: 'Share on Facebook',
        twitter: 'Share on Twitter',
        link: 'Get embed code or copy a short link'
      },
      link: {
        title: 'Share',
        copied: 'Copied',
        linkHeader: 'Link to story',
        linkHelper: 'Share this story through email or social media with the link below.',
        copyShortLink: 'Copy short link',
        showShortLink: 'Show short link',
        copyFullLink: 'Copy full URL',
        showFullLink: 'Show full link',
        embedSizeHelper: 'Size (width/height)',
        embedCodeHeader: 'Embed in website',
        embedCodeHelper: 'Use the following HTML code to embed the story in a web page.',
        copyEmbedCode: 'Copy embed code'
      }
    },
    layouts: {
      stacked: {
        changeView: {
          mapView: 'View Map',
          galleryView: 'View Gallery'
        }
      }
    },
    mobile: {
      bottomNav: {
        home: 'Home',
        map: 'Map',
        gallery: 'Gallery',
        participate: 'Participate'
      }
    },
    forms: {
      select: {
        noDefaultSelection: 'Please choose an option...'
      },
      photo: {
        loading: 'Loading Photo',
        resizing: 'Resizing Photo'
      }
    },
    map: {
      controls: {
        homeButton: 'Go to home location'
      }
    },
    selectedShares: {
      enlargePhotoButton: 'View Larger',
      review: {
        title: 'Review Item',
        options: {
          approve: 'Approve',
          reject: 'Reject'
        }
      }
    },
    contribute: {
      login: {
        title: 'Sign In',
        services: {
          arcgis: 'Sign in with ArcGIS',
          facebook: 'Sign in with Facebook',
          google: 'Sign in with Google',
          guest: 'Continue as Guest'
        },
        loginDescription: 'To participate, please use one of the options above.',
        loginDescriptionSingle: 'To participate, please use the option above.'
      },
      form: {
        photo: {
          pickFile: 'Click to pick a file',
          choosePhoto: 'Upload a Photo',
          selectNew: 'Use a different photo',
          photoTooSmall: 'Your photo is too small. The smallest side must be at least'
        },
        location: {
          gettingLocation: 'Locating',
          locate: 'Locate Me',
          findOnMap: 'Find on Map',
          findOnMapTooltip: 'Click on the map or drag this point to refine your location.',
          saveLocation: 'Save Location',
          search: 'Search',
          longitude: 'Longitude',
          latitude: 'Latitude',
          nullIsland: 'Null Island',
          photoLocation: 'Do you want to use the location where your photo was taken?'
        },
        termsAndConditions: {
          buttonShow: 'Show terms and conditions',
          buttonHide: 'Hide terms and conditions'
        },
        save: 'Accept Terms and Submit',
        saving: 'Submitting',
        requiredWarning: 'Required Fields',
        changedCloseWarning: 'Are you sure you want to close? Your changes will be lost.'
      },
      messages: {
        contributionShownAfterReview: {
          title: 'Thanks for participating.',
          body: 'Your contribution has been submitted and will appear on the map after it has been reviewed and approved. Please check back later.',
          confirmBtn: 'Ok'
        },
        contributionError: {
          title: 'Attention',
          body: 'An unknown error has occured and your contribution could not be saved. Refresh your browser and try again.',
          confirmBtn: 'Ok'
        }
      }
    },
    validations: {
      fix: 'Fix it!',
      basic: {
        noValue: 'No value was provided',
        required: 'A <% attribute %> is required.',
        regex: 'The <% attribute %> does not match the match the required pattern.',
        max: {
          string: 'The <% attribute %> cannot contain more than <% max %> characters.',
          number: 'The <% attribute %> must be less than or equal to <% max %>.'
        },
        acceptedTerms: 'You must accept the terms and conditions before sharing.',
        https: 'The <% attribute %> must be loaded over a secure connection. The URL must start with "https://" or "//" to load correctly.',
        imageUrl: 'The <% attribute %> must be a valid image URL. In most cases the URL will end with ".jpg", ".gif"., or ".png" extension.'
      },
      pattern: {
        commaSeparated: 'The <% attribute %> cannot contain any spaces.',
        noNewLine: 'The <% attribute %> cannot contain line breaks.'
      },
      arcgis: {
        basic: {
          arcgisSupportedHtml: 'The <% attribute %> contains unsupported HTML.'
        },
        location: {
          notValid: 'The location you entered is not valid, please try again.',
          noResults: 'The location you searched for cannot be found. Please try again and be as specifc as you can.'
        }
      }
    },
    errors: {
      actionsBtns: {
        startFromScratch: 'Start building a new Crowdsource Story'
      },
      loading: {
        heading: 'Attention',
        invalidConfig: 'Invalid configuration',
        inaccessibleApp: 'Web Mapping Application does not exist or is inaccessible.',
				invalidConfigNoApp: 'A valid web mapping application ID is not specified in the application\'s index.html file or URL. Correct the appid and try again.',
				unspecifiedConfigOwner: 'Authorized owner hasn\'t been configured.',
				invalidConfigOwner: 'Story owner is not authorized.',
				createMap: 'Unable to create map',
        notAuthorizedApp: 'You are not authorized to access this story',
        notAuthorizedMap: 'You are not authorized to access the web map in this story',
        notAuthorizedLayers: 'You are not authorized to some or all the layers in the web map',
				upgradeBrowser: '<a href="http://browsehappy.com/" target="_blank">Please update your browser</a>.',
				mapLoadingFail: 'Something went wrong, the map did not load correctly.',
        appLoadingFail: 'Something went wrong, the app did not load correctly.',
        crowdsourceLayerNotFound: 'Something went wrong, the story could not find or load the crowdsource map layer correctly.'
      },
      sharing: {
        localhost: 'URLs with "localhost" cannot be shared.'
      }
    }
  }
});
