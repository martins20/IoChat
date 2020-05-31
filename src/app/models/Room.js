import Sequelize, { Model } from 'sequelize';

export default class Room extends Model {
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
                participants: {
                    type: Sequelize.ARRAY(Sequelize.STRING),
                    defaultValue: [],
                },
                messages: {
                    type: Sequelize.ARRAY(Sequelize.JSON()),
                    defaultValue: [],
                },
            },
            {
                sequelize,
            }
        );
    }
}
