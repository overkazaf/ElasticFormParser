'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _index = require('../IFComponentBase/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/components/IFComponents/IFDropdown/index.js';


var IFDropdown = function (_IFComponentBase) {
	(0, _inherits3.default)(IFDropdown, _IFComponentBase);

	function IFDropdown(props) {
		(0, _classCallCheck3.default)(this, IFDropdown);

		return (0, _possibleConstructorReturn3.default)(this, (IFDropdown.__proto__ || (0, _getPrototypeOf2.default)(IFDropdown)).call(this, props));
	}

	(0, _createClass3.default)(IFDropdown, [{
		key: 'handleMenuClick',
		value: function handleMenuClick(_ref) {
			var key = _ref.key;

			var selectedOption = this.state.option.get('baseData').toJS().filter(function (item, index) {
				return index == key;
			})[0];

			_antd.message.info('Click on menu item ' + selectedOption.label + ' values ' + selectedOption.value + '.');

			if (selectedOption) {
				this.setFieldValue({
					label: selectedOption.label,
					value: selectedOption.value
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var option = this.state.option;

			var rawOption = option.toJS();

			var menu = _react2.default.createElement(_antd.Menu, {
				defaultSelectedKeys: ['1'],
				onClick: this.handleMenuClick.bind(this),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 42
				}
			}, rawOption.baseData.map(function (item, index) {
				return _react2.default.createElement(_antd.Menu.Item, { key: index, value: item.value, __source: {
						fileName: _jsxFileName,
						lineNumber: 48
					}
				}, item.label);
			}));

			return _react2.default.createElement(_antd.Dropdown, { overlay: menu, __source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, _react2.default.createElement(_antd.Button, {
				size: 'large',
				style: { marginLeft: 8 }, __source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, rawOption.label, ' ', _react2.default.createElement(_antd.Icon, { type: 'down', __source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			})));
		}
	}]);

	return IFDropdown;
}(_index2.default);

exports.default = IFDropdown;