import Vue from 'vue'
import VueRouter from 'vue-router'

// 一级页面
import Chat from '../views/Chat'
import Contacts from '../views/Contacts'
import Discover from '../views/Discover'
import Mine from '../views/Mine'

// 二级页面
import TowPage from '../views/TowPage'

// 三级页面
import ThreePage from '../views/ThreePage'

// 四级页面
import FourPage from '../views/FourPage'


Vue.use(VueRouter)

const routes = [
    // 一级页面
    {
        path: '/',
        component: Chat
    },
    {
        path: '/contacts',
        component: Contacts
    },
    {
        path: '/discover',
        component: Discover
    },
    {
        path: '/mine',
        component: Mine
    },

    // 二级页面
    {
        path: '/towPage',
        name: 'towPage',
        component: TowPage,
        props: true
    },

    // 三级页面
    {
        path: '/threePage',
        name: 'threePage',
        component: ThreePage,
        props: true
    },


    // 四级页面
    {
        path: '/fourPage',
        name: 'fourPage',
        component: FourPage,
        props: true
    },
]

const router = new VueRouter({
    mode: 'history',
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