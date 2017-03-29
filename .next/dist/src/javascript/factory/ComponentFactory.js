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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _EventEngine = require('../engine/EventEngine');

var _EventEngine2 = _interopRequireDefault(_EventEngine);

var _index = require('../components/EditableTable/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/factory/ComponentFactory.js';


var RangePicker = _antd.DatePicker.RangePicker;
var TreeNode = _antd.TreeSelect.TreeNode;

var componentList = [];
var componentMap = {};

var AntdComponents = {
	input: function input(option) {
		var evtHandlers = _EventEngine2.default.buildEventHandlers(option);

		console.log('evtHandlers', evtHandlers);

		var prefix = option.prefix,
		    subfix = option.subfix,
		    addonBefore = option.addonBefore,
		    addonAfter = option.addonAfter,
		    defaultValue = option.defaultValue,
		    value = option.value;

		return _react2.default.createElement(_antd.Input, (0, _extends3.default)({
			ref: option.id,
			placeholder: 'input search text',
			addonBefore: addonBefore,
			addonAfter: addonAfter,
			size: 'large',
			value: value,
			defaultValue: defaultValue
		}, evtHandlers, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 48
			}
		}));
	},
	select: function select(option) {
		function handleMenuClick(_ref) {
			var key = _ref.key;

			_antd.message.info('Click on menu item ' + key + '.');
		}

		console.log('option.baseData', option.baseData);

		var menu = _react2.default.createElement(_antd.Menu, {
			ref: option.id,
			defaultSelectedKeys: ['2'],
			onClick: handleMenuClick,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 68
			}
		}, option.baseData.map(function (item, index) {
			return _react2.default.createElement(_antd.Menu.Item, { key: index, value: item.value, __source: {
					fileName: _jsxFileName,
					lineNumber: 75
				}
			}, item.label);
		}));

		return _react2.default.createElement(_antd.Dropdown, { overlay: menu, __source: {
				fileName: _jsxFileName,
				lineNumber: 82
			}
		}, _react2.default.createElement(_antd.Button, {
			ref: option.id,
			size: 'large',
			style: { marginLeft: 8 }, __source: {
				fileName: _jsxFileName,
				lineNumber: 83
			}
		}, option.label, ' ', _react2.default.createElement(_antd.Icon, { type: 'down', __source: {
				fileName: _jsxFileName,
				lineNumber: 87
			}
		})));
	},
	button: function button(option) {
		var evtHandlers = _EventEngine2.default.buildEventHandlers(option);
		return _react2.default.createElement(_antd.Button, (0, _extends3.default)({
			ref: option.id,
			ghost: true,
			size: 'large',
			type: 'primary'
		}, evtHandlers, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 95
			}
		}), option.label);
	},
	submit: function submit(option) {
		var evtHandlers = _EventEngine2.default.buildEventHandlers(option);
		function handleSubmit(_ref2) {
			var key = _ref2.key;

			_antd.message.success('Ready to commit form');
		}
		return _react2.default.createElement(_antd.Button, {
			ref: option.id,
			ghost: true,
			size: 'large',
			type: 'primary',
			onClick: handleSubmit,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 112
			}
		}, option.label);
	},
	rangePicker: function rangePicker(option) {
		var dateFormat = 'YYYY/MM/DD';

		return _react2.default.createElement(RangePicker, {
			ref: option.id,
			size: 'large',
			defaultValue: [(0, _moment2.default)('2015/01/01', dateFormat), (0, _moment2.default)('2015/01/01', dateFormat)],
			format: dateFormat,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 127
			}
		});
	},
	treeSelect: function treeSelect() {
		var value = undefined;
		var onChange = function onChange(e) {
			console.log('eee', e);
		};

		return _react2.default.createElement(_antd.TreeSelect, {
			size: 'large',
			showSearch: true,
			style: { width: '100%' },
			value: value,
			dropdownStyle: { maxHeight: 400, overflow: 'auto' },
			placeholder: 'Please select',
			allowClear: true,
			treeDefaultExpandAll: true,
			onChange: onChange,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 142
			}
		}, _react2.default.createElement(TreeNode, { value: 'parent 1', title: 'parent 1', key: '0-1', __source: {
				fileName: _jsxFileName,
				lineNumber: 153
			}
		}, _react2.default.createElement(TreeNode, { value: 'parent 1-0', title: 'parent 1-0', key: '0-1-1', __source: {
				fileName: _jsxFileName,
				lineNumber: 154
			}
		}, _react2.default.createElement(TreeNode, { value: 'leaf1', title: 'my leaf', key: 'random', __source: {
				fileName: _jsxFileName,
				lineNumber: 155
			}
		}), _react2.default.createElement(TreeNode, { value: 'leaf2', title: 'your leaf', key: 'random1', __source: {
				fileName: _jsxFileName,
				lineNumber: 156
			}
		})), _react2.default.createElement(TreeNode, { value: 'parent 1-1', title: 'parent 1-1', key: 'random2', __source: {
				fileName: _jsxFileName,
				lineNumber: 158
			}
		}, _react2.default.createElement(TreeNode, { value: 'sss', title: _react2.default.createElement('b', { style: { color: '#08c' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 159
				}
			}, 'sss'), key: 'random3', __source: {
				fileName: _jsxFileName,
				lineNumber: 159
			}
		}))));
	},
	editableTable: function editableTable(option) {
		return _react2.default.createElement(_index2.default, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 167
			}
		});
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