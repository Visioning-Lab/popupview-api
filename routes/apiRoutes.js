'use strict';

const middleware = require('../middleware.js');

module.exports = function(app) {
  
  var auth = require('../controllers/authController');
  var location = require('../controllers/locationController');
  var fileDownload = require('../controllers/fileDownloadController');
  var uptime = require('../controllers/uptimeController');

  app.route('/api/uptime')
    .get(uptime.uptime);
	
  app.route('/api/authenticate')
    .post(auth.authenticate);
	
  app.route('/api/get_locations')
    .get(middleware.checkToken, location.get_locations);
	
  app.route('/api/download_file/:filename')
    .get(middleware.checkToken, fileDownload.download_file);
};