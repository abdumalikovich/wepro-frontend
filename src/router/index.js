/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		name: 'home',
		path: '/',
		component: () => import('../components/pages/home')
	},
	// {
	// 	name: 'test',
	// 	path: '/test',
	// 	component: () => import('../components/pages/test')
	// },
	{
		name: 'course',
		path: '/course/*',
		component: () => import('../components/pages/course')
	},
	{
		name: 'studends',
		path: '/studends',
		component: () => import('../components/pages/students')
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
	// Check for req access
	// if(to.matched.some(record => record.meta.requiresAuth)) {
	// 	if (localStorage.expires - new Date() / 1000 <= 0 || localStorage.getItem('jwt') == null || !localStorage.getItem('jwt') == null || localStorage.getItem('jwt') === 'undefined') {
	// 		// False check
	// 		next({
	// 			path: '/login',
	//             params: { nextUrl: to.fullPath }
	//         })
	// 	} else {
	// 		// True check has jwt key
	// 		// get unique data (email, id)
	// 		let user = JSON.parse(localStorage.getItem('user'))

	//         if(to.matched.some(record => record.meta.is_admin)) {
	//             if(user.is_admin == 1){
	//                 next()
	//             } else{
	//                 next({ name: 'home'})
	//             }
	//         } else {
	// 			next({ name: 'home'})
	//         }
	// 	}
	// } else {
	//     next()
	// }

	if (to.matched.some(record => record.meta.requiresAdmin)) {
		// if (localStorage.adminExpires - new Date() / 1000 <= 0 || localStorage.getItem('adminToken') == null || !localStorage.getItem('adminToken') == null || localStorage.getItem('adminToken') === 'undefined') {
		if (localStorage.adminExpires - new Date() / 1000 <= 0) {
			// False check
			window.location.replace('/admin/login')
		} else {
			// True check has jwt key
			// get unique data (email, id)
			let admin = localStorage.getItem('role')
			// alert(admin)

            // if(to.matched.some(record => record.meta.is_admin)) {
            //     if(admin.is_admin == 1){
            //         next()
            //     } else{
            //         next({ name: 'home'})
            //     }
            // } else {
            //     next()
			// }
			// alert(localStorage.getItem('role'))
        	next()
		}
	} else {
        next()
	}
})

export default router
