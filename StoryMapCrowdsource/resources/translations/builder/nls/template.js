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
          placeholder: 'Enter cover message'
        },
        exploreButton: {
          label: 'Explore Map Button',
          placeholder: 'Enter label'
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
    review: {
      selection: {
        header: 'Review',
        options: {
          'all': 'All Contributions',
          'new': 'New Contributions',
          'approved': 'Approved Contributions',
          'rejected': 'Rejected Contributions'
        }
      },
      selectedShare: {
        header: 'Review'
      }
    },
    fromScratchMessage: {
      saving: 'Launching Crowdsource Story Builder',
      layerNameInWebmap: 'Crowdsource Layer (DO NOT REMOVE)'
    },
    help: {
      title: 'Help',
      sections: [
        {
          title: 'Introduction',
          paragraphs: [
            'Story Map Crowdsource is an ArcGIS web application designed to collect photos and short stories on a topic you specify from anyone and display them on a map. The app is easy to use and configure and can be used in any web browser and on most devices, including smartphones and tablets. Contributors can log in with their Facebook or Google account or with an ArcGIS account if they have one.',
            'To see examples of Crowdsource stories that other authors are creating, visit the <% galleryLink %>. You can also follow us on Twitter at <% twitterFollowLink %>.',
            'We would love to hear from you! Whether you have a question, want to request a new feature, or think you\'ve found a bug, please visit the <% geonet %>.'
          ],
          links: {
            galleryLink: 'gallery on the Story Maps website',
            twitterFollowLink: '@EsriStoryMaps',
            geonet: 'Story Maps space on GeoNet'
          }
        },
        {
          title: 'Configuration and Customization',
          paragraphs: [
            'You can create your own unique Crowdsource story using the available configuration options. Click <% settings %> in the builder header and explore ways to change the layout, cover image, title, logo and sharing links, whether new submissions must be approved before they appear on the map, and more.',
            'You can also set the <% homeMap %>, which is also the area of the map that is shown when your story loads. Just navigate the map to the area you want to use and press the "Update Home Map View" button (next to the map navigation controls) to store the current map view as the home view.',
            'If the available configuration options do not meet your needs or you wish to host the application on your own web server the application source code is available for developers to customize. To download the most recent version of the code and learn more about how to use it, visit its <% github %>.'
          ],
          bold: {
            settings: 'Settings',
            homeMap: 'home map view'
          },
          links: {
            github: 'GitHub project page'
          }
        },
        {
          title: 'FAQ',
          questions: [
            {
              question: 'Where are are the photos stored?',
              response: 'Submitted photos are resampled to an appropriate size and stored in your ArcGIS account as feature service attachments. Images uploaded by you in the builder for the cover image and logo are stored as item resources with your story map application item.'
            },
            {
              question: 'Can I create a Crowdsource story using my ArcGIS Online public account?',
              response: 'No, since Story Map Crowdsource uses feature service attachments to store the contributed images only Organizational Accounts are supported at this time.'
            },
            {
              question: 'Do people need to have an ArcGIS account to contribute to my Crowdsource story?',
              response: 'Yes, but contributors can log in to ArcGIS Online using their Facebook or Google account. Logging in with one of these social services will create a <% publicAccount %> for the contributor.'
            },
            {
              question: 'Can I add other layers to the map?',
              response: 'Yes, you can add other layers to your map for context. Open your story\'s <% map %>, add layers, and save your changes. The next time you load your story you will see the new layers. Be careful not to delete or modify the contributions layer in your map or your Crowdsource story may stop working properly.'
            },
            {
              question: 'Will my Crowdsource story consume credits?',
              response: 'Yes, a Crowdsource story hosted on ArcGIS Online will consume a small amount of credits each month due to the storage of photos and data in a feature service. A typical story with several hundred photos will cost much less than US$1 per month. See more information about <% agoCredits %>.'
            }
          ],
          bold: {
            publicAccount: 'public account'
          },
          links: {
            map: 'map',
            agoCredits: 'ArcGIS Online service credits'
          }
        }
      ]
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
              label: 'Logo image URL',
              placeholder: 'https://www.example.org/your_logo.png',
              attribute: 'logo'
            },
            logoUpload: {
              label: 'Upload a logo',
              placeholder: 'Drag and Drop',
              attribute: 'logo'
            },
            logoLink: {
              label: 'Logo click-through link',
              placeholder: 'https://www.example.com'
            },
            bannerTitle: {
              label: 'Header Title',
              placeholder: 'Enter title'
            }
          }
        },
        socialSharing: {
          title: 'Social Sharing',
          fields: {
            includeSharing: {
              label: 'Sharing buttons',
              optionLabels: {
                include: 'Display sharing buttons'
              }
            },
            twitterText: {
              label: 'Tweet',
              tooltip: 'A link to your story will be added to the end of your tweet.',
              placeholder: 'Enter tweet text',
              attribute: 'tweet text field'
            },
            twitterRelated: {
              label: '"Who to follow" suggestions',
              tooltip: 'Suggest additional Twitter usernames related to the Tweet as comma-separated values. Twitter may suggest these accounts to follow after the posted retweet.',
              placeholder: 'Enter Twitter handles',
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
        },
        contribute: {
          title: 'Contributions',
          fields: {
            allowParticipation: {
              label: 'Contributions',
              optionLabels: {
                accept: 'Accept new contributions'
              }
            },
            showNewFeatures: {
              label: 'Show contributions',
              optionLabels: {
                'new': 'Immediately',
                'approved': 'After review'
              }
            },
            loginOptions: {
              label: 'Participants can sign in with',
              optionLabels: {
                arcgis: 'ArcGIS',
                facebook: 'Facebook',
                google: 'Google'
              }
            },
            participateButton: {
              label: 'Participate Button Label',
              placeholder: 'Enter label'
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
            placeholder: 'Enter map name'
          },
          folderSelection: {
            label: 'Folder',
            rootFolder: 'Home'
          },
          featureServiceName: {
            label: 'Layer Name',
            placeholder: 'Enter layer name'
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
            description: 'Switch between map-only and photos-only views of your Crowdsource Story.'
          },
          sidePanel: {
            name: 'Side Panel',
            description: 'Explore the map and see photo thumbnails at the same time. The panel updates as the map is moved to show only photos in the current map view.'
          }
        }
      }
    },
    appDataPlaceholderText: {
      intro: {
        subtitle: 'Add a cover message...'
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
