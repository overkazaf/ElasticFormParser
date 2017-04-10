'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var componentEpic = function componentEpic(action$) {
  return action$.ofType('UPDATE_VALUE').take(1);
};

exports.default = componentEpic;