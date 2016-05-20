define({
  root: {
    loading: {
      initializing: 'Loading story',
      map: 'Loading map'
    },
    common: {
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
        linkHelper: 'Share this story through email or another services with the link below.',
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
        gallery: 'Gallery'
      }
    },
    forms: {
      select: {
        noDefaultSelection: 'Please choose an option...'
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
        signInWith: 'Sign in with',
        services: {
          arcgis: 'ArcGIS',
          facebook: 'Facebook',
          google: 'Google'
        },
        loginDescription: 'Before participating, you must first sign in with one of the services above.'
      },
      form: {
        photo: {
          pickFile: 'Pick a File',
          choosePhoto: 'Upload a Photo',
          selectNew: 'Use a different photo'
        },
        location: {
          gettingLocatingAlt: 'Finding your location',
          search: 'Search'
        },
        termsAndConditions: {
          buttonShow: 'Show terms and conditions',
          buttonHide: 'Hide terms and conditions'
        },
        save: 'Accept Terms and Save',
        saving: 'Saving',
        requiredWarning: 'Required Fields'
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
        commaSeparated: 'The <% attribute %> cannot contain any spaces.'
      },
      arcgis: {
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
        heading: 'An Error Has Occured',
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
