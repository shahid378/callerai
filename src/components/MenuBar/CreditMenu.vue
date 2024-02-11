<template>
    <div class="credit-menu-parent-container">
        <div class="credit-menu-container">
            <div class="pd-t-10">
                <div class="flex-between pd-b-3">
                    <span class="cr-text-size">{{`${5}/${10} CR`}}</span>
                    <span class="cr-text-size credit-text">Text</span>
                </div>
                <div class="demo-progress">
                    <el-progress :stroke-width="7" :percentage="50" :show-text="false">
                    </el-progress>
                </div>
            </div>
            <div class="pd-t-10">
                <div class="flex-between pd-b-3">
                    <span class="cr-text-size">{{`${9}/${10} MIN`}}</span>
                    <span class="cr-text-size credit-text">Voice</span>
                </div>
                <div class="demo-progress">
                    <el-progress :stroke-width="7" :percentage="90"  :show-text="false" >
                    </el-progress>
                </div>
            </div>
            <div class="pd-t-10">            
                <el-button class="wd-100" icon="Lightning">Upgrade</el-button>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'CreditMenu',
    components: {

    },
    data() {
        return {

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
<style lang="scss">
$base_ten : .63rem;
.pd-b-3{
    padding-bottom: .3* $base_ten;
}
.credit-menu-parent-container{
    height: 20%;
}
.pd-t-10{
    padding-top: 1* $base_ten;
}
.cr-text-size{
    font-size: 1* $base_ten;
}
.wd-100{
    width: 100%;
}
.credit-menu-container {
    
    margin-right: 1.5* $base_ten;
    margin-left: 1.5* $base_ten;
    margin-top: 1* $base_ten;
    margin-bottom: 1* $base_ten;
    height: 80%;
    display: flex;
    flex-direction: column;
    margin: .5* $base_ten 1* $base_ten;
    border: 1px solid rgb(224, 217, 217);
    border-radius: .5* $base_ten;
    padding: 0 1* $base_ten;
}
.flex-between{
    display: flex;
    justify-content: space-between;
}
.credit-text{
    background-color: #409eff;
    border-radius: .3* $base_ten;
    padding: 0px .2* $base_ten;
}
</style>