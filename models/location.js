'use strict';

const env = require('../config/env.js');

module.exports = (sequelize, DataTypes) => {
  var Sequelize = require('sequelize');
	
  const Location = sequelize.define('Location', {
    friendlyName: DataTypes.STRING,
    bannerImagePath: DataTypes.STRING,
	infoURL: DataTypes.STRING,
	assetPath: DataTypes.STRING,
	scenePath: DataTypes.STRING,
	assetPathiOS: DataTypes.STRING,
	scenePathiOS: DataTypes.STRING,
	assetPathAndroid: DataTypes.STRING,
	scenePathAndroid: DataTypes.STRING
  }, {});
  Location.associate = function(models) {
    // associations can be defined here
  };
  return Location;
};