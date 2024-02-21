<template>
    <div class="w-100">
        <el-dialog :model-value="true" :title="addingNewWorkspace? 'Add new workspace' : 'Create new workspace'" width="500">
            <div class="disp-col-wise">
                <span class="m-b-10">Workspace Name</span>
                <el-input v-model="workspaceName" placeholder="Please input" />
            </div>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="createWorkspace">
                        Submit
                    </el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>
<script>
export default {
  name: 'CreateWorkspace',
  components: {
    
  },
  data(){
    return{
        workspaceName:'',
    }
  },
  props:[],
  computed:{
    addingNewWorkspace(){
        return this.$store.state.menuStore.addingNewWorkspace
    },
  },
  created(){

  },
  mounted(){

  },
  methods:{
    createWorkspace(){        
        let userName = this.$store.state.userStore.userLoginEmail;
        let localStorage = window.localStorage;
        let existingLocalStorage = JSON.parse(localStorage.getItem('callerAi'));
        
        let newObj = {
            'workspaceName': this.workspaceName,
            assistants:null,
            userSavedApis:{
                callerAiApi:[],
                twillio:{
                    accountSID:'',
                    authToken:'',                
                },
                elevenLabs:'',
                openAi:{
                    isEnabled:false,
                    authToken:'',                
                },
                anthropic:{
                    isEnabled:false,
                    authToken:'',                
                },
            },
        }
        if(this.addingNewWorkspace){
            this.$store.state.userStore.userData.workspaces.push(newObj);
            existingLocalStorage[userName] = this.$store.state.userStore.userData;
            localStorage.setItem('callerAi', JSON.stringify(existingLocalStorage)); 
        }
        else{
            let userObj= {};
            userObj[userName] = {
                workspaces:[]
            }
            userObj[userName]['workspaces'].push(newObj);
            let mergedUserObjects= {...userObj, ...existingLocalStorage}
            localStorage.setItem('callerAi', JSON.stringify(mergedUserObjects));    
            this.$store.state.userStore.userData= userObj[userName];
        }    
        this.$store.state.menuStore.openWorkspacePopup = false;
    },
  },

}
</script>
<style>
</style>