import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import router from './router';
import store from './store';
import '@/assets/css/normalize.css';
import '@/assets/css/media.css';
import "@/assets/scss/style.scss";
import "@/assets/scss/vue.scss";
import "@/assets/scss/text.scss";
import "@/assets/scss/pages/admin.scss"
import "@/assets/scss/pages/course.scss"
import "@/assets/scss/pages/home.scss"

// import AOS from 'aos'
// import 'aos/dist/aos.css'
import VueMeta from 'vue-meta'
// import Vuesax from 'vuesax'

// import 'vuesax/dist/vuesax.css'

// Vue.component('input-mask', InputMask)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueMeta, {
    // optional pluginOptions
    refreshOnceOnNavigation: true
})
// Vue.use(Vuesax)
// Vue.use(HighchartsVue)

Vue.config.productionTip = false

new Vue({
    // created() {
    // 	AOS.init()
    // },
    router,
    store,
    render: h => h(App),
}).$mount('#app')
