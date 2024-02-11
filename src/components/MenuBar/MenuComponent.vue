<template>
    <div class="menu-container" :key="updateAppVar">
        <CompanyName @refreshApp="refreshApp"/>
        <WorkspaceMenu/>
        <MainMenu/>
        <CreditMenu/>
    </div>
</template>
<script>
import CompanyName from './CompanyName.vue';
import CreditMenu from './CreditMenu.vue';
import MainMenu from './MainMenu.vue';
import WorkspaceMenu from './WorkspaceMenu.vue';
export default {
  name: 'MenuComponent',
  components: {
    CompanyName,
    CreditMenu,
    MainMenu,
    WorkspaceMenu,
  },
  data(){
    return{

    }
  },
  props:[],
  computed:{
    updateAppVar(){
      return this.$store.getters.getUpdateAppVar;
    }
  },
  created(){

  },
  mounted(){

  },
  methods:{
    refreshApp(){
      this.$store.dispatch('updateAppVar');
    }
  },

}
</script>
<style>
.menu-container{
    border-right: 1px solid rgb(224, 217, 217);
    height: 100%;
}
</style>