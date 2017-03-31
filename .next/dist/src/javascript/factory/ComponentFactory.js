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

var _IFComponentManager = require('../manager/IFComponentManager.js');

var _IFComponentManager2 = _interopRequireDefault(_IFComponentManager);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _EventEngine = require('../engine/EventEngine');

var _EventEngine2 = _interopRequireDefault(_EventEngine);

var _index = require('../components/EditableTable/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../components/IFComponents/IFInputNumber/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../components/IFComponents/IFButton/index.js');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('../components/IFComponents/IFDropdown/index.js');

var _index8 = _interopRequireDefault(_index7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/factory/ComponentFactory.js';


var RangePicker = _antd.DatePicker.RangePicker;

var _RadioGroup = _antd.Radio.Group;

var TreeNode = _antd.TreeSelect.TreeNode;

var treeValue = undefined;

var AntdComponents = {
	input: function input(option) {
		var evtHandlers = _EventEngine2.default.buildEventHandlers(option);

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
				lineNumber: 53
			}
		}));
	},
	IFInputNumber: function IFInputNumber(option) {
		return _react2.default.createElement(_index4.default, { ref: option.id, option: option, __source: {
				fileName: _jsxFileName,
				lineNumber: 65
			}
		});
	},
	IFDropdown: function IFDropdown(option) {
		return _react2.default.createElement(_index8.default, { ref: option.id, option: option, __source: {
				fileName: _jsxFileName,
				lineNumber: 66
			}
		});
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
				lineNumber: 70
			}
		}), option.label);
	},
	IFButton: function IFButton(option) {
		return _react2.default.createElement(_index6.default, { ref: option.id, option: option, __source: {
				fileName: _jsxFileName,
				lineNumber: 81
			}
		});
	},
	submit: function submit(option) {
		var evtHandlers = _EventEngine2.default.buildEventHandlers(option);
		function handleSubmit(_ref) {
			var key = _ref.key;

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
				lineNumber: 88
			}
		}, option.label);
	},
	RadioGroup: function RadioGroup(option) {
		var baseData = option.baseData;

		return _react2.default.createElement(_RadioGroup, { value: option.value, __source: {
				fileName: _jsxFileName,
				lineNumber: 105
			}
		}, baseData.map(function (item) {
			return _react2.default.createElement(_antd.Radio, { value: item.value, __source: {
					fileName: _jsxFileName,
					lineNumber: 109
				}
			}, item.name);
		}));
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
				lineNumber: 120
			}
		});
	},
	treeSelect: function treeSelect(option) {
		var onChange = function onChange(e) {
			console.log('eee', e);
			treeValue = e;
		};

		return _react2.default.createElement(_antd.TreeSelect, {
			size: 'large',
			showSearch: true,
			style: { width: '100%' },
			value: treeValue,
			dropdownStyle: { maxHeight: 400, overflow: 'auto' },
			placeholder: 'Please select',
			allowClear: true,
			treeDefaultExpandAll: true,
			onChange: onChange,
			__source: {
				fileName: _jsxFileName,
				lineNumber: 135
			}
		}, _react2.default.createElement(TreeNode, { value: '\u5154\u5DE2\u79D1\u6280', title: '\u5154\u5DE2\u79D1\u6280', key: '0-1', __source: {
				fileName: _jsxFileName,
				lineNumber: 146
			}
		}, _react2.default.createElement(TreeNode, { value: 'UED\u4E2D\u5FC3', title: 'UED\u4E2D\u5FC3', key: '0-1-1', __source: {
				fileName: _jsxFileName,
				lineNumber: 147
			}
		}, _react2.default.createElement(TreeNode, { value: '\u4EBA\u5458\u4E00', title: '\u4EBA\u5458\u4E00', key: 'random', __source: {
				fileName: _jsxFileName,
				lineNumber: 148
			}
		})), _react2.default.createElement(TreeNode, { value: '\u5E73\u53F0\u7814\u53D1\u4E2D\u5FC3', title: '\u5E73\u53F0\u7814\u53D1\u4E2D\u5FC3', key: 'random2', __source: {
				fileName: _jsxFileName,
				lineNumber: 150
			}
		}, _react2.default.createElement(TreeNode, { value: '\u4EBA\u5458\u4E8C', title: _react2.default.createElement('b', { style: { color: '#08c' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 151
				}
			}, '\u4EBA\u5458\u4E8C'), key: 'random3', __source: {
				fileName: _jsxFileName,
				lineNumber: 151
			}
		}))));
	},
	editableTable: function editableTable(option) {
		return _react2.default.createElement(_index2.default, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 159
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
			return AntdComponents[type](option);
		}
	}]);

	return ComponentFactory;
}();

exports.default = ComponentFactory;