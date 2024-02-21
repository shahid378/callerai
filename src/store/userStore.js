export default{
    state:{
        userData:{},

        
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
                    assistantName:'',
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

    },
    actions:{
        saveDataInDB({state}){    
            let userName = state.userLoginEmail;        
            let localStorage = window.localStorage;
            let existingLocalStorage = JSON.parse(localStorage.getItem('callerAi'));            
            existingLocalStorage[userName] = state.userData;
            localStorage.setItem('callerAi', JSON.stringify(existingLocalStorage)); 
        }
    }
}