<template>
    <el-row class="h-100">
      <el-col class="h-100"  :span="4"><MenuComponent/></el-col>
      <el-col class="h-100" :span="20"><ExpandViewComponent /></el-col>
    </el-row>
    <div class="landing-page-container">
        
        
    </div>
</template>
<script>

import MenuComponent from '../MenuBar/MenuComponent.vue';
import ExpandViewComponent from '../ExpandViewBar/ExpandViewComponent.vue';

export default {
  name: 'LandingPage',
  components:{
    MenuComponent, ExpandViewComponent
  }
}
</script>
<style lang="scss">
.h-100{
  height: 100%;
}
.landing-page-container{
    display: flex;
}
</style>