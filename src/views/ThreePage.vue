
<template>
    <div class="scroll-wrapper" ref="scroll">
        <div class="scroll-content">
            <div
                class="scroll-item"
                v-for="(item, index) of 100"
                :key="index"
                @click="toFourPage(item)"
            >
                {{ item }}三级页面
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
    name: "ThreePage",
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
            this._registerHooks(["scroll", "scrollEnd"], pos => {
                // console.log(pos);
            });
        },

        _registerHooks(hookNames, handler) {
            hookNames.forEach(name => {
                this.bs.on(name, handler);
            });
        },

        toFourPage(item) {
            this.$router.push({ name: "fourPage", params: { info: item } });
        }

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