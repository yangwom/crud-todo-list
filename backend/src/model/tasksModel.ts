import { DataTypes  } from 'sequelize';
import connection from './connection';

const tasksModel = connection.define('task', {
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
},
{
	timestamps:false
});



export default tasksModel;