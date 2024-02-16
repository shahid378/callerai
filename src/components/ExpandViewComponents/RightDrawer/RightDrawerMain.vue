
<template>
    <div class="h-100">        
        <el-drawer
            v-model="drawerVis"
            title="I am the title"
            :direction="direction"
            :before-close="handleClose"
        >
            <span>Hi, there!</span>
        </el-drawer>
    </div>
</template>
<script>
export default {
  name: 'RightDrawerMain',
  data(){
    return{
        drawerVis:true,
        direction:'rtl',
    }
  },
  methods:{
    handleClose(){                
        this.$store.dispatch("openDrawer", {'closeDrawer':false});
    }
  },

}
</script>