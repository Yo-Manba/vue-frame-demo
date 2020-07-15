
<template>
    <div>
        <Header :hasBack="true" :title="'NumberKeyboard'" />
        <InnerPage ref="innerPage">
            <van-cell @touchstart.native.stop="show = true">
                弹出默认键盘
            </van-cell>
            <van-number-keyboard
                :show="show"
                @blur="show = false"
                @input="onInput"
                @delete="onDelete"
            />

            <van-cell @touchstart.native.stop="show = true">
                弹出带右侧栏的键盘
            </van-cell>
            <van-number-keyboard
                :show="show"
                theme="custom"
                extra-key="."
                close-button-text="完成"
                @blur="show = false"
                @input="onInput"
                @delete="onDelete"
            />

            <van-cell
                plain
                type="primary"
                @touchstart.native.stop="show = true"
            >
                弹出身份证号键盘
            </van-cell>
            <van-number-keyboard
                :show="show"
                extra-key="X"
                close-button-text="完成"
                @blur="show = false"
                @input="onInput"
                @delete="onDelete"
            />

            <van-cell plain type="info" @touchstart.native.stop="show = true">
                弹出带标题的键盘
            </van-cell>
            <van-number-keyboard
                :show="show"
                title="键盘标题"
                extra-key="."
                close-button-text="完成"
                @blur="show = false"
                @input="onInput"
                @delete="onDelete"
            />
        </InnerPage>
    </div>
</template>

<script>
import Header from "../components/Header";
import InnerPage from "../components/InnerPage";
import { Toast } from "vant";

export default {
    name: "NumberKeyboard",
    data() {
        return {
            show: false
        };
    },

    components: {
        Header,
        InnerPage
    },

    computed: {},

    methods: {
        onInput(value) {
            console.log(value);
            Toast(value);
        },
        onDelete() {
            Toast("删除");
        }
    },

    mounted() {
        this.$refs.innerPage.init();
    },

    activated() {},

    beforeRouteEnter(to, from, next) {
        if (from.path === "/下级页面的路径") {
            next(vm => {
                vm.$store.commit("delComponent", "当前页面组件名称");
            });
        }
        next();
    },

    beforeRouteLeave(to, from, next) {
        if (to.path === "/下级页面的路径") {
            this.$store.commit("addComponent", "当前页面组件名称");
        }
        setTimeout(() => {
            next();
        }, 0);
    }
};
</script>

<style lang='less' scoped>
</style>