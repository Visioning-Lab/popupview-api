var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
const request = require('supertest');
const env = require('../config/env.js');	
const db = require('../config/db.config.js');
const Auth = db.auths;

describe("authController", function() {
		
	it("wrong username", function(done) {
		
		request(env.testing_url_base)
		  .post('/api/authenticate')
		  .send({username: 'olli2', password: 'salasana'})
		  .set('Content-type', 'application/json')
		  .expect(403)
		  .end(function(err, res) {
			if (err) return done(err);
			expect(res.body.success).to.equal("false");
			expect(res.body.error).to.contains("Login username not found");
			done();
		  });
	});   

	it("wrong password", function(done) {
		
		request(env.testing_url_base)
		  .post('/api/authenticate')
		  .send({username: 'testuser', password: 'salasana2'})
		  .set('Content-type', 'application/json')
		  .expect(403)
		  .end(function(err, res) {
			if (err) return done(err);
			expect(res.body.success).to.equal("false");
			expect(res.body.error).to.contains("Password failed for");
			done();
		  });
	});   

	it("successful login", function(done) {
		
		request(env.testing_url_base)
		  .post('/api/authenticate')
		  .send({username: 'testuser', password: 'testpass'})
		  .set('Content-type', 'application/json')
		  .expect(200)
		  .end(function(err, res) {
			if (err) return done(err);
			expect(res.body.success).to.equal("true");
			
			Auth.findOne({ where: {username: "testuser"} }).then(auth => {
				if(auth)
					expect(res.body.token).to.contains(auth.token);
				else
					expect(res.body.token).to.contains("Failed to read token from database");
				
				done();
			});
		  });
	}); 
});
