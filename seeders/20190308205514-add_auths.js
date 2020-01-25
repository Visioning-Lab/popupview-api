'use strict';

const db = require('../config/db.config.js');
const Auth = db.auths;

module.exports = {
  up: (queryInterface, Sequelize) => {
	 return Auth.create({ username: 'testuser', password: 'testpass'});
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Auths', null, {});
  }
};
