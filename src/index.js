'use strict';
var dotProp = require('dot-prop');

module.exports = function get(prop, val) {
	return Promise.resolve(val).then(function (val) {
		return dotProp.get(val, prop);
	});
};
