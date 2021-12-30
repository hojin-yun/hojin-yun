const path = require('path');
const webpack = require('webpack');
const ansiRegex = require('ansi-regex');
let api_url, mstr_url, sch_url;
if (process.env.NODE_ENV === 'dev') {
	api_url = 'http://10.10.20.43:8081/';
	mstr_url = 'http://10.10.20.44:8080/';
	sch_url = 'http://10.10.20.42:8082/';
} else {
	api_url = 'http://211.109.9.106:8081/';
	mstr_url = 'http://211.109.9.106:8080/';
	sch_url = 'http://211.109.9.106:8082/';
}
module.exports = {
	// publicPath:
	// 	process.env.NODE_ENV === 'production' ? 'http://211.109.9.106:8080/' : '/',
	outputDir:
		process.env.NODE_ENV === 'production'
			? path.resolve(__dirname, 'prod')
			: path.resolve(__dirname, 'dev'),
	chainWebpack: config => {
		// if (config.plugins.has('extract-css')) {
		// 	const extractCSSPlugin = config.plugin('extract-css');
		// 	extractCSSPlugin &&
		// 		extractCSSPlugin.tap(() => [
		// 			{
		// 				filename: 'build.css',
		// 				chunkFilename: 'build.css',
		// 			},
		// 		]);
		// }
		config.plugins.delete('preload');
		config.plugins.delete('prefetch');
	},
	css: {
		extract: true,
	},
	transpileDependencies: [ansiRegex],
	configureWebpack: {
		optimization: {
			splitChunks: false,
		},
		plugins: [
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				'window.jQuery': 'jquery',
				Popper: ['popper.js', 'default'],
			}),
		],
	},
	filenameHashing: false,
	devServer: {
		overlay: false,
		//proxy: 'http://211.109.9.106:8081',
		proxy: {
			'^/admin': {
				target: api_url,
				changeOrigin: true,
			},
			'^/patent': {
				target: api_url,
				changeOrigin: true,
			},
			'^/mstr': {
				target: mstr_url,
				changeOrign: true,
			},
			'^/api': {
				target: sch_url,
				changeOrign: true,
			},
		},
	},
};
