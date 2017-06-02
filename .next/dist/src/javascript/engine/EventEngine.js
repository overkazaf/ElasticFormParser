'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _IFActionManager = require('../manager/IFActionManager.js');

var _IFActionManager2 = _interopRequireDefault(_IFActionManager);

var _IFComponentManager = require('../manager/IFComponentManager.js');

var _IFComponentManager2 = _interopRequireDefault(_IFComponentManager);

var _Util = require('../utils/Util.js');

var _Util2 = _interopRequireDefault(_Util);

var _mitt = require('mitt');

var _mitt2 = _interopRequireDefault(_mitt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emmiter = (0, _mitt2.default)();

var EventEngine = function () {
	function EventEngine() {
		(0, _classCallCheck3.default)(this, EventEngine);
	}

	(0, _createClass3.default)(EventEngine, null, [{
		key: 'subscribe',
		value: function subscribe(component, _ref, callbackFunction) {
			var option = _ref.option;

			var eventMap = {};
			var id = option.id,
			    eventList = option.eventList;

			// Event system based on React Event System
			// see http://reactjs.cn/react/docs/events.html

			[
			// keyboard events
			'onKeyPress', 'onKeyUp', 'onKeyDown',

			// focus events
			'onFocus', 'onBlur',

			// form events
			'onChange', 'onInput', 'onSubmit',

			// mouse events
			'onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp',

			// touch events
			'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart',

			// user events
			'onScroll',

			// wheel events
			'onWheel'].map(function (eventName) {});

			eventList && eventList.map(function (evtObj) {
				var eventType = evtObj.eventType,
				    actionList = evtObj.actionList;

				var currentEvent = id + '-' + eventType;

				eventMap[eventType] = function (e) {
					emmiter.emit('' + currentEvent, {
						ev: e,
						actionList: actionList
					});
				};

				emmiter.on('' + currentEvent, function (_ref2) {
					var ev = _ref2.ev,
					    actionList = _ref2.actionList;

					var callback = function callback() {};

					if (_Util2.default.isExisty(actionList)) {
						callback = function callback() {
							_IFActionManager2.default.execute(id, actionList, ev);
						};
					} else {
						throw new Error('Null parameters found while executing emmiter');
					}

					_IFComponentManager2.default.get(id).setFieldValue({
						inputValue: {
							value: {
								value: ev.target.value ? ev.target.value : '' }
						}
					}, callback);
				});

				component.setState({
					eventMap: eventMap
				});
			});

			callbackFunction && callbackFunction(eventMap);
		}
	}, {
		key: 'unsubscribe',
		value: function unsubscribe(componentId, eventMap) {
			(0, _keys2.default)(eventMap).map(function (eventName) {
				var listener = componentId + '-' + eventName;
				console.log('Unsubscribing event:' + listener);

				emmiter.off(listener);
			});
		}
	}]);

	return EventEngine;
}();

exports.default = EventEngine;