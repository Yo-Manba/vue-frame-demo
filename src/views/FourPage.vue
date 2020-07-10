
<template>
    <div>
        <Header :hasBack="true" :title="'四级页面'" />
        <div class="scroll-wrapper" ref="scroll">
            <div class="scroll-content">
                <div
                    class="scroll-item"
                    v-for="(item, index) of 100"
                    :key="index"
                >
                    {{ item }}四级页面
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Header from "../components/Header";

export default {
    name: "FourPage",
    data() {
        return {};
    },
    components: {
        Header
    },

    mounted() {
        this.init();
    },

    beforeDestroy() {
        this.bs.destroy();
    },

    methods: {
        init() {
            this.bs = new BScroll(this.$refs.scroll, {
                scrollY: true,
                click: true,
                startY: 0,
                probeType: 3 // listening scroll hook
            });

            this.bs.on("scrollEnd", pos => {
                //    console.log(pos)
            });
        }
    }
};
</script>

<style lang="stylus" scoped>
.scroll-wrapper {
    position: fixed;
    top: 1.1rem;
    left: 0;
    width: 100%;
    height: calc(100% - 1.1rem);
    overflow: hidden;
    z-index 111
    background-color #fff

    .scroll-content {
        min-height: calc(100% + 1px);

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
    }
}
</style>