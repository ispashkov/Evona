import express from 'express';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';

import routes from './routes';
import connection from './helpers/db';
import fetchPhotos from './helpers/fetchPhotos';
import fetchProducts from './helpers//fetchProducts';
import checkProductsLength from './helpers/checkProductLength';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.server';

const app = express();
const PORT = 8080;
const compiler = webpack(webpackConfig);

app.use(cors());
app.use(morgan('dev'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../src'));

app.use(
	webpackMiddleware(compiler, {
		contentBase: path.resolve(__dirname, '../build'),
		hot: true,
		publicPath: webpackConfig.output.publicPath,
		noInfo: true
	})
);

app.use(webpackHotMiddleware(compiler));
app.use('', express.static(path.join(__dirname, '../build')));

connection.connect(error => {
	if (!!error) {
		new Error('Ошибка подключений к базе данных');
	} else console.log('Connected');
});

app.get('*', routes);

app.get('/api/product', (req, res) => {
	fetchProducts(`SELECT * FROM products WHERE id = ${req.headers.id}`)
		.then(data =>
			fetchPhotos(data, `SELECT * FROM product_photos WHERE photo_id = ${data[0].photo_id}`)
		)
		.then(data => {
			var products = data[0],
				photos = data[1],
				productPhoto = [];

			products.filter(product => {
				photos.filter(photo => {
					if (photo['photo_id'] === product.photo_id) {
						productPhoto.push(photo.photo);
					}
				});

				product.photos = productPhoto;

				return product;
			});

			res.json(products);
		})
		.catch(error => res.send(error));
});

app.get('/api/products', (req, res) => {
	var query;

	if (!!req.headers.limit && !!req.headers.page) {
		let offset = parseInt(req.headers.page) * parseInt(req.headers.limit) - 1;
		query = `SELECT * FROM products LIMIT ${offset - 1}, ${req.headers.limit}`;
	} else {
		query = 'SELECT * FROM products';
	}

	fetchProducts(query)
		.then(data => fetchPhotos(data, 'SELECT * FROM product_photos'))
		.then(data => {
			var products = data[0],
				photos = data[1];

			products.filter(product => {
				product.photos = [];
				photos.filter(photo => {
					if (photo['photo_id'] === product.photo_id) {
						product.photos.push(photo.photo);
					}
				});

				return product;
			});

			return products;
		})
		.then(data =>
			checkProductsLength().then(response => {
				const products = [];
				products.push(response);
				products.push(data);

				res.send(products);
			})
		)
		.catch(error => res.send(error));
});

app.listen(PORT, () => console.log(`Running on localhost: ${PORT}`));
