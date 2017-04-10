webpackHotUpdate(4,{

/***/ 1147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keys = __webpack_require__(222);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _IFActionManager = __webpack_require__(1949);

var _IFActionManager2 = _interopRequireDefault(_IFActionManager);

var _IFComponentManager = __webpack_require__(756);

var _IFComponentManager2 = _interopRequireDefault(_IFComponentManager);

var _Util = __webpack_require__(698);

var _Util2 = _interopRequireDefault(_Util);

var _mitt = __webpack_require__(988);

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
					e.persist();
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/engine/EventEngine.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/engine/EventEngine.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9lbmdpbmUvRXZlbnRFbmdpbmUuanM/MDdmNzFmMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7Ozs7QUFDRzs7OztBQUNaOzs7O0FBQ1Y7Ozs7OztBQUVQLElBQUksVUFBVTs7SUFHTzs7Ozs7Ozs0QkFFSCxpQkFBdUIsa0JBQWtCO09BQUEsY0FFekQ7O09BQUksV0FBVztPQUVkLEtBRUcsT0FGSDtPQUNBLFlBQ0csT0FFSjs7QUFDQTtBQUNBOztBQUNDO0FBQ0E7QUFGRCxpQkFFZSxXQUVkOztBQUNBO0FBTEQsY0FPQzs7QUFDQTtBQVJELGVBUWEsV0FFWjs7QUFDQTtBQVhELGNBV1ksaUJBQWlCLGlCQUFpQixVQUFVLGFBQWEsZUFBZSxjQUNuRixlQUFlLGNBQWMsZUFBZSxVQUFVLGVBQWUsZ0JBQWdCLGdCQUNyRixlQUFlLGNBQWMsZUFFN0I7O0FBQ0E7QUFoQkQsb0JBZ0JrQixjQUFjLGVBRS9COztBQUNBO0FBRUE7O0FBQ0E7QUF0QkQsY0F1QkUsSUFBSSxVQUFDLFdBRU47O0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFFRDs7MEJBQXVCLElBQUksVUFBQyxRQUFXO1FBRXJDLFlBRUcsT0FGSDtRQUNBLFVBQ0csT0FFSjs7UUFBSSxlQUFrQixXQUV0Qjs7WUFBUSx3QkFFUjs7YUFBUyxhQUFhLFVBQUMsSUFDdEI7UUFDQTthQUFRLFVBQVE7VUFFZjtlQUVEO0FBSEM7QUFLRjs7WUFBUSxRQUFNLGNBQWdCLGlCQUd4QjtTQUFBO1NBQUEsZ0JBQ0w7O1NBQUksV0FBVyxvQkFBUSxDQUV2Qjs7U0FBSSxlQUFLLFNBQVMsVUFDakI7aUJBQVcsb0JBQ1Y7aUNBQWMsUUFBUSxJQUFJLFNBQzFCO0FBQ0Q7QUFKRCxZQUtDO1lBQU0sSUFBSSxNQUNWO0FBRUQ7O0FBRUE7O2tDQUFpQixJQUFJLElBQUksU0FBUyxHQUFHLE9BQU8sT0FDNUM7QUFDRDtBQUdELElBdkNhOzt1QkF1Q08saUJBQ3BCOzs7OzhCQUVrQixhQUFhLFVBQy9CO3VCQUFZLFVBQVUsSUFBSSxVQUFDLFdBQzFCO1FBQUksV0FBYyxvQkFDbEI7WUFBUSxJQUFJLHlCQUVaOztZQUFRLElBQ1I7QUFDRDs7Ozs7OztrQkF4SG1CLFkiLCJmaWxlIjoiNC44YzVlZDJiMDRhZDBmY2MxMWUzZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbk1hbmFnZXIgZnJvbSAnLi4vbWFuYWdlci9JRkFjdGlvbk1hbmFnZXIuanMnO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSAnLi4vbWFuYWdlci9JRkNvbXBvbmVudE1hbmFnZXIuanMnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vdXRpbC9VdGlsLmpzJztcbmltcG9ydCBtaXR0IGZyb20gJ21pdHQnO1xuXG5sZXQgZW1taXRlciA9IG1pdHQoKTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVuZ2luZSB7XG5cblx0c3RhdGljIHN1YnNjcmliZShjb21wb25lbnQsIHsgb3B0aW9uIH0sIGNhbGxiYWNrRnVuY3Rpb24pIHtcblxuXHRcdGxldCBldmVudE1hcCA9IHt9O1xuXHRcdGxldCB7XG5cdFx0XHRpZCxcblx0XHRcdGV2ZW50TGlzdCxcblx0XHR9ID0gb3B0aW9uO1xuXG5cdFx0Ly8gRXZlbnQgc3lzdGVtIGJhc2VkIG9uIFJlYWN0IEV2ZW50IFN5c3RlbVxuXHRcdC8vIHNlZSBodHRwOi8vcmVhY3Rqcy5jbi9yZWFjdC9kb2NzL2V2ZW50cy5odG1sXG5cdFx0W1xuXHRcdFx0Ly8ga2V5Ym9hcmQgZXZlbnRzXG5cdFx0XHQnb25LZXlQcmVzcycsICdvbktleVVwJywgJ29uS2V5RG93bicsXG5cblx0XHRcdC8vIGZvY3VzIGV2ZW50c1xuXHRcdFx0J29uRm9jdXMnLCAnb25CbHVyJyxcblxuXHRcdFx0Ly8gZm9ybSBldmVudHNcblx0XHRcdCdvbkNoYW5nZScsICdvbklucHV0JywgJ29uU3VibWl0JyxcblxuXHRcdFx0Ly8gbW91c2UgZXZlbnRzXG5cdFx0XHQnb25DbGljaycsICdvbkNvbnRleHRNZW51JywgJ29uRG91YmxlQ2xpY2snLCAnb25EcmFnJywgJ29uRHJhZ0VuZCcsICdvbkRyYWdFbnRlcicsICdvbkRyYWdFeGl0Jyxcblx0XHRcdCdvbkRyYWdMZWF2ZScsICdvbkRyYWdPdmVyJywgJ29uRHJhZ1N0YXJ0JywgJ29uRHJvcCcsICdvbk1vdXNlRG93bicsICdvbk1vdXNlRW50ZXInLCAnb25Nb3VzZUxlYXZlJyxcblx0XHRcdCdvbk1vdXNlTW92ZScsICdvbk1vdXNlT3V0JywgJ29uTW91c2VPdmVyJywgJ29uTW91c2VVcCcsXG5cblx0XHRcdC8vIHRvdWNoIGV2ZW50c1xuXHRcdFx0J29uVG91Y2hDYW5jZWwnLCAnb25Ub3VjaEVuZCcsICdvblRvdWNoTW92ZScsICdvblRvdWNoU3RhcnQnLFxuXG5cdFx0XHQvLyB1c2VyIGV2ZW50c1xuXHRcdFx0J29uU2Nyb2xsJyxcblxuXHRcdFx0Ly8gd2hlZWwgZXZlbnRzXG5cdFx0XHQnb25XaGVlbCcsXG5cdFx0XS5tYXAoKGV2ZW50TmFtZSkgPT4ge1xuXG5cdFx0XHQvLyBsZXQgY3VycmVudEV2ZW50ID0gYCR7aWR9LSR7ZXZlbnROYW1lfWA7XG5cblx0XHRcdC8vIGxldCBldmVudE9wdGlvbiA9IGV2ZW50TGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcblx0XHRcdC8vIFx0XHRcdFx0XHRcdHJldHVybiBpdGVtLmV2ZW50VHlwZSA9PT0gZXZlbnROYW1lO1xuXHRcdFx0Ly8gXHRcdFx0XHRcdH0pWzBdO1xuXHRcdFx0Ly8gaWYgKCFVdGlsLmlzRXhpc3R5KGV2ZW50T3B0aW9uKSkge1xuXHRcdFx0Ly8gXHRyZXR1cm47XG5cdFx0XHQvLyB9XG5cblx0XHRcdC8vIGV2ZW50TWFwW2V2ZW50TmFtZV0gPSAoZXYpID0+IHtcblx0XHRcdC8vIFx0ZW1taXRlci5lbWl0KGAke2N1cnJlbnRFdmVudH1gLCB7XG5cdFx0XHQvLyBcdFx0dmFsdWU6IGV2LnRhcmdldC52YWx1ZSxcblx0XHRcdC8vIFx0XHRldmVudE9wdGlvbixcblx0XHRcdC8vIFx0fSk7XG5cdFx0XHQvLyB9O1xuXG5cdFx0XHQvLyBlbW1pdGVyLm9uKGAke2N1cnJlbnRFdmVudH1gLCAoe1xuXHRcdFx0Ly8gXHR2YWx1ZSxcblx0XHRcdC8vIFx0ZXZlbnRPcHRpb24sXG5cdFx0XHQvLyB9KSA9PiB7XG5cdFx0XHQvLyBcdGxldCBjYWxsYmFjayA9ICgpID0+IHt9O1xuXG5cdFx0XHQvLyBcdGlmIChVdGlsLmlzRXhpc3R5KGV2ZW50T3B0aW9uKSAmJiBVdGlsLmlzRXhpc3R5KGV2ZW50T3B0aW9uLm9wdGlvbnMpKSB7XG5cdFx0XHQvLyBcdFx0Y2FsbGJhY2sgPSAoKSA9PiB7XG5cdFx0XHQvLyBcdFx0XHRBY3Rpb25NYW5hZ2VyLmV4ZWN1dGUoaWQsIGV2ZW50T3B0aW9uLm9wdGlvbnMpO1xuXHRcdFx0Ly8gXHRcdH07XG5cdFx0XHQvLyBcdH0gZWxzZSB7XG5cdFx0XHQvLyBcdFx0dGhyb3cgbmV3IEVycm9yKCdOdWxsIHBhcmFtZXRlcnMgZm91bmQgd2hpbGUgZXhlY3V0aW5nIGVtbWl0ZXInKTtcblx0XHRcdC8vIFx0fVxuXG5cdFx0XHQvLyBcdGNvbXBvbmVudC5zZXRWYWx1ZSh2YWx1ZSwgY2FsbGJhY2spO1xuXHRcdFx0Ly8gfSk7XG5cdFx0fSk7XG5cblx0XHRldmVudExpc3QgJiYgZXZlbnRMaXN0Lm1hcCgoZXZ0T2JqKSA9PiB7XG5cdFx0XHRsZXQge1xuXHRcdFx0XHRldmVudFR5cGUsXG5cdFx0XHRcdG9wdGlvbnMsXG5cdFx0XHR9ID0gZXZ0T2JqO1xuXG5cdFx0XHRsZXQgY3VycmVudEV2ZW50ID0gYCR7aWR9LSR7ZXZlbnRUeXBlfWA7XG5cblx0XHRcdGNvbnNvbGUubG9nKGBjdXJyZW50RXZlbnQgOiAke2N1cnJlbnRFdmVudH1gKTtcblxuXHRcdFx0ZXZlbnRNYXBbZXZlbnRUeXBlXSA9IChldikgPT4ge1xuXHRcdFx0XHRldi5wZXJzaXN0KCk7XG5cdFx0XHRcdGVtbWl0ZXIuZW1pdChgJHtjdXJyZW50RXZlbnR9YCwge1xuXHRcdFx0XHRcdGV2LFxuXHRcdFx0XHRcdG9wdGlvbnMsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fTtcblxuXHRcdFx0ZW1taXRlci5vbihgJHtjdXJyZW50RXZlbnR9YCwgKHtcblx0XHRcdFx0ZXYsXG5cdFx0XHRcdG9wdGlvbnMsXG5cdFx0XHR9KSA9PiB7XG5cdFx0XHRcdGxldCBjYWxsYmFjayA9ICgpID0+IHt9O1xuXG5cdFx0XHRcdGlmIChVdGlsLmlzRXhpc3R5KG9wdGlvbnMpKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2sgPSAoKSA9PiB7XG5cdFx0XHRcdFx0XHRBY3Rpb25NYW5hZ2VyLmV4ZWN1dGUoaWQsIG9wdGlvbnMsIGV2KTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcignTnVsbCBwYXJhbWV0ZXJzIGZvdW5kIHdoaWxlIGV4ZWN1dGluZyBlbW1pdGVyJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhgY2FsbGJhY2sgLCAke0pTT04uc3RyaW5naWZ5KGNhbGxiYWNrKX1gKTtcblxuXHRcdFx0XHRDb21wb25lbnRNYW5hZ2VyLmdldChpZCkuc2V0VmFsdWUoZXYudGFyZ2V0LnZhbHVlLCBjYWxsYmFjayk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRcblxuXHRcdGNhbGxiYWNrRnVuY3Rpb24gJiYgY2FsbGJhY2tGdW5jdGlvbihldmVudE1hcCk7XG5cdH1cblxuXHRzdGF0aWMgdW5zdWJzY3JpYmUoY29tcG9uZW50SWQsIGV2ZW50TWFwKSB7XG5cdFx0T2JqZWN0LmtleXMoZXZlbnRNYXApLm1hcCgoZXZlbnROYW1lKSA9PiB7XG5cdFx0XHRsZXQgbGlzdGVuZXIgPSBgJHtjb21wb25lbnRJZH0tJHtldmVudE5hbWV9YDtcblx0XHRcdGNvbnNvbGUubG9nKCdVbnN1YnNjcmliaW5nIGV2ZW50OicgKyBsaXN0ZW5lcik7XG5cblx0XHRcdGVtbWl0ZXIub2ZmKGxpc3RlbmVyKTtcblx0XHR9KTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2phdmFzY3JpcHQvZW5naW5lL0V2ZW50RW5naW5lLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==