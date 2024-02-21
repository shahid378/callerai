<template>
  <div class="h-8">
    <div class="disp-bw pd-t-10 pd-b-20">        
      <el-input v-model="searchStr" class="w-50 m-2" placeholder="Search Assistant">
        <template #prefix>
          <el-icon class="el-input__icon"><search /></el-icon>
        </template>
      </el-input>
      <el-button class="mr-l-20" type="primary" icon="Plus" @click="switchEditView('one')">Create Assistant</el-button>
    </div>

  </div>
</template>
<script>
export default {
  name: 'SummmaryHeader',
  data(){
    return{
        searchStr: ''
    }
  },
  methods:{
    switchEditView(params){
      this.$emit('switchEditView',params);
      let assistantObj={
        isNewAssistant:true
      }
      assistantObj['assistantId'] = Math.random();
      assistantObj['assistantType'] = '';
      assistantObj['assistantInteractionType'] = '';
      assistantObj['assistantCreationDate'] = '';
      assistantObj['assistantName'] = '';
      assistantObj['assistantVoice'] = '';
      assistantObj['assistantAIModel'] = '';
      assistantObj['assistantVoiceSynt'] = '';
      assistantObj['assistantRegionalLang'] = '';
      assistantObj['assistantGreeting'] = '';
      assistantObj['assistantRecordingBackup'] = '';
      assistantObj['assistantPrompt'] = '';
      this.$emit('configureAssistant', assistantObj);
    }
  },
}
</script>