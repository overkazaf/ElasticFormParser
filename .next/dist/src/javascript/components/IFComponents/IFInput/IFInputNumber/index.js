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

var _index = require('../../IFComponentBase/index.js');

var _index2 = _interopRequireDefault(_index);

var _antd = require('antd');

var _Util = require('../../../../utils/Util.js');

var _Util2 = _interopRequireDefault(_Util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/components/IFComponents/IFInput/IFInputNumber/index.js';


var FormItem = _antd.Form.Item;

var IFInputNumber = function (_IFComponentBase) {
	(0, _inherits3.default)(IFInputNumber, _IFComponentBase);

	function IFInputNumber(props) {
		(0, _classCallCheck3.default)(this, IFInputNumber);

		return (0, _possibleConstructorReturn3.default)(this, (IFInputNumber.__proto__ || (0, _getPrototypeOf2.default)(IFInputNumber)).call(this, props));
	}

	(0, _createClass3.default)(IFInputNumber, [{
		key: 'render',
		value: function render() {
			var option = this.props.option;

			var model = _Util2.default.parseDataModel(option);
			var size = model.size,
			    theme = model.theme,
			    label = model.label,
			    fontFamily = model.fontFamily,
			    fontSize = model.fontSize,
			    lineHeight = model.lineHeight,
			    textAlign = model.textAlign,
			    visibility = model.visibility,
			    locked = model.locked,
			    mustInput = model.mustInput,
			    defaultValue = model.defaultValue,
			    value = model.value,
			    link = model.link,
			    linkTarget = model.linkTarget,
			    placeholder = model.placeholder,
			    carry = model.carry,
			    addonBefore = model.addonBefore,
			    addonAfter = model.addonAfter,
			    prefix = model.prefix,
			    suffix = model.suffix,
			    extraStyle = model.extraStyle;

			if (!visibility) {
				return _react2.default.createElement('div', { style: { textAlign: 'center' }, __source: {
						fileName: _jsxFileName,
						lineNumber: 33
					}
				}, _react2.default.createElement(_antd.Icon, { type: 'eye', __source: {
						fileName: _jsxFileName,
						lineNumber: 33
					}
				}));
			}

			return _react2.default.createElement(FormItem, {
				label: label,
				required: !!mustInput,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, _react2.default.createElement(_antd.InputNumber, {
				min: -Infinity,
				max: Infinity,
				prefix: prefix,
				suffix: suffix,
				step: 1,
				disabled: !!locked,
				size: size,
				value: value,
				defaultValue: defaultValue,
				style: { width: '100%' },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}));
		}
	}]);

	return IFInputNumber;
}(_index2.default);

exports.default = IFInputNumber;