define({
  root: {
    // TODO Remove after beta
    betaMessage: {
      title: 'This is a beta release of Story Map Crowdsource',
      messageParagraphs: [
        'This version of Story Map Crowdsource has its core features completed and is stable. It is being made available as a beta release so the Story Maps Team can collect and incorporate feedback from you, the Esri community, prior to its initial release.',
        'Stories created with this beta version will continue to work with later releases unless you modify it or one of its components outside the Builder.',
        'Please read the Help for more information on how to use this app and where to submit feedback.'
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
        feedback: 'Feedback',
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
    header: {
      participateBtnDisabledTooltip: 'Close Settings panel to enable'
    },
    introSplash: {
      form: {
        title: {
          label: 'Title',
          placeholder: 'Enter title'
        },
        subtitle: {
          label: 'cover message',
          placeholder: 'Add a cover message...'
        },
        exploreButton: {
          label: 'map button label',
          placeholder: 'Enter label'
        }
      }
    },
    map: {
      editControls: {
        homeLocation: {
          tooltip: 'Save home location'
        }
      }
    },
    contribute: {
      defaultTitle: 'Add your contribution',
      defaultForm: {
        name: {
          label: 'Title',
          attribute: 'title',
          placeholder: 'Enter a title'
        },
        description: {
          label: 'Description',
          attribute: 'description',
          placeholder: 'Enter a description (200 words or fewer please)'
        },
        location: {
          label: 'Location',
          attribute: 'location',
          placeholder: 'Enter a location'
        },
        photo: {
          label: 'Photo',
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
      saving: 'Launching Crowdsource Builder',
      layerNameInWebmap: 'Crowdsource Layer (DO NOT REMOVE)'
    },
    help: {
      title: 'Help',
      sections: [
        {
          title: 'Introduction',
          paragraphs: [
            'Story Map Crowdsource (beta) is an ArcGIS web application designed to collect photos and captions from anyone and display them on a map. The app is easy to use and configure and can be used in a web browser on laptop and desktop computers, mobile phones, and tablets. Contributors can sign in with their Facebook, Google, or ArcGIS account or participate as an anonymous guest.',
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
            'To create your own unique Crowdsource story use the Builder\'s configuration options. Click <% settings %> in the Builder toolbar to change the cover image, title, logo and sharing options, and more.',
            'To specify the geographic area that your participants will see when they load your story, pan and zoom the map to the desired location and then click the blue <% saveHomeLocation %> button next to the map navigation controls.',
            'Configuration changes are <% autosaved %> as you make them. Modifications to text fields can be undone using your browser\'s undo command.',
            'In this beta release, authors are limited to the simple form provided. In a future release, we will include a form builder which allows you to edit the questions that you ask your participants. Until then, you can modify the form labels by following this <% formEditBlog %>.',
            'Tip: to return to the <% coverPage %> from the map, click the title bar.'
          ],
          links: {
            formEditBlog: 'blog post'
          },
          bold: {
            settings: 'Settings',
            saveHomeLocation: 'Save home location',
            autosaved: 'autosaved',
            coverPage: 'cover page'
          }
        },
        {
          title: 'Reviewing Contributions',
          paragraphs: [
            'Showing contributions on the map immediately after they are submitted is the best way to encourage and reward your contributors. However, if you\'re concerned about objectionable content, or you want to curate the contributions and select the ones that are shown, you can choose to review and approve submissions first.',
            'To prevent content from appearing on the map before it is reviewed go to <% settings %> > <% contributions %> and choose to <% afterReview %>. When using this option new photos will be visible only to you until you approve them for display on the map.',
            'To review new contributions go to the map in Crowdsource Builder and select <% newContributions %> in the Builder toolbar. Then click the map to view a contribution and choose <% approve %> or <% reject %>.',
            'You can change which contributions are shown on the map by choosing All, New, Approved, or Rejected in the <% review %> filter in the Builder toolbar. It is possible to change your decision on any contribution by clicking it on the map and updating its approval status.'
          ],
          bold: {
            settings: 'Settings',
            contributions: 'Contributions',
            afterReview: 'Show contributions: After review',
            newContributions: 'Review: New Contributions',
            approve: 'Approve',
            reject: 'Reject',
            review: 'Review'
          }
        },
        {
          title: 'Tracking Contributors',
          paragraphs: [
            'You can have people who contribute to your Crowdsource story identify themselves by signing in with their <% facebook %>, <% twitter %>, or <% arcgis %> account.',
            'The Facebook and Twitter options use a technology called OAuth to create an ArcGIS public account that is connected to the contributor\'s social media account. This makes it easy for contributors since they do not have to sign up for a new account to contribute to your story. Of course, if contributors already have an ArcGIS subscription or public account they can use that to sign in.',
            'You can also allow <% guestContributions %> so anyone can contribute without signing in, which may encourage more people to contribute to your story. However, guests will not be able to edit or remove their own contributions (not available in beta), and a username will not be recorded for guest contributions making it impossible to trace them back to an individual. If these capabilities are important to you then should you not allow guest contributions.',
            'All of the sign-in options listed above are available to contributors unless you disable them. Facebook and Twitter sign in are not available on Portal.'
          ],
          bold: {
            facebook: 'Facebook',
            twitter: 'Twitter',
            arcgis: 'ArcGIS',
            guestContributions: 'guest contributions'
          }
        },
        {
          title: 'FAQ',
          questions: [
            {
              question: 'How do I provide feedback about this beta app?',
              response: 'To provide feedback or suggestions, or to let us know about issues, please share your thoughts on the <% geonet %>.'
            },
            {
              question: 'Will a Crowdsource story created with the beta version of the app continue to work after future software releases?',
              response: 'Yes it will work, but there are two possible exceptions: 1) If you add layers to your beta Crowdsource story\'s web map (which can only be done outside the Builder), those layers may stop working or their symbols may change after the final release. To avoid this situation you can convert any supporting layers to feature layers before adding them to your map and use simple symbols. 2) There is also a possibility that the data model for the crowdsource layer may change. If this occurs, we intend to provide a workflow or tool to update your layer to the new data model.'
            },
            {
              question: 'Can I add other layers to my Crowdsource story\'s map?',
              response: 'Yes, you can add other layers to the map for context, but first read the previous question for important information about doing this with the beta release of Story Map Crowdsource. Open your story\'s <% map %>, add layers and/or change the basemap, and save your changes. The next time you load your story you will see the new layers. Be careful not to delete or modify the contributions layer in your map or your Crowdsource story may stop working properly.'
            },
            {
              question: 'Where are are the photos stored?',
              response: 'Submitted photos are resampled to an appropriate size and stored in your ArcGIS account (as feature service attachments). Images uploaded by you in the Builder for the cover image and logo are stored as item resources with your story map application item.'
            },
            {
              question: 'Do people need an ArcGIS account to contribute to my Crowdsource story?',
              response: 'No, contributors can sign in using their <% facebook %> or <% google %> account. This will create an ArcGIS public account linked to the contributor\'s social media account, but contributors won\'t receive emails from Esri when they sign in like this. People can also contribute as anonymous guests without signing in to any account. You control which of these sign-in methods are available for your story in <% settingsContributions %>.'
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
            google: 'Google',
            settingsContributions: 'Settings > Contributions'
          },
          links: {
            geonet: 'Story Maps Forum on GeoNet',
            map: 'map',
            agoCredits: 'ArcGIS Online service credits',
            github: 'GitHub project page'
          }
        }
      ]
    },
    settings: {
      title: 'Settings',
      buttons: {
        backTo: 'Back to'
      },
      messages: {
        uploading: 'Uploading'
      },
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
          title: 'Social',
          extra: {
            tweetLength: 'Estimated length',
            tweetLengthWarning: 'Your tweet may be too long. Be sure to test it using the Twitter button in the header.'
          },
          fields: {
            includeSharing: {
              label: 'Social buttons',
              optionLabels: {
                include: 'Display social buttons'
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
              tooltip: 'Twitter may suggest these accounts to people who tweet your story',
              placeholder: 'Enter Twitter accounts',
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
              tooltip: 'This controls when new contributions appear on the map. "Immediately" shows contributions right away. "After review" requires you to approve new contributions before they are visible to anyone else. See the Help for more information about reviewing contributions.',
              optionLabels: {
                'new': 'Immediately',
                'approved': 'After review'
              }
            },
            loginOptions: {
              label: 'Contributors can sign in with',
              attribute: 'sign-in option',
              tooltip: 'Choose which sign-in options your contributors can use to identify themselves. Anyone can contribute to your story anonymously (without signing in) if the Guest option is checked. See the Help for more information about tracking contributors.',
              optionLabels: {
                arcgis: 'ArcGIS',
                facebook: 'Facebook',
                google: 'Google',
                guest: 'Guest'
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
    messages: {
      arcgisItems: {
        webmapNotOwned: {
          title: 'Message from Crowdsource Builder',
          body: 'You tried to build a Crowdsource story using someone else\'s web map. A copy of their map was created in your account, and your story uses that copy.',
          confirmBtn: 'Ok'
        }
      }
    },
    errors: {
      actionsBtns: {
        redirectToSecureConnection: 'Reload with a secure connection'
      },
      inlineEditing: {
        heading: 'Attention:'
      },
      loading: {
        notAuthorizedCreateNew: 'To create a Crowdsource story you must use an ArcGIS subscription account with publishing privileges. If you are using a subscription account, contact your ArcGIS administrator to request additional privileges. If you are using an ArcGIS public account, <a href="http://www.arcgis.com/features/plans/pricing.html" target="-blank">upgrade</a> to a subscription or start a <a href="http://www.arcgis.com/features/free-trial.html" target="-blank">free trial subscription</a>.',
        notAuthorizedEdit: 'You are not authorized to edit this story. If you are not the owner, make sure you have been <a href="http://blogs.esri.com/esri/arcgis/2015/07/14/enable-colleagues-to-update-your-maps-and-apps/" target="-blank">given edit permissions</a> by the owner. You must also have access to edit items and publish new hosted feature services in your organization. Contact your ArcGIS Online organization administrator to request these privileges.',
        crowdsourceLayerNotFound: 'Could not find or load the crowdsource map layer correctly. Make sure you have permission to view the feature service.',
        builderNotSSL: 'This Crowdsource story requires the use of a secure (https) connection to ensure your audience can securely sign in and contribute their photos. Make sure your server supports an https connection at this same URL. Others attempting to access your story over http will be redirected to a secure connection, if possible.'
      },
      shareItems: {
        notShared: {
          title: 'Attention',
          body: 'Some item(s) in your story could not be shared. These item(s) may be owned by another user or require a subscription. The following item(s) could not be shared',
          confirmBtn: 'Ok'
        }
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
