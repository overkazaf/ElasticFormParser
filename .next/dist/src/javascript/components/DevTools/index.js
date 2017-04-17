'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxDevtools = require('redux-devtools');

var _reduxDevtoolsLogMonitor = require('redux-devtools-log-monitor');

var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

var _reduxDevtoolsDockMonitor = require('redux-devtools-dock-monitor');

var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/components/DevTools/index.js';

//从redux-devtools中引入createDevTools


//显示包是单独的，要额外指定


//创建DevTools组件
var DevTools = (0, _reduxDevtools.createDevTools)(_react2.default.createElement(_reduxDevtoolsDockMonitor2.default, { toggleVisibilityKey: 'ctrl-h',
  changePositionKey: 'ctrl-q', __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  }
}, _react2.default.createElement(_reduxDevtoolsLogMonitor2.default, { theme: 'tomorrow', __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  }
})));

exports.default = DevTools;