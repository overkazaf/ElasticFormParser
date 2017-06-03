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

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _antd = require('antd');

var _Util = require('../../../../utils/Util.js');

var _Util2 = _interopRequireDefault(_Util);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/components/IFComponents/IFInput/IFInputNormal/index.js';


var FormItem = _antd.Form.Item;

var IFInputNormal = function (_IFComponentBase) {
	(0, _inherits3.default)(IFInputNormal, _IFComponentBase);

	function IFInputNormal(props) {
		(0, _classCallCheck3.default)(this, IFInputNormal);

		return (0, _possibleConstructorReturn3.default)(this, (IFInputNormal.__proto__ || (0, _getPrototypeOf2.default)(IFInputNormal)).call(this, props));
	}

	(0, _createClass3.default)(IFInputNormal, [{
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
		value: function validateField() {}
	}, {
		key: 'render',
		value: function render() {
			var option = this.state.option;

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
				return _react2.default.createElement('div', {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 47
					}
				});
			}

			return _react2.default.createElement(FormItem, {
				label: label,
				required: !!mustInput,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, _react2.default.createElement(_antd.Input, {
				placeholder: placeholder,
				addonBefore: addonBefore,
				addonAfter: addonAfter,
				suffix: suffix,
				prefix: prefix,
				disabled: !!locked,
				size: size || 'large',
				value: value,
				defaultValue: defaultValue,
				onChange: _lodash2.default.throttle(this.changeValue.bind(this), 200),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}));
		}
	}]);

	return IFInputNormal;
}(_index2.default);

exports.default = IFInputNormal;