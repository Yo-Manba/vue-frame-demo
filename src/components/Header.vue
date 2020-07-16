
<template>
    <div class="header border-bottom">
        <span v-if="hasBack" class="iconfont iconfanhui" @click="goBack"></span>
        <div class="title">{{title}}</div>
    </div>
</template>

<script>
export default {
    name: "Header",
    props: [
        'hasBack',
        'title'
    ],
    data() {
        return {};
    },

    components: {},

    computed: {},

    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
};
</script>

<style lang='stylus' scoped>
.header
    height 1rem
    background-color #f5f5f5
    text-align center
    display flex
    align-items center
    justify-content center
    font-weight bold
    position relative

    .iconfanhui
        position absolute
        top 50%
        transform translateY(-50%)
        left 0
        width 1rem
        height 1rem
        display flex
        align-items center
        justify-content center
        font-size .30rem
    
    .title
        font-size .31rem

</style>