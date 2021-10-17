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
			OpenLessons: false,
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
			Check: [],
			Teacher: [],
			Course: [],
			Review: [],
			Applications: [],
			App_Presentations: [],
			App_Vacancies: [],
			Questions: [],
			StudentsWorks: [],
			Jobs: [],
		}
	},
	getters: {
		Form: state => state.Form,
		AllData: state => state.AllData,
		Error: state => state.Error,
	},
	mutations: {
		async OpenForm(state, data) {
			document.body.style.overflowY = 'hidden'

			state.Form[data[0]] = true
			state.Form.BlurredBg = true

			if (data[0] == 'Menu') {
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

							if (k >= menu_elements_social.length) {
								clearInterval(show_elements_social)
								clearInterval(show_elements_links)

								menu_elements_footer.classList.add('active')
							}
						}, 140)
					}

					let show_elements_links = setInterval(() => {
						menu_elements_links[i].classList.add('active')
						i++

						if (i >= menu_elements_links.length && i) {
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
		async GetCheck(state, data) {
			state.AllData.Check = data
		},
		async GetData(state, data) {
			state.AllData[data.service] = data.data
			console.log(state.AllData[data.service])
		},
		async Patch(state, data) {
			let id = data.doc.id
			let find = this.state.AllData[data.service].filter(item => item.id == id)[0]
			let idx = this.state.AllData[data.service].indexOf(find)
			let item = this.state.AllData[data.service][idx]

			for (let key in item) {
				for (let new_key in Object.assign(data.doc)) {
					if (key == new_key) {
						item[key] = data.doc[new_key]
					}
				}
			}

			// this.state.AllData[data.service][idx] = Object.assign({}, this.state.AllData[data.service][idx], {name: 'Alex Adms'})

			// this.state.AllData[data.service][idx] = {
			// 	"_id" : "60ce28824c5c44421c2e4b34",
			// 	"status" : "new",
			// 	"deleted" : "true",
			// 	"time" : "22:25:19",
			// 	"date" : "19.06.2021",
			// 	"name" : "Alex Adams",
			// 	"phone" : "+998  12 312 31 23",
			// 	"course" : "60b21aa3c77a48052087f46b",
			// 	"language" : "russian",
			// 	"__v" : 0
			// }

			// this.state.AllData[data.service][idx] = data.doc
		},
		async Add(state, data) {
			for (let item in state.Form) {
				state.Form[item] = false
			}

			if (data.status == 200 && data.data.ok == true) {
				state.Form.BlurredBg = true
				state.Form.Success = true

				setTimeout(() => {
					state.Form.BlurredBg = false
					state.Form.Success = false

					document.body.style.overflowY = 'scroll'
				}, 6000)
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
					if (res.status == 200 && res.data.ok && res.data.auth) {
						let y1970 = new Date() / 1000
						let adminExpires = y1970 + parseInt(res.data.adminExpires)

						localStorage.setItem('role', 'admin')
						localStorage.setItem('token', res.data.token)
						localStorage.setItem('expires', adminExpires)

						router.push({ name: 'admin' })

						commit('Add', res)
					} else {
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
		// 		})
		// 		.catch((error) => {
		// 		})
		// },
		async Patch({ commit, dispatch }, data) {
			event.preventDefault()

			await api.patch(data)
				.then(res => {
					commit('Patch', res.data)
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

			if (data.service === 'Jobs') {
				unique = {
					array_responsibilities: data.unique.array_responsibilities,
					array_requirements: data.unique.array_requirements,
					array_offer: data.unique.array_offer
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
		async GetCheck({ commit, dispatch }, data) {
			await api.GetCheck()
				.then(async response => {
					commit('GetCheck', response.data)
				})
		},
		async GetData({ commit, dispatch }, data) {
			for (let item of data) {
				api.GetData({ service: item })
					.then(async response => {
						commit('GetData', response.data)
					})
			}
		},
		async GetDataAdmin({ commit, dispatch }, data) {
			await api.GetData({ service: 'Applications' })
				.then(async response => {
					commit('GetData', response.data)

					await api.GetData({ service: 'App_Presentations' })
						.then(async response => {
							commit('GetData', response.data)

							await api.GetData({ service: 'Questions' })
								.then(async response => {
									commit('GetData', response.data)

									await api.GetData({ service: 'FreeLesson' })
										.then(async response => {
											commit('GetData', response.data)

											await api.GetData({ service: 'App_Vacancies' })
												.then(async response => {
													commit('GetData', response.data)

													await api.GetData({ service: 'Jobs' })
														.then(async response => {
															commit('GetData', response.data)

															await api.GetData({ service: 'Course' })
																.then(async response => {
																	commit('GetData', response.data)

																	await api.GetData({ service: 'App_Presentations' })
																		.then(async response => {
																			commit('GetData', response.data)
																		})
																})
														})
												})
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
