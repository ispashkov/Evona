import path from 'path';
import fs from 'fs';
import webpack from 'webpack';

var nodeModules = {};
fs
	.readdirSync('node_modules')
	.filter(function(x) {
		return ['.bin'].indexOf(x) === -1;
	})
	.forEach(function(mod) {
		nodeModules[mod] = 'commonjs ' + mod;
	});

const isProd = process.env.NODE_ENV === 'production';
const plugins = [new webpack.HotModuleReplacementPlugin()];

export default {
	entry: {
		server: ['babel-polyfill', './server/index.js']
	},
	target: 'node',
	output: {
		path: path.join(__dirname, './build/'),
		filename: 'js/[name].[hash].js'
	},
	externals: nodeModules,
	plugins,
	devtool: 'source-map',
	module: {
		rules: [
			//---------------------JS----------------------//
			{
				test: /\.js?$/,
				use: 'babel-loader',
				include: path.join(__dirname, './server'),
				exclude: path.join(__dirname, './node_modules')
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
