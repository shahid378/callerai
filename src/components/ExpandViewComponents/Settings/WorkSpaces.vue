
<template>
    <div class="disp-col-wise">
        <div class="disp-col-wise pd-30 border m-b-25">
            <div class="font-30 font-600">Workspace</div>
            <div class="disp-col-wise pd-r-l-60">
                <div class="m-t-10">
                    Workspace ID
                </div>
                <div class="m-t-b-10">
                    <el-input disabled v-model="workspaceId" />
                </div>
                <div class="m-t-10">
                    Workspace Name
                </div>
                <div class="m-t-b-10">
                    <el-input v-model="workspaceName" placeholder="Please input workspace name here" />
                </div>
                <div class="m-t-10">
                    Workspace website if any
                </div>
                <div class="m-t-b-10">
                    <el-input v-model="website" placeholder="Please input website here" />
                </div>
                <div class="m-t-b-10">
                    <el-button type="primary">Save Changes</el-button>
                </div>
            </div>
        </div>
        <div class="disp-col-wise pd-30 border">
            <div class="disp-bw m-b-10">
                <div>Users</div>
                <div>
                    <el-button type="primary">Invite User</el-button>
                </div>
            </div>
            <div class="dip-col-wise pd-25 border">
                <div class="disp-bw">
                    <div class="font-600">Email</div>
                    <div class="font-600">Status
                    </div>
                </div>
                <el-divider/>
                <div class="disp-bw">
                    <div>{{userEmail}}</div>
                    <div>{{userProfile}}
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'WorkSpaces',
    data() {
        return {
            workspaceId: 'q4324523tefgwert5',
            workspaceName: '',
            userEmail:'shahid.mansoori.378@gmail.com',
            userProfile:'Developer'
        }
    },
}
</script>