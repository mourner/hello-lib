
var helloLib = require('../hello-lib.js'),
    t = require('tape');

t('returns Hello World', function (t) {
    t.equal(helloLib(), "Hello World");
    t.end();
});
