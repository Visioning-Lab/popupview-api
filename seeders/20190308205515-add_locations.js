'use strict';

const db = require('../config/db.config.js');
const Location = db.locations;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locations', [{
        friendlyName: 'Groups Of People',
        bannerImagePath: 'salford_quays_banner.jpg',
		infoURL: 'http://www.popupview.com/',
        assetPath: 'groupsassets',
        scenePath: 'groupsscene',
		assetPathiOS: 'groupsassetsiOS',
        scenePathiOS: 'groupssceneiOS',
		assetPathAndroid: 'groupsassetsAndroid',
        scenePathAndroid: 'groupssceneAndroid',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        friendlyName: 'Insects',
        bannerImagePath: 'salford_quays_banner.jpg',
		infoURL: 'http://www.popupview.com/',
        assetPath: 'insects',
        scenePath: 'insectsscene',
		assetPathiOS: 'insectsassetsiOS',
        scenePathiOS: 'insectssceneiOS',
		assetPathAndroid: 'insectsassetsAndroid',
        scenePathAndroid: 'insectssceneAndroid',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        friendlyName: 'Example',
        bannerImagePath: 'salford_quays_banner.jpg',
		infoURL: 'http://www.popupview.com/',
        assetPath: 'example',
        scenePath: 'examplescene',
		assetPathiOS: 'exampleassetsiOS',
        scenePathiOS: 'examplesceneiOS',
		assetPathAndroid: 'exampleassetsAndroid',
        scenePathAndroid: 'examplesceneAndroid',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Locations', null, {});
  }
};
