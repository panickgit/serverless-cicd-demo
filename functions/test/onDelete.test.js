const handler = require('../functions/user/onDelete.f.js');
const httpMocks = require('node-mocks-http');
const assert = require('assert');
const {describe, it} = require('mocha');

describe('onDelete', () => {
  it('responds with user deleted', (done) => {
    let response = httpMocks.createResponse();
    handler(httpMocks.createRequest(), response);
    assert.equal(response._getData(), 'user deleted');
    done();
  });
});
