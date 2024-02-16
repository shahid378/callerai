<template>
  <div refs="settingsPage" class="h-100">
    <el-tabs class="h-100 y-scroller" @tab-click="handleTabChange" :model-value="activeMenu">
      <el-tab-pane label="Workspace" name="workspace">
        <WorkSpaces />
      </el-tab-pane>
      <el-tab-pane label="Subscription" name="subscription">
        <UserSubscription />
      </el-tab-pane>
      <el-tab-pane label="Log in Credentials" name="credentials">
        <UserCredentials />
      </el-tab-pane>
      <el-tab-pane label="Notification" name="notifications">
        <UserNotifications />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
// eslint-disable-next-line
import WorkSpaces from './WorkSpaces'
import UserSubscription from './UserSubscription'
import UserCredentials from './UserCredentials'
import UserNotifications from './UserNotifications'
export default {
  name: 'SettingsSummary',
  components: {
    WorkSpaces, UserSubscription, UserCredentials, UserNotifications
  },
  computed: {
    activeMenu(){
      return this.$store.state.menuStore.activeSettings;
    }
  },
  methods: {
    handleTabChange(params) {
      this.$store.state.menuStore.activeSettings = params.props.name;
    }
  },

}
</script>