<template>
    <div class="expand-view-container">
        <HeaderComponent/>
        <ExpandView/>
    </div>
</template>
<script>
import HeaderComponent from './HeaderComponent.vue';
import ExpandView from './ExpandView.vue';
export default {
  name: 'ExpandViewComponent',
  components: {
    ExpandView,
    HeaderComponent
  },
  data(){
    return{

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
.expand-view-container{
    height: 100%;
}
</style>