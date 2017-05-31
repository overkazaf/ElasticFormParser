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

var _antd = require('antd');

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _index = require('../../IFComponentBase/index.js');

var _index2 = _interopRequireDefault(_index);

var _Util = require('../../../../utils/Util.js');

var _Util2 = _interopRequireDefault(_Util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/components/IFComponents/IFButton/IFButtonNormal/index.js';


var IFButtonNormal = function (_IFComponentBase) {
	(0, _inherits3.default)(IFButtonNormal, _IFComponentBase);

	function IFButtonNormal(props) {
		(0, _classCallCheck3.default)(this, IFButtonNormal);

		var _this = (0, _possibleConstructorReturn3.default)(this, (IFButtonNormal.__proto__ || (0, _getPrototypeOf2.default)(IFButtonNormal)).call(this, props));

		_this.state = {
			option: props.option,
			eventMap: {}
		};
		return _this;
	}

	(0, _createClass3.default)(IFButtonNormal, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    option = _props.option,
			    eventMap = _props.eventMap;

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
			    extraStyle = model.extraStyle;

			var fontStyleObj = (0, _extends3.default)({
				fontSize: fontSize,
				fontFamily: fontFamily,
				lineHeight: lineHeight
			}, extraStyle);

			var onClick = eventMap.onClick;

			return _react2.default.createElement(_antd.Button, {
				ghost: !!ghost,
				size: size || 'large',
				type: theme,
				disabled: !!locked,
				onClick: onClick || null,
				style: { width: '100%' },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}, _react2.default.createElement('span', { style: fontStyleObj, __source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}, label));
		}
	}]);

	return IFButtonNormal;
}(_index2.default);

exports.default = IFButtonNormal;