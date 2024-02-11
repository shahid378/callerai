<template>
    <div class="h-100">
      <div class="h-100" v-if="createFlag">
        <EditAssitant/>
      </div>
      <div class="h-100" v-else>
        <SummaryView @configureAssistant="configureAssistant"/>
      </div>
    </div>
</template>
<script>
import EditAssitant from './EditAssitant.vue';
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
  props:[],
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
  created(){

  },
  mounted(){

  },
  methods:{
    configureAssistant(params){
      this.createFlag = true;
      console.log(params)
    }
  },

}
</script>
<style>
</style>