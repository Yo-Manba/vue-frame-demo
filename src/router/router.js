import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store'

// 一级页面
import Chat from '../views/Chat'
import Contacts from '../views/Contacts'
import Discover from '../views/Discover'
import Mine from '../views/Mine'

// 二级页面
import TowPage from '../views/TowPage'
import Calendar from '../views/Calendar'
import NumberKeyboard from '../views/NumberKeyboard'
import Slider from '../views/Slider'
import Uploader from '../views/Uploader'
import List from '../views/List'
import VideoPage from '../views/VideoPage'


// 三级页面
import ThreePage from '../views/ThreePage'

// 四级页面
import FourPage from '../views/FourPage'


Vue.use(VueRouter)

const routes = [
    // 一级页面
    {
        path: '/',
        component: Chat,
        meta: { index: 1 },
    },
    {
        path: '/contacts',
        component: Contacts,
        meta: { index: 1 },
    },
    {
        path: '/discover',
        component: Discover,
        meta: { index: 1 },
    },
    {
        path: '/mine',
        component: Mine,
        meta: { index: 1 },
    },

    // 二级页面
    {
        path: '/towPage',
        name: 'TowPage',
        component: TowPage,
        meta: { index: 2 },
        props: true
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: Calendar,
        meta: { index: 2 },
        props: true
    },
    {
        path: '/numberKeyboard',
        name: 'NumberKeyboard',
        component: NumberKeyboard,
        meta: { index: 2 },
        props: true
    },
    {
        path: '/slider',
        name: 'Slider',
        component: Slider,
        meta: { index: 2 },
        props: true
    },
    {
        path: '/uploader',
        name: 'Uploader',
        component: Uploader,
        meta: { index: 2 },
        props: true
    },
    {
        path: '/list',
        name: 'List',
        component: List,
        meta: { index: 2 },
        props: true
    },
    {
        path: '/videoPage',
        name: 'VideoPage',
        component: VideoPage,
        meta: { index: 2 },
        props: true
    },

    // 三级页面
    {
        path: '/threePage',
        name: 'ThreePage',
        component: ThreePage,
        meta: { index: 3 },
        props: true
    },


    // 四级页面
    {
        path: '/fourPage',
        name: 'FourPage',
        component: FourPage,
        meta: { index: 4 },
        props: true
    },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
})

export default router