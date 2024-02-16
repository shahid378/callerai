<template>
    <div class="main-menu-container">
        <el-menu default-active="assistants" class="el-menu-vertical-demo" @open="handleOpen">
            <el-menu-item @click="handleOpen" index="assistants">
                <el-icon>
                    <User />
                </el-icon>
                <span>Assistants</span>
            </el-menu-item>
            <el-menu-item @click="handleOpen" index="apiKeys">
                <el-icon>
                    <Key />
                </el-icon>
                <span>API Keys</span>
            </el-menu-item>
            <el-menu-item @click="handleOpen" index="settings">
                <el-icon>
                    <setting />
                </el-icon>
                <span>Settings</span>
            </el-menu-item>
            <el-divider border-style="dashed" />
            <el-menu-item @click="handleOpen" index="affiliate">
                <el-icon>
                    <Money />
                </el-icon>
                <span>Affiliate</span>
            </el-menu-item>
            <el-menu-item @click="handleOpen" index="documentation">
                <el-icon>
                    <Document />
                </el-icon>
                <span>Documentation</span>
            </el-menu-item>
            <el-menu-item @click="handleOpen" index="apiReference">
                <el-icon>
                    <Link />
                </el-icon>
                <span>API Reference</span>
            </el-menu-item>
            <el-menu-item @click="handleOpen" index="community">
                <el-icon>
                    <UserFilled />
                </el-icon>
                <span>Community</span>
            </el-menu-item>
        </el-menu>
        <div>
            <a target="_blank" ref="menu_ex_links" href=""></a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MainMenu',
    mounted() {
        this.handleOpen({index: 'assistants'})
    },
    methods: {
        handleOpen(params){
            params = params.index
            let expandViewMenuArr= ['assistants', 'apiKeys', 'settings', 'affiliate','drawer'];
            if(expandViewMenuArr.indexOf(params)>= 0){                
                this.$store.dispatch("changeExpandView", params);
            }
            else if(params === 'documentation'){
                let element = this.$refs.menu_ex_links;
                element.href = 'https://www.lipsum.com/';
                element.click();
            }
            else if(params === 'apiReference'){
                let element = this.$refs.menu_ex_links;
                element.href = 'https://developer.mozilla.org/en-US/';
                element.click();
            }
            else if(params === 'community'){
                let element = this.$refs.menu_ex_links;
                element.href = 'https://stackoverflow.com/';
                element.click();
            }
        }
    },

}
</script>
<style>
.main-menu-container {
    height: 60%;
    border-bottom: 1px solid rgb(237 221 221);
}
</style>