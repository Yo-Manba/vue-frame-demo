
<template>
    <div>
        <Header :hasBack="true" :title="'NumberKeyboard'" />
        <InnerPage ref="innerPage">
            <van-cell @touchstart.native.stop="show = true">
                默认样式，数字键盘提供了 input、delete、blur 事件，分别对应输入内容、删除内容和失去焦点的动作
            </van-cell>
            <van-number-keyboard
                :show="show"
                @blur="show = false"
                @input="onInput"
                @delete="onDelete"
            />

            <input class="inpt" type="text">


            <!-- <van-cell @touchstart.native.stop="show2 = true">
                带右侧栏的键盘， 将 theme 属性设置为 custom
                来展示键盘的右侧栏，常用于输入金额的场景
            </van-cell>
            <van-number-keyboard
                :show="show2"
                theme="custom"
                extra-key="."
                close-button-text="完成"
                @blur="show2 = false"
                @input="onInput"
                @delete="onDelete"
            />

            <van-cell
                plain
                type="primary"
                @touchstart.native.stop="show3 = true"
            >
                身份证号键盘，通过 extra-key 属性可以设置左下角按键内容，比如需要输入身份证号时，可以将 extra-key 设置为 X
            </van-cell>
            <van-number-keyboard
                :show="show3"
                extra-key="X"
                close-button-text="完成"
                @blur="show3 = false"
                @input="onInput"
                @delete="onDelete"
            />

            <van-cell plain type="info" @touchstart.native.stop="show4 = true">
                带标题的键盘，通过 title 属性可以设置键盘标题
            </van-cell>
            <van-number-keyboard
                :show="show4"
                title="键盘标题"
                extra-key="."
                close-button-text="完成"
                @blur="show4 = false"
                @input="onInput"
                @delete="onDelete"
            /> -->
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
            show: false,
            show2: false,
            show3: false,
            show4: false
        };
    },

    components: {
        Header,
        InnerPage
    },

    computed: {},

    methods: {
        onInput(value) {
            Toast(value);
        },
        onDelete() {
            Toast("删除");
        },


    },

    mounted() {
        this.$refs.innerPage.init();
    },

    activated() {}
};
</script>

<style lang='less' scoped>
.inpt{
    width: 90%;
    height: .9rem;
    border-radius: .2rem;
    background-color: #f5f5f5;
    padding: 0 .2rem;
    box-sizing: border-box;
    display: block;
    margin: 0 auto;
    margin-top: .5rem;
}
</style>