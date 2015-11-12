'use strict';

var hello = require('../'),
    t = require('tap').test;

t('returns Hello World', function (t) {
    t.equal(hello(), 'Hello World');
    t.end();
});
