
<template>
    <div class="scroll-wrapper" ref="scroll">
        <div class="scroll-content">
            <!-- 下拉加载模块 -->
            <div v-if="pulldown" class="pulldown-wrapper">
                <div v-show="beforePullDown"><span>下拉刷新</span></div>
                <div v-show="!beforePullDown">
                    <div v-show="isPullingDown"><span>加载中...</span></div>
                    <div v-show="!isPullingDown"><span>刷新成功</span></div>
                </div>
            </div>
            <!-- 页面插槽 -->
            <slot />
        </div>
    </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import PullDown from "@better-scroll/pull-down";
BScroll.use(PullDown);

export default {
    name: "InnerPage",
    props: [
        "pulldown"
    ],
    data() {
        return {
            beforePullDown: true,
            isPullingDown: false,
            TIME_BOUNCE: 800,
            TIME_STOP: 600,
            THRESHOLD: 90,
            STOP: 56
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
                probeType: 3, // listening scroll hook

                bounceTime: this.TIME_BOUNCE,
                pullDownRefresh: this.pulldown ? {
                    threshold: this.THRESHOLD,
                    stop: this.STOP
                } : false
            });
            
            // 监听下拉刷新
            if(this.pulldown) {
                this.bs.on("pullingDown", this.pullingDownHandler);
            };
        },

        // 下拉刷新模块****************************************************************************************************************
        async pullingDownHandler() {
            this.beforePullDown = false;
            this.isPullingDown = true;
            await this.$parent.requestData();
            this.isPullingDown = false;
            this.finishPullDown();
        },

        async finishPullDown() {
            const stopTime = this.TIME_STOP;
            await new Promise(resolve => {
                setTimeout(() => {
                    this.bs.finishPullDown();
                    resolve();
                }, stopTime);
            });
            setTimeout(() => {
                this.beforePullDown = true;
                this.bs.refresh();
            }, this.TIME_BOUNCE);
        }
        // ****************************************************************************************************************************
        
    },

    created() {
        // console.log("created")
    },

    mouted() {
        // console.log("mounted");
    },

    activated() {
        // console.log("activated");
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
    height: calc(100% - 1rem);
    overflow: hidden;
    background-color: #fff;
    z-index: 111;

    .scroll-content {
        min-height: calc(100% + .03rem);

        // 下拉加载模块
        .pulldown-wrapper {
            position: absolute;
            transform: translateY(-100%) translateZ(0);
            width: 100%;
            padding: 20px;
            text-align: center;
            color: #999;
            box-sizing: border-box;
        }
    }
}
</style>