import connection from './db';

export default function fetchProducts(query) {
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
