webpackHotUpdate(5,{

/***/ 2015:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(93);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(606);

var _index2 = _interopRequireDefault(_index);

var _immutable = __webpack_require__(580);

var _immutable2 = _interopRequireDefault(_immutable);

var _antd = __webpack_require__(587);

var _Util = __webpack_require__(619);

var _Util2 = _interopRequireDefault(_Util);

var _lodash = __webpack_require__(1463);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/components/IFComponents/IFInput/IFInputPhone/index.js';


var FormItem = _antd.Form.Item;

var IFInputPhone = function (_IFComponentBase) {
	(0, _inherits3.default)(IFInputPhone, _IFComponentBase);

	function IFInputPhone(props) {
		(0, _classCallCheck3.default)(this, IFInputPhone);

		var _this = (0, _possibleConstructorReturn3.default)(this, (IFInputPhone.__proto__ || (0, _getPrototypeOf2.default)(IFInputPhone)).call(this, props));

		_this.state = {
			option: props.option,
			eventMap: {},
			validateStatus: ""
		};
		return _this;
	}

	(0, _createClass3.default)(IFInputPhone, [{
		key: 'changeValue',
		value: function changeValue(_ref) {
			var _this2 = this;

			var target = _ref.target;

			// calling prototype class

			this.setValue(target.value, function () {
				_this2.validateField();
			});
		}
	}, {
		key: 'validateField',
		value: function validateField() {
			var re = /1[3|5|7|8|][0-9]{9}/;
			var digitReg = /\d+/;
			var phoneNumber = this.getValue();
			var validateStatus = void 0;

			if (phoneNumber.length < 11) {
				if (!digitReg.test(phoneNumber)) {
					validateStatus = 'error';
				} else {
					validateStatus = 'warning';
				}
			} else {
				validateStatus = 'error';

				if (phoneNumber.length === 11 && re.test(phoneNumber)) {
					validateStatus = 'success';
				}
			}

			this.setState({
				validateStatus: validateStatus
			}, function () {
				validateStatus == 'error' && _antd.message.error('Phone number is invalid');
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _state = this.state,
			    option = _state.option,
			    validateStatus = _state.validateStatus;

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
			    mustInput = model.mustInput,
			    defaultValue = model.defaultValue,
			    value = model.value,
			    link = model.link,
			    linkTarget = model.linkTarget,
			    placeholder = model.placeholder,
			    carry = model.carry,
			    addonBefore = model.addonBefore,
			    addonAfter = model.addonAfter,
			    prefix = model.prefix,
			    suffix = model.suffix,
			    extraStyle = model.extraStyle;

			var fontStyleObj = (0, _extends3.default)({
				fontSize: fontSize,
				fontFamily: fontFamily,
				lineHeight: lineHeight
			}, extraStyle);

			if (!visibility) {
				return _react2.default.createElement('div', {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 85
					}
				});
			}

			console.log('option', option);

			return _react2.default.createElement(FormItem, {
				label: label,
				required: mustInput,
				validateStatus: validateStatus,
				hasFeedback: true,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 92
				}
			}, _react2.default.createElement(_antd.Input, {
				placeholder: placeholder,
				addonBefore: addonBefore,
				addonAfter: addonAfter,
				suffix: suffix,
				prefix: prefix,
				disabled: !!locked,
				value: value,
				defaultValue: defaultValue,
				onChange: _lodash2.default.throttle(this.changeValue.bind(this), 200),
				onBlur: _lodash2.default.throttle(this.validateField.bind(this), 200),
				size: size || 'large',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 98
				}
			}));
		}
	}]);

	return IFInputPhone;
}(_index2.default);

exports.default = IFInputPhone;

// const wrappedIFInputPhone = Form.create({})(IFInputPhone);

// export default wrappedIFInputPhone;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/components/IFComponents/IFInput/IFInputPhone/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/components/IFComponents/IFInput/IFInputPhone/index.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xMzA3YTAwMjU4YmU1ZTY1MGNkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2phdmFzY3JpcHQvY29tcG9uZW50cy9JRkNvbXBvbmVudHMvSUZJbnB1dC9JRklucHV0UGhvbmUvaW5kZXguanM/NmZhMDEwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSUZDb21wb25lbnRCYXNlIGZyb20gJy4uLy4uL0lGQ29tcG9uZW50QmFzZS9pbmRleC5qcyc7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gJ2ltbXV0YWJsZSc7XG5cbmltcG9ydCB7XG5cdElucHV0LFxuXHRGb3JtLFxuXHRJY29uLFxuXHRtZXNzYWdlLFxufSBmcm9tICdhbnRkJztcbmltcG9ydCBVdGlsIGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL1V0aWwuanMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgRm9ybUl0ZW0gPSBGb3JtLkl0ZW07XG5cbmNsYXNzIElGSW5wdXRQaG9uZSBleHRlbmRzIElGQ29tcG9uZW50QmFzZSB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdCAgc3VwZXIocHJvcHMpO1xuXG5cdCAgdGhpcy5zdGF0ZSA9IHtcblx0ICBcdG9wdGlvbjogcHJvcHMub3B0aW9uLFxuXHQgIFx0ZXZlbnRNYXA6IHt9LFxuXHQgIFx0dmFsaWRhdGVTdGF0dXM6IFwiXCIsXG5cdCAgfTtcblx0fVxuXG5cdGNoYW5nZVZhbHVlKHsgdGFyZ2V0IH0pIHtcblx0XHQvLyBjYWxsaW5nIHByb3RvdHlwZSBjbGFzc1xuXHRcdFxuXHRcdHRoaXMuc2V0VmFsdWUodGFyZ2V0LnZhbHVlLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnZhbGlkYXRlRmllbGQoKTtcblx0XHR9KTtcblx0fVxuXG5cdHZhbGlkYXRlRmllbGQoKSB7XG5cdFx0bGV0IHJlID0gLzFbM3w1fDd8OHxdWzAtOV17OX0vO1xuXHRcdGxldCBkaWdpdFJlZyA9IC9cXGQrLztcblx0XHRsZXQgcGhvbmVOdW1iZXIgPSB0aGlzLmdldFZhbHVlKCk7XG5cdFx0bGV0IHZhbGlkYXRlU3RhdHVzO1xuXG5cdFx0aWYgKHBob25lTnVtYmVyLmxlbmd0aCA8IDExKSB7XG5cdFx0XHRpZiAoIWRpZ2l0UmVnLnRlc3QocGhvbmVOdW1iZXIpKSB7XG5cdFx0XHRcdHZhbGlkYXRlU3RhdHVzID0gJ2Vycm9yJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbGlkYXRlU3RhdHVzID0gJ3dhcm5pbmcnO1xuXHRcdFx0fVx0XHRcdFx0XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbGlkYXRlU3RhdHVzID0gJ2Vycm9yJztcblxuXHRcdFx0aWYgKHBob25lTnVtYmVyLmxlbmd0aCA9PT0gMTEgJiYgcmUudGVzdChwaG9uZU51bWJlcikpIHtcblx0XHRcdFx0dmFsaWRhdGVTdGF0dXMgPSAnc3VjY2Vzcyc7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR2YWxpZGF0ZVN0YXR1cyxcblx0XHR9LCAoKSA9PiB7XG5cdFx0XHR2YWxpZGF0ZVN0YXR1cyA9PSAnZXJyb3InICYmIG1lc3NhZ2UuZXJyb3IoJ1Bob25lIG51bWJlciBpcyBpbnZhbGlkJyk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRsZXQge1xuXHRcdFx0b3B0aW9uLFxuXHRcdFx0dmFsaWRhdGVTdGF0dXMsXG5cdFx0fSA9IHRoaXMuc3RhdGU7XG5cdFxuXHRcdGxldCBtb2RlbCA9IFV0aWwucGFyc2VEYXRhTW9kZWwob3B0aW9uKTtcblx0XHRsZXQge1xuXHRcdFx0c2l6ZSwgdGhlbWUsIGxhYmVsLCBmb250RmFtaWx5LCBmb250U2l6ZSwgbGluZUhlaWdodCwgdGV4dEFsaWduLCB2aXNpYmlsaXR5LCBsb2NrZWQsIG11c3RJbnB1dCxcblx0XHRcdGRlZmF1bHRWYWx1ZSwgdmFsdWUsIGxpbmssIGxpbmtUYXJnZXQsIHBsYWNlaG9sZGVyLCBjYXJyeSxcblx0XHRcdGFkZG9uQmVmb3JlLCBhZGRvbkFmdGVyLCBwcmVmaXgsIHN1ZmZpeCxcblx0XHRcdGV4dHJhU3R5bGUsXG5cdFx0fSA9IG1vZGVsO1xuXG5cdFx0bGV0IGZvbnRTdHlsZU9iaiA9IHtcblx0XHRcdGZvbnRTaXplLFxuXHRcdFx0Zm9udEZhbWlseSxcblx0XHRcdGxpbmVIZWlnaHQsXG5cdFx0XHQuLi5leHRyYVN0eWxlLFxuXHRcdH07XG5cblx0XHRpZiAoIXZpc2liaWxpdHkpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXY+PC9kaXY+XG5cdFx0XHQpXG5cdFx0fVxuXG5cdFx0Y29uc29sZS5sb2coJ29wdGlvbicsIG9wdGlvbik7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZvcm1JdGVtXG5cdFx0XHRcdGxhYmVsPXtsYWJlbH1cblx0XHRcdFx0cmVxdWlyZWQ9e211c3RJbnB1dH1cblx0XHRcdFx0dmFsaWRhdGVTdGF0dXM9e3ZhbGlkYXRlU3RhdHVzfVxuXHRcdFx0XHRoYXNGZWVkYmFjaz17dHJ1ZX1cblx0XHRcdD5cblx0XHRcdDxJbnB1dCBcblx0XHRcdFx0cGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuXHRcdFx0XHRhZGRvbkJlZm9yZT17YWRkb25CZWZvcmV9XG5cdFx0XHRcdGFkZG9uQWZ0ZXI9e2FkZG9uQWZ0ZXJ9XG5cdFx0XHRcdHN1ZmZpeD17c3VmZml4fVxuXHRcdFx0XHRwcmVmaXg9e3ByZWZpeH1cblx0XHRcdFx0ZGlzYWJsZWQ9eyEhbG9ja2VkfVxuXHRcdFx0XHR2YWx1ZT17dmFsdWV9XG5cdFx0XHRcdGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfVxuXHRcdFx0XHRvbkNoYW5nZT17Xy50aHJvdHRsZSh0aGlzLmNoYW5nZVZhbHVlLmJpbmQodGhpcyksIDIwMCl9XG5cdFx0XHRcdG9uQmx1cj17Xy50aHJvdHRsZSh0aGlzLnZhbGlkYXRlRmllbGQuYmluZCh0aGlzKSwgMjAwKX1cblx0XHRcdFx0c2l6ZT17c2l6ZSB8fCAnbGFyZ2UnfVxuXHRcdFx0Lz5cblx0XHRcdDwvRm9ybUl0ZW0+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElGSW5wdXRQaG9uZTtcblxuLy8gY29uc3Qgd3JhcHBlZElGSW5wdXRQaG9uZSA9IEZvcm0uY3JlYXRlKHt9KShJRklucHV0UGhvbmUpO1xuXG4vLyBleHBvcnQgZGVmYXVsdCB3cmFwcGVkSUZJbnB1dFBob25lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvSUZDb21wb25lbnRzL0lGSW5wdXQvSUZJbnB1dFBob25lL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUZBO0FBSUE7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFFQTs7OztBQUVBO0FBS0E7QUFGQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSEE7QUFDQTtBQUNBO0FBS0E7OztBQUVBO0FBRUE7QUFGQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQUpBO0FBTUE7QUFOQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUFYQTtBQWVBO0FBZkE7QUFDQTs7Ozs7QUFpQkE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==