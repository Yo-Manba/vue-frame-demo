
<template>
    <div id="nav" class="border-top">
        <router-link replace to="/">
            <div>
                <span class="iconfont iconweixin"></span>
                <div>首页</div>
            </div>
        </router-link>
        <router-link replace to="/contacts">
            <div>
                <span class="iconfont iconzujian"></span>
                <div>组件</div>
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
</template>

<script>
export default {
    name: "",
    data() {
        return {};
    },

    components: {},

    computed: {},

    methods: {}
};
</script>

<style lang='less' scoped>
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