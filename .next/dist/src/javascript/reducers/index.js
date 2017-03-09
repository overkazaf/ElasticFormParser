'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reduxImmutable = require('redux-immutable');

var _demoReducer = require('./demoReducer');

var rootReducer = (0, _reduxImmutable.combineReducers)({
	demoReducer: _demoReducer.demoReducer
});

exports.default = rootReducer;