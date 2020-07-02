import Vue from 'vue'
import VueRouter from 'vue-router'

// 一级页面
import Chat from '../views/Chat.vue'
import Contacts from '../views/Contacts.vue'
import Discover from '../views/Discover.vue'
import Mine from '../views/Mine.vue'

// 二级页面
import ListDetail from '../views/ListDetail.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Chat },
    { path: '/contacts', component: Contacts },
    { path: '/discover', component: Discover },
    { path: '/mine', component: Mine },
    { path: '/listDetail/:info', name: 'listDetail', component: ListDetail }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        console.log("to: ", to)
        console.log("from:", from)
        console.log(savedPosition)
        if (savedPosition) {
            return savedPosition
        } else {
            // return {
            //     x: 0,
            //     y: 0
            // }

            return {
                selector: false
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
