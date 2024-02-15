<template>
    <div class="h-100">
        <el-card class="box-card  h-100 editone-view-card">
            <template #header>
                <div class="card-header">
                    <div class="disp-bw">
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
            <div class="card-body disp-col-wise">
                <div class="card-body-assistant-id">
                    <div class="disp-col-wise m-r-10 m-b-10">
                        <div class="pd-b-10"><span class="font-600">Image (optional)</span></div>
                        <div class="disp-flex">
                            <div class="m-r-20 disp-center"><img src="" alt="img"></div>
                            <div class="disp-col-wise ">
                                <div class="m-t-b-5">Recommended size: 250px x 250px</div>
                                <el-button>Upload Photo</el-button>
                            </div>
                        </div>
                    </div>
                    <div class="disp-bw">

                        <div class="disp-col-wise w-100 m-r-5">
                            <div class="font-600">Name</div>
                            <div class="m-t-b-5">What name will your assistant go by</div>
                            <div class="">
                                <el-input v-model="input" placeholder="Please input" />
                            </div>
                        </div>
                        <div class="disp-flex w-100 place-end m-l-5">
                            <div class="disp-col-wise m-r-10 w-100">
                                <div class="font-600">Select voice</div>
                                <div class="m-t-b-5">Choose a preset voice or clone your own</div>
                                <div class="">
                                    <el-input v-model="input" placeholder="Please input" />
                                </div>
                            </div>
                            <div class="disp-flex-bottom">
                                <el-button icon="VideoPlay">Play</el-button>
                            </div>
                        </div>
                    </div>
                </div>
                <el-divider />
                <div class="card-body-assitant-ai-config">

                    <div class="disp-bw m-b-10">

                        <div class="disp-col-wise w-100 m-r-5">
                            <div class="font-600">AI Model</div>
                            <div class="m-t-b-5">Opt for speed or depth to suit your assistant's role</div>
                            <div class="">
                                <el-input v-model="input" placeholder="Please input" />
                            </div>
                        </div>
                        <div class="disp-flex w-100 place-end m-l-5">
                            <div class="disp-col-wise m-r-10 w-100">
                                <div class="font-600">Voice synthesizer</div>
                                <div class="m-t-b-5">Balance voice quality and response speed</div>
                                <div class="">
                                    <el-input v-model="input" placeholder="Please input" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="disp-bw m-b-10">
                        <div class="disp-col-wise w-100 m-r-5">
                            <div class="font-600">Language
                            </div>
                            <div class="m-t-b-5">Choose your assistant's language</div>
                            <div class="">
                                <el-input v-model="input" placeholder="Please input" />
                            </div>
                        </div>
                        <div class="disp-flex w-100 place-end m-l-5">
                            <div class="disp-col-wise m-r-10 w-100">
                                <div class="font-600">Custom greeting</div>
                                <div class="m-t-b-5">The opening line for your assistant’s call
                                </div>
                                <div class="">
                                    <el-input v-model="input" placeholder="Please input" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="disp-bw">
                        <div class="disp-col-wise w-100 m-r-5 border">
                            <div class="m-l-5 font-600">Enable recordings
                            </div>
                            <div class="disp-flex m-l-5">
                                <div class="disp-center m-r-5">
                                    Toggle to record calls for playback and easy review in the logs.
                                </div>
                                <div><el-switch v-model="value1" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <template #footer>
                <div class="disp-bw">
                    <div class="disp-flex">
                        <div class="disp-col-wise">
                            <h4>3 steps remaining</h4>
                            <el-progress :stroke-width="7" :percentage="0" :show-text="true">
                            </el-progress>
                        </div>
                    </div>
                    <div class="disp-center">
                        <el-button type="info" @click="switchEditView('two')">Next</el-button>

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
        switchEditView(params) {
            this.$emit('switchEditView', params)
        }
    },

}
</script>
<style lang="scss">
.editone-view-card {
    .el-card__body {
        height: 74%;
    }
}
</style>