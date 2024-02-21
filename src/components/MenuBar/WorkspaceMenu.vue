<template>
    <div v-if="Object.keys(getCurrentWorkspaces).length" class="workspace-container disp-center">
        <el-select v-model="getCurrentWorkspaceName" style="width: 100%" 
        filterable
        remote
        reserve-keyword
        placeholder="Select a workspace"
        @change="handleWorkspaceChange"
        :remote-method="remoteMethod">
            <el-option v-for="item in getWorkspaces" :key="item.workspaceName" :label="item.workspaceName" :value="item.workspaceName" />
            <template #footer>
                <el-button  class="wd-100" type="primary"  text bg size="small" @click="createNewWorkspace">
                    Create New Workspace
                </el-button>
            </template>
        </el-select>
    </div>
</template>
<script>
export default {
    name: 'WorkspaceMenu',
    data() {
        return {
            getCurrentWorkspaceName:''
        }
    },
    computed:{
        getWorkspaces(){
            return this.$store.state.userStore.userData.workspaces
        },
        
        getCurrentWorkspaces(){
            return this.$store.state.menuStore.currentWorkSpace
        },
        // getCurrentWorkspaceName(){
        //     return this.$store.state.menuStore.currentWorkSpace.workspaceName
        // },
    },
    mounted() {
        this.setWorkSpace();
    },
    methods:{
        setWorkSpace(){
            if(this.getWorkspaces.length){
                this.$store.state.menuStore.currentWorkSpace= this.getWorkspaces[0];
                this.getCurrentWorkspaceName = this.getWorkspaces[0].workspaceName;
            }

        },
        handleWorkspaceChange(params){
                    this.$store.state.menuStore.currentWorkSpace= this.getWorkspaces.filter(obj=>obj.workspaceName == params)[0]
        },
        createNewWorkspace(){            
            this.$store.state.menuStore.addingNewWorkspace = true;
            this.$store.state.menuStore.openWorkspacePopup = true;
        }
    },

}
</script>
<style lang="scss">
$base_ten : .63rem;
.workspace-container {
    height: 10%;
    border-bottom: 1px solid rgb(224, 217, 217);
    margin: 0px 1.5* $base_ten;
}
</style>