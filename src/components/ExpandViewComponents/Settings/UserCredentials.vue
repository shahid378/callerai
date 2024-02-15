
<template>
  <div class="disp-col-wise pd-30 border">
    <div class="font-30 font-600">Log in credentials</div>
    <div class="disp-col-wise pd-r-l-60">
      <div class="m-t-10">
        Email
      </div>
      <div class="m-t-b-10">        
       <el-input v-model="loginMail" placeholder="Please input email" />
      </div>
      <div class="m-t-10">
        Password
      </div>
      <div class="m-t-b-10">        
       <el-input v-model="loginPassword" 
    type="password"
    placeholder="Please input password"
    show-password/>
      </div>
      <div class="m-t-b-10">        
        
    <el-button type="primary">Update</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserCredentials',
  components: {
    
  },
  data(){
    return{
      loginMail:'',
      loginPassword:''
    }
  },
  props:[],
  computed:{

  },
  created(){

  },
  mounted(){

  },
  methods:{

  },

}
</script>
<style>
</style>