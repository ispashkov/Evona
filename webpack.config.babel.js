import path from 'path';
import glob from 'glob-all';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import SpritesmithPlugin from 'webpack-spritesmith';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import SpriteLoaderPlugin from 'svg-sprite-loader/lib/plugin';
import PurifyCSSPlugin from 'purifycss-webpack';
import BundleAnalyzerPlugin from 'webpack-bundle-analyzer';
import WebpackPwaManifest from 'webpack-pwa-manifest';
import ManifestPlugin from 'webpack-manifest-plugin';

const isProd = process.env.NODE_ENV === 'production';
const plugins = [
	new webpack.HotModuleReplacementPlugin(),

	new ManifestPlugin({
		fileName: 'build-manifest.json'
	}),

	new WebpackPwaManifest({
		filename: 'manifest.json',
		name: 'Evona & Nysense Online Store',
		orientation: 'portrait',
		display: 'standalone',
		short_name: 'Evona&Nysense',
		description: 'Evona & Nysense Online Store Application',
		background_color: '#ffffff'
		// icons: [
		// 	{
		// 		src: path.resolve('src/assets/icon.png'),
		// 		sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
		// 	},
		// 	{
		// 		src: path.resolve('src/assets/large-icon.png'),
		// 		size: '1024x1024' // you can also use the specifications pattern
		// 	}
		// ]
	}),

	new webpack.optimize.CommonsChunkPlugin({
		name: 'commons',
		filename: 'js/[name].js'
	}),

	new webpack.optimize.UglifyJsPlugin({
		sourceMap: true,
		compress: { warnings: false }
	}),

	new webpack.NamedModulesPlugin(),

	// new HtmlWebpackPlugin({
	// 	filename: 'index.html',
	// 	chunks: ['app', 'commons', 'manifest'],
	// 	template: path.join(__dirname, './src/index.pug')
	// }),

	// new HtmlWebpackPlugin({
	// 	filename: 'btb.html',
	// 	chunks: ['btb', 'commons', 'manifest'],
	// 	template: path.join(__dirname, './src/btb.pug')
	// }),

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
			css: path.resolve(__dirname, './src/styles/tools/sprite.scss')
		},
		apiOptions: {
			cssImageRef: '~sprite.png'
		}
	})
];

isProd
	? plugins.push(
			new ExtractTextPlugin({
				filename: 'css/[name].css',
				allChunks: false
			}),
			new SpriteLoaderPlugin(),
			new PurifyCSSPlugin({
				paths: glob.sync([
					path.join(__dirname, './src/**/*.pug'),
					path.join(__dirname, './src/**/*.vue'),
					path.join(__dirname, './src/**/*.js')
				]),
				purifyOptions: {
					minify: true,
					whitelist: ['*fade*', '*slide*']
				}
			}),
			new CleanWebpackPlugin(['./build']),
			new BundleAnalyzerPlugin.BundleAnalyzerPlugin()
		)
	: null;

export default {
	entry: {
		app: ['babel-polyfill', './src/app.js'],
		btb: ['babel-polyfill', './src/btb.js']
	},
	output: {
		path: path.join(__dirname, './build/'),
		filename: 'js/[name].js'
	},
	plugins,
	devServer: {
		contentBase: path.join(__dirname, './build/'),
		port: 3000,
		overlay: true,
		hot: true,
		proxy: {
			'/api': 'http://localhost:8080/api'
		}
	},
	devtool: 'source-map',
	module: {
		rules: [
			//---------------------JS----------------------//
			{
				test: /\.(js|jsx)?$/,
				use: 'babel-loader',
				include: path.join(__dirname, './src')
			},
			//---------------------VUE----------------------//
			{
				test: /\.vue$/,
				use: {
					loader: 'vue-loader',
					options: {
						extractCSS: true
					}
				},
				include: path.join(__dirname, './src')
			},
			//--------------------PUG--------------------//
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				options: { pretty: true }
			},
			//---------------------Styles---------------------//
			{
				test: /\.(sass|scss|css)$/,
				use: isProd
					? ExtractTextPlugin.extract({
							fallback: 'style-loader',
							use: [
								{
									loader: 'css-loader',
									options: { sourceMap: true, minimize: true }
								},
								{ loader: 'postcss-loader', options: { sourceMap: true } },
								{ loader: 'sass-loader', options: { sourceMap: true } }
							]
						})
					: [
							{ loader: 'style-loader', options: { sourceMap: true } },
							{ loader: 'css-loader', options: { sourceMap: true } },
							{ loader: 'postcss-loader', options: { sourceMap: true } },
							{ loader: 'sass-loader', options: { sourceMap: true } }
						]
			},
			//--------------------Fonts--------------------//
			{
				test: /\.(woff2|ttf|eot)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'assets/fonts/[name].[ext]',
							publicPath: '../'
						}
					}
				]
			},
			//--------------------Images--------------------//
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'assets/images/[name].[ext]',
							publicPath: '../'
						}
					}
					// {
					// 	loader: 'image-webpack-loader'
					// }
				]
			},
			//--------------------Video--------------------//
			{
				test: /\.mp4$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'assets/video/[name].[ext]',
							publicPath: '../'
						}
					}
				]
			},
			//--------------------Fonts--------------------//
			{
				test: /\.json$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'fakedata/[name].[ext]',
							publicPath: '../'
						}
					}
				]
			},
			//---------------------SVG---------------------//
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'svg-sprite-loader',
						options: {
							name: '[name]',
							prefixize: true,
							options: {
								extract: true,
								spriteFilename: 'svg-sprite.svg'
							}
						}
					},
					{
						loader: 'svgo-loader',
						options: {
							plugins: [
								{
									addClassesToSVGElement: {
										className: 'icon'
									}
								},
								{ removeTitle: true },
								{ convertPathData: true },
								{ removeUselessStrokeAndFill: true }
							]
						}
					}
				]
			}
		]
	},
	resolve: {
		modules: ['node_modules', 'assets', 'src']
	}
};
