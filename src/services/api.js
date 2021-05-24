import axios from 'axios'
import config from '../../vue.config'

export default () => {
	// return axios.create({
	// 	baseURL: config.devServer.proxy + '/api',
	// 	crossDomain: true,
	// 	headers: {
	// 		// "Accept": "application/json, text/plain, */*"
	// 		// host87: '123'
	// 		"content-type": 'application/json'
	// 	}
	// })  
	const options = {}
	
	options.baseURL = config.devServer.proxy + '/api'
	options.contentType = 'application/json'
	
	const instance = axios.create(options)
	return instance
}
