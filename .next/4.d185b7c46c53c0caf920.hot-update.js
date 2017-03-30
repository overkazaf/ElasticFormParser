webpackHotUpdate(4,{

/***/ 1757:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(49);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(32);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(609);

var _IFComponentManager = __webpack_require__(1759);

var _IFComponentManager2 = _interopRequireDefault(_IFComponentManager);

var _Util = __webpack_require__(1758);

var _Util2 = _interopRequireDefault(_Util);

var _immutable = __webpack_require__(589);

var _immutable2 = _interopRequireDefault(_immutable);

var _mitt = __webpack_require__(1275);

var _mitt2 = _interopRequireDefault(_mitt);

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

							if (action === 'setToTarget') {
								var values = params.map(function (compId) {
									return _IFComponentManager2.default.getComponent(compId).getValue();
								});

								console.log('values', values);

								var sum = values.reduce(function (prev, current) {
									return prev * current;
								}, 1);

								_IFComponentManager2.default.getComponent(target).setValue(sum);
							}
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
		key: 'getValue',
		value: function getValue() {
			return this.state.option.value;
		}
	}, {
		key: 'setValue',
		value: function setValue(value, callback) {
			var newOption = _Util2.default.deepClone(this.state.option);
			newOption.value = value;
			this.setState({
				option: newOption
			}, function () {
				callback && callback();
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
			var prefix = option.prefix,
			    subfix = option.subfix,
			    addonBefore = option.addonBefore,
			    addonAfter = option.addonAfter,
			    defaultValue = option.defaultValue,
			    value = option.value;
			var onClick = ifEventMap.onClick,
			    onChange = ifEventMap.onChange,
			    onKeyUp = ifEventMap.onKeyUp,
			    onKeyDown = ifEventMap.onKeyDown;

			return _react2.default.createElement(_antd.Input, {
				placeholder: 'input search text',
				addonBefore: addonBefore,
				addonAfter: addonAfter,
				size: 'large',
				value: value,
				defaultValue: defaultValue,

				onClick: onClick || null,
				onChange: onChange || null,
				onKeyUp: onKeyUp || null,
				onKeyDown: onKeyDown || null,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 143
				}
			});
		}
	}]);

	return IFInputNumber;
}(_react.Component);

