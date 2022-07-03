import { Sequelize } from 'sequelize';

const connection = new Sequelize(
	'todolist',
	'root',
	'password',
	{
		dialect: 'mysql',
		host: '172.18.0.2',
		port: 3306
	}
);



export default connection;

