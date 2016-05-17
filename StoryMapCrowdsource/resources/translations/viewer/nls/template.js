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
          buttonHide: 'Hide terms and conditions',
          legal: 'You warrant and represent that (1) you possess all rights, title, and ownership in the photos to be shared up to this site, and grant Esri, and its contractors the nonexclusive, royalty free right to use, copy, store, cache, host, prepare derivative works, reproduce, publicly display and perform, redistribute, rebroadcast, and retransmit the shared photo as part of this service, and (2) your sharing of photos and any associated geolocational information will not infringe or misappropriate any third party’s proprietary rights or rights of privacy or publicity. Sharing photos that could be deemed defamatory, obscene, pornographic, excessively violent, or to encourage unlawful activities are strictly prohibited.'
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
        required: 'The <% attribute %> field is required.',
        regex: 'The <% attribute %> field does not match the match the required pattern.',
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
				invalidConfigNoApp: 'Web Mapping Application identifier not specified in index.html or url. If you have already specified the application id, make sure you are using a valid id. If you have not created a Crowdsource story yet, click the button below.',
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
        localhost: 'URL\'s with "localhost" cannot be shared.'
      }
    }
  }
});
