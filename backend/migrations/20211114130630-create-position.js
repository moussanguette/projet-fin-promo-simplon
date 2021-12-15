'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Positions', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      longitude: {
        allowNull: false,
        type : Sequelize.FLOAT
      },
      latitude: {
        allowNull: false,
        type : Sequelize.FLOAT
      },
      idVehicule: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Vehicules',
          key: 'id',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Positions');
  }
};