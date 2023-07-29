const path = require('path')

module.exports = {
	resolve: {
		alias: {
			components: path.resolve(__dirname, 'src/components'),
			http: path.resolve(__dirname, 'src/http'),
			store: path.resolve(__dirname, 'src/store'),
			utils: path.resolve(__dirname, 'src/utils')
		}
	}
}
