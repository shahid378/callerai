export default{
    state:{
        userWorkspaces:[{
            workspaceID:'',
            workspaceName:'',
            workspaceWebsite:'',
            usersAccess:[
                {
                    userName:'',
                    userRole:'',
                }
            ],

            assistants:[
                {
                    assistantId:'',
                    assistantType:'',
                    assistantInteractionType:'',
                    assistantCreationDate:'',
                    assistantPic:'',
                    assitantName:'',
                    assistantVoice:'',
                    assistantAIModel:'',
                    assistantVoiceSynth:'',
                    assistantRegionalLang:'',
                    assistantGreenting:'',
                    assistantRecordingBackup:'',
                    assistantPrompt:'',
                }
            ]
        }],

        userSavedApis:{
            callerAiApi:[{
                'key':'',
                'createdDate': '',
                'status': '',                
            }],
            twillio:{
                accountSID:'',
                authToken:'',                
            },
            elevenLabs:'',
            openAi:'',
            anthropic:'',
        },

        userLoginEmail:'',
        userLoginPass:'',

        userTotalTextCredit:'',
        userTotalVoiceCredit:'',
        userRemainingTextCredit:'',
        userRemainingVoiceCreadit:'',

        isEmailNotificationEnabled:false,
        isSMSNotificationEnabled:false,

    }
}