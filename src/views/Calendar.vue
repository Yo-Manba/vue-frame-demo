
<template>
    <div>
        <Header :hasBack="true" :title="'Calendar'" />
        <InnerPage ref="innerPage">
            <van-cell title="选择单个日期" :value="date" @click="show = true" />
        </InnerPage>
        <van-calendar
            v-model="show"
            :show-confirm="false"
            :min-date="minDate"
            :max-date="maxDate"
            @confirm="onConfirm"
        />
    </div>
</template>

<script>
import Header from "../components/Header";
import InnerPage from "../components/InnerPage";

export default {
    name: "Calendar",
    data() {
        return {
            show: false,
            date: "",
            minDate: new Date(2019, 0, 1),
            maxDate: new Date(2021, 0, 31)
        };
    },

    components: {
        Header,
        InnerPage
    },

    computed: {},

    methods: {
        formatDate(date) {
            return `${date.getFullYear()}/${date.getMonth() +
                1}/${date.getDate()}`;
        },
        onConfirm(date) {
            this.show = false;
            this.date = this.formatDate(date);
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

<style lang='stylus' scoped>
>>>.van-calendar__confirm {
    height: 0.85rem;
    margin: 0.14rem 0;
}
</style>