{
   "values":{
      "theme":"blue"
   },
   "configurationSettings":[
      {
         "category":"<b>General Settings</b>",
         "fields":[
            {
               "label":"Color Scheme:",
               "fieldName":"theme",
               "type":"string",
               "options":[
                  {
                     "value":"blue",
                     "label":"Blue"
                  },
                  {
                     "value":"gray",
                     "label":"Gray"
                  }
               ],
               "tooltip":"Color theme to use"
            },
            {
               "placeHolder":"Enter a title",
               "label":"Title Text:",
               "fieldName":"title",
               "type":"string"
            }
         ]
      },
      {
         "category":"<b>Web maps to compare</b>",
         "fields":[
            {
               "label":"Web Map IDs:",
               "fieldName":"webmap",
               "type":"string",
               "stringFieldOption":"textarea",
               "tooltip":"Enter web map ids for maps separated by commas"
            },
            {
               "value":"Enter the IDs for up to three web maps, separated with a comma. The ID can be found in the URL when looking at the details page of a web map.",
               "type":"paragraph"
            }
         ]
      }
   ]
}