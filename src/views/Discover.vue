<template>
    <div>
        <Header :hasBack="false" :title="'组件'" />
        <HomePage ref="homePage">
            <div style="height: 0.01rem"></div>
            <div
                class="scroll-item"
                v-for="(item, index) of info"
                :key="index"
                @click="clickHandler(item)"
            >
                <div>{{ item.companyName }}</div>
                <div>{{ item.education }}</div>
                <div>{{ item.salary }}</div>
                <div>{{ item.title }}</div>
                <div>{{ item.townshipName }}</div>
                <div>{{ item.years }}</div>
            </div>
            <div style="height: 0.8rem"></div>
        </HomePage>
    </div>
</template>

<script>
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import axios from "axios";
import { apiAddress } from "@/request/api"; // 导入我们的api接口

export default {
    name: "Discover",
    data() {
        return {
            info: [],
        };
    },
    components: {
        Header,
        HomePage,
    },

    methods: {
        clickHandler(item) {
            this.$router.push({ name: "towPage", params: { info: item } });
        },

        getInfo() {
            // axios.post(`api/api/c/job/list`, {
            //     type: 2,
            //     page: 1,
            //     size: 20
            // }).then(res => {
            //     console.log(res);sss
            //     if (res.data.code === "1") {
            //         if (res.data.result) {
            //             var result = res.data.result;
            //             this.info = result;
            //             setTimeout(() => {
            //                 this.$refs.homePage.bs.refresh();
            //             }, 0);
            //         } else {
            //             console.log("无返回数据");ssss
            //         }
            //     } else {
            //         console.log(res.data.msg);
            //     }
            // }).catch(err => {
            //     console.error(err);
            // });

            // 调用api接口，并且提供了两个参数
            apiAddress({
                type: 2,
                page: 1,
                size: 20,
            }).then((res) => {
                console.log(res);
                if (res.code === "1") {
                    if (res.result) {
                        var result = res.result;
                        this.info = result;
                        setTimeout(() => {
                            this.$refs.homePage.bs.refresh();
                        }, 0);
                    } else {
                        console.log("无返回数据");
                        ssss;
                    }
                } else {
                    console.log(res.data.msg);
                }
            }).catch(err => {
                console.error(err);
            });

            // console.log(`${process.env.VUE_APP_BASE_URL}/api/c/job/list`)

            // axios({
            //     url: `${process.env.VUE_APP_BASE_URL}/api/c/job/list`,
            //     method: "post",
            //     data: {
            //         type: 2,
            //         page: 1,
            //         size: 20
            //     }
            // }).then(res => {
            //     console.log(res);
            //     if (res.data.code === "1") {
            //         if (res.data.result) {
            //             var result = res.data.result;
            //             this.info = result;
            //             setTimeout(() => {
            //                 this.$refs.homePage.bs.refresh();
            //             }, 0);
            //         } else {
            //             console.log("无返回数据");
            //         }
            //     } else {
            //         console.log(res.data.msg);
            //     }
            // }).catch(err => {
            //     console.error(err);
            // });
        },
    },

    created() {
        this.getInfo();
    },

    mounted() {
        this.$refs.homePage.init();
    },

    activated() {},

    beforeDestroy() {},
};
</script>

<style lang="stylus" scoped>
.scroll-item {
    width: 90%;
    margin: 0 auto;
    margin-top: 0.8rem;
}

.scroll-item div {
    margin-top: 0.1rem;
}
</style>
