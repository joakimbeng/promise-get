'use strict';
var test = require('ava');
var get = require('../src');

test('existing property', function (assert) {
	assert.plan(1);
	return get('key.deep', Promise.resolve({key: {deep: 'hello'}}))
		.then(function (actual) {
			var expected = 'hello';
			assert.is(actual, expected);
		});
});

test('non-existing property', function (assert) {
	assert.plan(1);
	return get('key2', Promise.resolve({key: false}))
		.then(function (actual) {
			assert.is(actual, undefined);
		});
});

test('arrays', function (assert) {
	assert.plan(1);
	return get('0', Promise.resolve(['hi']))
		.then(function (actual) {
			var expected = 'hi';
			assert.is(actual, expected);
		});
});

test('non-promise', function (assert) {
	assert.plan(1);
	return get('0', ['hi'])
		.then(function (actual) {
			var expected = 'hi';
			assert.is(actual, expected);
		});
});
