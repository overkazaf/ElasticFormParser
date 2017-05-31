'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _antd = require('antd');

var _Util = require('../../../../utils/Util.js');

var _Util2 = _interopRequireDefault(_Util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/components/IFComponents/IFInput/IFInputPhone/index.js';


var FormItem = _antd.Form.Item;

var IFInputPhone = function (_IFComponentBase) {
	(0, _inherits3.default)(IFInputPhone, _IFComponentBase);

	function IFInputPhone(props) {
		(0, _classCallCheck3.default)(this, IFInputPhone);

		return (0, _possibleConstructorReturn3.default)(this, (IFInputPhone.__proto__ || (0, _getPrototypeOf2.default)(IFInputPhone)).call(this, props));
	}

	(0, _createClass3.default)(IFInputPhone, [{
		key: 'render',
		value: function render() {
			var getFieldDecorator = this.props.form.getFieldDecorator;
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

			var fontStyleObj = (0, _extends3.default)({
				fontSize: fontSize,
				fontFamily: fontFamily,
				lineHeight: lineHeight
			}, extraStyle);

			if (!visibility) {
				return _react2.default.createElement('div', { style: { textAlign: 'center' }, __source: {
						fileName: _jsxFileName,
						lineNumber: 41
					}
				}, _react2.default.createElement(_antd.Icon, { type: 'eye', __source: {
						fileName: _jsxFileName,
						lineNumber: 41
					}
				}));
			}

			return _react2.default.createElement(FormItem, {
				label: label,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}, getFieldDecorator(option.id, {
				rules: [{ required: !!mustInput, message: '请输入手机号码' }, { pattern: '/^{1}[3,4,5]{\d}9$/', message: '请输入合法的手机号码!' }],
				initialValue: defaultValue || ''
			})(_react2.default.createElement(_antd.Input, {
				placeholder: placeholder,
				addonBefore: addonBefore,
				addonAfter: addonAfter,
				suffix: suffix,
				prefix: prefix,
				disabled: !!locked,
				size: size || 'large',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			})));
		}
	}]);

	return IFInputPhone;
}(_index2.default);

var wrappedIFInputPhone = _antd.Form.create({})(IFInputPhone);

exports.default = wrappedIFInputPhone;