<template>
    <div class="header-container">
        <div class="breadcrumb-container disp-center pd-l-15">

            <el-breadcrumb separator="/" v-for="breacrumbText in  breadcrumbArr" :key="breacrumbText">
                <el-breadcrumb-item>{{ breacrumbText }}</el-breadcrumb-item>
            </el-breadcrumb>

        </div>
        <div class="alltime-btn-container disp-center pd-r-15">
            <div>
                <el-button icon="QuestionFilled">Help</el-button>
                <el-button @click="openUpdates" icon="Promotion">Updates</el-button>
                <el-button icon="SwitchButton">Log out</el-button>
            </div>
        </div>
    </div>
    <div>
        <a target="_blank" ref="update_ex_links" href=""></a>
    </div>
</template>
<script>
export default {
    name: 'HeaderComponent',
    computed: {
        breadcrumbArr() {
            return this.$store.getters.getBreadcrumbArr;
        }
    },
    methods: {
        openUpdates() {
            let element = this.$refs.update_ex_links;
            element.href = 'https://www.nytimes.com/international/';
            element.click();
        }
    },

}
</script>
<style lang="scss">
.header-container {
    height: 10%;
    border-bottom: 1px solid rgb(237 221 221);
    display: flex;
    justify-content: space-between;
}</style>