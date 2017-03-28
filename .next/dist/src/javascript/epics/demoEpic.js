'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var demoEpic = function demoEpic(action$) {
  return action$.ofType('UPDATE_VIEW').take(1);
};

exports.default = demoEpic;