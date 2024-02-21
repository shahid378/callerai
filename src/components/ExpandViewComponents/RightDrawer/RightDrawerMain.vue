
<template>
    <div class="h-100">        
        <el-drawer
            v-model="drawerVis"
            :direction="direction"
            :before-close="handleClose"
        >
        <template #header>
          <div v-if="getDrawerName === 'callDrawer'">Make a outbound Call</div>
        </template>
          <div v-if="getDrawerName === 'callDrawer'">
            <CallDrawer/>
          </div>
        </el-drawer>
    </div>
</template>
<script>
import CallDrawer from './CallDrawer';
export default {
  name: 'RightDrawerMain',
  components:{
    CallDrawer,
  },
  data(){
    return{
        drawerVis:true,
        direction:'rtl',
        title:'',
    }
  },
  computed:{
    getDrawerName(){
      return this.$store.getters.getDrawerName;
    },
  },
  methods:{
    handleClose(){                
        this.$store.dispatch("openDrawer", {'closeDrawer':false});
    }
  },

}
</script>