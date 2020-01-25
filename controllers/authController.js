'use strict';

const logger = require('../config/logger.js');	
const service = "authController";

const jwt = require('jsonwebtoken');
const env = require('../config/env.js');	
const db = require('../config/db.config.js');
const Auth = db.auths;

exports.authenticate = function(req, res) {
	logger.info({
		service: service,
		message: 'Request to authenticate:' + req.body.username
	}); 
	
	Auth.findOne({ where: {username: req.body.username} }).then(auth => {
		if(auth){
			if(req.body.password == auth.password){
					const token = jwt.sign({username: auth.username},
					  env.jwt_secret,
					  { 
						expiresIn: env.jwt_token_expiry
					  }
					);
					
					auth.token = token;
					auth.save();
					res.status(200).send({success: "true", token: token});
					logger.info({
									service: service,
									message: 'Successfully authenticated and created token:' + auth.username
								}); 
				}else{
					var error = "Password failed for ";
					logger.info({
									service: service,
									message: 'Authentication failed:' + error + req.body.username
								});
					res.status(403).send({success: "false",
						  error: error + req.body.username});
				}
		}else{
			var error = "Login username not found for ";
			logger.info({
							service: service,
							message: 'Authentication failed:' + error + req.body.username
						});
			res.status(403).send({success: "false",
				  error: error + req.body.username});
		}
	});
};