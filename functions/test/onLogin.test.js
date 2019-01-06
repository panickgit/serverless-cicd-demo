const handler = require('../functions/auth/onLogin.f.js');
const httpMocks = require('node-mocks-http');
const assert = require('assert');
const {describe, it} = require('mocha');

describe('onLogin', () => {
  it('responds with user login', (done) => {
    let response = httpMocks.createResponse();
    handler(httpMocks.createRequest(), response);
    assert.equal(response._getData(), 'user login');
    done();
  });
});
