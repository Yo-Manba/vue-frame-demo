
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
        </InnerPage>
    </div>
</template>

<script>
import event from '../components/event'
import Header from "../components/Header";
import InnerPage from "../components/InnerPage";

export default {
    name: "Calendar",
    data() {
        return {
            show: false,
            date: "",
            minDate: new Date(2019, 0, 1),
            maxDate: new Date(2021, 0, 31),
        };
    },

    components: {
        Header,
        InnerPage,
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
            this.$router.push({ name: "threePage", params: { info: "" } });
        },
        customEvent() {
            event.$emit('changeInnerPage', '99999')
        }
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
        if (from.path === "/threePage") {
            next((vm) => {
                vm.$store.commit("delComponent", "Calendar");
            });
        }
        next();
    },

    beforeRouteLeave(to, from, next) {
        if (to.path === "/threePage") {
            this.$store.commit("addComponent", "Calendar");
        }
        setTimeout(() => {
            next();
        }, 0);
    },
};
</script>

<style lang='stylus' scoped>
>>>.van-calendar__confirm {
    height: 0.85rem;
    margin: 0.14rem 0;
}
</style>