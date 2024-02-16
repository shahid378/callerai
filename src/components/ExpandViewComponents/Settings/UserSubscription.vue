
<template>
    <div class="disp-col-wise h-100">
      <div class="disp-center m-b-25">
        <el-radio-group @change="handleRadioChange" v-model="activeRadio">
          <el-radio-button label="Voice">Voice</el-radio-button>
          <el-radio-button label="Text">Text</el-radio-button>
        </el-radio-group>
      </div>
      <div class="h-90" v-if="activeRadio === 'Voice'">
        <VoicePlans/>
      </div>
      <div v-else>
        <TextPlans/>
      </div>
    </div>
</template>
<script>
import VoicePlans from '../SubsPlans/VoicePlans'
import TextPlans from '../SubsPlans/TextPlans'
export default {
  name: 'UserSubscription',
  components: {
    TextPlans, VoicePlans
  },
  data(){
    return{
      activeRadio:'Voice',
    }
  },
  methods:{
    handleRadioChange(params){
      this.activeRadio = params
    }
  },

}
</script>