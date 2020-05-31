import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User';
import Room from '../app/models/Room';

const models = [User, Room];

const connection = new Sequelize(databaseConfig);

models.map((model) => model.init(connection));

models.map((model) => model.associate && model.associate(connection.models));
