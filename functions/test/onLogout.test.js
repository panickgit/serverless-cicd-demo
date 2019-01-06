const handler = require('../functions/auth/onLogout.f.js');
const httpMocks = require('node-mocks-http');
const assert = require('assert');
const {describe, it} = require('mocha');

describe('onLogout', () => {
  it('responds with user logout', (done) => {
    let response = httpMocks.createResponse();
    handler(httpMocks.createRequest(), response);
    assert.equal(response._getData(), 'user logout');
    done();
  });
});
