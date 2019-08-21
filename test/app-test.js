var app = require('../app');

var expect  = require('chai').expect;
var request = require('request');


it('Response Test', function(done) {
    request('http://localhost:3000' , function(error, response, body) {
        expect(body).to.equal('Hello World');
        done();
    });
});

