<template>
    <div class="reference-container">        
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-menu-item index="1">
                <el-icon>
                    <Money />
                </el-icon>
                <span>Affiliate</span>
            </el-menu-item>
            <el-menu-item index="2">
                <el-icon>
                    <Document />
                </el-icon>
                <span>Documentation</span>
            </el-menu-item>
            <el-menu-item index="3">
                <el-icon>
                    <Link />
                </el-icon>
                <span>API Reference</span>
            </el-menu-item>
            <el-menu-item index="3">
                <el-icon>
                    <UserFilled />
                </el-icon>
                <span>Community</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
  name: 'ReferenceMenu',
  components: {
    
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
.reference-container{
    height: 30%;
    border-bottom: 1px solid gray;
}
</style>