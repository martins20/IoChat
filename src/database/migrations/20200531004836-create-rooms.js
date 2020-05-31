module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('rooms', {
            id: {
                type: Sequelize.STRING,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            participants: {
                type: Sequelize.ARRAY(Sequelize.STRING),
                defaultValue: [],
                allowNull: false,
            },
            messages: {
                type: Sequelize.ARRAY(Sequelize.JSON()),
                defaultValue: [],
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: (queryInterface) => {
        return queryInterface.dropTable('rooms');
    },
};
