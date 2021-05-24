const path = require('path')

module.exports = {
	publicPath: '/',
	filenameHashing: false,
	outputDir: path.resolve(__dirname, '../server/public'),
	devServer: {
		proxy: 'http://localhost:3001'
	},
	pluginOptions: {
		layouts: {
			preloader: false
		},
		i18n: {
			locale: 'ru',
			fallbackLocale: 'ru',
			localeDir: 'locales',
			enableInSFC: false
		}
    }
}

if(process.env.NODE_ENV === 'production') {
	module.exports.devServer.proxy = 'https://wepro.uz';
	module.exports.pluginOptions.layouts.preloader = true;
}
