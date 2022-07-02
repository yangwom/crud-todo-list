import { Sequelize } from 'sequelize';

const connection = new Sequelize(
	'todolist',
	'root',
	'password',
	{
		dialect: 'mysql',
		host: 'localhost',
		port: 3306
	}
);



export default connection;

