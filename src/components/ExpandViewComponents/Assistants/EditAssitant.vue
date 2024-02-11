<template>
    <div class="h-100">
        <div class="h-100">
            <EditOneView />
        </div>
        <div class="h-100">
            <EditTwoView />
        </div>
        <div class="h-100">
            <EditThreeView />
        </div>
    </div>
</template>
<script>
import EditOneView from './EditOneView';
import EditTwoView from './EditTwoView';
import EditThreeView from './EditThreeView';
export default {
    name: 'EditAssitant',
    components: {
        EditOneView, EditTwoView, EditThreeView
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
<style></style>