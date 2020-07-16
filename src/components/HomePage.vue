
<template>
    <div class="scroll-wrapper" ref="scroll">
        <div class="scroll-content">
            <slot />
        </div>
    </div>
</template>

<script>
import BScroll from "@better-scroll/core";

export default {
    name: "HomePage",
    data() {
        return {
            
        };
    },

    components: {},

    computed: {},

    methods: {
        init() {
            // 实例化better-scroll
            this.bs = new BScroll(this.$refs.scroll, {
                scrollY: true,
                click: true,
                startY: 0,
                probeType: 3 // listening scroll hook
            })
        }
    },

    activated() {
        // console.log("activated");
        this.bs.refresh();
    },

    beforeDestroy() {
        // console.log("beforeDestroy")
        this.bs.destroy();
    }
};
</script>

<style lang="stylus" scoped>
.scroll-wrapper {
    position: fixed;
    top: 1rem;
    left: 0;
    width: 100%;
    height: calc(100% - 2.1rem);
    overflow: hidden;
    z-index: 111;

    .scroll-content {
        min-height: calc(100% + 1px);
    }
}
</style>