
<template>
    <div>
        <Header :hasBack="true" :title="'Video'" />
        <InnerPage
            ref="innerPage"
            :pulldown="false"
            :pullup="false"
            :pullupTxt="false"
        >
            <div class="videoWrapper">
                <video
                    class="video"
                    width="320"
                    height="240"
                    poster="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595225635233&di=75f0ae3f8bc0c992fc51a26b3e28e223&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853"
                >
                    <source
                        src="https://gmncfile.jjyapp.com/191713785085763810/1865721247340152754"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <span v-show="showPlay" class="iconfont iconbofang playBtn" @click="tapPlay"></span>
                <span v-show="showPause" class="iconfont iconicon_bofang pauseBtn" @click="tapPause"></span>
            </div>
        </InnerPage>
    </div>
</template>

<script>
import Header from "../components/Header";
import InnerPage from "../components/InnerPage";

export default {
    name: "Video",
    data() {
        return {
            showPlay: true,
            showPause: false
        };
    },

    components: {
        Header,
        InnerPage
    },

    computed: {},

    methods: {
        tapPlay() {
            document.querySelector('.video').play()
            this.showPlay = false
            this.showPause = true
        }, 

        tapPause() {
            document.querySelector('.video').pause()
            this.showPlay = true
            this.showPause = false
        },

        /**
         * 页面相关事件处理函数--监听用户下拉动作
         */
        async onPullDownRefresh() {
            return new Promise(resolve => {
                // 数据请求完成后执行resolve(), 程序才会继续进行
                resolve();
            });
        },

        /**
         * 页面上拉触底事件的处理函数
         */
        async onReachBottom() {
            return new Promise(resolve => {
                // 数据请求完成后执行resolve(), 程序才会继续进行。可在resolve方法中传入false参数，在没有更多可加载数据时使用
                resolve(false);
            });
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
.videoWrapper {
    position: relative;
    height: 240px;

    .video {
        width: 90%;
        margin: 0 auto;
        display: block;
    }

    .playBtn, .pauseBtn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1rem;
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        color: #fff;
    }
}
</style>