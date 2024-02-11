<template>
  <LandingPage/>
</template>

<script>
import LandingPage from './components/MainMenu/LandingPage.vue';

export default {
  name: 'App',
  components: {
    LandingPage,
  },
}
</script>

<style lang="scss">
html,body,#app{
  height: 100%;
}
body{
  margin: 0px !important;
  overflow: hidden;
}
#app {

}
</style>
