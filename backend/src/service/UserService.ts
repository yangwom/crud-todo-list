import { Model } from 'sequelize/types';
import model from '../model/usersModel';
import ErrorStatus from '../Error/ErrorStatus';
import tasksModel from '../model/tasksModel';
import jwt from 'jsonwebtoken';
import jwtConfig, { JWT_SECRET } from '../jwtConfig/jwtConfig';

class UserService<T> {
	data: Model[];

	dataId: Model<T, T> | null;

	token: string;

	async create({ name, email, password } ) {
		const exist = await model.findOne({ where: { email } });

		if(exist) throw new ErrorStatus(409, 'User already registered');

		await model.create({ name, email, password });

		const createdUser = exist;

		this.token = jwt.sign({ data: createdUser }, JWT_SECRET, jwtConfig);

		return this.token;
	}

	async getAll() {

		this.data = await model.findAll({
			include: { model: tasksModel },
			attributes: { exclude: ['password'] },

		});

		return this.data;
	}

	async getById(id: string ) {
		this.dataId = await model.findByPk(id, {

			include: { model: tasksModel },

			attributes: { exclude : ['password']}
		});

		if(!this.dataId) throw new ErrorStatus(404, 'User Not Found');

		return this.dataId;
	}
}

export default UserService;
