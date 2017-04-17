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

var _Util = require('../util/Util.js');

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
			'onWheel'].map(function (eventName) {

				// let currentEvent = `${id}-${eventName}`;

				// let eventOption = eventList.filter((item) => {
				// 						return item.eventType === eventName;
				// 					})[0];
				// if (!Util.isExisty(eventOption)) {
				// 	return;
				// }

				// eventMap[eventName] = (ev) => {
				// 	emmiter.emit(`${currentEvent}`, {
				// 		value: ev.target.value,
				// 		eventOption,
				// 	});
				// };

				// emmiter.on(`${currentEvent}`, ({
				// 	value,
				// 	eventOption,
				// }) => {
				// 	let callback = () => {};

				// 	if (Util.isExisty(eventOption) && Util.isExisty(eventOption.options)) {
				// 		callback = () => {
				// 			ActionManager.execute(id, eventOption.options);
				// 		};
				// 	} else {
				// 		throw new Error('Null parameters found while executing emmiter');
				// 	}

				// 	component.setValue(value, callback);
				// });
			});

			eventList && eventList.map(function (evtObj) {
				var eventType = evtObj.eventType,
				    options = evtObj.options;

				var currentEvent = id + '-' + eventType;

				console.log('currentEvent : ' + currentEvent);

				eventMap[eventType] = function (e) {
					emmiter.emit('' + currentEvent, {
						ev: e,
						options: options
					});
				};

				emmiter.on('' + currentEvent, function (_ref2) {
					var ev = _ref2.ev,
					    options = _ref2.options;

					var callback = function callback() {};

					if (_Util2.default.isExisty(options)) {
						callback = function callback() {
							_IFActionManager2.default.execute(id, options, ev);
						};
					} else {
						throw new Error('Null parameters found while executing emmiter');
					}

					// console.log(`callback , ${JSON.stringify(callback)}`);

					_IFComponentManager2.default.get(id).setValue(ev.target.value, callback);
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