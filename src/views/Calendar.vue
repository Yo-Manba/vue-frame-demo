
<template>
    <div>
        <Header :hasBack="true" :title="'Calendar'" />
        <InnerPage ref="innerPage">
            <van-cell title="选择单个日期" :value="date" @click="show = true" />
            <van-calendar
                v-model="show"
                :show-confirm="false"
                :min-date="minDate"
                :max-date="maxDate"
                @confirm="onConfirm"
            />
            <van-button @click="toThreePage">去三级页面</van-button>
            <van-button @click="customEvent">绑定</van-button>
            
            <br />
            <br />
            <br />

            <van-button @click="currentComponent = Son1">Son1组件</van-button>
            <van-button @click="currentComponent = Son2">Son2组件</van-button>
            <keep-alive>
                <component :is="currentComponent"></component>
            </keep-alive>

        </InnerPage>
    </div>
</template>

<script>
import event from "../event/event"
import Header from "../components/Header";
import InnerPage from "../components/InnerPage";
import Son1 from "../components/Son";
import Son2 from "../components/Son2";

import { addComponent, delComponent } from "../keepAliveContro/keepAliveContro";

export default {
    name: "Calendar",
    data() {
        return {
            show: false,
            date: "",
            minDate: new Date(2019, 0, 1),
            maxDate: new Date(2021, 0, 31),
            currentComponent: Son1,
            Son1,
            Son2
        };
    },

    components: {
        Header,
        InnerPage
    },

    computed: {},

    methods: {
        formatDate(date) {
            return `${date.getFullYear()}/${
                date.getMonth() + 1
            }/${date.getDate()}`;
        },
        onConfirm(date) {
            this.show = false;
            this.date = this.formatDate(date);
        },
        toThreePage() {
            this.$router.push({ name: "ThreePage", params: { info: "" } });
        },
        customEvent() {
            event.$emit("changeInnerPage", "99999");
        },
    },

    beforeCreate() {
        console.log("calendar beforeCreate");
    },

    created() {
        console.log("calendar created");
    },

    beforeMount() {
        console.log("calendar beforeMount");
    },

    mounted() {
        console.log("calendar mounted");
        this.$refs.innerPage.init();
    },

    beforeUpdate() {
        console.log("calendar beforeUpdate");
    },

    updated() {
        console.log("calendar updated");
    },

    beforeDestroy() {
        console.log("calendar beforeDestroy");
    },

    destroyed() {
        console.log("calendar destroyed");
    },

    activated() {
        console.log("calendar activated");
    },

    beforeRouteEnter(to, from, next) {
        delComponent(to, from, next, "/threePage");
    },

    beforeRouteLeave(to, from, next) {
        addComponent(to, from, next, "/threePage");
    },
};
</script>

<style lang='stylus' scoped>
>>>.van-calendar__confirm {
    height: 0.85rem;
    margin: 0.14rem 0;
}
</style>