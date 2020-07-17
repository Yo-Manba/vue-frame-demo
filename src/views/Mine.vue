
<template>
    <div>
        <Header :hasBack="false" :title="'我的'" />
        <HomePage ref="homePage" :pulldown="true" :pullup="true" :pullupTxt="true">
            <ul class="pulldown-list">
                <li v-for="i of 100" :key="i" class="pulldown-list-item">
                    {{ `I am item ${i} ` }}
                </li>
            </ul>
        </HomePage>
    </div>
</template>

<script>
import Header from "../components/Header";
import HomePage from "../components/HomePage";

export default {
    name: "Mine",
    data() {
        return {};
    },
    components: {
        Header,
        HomePage
    },

    methods: {
        /**
         * 页面相关事件处理函数--监听用户下拉动作
         */
        async onPullDownRefresh() {
            console.log("onPullDownRefresh");

            return new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, 800);
            });
        },

        /**
         * 页面上拉触底事件的处理函数
         */
        async onReachBottom() {
            console.log("onReachBottom");

            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(false);
                }, 1800);
            });
        }
    },

    created() {
        console.log("created")
    },

    mounted() {
        console.log("mounted");
        this.$refs.homePage.init();
    },

    activated() {
        console.log("activated");
    },

    beforeDestroy() {
        console.log("beforeDestroy");
    }
};
</script>

<style lang="stylus" scoped>
.pulldown-list-item {
    padding: 15px 0;
    list-style: none;
    border-bottom: 1px solid #ccc;
}
</style>