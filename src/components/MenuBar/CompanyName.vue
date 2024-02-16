<template>
    <div @click="refreshApp" class="company-name-container">
        {{ companyName }}
    </div>
</template>
<script>
export default {
  name: 'CompanyName',
  data(){
    return{
      companyName:'CallerAi'
    }
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