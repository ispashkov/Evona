import connection from './db';

export default function fetchPhotos(products, query) {
	return new Promise((resolve, reject) => {
		connection.query(query, (error, rows) => {
			let data = [];
			let photos = JSON.parse(JSON.stringify(rows));

			data.push(products, photos);

			resolve(data);
		});
	});
}
