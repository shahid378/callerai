<template>
    <div class="h-100">
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
}
</script>