exports.default = IFInputNumber;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/components/IFComponents/IFInputNumber/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/components/IFComponents/IFInputNumber/index.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL0lGQ29tcG9uZW50cy9JRklucHV0TnVtYmVyL2luZGV4LmpzP2ZmNGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBUzs7OztBQUdSOztBQUc0Qjs7OztBQUVaOzs7O0FBRVY7Ozs7QUFFQTs7Ozs7Ozs7O0FBRVAsSUFBSSxVQUFVOztJQUVSO3dDQUNMOzt3QkFBWSxPQUFPO3NDQUFBOztrSkFHakI7O1FBQUs7V0FDSSxNQUNSO2VBQVk7QUFEWjtTQUdGOzs7Ozs0Q0FFeUIsV0FDekI7T0FBSSxVQUFVLFVBQVUsTUFDdkI7U0FBSzthQUNJLFVBRVQ7QUFGQztBQUdGOzs7O3NDQUVtQjtnQkFDbkI7O0FBQ0E7V0FBUSxJQUFJLHlCQUF5QixLQUFLLE1BQU07O09BRTFDLFlBQWMsS0FBSyxNQUFNLE9BQy9COztPQUFJLGFBRUo7O1dBQVEsR0FBTSxLQUFLLE1BQU0sT0FBTyxrQkFBZSxnQkFHekM7UUFBQTtRQUFBLGlCQUNMOztRQUFJLFdBQVcsb0JBQVEsQ0FFdkI7O1FBQUksZUFBSyxTQUFTLFlBQ2pCO2dCQUFXLG9CQUFNO1VBQ1YsVUFBWSxVQUVsQjs7VUFBSSxTQUFTO1dBRVgsU0FJRyxRQUpIO1dBQ0EsU0FHRyxRQUhIO1dBQ0EsYUFFRyxRQUZIO1dBQ0EsU0FDRyxRQUVKOztXQUFJLFdBQVcsZUFDZDtZQUFJLGdCQUFnQixJQUFJLFVBQUMsUUFDeEI7Z0JBQU8sNkJBQWlCLGFBQWEsUUFDckM7QUFFRCxTQUphOztnQkFJTCxJQUFJLFVBRVo7O1lBQUksYUFBYSxPQUFPLFVBQUMsTUFBTSxTQUM5QjtnQkFBTyxPQUNQO0FBRlMsV0FJVjs7cUNBQWlCLGFBQWEsUUFBUSxTQUN0QztBQUNEO0FBQ0Q7QUFDRDtBQUVEOztXQUFLLFNBQVMsT0FFZDtBQUVEOztPQUFJLHlCQUF5QixNQUFNLE9BQU8sVUFBVSxPQUFPLFVBQUMsTUFDM0Q7V0FBTyxLQUFLLGNBQ1o7QUFGdUIsTUFJeEI7O09BQUksU0FBUyxLQUFLLE1BQU0sT0FFeEI7O2NBQVcsY0FBYyxVQUFDLElBQ3pCO1lBQVEsS0FBUTtZQUNSLEdBQUcsT0FDVjtnQkFFRDtBQUhDO0FBS0Y7O1FBQUs7Z0JBSUw7QUFIQzs7Ozs2QkFNRDtVQUFPLEtBQUssTUFBTSxPQUNsQjs7OzsyQkFFUSxPQUFPLFVBQ2Y7T0FBSSxZQUFZLGVBQUssVUFBVSxLQUFLLE1BQ3BDO2FBQVUsUUFDVjtRQUFLO1lBQ0k7QUFBUixNQUNFLFlBQ0Y7Z0JBQ0E7QUFDRDs7OztpQ0FJQTs7OzJCQUVRO2dCQUtKLEtBQUs7T0FGUjtPQUNBO09BSUEsU0FNRyxPQU5IO09BQ0EsU0FLRyxPQUxIO09BQ0EsY0FJRyxPQUpIO09BQ0EsYUFHRyxPQUhIO09BQ0EsZUFFRyxPQUZIO09BQ0EsUUFDRyxPQURIO09BSUEsVUFJRyxXQUpIO09BQ0EsV0FHRyxXQUhIO09BQ0EsVUFFRyxXQUZIO09BQ0EsWUFDRyxXQUdKOzswQkFDRTtpQkFFQztpQkFDQTtnQkFDQTtVQUNBO1dBQ0E7a0JBRUE7O2FBQVMsV0FDVDtjQUFVLFlBQ1Y7YUFBUyxXQUNUO2VBQVcsYUFBYTs7ZUFYMUI7aUJBY0Q7QUFkQztBQUNFLElBREY7Ozs7O0FBOUh5Qjs7a0JBQXRCLGMiLCJmaWxlIjoiNC5kMTg1YjdjNDZjNTNjMGNhZjkyMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuXHRJbnB1dCxcbn0gZnJvbSAnYW50ZCc7XG5cbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL21hbmFnZXIvSUZDb21wb25lbnRNYW5hZ2VyLmpzJztcblxuaW1wb3J0IFV0aWwgZnJvbSAnLi4vLi4vLi4vLi4vamF2YXNjcmlwdC91dGlsL1V0aWwuanMnO1xuXG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gJ2ltbXV0YWJsZSc7XG5cbmltcG9ydCBtaXR0IGZyb20gJ21pdHQnO1xuXG5sZXQgZW1taXRlciA9IG1pdHQoKTtcbmV4cG9ydCBkZWZhdWx0XG5jbGFzcyBJRklucHV0TnVtYmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0ICBzdXBlcihwcm9wcyk7XG5cdFxuXHQgIHRoaXMuc3RhdGUgPSB7XG5cdCAgXHRvcHRpb246IHByb3BzLm9wdGlvbixcblx0ICBcdGlmRXZlbnRNYXA6IHt9LFxuXHQgIH07XG5cdH1cblxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuXHRcdGlmIChuZXh0UHJvcHMub3B0aW9uICE9IG51bGwpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRvcHRpb246IG5leHRQcm9wcy5vcHRpb24sXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHQvLyBiaW5kaW5nIGV2ZW50IGhlcmVcblx0XHRjb25zb2xlLmxvZygnSUZJbnB1dE51bWJlciBtb3VudGVkJywgdGhpcy5zdGF0ZS5vcHRpb24pO1xuXG5cdFx0bGV0IHsgZXZlbnRMaXN0IH0gPSB0aGlzLnN0YXRlLm9wdGlvbjtcblx0XHRsZXQgaWZFdmVudE1hcCA9IHt9O1xuXG5cdFx0ZW1taXRlci5vbihgJHt0aGlzLnN0YXRlLm9wdGlvbi5pZH0tb25DaGFuZ2VgLCAoe1xuXHRcdFx0dmFsdWUsXG5cdFx0XHRldmVudExpc3QsXG5cdFx0fSkgPT4ge1xuXHRcdFx0bGV0IGNhbGxiYWNrID0gKCkgPT4ge307XG5cblx0XHRcdGlmIChVdGlsLmlzRXhpc3R5KGV2ZW50TGlzdCkpIHtcblx0XHRcdFx0Y2FsbGJhY2sgPSAoKSA9PiB7XG5cdFx0XHRcdFx0bGV0IHsgb3B0aW9ucyB9ID0gZXZlbnRMaXN0O1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHRcdFx0XHRsZXQge1xuXHRcdFx0XHRcdFx0XHRhY3Rpb24sXG5cdFx0XHRcdFx0XHRcdHBhcmFtcyxcblx0XHRcdFx0XHRcdFx0ZXhwcmVzc2lvbixcblx0XHRcdFx0XHRcdFx0dGFyZ2V0LFxuXHRcdFx0XHRcdFx0fSA9IG9wdGlvbnM7XG5cblx0XHRcdFx0XHRcdGlmIChhY3Rpb24gPT09ICdzZXRUb1RhcmdldCcpIHtcblx0XHRcdFx0XHRcdFx0bGV0IHZhbHVlcyA9IHBhcmFtcy5tYXAoKGNvbXBJZCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBDb21wb25lbnRNYW5hZ2VyLmdldENvbXBvbmVudChjb21wSWQpLmdldFZhbHVlKCk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCd2YWx1ZXMnLCB2YWx1ZXMpO1xuXG5cdFx0XHRcdFx0XHRcdGxldCBzdW0gPSB2YWx1ZXMucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHByZXYgKiBjdXJyZW50O1xuXHRcdFx0XHRcdFx0XHR9LCAxKTtcblxuXHRcdFx0XHRcdFx0XHRDb21wb25lbnRNYW5hZ2VyLmdldENvbXBvbmVudCh0YXJnZXQpLnNldFZhbHVlKHN1bSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc2V0VmFsdWUodmFsdWUsIGNhbGxiYWNrKTtcblxuXHRcdH0pO1xuXG5cdFx0bGV0IG9uQ2hhbmdlRXZlbnRMaXN0ID0gdGhpcy5zdGF0ZS5vcHRpb24uZXZlbnRMaXN0LmZpbHRlcigoaXRlbSkgPT4ge1xuXHRcdFx0cmV0dXJuIGl0ZW0uZXZlbnRUeXBlID09PSAnb25DaGFuZ2UnO1xuXHRcdH0pWzBdO1xuXG5cdFx0bGV0IGNvbXBJZCA9IHRoaXMuc3RhdGUub3B0aW9uLmlkO1xuXG5cdFx0aWZFdmVudE1hcFsnb25DaGFuZ2UnXSA9IChldikgPT4ge1xuXHRcdFx0ZW1taXRlci5lbWl0KGAke2NvbXBJZH0tb25DaGFuZ2VgLCB7XG5cdFx0XHRcdHZhbHVlOiBldi50YXJnZXQudmFsdWUsXG5cdFx0XHRcdGV2ZW50TGlzdDogb25DaGFuZ2VFdmVudExpc3QsXG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRpZkV2ZW50TWFwLFxuXHRcdH0pO1xuXG5cdH1cblxuXHRnZXRWYWx1ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5vcHRpb24udmFsdWU7XG5cdH1cblxuXHRzZXRWYWx1ZSh2YWx1ZSwgY2FsbGJhY2spIHtcblx0XHRsZXQgbmV3T3B0aW9uID0gVXRpbC5kZWVwQ2xvbmUodGhpcy5zdGF0ZS5vcHRpb24pO1xuXHRcdG5ld09wdGlvbi52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0b3B0aW9uOiBuZXdPcHRpb24sXG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcblx0XHR9KTtcblx0fVxuXG5cdGdldERhdGFNb2RlbCgpIHtcblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0bGV0IHtcblx0XHRcdG9wdGlvbixcblx0XHRcdGlmRXZlbnRNYXAsXG5cdFx0fSA9IHRoaXMuc3RhdGU7XG5cblx0XHRsZXQge1xuXHRcdFx0cHJlZml4LFxuXHRcdFx0c3ViZml4LFxuXHRcdFx0YWRkb25CZWZvcmUsXG5cdFx0XHRhZGRvbkFmdGVyLFxuXHRcdFx0ZGVmYXVsdFZhbHVlLFxuXHRcdFx0dmFsdWUsXG5cdFx0fSA9IG9wdGlvbjtcblxuXHRcdGxldCB7XG5cdFx0XHRvbkNsaWNrLFxuXHRcdFx0b25DaGFuZ2UsXG5cdFx0XHRvbktleVVwLFxuXHRcdFx0b25LZXlEb3duLFxuXHRcdH0gPSBpZkV2ZW50TWFwO1xuXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PElucHV0IFxuXHRcdFx0XHQgcGxhY2Vob2xkZXI9XCJpbnB1dCBzZWFyY2ggdGV4dFwiXG5cdFx0XHRcdCBhZGRvbkJlZm9yZT17YWRkb25CZWZvcmV9XG5cdFx0XHRcdCBhZGRvbkFmdGVyPXthZGRvbkFmdGVyfVxuXHRcdFx0XHQgc2l6ZT17J2xhcmdlJ31cblx0XHRcdFx0IHZhbHVlPXt2YWx1ZX1cblx0XHRcdFx0IGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfVxuXG5cdFx0XHRcdCBvbkNsaWNrPXtvbkNsaWNrIHx8IG51bGx9XG5cdFx0XHRcdCBvbkNoYW5nZT17b25DaGFuZ2UgfHwgbnVsbH1cblx0XHRcdFx0IG9uS2V5VXA9e29uS2V5VXAgfHwgbnVsbH1cblx0XHRcdFx0IG9uS2V5RG93bj17b25LZXlEb3duIHx8IG51bGx9XG5cdFx0XHQvPlxuXHRcdClcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvSUZDb21wb25lbnRzL0lGSW5wdXROdW1iZXIvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9