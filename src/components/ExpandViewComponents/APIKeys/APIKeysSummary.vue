<template>
  <div class="disp-block h-100 y-scroller">
    <el-card class="box-card editone-view-card">
      <template #header>
        <div class="card-header">
          <div class="disp-col-wise">
            <h3>CallerAi API Key</h3>
            <span>Allows interaction with REST API endpoints, Widgets, and Plugins. Learn more.
            </span>
          </div>
        </div>
      </template>
      <div class="disp-col-wise h-100 y-scroller">
        <div class="disp-col-wise">
          <el-table :data="getAPIData.callerAiApi" style="width: 100%">
            <el-table-column prop="authToken" label="Key" />
            <el-table-column prop="createdDate" label="Created" />
            <el-table-column prop="status" label="Status" />
            <el-table-column fixed="right" label="Operations" width="120">
              <template #default="scope">
                <div class="disp-flex"></div>
                <el-button type="primary" size="small" @click.prevent="copyAPIKey()">
                  Copy
                </el-button>
                <el-button icon="Delete" @click.prevent="deleteAPI(scope.row)" circle />
              </template>
            </el-table-column>
          </el-table>
          <div class="m-t-10">
            <span class="font-600">NOTE: </span><span>{{ apimsg }}</span>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="disp-flex place-end">
          <el-button type="info" @click="createNewAPIKey()">Create New API Key</el-button>
        </div>
      </template>
    </el-card>
    <div class="m-t-b-15">
      Other Services
    </div>
    <el-card class="box-card editone-view-card m-b-25">
      <template #header>
        <div class="card-header">
          <div class="disp-bw">
            <h3>Twillio</h3>
            <a href="">Learn More</a>
          </div>
        </div>
      </template>
      <div class="disp-col-wise h-100 y-scroller">
        <div class="disp-col-wise">
          <div class="m-b-20">
            <div class="disp-bw m-b-10">
              <span>Account SID</span>
              <span>Not connected</span>
            </div>
            <div>
              <el-input v-model="getAPIData.twillio.accountSID" placeholder="Please input" />
            </div>
          </div>
          <div>
            <div class="disp-bw m-b-10">
              <span>Auth Token</span>
            </div>
            <div>
              <el-input v-model="getAPIData.twillio.authToken" placeholder="Please input" />
            </div>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="disp-flex place-end">
          <el-button type="info" @click="saveAllApis()">Save</el-button>
        </div>
      </template>
    </el-card>
    <el-card class="box-card editone-view-card">
      <template #header>
        <div class="card-header">
          <div class="disp-bw">
            <h3>ElevenLabs</h3>
            <a href="">Learn More</a>
          </div>
        </div>
      </template>
      <div class="disp-col-wise h-100 y-scroller">
        <div class="disp-col-wise">
          <div class="m-b-20">
            <div class="disp-bw m-b-10">
              <span>API Key</span>
              <span>Not connected</span>
            </div>
            <div>
              <el-input v-model="getAPIData.elevenLabs" placeholder="Please input" />
            </div>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="disp-flex place-end">
          <el-button type="info" @click="saveAllApis()">Save</el-button>
        </div>
      </template>
    </el-card>
    <div class="m-t-b-15">
      LLMs
    </div>
    <el-card class="box-card editone-view-card m-b-25">
      <template #header>
        <div class="card-header">
          <div class="disp-bw">
            <h3>OpenAI</h3>
            <div>
              <el-switch v-model="getAPIData.openAi.isEnabled" /> <span>{{ getAPIData.openAi.isEnabled ? 'Enabled' : 'Disabled' }}</span>
            </div>
          </div>
        </div>
      </template>
      <div class="disp-col-wise h-100 y-scroller">
        <div class="disp-col-wise">
          <div class="m-b-20">
            <div class="disp-bw m-b-10">
              <span>API Key</span>
            </div>
            <div>
              <el-input v-model="getAPIData.openAi.authToken" placeholder="Please input" />
            </div>
          </div>
          <div class="m-t-10">
            <span class="font-600">NOTE: </span><span>{{ openAIMsg }}</span>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="disp-flex place-end">
          <el-button type="info" @click="saveAllApis()">Save</el-button>
        </div>
      </template>
    </el-card>
    <el-card class="box-card editone-view-card">
      <template #header>
        <div class="card-header">
          <div class="disp-bw">
            <h3>Anthropic</h3>
            <div>
              <el-switch v-model="getAPIData.anthropic.isEnabled" /> <span>{{ getAPIData.openAi.isEnabled ? 'Enabled' : 'Disabled' }}</span>
            </div>
          </div>
        </div>
      </template>
      <div class="disp-col-wise h-100 y-scroller">
        <div class="disp-col-wise">
          <div class="m-b-20">
            <div class="disp-bw m-b-10">
              <span>API Key</span>
            </div>
            <div>
              <el-input v-model="getAPIData.anthropic.authToken" placeholder="Please input" />
            </div>
          </div>
          <div class="m-t-10">
            <span class="font-600">NOTE: </span><span>{{ openAIMsg }}</span>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="disp-flex place-end">
          <el-button type="info" @click="saveAllApis()">Save</el-button>
        </div>
      </template>
    </el-card>

  </div>
</template>
<script>
export default {
  name: 'APIKeysSummary',
  data() {
    return {
      openAIFlag: false,
      anthropicFlag: false,
      apimsg: 'Remember to keep your API token secure, as it grants access to your account and the associated resources. If you believe your token has been compromised, you can generate a new one.',
      openAIMsg: ' Please keep your API token secure, as it gives you access to your account and the associated resources. If you believe your token has been compromised, please reset it.',
      anthropicMsg: 'Please keep your API token secure, as it gives you access to your account and the associated resources. If you believe your token has been compromised, please reset it.',
    }
  },
  computed: {
    getCurrentWorkspace() {
      return this.$store.state.menuStore.currentWorkSpace;
    },
    getAPIData() {
      let userDB = this.$store.state.userStore.userData
      if (userDB['workspaces'] && userDB['workspaces'].length) {
        let apiData = userDB['workspaces'].map(obj => {
          if (obj.workspaceName === this.getCurrentWorkspace.workspaceName) {
            return obj.userSavedApis
          }
        })
        apiData = apiData.filter(Boolean);
        return apiData[0] == null ? {} : apiData[0];
      }
      else return {}
    }
  },
  methods:{
    saveAllApis(){
      this.$store.dispatch('saveDataInDB');
    },
    createNewAPIKey(){
      let date = new Date;
      let userDB = this.$store.state.userStore.userData;
      if (userDB['workspaces'] && userDB['workspaces'].length) {
        userDB['workspaces'].map(obj => {
          if (obj.workspaceName === this.getCurrentWorkspace.workspaceName) {
            let apiObj = {
              'authToken': Math.random(),
              'createdDate': date.getDate(),
              'status': 'Active',
            };
            obj.userSavedApis.callerAiApi.push(apiObj)
          }
        });
      }
      this.saveAllApis()
    }
  }
}
</script>
<style></style>