<template>
  <div class="h-100">
    <el-card class="box-card  h-100 editone-view-card">
      <template #header>
        <div class="card-header">
          <div class="disp-bw">
            <div class="disp-col-wise">
              <h3>Create your prompt</h3>
              <span>A well-designed prompt will allow the AI to better interpret and respond appropriately, <a
                  href="https://www.lipsum.com/">learn more.</a> </span>
            </div>
            <div class="disp-center">
              <el-button type="primary" icon="PhoneFilled">
                Test your assistant
              </el-button>
            </div>


          </div>
        </div>
      </template>
      <div class="card-body-prompt disp-col-wise">
        <div class="card-body-assistant-prompt-id">
          <div class="disp-col-wise m-r-10 m-b-10 ">
            <div class="pd-b-10"><span class="font-600">1. Set up your actions
              </span></div>
            <div class="disp-col-wise border pd-20 w-20">
              <div class="disp-flex m-b-15">
                <div>
                  <el-icon class="m-r-10" :size="20">
                    <Message />
                  </el-icon>
                </div>
                <div class="disp-center">
                  <el-badge :is-dot="true" type="primary">SMS
                  </el-badge>
                </div>
              </div>
              <div class="disp-flex m-b-15">
                <div class="disp-center"><span class="font-600">Send SMS</span></div>
                <div>
                  <el-icon class="m-l-10" :size="20">
                    <QuestionFilled />
                  </el-icon>
                </div>
              </div>
              <div>Send a custom SMS after the call</div>
            </div>
          </div>
        </div>
        <el-divider />
        <div class="card-body-assitant-prompt-config">

          <div class="disp-col-wise m-r-10 m-b-10">
            <div class="disp-bw pd-b-10">
              <div class="disp-col-wise">
                <div class="font-600">2. Write your prompt</div>
                <div><a href="https://developer.mozilla.org/en-US/">Prompting Guidelines</a></div>
              </div>
              <div>
                <el-button icon="Files">Use a template</el-button>
              </div>
            </div>
            <div class="disp-col-wise border">

              <el-input v-model="prompt" :rows="8" type="textarea" placeholder="Please input" />
            </div>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="disp-bw">
          <div class="disp-flex">
            <div class="disp-col-wise">
              <h4>2 steps remaining</h4>
              <el-progress :stroke-width="7" :percentage="33" :show-text="true">
              </el-progress>
            </div>
          </div>
          <div class="disp-flex-r">
            <div class="disp-center m-r-10">
              <el-button @click="switchEditView('one')">Back</el-button>
            </div>
            <div class="disp-center">
              <el-button type="info" @click="switchEditView('three')">Next</el-button>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'EditTwoView',
  components: {

  },
  data() {
    return {
      prompt: ''
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
      this.$emit('switchEditView', params);
    }

  },

}
</script>
<style lang="scss"></style>