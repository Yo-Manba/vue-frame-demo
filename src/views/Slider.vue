
<template>
    <div>
        <Header :hasBack="true" :title="'Slider'" />
        <InnerPage ref="innerPage">
            <div class="box">
                <div class="txt">基础用法</div>
                <van-slider v-model="value" @change="onChange" />

                <div class="txt">指定选择范围</div>
                <van-slider v-model="value" :min="-50" :max="50" />

                <div class="txt">禁用</div>
                <van-slider v-model="value" disabled />

                <div class="txt">指定步长</div>
                <van-slider v-model="value" :step="10" />

                <div class="txt">自定义样式</div>
                <van-slider
                    v-model="value"
                    bar-height="4px"
                    active-color="#ee0a24"
                />

                <div class="txt">自定义按钮</div>
                <van-slider v-model="value" active-color="#ee0a24">
                    <template #button>
                        <div class="custom-button">
                            {{ value }}
                        </div>
                    </template>
                </van-slider>

                <div class="txt">垂直方向</div>
                <div :style="{ height: '100px' }">
                    <van-slider v-model="value" vertical />
                </div>
            </div>
        </InnerPage>
    </div>
</template>

<script>
import Header from "../components/Header";
import InnerPage from "../components/InnerPage";
import { Toast } from "vant";

export default {
    name: "Slider",
    data() {
        return {
            value: 50
        };
    },

    components: {
        Header,
        InnerPage
    },

    computed: {},

    methods: {
        onChange(value) {
            Toast("当前值：" + value);
        }
    },

    mounted() {
        this.$refs.innerPage.init();
    },

    activated() {},

    beforeRouteEnter(to, from, next) {
        if (to.meta.index < from.meta.index) {
            next(vm => {
                vm.$store.commit("delComponent", to.name);
            });
        }
        next();
    },

    beforeRouteLeave(to, from, next) {
        if (from.meta.index !== 1 && to.meta.index > from.meta.index) {
            this.$store.commit("addComponent", from.name);
        }
        setTimeout(() => {
            next();
        }, 0);
    },
};
</script>

<style lang='less' scoped>
.box {
    padding: 0.4rem;
    box-sizing: border-box;
}

.txt {
    margin-top: 0.8rem;
    margin-bottom: 0.2rem;
}

.custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: #ee0a24;
    border-radius: 100px;
}
</style>