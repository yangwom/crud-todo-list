import { DataTypes, } from 'sequelize';
import connection from './connection';
import tasksModel from './tasksModel';

const userModel = connection.define('user', {
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

},
{
	timestamps: false,
});


userModel.hasMany(tasksModel);
tasksModel.belongsTo(userModel);

export default userModel;