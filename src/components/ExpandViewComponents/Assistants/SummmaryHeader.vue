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
  components: {
    
  },
  data(){
    return{
        searchStr: ''
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
    switchEditView(params){
      this.$emit('switchEditView',params);
    }

  },

}
</script>
<style lang="scss">
</style>