const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite:./db/apidata.db');
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//Models/tables
db.auths = require('../models/auth.js')(sequelize, Sequelize);
db.locations = require('../models/location.js')(sequelize, Sequelize);
 
module.exports = db;