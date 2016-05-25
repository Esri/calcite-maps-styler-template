define({
  root: {
    // TODO Remove after beta
    betaMessage: {
      title: 'This is a beta release of Story Map Crowdsource',
      messageParagraphs: [
        'A beta release means that some features of this app are not in their final form. In most cases, stories created with this beta version of the app will simply continue to work when the final version is released.',
        'If a Crowdsource story is modified outside the Builder, however, there is a possibility it may not work with the final version of the app. For more information please read the FAQ section of the Help.'
      ]
    },
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
      defaultTitle: 'Add your contribution',
      defaultForm: {
        name: {
          label: 'Add a title',
          attribute: 'title',
          placeholder: 'Enter a title'
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
        },
        termsAndConditions: {
          legal: 'You warrant and represent that (1) you possess all rights, title, and ownership in the photos to be shared up to this site, and grant Esri, and its contractors the nonexclusive, royalty free right to use, copy, store, cache, host, prepare derivative works, reproduce, publicly display and perform, redistribute, rebroadcast, and retransmit the shared photo as part of this service, and (2) your sharing of photos and any associated geolocational information will not infringe or misappropriate any third party’s proprietary rights or rights of privacy or publicity. Sharing photos that could be deemed defamatory, obscene, pornographic, excessively violent, or to encourage unlawful activities are strictly prohibited.'
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
            'Story Map Crowdsource is an ArcGIS web application designed to collect photos and captions, on a topic you specify, from anyone and display them on a map. The app is easy to use and configure, and can be used in a web browser on laptop and desktop computers, mobile phones, and tablets. Contributors can log in with their Facebook or Google account or with an ArcGIS account if they have one.',
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
          title: 'Configuration',
          paragraphs: [
            'You can create your own unique Crowdsource story using the available configuration options. Click <% settings %> in the Builder header and explore ways to change the layout, cover image, title, logo and sharing links, whether new submissions must be approved before they appear on the map, and more. To return to the cover page from the map, click the title in the header bar.',
            'You can also set the <% homeMap %>, which is also the area of the map that is shown when your story loads. Just navigate the map to the area you want to use and press the "Update Home Map View" button (next to the map navigation controls) to store the current map view as the home view.'
          ],
          bold: {
            settings: 'Settings',
            homeMap: 'home map view'
          }
        },
        {
          title: 'Reviewing Contributions',
          paragraphs: [
            'Having contributions appear immediately on the map is the best way to encourage and reward your contributors. However, if you\'re concerned about objectionable content, you can choose to review and approve submissions first.',
            'To prevent content from appearing on the map before it is reviewed go to <% settings %> > <% contributions %> and choose to <% afterReview %>. When using this option new photos will be visible only to you until you approve them for display on the map.',
            'To review new contributions go to the map in Crowdsource Builder and select <% newContributions %> in the header. Then click the map to view a contribution and choose <% approve %> or <% reject %>. You can change which contributions are shown on the map by choosing All, New, Approved, or Rejected in the header. It is possible to change your decision on any contribution by clicking it on the map and updating its approval status.'
          ],
          bold: {
            settings: 'Settings',
            contributions: 'Contributions',
            afterReview: 'Show contributions: After review',
            newContributions: 'Review: New Contributions',
            approve: 'Approve',
            reject: 'Reject'
          }
        },
        {
          title: 'FAQ',
          questions: [
            {
              question: 'Will a Crowdsource story created with the beta version of the app continue to work when the final version is released?',
              response: 'Yes it will work, but there are two possible exceptions: 1) If you add layers to your beta Crowdsource story\'s web map (which can only be done outside the Builder), those layers may stop working or their symbols may change after the final release. To avoid this situation you can convert any supporting layers to feature layers before adding them to your map and use simple symbols. 2) There is also a possibility that the data model for the crowdsource layer may change. If this occurs, we intend to provide a workflow or tool to update your layer to the new data model.'
            },
            {
              question: 'Can I add other layers to my Crowdsource story\'s map?',
              response: 'Yes, you can add other layers to the map for context, but first read the previous question for important information about doing this with the beta release of Story Map Crowdsource. Open your story\'s <% map %>, add layers, and save your changes. The next time you load your story you will see the new layers. Be careful not to delete or modify the contributions layer in your map or your Crowdsource story may stop working properly.'
            },
            {
              question: 'Where are are the photos stored?',
              response: 'Submitted photos are resampled to an appropriate size and stored in your ArcGIS account (as feature service attachments). Images uploaded by you in the Builder for the cover image and logo are stored as item resources with your story map application item.'
            },
            {
              question: 'Do people need an ArcGIS account to contribute to my Crowdsource story?',
              response: 'Yes, but contributors can log in to ArcGIS Online using their <% facebook %> or <% google %> account. Logging in with one of these social services will create an ArcGIS public account for the contributor.'
            },
            {
              question: 'Can I create a Crowdsource story using my ArcGIS Online public account?',
              response: 'No, since Story Map Crowdsource uses feature service attachments to store the contributed images only Organizational Accounts are supported at this time.'
            },
            {
              question: 'How else can I customize a Crowdsource story?',
              response: 'If the available configuration options do not meet your needs, or if you wish to host the application on your own web server, the application source code is available. To download the most recent version visit the <% github %>.'
            },
            {
              question: 'Will my Crowdsource story consume credits?',
              response: 'A Crowdsource story hosted on ArcGIS Online will consume a small amount of credits each month due to the storage of photos and data in a feature service. A typical story with several hundred photos will cost much less than US$1 per month. See more information about <% agoCredits %>.'
            }
          ],
          bold: {
            facebook: 'Facebook',
            google: 'Google'
          },
          links: {
            map: 'map',
            agoCredits: 'ArcGIS Online service credits',
            github: 'GitHub project page'
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
          extra: {
            tweetLength: 'Estimated length',
            tweetLengthWarning: 'Your tweet may be too long. Be sure to test it using the Twitter button in the header.'
          },
          fields: {
            includeSharing: {
              label: 'Sharing buttons',
              optionLabels: {
                include: 'Display sharing buttons'
              }
            },
            twitterText: {
              label: 'Tweet',
              tooltip: 'This message will be suggested to readers when they share your story on Twitter, but they can change it. A short link to your story will be added to the end of the tweet.',
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
              tooltip: 'This controls when new contributions appear on the map. "Immediately" shows contributions right away while "After review" requires you to approve or reject each contribution before it is visible to anyone else. See the Help for more information',
              optionLabels: {
                'new': 'Immediately',
                'approved': 'After review'
              }
            },
            loginOptions: {
              label: 'Participants can sign in with',
              attribute: 'sign-in option',
              optionLabels: {
                arcgis: 'ArcGIS',
                facebook: 'Facebook',
                google: 'Google'
              }
            },
            participateButton: {
              label: 'Participate Button Label',
              placeholder: 'Enter label'
            },
            termsAndConditions: {
              label: 'Terms and Conditions',
              placeholder: 'Enter terms',
              tooltip: 'These are the terms and conditions your participants must accept before they can add their contributions to this story.'
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
        'public': 'Public'
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
        notAuthorizedCreateNew: 'To create a Crowdsource story you must use an ArcGIS Subscription Account with publishing privileges. If you are using a Subscription Account, contact your ArcGIS administrator to request additional privileges. If you are using an ArcGIS Public Account, <a href="http://www.arcgis.com/features/plans/pricing.html" target="-blank">upgrade</a> to a subscription or start a <a href="http://www.arcgis.com/features/free-trial.html" target="-blank">free trial</a>.',
        notAuthorizedEdit: 'You are not authorized to edit this story. If you are not the owner, make sure you have been <a href="http://blogs.esri.com/esri/arcgis/2015/07/14/enable-colleagues-to-update-your-maps-and-apps/" target="-blank">given edit permissions</a> by the owner. You must also have access to edit items and publish new hosted feature services in your organization. Contact your ArcGIS Online organization administrator to request these privileges.',
        crowdsourceLayerNotFound: 'Could not find or load the crowdsource map layer correctly. Make sure you have permission to view the feature service.',
        builderNotSSL: 'This Crowdsource story requires the use of a secure (https) connection to ensure your audience can securely log in and contribute their photos. Make sure your server supports an https connection at this same URL. Others attempting to access your story over http will be redirected to a secure connection, if possible.'
      },
      shareItems: {
        notShared: 'The following item(s) could not be shared'
      },
      saving: {
        checkInternet: 'Your story could not be saved. Check your internet connection and reload the page to try again.',
        unknown: 'Your story could not be saved. Reload the page to try again.'
      },
      scratchCreation: {
        unknown: 'Could not create the items required for your story. Refresh the page to try again.'
      }
    },
    validations: {
      waitMessage: 'Checking...',
      arcgis: {
        naming: {
          arcgisItemName: 'The <% attribute %> must not contain < or >.',
          arcgisServiceNameFormat: 'The <% attribute %> must contain only contain letters, numbers, and underscores and cannot begin with a number.'
        },
        portal: {
          unableToCheckName: 'Unable to check if the name is available. Please try again.',
          nameNotString: 'Name must be normal text',
          nameNotAvailableFS: 'The name you have chosen for your layer is not available. Please choose a different name.'
        }
      }
    }
  }
});
