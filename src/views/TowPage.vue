<template>
    <div>
        <Header :hasBack="true" :title="'二级页面'" />
        <InnerPage ref="innerPage">
            fdsal
        </InnerPage>
    </div>
</template>

<script>
import Header from "../components/Header";
import InnerPage from "../components/InnerPage";

export default {
    name: "TowPage",
    data() {
        return {
        };
    },
    components: {
        Header,
        InnerPage
    },

    methods: {
        toThreePage(item) {
            this.$router.push({ name: "threePage", params: { info: item } });
        },


    },

    mounted() {
        console.log("mounted");
        this.$refs.innerPage.init();
    },

    activated() {
        console.log("activated");
    },

    beforeDestroy() {
        console.log("beforeDestroy");
    },

    beforeRouteEnter(to, from, next) {
        if (from.path === "/threePage") {
            next(vm => {
                // 通过 `vm` 访问组件实例
                vm.$store.commit("delComponent", "TowPage");
            });
        }
        next();
    },

    beforeRouteLeave(to, from, next) {
        if (to.path === "/threePage") {
            this.$store.commit("addComponent", "TowPage");
        }
        setTimeout(() => {
            next();
        }, 0);
    }
};
</script>

<style lang="stylus" scoped>

.van-popup--bottom {
    min-height: 4rem;
    border-top-left-radius: 0.2rem;
    border-top-right-radius: 0.2rem;
}

.scroll-item {
    height: 1rem;
    line-height: 1rem;
    font-size: 0.48rem;
    font-weight: bold;
    border-bottom: 0.02rem solid #eee;
    text-align: center;

    &:nth-child(2n) {
        background-color: #f3f5f7;
    }

    &:nth-child(2n+1) {
        background-color: #42b983;
    }
}
</style>
