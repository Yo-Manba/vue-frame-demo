<template>
    <div>
        <Header :hasBack="false" :title="'首页'" />
        <HomePage ref="homePage">
            <div>
                <van-button type="default" @click="clickHandler"
                    >默认按钮</van-button
                >
                <van-button type="primary">主要按钮</van-button>
                <van-button type="info">信息按钮</van-button>
                <van-button type="warning">警告按钮</van-button>
                <van-button type="danger">危险按钮</van-button>
            </div>

            <van-image
                width="100"
                height="100"
                fit="cover"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                
            />

            <van-cell is-link @click="showPopup">展示弹出层</van-cell>

        </HomePage>

        <van-popup v-model="show" position="bottom">
            <div v-for="(item, index) of 100" :key="index">啥客户</div>
        </van-popup>
        

    </div>
</template>

<script>
import Header from "../components/Header";
import HomePage from "../components/HomePage";

export default {
    name: "Chat",
    data() {
        return {
            show: false
        };
    },
    components: {
        Header,
        HomePage
    },

    methods: {
        clickHandler(item) {
            this.$router.push({ name: "towPage", params: { info: item } });
        },

        showPopup() {
            this.show = true;
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

// 按钮
.van-button--normal {
    padding: 0 0.3rem;
    font-size: 0.28rem;
}

// 弹出层
.van-popup--bottom{
    height 8rem
    border-top-left-radius .2rem
    border-top-right-radius .2rem
    padding .2rem
    box-sizing border-box
}

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
