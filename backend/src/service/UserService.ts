import { Model } from 'sequelize/types';
import model from '../model/usersModel';

class UserService {
	data: Model[];
	async getAll() {
		this.data = await model.findAll({
			attributes: { exclude: ['password']}
		});

		return this.data;
	}
}

export default UserService;