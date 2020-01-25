const logger = require('./config/logger.js');
const service = "server";

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/apiRoutes'); //importing route
routes(app); //register the route

app.listen(port);

logger.info({
	service: service,
	message: 'RESTful API server started on: ' + port
}); 