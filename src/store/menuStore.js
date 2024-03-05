export default {
    state:{
        expandViewTabObj:{
            dispAssistance: false,
            dispAPIKeys: false,
            dispSettings: false,
            dispAffiliate: false,
        },
        menuMap:{
            assistants : 'dispAssistance',
            apiKeys : 'dispAPIKeys',
            settings : 'dispSettings',
            affiliate : 'dispAffiliate',
        },
        breadcrumbMap:{            
            dispAssistance: 'Assistance',
            dispAPIKeys: 'API Keys',
            dispSettings: 'Settings',
            dispAffiliate: 'Affiliate',
        },
        breadcrumbArr: [],
        updateAppVar:1,
        
        openDrawer:false,
        drawerName:'',

        openApp:false,
        openLogIn:false,
        openWorkspacePopup:false,
        addingNewWorkspace:false,
        openLoadingAlert:false,
        activeSettings:'',
        
        currentWorkSpace:{},

        editAssistant:{},
        callerAssistant:null,

        targetCallerObj:{
            name:'',
            number:'',
        },
    },
    getters:{
        getExpandViewTab(state){
            return state.expandViewTabObj;
        },
        getBreadcrumbArr(state){
            return state.breadcrumbArr;
        },
        getUpdateAppVar(state){
            return state.updateAppVar;
        },
        isDrawerActive(state){
            return state.openDrawer;
        },
        getDrawerName(state){
            return state.drawerName;
        },
        
        getTargetCallerData(state){
            return state.targetCallerObj;
        },
        getCallerAssistant(state){
            return state.callerAssistant;
        },
    },
    mutations:{
        setExpandView(state,params){
            let newExpandViewTabObj = {
                dispAssistance: false,
                dispAPIKeys: false,
                dispSettings: false,
                dispAffiliate: false,
            };
            newExpandViewTabObj[state.menuMap[params]] = true;
            state.breadcrumbArr[0] = state.breadcrumbMap[state.menuMap[params]];
            state.expandViewTabObj = newExpandViewTabObj
        }
    },
    actions:{
        changeExpandView({state,commit},params){
            commit('setExpandView',params);
            if(params === 'settings'){
                state.activeSettings = 'workspace'
            }
        },
        updateAppVar({state}){
            state.updateAppVar++
        },
        openDrawer({state},params){
            if(params.openDrawer){
                state.callerAssistant = params.callerAssistant;
                state.openDrawer = true;
                state.drawerName = params.drawerName;
            }
            else{
                state.openDrawer = false;
                state.drawerName = '';
                state.callerAssistant = '';

            }
        }
    }
}