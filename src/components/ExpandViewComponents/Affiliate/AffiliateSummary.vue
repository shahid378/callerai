<template>
  <div class="disp-center h-100">
    <div class="disp-col-wise pd-150 max-w-40">
      <div class="disp-center pd-150">
        <el-icon :size="40">
          <Connection />
        </el-icon>
      </div>
      <div class="disp-center  pd-15 font-20 font-600">{{ affiliateHeader }}</div>
      <div class="text-center">{{ affiliateText }}</div>
      <div class="disp-center pd-15">
        <el-button @click="openAffiliateForm" type="primary">Become Affiliate</el-button>
            
        <el-button @click="reDirectAffiliateFAQ">Learn More</el-button>
      </div>
    </div>
  </div>
        <div>
            <a target="_blank" ref="menu_ex_links" href=""></a>
        </div>
</template>
<script>
export default {
  name: 'AffiliateSummary',
  data() {
    return {
      affiliateHeader: 'CallerAi Affiliate Program',
      affiliateText: "Join our Friends of CallerAi - Voice Assistant affiliate program and earn 20% commission on all payments."
    }
  },
  methods: {
    openAffiliateForm(){
                
      this.$store.dispatch("openDrawer", {'openDrawer':true, "drawerName": 'affiliateDrawer'});
    },
    reDirectAffiliateFAQ(){
                let element = this.$refs.menu_ex_links;
                element.href = 'https://www.lipsum.com/';
                element.click();
      
    }

  },

}
</script>