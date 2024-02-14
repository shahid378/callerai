<template>
  <div class="edit-one-container h-100">
    <el-card class="box-card  h-100 editone-view-card">
      <template #header>
        <div class="card-header">
          <div class="display-bw">
            <div class="disp-col-wise">
              <h3>Select your plan</h3>
              <span>Explore the full potential of CallerAi with no-commitment 7-day free trial
              </span>
            </div>
          </div>
        </div>
      </template>
      <div class="card-body-plan disp-col-wise h-100 y-scroller">

        <el-tabs model-value="monthly" class="demo-tabs">
          <el-tab-pane label="Monthly" name="monthly">
            <div class="pd-30 disp-flex-wrap flex-around">
              <div v-for="planCard in getMonthlyPlanCards" :key="planCard.id" class="disp-col-wise pd-30 plan-card m-10">
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
              <div v-for="planCard in getYearlyPlanCards" :key="planCard.id" class="disp-col-wise pd-30  plan-card m-10">
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
      <template #footer>
        <div class="display-bw">
          <div class="disp-flex">
            <div class="disp-col-wise">
              <h4>1 steps remaining</h4>
              <el-progress :stroke-width="7" :percentage="66" :show-text="true">
              </el-progress>
            </div>
          </div>
          <div class="disp-flex-r">
            <div class="disp-center m-r-10">
              <el-button @click="switchEditView('two')">Back</el-button>
            </div>
            <div class="disp-center">
              <el-button type="info" @click="switchEditView('assitantsPage')">Finish</el-button>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'EditThreeView',
  components: {

  },
  data() {
    return {

    }
  },
  props: [],
  computed: {
    getMonthlyPlanCards(){
      return this.$store.getters.getMonthlyPlanCards;
    },
    getYearlyPlanCards(){
      return this.$store.getters.getYearlyPlanCards;
    },
  },
  created() {

  },
  mounted() {

  },
  methods: {
    switchEditView(params) {
      this.$emit('switchEditView', params);
    }

  },

}
</script>
<style lang="scss">
.plan-card{
  min-width: 21.5 *$base_ten;
  border: 1px solid rgb(13, 13, 63);
  border-radius: 10px;
  
}
</style>