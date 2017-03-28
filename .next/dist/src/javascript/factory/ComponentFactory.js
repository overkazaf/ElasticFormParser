'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _EventEngine = require('../engine/EventEngine');

var _EventEngine2 = _interopRequireDefault(_EventEngine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/factory/ComponentFactory.js';


var componentList = [];
var componentMap = {};

var AntdComponents = {
	input: function input(option) {
		var evtHandlers = _EventEngine2.default.buildEventHandlers(option);

		console.log('evtHandlers', evtHandlers);
		return _react2.default.createElement(_antd.InputNumber, (0, _extends3.default)({
			min: 1,
			max: 10,
			defaultValue: 3
		}, evtHandlers, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 22
			}
		}));
	},
	select: function select(option) {
		function handleMenuClick(e) {
			_antd.message.info('Click on menu item.');
			console.log('click', e);
		}

		var menu = _react2.default.createElement(_antd.Menu, { onClick: handleMenuClick, __source: {
				fileName: _jsxFileName,
				lineNumber: 37
			}
		}, _react2.default.createElement(_antd.Menu.Item, { key: '1', __source: {
				fileName: _jsxFileName,
				lineNumber: 38
			}
		}, '1st menu item'), _react2.default.createElement(_antd.Menu.Item, { key: '2', __source: {
				fileName: _jsxFileName,
				lineNumber: 39
			}
		}, '2nd menu item'), _react2.default.createElement(_antd.Menu.Item, { key: '3', __source: {
				fileName: _jsxFileName,
				lineNumber: 40
			}
		}, '3d menu item'));

		return _react2.default.createElement(_antd.Dropdown, { overlay: menu, __source: {
				fileName: _jsxFileName,
				lineNumber: 45
			}
		}, _react2.default.createElement(_antd.Button, { style: { marginLeft: 8 }, __source: {
				fileName: _jsxFileName,
				lineNumber: 46
			}
		}, 'Button ', _react2.default.createElement(_antd.Icon, { type: 'down', __source: {
				fileName: _jsxFileName,
				lineNumber: 47
			}
		})));
	},
	button: function button(option) {
		var evtHandlers = _EventEngine2.default.buildEventHandlers(option);
		return _react2.default.createElement(_antd.Button, (0, _extends3.default)({
			type: 'primary'
		}, evtHandlers, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 55
			}
		}), option.label);
	}
};

var ComponentFactory = function () {
	function ComponentFactory() {
		(0, _classCallCheck3.default)(this, ComponentFactory);
	}

	(0, _createClass3.default)(ComponentFactory, null, [{
		key: 'create',
		value: function create(type, option) {
			var comp = AntdComponents[type](option);

			componentList.push(comp);

			if (!componentMap[type]) {
				componentMap[type] = [];
			}
			componentMap[type].push(comp);

			return comp;
		}
	}]);

	return ComponentFactory;
}();

exports.default = ComponentFactory;