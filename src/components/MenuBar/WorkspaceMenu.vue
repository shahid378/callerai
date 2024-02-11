<template>
    <div class="workspace-container disp-center">
        <el-select v-model="value" style="width: 100%" 
        filterable
        remote
        reserve-keyword
        placeholder="Select a workspace"
        :remote-method="remoteMethod">
            <el-option v-for="item in workspaces" :key="item.value" :label="item.label" :value="item.value" />
            <template #footer>
                <el-button  class="wd-100" type="primary"  text bg size="small" @click="onAddOption">
                    Create New Workspace
                </el-button>
            </template>
        </el-select>
    </div>
</template>
<script>
export default {
    name: 'WorkspaceMenu',
    components: {

    },
    data() {
        return {
            workspaces:[{
                value: 'workspace1',
                label: 'workspace1',
            },{
                value: 'workspace2',
                label: 'workspace2',
            },{
                value: 'workspace3',
                label: 'workspace3',
            },
        ]
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
.workspace-container {
    height: 10%;
    border-bottom: 1px solid rgb(224, 217, 217);
    margin: 0px 1.5* $base_ten;
}
</style>