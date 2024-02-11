<template>
    <div @click="refreshApp" class="company-name-container">
        {{ companyName }}
    </div>
</template>
<script>
export default {
  name: 'CompanyName',
  components: {
    
  },
  data(){
    return{
        companyName: 'CallerAI'
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
    refreshApp(){
      this.$emit('refreshApp')
    }
  },

}
</script>
<style>
.company-name-container{
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;    
    font-size: xx-large;
    font-family: fantasy;
    cursor: pointer;
}
</style>