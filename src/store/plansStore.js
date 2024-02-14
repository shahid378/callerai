export default {
    state:{
        monthlyPlanCards:[],
        yearlyPlanCards:[],
    },
    getters:{
        getMonthlyPlanCards(state){
            return state.monthlyPlanCards
        },
        getYearlyPlanCards(state){
            return state.yearlyPlanCards;
        },
    },
    mutations:{
        setPlansData(state,params){
            state.monthlyPlanCards = params.monthlyPlanCards;
            state.yearlyPlanCards = params.yearlyPlanCards;
        }
    },
    actions:{
        getPlansData({commit}){
            let monthlyPlanCardsArr=[
                {
                    id:1,
                    name:'Starter',
                    badgeText:'',
                    priceText: '$29/mo*',
                    extraCharges:'50 mins, then 0.58$/min',
                    btnLabel:'Subscribe',
                    features:['1 Workspace','1 Active assistant','Custom Elevenlabs', 'Custom Twilio', 'Turbo synthesizer', 'SMS','API CallerAi Voice'],
                    supports:['Community', 'Chat support'],
                },
                {
                    id:2,
                    name:'Pro',
                    badgeText:'Save 70%',
                    priceText: '$450/mo*',
                    extraCharges:'2.5K mins, then 0.18$/min',
                    btnLabel:'Start 7 days free trial',
                    features:['1 Workspace', '5 Active assistants', 'Invite Team members', 'Batch campaigns (CSV)', 'Multi-Language', 'Real Time scheduling'],
                    supports:['Community', 'Private Slack channel', 'Chat & Email support'],
                },
                {
                    id:3,
                    name:'Growth',
                    badgeText:'Save 80%',
                    priceText: '$900/mo*',
                    extraCharges:'6K mins, then 0.15$/min',
                    btnLabel:'Start 7 days free trial',
                    features:['Unlimited workspaces', 'Unlimited assistants', 'Unlimited subaccounts', 'Whiteglove onboarding'],
                    supports:['Community', 'Private Slack channel', '24/7 dedicated support'],
                },
                {
                    id:4,
                    name:'Agency',
                    badgeText:'White label',
                    priceText: '$1,400/mo*',
                    extraCharges:'6K mins, then 0.15$/min',
                    btnLabel:'Start 7 days free trial',
                    features:['Unlimited workspaces', 'Unlimited assistants', 'Unlimited subaccounts', 'Whiteglove onboarding', 'Your own whitelabel platform'],
                    supports:['Community', 'Private Slack channel', '24/7 dedicated support'],
                },
            ];
            let yearlyPlanCardsArr=[
                {
                    id:2,
                    name:'Pro',
                    badgeText:'Save 70%',
                    priceText: '$375/mo*',
                    extraCharges:'2.5K mins, then 0.15$/min',
                    btnLabel:'Start 7 days free trial',
                    features:['1 Workspace', '5 Active assistants', 'Invite Team members', 'Batch campaigns (CSV)', 'Multi-Language', 'Real Time scheduling'],
                    supports:['Community', 'Private Slack channel', 'Chat & Email support'],
                },
                {
                    id:3,
                    name:'Growth',
                    badgeText:'Save 80%',
                    priceText: '$750/mo*',
                    extraCharges:'6K mins, then 0.12$/min',
                    btnLabel:'Start 7 days free trial',
                    features:['Unlimited workspaces', 'Unlimited assistants', 'Unlimited subaccounts', 'Whiteglove onboarding'],
                    supports:['Community', 'Private Slack channel', '24/7 dedicated support'],
                },
                {
                    id:4,
                    name:'Agency',
                    badgeText:'White label',
                    priceText: '$1,250/mo*',
                    extraCharges:'6K mins, then 0.12$/min',
                    btnLabel:'Start 7 days free trial',
                    features:['Unlimited workspaces', 'Unlimited assistants', 'Unlimited subaccounts', 'Whiteglove onboarding', 'Your own whitelabel platform'],
                    supports:['Community', 'Private Slack channel', '24/7 dedicated support'],
                },
            ];
            let params={
                monthlyPlanCards: monthlyPlanCardsArr,
                yearlyPlanCards: yearlyPlanCardsArr,
            }
            commit('setPlansData', params);
        },
    }
}