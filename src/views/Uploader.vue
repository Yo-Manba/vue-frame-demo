
<template>
    <div>
        <Header :hasBack="true" :title="'Uploader'" />
        <InnerPage ref="innerPage">
            <div class="box">
                <div class="txt">
                    基础用法, 文件上传完毕后会触发 after-read
                    回调函数，获取到对应的 file 对象。
                </div>
                <van-uploader :after-read="afterRead" />

                <div class="txt">
                    文件预览,
                    通过v-model可以绑定已经上传的文件列表，并展示文件列表的预览图。
                </div>
                <van-uploader v-model="fileList" multiple />

                <div class="txt">
                    上传状态, 通过 status 属性可以标识上传状态，uploading
                    表示上传中，failed 表示上传失败，done 表示上传完成。
                </div>
                <van-uploader v-model="fileList2" :after-read="afterRead2" />

                <div class="txt">
                    限制上传数量, 通过 max-count
                    属性可以限制上传文件的数量，上传数量达到限制后，会自动隐藏上传区域。
                </div>
                <van-uploader v-model="fileList3" multiple :max-count="2" />

                <div class="txt">
                    限制上传大小, 通过 max-size
                    属性可以限制上传文件的大小，超过大小的文件会被自动过滤，这些文件信息可以通过
                    oversize 事件获取。
                </div>
                <van-uploader
                    multiple
                    :max-size="500 * 1024"
                    @oversize="onOversize"
                />

                <div class="txt">
                    自定义上传样式, 通过默认插槽可以自定义上传区域的样式。
                </div>
                <van-uploader>
                    <van-button icon="plus" type="primary">上传文件</van-button>
                </van-uploader>

                <div class="txt">
                    自定义预览样式, 通过 preview-cover
                    插槽可以自定义覆盖在预览区域上方的内容。
                </div>
                <van-uploader v-model="fileList">
                    <template #preview-cover="{ file }">
                        <div class="preview-cover van-ellipsis">
                            {{ file }}
                        </div>
                    </template>
                </van-uploader>

                <div class="txt">
                    上传前置处理, 通过传入 beforeRead
                    函数可以在上传前进行校验和处理，返回 true 表示校验通过，返回
                    false 表示校验失败。支持返回 Promise 对 file
                    对象进行自定义处理，例如压缩图片。
                </div>
                <van-uploader :before-read="beforeRead" />

                <div class="txt">禁用文件上传，通过 disabled 属性禁用文件上传</div>
                <van-uploader disabled />
            </div>
        </InnerPage>
    </div>
</template>

<script>
import Header from "../components/Header";
import InnerPage from "../components/InnerPage";
import { Toast } from 'vant';

export default {
    name: "Uploader",
    data() {
        return {
            fileList: [
                { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
                // Uploader 根据文件后缀来判断是否为图片文件
                // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
                { url: "https://cloud-image", isImage: true }
            ],

            fileList2: [
                {
                    url: "https://img.yzcdn.cn/vant/leaf.jpg",
                    status: "uploading",
                    message: "上传中..."
                },
                {
                    url: "https://img.yzcdn.cn/vant/tree.jpg",
                    status: "failed",
                    message: "上传失败"
                }
            ],

            fileList3: []
        };
    },

    components: {
        Header,
        InnerPage
    },

    computed: {},

    methods: {
        afterRead(file) {
            // 此时可以自行将文件上传至服务器
            console.log(file);
        },

        afterRead2(file) {
            file.status = "uploading";
            file.message = "上传中...";

            setTimeout(() => {
                file.status = "failed";
                file.message = "上传失败";
            }, 1000);
        },

        onOversize(file) {
            console.log(file);
            Toast("文件大小不能超过 500kb");
        },

        // 返回布尔值
        beforeRead(file) {
            if (file.type !== "image/jpeg") {
                Toast("请上传 jpg 格式图片");
                return false;
            }
            return true;
        },
        // 返回 Promise
        asyncBeforeRead(file) {
            return new Promise((resolve, reject) => {
                if (file.type !== "image/jpeg") {
                    Toast("请上传 jpg 格式图片");
                    reject();
                } else {
                    let img = new File(["foo"], "bar.jpg", {
                        type: "image/jpeg"
                    });
                    resolve(img);
                }
            });
        }
    },

    mounted() {
        this.$refs.innerPage.init();
    },

    activated() {},

    beforeRouteEnter(to, from, next) {
        if (to.meta.index < from.meta.index) {
            next(vm => {
                vm.$store.commit("delComponent", to.name);
            });
        }
        next();
    },

    beforeRouteLeave(to, from, next) {
        if (from.meta.index !== 1 && to.meta.index > from.meta.index) {
            this.$store.commit("addComponent", from.name);
        }
        setTimeout(() => {
            next();
        }, 0);
    },
};
</script>

<style lang='less' scoped>
.box {
    padding: 0.4rem;
    box-sizing: border-box;
}

.txt {
    margin-top: 0.8rem;
    margin-bottom: 0.2rem;
}

.preview-cover {
    position: absolute;
    box-sizing: border-box;
    bottom: 0;
    width: 100%;
    padding: 4px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background: rgba(0, 0, 0, 0.3);
}
</style>