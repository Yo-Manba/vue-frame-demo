<template>
    <!-- 整体页面 -->
    <div id="app">
        <!-- 一级页面视口 -->
        <keep-alive :include="include" :max="8"><router-view class="routerView" /></keep-alive>
        <!-- 底部导航栏 -->
        <div id="nav" class="border-top">
            <router-link replace to="/">
                <div>
                    <span class="iconfont iconweixin"></span>
                    <div>首页</div>
                </div>
            </router-link>
            <router-link replace to="/contacts">
                <div>
                    <span class="iconfont icontongxunlu"></span>
                    <div>通讯录</div>
                </div>
            </router-link>
            <router-link replace to="/discover">
                <div>
                    <span class="iconfont iconzhinanzhen"></span>
                    <div>发现</div>
                </div>
            </router-link>
            <router-link replace to="/mine">
                <div>
                    <span class="iconfont iconmy-fill"></span>
                    <div>我的</div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            include: ['Chat', 'Contacts', 'Discover', 'Mine']
        };
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

// 一级页面视口
.routerView {
    // border: 1px solid red;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 1.1rem);
    box-sizing: border-box;
}

// 底部导航栏
#nav {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    height: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    background-color: #f5f5f5;
    z-index: 99;

    a {
        font-size: 0.24rem;
        color: #666;

        .iconfont {
            font-size: 0.42rem;
            display: block;
            margin-bottom: 5px;
        }

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
