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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/components/IFComponents/IFInput/IFInputPhone/index.js';


var FormItem = _antd.Form.Item;

var IFInputPhone = function (_IFComponentBase) {
	(0, _inherits3.default)(IFInputPhone, _IFComponentBase);

	function IFInputPhone(props) {
		(0, _classCallCheck3.default)(this, IFInputPhone);

		var _this = (0, _possibleConstructorReturn3.default)(this, (IFInputPhone.__proto__ || (0, _getPrototypeOf2.default)(IFInputPhone)).call(this, props));

		_this.state = {
			option: props.option,
			eventMap: {},
			validateStatus: ""
		};
		return _this;
	}

	(0, _createClass3.default)(IFInputPhone, [{
		key: 'changeValue',
		value: function changeValue(_ref) {
			var _this2 = this;

			var target = _ref.target;

			// calling prototype class

			this.setValue(target.value, function () {
				_this2.validateField();
			});
		}
	}, {
		key: 'validateField',
		value: function validateField() {
			var re = /1[3|5|7|8|][0-9]{9}/;
			var digitReg = /\d+/;
			var phoneNumber = this.getValue();
			var validateStatus = void 0;

			if (phoneNumber.length < 11) {
				if (!digitReg.test(phoneNumber)) {
					validateStatus = 'error';
				} else {
					validateStatus = 'warning';
				}
			} else {
				validateStatus = 'error';

				if (phoneNumber.length === 11 && re.test(phoneNumber)) {
					validateStatus = 'success';
				}
			}

			this.setState({
				validateStatus: validateStatus
			}, function () {
				validateStatus == 'error' && _antd.message.error('Phone number is invalid');
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _state = this.state,
			    option = _state.option,
			    validateStatus = _state.validateStatus;

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
				return _react2.default.createElement('div', {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 85
					}
				});
			}

			console.log('option', option);

			return _react2.default.createElement(FormItem, {
				label: label,
				required: mustInput,
				validateStatus: validateStatus,
				hasFeedback: true,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 92
				}
			}, _react2.default.createElement(_antd.Input, {
				placeholder: placeholder,
				addonBefore: addonBefore,
				addonAfter: addonAfter,
				suffix: suffix,
				prefix: prefix,
				disabled: !!locked,
				value: value,
				defaultValue: defaultValue,
				onChange: _lodash2.default.throttle(this.changeValue.bind(this), 200),
				onBlur: _lodash2.default.throttle(this.validateField.bind(this), 200),
				size: size || 'large',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 98
				}
			}));
		}
	}]);

	return IFInputPhone;
}(_index2.default);

exports.default = IFInputPhone;

// const wrappedIFInputPhone = Form.create({})(IFInputPhone);

// export default wrappedIFInputPhone;