<template>
    <div>
        <Header :hasBack="false" :title="'首页'" />
        <HomePage ref="homePage" />
    </div>
</template>

<script>
import Header from '../components/Header';
import HomePage from '../components/HomePage';

export default {
    name: "Chat",
    data() {
        return {
            
        };
    },
    components: {
        Header,
        HomePage
    },

    methods: {

    },

    mounted() {
        console.log("mounted")
        this.$refs.homePage.init()
    },

    activated() {
        console.log("activated")
    },

    beforeDestroy() {
        console.log("beforeDestroy")
    }
};
</script>

<style lang="stylus" scoped>

</style>
