<template>
    <div>
        <Header :hasBack="false" :title="'首页'" />
        <HomePage ref="homePage">
            <!-- <div
                class="scroll-item"
                v-for="(item, index) of 100"
                :key="index"
                @click="clickHandler(item)"
            >
                {{ item }}
            </div> -->

            <div>
                <van-button class="aa" type="default" @click="clickHandler">默认按钮</van-button>
                <van-button class="aa" type="primary">主要按钮</van-button>
                <van-button class="aa" type="info">信息按钮</van-button>
                <van-button class="aa" type="warning">警告按钮</van-button>
                <van-button class="aa" type="danger">危险按钮</van-button>
            </div>
            

            <van-image width="100" height="100" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />

        </HomePage>
    </div>
</template>

<script>
import Header from "../components/Header";
import HomePage from "../components/HomePage";

export default {
    name: "Chat",
    data() {
        return {};
    },
    components: {
        Header,
        HomePage
    },

    methods: {
        clickHandler(item) {
            this.$router.push({ name: "towPage", params: { info: item } });
        }
    },

    created() {
        console.log("created");
    },

    mounted() {
        console.log("mounted");
        this.$refs.homePage.init();
    },

    activated() {
        console.log("activated");
    },

    beforeDestroy() {
        console.log("beforeDestroy");
    }
};
</script>

<style lang="stylus" scoped>
.van-button--normal {
    padding: 0 .3rem;
    font-size: .28rem;
}

// .aa{
//     border .01rem solid red
//     width 1rem
//     height 1rem
// }

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
</style>
