
<template>
  <div class="disp-col-wise pd-30 border">
    <div class="font-30 font-600">Notification settings</div>
    <div class="pd-r-l-60">
      <div class="disp-bw m-t-25">
        <span>Email notifications</span><el-switch v-model="emailNotification" />
      </div>
      <el-divider />
      <div class="disp-bw">
        <span>SMS notifications</span><el-switch v-model="smsNotification" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserNotifications',
  components: {

  },
  data() {
    return {
      emailNotification: false,
      smsNotification: false
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

  },

}
</script>
<style></style>