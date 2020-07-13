
<template>
    <div>
        <Header :hasBack="false" :title="'通讯录'" />
        <HomePage ref="homePage">
            <div
                class="scroll-item"
                v-for="(item, index) of 100"
                :key="index"
                @click="clickHandler(item)"
            >
                {{ item }}
            </div>
        </HomePage>
    </div>
</template>

<script>
import Header from "../components/Header";
import HomePage from "../components/HomePage";

export default {
    name: "Contacts",
    data() {
        return {

        };
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
        console.log("created")
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