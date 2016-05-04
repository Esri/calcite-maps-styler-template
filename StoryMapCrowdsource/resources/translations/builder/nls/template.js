define({
  root: {
    common: {
      appNameAppend: 'Builder',
      buttons: {
        next: 'Next'
      }
    },
    banner: {
      buttons: {
        help: 'Help',
        preview: 'View Live',
        share: 'Share',
        settings: 'Settings',
        save: 'Save',
        toggleNav: 'Toggle navigation'
      },
      hintText: {
        saved: 'Story saved',
        saving: 'Saving',
        leavingBeforeSave: 'You have unsaved changes in your story. If you leave now, your changes will be lost.'
      }
    },
    introSplash: {
      form: {
        title: {
          label: 'Title',
          placeholder: 'Enter title'
        },
        subtitle: {
          label: 'Subtitle',
          placeholder: 'Enter subtitle'
        },
        exploreButton: {
          label: 'Explore Map Button',
          placeholder: 'Enter explore button label'
        }
      }
    },
    contribute: {
      defaultTitle: 'Add your share',
      defaultForm: {
        name: {
          label: 'Add a title',
          attribute: 'title',
          placeholder: 'Name your share'
        },
        description: {
          label: 'Add a description',
          attribute: 'description',
          placeholder: 'Enter a description (200 words or fewer please)'
        },
        location: {
          label: 'Add a location',
          attribute: 'location',
          placeholder: 'Enter a location'
        },
        photo: {
          label: 'Add a photo',
          placeholder: 'Drag and Drop',
          attribute: 'photo'
        }
      }
    },
    fromScratchMessage: {
      saving: 'Creating Application Items',
      layerNameInWebmap: 'Crowdsource Layer (DO NOT REMOVE)'
    },
    settings: {
      title: 'Settings',
      panes: {
        header: {
          title: 'Header',
          fields: {
            logoType: {
              label: 'Logo',
              optionLabels: {
                esri: 'Esri logo',
                upload: 'Custom logo upload',
                url: 'Custom logo from URL',
                none: 'No logo'
              }
            },
            logoUrl: {
              label: 'Logo URL',
              placeholder: 'https://www.example.org/your_logo.png',
              attribute: 'logo'
            },
            logoUpload: {
              label: 'Upload a logo',
              placeholder: 'Drag and Drop',
              attribute: 'logo'
            },
            logoLink: {
              label: 'Logo link',
              placeholder: 'https://www.example.com'
            },
            bannerTitle: {
              label: 'Header Title',
              placeholder: 'Enter title'
            },
            participateButton: {
              label: 'Participate Button Label',
              placeholder: 'Enter label'
            }
          }
        },
        socialSharing: {
          title: 'Social Sharing',
          fields: {
            includeSharing: {
              label: 'Sharing buttons',
              optionLabels: {
                include: 'Display social sharing buttons in your story'
              }
            },
            twitterText: {
              label: 'Prepoulated tweet text',
              placeholder: 'Enter tweet text',
              attribute: 'tweet text field'
            },
            twitterHashtags: {
              label: 'Hashtags (comma seperated)',
              placeholder: 'Enter label',
              attribute: 'hashtags field'
            },
            twitterHandle: {
              label: 'Your twitter handle',
              placeholder: 'Enter twitter handle'
            },
            twitterRelated: {
              label: '"Who to follow" twitter accounts (comma seperated)',
              placeholder: 'Enter twitter handles',
              attribute: 'recommended accounts field'
            }
          }
        },
        introSplash: {
          title: 'Cover Page',
          fields: {
            backgroundImage: {
              label: 'Upload a background photo',
              placeholder: 'Drag and Drop',
              attribute: 'background photo'
            }
          }
        }
      }
    },
    shareApp: {
      title: 'Share your story',
      sharePermissions: {
        'private': 'Private',
        'organization': 'Organization',
        'public': 'Everyone'
      },
      socialize: {
        header: 'Socialize'
      }
    },
    settingsModals: {
      common: {
        advancedOptions: 'Advanced Options',
        welcome: 'Welcome to'
      },
      itemName: {
        header: 'What do you want to call your Crowdsource story?',
        advancedDescription: 'A few items will be created to support this story. If you wish to rename these items or save them in a specific folder you can do so below.',
        form: {
          appName: {
            label: 'Title',
            placeholder: 'Enter title'
          },
          mapName: {
            label: 'Map Name',
            placeholder: 'Enter name'
          },
          folderSelection: {
            label: 'Folder',
            rootFolder: 'Home'
          },
          featureServiceName: {
            label: 'Layer Name',
            placeholder: 'Enter name'
          }
        }
      },
      layout: {
        header: 'Which layout do you want to use?',
        headerHint: 'You can change the layout anytime from the settings dialog.',
        preview: 'View a live example',
        commonAltText: 'layout preview.',
        selection: {
          stacked: {
            name: 'Stacked',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, doloremque!'
          },
          sidePanel: {
            name: 'Side Panel',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, doloremque!'
          }
        }
      }
    },
    appDataPlaceholderText: {
      intro: {
        subtitle: 'Add your your subtitle here'
      },
      globals: {
        participateShort: 'Participate',
        participateLong: 'Share your experience',
        exploreText: 'Explore Map'
      }
    },
    itempageDefaults: {
      webmap: {
        titleAppend: 'web map'
      },
      featureService: {
        titleAppend: 'feature service'
      }
    },
    errors: {
      actionsBtns: {
        redirectToSecureConnection: 'Reload with a secure connection'
      },
      inlineEditing: {
        heading: 'Form Error'
      },
      loading: {
        notAuthorizedCreateNew: 'You are not authorized to create a Crowdsource story. An organizational account with privileges to create new items and publish features is required. Please contact your ArcGIS administrator for assistance.',
        notAuthorizedEdit: 'You are not authorized to edit this story. If you are not the owner, make sure you have been <a href="http://blogs.esri.com/esri/arcgis/2015/07/14/enable-colleagues-to-update-your-maps-and-apps/" target="-blank">given edit permissions</a> by the owner. You must also have access to edit items and publish new hosted feature services in your organization. Contact your ArcGIS Online organization administrator for more privileges.',
        crowdsourceLayerNotFound: 'Something went wrong, the app could not find or load the crowdsource map layer correctly. Make sure you have permission to view the feature service.',
        builderNotSSL: 'This Crowdsource story map requires the use of an https connection to make sure your audience can securely login and share their entry. Make sure your server supports an https connection at this same url. Viewers coming to your map will automatically be redirected to the secure version of the app.'
      },
      shareItems: {
        notShared: 'The following item(s) could not be shared'
      }
    },
    validations: {
      arcgis: {
        naming: {
          arcgisItemName: 'The <% attribute %> may not contain < or >.',
          arcgisServiceNameFormat: 'The <% attribute %> may contain only contain letters, numbers, and underscores.'
        },
        portal: {
          unableToCheckName: 'An unknown error occured and we are unable to check if the name is available. Please try again later.',
          nameNotString: 'Name must be normal text',
          nameNotAvailableFS: 'The name you have chosen for your layer is not available. Please choose a different name.'
        }
      }
    }
  }
});
