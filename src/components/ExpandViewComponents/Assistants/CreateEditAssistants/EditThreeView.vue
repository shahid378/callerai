<template>
  <div class="h-100">
    <el-card class="box-card  h-100 editone-view-card">
      <template #header>
        <div class="card-header">
          <div class="disp-bw">
            <div class="disp-col-wise">
              <h3>Select your plan</h3>
              <span>Explore the full potential of CallerAi with no-commitment 7-day free trial
              </span>
            </div>
          </div>
        </div>
      </template>
      <div class="disp-col-wise h-100 y-scroller">
        <VoicePlans />
      </div>
      <template #footer>
        <div class="disp-bw">
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

import VoicePlans from '../../SubsPlans/VoicePlans'
export default {
  name: 'EditThreeView',
  components: {
    VoicePlans
  },
  computed: {
    assistantObjData() {
      return this.$store.state.menuStore.editAssistant
    },
    getCurrentWorkspace() {
      return this.$store.state.menuStore.currentWorkSpace
    }
  },
  methods: {
    switchEditView(params) {
      let userDB = this.$store.state.userStore.userData
      if (userDB['workspaces'] && userDB['workspaces'].length) {
        userDB.workspaces.forEach(obj => {
          if (obj.workspaceName === this.getCurrentWorkspace.workspaceName) {
            if (this.assistantObjData.isNewAssistant) {
              if (!obj.assistants) {
                obj.assistants = []
              }
              obj.assistants.push(this.assistantObjData)

            }
            else {
              obj.assistants.forEach(assistantObj => {
                if (assistantObj.assistantId == this.assistantObjData.assistantId) {
                  assistantObj = { ...assistantObj, ...this.assistantObjData }
                }
              })
            }
          }
        })
      }
      this.$emit('switchEditView', params);
      if(params === 'assitantsPage'){        
        this.$store.dispatch('saveDataInDB');
      }
    }
  },
}
</script>
<style lang="scss">
.plan-card {
  min-width: 21.5 *$base_ten;
  border: 1px solid rgb(13, 13, 63);
  border-radius: 10px;

}
</style>