var helloLib = require('../hello-lib.js'),
    assert = require('assert');

describe('helloLib', function () {

    it('return Hello World', function () {
        assert.equal(helloLib(), "Hello World");
    });
});
