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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/components/IFComponents/IFButton/index.js';


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
			var eventList = this.state.option.eventList;

			var ifEventMap = {};

			emmiter.on(this.state.option.id + '-onClick', function (_ref) {
				var eventList = _ref.eventList;

				if (eventList) {
					var options = eventList.options;

					if (options) {
						var action = options.action,
						    target = options.target;

						target.map(function (t) {
							if (action === 'ShowOrHide') {
								var $target = _IFComponentManager2.default.getComponent(t);
								var visibility = $target.getFieldValue('visibility');

								$target.setFieldValue({
									visibility: !visibility
								});
							} else if (action === 'LockOrUnlock') {
								var _$target = _IFComponentManager2.default.getComponent(t);
								var locked = _$target.getFieldValue('locked');

								_$target.setFieldValue({
									locked: !locked
								});
							}
						});
					}
				}
			});

			var onClickEventList = this.state.option.eventList.filter(function (item) {
				return item.eventType === 'onClick';
			})[0];

			var compId = this.state.option.id;

			ifEventMap['onClick'] = function (ev) {
				emmiter.emit(compId + '-onClick', {
					eventList: onClickEventList
				});
			};

			this.setState({
				ifEventMap: ifEventMap
			});
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
			var label = option.label,
			    visibility = option.visibility;
			var onClick = ifEventMap.onClick;

			return _react2.default.createElement(_antd.Button, {
				ghost: true,
				size: 'large',
				type: 'primary',

				onClick: onClick || null,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 116
				}
			}, option.label);
		}
	}]);

	return IFInputNumber;
}(_react.Component);

exports.default = IFInputNumber;