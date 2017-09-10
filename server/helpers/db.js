import mysql from 'mysql';

const connection = mysql.createConnection({
	host: 'localhost',
	port: 4000,
	user: 'root',
	password: 'root',
	database: 'evona'
});

export default connection;
