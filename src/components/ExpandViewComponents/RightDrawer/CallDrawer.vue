<template>
    <div class="border pd-30 disp-col-wise">
        <div class="font-600 m-b-10">Test Your assistant</div>
        <div class="m-b-10"> <el-input v-model="getTargetCallerData.name" placeholder="Name" /></div>
        <div class="m-b-10">
            <el-input v-model="getTargetCallerData.number" class="w-50 m-2" placeholder="Phone Number">
                <template #prefix>
                <el-icon class="el-input__icon"><Phone/></el-icon>
                </template>
            </el-input>
        </div>
        <div class="m-b-10">
            <el-button @click="makeCall" class="w-100" type="primary" icon="Iphone">Call</el-button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'CallDrawer',
  computed:{
    getTargetCallerData(){
        return this.$store.getters.getTargetCallerData;
    },
  },
  methods:{
    makeCall(){}
  },

}
</script>