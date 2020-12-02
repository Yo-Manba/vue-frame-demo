
<template>
    <div>
        <Header :hasBack="true" :title="'Pulldown and Pullup'" />
        <InnerPage
            ref="innerPage"
            :pulldown="true"
            :pullup="true"
            :pullupTxt="true"
        >
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
            return new Promise(resolve => {

                // 数据请求完成后执行resolve(), 程序才会继续进行
                resolve();
            });
        },

        /**
         * 页面上拉触底事件的处理函数
         */
        async onReachBottom() {
            return new Promise(resolve => {

                // 数据请求完成后执行resolve(), 程序才会继续进行。可在resolve方法中传入false参数，在没有更多可加载数据时使用
                resolve(false);
            });
        }
    },

    mounted() {
        this.$refs.innerPage.init();
    },

    activated() {},

    beforeRouteEnter(to, from, next) {
        if (to.meta.index < from.meta.index) {
            next(vm => {
                vm.$store.commit("delComponent", to.name);
            });
        }
        next();
    },

    beforeRouteLeave(to, from, next) {
        if (from.meta.index !== 1 && to.meta.index > from.meta.index) {
            this.$store.commit("addComponent", from.name);
        }
        setTimeout(() => {
            next();
        }, 0);
    },
};
</script>

<style lang='stylus' scoped>
.pulldown-list-item {
    padding: 15px 0;
    list-style: none;
    border-bottom: 1px solid #ccc;
}
</style>