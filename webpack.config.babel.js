import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import SpritesmithPlugin from 'webpack-spritesmith';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const isProd = (process.env.NODE_ENV === 'production');
const plugins = [
	new webpack.HotModuleReplacementPlugin(),
	new webpack.optimize.CommonsChunkPlugin({
		name: "commons",
		filename: "js/commons.[hash].js",
	}),
	new webpack.optimize.UglifyJsPlugin({
		sourceMap: true,
		compress: { warnings: false}
	}),
	new webpack.NamedModulesPlugin(),
	new HtmlWebpackPlugin({
		filename: 'index.html',
		chunks: ['main', 'commons'],
		template: path.join(__dirname, '/src/index.pug')
	}),
	new webpack.ProvidePlugin({
		$: 'jquery',
		jQuery: 'jquery',
		_: 'lodash'
	}),
	new SpritesmithPlugin({
		src: {
			cwd: path.resolve(__dirname, './src/assets/sprites/'),
			glob: '*.png'
		},
		target: {
			image: path.resolve(__dirname, './src/assets/sprite.png'),
			css: path.resolve(__dirname, './src/styles/tools/sprite.sass')
		},
		apiOptions: {
			cssImageRef: "~sprite.png"
		}
	})
];

isProd ? plugins.push(new ExtractTextPlugin("css/styles.[hash].css"), new CleanWebpackPlugin(['./build'])) : null;

export default {
	entry: path.resolve(__dirname, './src/app.js'),
	output: {
		path: path.resolve(__dirname, './build/'),
		filename: 'js/bundle.[hash].js'
	},
	plugins,
	devServer: {
		contentBase: path.resolve(__dirname, "build/"),
		port: 3000,
		noInfo: true,
		overlay: true,
		hot: true
	},
	devtool: 'source-map',
	module: {
		rules: [
			//---------------------JS----------------------//
			{
				test: /\.(js|jsx)?$/,
				use: [ 'babel-loader' ],
				include: path.join(__dirname, './src'),
			},
			//---------------------VUE----------------------//
			{
				test: /\.vue?$/,
				use: 'vue-loader',
			},
			//--------------------PUG--------------------//
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				options: { pretty: true }
			},
			//---------------------CSS---------------------//
			{
				test: /\.css$/,
				use:  isProd ?
					ExtractTextPlugin.extract({
						fallback: "style-loader",
						use: [ 'css-loader', 'autoprefixer-loader']
					})
					: [ 'style-loader', 'css-loader?sourceMap=true', 'autoprefixer-loader']
			},
			//---------------------SASS---------------------//
			{
				test: /\.(sass|scss)$/,
				use:  isProd ?
					ExtractTextPlugin.extract({
						fallback: "style-loader",
						use: [ 'css-loader', 'autoprefixer-loader', 'sass-loader?' ]
					})
					: [ 'style-loader', 'css-loader?sourceMap=true', 'autoprefixer-loader','sass-loader?sourceMap=true']
			},
			//--------------------Fonts--------------------//
			{
				test: /\.(woff2|ttf|eot)$/,
				use: 'file-loader?name=assets/fonts/[name].[ext]&publicPath=../'
			},
			//--------------------Images--------------------//
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				use: 'file-loader?name=assets/images/[name].[ext]&publicPath=../'
			},
			//--------------------Video--------------------//
			{
				test: /\.mp4$/,
				use: 'file-loader?name=assets/video/[name].[ext]&publicPath=../'
			},
			//---------------------SVG---------------------//
			{
				test: /\.svg$/,
				include: path.join(__dirname, './src/assets/icons'),
				use: [
					'svg-sprite-loader?' + JSON.stringify({
						name: '[name]',
						prefixize: true
					}),
					'svgo-loader?' + JSON.stringify({
						plugins: [
							{ addClassesToSVGElement: {
									className: 'icon'
								}
							},
							{ removeTitle: true },
							{ convertPathData: true },
							{ removeUselessStrokeAndFill: true }
						]
					})
				]
			}
		]
	},
	resolve: {
		modules: ['node_modules', 'assets']
	}
}
