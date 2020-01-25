'use strict';

const logger = require('../config/logger.js');	
const service = "locationController";

const jwt = require('jsonwebtoken');
const env = require('../config/env.js');	
const db = require('../config/db.config.js');
const Location = db.locations;

exports.get_locations = function(req, res) {
	
	logger.info({
		service: service,
		message: 'Request to get locations'
	}); 
	
	res.setHeader('Content-Type', 'application/json');
	
	Location.findAll().then(locations => {
		if(locations){
				var locations_json = '{"success": "true", "allScenes": [';
				var locationCount = 1;
				locations.forEach(function(location){
					locations_json += '{';
					locations_json += '"id": '+location.id+',';
					locations_json += '"friendlyName": "'+location.friendlyName+'",';
					locations_json += '"bannerImagePath": "'+location.bannerImagePath+'",';
					locations_json += '"infoURL": "'+location.infoURL+'",';
					locations_json += '"assetPath": "'+location.assetPath+'",';
					locations_json += '"scenePath": "'+location.scenePath+'",';
					locations_json += '"assetPathiOS": "'+location.assetPathiOS+'",';
					locations_json += '"scenePathiOS": "'+location.scenePathiOS+'",';
					locations_json += '"assetPathAndroid": "'+location.assetPathAndroid+'",';
					locations_json += '"scenePathAndroid": "'+location.scenePathAndroid+'",';
					locations_json += '"update_at": '+location.updatedAt.getTime();
					locations_json += '}';
					if(locationCount < locations.length)
					locations_json += ',';	
					locationCount++;
		
				});
				locations_json += ']}';				
				res.status(200).send(locations_json);
				logger.info({
					service: service,
					message: 'Returned locations data successfully.'
				});
		}else{
			var error = "Failed to return locations.";
			logger.info({
							service: service,
							message: 'Get location failed:' + error
						});
			res.status(404).send({success: "false",
				  error: error});
		}
			
	});	
};