
<template>
    <div>
        <Header :hasBack="true" :title="'三级页面'" />
        <InnerPage ref="innerPage">
            <div
                class="scroll-item"
                v-for="(item, index) of 100"
                :key="index"
                @click="toFourPage(item)"
            >
                {{ item }}三级页面
            </div>
        </InnerPage>
    </div>
</template>

<script>
import Header from "../components/Header";
import InnerPage from "../components/InnerPage";

export default {
    name: "ThreePage",
    data() {
        return {};
    },
    components: {
        Header,
        InnerPage
    },

    methods: {
        toFourPage(item) {
            this.$router.push({ name: "fourPage", params: { info: item } });
        }
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
        if (from.path === "/fourPage") {
            next(vm => {
                // 通过 `vm` 访问组件实例
                vm.$store.commit("delComponent", "ThreePage");
            });
        }
        next();
    },

    beforeRouteLeave(to, from, next) {
        if (to.path === "/fourPage") {
            this.$store.commit("addComponent", "ThreePage");
        }
        setTimeout(() => {
            next();
        }, 0);
    }
};
</script>

<style lang="stylus" scoped>
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