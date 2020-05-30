import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

const models = [];

const connection = new Sequelize(databaseConfig);

models.map((model) => model.init(connection));

models.map((model) => model.associate && model.associate(connection.models));
