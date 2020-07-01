<template>
    <div id="app">
        <router-view class="routerView" />
        <div id="nav">
            <router-link replace to="/">
                <div>
                    <span class="iconfont iconweixin"></span>
                    <div>微信</div>
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
    height: 100%;
}

// 页面视口
.routerView{
    border: 1px solid red;
    box-sizing: border-box;
    height: calc(100% - 1.1rem);
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
        font-size: .24rem;
        color: #666;

        .iconfont{
            font-size: .42rem;
            display: block;
            margin-bottom: 5px;
        }

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}


</style>
