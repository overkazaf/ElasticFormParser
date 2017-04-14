'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _componentEpic = require('./componentEpic.js');

var _componentEpic2 = _interopRequireDefault(_componentEpic);

var _queryEpic = require('./queryEpic.js');

var _queryEpic2 = _interopRequireDefault(_queryEpic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootEpics = [_componentEpic2.default, _queryEpic2.default];

exports.default = rootEpics;