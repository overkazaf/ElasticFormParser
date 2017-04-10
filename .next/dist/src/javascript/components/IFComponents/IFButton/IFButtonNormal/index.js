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

var _index = require('../../IFComponentBase/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/components/IFComponents/IFButton/IFButtonNormal/index.js';


var IFButtonNormal = function (_IFComponentBase) {
	(0, _inherits3.default)(IFButtonNormal, _IFComponentBase);

	function IFButtonNormal(props) {
		(0, _classCallCheck3.default)(this, IFButtonNormal);

		return (0, _possibleConstructorReturn3.default)(this, (IFButtonNormal.__proto__ || (0, _getPrototypeOf2.default)(IFButtonNormal)).call(this, props));
	}

	(0, _createClass3.default)(IFButtonNormal, [{
		key: 'getDataModel',
		value: function getDataModel() {}
	}, {
		key: 'render',
		value: function render() {
			var _state = this.state,
			    option = _state.option,
			    eventMap = _state.eventMap;

			var _option$toJS = option.toJS(),
			    label = _option$toJS.label,
			    visibility = _option$toJS.visibility,
			    locked = _option$toJS.locked,
			    theme = _option$toJS.theme,
			    ghost = _option$toJS.ghost;

			var onClick = eventMap.onClick;

			return _react2.default.createElement(_antd.Button, {
				ghost: !!ghost,
				size: 'large',
				type: theme,
				disabled: !!locked,
				onClick: onClick,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, label);
		}
	}]);

	return IFButtonNormal;
}(_index2.default);

exports.default = IFButtonNormal;