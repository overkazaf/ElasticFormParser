'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

			console.log('this.state.option.dataSource', this.props.option.dataSource);

			var selectedOption = this.props.option.dataSource.filter(function (item, index) {
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
			var option = this.props.option;

			var rawOption = option;

			console.log('rawOption.dataSource', rawOption.dataSource);

			var menu = _react2.default.createElement(_antd.Menu, {
				defaultSelectedKeys: ['1'],
				onClick: this.handleMenuClick.bind(this),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}, rawOption.dataSource && rawOption.dataSource.map(function (item, index) {
				return _react2.default.createElement(_antd.Menu.Item, { key: index, value: item.value, __source: {
						fileName: _jsxFileName,
						lineNumber: 51
					}
				}, item.label);
			}));

			var _rawOption$basicProps = rawOption.basicProps,
			    _rawOption$basicProps2 = _rawOption$basicProps.componentTheme,
			    backgroundColor = _rawOption$basicProps2.backgroundColor,
			    fontColor = _rawOption$basicProps2.fontColor,
			    layoutStyle = _rawOption$basicProps2.layoutStyle,
			    size = _rawOption$basicProps2.size,
			    theme = _rawOption$basicProps2.theme,
			    _rawOption$basicProps3 = _rawOption$basicProps.inputValue,
			    carry = _rawOption$basicProps3.carry,
			    defaultValue = _rawOption$basicProps3.defaultValue,
			    label = _rawOption$basicProps3.label,
			    link = _rawOption$basicProps3.link,
			    linkTarget = _rawOption$basicProps3.linkTarget,
			    placeholder = _rawOption$basicProps3.placeholder,
			    value = _rawOption$basicProps3.value,
			    _rawOption$basicProps4 = _rawOption$basicProps.formStatus,
			    visibility = _rawOption$basicProps4.visibility,
			    locked = _rawOption$basicProps4.locked,
			    _rawOption$basicProps5 = _rawOption$basicProps.fontStyles,
			    fontFamily = _rawOption$basicProps5.fontFamily,
			    fontStyle = _rawOption$basicProps5.fontStyle,
			    fontSize = _rawOption$basicProps5.fontSize,
			    lineHeight = _rawOption$basicProps5.lineHeight,
			    textAlign = _rawOption$basicProps5.textAlign;

			var _map = [backgroundColor, size, theme, label, fontFamily, fontSize, lineHeight, textAlign, visibility, locked].map(function (item) {
				return item.value;
			});

			var _map2 = (0, _slicedToArray3.default)(_map, 10);

			backgroundColor = _map2[0];
			size = _map2[1];
			theme = _map2[2];
			label = _map2[3];
			fontFamily = _map2[4];
			fontSize = _map2[5];
			lineHeight = _map2[6];
			textAlign = _map2[7];
			visibility = _map2[8];
			locked = _map2[9];

			var _map3 = [fontStyle].map(function (item) {
				return item.values;
			});

			var _map4 = (0, _slicedToArray3.default)(_map3, 1);

			fontStyle = _map4[0];

			var extraStyle = {};
			if (fontStyle) {
				var pairs = fontStyle.split('$');
				pairs.map(function (pair) {
					var _pair$split = pair.split(':'),
					    _pair$split2 = (0, _slicedToArray3.default)(_pair$split, 2),
					    k = _pair$split2[0],
					    v = _pair$split2[1];

					extraStyle[k] = v;
				});
			}

			var fontStyleObj = (0, _extends3.default)({
				fontSize: fontSize,
				fontFamily: fontFamily,
				lineHeight: lineHeight
			}, extraStyle);

			if (!visibility) {
				return _react2.default.createElement('div', {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 111
					}
				});
			}

			return _react2.default.createElement('div', { style: { backgroundColor: backgroundColor }, __source: {
					fileName: _jsxFileName,
					lineNumber: 115
				}
			}, _react2.default.createElement(_antd.Dropdown, { overlay: menu, __source: {
					fileName: _jsxFileName,
					lineNumber: 116
				}
			}, _react2.default.createElement(_antd.Button, {
				disabled: !!locked,
				size: size,
				type: theme || 'default',
				style: { width: '100%', textAlign: textAlign }, __source: {
					fileName: _jsxFileName,
					lineNumber: 117
				}
			}, _react2.default.createElement('span', { style: fontStyleObj, __source: {
					fileName: _jsxFileName,
					lineNumber: 122
				}
			}, label), _react2.default.createElement(_antd.Icon, { type: 'down', __source: {
					fileName: _jsxFileName,
					lineNumber: 123
				}
			}))));
		}
	}]);

	return IFDropdown;
}(_index2.default);

exports.default = IFDropdown;