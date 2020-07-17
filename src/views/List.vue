
<template>
    <div>
        <Header :hasBack="true" :title="'Pulldown and Pullup'" />
        <InnerPage ref="innerPage" :pulldown="true" :pullup="true" :pullupTxt="true">
            <ul class="pulldown-list">
                <li v-for="i of 100" :key="i" class="pulldown-list-item">
                    {{ `I am item ${i} ` }}
                </li>
            </ul>
        </InnerPage>
    </div>
</template>

<script>
import Header from "../components/Header";
import InnerPage from "../components/InnerPage";
import { Toast } from "vant";

export default {
    name: "Refresh",
    data() {
        return {};
    },

    components: {
        Header,
        InnerPage
    },

    computed: {},

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

    mounted() {
        this.$refs.innerPage.init();
    },

    activated() {},

    beforeRouteEnter(to, from, next) {
        if (from.path === "/下级页面的路径") {
            next(vm => {
                vm.$store.commit("delComponent", "当前页面组件名称");
            });
        }
        next();
    },

    beforeRouteLeave(to, from, next) {
        if (to.path === "/下级页面的路径") {
            this.$store.commit("addComponent", "当前页面组件名称");
        }
        setTimeout(() => {
            next();
        }, 0);
    }
};
</script>

<style lang='stylus' scoped>
.pulldown-list-item {
    padding: 15px 0;
    list-style: none;
    border-bottom: 1px solid #ccc;
}
</style>