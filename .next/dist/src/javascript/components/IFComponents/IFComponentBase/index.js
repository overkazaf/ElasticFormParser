'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _Util = require('../../../util/Util.js');

var _Util2 = _interopRequireDefault(_Util);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/components/IFComponents/IFComponentBase/index.js';


var is = _immutable2.default.is;

var IFComponentBase = function (_Component) {
	(0, _inherits3.default)(IFComponentBase, _Component);

	function IFComponentBase(props) {
		(0, _classCallCheck3.default)(this, IFComponentBase);

		var _this = (0, _possibleConstructorReturn3.default)(this, (IFComponentBase.__proto__ || (0, _getPrototypeOf2.default)(IFComponentBase)).call(this, props));

		_this.state = {
			option: _immutable2.default.fromJS(props.option),
			eventMap: {}
		};
		return _this;
	}

	(0, _createClass3.default)(IFComponentBase, [{
		key: 'getFieldValue',
		value: function getFieldValue(field) {
			console.log('this.state.option in IFComponentBase', this.state.option);
			return this.state.option.get(field).toJS();
		}
	}, {
		key: 'setFieldValue',
		value: function setFieldValue(json) {
			var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

			var $$option = this.state.option;

			(0, _keys2.default)(json).map(function (field) {
				$$option = $$option.set(field, json[field]);
			});

			this.setState({
				option: $$option
			}, callback);
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			return this.getFieldValue('value');
		}
	}, {
		key: 'setValue',
		value: function setValue(value, callback) {
			this.setFieldValue({
				value: value
			}, callback);
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, nextState) {
			return !(this.props === nextProps || is(this.props, nextProps)) || !(this.state === nextState || is(this.state, nextState));
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			console.log('unmount');

			console.log('unmount event listerner');
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, 'You need to override the IFComponentBase Class in your SubClass');
		}
	}]);

	return IFComponentBase;
}(_react.Component);

exports.default = IFComponentBase;