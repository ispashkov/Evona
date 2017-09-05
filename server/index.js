import express from 'express';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.server';

const app = express();
const PORT = 8080;
const compiler = webpack(webpackConfig);
import routes from './routes';

app.use(cors());
app.use(morgan('tiny'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../src'));

app.use(
	webpackMiddleware(compiler, {
		hot: true,
		publicPath: webpackConfig.output.publicPath,
		noInfo: true
	})
);

app.use(webpackHotMiddleware(compiler));
app.use(express.static(path.join(__dirname, '../build')));

mongoose.connect('mongodb://localhost/evona');

const Schema = mongoose.Schema;

const ProductsSchema = new Schema(
	{
		title: String
	},
	{ collection: 'products-data' }
);

const Products = mongoose.model('ProductsModel', ProductsSchema);

app.get('*', routes);

app.get('/db', (req, res) => {});

app.get('/api/products', (req, res) => {
	Products.find().then(data => {
		res.json(data);
	});
});

app.listen(PORT, () => console.log(`Running on localhost: ${PORT}`));
