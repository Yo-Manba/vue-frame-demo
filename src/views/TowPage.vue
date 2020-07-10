<template>
    <div class="scroll-wrapper" ref="scroll">
        <div class="scroll-content">
            <div
                class="scroll-item"
                v-for="(item, index) of 100"
                :key="index"
                @click="toThreePage(item)"
            >
                {{ item }}二级页面
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
    name: "TowPage",
    data() {
        return {};
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
        },

        toThreePage(item) {
            this.$router.push({ name: "threePage", params: { info: item } });
            // this.$router.go(-1)
        }
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
    },

};
</script>

<style lang="stylus" scoped>
.scroll-wrapper {
    position: relative;
    z-index: 111;
    background-color: #fff;
    height: 100%;
    overflow: hidden;

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
