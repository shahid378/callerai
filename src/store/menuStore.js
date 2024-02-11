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
    },
    getters:{
        getExpandViewTab(state){
            return state.expandViewTabObj
        },
        getBreadcrumbArr(state){
            return state.breadcrumbArr;
        },
        getUpdateAppVar(state){
            return state.updateAppVar;
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
        changeExpandView({commit},params){
            commit('setExpandView',params);
        },
        updateAppVar({state}){
            state.updateAppVar++
        }
    }
}