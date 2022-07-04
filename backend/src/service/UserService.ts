import { Model } from 'sequelize/types';
import model from '../model/usersModel';
import ErrorStatus from '../Error/ErrorStatus';
import jwt from 'jsonwebtoken';
import jwtConfig, { JWT_SECRET } from '../jwtConfig/jwtConfig';

class UserService {
	data: Model[];
	token: string;
	async getAll() {
		this.data = await model.findAll({

			attributes: { exclude: ['password'] },
		});

		return this.data;
	}

	async create({ name, email, password }) {
		const exist = await model.findOne({ where: { email } });

		if(exist) throw new ErrorStatus(409, 'User already registered');

		await model.create({ name, email, password });

		const userCreated = exist;

		this.token = jwt.sign({data: userCreated}, JWT_SECRET, jwtConfig);

		return this.token;
	}
}

export default UserService;
