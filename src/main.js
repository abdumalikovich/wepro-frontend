import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'
import i18n from './i18n'

Vue.use(VueMeta, {
	refreshOnceOnNavigation: true
})

Vue.config.productionTip = false
 
router.beforeEach((to, from, next) => {
	let language = to.params.lang

	// if (language == '') language = 'ru'

	i18n.locale = language
	next()
})

new Vue({
	Vuex,
	VueRouter,
	router,

	store,
	i18n,
	render: h => h(App)
}).$mount('#app')
