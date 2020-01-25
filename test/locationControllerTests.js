var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
const request = require('supertest');
const env = require('../config/env.js');	
const db = require('../config/db.config.js');
const Auth = db.auths;
const Location = db.locations;

describe("locationController", function() {
		
	it("no authentication token", function(done) {
		
		request(env.testing_url_base)
		  .get('/api/get_locations')
		  .expect(403)
		  .end(function(err, res) {
			if (err) return done(err);
			expect(res.body.success).to.equal("false");
			expect(res.body.error).to.contains("Auth token is not supplied");
			done();
		  });
	});   
	
	it("invalid authentication token", function(done) {
		
		request(env.testing_url_base)
		  .get('/api/get_locations')
		  .set('Authorization', 'dsfasfdfgdsfdsfds')
		  .expect(403)
		  .end(function(err, res) {
			if (err) return done(err);
			expect(res.body.success).to.equal("false");
			expect(res.body.error).to.contains("Token is not valid");
			done();
		  });
	});   

	it("get locations successfully", function(done) {
		
		Auth.findOne({ where: {username: "testuser"} }).then(auth => {
			if(auth){
				request(env.testing_url_base)
				  .get('/api/get_locations')
				  .set('Authorization', auth.token)
				  .expect(200)
				  .end(function(err, res) {
					if (err) return done(err);
					expect(res.body.success).to.equal("true");
					done();
				});
			}
		});
	}); 
});
