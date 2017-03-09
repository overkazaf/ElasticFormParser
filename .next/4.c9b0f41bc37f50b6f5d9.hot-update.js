webpackHotUpdate(4,{

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(81);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(79);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _store = __webpack_require__(1312);

var _nextReduxWrapper = __webpack_require__(1158);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _isomorphicFetch = __webpack_require__(1139);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _reactNoSsr = __webpack_require__(1318);

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

var _immutable = __webpack_require__(588);

var _immutable2 = _interopRequireDefault(_immutable);

var _Rx = __webpack_require__(1351);

var _Rx2 = _interopRequireDefault(_Rx);

var _indexMin = __webpack_require__(1159);

var _indexMin2 = _interopRequireDefault(_indexMin);

var _antd = __webpack_require__(974);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var esprima = __webpack_require__(1629);

var MainPage = function (_Component) {
  (0, _inherits3.default)(MainPage, _Component);

  function MainPage() {
    (0, _classCallCheck3.default)(this, MainPage);

    return (0, _possibleConstructorReturn3.default)(this, (MainPage.__proto__ || (0, _getPrototypeOf2.default)(MainPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(MainPage, [{
    key: 'renderForm',
    value: function renderForm(components) {
      console.log('components', components);

      var menuOptions;

      components && components.map(function (comp) {
        var actions = comp.props.actions;

        if (actions.length) {
          menuOptions = actions[0].params.map(function (ac, i) {
            return _react2.default.createElement(_antd.Menu.Item, { key: '${i}' }, '$', i + 1, 'st menu item');
          });
        }
      });

      console.log(menuOptions);

      var menu = _react2.default.createElement(_antd.Menu, { onClick: null }, menuOptions);

      return _react2.default.createElement(_antd.Dropdown, { overlay: menu }, _react2.default.createElement(_antd.Button, { style: { marginLeft: 8 } }, 'Button ', _react2.default.createElement(_antd.Icon, { type: 'down' })));
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement('div', { className: 'p-main' }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _indexMin2.default } }), this.renderForm(this.props.components));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
        var store = _ref2.store,
            isServer = _ref2.isServer;
        var res, json;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _isomorphicFetch2.default)('https://api.github.com/repos/developit/preact');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                json = _context.sent;

                store.subscribe(function () {
                  console.log(store.getState());
                });

                return _context.abrupt('return', _immutable2.default.fromJS({
                  isServer: isServer,
                  counter: 0,
                  components: [{
                    key: 'comp1',
                    type: 'input',
                    props: {
                      id: 'comp1',
                      name: 'comp1',
                      label: "数量",
                      defaultValue: "0",
                      value: 1,
                      ctrlType: 'int',
                      style: 'border: 2px solid #ddd;color: #666;padding: 5px;',
                      actions: [{
                        name: 'onUpdate',
                        action: 'setToTarget',
                        params: ['comp1', 'comp2'],
                        expr: '$comp1*0.55 + $comp2*0.44',
                        target: 'comp3'
                      }]
                    },
                    children: []
                  }, {
                    key: 'comp2',
                    type: 'input',
                    props: {
                      id: 'comp2',
                      name: 'comp2',
                      label: "单价",
                      defaultValue: "0.00",
                      value: 3.44,
                      style: 'border: 2px solid #ddd;color: #666;padding: 5px;',
                      ctrlType: 'double',
                      actions: [{
                        name: 'onUpdate',
                        action: 'setToTarget',
                        params: ['comp1', 'comp2'],
                        expr: 'MUL',
                        target: 'comp3'
                      }]
                    },
                    children: []
                  }, {
                    key: 'comp3',
                    type: 'input',
                    props: {
                      id: 'comp3',
                      name: 'comp3',
                      label: "总价",
                      defaultValue: "0.00",
                      value: 3.44,
                      ctrlType: 'double',
                      style: 'border: 2px solid #f00;color: #666; background: #ccc;padding: 5px;',
                      locked: true,
                      readOnly: true,
                      actions: []
                    },
                    children: []
                  }, {
                    key: 'comp4',
                    type: 'select',
                    props: {
                      id: 'comp4',
                      name: 'comp4',
                      label: "房租",
                      defaultValue: "0",
                      value: 0,
                      style: 'border: 2px solid #ddd;color: #666;padding: 5px;',
                      ctrlType: 'dropdown',
                      actions: []
                    },
                    children: []
                  }]
                }));

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MainPage;
}(_react.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore)(MainPage);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/overkazaf/Desktop/codes/git/playGround/IntelliViewer/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/overkazaf/Desktop/codes/git/playGround/IntelliViewer/pages/index.js"); } } })();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz83ODdhNDVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0I7Ozs7QUFDVTs7QUFDbkI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNlOzs7O0FBRWlCOzs7O0FBR3ZDLElBQU0sVUFBVTs7SUFFVjs7Ozs7Ozs7Ozs7K0JBa0dPLFlBQ1Q7Y0FBUSxJQUFJLGNBRVo7O1VBRUE7OytCQUF5QixJQUFJLFVBQVMsTUFBTTtZQUNwQyxVQUFZLEtBQUssTUFDdkI7O1lBQUksUUFBUSxRQUNWO2dDQUFzQixHQUFHLE9BQU8sSUFBSSxVQUFTLElBQUksR0FDL0M7bUJBQ0UsZ0JBQUMsY0FBRCxXQUFNLFFBQUssS0FBSSxVQUFTLFNBQUUsR0FFN0I7QUFDRixXQUxlO0FBTWpCO0FBRUQsT0FYYzs7Y0FXTixJQUVSOztVQUFJLE9BQ0YsZ0JBQUMsNEJBQUssU0FDSCxRQUlMOzthQUNFLGdCQUFDLGdDQUFTLFNBQ1Isd0JBQUMsOEJBQU8sT0FBTyxFQUFFLFlBQVksT0FDcEIsMkJBQUMsNEJBQUssTUFJcEI7Ozs7NkJBTUM7O2FBQ0UsdUNBQUssV0FDSCxxREFBTyx5QkFBeUIsRUFDL0Isc0NBQUssV0FBVyxLQUFLLE1BRzNCOzs7Ozs7WUE1SStCO1lBQU87Ozs7Ozs7dUJBRW5CLCtCQUFNOzttQkFBbEI7Ozt1QkFDYSxJQUFJOzttQkFBakI7Z0NBRU47O3NCQUFNLFVBQVUsWUFDZDswQkFBUSxJQUFJLE1BQ2I7QUFGRDs7cUVBSWlCOzRCQUVmOzJCQUNBOzt5QkFHRTswQkFDQTs7MEJBRUk7NEJBQ0E7NkJBQ0E7b0NBQ0E7NkJBQ0E7Z0NBQ0E7NkJBQ0Y7OzhCQUdJO2dDQUNBO2dDQUFRLENBQUMsU0FDVDs4QkFDQTtnQ0FJTjtBQVJNLHVCQUZLO0FBUFQ7OEJBaUJRO0FBcEJWLG1CQUZVO3lCQTBCVjswQkFDQTs7MEJBRUk7NEJBQ0E7NkJBQ0E7b0NBQ0E7NkJBQ0E7NkJBQ0E7Z0NBQ0Y7OzhCQUdJO2dDQUNBO2dDQUFRLENBQUMsU0FDVDs4QkFDQTtnQ0FJTjtBQVJNLHVCQUZLO0FBUFQ7OEJBaUJRO0FBcEJWO3lCQXdCQTswQkFDQTs7MEJBRUk7NEJBQ0E7NkJBQ0E7b0NBQ0E7NkJBQ0E7Z0NBQ0E7NkJBQ0E7OEJBQ0E7Z0NBQ0Y7K0JBR0Y7QUFaRTs4QkFZUTtBQWZWO3lCQW1CQTswQkFDQTs7MEJBRUk7NEJBQ0E7NkJBQ0E7b0NBQ0E7NkJBQ0E7NkJBQ0E7Z0NBQ0Y7K0JBRUY7QUFURTs4QkFTUTtBQVpWO0FBcEVGLGlCQURLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0lYOztrQkFBeUIsa0RBQVcsVSIsImZpbGUiOiI0LmM5YjBmNDFiYzM3ZjUwYjZmNWQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaW5pdFN0b3JlIH0gZnJvbSAnLi4vc3JjL2phdmFzY3JpcHQvc3RvcmUnO1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xuaW1wb3J0IE5vU1NSIGZyb20gJ3JlYWN0LW5vLXNzcic7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQgUnggZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgYW50ZFN0eWxlIGZyb20gJy4uL3NyYy9jc3MvaW5kZXgubWluLmNzcyc7XG5cbmltcG9ydCB7IE1lbnUsIERyb3Bkb3duLCBCdXR0b24sIEljb24sIG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcblxuXG5jb25zdCBlc3ByaW1hID0gcmVxdWlyZSgnZXNwcmltYScpO1xuXG5jbGFzcyBNYWluUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgc3RvcmUsIGlzU2VydmVyIH0pIHtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL2RldmVsb3BpdC9wcmVhY3QnKTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBJbW11dGFibGUuZnJvbUpTKHsgXG4gICAgICBpc1NlcnZlciwgXG4gICAgICBjb3VudGVyOiAwLFxuICAgICAgY29tcG9uZW50czogW1xuICAgICAge1xuICAgICAgICBrZXk6ICdjb21wMScsXG4gICAgICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgaWQ6ICdjb21wMScsXG4gICAgICAgICAgICBuYW1lOiAnY29tcDEnLFxuICAgICAgICAgICAgbGFiZWw6IFwi5pWw6YePXCIsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFwiMFwiLFxuICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICBjdHJsVHlwZTogJ2ludCcsXG4gICAgICAgICAgICBzdHlsZTogJ2JvcmRlcjogMnB4IHNvbGlkICNkZGQ7Y29sb3I6ICM2NjY7cGFkZGluZzogNXB4OycsXG4gICAgICAgICAgYWN0aW9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnb25VcGRhdGUnLFxuICAgICAgICAgICAgICBhY3Rpb246ICdzZXRUb1RhcmdldCcsXG4gICAgICAgICAgICAgIHBhcmFtczogWydjb21wMScsICdjb21wMiddLFxuICAgICAgICAgICAgICBleHByOiAnJGNvbXAxKjAuNTUgKyAkY29tcDIqMC40NCcsXG4gICAgICAgICAgICAgIHRhcmdldDogJ2NvbXAzJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdjb21wMicsXG4gICAgICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgaWQ6ICdjb21wMicsXG4gICAgICAgICAgICBuYW1lOiAnY29tcDInLFxuICAgICAgICAgICAgbGFiZWw6IFwi5Y2V5Lu3XCIsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFwiMC4wMFwiLFxuICAgICAgICAgICAgdmFsdWU6IDMuNDQsXG4gICAgICAgICAgICBzdHlsZTogJ2JvcmRlcjogMnB4IHNvbGlkICNkZGQ7Y29sb3I6ICM2NjY7cGFkZGluZzogNXB4OycsXG4gICAgICAgICAgICBjdHJsVHlwZTogJ2RvdWJsZScsXG4gICAgICAgICAgYWN0aW9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnb25VcGRhdGUnLFxuICAgICAgICAgICAgICBhY3Rpb246ICdzZXRUb1RhcmdldCcsXG4gICAgICAgICAgICAgIHBhcmFtczogWydjb21wMScsICdjb21wMiddLFxuICAgICAgICAgICAgICBleHByOiAnTVVMJyxcbiAgICAgICAgICAgICAgdGFyZ2V0OiAnY29tcDMnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdjb21wMycsXG4gICAgICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgaWQ6ICdjb21wMycsXG4gICAgICAgICAgICBuYW1lOiAnY29tcDMnLFxuICAgICAgICAgICAgbGFiZWw6IFwi5oC75Lu3XCIsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFwiMC4wMFwiLFxuICAgICAgICAgICAgdmFsdWU6IDMuNDQsXG4gICAgICAgICAgICBjdHJsVHlwZTogJ2RvdWJsZScsXG4gICAgICAgICAgICBzdHlsZTogJ2JvcmRlcjogMnB4IHNvbGlkICNmMDA7Y29sb3I6ICM2NjY7IGJhY2tncm91bmQ6ICNjY2M7cGFkZGluZzogNXB4OycsXG4gICAgICAgICAgICBsb2NrZWQ6IHRydWUsXG4gICAgICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgICBhY3Rpb25zOiBbXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ2NvbXA0JyxcbiAgICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgaWQ6ICdjb21wNCcsXG4gICAgICAgICAgICBuYW1lOiAnY29tcDQnLFxuICAgICAgICAgICAgbGFiZWw6IFwi5oi/56efXCIsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFwiMFwiLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBzdHlsZTogJ2JvcmRlcjogMnB4IHNvbGlkICNkZGQ7Y29sb3I6ICM2NjY7cGFkZGluZzogNXB4OycsXG4gICAgICAgICAgICBjdHJsVHlwZTogJ2Ryb3Bkb3duJyxcbiAgICAgICAgICBhY3Rpb25zOiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICB9XG4gICAgXVxuICAgIH0pO1xuICB9XG5cblxuICByZW5kZXJGb3JtKGNvbXBvbmVudHMpIHtcbiAgICBjb25zb2xlLmxvZygnY29tcG9uZW50cycsIGNvbXBvbmVudHMpO1xuXG4gICAgdmFyIG1lbnVPcHRpb25zO1xuXG4gICAgY29tcG9uZW50cyAmJiBjb21wb25lbnRzLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgICBsZXQgeyBhY3Rpb25zIH0gPSBjb21wLnByb3BzO1xuICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIG1lbnVPcHRpb25zID0gYWN0aW9uc1swXS5wYXJhbXMubWFwKGZ1bmN0aW9uKGFjLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiJHtpfVwiPiR7aSsxfXN0IG1lbnUgaXRlbTwvTWVudS5JdGVtPlxuICAgICAgICAgIClcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIFxuICAgIGNvbnNvbGUubG9nKG1lbnVPcHRpb25zKTtcblxuICAgIGxldCBtZW51ID0gKFxuICAgICAgPE1lbnUgb25DbGljaz17bnVsbH0+XG4gICAgICAgIHttZW51T3B0aW9uc31cbiAgICAgIDwvTWVudT5cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnV9PlxuICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDggfX0+XG4gICAgICAgICAgQnV0dG9uIDxJY29uIHR5cGU9XCJkb3duXCIgLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0Ryb3Bkb3duPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLW1haW5cIj5cbiAgICAgICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYW50ZFN0eWxlfX0gLz5cbiAgICAgICAge3RoaXMucmVuZGVyRm9ybSh0aGlzLnByb3BzLmNvbXBvbmVudHMpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChpbml0U3RvcmUpKE1haW5QYWdlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==