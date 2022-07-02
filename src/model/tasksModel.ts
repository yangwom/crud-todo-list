import { DataTypes } from 'sequelize/types';
import connection from './connection';
import userModel from './usersModel';

const tasksModel = connection.define('tasks', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},

	tasks: DataTypes.STRING,

	status: DataTypes.STRING,

	userId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: {
			key: 'id',
			model: 'users',
		},
		onUpdate: 'CASCADE',
		onDelete: 'CASCADE',
	},
});

tasksModel.hasOne(userModel, {
	foreignKey: 'userId', as: 'user'
});

export default tasksModel;