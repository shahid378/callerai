<template>
    <div class="edit-one-container h-100">
        <el-card class="box-card  h-100 editone-view-card">
            <template #header>
                <div class="card-header">
                    <div class="display-bw">
                        <div class="disp-col-wise">
                            <h3>Configure</h3>
                            <span>The first step is to customize your assistant according to your needs</span>
                        </div>
                        <div class="disp-center">
                            <el-button type="primary" icon="PhoneFilled">
                                Test your assistant
                            </el-button>
                        </div>


                    </div>
                </div>
            </template>
            <div>

            </div>
            <template #footer>
                <div class="display-bw">
                    <div class="disp-flex">
                        <div class="disp-col-wise">
                            <h4>3 steps remaining</h4>
                            <el-progress :stroke-width="7" :percentage="0" :show-text="true">
                            </el-progress>
                        </div>
                    </div>
                    <div class="disp-center">
                        <el-button type="info" @click="gotoTwoView">Next</el-button>

                    </div>
                </div>
            </template>
        </el-card>
    </div>
</template>
<script>
export default {
    name: 'EditOneView',
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

.disp-flex {
    display: flex;
}

h4,
h3 {
    margin: .5* $base_ten 0px !important;
}

.editone-view-card {
    .el-card__body {
        height: 74%;
    }
}

.disp-col-wise {
    display: flex;
    flex-direction: column;
}
</style>