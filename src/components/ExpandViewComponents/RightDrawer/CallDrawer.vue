<template>
    <div class="border pd-30 disp-col-wise">
        <div class="font-600 m-b-10">Test Your assistant</div>
        <div class="m-b-10"> <el-input v-model="getTargetCallerData.name" placeholder="Name" /></div>
        <div class="m-b-10">
            <el-input v-model="getTargetCallerData.number" class="w-50 m-2" placeholder="Phone Number">
                <template #prefix>
                <el-icon class="el-input__icon"><Phone/></el-icon>
                </template>
            </el-input>
        </div>
        <div class="m-b-10">
            <el-button @click="makeCall" class="w-100" type="primary" icon="Iphone">Call</el-button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'CallDrawer',
  computed:{
    getTargetCallerData(){
        return this.$store.getters.getTargetCallerData;
    },
    getCurrentWorkspace() {
      return this.$store.state.menuStore.currentWorkSpace;
    },
  },
  mounted(){
  },
  methods:{
    getApisData(){  
      let apiObj = null
      let userDB = this.$store.state.userStore.userData;
      if (userDB['workspaces'] && userDB['workspaces'].length) {
        userDB['workspaces'].forEach(obj => {
          if (obj.workspaceName === this.getCurrentWorkspace.workspaceName) {
            apiObj = obj.userSavedApis;
          }
        });
      }
      return apiObj
    },
    makeCall(){  
        let apisObj = this.getApisData();   
        let callerObj = this.getTargetCallerData; 
        let req = {
          data:{
            apis : apisObj,
            caller: callerObj
          }
        }
        this.axios.post('http://127.0.0.1:5000/makecall', req).then((response) => {
          console.log(response.data)
        })
    }
  },

}
</script>