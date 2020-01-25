'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      friendlyName: {
        type: Sequelize.STRING
      },
      bannerImagePath: {
        type: Sequelize.STRING
      },
	  infoURL: {
        type: Sequelize.STRING
      },
	  assetPath: {
        type: Sequelize.STRING
      },
	  scenePath: {
        type: Sequelize.STRING
      },
	  assetPathiOS: {
        type: Sequelize.STRING
      },
	  scenePathiOS: {
        type: Sequelize.STRING
      },
	  assetPathAndroid: {
        type: Sequelize.STRING
      },
	  scenePathAndroid: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Locations');
  }
};