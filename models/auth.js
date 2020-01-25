'use strict';

const env = require('../config/env.js');

module.exports = (sequelize, DataTypes) => {
  var Sequelize = require('sequelize');
  var EncryptedField = require('sequelize-encrypted');
  var enc_fields = EncryptedField(Sequelize, env.password_secret); 
	
  const Auth = sequelize.define('Auth', {
    username: DataTypes.STRING,
    password: enc_fields.vault('password'),
    token: DataTypes.STRING
  }, {});
  Auth.associate = function(models) {
    // associations can be defined here
  };
  return Auth;
};