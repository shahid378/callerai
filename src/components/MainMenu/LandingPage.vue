<template>
  <el-alert v-if="openLoadingAlert" title="Something went wrong while loading app" type="error" />
  <el-row v-if="Object.keys(getUserData).length" class="h-100">
    <el-col class="h-100" :span="4">
      <MenuComponent />
    </el-col>
    <el-col class="h-100" :span="20">
      <ExpandViewComponent />
    </el-col>
  </el-row>
  <div v-if="openLogIn" class="landing-page-container">
    <LoginPage />
  </div>
  <div v-if="openWorkspacePopup" class="landing-page-container">
    <CreateWorkspace />
  </div>
</template>
<script>
import CreateWorkspace from '../Workspace/CreateWorkspace'
import LoginPage from '../Authentication/LoginPage'
import MenuComponent from '../MenuBar/MenuComponent.vue';
import ExpandViewComponent from '../ExpandViewBar/ExpandViewComponent.vue';

export default {
  name: 'LandingPage',
  components: {
    MenuComponent, ExpandViewComponent, LoginPage, CreateWorkspace
  },
  data() {
    return {
    }
  },
  computed: {
    getUserName() {
      return this.$store.state.userStore.userLoginEmail
    },
    getUserFromLocalStorage() {
      return localStorage.getItem('callerAi');
    },
    getUserData(){
      return this.$store.state.userStore.userData
    },
    openApp() {
      return this.$store.state.menuStore.openApp;
    },
    openLogIn() {
      return this.$store.state.menuStore.openLogIn;
    },
    openWorkspacePopup() {
      return this.$store.state.menuStore.openWorkspacePopup;
    },
    openLoadingAlert() {
      return this.$store.state.menuStore.openLoadingAlert;
    }
  },
  watch: {
  },
  mounted() {
    this.$store.state.menuStore.openLogIn = true;
    this.$store.dispatch('getPlansData');
    this.$store.dispatch('getTextPlansData');
    this.$store.dispatch('getAPIsDataForUser');
  }
}
</script>
<style lang="scss">
.h-100 {
  height: 100%;
}

.landing-page-container {
  display: flex;
}</style>