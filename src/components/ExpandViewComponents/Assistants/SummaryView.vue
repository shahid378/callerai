<template>
    <div class="h-100">
        <SummmaryHeader  @configureAssistant="configureAssistant" @switchEditView="switchEditView"/>
        <SummmaryCards @configureAssistant="configureAssistant"/>
    </div>
</template>
<script>
import SummmaryHeader from './SummmaryHeader';
import SummmaryCards from './SummmaryCards';
export default {
  name: 'SummaryView',
  components: {
    SummmaryHeader,SummmaryCards
  },
  methods:{
    switchEditView(params){
      this.$emit('switchEditView',params);
    },
        configureAssistant(params){
            this.$emit('configureAssistant', params);
        }
  },

}
</script>