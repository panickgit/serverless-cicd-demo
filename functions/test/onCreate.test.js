const handler = require('../functions/user/onCreate.f.js');
const httpMocks = require('node-mocks-http');
const assert = require('assert');
const {describe, it} = require('mocha');

describe('onCreate', () => {
  it('responds with user created', (done) => {
    let response = httpMocks.createResponse();
    handler(httpMocks.createRequest(), response);
    assert.equal(response._getData(), 'user created');
    done();
  });
});
