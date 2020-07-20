
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
                    id="myVideo"
                    class="video-js vjs-big-play-centered vjs-fluid"
                    webkit-playsinline
                    playsinline
                    x5-playsinline
                    x-webkit-airplay="allow"
                >
                    <p class="vjs-no-js">
                        To view this video please enable JavaScript, and
                        consider upgrading to a web browser that
                        <a
                            href="https://videojs.com/html5-video-support/"
                            target="_blank"
                        >
                            supports HTML5 video
                        </a>
                    </p>
                </video>
                <div class="playBtn" @click="palyByIos"></div>
            </div>
        </InnerPage>
    </div>
</template>

<script>
import Header from "../components/Header";
import InnerPage from "../components/InnerPage";
import Videojs from "video.js";
import video_zhCN from "video.js/dist/lang/zh-CN.json";
import video_en from "video.js/dist/lang/en.json";
import "video.js/dist/video-js.css";

Videojs.addLanguage("zh-CN", video_zhCN);
Videojs.addLanguage("en", video_en);

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
        palyByIos() {
            if (this.player.paused()) {
                this.player.play();
            } else {
                this.player.pause();
            }

            console.log(this);
        },

        tapPlay() {
            document.querySelector(".video").play();
            this.showPlay = false;
            this.showPause = true;
        },

        tapPause() {
            document.querySelector(".video").pause();
            this.showPlay = true;
            this.showPause = false;
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

        this.player = Videojs(
            document.getElementById("myVideo"),
            {
                controls: true, // 是否显示控制条
                poster: "xxx", // 视频封面图地址
                preload: "auto",
                autoplay: false,
                fluid: true, // 自适应宽高
                language: "zh-CN", // 设置语言
                muted: false, // 是否静音
                inactivityTimeout: false,
                controlBar: {
                    // 设置控制条组件
                    // currentTimeDisplay: true,
                    // timeDivider: true,
                    // durationDisplay: true,
                    // remainingTimeDisplay: false,
                    // volumePanel: {
                    //     inline: false
                    // },
                    /* 使用children的形式可以控制每一个控件的位置，以及显示与否 */
                    children: [
                        { name: "playToggle" }, // 播放按钮
                        { name: "currentTimeDisplay" }, // 当前已播放时间
                        { name: "progressControl" }, // 播放进度条
                        { name: "durationDisplay" }, // 总时间
                        {
                            // 倍数播放
                            name: "playbackRateMenuButton",
                            playbackRates: [0.5, 1, 1.5, 2, 2.5]
                        },
                        {
                            name: "volumePanel", // 音量控制
                            inline: false // 不使用水平方式
                        },
                        { name: "FullscreenToggle" } // 全屏
                    ]
                },
                sources: [
                    // 视频源

                    // {
                    //     src: "//vjs.zencdn.net/v/oceans.webm",
                    //     type: "video/webm",
                    //     poster: "//vjs.zencdn.net/v/oceans.png"
                    // },

                    {
                        src:
                            "https://lvyoufile.jjyapp.com/192383395897037947/8866987511007715997",
                        type: "video/mp4",
                        poster: "//vjs.zencdn.net/v/oceans.png"
                    }
                ]
            },
            function() {
                console.log("视频可以播放了", this);
            }
        );
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

    .playBtn {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 1.12rem;
        height: 0.84rem;
    }
}

.video-js {
    /* 给.video-js设置字体大小以统一各浏览器样式表现，因为video.js采用的是em单位 */
    // font-size: 14px;
    font-size: 0.28rem;
}
.video-js button {
    outline: none;
}
.video-js.vjs-fluid,
.video-js.vjs-16-9,
.video-js.vjs-4-3 {
    /* 视频占满容器高度 */
    height: 100%;
    background-color: #161616;
}
.vjs-poster {
    background-color: #161616;
}
.video-js .vjs-big-play-button {
    /* 中间大的播放按钮 */
    font-size: 2.5em;
    line-height: 2.3em;
    height: 2.5em;
    width: 2.5em;
    -webkit-border-radius: 2.5em;
    -moz-border-radius: 2.5em;
    border-radius: 2.5em;
    background-color: rgba(115, 133, 159, 0.5);
    border-width: 0.12em;
    margin-top: -1.25em;
    margin-left: -1.75em;
}
.video-js.vjs-paused .vjs-big-play-button {
    /* 视频暂停时显示播放按钮 */
    display: block;
}
.video-js.vjs-error .vjs-big-play-button {
    /* 视频加载出错时隐藏播放按钮 */
    display: none;
}
.vjs-loading-spinner {
    /* 加载圆圈 */
    font-size: 2.5em;
    width: 2em;
    height: 2em;
    border-radius: 1em;
    margin-top: -1em;
    margin-left: -1.5em;
}
.video-js .vjs-control-bar {
    /* 控制条默认显示 */
    display: flex;
}
.video-js .vjs-time-control {
    display: block;
}
.video-js .vjs-remaining-time {
    display: none;
}

.vjs-button > .vjs-icon-placeholder:before {
    /* 控制条所有图标，图标字体大小最好使用px单位，如果使用em，各浏览器表现可能会不大一样 */
    font-size: 22px;
    line-height: 1.9;
}
.video-js .vjs-playback-rate .vjs-playback-rate-value {
    line-height: 2.4;
    font-size: 18px;
}
/* 进度条背景色 */
.video-js .vjs-play-progress {
    color: #ffb845;
    background-color: #ffb845;
}
.video-js .vjs-progress-control .vjs-mouse-display {
    background-color: #ffb845;
}
.vjs-mouse-display .vjs-time-tooltip {
    padding-bottom: 6px;
    background-color: #ffb845;
}
.video-js .vjs-play-progress .vjs-time-tooltip {
    display: none !important;
}
</style>