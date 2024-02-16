<template>
    <div class="h-100">
      <div class="h-100" v-if="createFlag">
        <EditAssitant @switchEditView="switchEditView"/>
      </div>
      <div class="h-100" v-else>
        <SummaryView @configureAssistant="configureAssistant"  @switchEditView="configureAssistant({})"/>
      </div>
    </div>
</template>
<script>
import EditAssitant from './CreateEditAssistants/EditAssitant.vue';
import SummaryView from './SummaryView.vue';
export default {
  name: 'AssistanceSummary',
  components: {
    EditAssitant,SummaryView
  },
  data(){
    return{
      createFlag: false
    }
  },
  computed:{
    updateAppVar(){
      return this.$store.getters.getUpdateAppVar;
    }

  },
  watch:{
    updateAppVar(){
      this.createFlag = false
    }
  },
  methods:{
    switchEditView(){
      this.createFlag = false;
    },
    configureAssistant(params){
      this.createFlag = true;
      console.log(params)
    }
  },

}
</script>