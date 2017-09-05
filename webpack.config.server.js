import path from 'path';
import webpack from 'webpack';

const isProd = process.env.NODE_ENV === 'production';
const plugins = [new webpack.HotModuleReplacementPlugin()];

export default {
	entry: {
		server: ['babel-polyfill', './server/index.js']
	},
	output: {
		path: path.join(__dirname, './build/'),
		filename: 'js/[name].[hash].js'
	},
	plugins,
	devServer: {
		contentBase: path.join(__dirname, './build/'),
		port: 8080,
		overlay: true,
		hot: true
	},
	devtool: 'source-map',
	module: {
		rules: [
			//---------------------JS----------------------//
			{
				test: /\.js?$/,
				use: 'babel-loader',
				include: path.join(__dirname, './server')
			},
			//--------------------PUG--------------------//
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				options: { pretty: true }
			}
		]
	},
	resolve: {
		modules: ['node_modules', 'server']
	}
};
