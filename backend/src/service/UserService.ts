import { Model } from 'sequelize/types';
import tasksModel from '../model/tasksModel';
import model from '../model/usersModel';

class UserService {
	data: Model[];
	async getAll() {
		this.data = await model.findAll({
			include: [{ model: tasksModel }],
			attributes: { exclude: ['password'] },
		});

		return this.data;
	}
}

export default UserService;
