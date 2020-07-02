<template>
    <div class="scroll-wrapper" ref="scroll">
        <div class="scroll-content">
            <p class="scroll-item" v-for="(item, index) in 50" :key="index">ListDetail</p>
            
        </div>
    </div>
</template>

<script>
import BScroll from '@better-scroll/core';
export default {
    name: 'ListDetail',
    data() {
        return {};
    },
    
    mounted() {
        this.init();
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
        
        _registerHooks(hookNames, handler) {
            hookNames.forEach(name => {
                this.bs.on(name, handler);
            });
        }
    },
    
    // watch: {
    //     $route(to, from) {
    //         // 对路由变化作出响应...
    //         console.log(to);
    //     }
    // }
};
</script>

<style lang="stylus" scoped>
.scroll-wrapper
    position relative
    z-index 111
    background-color #fff
    height 100%
    overflow hidden
    .scroll-content
        min-height calc(100% + 1px)
        .scroll-item
            height 50px
            line-height 50px
            font-size 24px
            font-weight bold
            border-bottom 1px solid #eee
            text-align center
            &:nth-child(2n)
                background-color #f3f5f7
            &:nth-child(2n+1)
                background-color #42b983
</style>
