import express from 'express';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import mysql from 'mysql';

const connection = mysql.createConnection({
	host: 'localhost',
	port: 4000,
	user: 'root',
	password: 'root',
	database: 'evona'
});

connection.connect(error => {
	!!error ? console.log('error') : console.log('Connected');
});

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.server';

const app = express();
const PORT = 8080;
const compiler = webpack(webpackConfig);
import routes from './routes';

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

function fetchProducts(query) {
	return new Promise((resolve, reject) => {
		connection.query(query, (error, rows) => {
			let products = JSON.parse(JSON.stringify(rows));

			products = products.filter(product => {
				product.price = {};
				product.price.opt = product.price_opt;
				product.price.recommended = product.price_recommended;
				delete product.price_recommended;
				delete product.price_opt;

				return product;
			});
			resolve(products);
		});
	});
}

function fetchPhotos(products, query) {
	return new Promise((resolve, reject) => {
		connection.query(query, (error, rows) => {
			let photos = JSON.parse(JSON.stringify(rows));

			let data = [];

			data.push(products, photos);

			resolve(data);
		});
	});
}

app.get('*', routes);

app.get('/db', (req, res) => {});

app.get('/api/products', (req, res) => {
	fetchProducts('SELECT * FROM products')
		.then(data => fetchPhotos(data, 'SELECT * FROM product_photos'))
		.then(data => {
			var products = data[0],
				photos = data[1],
				productPhoto = [];

			products.filter(product => {
				product.photos = [];
				photos.filter(photo => {
					if (photo['photo_id'] === product.photo_id) {
						product.photos.push(photo.photo);
					}
				});

				return product;
			});
			res.json(products);
		})
		.catch(error => res.send(error));
});

app.get('/api/product', (req, res, next) => {
	fetchProducts(`SELECT * FROM products WHERE id = ${req.headers.id}`)
		.then(data =>
			fetchPhotos(
				data,
				`SELECT * FROM product_photos WHERE photo_id = ${data[0].photo_id}`
			)
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

app.listen(PORT, () => console.log(`Running on localhost: ${PORT}`));
