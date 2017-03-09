'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nextConnect = exports.initStore = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _nextConnectRedux = require('next-connect-redux');

var _nextConnectRedux2 = _interopRequireDefault(_nextConnectRedux);

var _reduxObservable = require('redux-observable');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _epics = require('../epics');

var _epics2 = _interopRequireDefault(_epics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// It will raise an error while running in server side enviroment
// so we must test if the window object is valid before using the __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ var
var composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

var epicMiddleware = (0, _reduxObservable.createEpicMiddleware)(_reduxObservable.combineEpics.apply(undefined, (0, _toConsumableArray3.default)(_epics2.default)));

var initStore = exports.initStore = function initStore(initialState) {
  return (0, _redux.createStore)(_reducers2.default, _immutable2.default.fromJS(initialState), composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default, epicMiddleware)));
};

var nextConnect = exports.nextConnect = (0, _nextConnectRedux2.default)(initStore);