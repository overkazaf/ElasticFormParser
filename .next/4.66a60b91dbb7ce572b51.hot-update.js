webpackHotUpdate(4,{

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

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

var _store = __webpack_require__(1313);

var _nextReduxWrapper = __webpack_require__(1159);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _isomorphicFetch = __webpack_require__(1140);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _reactNoSsr = __webpack_require__(1319);

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

var _immutable = __webpack_require__(588);

var _immutable2 = _interopRequireDefault(_immutable);

var _Rx = __webpack_require__(1352);

var _Rx2 = _interopRequireDefault(_Rx);

var _indexMin = __webpack_require__(1160);

var _indexMin2 = _interopRequireDefault(_indexMin);

var _RenderEngine = __webpack_require__(1633);

var _RenderEngine2 = _interopRequireDefault(_RenderEngine);

var _data = __webpack_require__(1630);

var _data2 = _interopRequireDefault(_data);

var _antd = __webpack_require__(974);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/pages/index.js?entry';


var MainPage = function (_Component) {
  (0, _inherits3.default)(MainPage, _Component);

  function MainPage() {
    (0, _classCallCheck3.default)(this, MainPage);

    return (0, _possibleConstructorReturn3.default)(this, (MainPage.__proto__ || (0, _getPrototypeOf2.default)(MainPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(MainPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {}
  }, {
    key: 'renderFormView',
    value: function renderFormView() {
      var data = this.props.data;
      var id = data.id,
          name = data.name,
          label = data.label,
          creater = data.creater,
          createTS = data.createTS,
          style = data.style,
          eventList = data.eventList,
          header = data.header,
          body = data.body,
          footer = data.footer;

      var formProps = { eventList: eventList, header: header, body: body, footer: footer };

      console.log(data);

      var userMap = {
        'u-001': 'Admin'
      };

      return _react2.default.createElement('div', { id: 'form-view',
        style: style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('div', { className: 'form-header', __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement('h1', { style: { textAlign: 'center' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, label), _react2.default.createElement('b', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, id, ', ', name, ', ', userMap[creater]), _react2.default.createElement(_antd.Row, { type: 'flex', __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, header.components.map(function (item, index) {
        var type = item.type,
            props = item.props;

        return _react2.default.createElement(_antd.Col, { span: 8, __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }, _react2.default.createElement('div', { key: 'comp-' + index, __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }, _RenderEngine2.default.renderComponent(type, props)));
      }))), _react2.default.createElement('div', { className: 'form-body', __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, 'FormViewBody,', body.components.map(function (item, index) {
        return _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        }, '$', index);
      })), _react2.default.createElement('div', { className: 'form-footer', __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, footer.components.map(function (item, index) {
        var type = item.type,
            props = item.props;

        return _react2.default.createElement('span', { key: 'comp-' + index, __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }, _RenderEngine2.default.renderComponent(type, props));
      })));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'p-main', __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _indexMin2.default }, __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }), this.renderFormView());
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          isServer = _ref.isServer;

      store.subscribe(function () {
        console.log(store.getState());
      });

      var that = this;

      return {
        isServer: isServer,
        counter: 0,
        data: _data2.default.data,
        formData: null
      };
    }
  }]);

  return MainPage;
}(_react.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore)(MainPage);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9iZDgxZjgxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdCOzs7O0FBQ1U7O0FBQ25COzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDZTs7OztBQUNHOzs7O0FBRVI7Ozs7QUFJaEI7Ozs7Ozs7SUFHSzs7Ozs7Ozs7Ozs7d0NBbUJIOzs7OENBRXlCLFdBQ3pCOzs7cUNBRWdCO1VBR2IsT0FDRSxLQUFLLE1BRFA7VUFJQSxLQVVFLEtBVkY7VUFDQSxPQVNFLEtBVEY7VUFDQSxRQVFFLEtBUkY7VUFDQSxVQU9FLEtBUEY7VUFDQSxXQU1FLEtBTkY7VUFDQSxRQUtFLEtBTEY7VUFDQSxZQUlFLEtBSkY7VUFDQSxTQUdFLEtBSEY7VUFDQSxPQUVFLEtBRkY7VUFDQSxTQUNFLEtBRUo7O1VBQUksWUFBWSxFQUFFLFdBQUYsV0FBYSxRQUFiLFFBQXFCLE1BQXJCLE1BQTJCLFFBRTNDOztjQUFRLElBRVI7O1VBQU07aUJBSU47QUFIRTs7NkJBSUEsdUJBQUssSUFDSDtlQUFPOztvQkFEVDtzQkFHRTtBQUhGO09BQUEsa0JBR0UsdUJBQUssV0FBVTtvQkFBZjtzQkFDRTtBQURGO3lCQUNFLHNCQUFJLE9BQU8sRUFBQyxXQUFXO29CQUF2QjtzQkFBbUM7QUFBbkM7U0FDQTs7b0JBQUE7c0JBQUk7QUFBSjtBQUFBLGFBQVUsTUFBVixNQUFrQixjQUNsQiwyQkFBQywyQkFBSSxNQUFLO29CQUFWO3NCQUVFO0FBRkY7Z0JBRVMsV0FBVyxJQUFJLFVBQUMsTUFBTSxPQUFVO1lBRW5DLE9BRUUsS0FGRjtZQUNBLFFBQ0UsS0FFSjs7K0JBQ0csMkJBQUksTUFBTTtzQkFBWDt3QkFDRTtBQURGO1NBQUEsa0JBQ0UsdUJBQUssZUFBYTtzQkFBbEI7d0JBQ0c7QUFESDtrQ0FDZ0IsZ0JBQWdCLE1BSXJDO0FBSUwsbURBQUssV0FBVTtvQkFBZjtzQkFBQTtBQUFBO1NBR0ksc0JBQUssV0FBVyxJQUFJLFVBQUMsTUFBTSxPQUN6QjsrQkFDRTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLFdBQVEsS0FFWDtBQUdMLGtEQUFLLFdBQVU7b0JBQWY7c0JBRUk7QUFGSjtnQkFFVyxXQUFXLElBQUksVUFBQyxNQUFNLE9BQVU7WUFFbkMsT0FFRSxLQUZGO1lBQ0EsUUFDRSxLQUVKOzsrQkFDRSx3QkFBTSxlQUFhO3NCQUFuQjt3QkFDRztBQURIO1NBQUEseUJBQ2dCLGdCQUFnQixNQUduQztBQUtWOzs7OzZCQUdDOzZCQUNFLHVCQUFLLFdBQVU7b0JBQWY7c0JBQ0U7QUFERjtPQUFBLDJDQUNTLHlCQUF5QixFQUFVO29CQUExQztzQkFDQztBQUREO2VBSUw7Ozs7MENBakg0QztVQUFBO1VBQUEsZ0JBRTNDOztZQUFNLFVBQVUsWUFDZDtnQkFBUSxJQUFJLE1BQ2I7QUFHRDs7VUFBSSxPQUVKOzs7a0JBRUU7aUJBQ0E7Y0FBTSxlQUNOO2tCQUVIO0FBTEc7Ozs7O0FBMEdOOztrQkFBeUIsa0RBQVcsVSIsImZpbGUiOiI0LjY2YTYwYjkxZGJiN2NlNTcyYjUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaW5pdFN0b3JlIH0gZnJvbSAnLi4vc3JjL2phdmFzY3JpcHQvc3RvcmUnO1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xuaW1wb3J0IE5vU1NSIGZyb20gJ3JlYWN0LW5vLXNzcic7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQgUnggZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgYW50ZFN0eWxlIGZyb20gJy4uL3NyYy9jc3MvaW5kZXgubWluLmNzcyc7XG5pbXBvcnQgUmVuZGVyRW5naW5lIGZyb20gJy4uL3NyYy9qYXZhc2NyaXB0L2VuZ2luZS9SZW5kZXJFbmdpbmUnO1xuXG5pbXBvcnQgbW9jayBmcm9tICcuLi9zcmMvamF2YXNjcmlwdC9tb2NrL2RhdGEnO1xuXG5pbXBvcnQgeyBcbiBSb3csXG4gQ29sLFxufSBmcm9tICdhbnRkJztcblxuY2xhc3MgTWFpblBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICh7IHN0b3JlLCBpc1NlcnZlciB9KSB7XG5cbiAgICBzdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKSk7XG4gICAgfSk7XG5cblxuICAgIGxldCB0aGF0ID0gdGhpcztcblxuICAgIHJldHVybiB7IFxuICAgICAgaXNTZXJ2ZXIsIFxuICAgICAgY291bnRlcjogMCxcbiAgICAgIGRhdGE6IG1vY2suZGF0YSxcbiAgICAgIGZvcm1EYXRhOiBudWxsLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gIH1cblxuICByZW5kZXJGb3JtVmlldygpIHtcblxuICAgIGxldCB7XG4gICAgICBkYXRhLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IHtcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIGxhYmVsLFxuICAgICAgY3JlYXRlcixcbiAgICAgIGNyZWF0ZVRTLFxuICAgICAgc3R5bGUsXG4gICAgICBldmVudExpc3QsXG4gICAgICBoZWFkZXIsXG4gICAgICBib2R5LFxuICAgICAgZm9vdGVyLFxuICAgIH0gPSBkYXRhO1xuXG4gICAgbGV0IGZvcm1Qcm9wcyA9IHsgZXZlbnRMaXN0LCBoZWFkZXIsIGJvZHksIGZvb3RlciB9O1xuXG4gICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICBjb25zdCB1c2VyTWFwID0ge1xuICAgICAgJ3UtMDAxJzogJ0FkbWluJyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJmb3JtLXZpZXdcIiBcbiAgICAgICAgc3R5bGU9e3N0eWxlfSBcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWhlYWRlclwiPlxuICAgICAgICAgIDxoMSBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcid9fT57bGFiZWx9PC9oMT5cbiAgICAgICAgICA8Yj57aWR9LCB7bmFtZX0sIHt1c2VyTWFwW2NyZWF0ZXJdfTwvYj5cbiAgICAgICAgICA8Um93IHR5cGU9XCJmbGV4XCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgaGVhZGVyLmNvbXBvbmVudHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBsZXQge1xuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgIH0gPSBpdGVtO1xuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPENvbCBzcGFuPXs4fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgY29tcC0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICAgICAgICB7UmVuZGVyRW5naW5lLnJlbmRlckNvbXBvbmVudCh0eXBlLCBwcm9wcyl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tYm9keVwiPlxuICAgICAgICAgIEZvcm1WaWV3Qm9keSwgXG4gICAgICAgICAge1xuICAgICAgICAgICAgYm9keS5jb21wb25lbnRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3Bhbj4ke2luZGV4fTwvc3Bhbj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZm9vdGVyXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgZm9vdGVyLmNvbXBvbmVudHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBsZXQge1xuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgIH0gPSBpdGVtO1xuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtgY29tcC0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICAgICAge1JlbmRlckVuZ2luZS5yZW5kZXJDb21wb25lbnQodHlwZSwgcHJvcHMpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtbWFpblwiPlxuICAgICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBhbnRkU3R5bGV9fSAvPlxuICAgICAgICB7dGhpcy5yZW5kZXJGb3JtVmlldygpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChpbml0U3RvcmUpKE1haW5QYWdlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==