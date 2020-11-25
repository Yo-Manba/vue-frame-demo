
<template>
    <div>
        123
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {};
    },

    components: {},

    computed: {},

    methods: {},

    beforeCreate() {
        console.log("innerheader beforeCreate");
    },

    created() {
        console.log("innerheader created");
    },

    beforeMount() {
        console.log("innerheader beforeMount");
    },

    mounted() {
        console.log("innerheader mounted");
    },

    beforeUpdate() {
        console.log("innerheader beforeUpdate");
    },

    updated() {
        console.log("innerheader updated");
    },

    beforeDestroy() {
        console.log("innerheader beforeDestroy")
    },

    destroyed() {
        console.log("innerheader destroyed")
    },

    activated() {},
};
</script>

<style lang='less' scoped>
</style>