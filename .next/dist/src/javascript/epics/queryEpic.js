'use strict';

// DO NOT DO THIS
// creates infinite loop
//const actionEpic = (action$) => action$; 

Object.defineProperty(exports, "__esModule", {
	value: true
});
var queryEpic = function queryEpic(action$) {
	return action$.ofType('SHOW_MODAL').take(1);
};

exports.default = queryEpic;