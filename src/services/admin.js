/* eslint-disable no-console */
import api from './api'

export default {
	// THE NEW SHIT
	change(data) {
		return api().post('admin/change', data)
	},
	add(data) {
		return api().post('admin/add', data)
	},
	// register(data) {
	// 	return api().post('admin/register', data)
	// },
	auth(data) {
		return api().post('admin/auth', data)
	},
	GetData(data) {
		return api().get('/get/' + data.service)
	},
	GetCourse(data) {
		return api().get('/GetCourse/' + data.element)
	},
}
