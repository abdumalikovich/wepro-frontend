import Vue from 'vue'
import Vuex from 'vuex'
import api from '../services/admin'
import router from '../router'
// import admin from './modules/admin/admin'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		Form: {
			Course: false,
			Application: false,
			FreeLesson: false,
			Test: false,
			Success: false,
			BlurredBg: false,
			Menu: false,
			Video: false
		},
		Error: {
			Status: false,
			Text: 'Произошла ошибка'
		},
		AllData: {
			Teacher: [],
			Course: [],
			Review: [],
			Applications: [],
			// : [],
			// Review: [],
		}
	},
	getters: {
		Form: state => state.Form,
		AllData: state => state.AllData,
		Error: state => state.Error,
	},
	mutations: {
		async OpenForm(state, data) {
			// document.body.style.overflowY = 'hidden'

			state.Form[data] = true
			state.Form.BlurredBg = true
			
			if(data == 'Menu') {
				state.Form.BlurredBg = false
				
				setTimeout(() => {
					let menu_elements_links = document.querySelector('.menu-links').children
					let menu_elements_social = document.querySelector('.menu-social').children
					let menu_elements_footer = document.querySelector('.menu-footer')
	
					let i = 0
					let k = 0
	
					let show_elements_social_function = () => {
						let show_elements_social = setInterval(() => {
							menu_elements_social[k].classList.add('active')
							k++
		
							if(k >= menu_elements_social.length) {
								clearInterval(show_elements_social)
								clearInterval(show_elements_links)
	
								menu_elements_footer.classList.add('active')
							}
						}, 140)
					}
					
					let show_elements_links = setInterval(() => {
						menu_elements_links[i].classList.add('active')
						i++
	
						if(i >= menu_elements_links.length && i) {
							clearInterval(show_elements_links)
							show_elements_social_function()
						}
					}, 140)
				}, 500)
			}


		},
		async СloseForms(state) {
			document.body.style.overflowY = 'scroll'

			for (let item in state.Form) {
				state.Form[item] = false
			}

			state.Error.Status = false
			state.Form.BlurredBg = false
		},
		async ShowForm(state, data) {
			state.Forms.Course = true
		},
		async GetData(state, data) {
			state.AllData[data.service] = data.data
		},
		async Change(state, data) {

		},
		async Add(state, data) {
			for (let item in state.Form) {
				state.Form[item] = false
			}

			console.log(data);

			if (data.status == 200 && data.data.ok == true) {
				state.Form.BlurredBg = true
				state.Form.Success = true

				// setTimeout(() => {
				// 	state.Form.BlurredBg = false
				// 	state.Form.Success = false

				// 	document.body.style.overflowY = 'scroll'
				// }, 3000)
			} else {
				if (data == 'no_server') {
					state.Form.BlurredBg = true
					state.Error.Status = true
					state.Error.Text = 'Ошибка. Сервер выключен'
				} else if (data == 'no_response') {
					state.Form.BlurredBg = true
					state.Error.Status = true
					state.Error.Text = 'Ошибка. Пожалуйста, заполните все поля'
				} else {
					state.Form.BlurredBg = true
					state.Error.Status = true
					state.Error.Text = 'Простите, произошла неизвестная ошибка'
				}
			}
		}
	},
	actions: {
		async ShowForm({ commit, dispatch }) {
			event.preventDefault()

			commit('ShowForm')
		},
		async СloseForms({ commit, dispatch }) {
			commit('СloseForms')
		},
		async OpenForm({ commit, dispatch }, data) {
			commit('OpenForm', data)
		},
		async AdminLogin({ commit, dispatch }, data) {
			event.preventDefault()
			let formData = new FormData(event.target)

			api.auth(formData)
				.then(res => {
					if (res.status == 200) {
						let y1970 = new Date() / 1000
						let adminExpires = y1970 + parseInt(res.data.adminExpires)
		
						localStorage.setItem('role', res.data.admin.role)
						localStorage.setItem('adminToken', res.data.adminToken)
						localStorage.setItem('adminExpires', adminExpires)
		
						router.push({name: 'admin'})
	
						console.log('SUCCESS ADMIN');
						commit('Add', res)
					} else {
						console.log('FUCK U');
						commit('Add', res)
					}
				})
				.catch((error) => {
					let err_res = ''

					if (error.response) {
						commit('Add', err_res = 'no_response')
					} else if (error.request) {
						commit('Add', err_res = 'no_server')
					} else {
						commit('Add', err_res = 'server_error')
					}
				})
		},
		// async AdminRegister({ commit, dispatch }, data) {
		// 	event.preventDefault()
		// 	let formData = new FormData(event.target)

		// 	api.register(formData)
		// 		.then(res => {
		// 			console.log('HELLO WORLD')
		// 		})
		// 		.catch((error) => {
		// 			console.log('ERROR')
		// 		})
		// },
		async Change({ commit, dispatch }, data) {
			console.log(data)
		},
		async Add({ commit, dispatch }, data) {
			event.preventDefault()

			let formData = new FormData(event.target)
			let unique = Object

			// Set service here
			formData.append('service', data.service)

			if (data.service === 'Course') {
				unique = {
					array_for_who: data.unique.array_for_who,
					array_lessons: data.unique.array_lessons,
					array_what_can: data.unique.array_what_can,
					array_programms: data.unique.array_programms,
					array_projects: data.unique.array_projects
				}

				formData.append('unique', JSON.stringify(unique))
			}

			api.add(formData)
				.then(res => {
					commit('Add', res)
				})
				.catch((error) => {
					let err_res = ''

					if (error.response) {
						commit('Add', err_res = 'no_response')
					} else if (error.request) {
						commit('Add', err_res = 'no_server')
					} else {
						commit('Add', err_res = 'server_error')
					}
				})
		},
		// GET DATA
		async GetData({ commit, dispatch }, data) {
			await api.GetData({ service: 'Course' })
				.then(async response => {
					commit('GetData', response.data)

					await api.GetData({ service: 'Review' })
						.then(async response => {
							commit('GetData', response.data)

							await api.GetData({ service: 'Teacher' })
								.then(async response => {
									commit('GetData', response.data)
								})
						})
				})
		},
		async GetDataAdmin({ commit, dispatch }, data) {
			await api.GetData({ service: 'Applications' })
				.then(async response => {
					commit('GetData', response.data)

					await api.GetData({ service: 'GetPresentation' })
						.then(async response => {
							commit('GetData', response.data)

							await api.GetData({ service: 'Questions' })
								.then(async response => {
									commit('GetData', response.data)
									
									await api.GetData({ service: 'FreeLesson' })
									.then(async response => {
										commit('GetData', response.data)
									})
								})
						})
				})
		},
	},
	// modules: {
	// 	admin,
	// },
})
