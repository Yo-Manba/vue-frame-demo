<template>
    <div class="scroll-wrapper" ref="scroll">
        <div class="scroll-content">
            <div class="scroll-item" v-for="(item, index) of 100" :key="index" @click="clickHandler(item)" >{{item}}</div>
        </div>
    </div>
    <!-- <div class="aa">
        <div class="scroll-item" v-for="(item, index) of 100" :key="index" @click="clickHandler(item)">{{ item }}</div>
    </div> -->
</template>

<script>
import BScroll from '@better-scroll/core';

export default {
    name: 'Chat',
    data() {
        return {
            emojis: [
                '😀 😁 😂 🤣 😃',
                '😄 😅 😆 😉 😊',
                '😫 😴 😌 😛 😜',
                '👆🏻 😒 😓 😔 👇🏻',
                '😑 😶 🙄 😏 😣',
                '😞 😟 😤 😢 😭',
                '🤑 😲 ☹️ 🙁 😖',
                '👍 👎 👊 ✊ 🤛',
                '☝️ ✋ 🤚 🖐 🖖',
                '👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼',
                '☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽',
                '🌖 🌗 🌘 🌑 🌒',
                '💫 💥 💢 💦 💧',
                '🐠 🐟 🐬 🐳 🐋',
                '😬 😐 😕 😯 😶',
                '😇 😏 😑 😓 😵',
                '🐥 🐣 🐔 🐛 🐤',
                '💪 ✨ 🔔 ✊ ✋',
                '👇 👊 👍 👈 👆',
                '😀 😁 😂 🤣 😃',
                '😄 😅 😆 😉 😊',
                '😫 😴 😌 😛 😜',
                '👆🏻 😒 😓 😔 👇🏻',
                '😑 😶 🙄 😏 😣',
                '😞 😟 😤 😢 😭',
                '😀 😁 😂 🤣 😃',
                '😄 😅 😆 😉 😊',
                '😫 😴 😌 😛 😜',
                '👆🏻 😒 😓 😔 👇🏻',
                '😑 😶 🙄 😏 😣',
                '😞 😟 😤 😢 😭',
                '🤑 😲 ☹️ 🙁 😖',
                '👍 👎 👊 ✊ 🤛',
                '☝️ ✋ 🤚 🖐 🖖',
                '👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼',
                '☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽',
                '🌖 🌗 🌘 🌑 🌒',
                '💫 💥 💢 💦 💧',
                '🐠 🐟 🐬 🐳 🐋',
                '😬 😐 😕 😯 😶',
                '😇 😏 😑 😓 😵',
                '🐥 🐣 🐔 🐛 🐤',
                '💪 ✨ 🔔 ✊ ✋',
                '👇 👊 👍 👈 👆',
                '😀 😁 😂 🤣 😃',
                '😄 😅 😆 😉 😊',
                '😫 😴 😌 😛 😜',
                '👆🏻 😒 😓 😔 👇🏻',
                '😑 😶 🙄 😏 😣',
                '😞 😟 😤 😢 😭',
                '😀 😁 😂 🤣 😃',
                '😄 😅 😆 😉 😊',
                '😫 😴 😌 😛 😜',
                '👆🏻 😒 😓 😔 👇🏻',
                '😑 😶 🙄 😏 😣',
                '😞 😟 😤 😢 😭',
                '🤑 😲 ☹️ 🙁 😖',
                '👍 👎 👊 ✊ 🤛',
                '☝️ ✋ 🤚 🖐 🖖',
                '👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼',
                '☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽',
                '🌖 🌗 🌘 🌑 🌒',
                '💫 💥 💢 💦 💧',
                '🐠 🐟 🐬 🐳 🐋',
                '😬 😐 😕 😯 😶',
                '😇 😏 😑 😓 😵',
                '🐥 🐣 🐔 🐛 🐤',
                '💪 ✨ 🔔 ✊ ✋',
                '👇 👊 👍 👈 👆',
                '😀 😁 😂 🤣 😃',
                '😄 😅 😆 😉 😊'
            ]
        };
    },

    mounted() {
        this.init();
        // console.log(this.$route)
        // console.log(this.$router)
    },

    beforeDestroy() {
        this.bs.destroy();
    },

    methods: {
        init() {
            this.bs = new BScroll(this.$refs.scroll, {
                scrollY: true,
                click: true,
                startY: 0,
                probeType: 3 // listening scroll hook
            });
            this._registerHooks(['scroll', 'scrollEnd'], pos => {
                // console.log(pos);
            });
        },
        clickHandler(item) {
            // alert(item);
            this.$router.push({ name: 'listDetail', params: { info: item }})
        },
        _registerHooks(hookNames, handler) {
            hookNames.forEach(name => {
                this.bs.on(name, handler);
            });
        }
    },
    
    beforeRouteLeave(to, from, next) {
        console.log("from: ", from)
        console.log("to: ", to)
        console.log("next: ", next)
        
        next()
    },
    
    watch: {
        // $route(to, from) {
        //     // 对路由变化作出响应...
        //     console.log(to);
        //     this.bs.refresh();
        // }
    }
};
</script>

<style lang="stylus" scoped>
// .aa
//     position fixed
//     top 0
//     left 0
//     width 100%
//     min-height 101%
//     overflow-y scroll
// .scroll-item
//     height 1rem
//     line-height 1rem
//     font-size 0.48rem
//     font-weight bold
//     border-bottom 0.02rem solid #eee
//     text-align center
//     &:nth-child(2n)
//         background-color #f3f5f7
//     &:nth-child(2n+1)
//         background-color #42b983
.scroll-wrapper
    overflow hidden
    .scroll-content
        min-height calc(100% + 1px)
        .scroll-item
            height 1rem
            line-height 1rem
            font-size 0.48rem
            font-weight bold
            border-bottom 0.02rem solid #eee
            text-align center
            &:nth-child(2n)
                background-color #f3f5f7
            &:nth-child(2n+1)
                background-color #42b983
</style>
