
<template>
    <div>
        <el-tabs model-value="monthly" class="demo-tabs">
          <el-tab-pane label="Monthly" name="monthly">
            <div class="pd-30 disp-flex-wrap flex-around">
              <div v-for="planCard in getMonthlyTextPlanCards" :key="planCard.id" class="disp-col-wise pd-30 plan-card m-10">
                <div class="disp-flex m-b-20 font-30 font-600 align-center">
                  <span class="m-r-10 pd-t-b-5">{{ planCard.name }}</span>
                  <div v-if="planCard.badgeText" class="badge-blue">{{ planCard.badgeText }}</div>
                </div>
                <div class="m-b-20 font-40 font-600">
                  <span>{{ planCard.priceText }}</span>
                </div>
                <div class="font-600">
                  {{ planCard.extraCharges }}
                </div>
                <div class="disp-center m-t-b-25">
                  <el-button type="info" round>{{planCard.btnLabel}}</el-button>
                </div>
                <div class="font-600 m-b-10">
                  Feature
                </div>
                <div v-for="feature in planCard.features" :key="feature" class="disp-flex">
                  <div class="disp-center">
                    <el-icon :size="20">
                      <Select />
                    </el-icon>
                  </div>
                  <div class="m-l-5">{{ feature }}</div>
                </div>
                <div class=" m-t-b-10 font-600">
                  Support
                </div>
                <div v-for="support in planCard.supports" :key="support" class="disp-flex">
                  <div class="disp-center">
                    <el-icon :size="20">
                      <Select />
                    </el-icon>
                  </div>
                  <div class="m-l-5">{{ support }}</div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Yearly - 2 months free" name="yearly">
            
            <div class="pd-30 disp-flex-wrap flex-around">
              <div v-for="planCard in getYearlyTextPlanCards" :key="planCard.id" class="disp-col-wise pd-30  plan-card m-10">
                <div class="disp-flex m-b-20  font-30 font-600 align-center">
                  <span class="m-r-10 pd-t-b-5">{{ planCard.name }}</span>
                  <div class="badge-blue">{{ planCard.badgeText }}</div>
                </div>
                <div class="m-b-20 font-40 font-600">
                  <span>{{ planCard.priceText }}</span>
                </div>
                <div class="font-600">
                  {{ planCard.extraCharges }}
                </div>
                <div class="disp-center m-t-b-25">
                  <el-button type="info" round>{{planCard.btnLabel}}</el-button>
                </div>
                <div  class="font-600 m-b-10">
                  Feature
                </div>
                <div v-for="feature in planCard.features" :key="feature" class="disp-flex">
                  <div class="disp-center">
                    <el-icon :size="20">
                      <Select />
                    </el-icon>
                  </div>
                  <div class="m-l-5">{{ feature }}</div>
                </div>
                <div class="m-t-b-10 font-600">
                  Support
                </div>
                <div v-for="support in planCard.supports" :key="support" class="disp-flex">
                  <div class="disp-center">
                    <el-icon :size="20">
                      <Select />
                    </el-icon>
                  </div>
                  <div class="m-l-5">{{ support }}</div>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
  name: 'TextPlans',
  components: {
    
  },
  data(){
    return{

    }
  },
  props:[],
  computed:{
    getMonthlyTextPlanCards(){
      return this.$store.getters.getMonthlyTextPlanCards;
    },
    getYearlyTextPlanCards(){
      return this.$store.getters.getMonthlyTextPlanCards;
    },

  },
  created(){

  },
  mounted(){

  },
  methods:{

  },

}
</script>
<style>
</style>