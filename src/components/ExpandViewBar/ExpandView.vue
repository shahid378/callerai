<template>
    <div class="expand-view-main-container">
        <div class="h-100" v-if="expandView.dispAssistance">
            <AssistanceSummary/>
        </div>
        <div v-if="expandView.dispAPIKeys">
            <APIKeysSummary/>
        </div>
        <div v-if="expandView.dispSettings">
            <SettingsSummary/>
        </div>
        <div v-if="expandView.dispAffiliate">
            <AffiliateSummary/>
        </div>
    </div>
</template>
<script>
import APIKeysSummary from '../ExpandViewComponents/APIKeys/APIKeysSummary';
import AssistanceSummary from '../ExpandViewComponents/Assistants/AssistanceSummary';
import SettingsSummary from '../ExpandViewComponents/Settings/SettingsSummary';
import AffiliateSummary from '../ExpandViewComponents/Affiliate/AffiliateSummary';
export default {
  name: 'ExpandView',
  components: {
    AssistanceSummary,APIKeysSummary,SettingsSummary, AffiliateSummary
  },
  data(){
    return{

    }
  },
  props:[],
  computed:{
    expandView(){
        return this.$store.getters.getExpandViewTab;
    }
  },
  created(){

  },
  mounted(){

  },
  methods:{

  },

}
</script>
<style lang="scss">
$base_ten : .63rem;

.expand-view-main-container{
    height: 85%;
    padding: 1.5* $base_ten;

}
</style>