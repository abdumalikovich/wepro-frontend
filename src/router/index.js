/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from '../i18n'

Vue.use(VueRouter)

const routes = [
	{
		name: 'check_api_page',
		path: '/check_api_page',
		component: () => import('../components/pages/check.vue')
	},
	{
		name: 'admin',
		path: '/admin',
		component: () => import('../components/pages/admin/admin'),
		meta: {
			requiresAdmin: true
		}
	},
	{
		path: '/admin/course',
		component: () => import('../components/pages/admin/course'),
		meta: {
			requiresAdmin: true
		}
	},
	{
		name: 'login',
		path: '/admin/login',
		component: () => import('../components/pages/admin/login'),
	},
	{
		path: '/admin/form/*',
		component: () => import('../components/pages/admin/forms'),
		meta: {
			requiresAdmin: true
		}
	},
	{
		path: '/admin/table/*',
		component: () => import('../components/pages/admin/table'),
		meta: {
			requiresAdmin: true
		}
	},
	{
		path: '/',
		redirect: `/${i18n.locale}`
	},
	{
		path: '/test',
		component: () => import('../components/pages/test.vue'),
	},
	{
		path: '/:lang',
		component: {
			render(c) { return c('router-view') }
		},
		children: [
			{
				name: 'home',
				path: '',
				component: () => import('../components/pages/home.vue')
			},
			{
				name: 'job',
				path: 'job',
				component: () => import('../components/pages/job.vue')
			},
			{
				name: 'job_item',
				path: 'job/*',
				component: () => import('../components/pages/job_item.vue')
			},
			{
				name: 'course',
				path: 'course/*',
				component: () => import('../components/pages/course.vue')
			},
			{
				name: 'students',
				path: 'students',
				component: () => import('../components/pages/students.vue')
			}
		]
	},
	{
		path: '/*',
		name: 'all',
		component: () => import('../components/pages/error')
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	// let language = to.params.locale

	// if (!language) language = 'ru'

	// i18n.locale = language

	i18n.locale = 'dawdwa'

	if (to.matched.some(record => record.meta.requiresAdmin)) {
			if (localStorage.expires - new Date() / 1000 > 0 && localStorage.token) next()
			else window.location.href = '/admin/login'
	} else {
		next()
	}
}) 

export default router
