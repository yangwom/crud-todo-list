import { DataTypes } from 'sequelize/types';
import connection from './connection';


const userModel = connection.define('users', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},

	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},

	email: {
		type: DataTypes.STRING,
		allowNull: false,
	},

	password: {
		type: DataTypes.STRING,
		allowNull: false,
	}

});

export default userModel;