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

var _Util = require('../../../../../javascript/util/Util.js');

var _Util2 = _interopRequireDefault(_Util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/components/IFComponents/IFInput/IFInputNumber/index.js';


var IFInputNumber = function (_IFComponentBase) {
	(0, _inherits3.default)(IFInputNumber, _IFComponentBase);

	function IFInputNumber(props) {
		(0, _classCallCheck3.default)(this, IFInputNumber);

		return (0, _possibleConstructorReturn3.default)(this, (IFInputNumber.__proto__ || (0, _getPrototypeOf2.default)(IFInputNumber)).call(this, props));
	}

	(0, _createClass3.default)(IFInputNumber, [{
		key: 'getDataModel',
		value: function getDataModel() {}
	}, {
		key: 'render',
		value: function render() {
			var _state = this.state,
			    option = _state.option,
			    eventMap = _state.eventMap;

			var _option$toJS = option.toJS(),
			    placeholder = _option$toJS.placeholder,
			    prefix = _option$toJS.prefix,
			    subfix = _option$toJS.subfix,
			    addonBefore = _option$toJS.addonBefore,
			    addonAfter = _option$toJS.addonAfter,
			    defaultValue = _option$toJS.defaultValue,
			    value = _option$toJS.value,
			    locked = _option$toJS.locked,
			    visibility = _option$toJS.visibility;

			var onClick = eventMap.onClick,
			    onChange = eventMap.onChange,
			    onKeyUp = eventMap.onKeyUp,
			    onKeyDown = eventMap.onKeyDown;

			if (!visibility) {
				return _react2.default.createElement('div', {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 46
					}
				});
			}

			return _react2.default.createElement(_antd.Input, {
				placeholder: placeholder,
				addonBefore: addonBefore,
				addonAfter: addonAfter,
				disabled: !!locked,
				size: 'large',
				value: value,
				defaultValue: defaultValue,

				onClick: onClick ? onClick.bind(this, event) : null,
				onChange: onChange ? onChange.bind(this, event) : null,
				onKeyUp: onKeyUp ? onKeyUp.bind(this, event) : null,
				onKeyDown: onKeyDown ? onKeyDown.bind(this, event) : null,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			});
		}
	}]);

	return IFInputNumber;
}(_index2.default);

exports.default = IFInputNumber;