'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reduxImmutable = require('redux-immutable');

var _componentReducer = require('./componentReducer');

var rootReducer = (0, _reduxImmutable.combineReducers)({
	componentReducer: _componentReducer.componentReducer
});

exports.default = rootReducer;