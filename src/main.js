import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './componentLibrary/vant.js'
import '@/assets/style/reset.css'
import '@/assets/style/border.css'
import '@/assets/style/iconfont.css'

Vue.config.productionTip = false

console.log(process.env.VUE_APP_MODE, '具体环境');
console.log(process.env);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')