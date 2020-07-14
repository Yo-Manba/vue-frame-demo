<template>
    <!-- 整体页面 -->
    <div id="app">
        <!-- 一级页面视口(包含Header高度) -->
        <transition :name="transitionName">
            <keep-alive :include="include">
                <router-view class="onePage" />
            </keep-alive>
        </transition>

        <!-- 底部导航栏 -->
        <BottomTabBar v-if="showBottomTabBar" />
    </div>
</template>

<script>
import BottomTabBar from "./components/BottomTabBar";

export default {
    data() {
        return {
            showBottomTabBar: true,
            transitionName: ""
        };
    },
    components: {
        BottomTabBar
    },

    computed: {
        include() {
            return this.$store.state.catch_components;
        }
    },

    mounted() {},

    methods: {},

    watch: {
        $route(to, from) {
            console.log(to);

            if (
                to.path === "/" ||
                to.path === "/contacts" ||
                to.path === "/discover" ||
                to.path === "/mine"
            ) {
                this.showBottomTabBar = true;
            } else {
                this.showBottomTabBar = false;
            }

            // 如果to索引大于from索引,判断为前进状态,反之则为后退状态
            if (to.meta.index > from.meta.index) {
                this.transitionName = "slide-left";
            } else if (to.meta.index == from.meta.index) {
                this.transitionName = "";
            } else {
                this.transitionName = "slide-right";
            }
        }
    }
};
</script>

<style lang="less">
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
    transition: all .4s;
    position: absolute;
    width: 100%;
    left: 0;
    box-shadow: 0 0 10px #000;
}

.slide-left-enter {
    transform: translate3d(100%, 0, 0);
    box-shadow: 0 0 10px #000;
}
.slide-left-leave-active {
    transform: translate3d(-25%, 0, 0);
    box-shadow: 0 0 10px #000;
}

.slide-right-enter {
    transform: translate3d(-25%, 0, 0);
    box-shadow: 0 0 10px #000;
    z-index: -1;
}
.slide-right-leave-active {
    transform: translate3d(100%, 0, 0);
    box-shadow: 0 0 10px #000;
    z-index: 1;
}



// 整体页面
body {
    margin: 0;
    height: 100%;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
}

// 一级页面视口(包含Header高度)
.onePage {
    height: 100%;
    box-sizing: border-box;
}
</style>
