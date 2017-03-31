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

var _IFComponentManager = require('../../../manager/IFComponentManager.js');

var _IFComponentManager2 = _interopRequireDefault(_IFComponentManager);

var _Util = require('../../../../javascript/util/Util.js');

var _Util2 = _interopRequireDefault(_Util);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _mitt = require('mitt');

var _mitt2 = _interopRequireDefault(_mitt);

var _mathjs = require('mathjs');

var _mathjs2 = _interopRequireDefault(_mathjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/components/IFComponents/IFInputNumber/index.js';


var emmiter = (0, _mitt2.default)();

var IFInputNumber = function (_Component) {
	(0, _inherits3.default)(IFInputNumber, _Component);

	function IFInputNumber(props) {
		(0, _classCallCheck3.default)(this, IFInputNumber);

		var _this = (0, _possibleConstructorReturn3.default)(this, (IFInputNumber.__proto__ || (0, _getPrototypeOf2.default)(IFInputNumber)).call(this, props));

		_this.state = {
			option: props.option,
			ifEventMap: {}
		};
		return _this;
	}

	(0, _createClass3.default)(IFInputNumber, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.option != null) {
				this.setState({
					option: nextProps.option
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			// binding event here
			console.log('IFInputNumber mounted', this.state.option);

			var eventList = this.state.option.eventList;

			var ifEventMap = {};

			emmiter.on(this.state.option.id + '-onChange', function (_ref) {
				var value = _ref.value,
				    eventList = _ref.eventList;

				var callback = function callback() {};

				if (_Util2.default.isExisty(eventList)) {
					callback = function callback() {
						var options = eventList.options;

						if (options) {
							var action = options.action,
							    params = options.params,
							    expression = options.expression,
							    target = options.target;

							target.map(function (t) {
								if (action === 'SetToTarget') {
									// let values = params.map((compId) => {
									// 	return ComponentManager.getComponent(compId).getValue();
									// });
									// let sum = values.reduce((prev, current) => {
									// 	return prev * current;
									// }, 1);

									var expRE = /\$\{(.*?)\}/g;
									if (expression && expRE.test(expression)) {
										expression = expression.replace(expRE, function (matched, compId) {
											return _IFComponentManager2.default.getComponent(compId).getValue() || 0;
										});

										console.log('expression', expression);

										_IFComponentManager2.default.getComponent(t).setValue(_mathjs2.default.eval(expression));
									}
								}
							});
						}
					};
				}

				_this2.setValue(value, callback);
			});

			var onChangeEventList = this.state.option.eventList.filter(function (item) {
				return item.eventType === 'onChange';
			})[0];

			var compId = this.state.option.id;

			ifEventMap['onChange'] = function (ev) {
				emmiter.emit(compId + '-onChange', {
					value: ev.target.value,
					eventList: onChangeEventList
				});
			};

			this.setState({
				ifEventMap: ifEventMap
			});
		}
	}, {
		key: 'setFieldValue',
		value: function setFieldValue(json, callback) {
			var newOption = _Util2.default.deepClone(this.state.option);
			for (var field in json) {
				newOption[field] = json[field];
			}

			this.setState({
				option: newOption
			}, function () {
				callback && callback();
			});
		}
	}, {
		key: 'getFieldValue',
		value: function getFieldValue(field) {
			return this.state.option[field];
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
		key: 'getDataModel',
		value: function getDataModel() {}
	}, {
		key: 'render',
		value: function render() {
			var _state = this.state,
			    option = _state.option,
			    ifEventMap = _state.ifEventMap;
			var prefix = option.prefix,
			    subfix = option.subfix,
			    addonBefore = option.addonBefore,
			    addonAfter = option.addonAfter,
			    defaultValue = option.defaultValue,
			    value = option.value,
			    locked = option.locked,
			    visibility = option.visibility;
			var onClick = ifEventMap.onClick,
			    onChange = ifEventMap.onChange,
			    onKeyUp = ifEventMap.onKeyUp,
			    onKeyDown = ifEventMap.onKeyDown;

			if (!visibility) {
				return _react2.default.createElement('div', {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 169
					}
				});
			}

			return _react2.default.createElement(_antd.Input, {
				placeholder: 'input search text',
				addonBefore: addonBefore,
				addonAfter: addonAfter,
				disabled: !!locked,
				size: 'large',
				value: value,
				defaultValue: defaultValue,

				onClick: onClick || null,
				onChange: onChange || null,
				onKeyUp: onKeyUp || null,
				onKeyDown: onKeyDown || null,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 173
				}
			});
		}
	}]);

	return IFInputNumber;
}(_react.Component);

exports.default = IFInputNumber;