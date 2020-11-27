
<template>
    <div>
        <Header :hasBack="false" :title="'组件'" />
        <HomePage ref="homePage">
            <div style="height: .01rem"></div>
            <van-cell class="cell" title="日历" is-link @click="toCalendar" />
            <van-cell class="cell" title="数字键盘" is-link @click="toNumberKeyboard" />
            <van-cell class="cell" title="滑块" is-link @click="toSlider" />
            <van-cell class="cell" title="文件上传" is-link @click="toUploader" />
            <van-cell class="cell" title="下拉刷新 上拉加载" is-link @click="toList" />
            <van-cell class="cell" title="视频" is-link @click="toVideo" />

            <Son>
                <template v-slot="slotProps">
                    {{slotProps.slotData.title}}
                </template>
            </Son>
        </HomePage>
    </div>
</template>

<script>
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import Son from "../components/Son"

export default {
    name: "Contacts",
    data() {
        return {};
    },
    components: {
        Header,
        HomePage,
        Son
    },

    methods: {
        toCalendar() {
            this.$router.push({ name: "calendar", params: { info: "" } });
        },

        toNumberKeyboard() {
            this.$router.push({ name: "numberKeyboard" });
        },

        toSlider() {
            this.$router.push({ name: "slider" });
        },

        toUploader() {
            this.$router.push({ name: "uploader" });
        },

        toList() {
            this.$router.push({ name: "list" });
        },

        toVideo() {
            this.$router.push({ name: "videoPage" });
        }
    },

    mounted() {
        this.$refs.homePage.init();
    },

    activated() {}
};
</script>

<style lang="stylus" scoped>
.cell {
    width: 94%;
    margin: 0 auto;
    margin-top: 0.2rem;
    height: 1rem;
    padding: 0 0.3rem;
    border-radius: 0.5rem;
    background-color: #f7f7f7;
}

.van-cell__title {
    line-height: 1rem;
}

.van-cell__right-icon {
    line-height: 1rem;
}
</style>