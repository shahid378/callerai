<template>
    <div class="assistant-card-container h-92">
        <el-card class="box-card assistant-card" v-for="card in assistantsCards" :key="card.id">
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
            <div  class="m-t-b-5">{{ card.assistantType }}</div>
            <div  class="m-t-b-5">{{ 'Created ' }}{{ card.assistantCreationDate }}</div>
            <template #footer>
                <div class="disp-bw">
                    <el-button type="danger" icon="Delete" circle />
                    <el-button @click="configureAssistant(card)">Open</el-button>
                </div>
            </template>
        </el-card>
    </div>
</template>
<script>
export default {
    name: 'SummmaryCards',
    computed: {
        assistantsCards() {
            let assistantArr = [{
                id: '1',
                assistantName: 'siri',
                assistantType: 'Inbound',
                assistantCreationDate: '06/13/2023'
            }, {
                id: '2',
                assistantName: 'alexa',
                assistantType: 'outbound',
                assistantCreationDate: '08/13/2023'
            }, {
                id: '3',
                assistantName: 'alexa',
                assistantType: 'outbound',
                assistantCreationDate: '08/13/2023'
            }, {
                id: '4',
                assistantName: 'alexa',
                assistantType: 'outbound',
                assistantCreationDate: '08/13/2023'
            }, {
                id: '5',
                assistantName: 'alexa',
                assistantType: 'outbound',
                assistantCreationDate: '08/13/2023'
            }];
            return assistantArr
        }
    },
    methods: {
        configureAssistant(params){
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