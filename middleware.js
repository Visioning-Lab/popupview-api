const logger = require('./config/logger.js');	
const service = "middleware";

let jwt = require('jsonwebtoken');
const env = require('./config/env.js');	

let checkToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  if (token && token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, env.jwt_secret, (err, decoded) => {
      if (err) {
		var error = "Token is not valid";
		logger.debug({
						service: service,
						message: error
					});
		res.status(403).send({success: "false",
			  error: error});    
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
	var error = "Auth token is not supplied";
	logger.debug({
					service: service,
					message: error
				});
	res.status(403).send({success: "false",
		  error: error});  
  }
};

module.exports = {
  checkToken: checkToken
}