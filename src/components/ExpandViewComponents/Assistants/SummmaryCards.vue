<template>
    <div v-if="assistantsCards.length > 0" class="assistant-card-container h-92">
        <el-card  class="box-card assistant-card" v-for="card in assistantsCards" :key="card.id">
            <template #header>
                <div class="card-header">
                    <div class="disp-bw">
                        <el-button type="primary" icon="PhoneFilled" circle @click="openCallFeature(card.id)" />
                        <el-button class="button-new-tag" size="small">
                            Voice<el-icon class="el-icon--right">
                                <Microphone />
                            </el-icon>
                        </el-button>

                    </div>
                </div>
            </template>
            <div class="m-t-b-5">{{ card.assistantName }}</div>
            <div class="m-t-b-5">{{ card.assistantType }}</div>
            <div class="m-t-b-5">{{ 'Created On' }}{{ card.assistantCreationDate }}</div>
            <template #footer>
                <div class="disp-bw">
                    <el-button @click="deleteAssistant(card)" type="danger" icon="Delete" circle />
                    <el-button @click="configureAssistant(card)">Open</el-button>
                </div>
            </template>
        </el-card>
    </div>
        <div v-else>
            No assistant found
        </div>
</template>
<script>
export default {
    name: 'SummmaryCards',
    computed: {
        assistantsCards() {
            let userDB = this.$store.state.userStore.userData
            if(userDB['workspaces'] && userDB['workspaces'].length){
                let assistants = userDB['workspaces'].map(obj=>{
                    if(obj.workspaceName === this.getCurrentWorkspace.workspaceName){
                        return obj.assistants
                    }
                })
                assistants = assistants.filter(Boolean);
                return assistants[0] == null ? [] : assistants[0];
            }
            else return []
        },
        workspaceName(){
            return this.$store.state.userStore.userLoginEmail
        },
        getCurrentWorkspace(){
           return this.$store.state.menuStore.currentWorkSpace
        }
    },
    methods: {
        deleteAssistant(params){
            let userDB = this.$store.state.userStore.userData;
            userDB.workspaces.forEach(obj => {
                if (obj.workspaceName === this.getCurrentWorkspace.workspaceName) {
                    obj.assistants = obj.assistants.filter(assistant=>assistant.assistantId != params.assistantId)
                }
            });            
            this.$store.dispatch('saveDataInDB');
        },
        configureAssistant(params){
            params['isNewAssistant'] = false;
            this.$emit('configureAssistant', params);
        },        
        openCallFeature(callerId){                
            this.$store.dispatch("openDrawer", {'openDrawer':true,"callerAsistantId":callerId, "drawerName": 'callDrawer'});
        }
    },

}
</script>
<style lang="scss">
.assistant-card-container{
    max-height: 92%;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
}
.assistant-card{
    max-height: 20* $base_ten;
    width: 32%;
    margin: 0 1* $base_ten 1* $base_ten 0px;
}
</style>