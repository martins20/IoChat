import Sequelize, { Model } from 'sequelize';

export default class User extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: Sequelize.UUIDV4,
                    defaultValue: Sequelize.UUIDV4,
                    primaryKey: true,
                    unique: true,
                    allowNull: false,
                },
                name: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }
}
