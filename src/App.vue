<template>
    <!-- 整体页面 -->
    <div id="app">
        <!-- 一级页面视口(包含Header高度) -->
        <keep-alive :include="include">
            <router-view class="onePage" />
        </keep-alive>
        <!-- 底部导航栏 -->
        <BottomTabBar />
    </div>
</template>

<script>
import BottomTabBar from './components/BottomTabBar';

export default {
    data() {
        return {
            
        };
    },
    components: {
        BottomTabBar
    },

    mounted() {
        
    },
    methods: {
        
    },
    computed: {
        include(){
            return this.$store.state.catch_components
        }
    }
};
</script>

<style lang="less">
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
    height: calc(100% - 1.1rem);
    box-sizing: border-box;
}

</style>
