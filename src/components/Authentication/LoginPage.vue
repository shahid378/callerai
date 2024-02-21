<template>
    <div class="w-100">
        <el-dialog :model-value="true" title="Login" width="500">
            <div class="disp-col-wise">
                <span class="m-b-10">Name</span>
                <el-input v-model="userName" placeholder="Please input" />
            </div>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="logInUser">
                        Login
                    </el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name: 'LoginPage',
    components: {

    },
    data() {
        return {
            userName: '',
        }
    },
    props: [],
    computed: {

    },
    created() {

    },
    mounted() {

    },
    methods: {
        hideDialog(){
            
            this.$store.state.menuStore.openLogIn = false;
        },
        logInUser() {
            this.$store.state.userStore.userLoginEmail = this.userName;
            let val = this.userName;            
            this.$store.state.menuStore.openLogIn = false;
            this.$store.state.menuStore.openApp = false;
            this.$store.state.menuStore.openWorkspacePopup = false;
            this.$store.state.menuStore.openLoadingAlert = false;
            if (this.userName) {
                let createWorkspaces = false;
                let localStorage = window.localStorage.getItem('callerAi');
                let localStorageObj = JSON.parse(localStorage)
                if (localStorageObj && localStorageObj !== null && Object.keys(localStorage).length) {
                    let userDB = localStorageObj[val];
                    if (userDB && userDB != null) {
                        let userWorkspaces = userDB['workspaces'];
                        if (userWorkspaces && userWorkspaces != null) {
                            this.$store.state.userStore.userData=userDB;
                        }
                        else {
                            createWorkspaces = true;
                        }
                    }
                    else {
                        createWorkspaces = true;
                    }
                }
                else {
                    createWorkspaces = true;
                }
                if (createWorkspaces) {
                    this.$store.state.menuStore.openWorkspacePopup = true;
                }
            }
        },
    },

}
</script>
<style></style>