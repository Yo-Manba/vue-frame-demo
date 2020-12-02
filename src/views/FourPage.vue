
<template>
    <div>
        <Header :hasBack="true" :title="'四级页面'" />
        <InnerPage ref="innerPage">
            <div class="scroll-item" v-for="(item, index) of 100" :key="index">
                {{ item }}四级页面
            </div>
        </InnerPage>
    </div>
</template>

<script>
import Header from "../components/Header";
import InnerPage from "../components/InnerPage";

export default {
    name: "FourPage",
    data() {
        return {};
    },
    components: {
        Header,
        InnerPage
    },

    methods: {},

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