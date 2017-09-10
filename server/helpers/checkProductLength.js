import connection from './db';

export default function checkProductsLength() {
	return new Promise((resolve, reject) => {
		connection.query(
			'SELECT COUNT(*) as "total" FROM products',
			(error, rows) => resolve(JSON.parse(JSON.stringify(rows)))
		);
	});
}
