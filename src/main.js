// Import
import Vue from 'vue'
import App from './App.vue'
import VAnimateCss from 'v-animate-css'
import VueAnimateOnscoll from 'vue-animate-onscroll';
import PubSub from 'pubsub-js'
import VueRouter from 'vue-router'
import router from './router'
import store from './store/index.js'
import 'easy-circular-progress';

// Use Middleware
Vue.use(VueRouter)
Vue.use(VAnimateCss)
Vue.use(VueAnimateOnscoll)
Vue.use(PubSub)

// Close the production tip
Vue.config.productionTip = false

new Vue({
    router,     // Apply Vue-router
    store,      // Apply Vuex
    render: h => h(App),
}).$mount('#app')
