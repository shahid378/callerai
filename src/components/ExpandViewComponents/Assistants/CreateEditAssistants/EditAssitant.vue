<template>
    <div class="h-100">
        <div v-if="editViewsObj.editOne" class="h-100">
            <EditOneView @switchEditView="switchEditView"/>
        </div>
        <div v-if="editViewsObj.editTwo" class="h-100">
            <EditTwoView  @switchEditView="switchEditView"  />
        </div>
        <div v-if="editViewsObj.editThree" class="h-100">
            <EditThreeView  @switchEditView="switchEditView"/>
        </div>
    </div>
</template>
<script>
import EditOneView from './EditOneView';
import EditTwoView from './EditTwoView';
import EditThreeView from './EditThreeView';
export default {
    name: 'EditAssitant',
    props:['assistantObj'],
    components: {
        EditOneView, EditTwoView, EditThreeView
    },
    data() {
        return {
            editViewsObj:{
                editOne:true,
                editTwo:false,
                editThree:false,
            }
        }
    },
    mounted(){
        this.storeAssistant()
    },
    methods: {
        storeAssistant(){

            this.$store.state.menuStore.editAssistant = this.assistantObj
        },
        switchEditView(params){
            this.editViewsObj.editOne=false;
            this.editViewsObj.editTwo=false;
            this.editViewsObj.editThree=false;
            if(params==='two'){
                this.editViewsObj.editTwo=true;
            }
            else if(params==='three'){
                this.editViewsObj.editThree=true;
            }
            else if(params==='one'){
                this.editViewsObj.editOne=true;
            }
            else if(params==='assitantsPage'){
                this.editViewsObj.editOne=true;
                this.$emit('switchEditView',params)
            }
        }
    },

}
</script>