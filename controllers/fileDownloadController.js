'use strict';

const logger = require('../config/logger.js');	
const service = "fileDownloadController";

const jwt = require('jsonwebtoken');
const env = require('../config/env.js');	
const path = require('path');

exports.download_file = function(req, res) {
	
	logger.info({
		service: service,
		message: 'Request to download file:' + req.params.filename
	}); 
	
	var filePath = path.join(__dirname,'download_files/'+req.params.filename).replace("controllers","");
	
	var options = {
		headers: {
		  'x-timestamp': Date.now(),
		  'x-sent': true,
		  'Content-Disposition': 'inline; filename="'+req.params.filename+'"'
		}
   }
	
	res.sendFile(filePath, options, function (err) {
		if (err) {
		  
		  res.setHeader('Content-Type', 'application/json');
		 res.status(404).send({success: "false",
			  error: 'File could not be downloaded:' + req.params.filename});
		  logger.info({
				service: service,
				message: err
		  }); 
		  
		} else {
		  logger.info({
				service: service,
				message: 'Successfully sent file:' + req.params.filename
			}); 
		}
	});
};