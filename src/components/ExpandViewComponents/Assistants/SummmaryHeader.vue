<template>
  <div class="h-8">
    <div class="display-bw pd-t-10 pd-b-20">        
      <el-input v-model="searchStr" class="w-50 m-2" placeholder="Search Assistant">
        <template #prefix>
          <el-icon class="el-input__icon"><search /></el-icon>
        </template>
      </el-input>
      <el-button class="mr-l-20" type="primary" icon="Plus">Create Assistant</el-button>
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

  },

}
</script>
<style lang="scss">
$base_ten : .63rem;
.h-8{
  height: 8%;
}
.pd-b-20{
    padding-bottom: 2* $base_ten;
}
.pd-t-10{
    padding-top: 1* $base_ten;
}
.mr-l-20{
    margin-left: 2* $base_ten;
}
.display-bw{    
    display: flex;
    justify-content: space-between;
}
</style>