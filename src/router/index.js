import Vue from 'vue'
import VueRouter from 'vue-router'

// 一级页面
import Chat from '../views/Chat'
import Contacts from '../views/Contacts'
import Discover from '../views/Discover'
import Mine from '../views/Mine'

// 二级页面
import TowPage from '../views/TowPage'
import Sub2TowPage from '../views/Sub2TowPage'

// 三级页面
import ThreePage from '../views/ThreePage'

// 四级页面
import FourPage from '../views/FourPage'


Vue.use(VueRouter)

const routes = [
    { path: '/', component: Chat },
    { path: '/contacts', component: Contacts },
    { path: '/discover', component: Discover },
    { path: '/mine', component: Mine },
    { path: '/towPage', name: 'towPage', component: TowPage, props: true },
    { path: '/threePage', name: 'threePage', component: ThreePage, props: true },
    { path: '/sub2TowPage', name: 'sub2TowPage', component: Sub2TowPage, props: true },
    { path: '/fourPage', name: 'fourPage', component: FourPage, props: true },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        // console.log("from: ", from)
        // console.log("to: ", to)

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

// router.beforeEach((to, from, next) => {
//     console.log("to: ", to)
//     console.log("from: ", from)
//     next()
// })

export default router