<template>
    <div class="expand-view-main-container">
        <div class="h-100" v-if="expandView.dispAssistance">
            <AssistanceSummary/>
        </div>
        <div class="h-100" v-if="expandView.dispAPIKeys">
            <APIKeysSummary/>
        </div>
        <div class="h-100" v-if="expandView.dispSettings">
            <SettingsSummary/>
        </div>
        <div class="h-100" v-if="expandView.dispAffiliate">
            <AffiliateSummary/>
        </div>
        <div class="h-100" v-if="isDrawerActive">
          <RightDrawerMain/>
        </div>
    </div>
</template>
<script>
import RightDrawerMain from '../ExpandViewComponents/RightDrawer/RightDrawerMain';
import APIKeysSummary from '../ExpandViewComponents/APIKeys/APIKeysSummary';
import AssistanceSummary from '../ExpandViewComponents/Assistants/AssistanceSummary';
import SettingsSummary from '../ExpandViewComponents/Settings/SettingsSummary';
import AffiliateSummary from '../ExpandViewComponents/Affiliate/AffiliateSummary';
export default {
  name: 'ExpandView',
  components: {
    AssistanceSummary,APIKeysSummary,SettingsSummary, AffiliateSummary,RightDrawerMain
  },
  computed:{
    expandView(){
        return this.$store.getters.getExpandViewTab;
    },
    
    isDrawerActive(){
        return this.$store.getters.isDrawerActive;
    }
  },
}
</script>
<style lang="scss">
.expand-view-main-container{
    height: 85%;
    padding: 1.5* $base_ten;

}
</style>