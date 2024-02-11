<template>
    <div class="h-100">
        <SummmaryHeader/>
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
  data(){
    return{

    }
  },
  props:[],
  computed:{
    
  },
  created(){

  },
  mounted(){

  },
  methods:{
        configureAssistant(params){
            this.$emit('configureAssistant', params);
        }
  },

}
</script>
<style>
</style>