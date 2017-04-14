webpackHotUpdate(5,{

/***/ 2285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(112);

var _extends3 = _interopRequireDefault(_extends2);

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

var _antd = __webpack_require__(601);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/components/List/QueryTable/index.js';


var data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park'
}, {
  key: '2',
  name: 'Joe Black',
  age: 42,
  address: 'London No. 1 Lake Park'
}, {
  key: '3',
  name: 'Jim Green',
  age: 32,
  address: 'Sidney No. 1 Lake Park'
}, {
  key: '4',
  name: 'Jim Red',
  age: 32,
  address: 'London No. 2 Lake Park'
}];

var QueryTable = function (_Component) {
  (0, _inherits3.default)(QueryTable, _Component);

  function QueryTable() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, QueryTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = QueryTable.__proto__ || (0, _getPrototypeOf2.default)(QueryTable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      filterDropdownVisible: false,
      data: data,
      searchText: '',
      filtered: false,
      selectedItem: null
    }, _this.onInputChange = function (e) {
      _this.setState({ searchText: e.target.value });
    }, _this.onSearch = function () {
      var searchText = _this.state.searchText;

      var reg = new RegExp(searchText, 'gi');
      _this.setState({
        filterDropdownVisible: false,
        filtered: !!searchText,
        data: data.map(function (record) {
          var match = record.name.match(reg);
          if (!match) {
            return null;
          }
          return (0, _extends3.default)({}, record, {
            name: _react2.default.createElement('span', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              }
            }, record.name.split(reg).map(function (text, i) {
              return i > 0 ? [_react2.default.createElement('span', { className: 'highlight', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 54
                }
              }, match[0]), text] : text;
            }))
          });
        }).filter(function (record) {
          return !!record;
        })
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(QueryTable, [{
    key: 'handleRowClick',
    value: function handleRowClick() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      console.log('args', args);
    }
  }, {
    key: '_rowSelectCallback',
    value: function _rowSelectCallback(item, index) {
      this.props.dispatch({
        action: 'ROW_ITEM_SELECTED',
        payload: {
          item: item,
          index: index
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filterDropdown: _react2.default.createElement('div', { className: 'custom-filter-dropdown', __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }, _react2.default.createElement(_antd.Input, {
          ref: function ref(ele) {
            return _this2.searchInput = ele;
          },
          placeholder: 'Search name',
          value: this.state.searchText,
          onChange: this.onInputChange,
          onPressEnter: this.onSearch,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }), _react2.default.createElement(_antd.Button, { type: 'primary', onClick: this.onSearch, __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, 'Search')),
        filterIcon: _react2.default.createElement(_antd.Icon, { type: 'smile-o', style: { color: this.state.filtered ? '#108ee9' : '#aaa' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }),
        filterDropdownVisible: this.state.filterDropdownVisible,
        onFilterDropdownVisibleChange: function onFilterDropdownVisibleChange(visible) {
          return _this2.setState({ filterDropdownVisible: visible }, function () {
            return _this2.searchInput.focus();
          });
        }
      }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age'
      }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        filters: [{
          text: 'London',
          value: 'London'
        }, {
          text: 'New York',
          value: 'New York'
        }],
        onFilter: function onFilter(value, record) {
          return record.address.indexOf(value) === 0;
        }
      }];

      var rowSelection = {
        type: 'radio',
        onSelect: this._rowSelectCallback
      };

      return _react2.default.createElement(_antd.Table, {
        rowSelection: rowSelection,
        onRowClick: this.handleRowClick.bind(this),
        columns: columns,
        dataSource: this.state.data, __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      });
    }
  }]);

  return QueryTable;
}(_react.Component);

exports.default = QueryTable;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/components/List/QueryTable/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/components/List/QueryTable/index.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL0xpc3QvUXVlcnlUYWJsZS9pbmRleC5qcz9hYjhlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTOzs7O0FBQ3NCOzs7Ozs7O0FBRS9CLElBQU07T0FFSjtRQUNBO09BQ0E7V0FBUztBQUhULENBRFc7T0FPWDtRQUNBO09BQ0E7V0FBUztBQUhUO09BTUE7UUFDQTtPQUNBO1dBQVM7QUFIVDtPQU1BO1FBQ0E7T0FDQTtXQUFTO0FBSFQ7O0lBT0k7Ozs7Ozs7Ozs7Ozs7O29OQUNKOzZCQUVFO1lBQ0E7a0JBQ0E7Z0JBQ0E7b0JBQWM7QUFKZCxhQU1GLGdCQUFnQixVQUFDLEdBQ2Y7WUFBSyxTQUFTLEVBQUUsWUFBWSxFQUFFLE9BQy9CO2FBQ0QsV0FBVyxZQUFNO1VBQ1AsYUFBZSxNQUFLLE1BQzVCOztVQUFNLE1BQU0sSUFBSSxPQUFPLFlBQ3ZCO1lBQUs7K0JBRUg7a0JBQVUsQ0FBQyxDQUNYO21CQUFXLElBQUksVUFBQyxRQUNkO2NBQU0sUUFBUSxPQUFPLEtBQUssTUFDMUI7Y0FBSSxDQUFDLE9BQ0g7bUJBQ0Q7QUFDRDs0Q0FDSztrQ0FFRDs7MEJBQUE7NEJBQ0c7QUFESDtBQUFBLHNCQUNVLEtBQUssTUFBTSxLQUFLLElBQUksVUFBQyxNQUFNLEdBQVA7cUJBQzFCLElBQUkscUJBQUssd0JBQU0sV0FBVTs0QkFBaEI7OEJBQTZCO0FBQTdCO2VBQUEsUUFBbUMsR0FBcEMsRUFBZ0QsUUFBUTtBQUt6RTtBQVJHO0FBUEUsV0FlSCxPQUFPO2lCQUFVLENBQUMsQ0FBQztBQUV6QjtBQW5CRzs7Ozs7O3FDQXFCb0I7eUNBQUEsd0RBQU47QUFBTTtBQUN0Qjs7Y0FBUSxJQUFJLFFBQ2I7Ozs7dUNBRWtCLE1BQU0sT0FDdkI7V0FBSyxNQUFNO2dCQUVUOztnQkFFRTtpQkFHTDtBQUpLO0FBRkY7Ozs7NkJBUUs7bUJBQ1A7O1VBQU07ZUFFSjttQkFDQTthQUNBO3dDQUNFLHVCQUFLLFdBQVU7c0JBQWY7d0JBQ0U7QUFERjtTQUFBLGtCQUNHO2VBQ007bUJBQU8sT0FBSyxjQUFjO0FBQy9CO3VCQUNBO2lCQUFPLEtBQUssTUFDWjtvQkFBVSxLQUNWO3dCQUFjLEtBQUs7O3NCQUxyQjt3QkFPQTtBQVBBO0FBQ0UsNEJBTUQsOEJBQU8sTUFBSyxXQUFVLFNBQVMsS0FBSztzQkFBckM7d0JBQUE7QUFBQTtXQUdKO29DQUFhLDRCQUFLLE1BQUssV0FBVSxPQUFPLEVBQUUsT0FBTyxLQUFLLE1BQU0sV0FBVyxZQUFZO3NCQUF2RTt3QkFDWjtBQURZO1NBQUE7K0JBQ1csS0FBSyxNQUM1Qjt1Q0FBK0I7d0JBQWdCLFNBQVMsRUFBRSx1QkFBdUIsV0FBVzttQkFBTSxPQUFLLFlBQVk7QUFBekU7QUFsQjNCO0FBQ2YsT0FEYztlQXFCZDttQkFDQTthQUFLO0FBRkw7ZUFLQTttQkFDQTthQUNBOztnQkFFRTtpQkFBTztBQURQLFNBRE87Z0JBS1A7aUJBRUY7QUFIRTtrQkFHUSxrQkFBQyxPQUFPLFFBQVI7aUJBQW1CLE9BQU8sUUFBUSxRQUFRLFdBQVc7QUFHakU7QUFiRTs7VUFhRTtjQUVGO2tCQUFVLEtBR1o7QUFKRTs7NkJBSU07c0JBRUE7b0JBQVksS0FBSyxlQUFlLEtBQ2hDO2lCQUNBO29CQUFZLEtBQUssTUFBTTtvQkFKeEI7c0JBS1I7QUFMUTtBQUNDLE9BREQ7Ozs7O0FBN0ZjOztrQkFBbkIsVyIsImZpbGUiOiI1LmI5NDU2Nzc3MDY2Njg5MGY4YzRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUYWJsZSwgSW5wdXQsIEJ1dHRvbiwgSWNvbiB9IGZyb20gJ2FudGQnO1xuXG5jb25zdCBkYXRhID0gW3tcbiAga2V5OiAnMScsXG4gIG5hbWU6ICdKb2huIEJyb3duJyxcbiAgYWdlOiAzMixcbiAgYWRkcmVzczogJ05ldyBZb3JrIE5vLiAxIExha2UgUGFyaycsXG59LCB7XG4gIGtleTogJzInLFxuICBuYW1lOiAnSm9lIEJsYWNrJyxcbiAgYWdlOiA0MixcbiAgYWRkcmVzczogJ0xvbmRvbiBOby4gMSBMYWtlIFBhcmsnLFxufSwge1xuICBrZXk6ICczJyxcbiAgbmFtZTogJ0ppbSBHcmVlbicsXG4gIGFnZTogMzIsXG4gIGFkZHJlc3M6ICdTaWRuZXkgTm8uIDEgTGFrZSBQYXJrJyxcbn0sIHtcbiAga2V5OiAnNCcsXG4gIG5hbWU6ICdKaW0gUmVkJyxcbiAgYWdlOiAzMixcbiAgYWRkcmVzczogJ0xvbmRvbiBOby4gMiBMYWtlIFBhcmsnLFxufV07XG5cbmV4cG9ydCBkZWZhdWx0XG5jbGFzcyBRdWVyeVRhYmxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgZmlsdGVyRHJvcGRvd25WaXNpYmxlOiBmYWxzZSxcbiAgICBkYXRhLFxuICAgIHNlYXJjaFRleHQ6ICcnLFxuICAgIGZpbHRlcmVkOiBmYWxzZSxcbiAgICBzZWxlY3RlZEl0ZW06IG51bGwsXG4gIH07XG4gIG9uSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hUZXh0OiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuICBvblNlYXJjaCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNlYXJjaFRleHQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgcmVnID0gbmV3IFJlZ0V4cChzZWFyY2hUZXh0LCAnZ2knKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZpbHRlckRyb3Bkb3duVmlzaWJsZTogZmFsc2UsXG4gICAgICBmaWx0ZXJlZDogISFzZWFyY2hUZXh0LFxuICAgICAgZGF0YTogZGF0YS5tYXAoKHJlY29yZCkgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaCA9IHJlY29yZC5uYW1lLm1hdGNoKHJlZyk7XG4gICAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnJlY29yZCxcbiAgICAgICAgICBuYW1lOiAoXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAge3JlY29yZC5uYW1lLnNwbGl0KHJlZykubWFwKCh0ZXh0LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgaSA+IDAgPyBbPHNwYW4gY2xhc3NOYW1lPVwiaGlnaGxpZ2h0XCI+e21hdGNoWzBdfTwvc3Bhbj4sIHRleHRdIDogdGV4dFxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApLFxuICAgICAgICB9O1xuICAgICAgfSkuZmlsdGVyKHJlY29yZCA9PiAhIXJlY29yZCksXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVSb3dDbGljayguLi5hcmdzKSB7XG4gICAgY29uc29sZS5sb2coJ2FyZ3MnLCBhcmdzKTtcbiAgfVxuXG4gIF9yb3dTZWxlY3RDYWxsYmFjayhpdGVtLCBpbmRleCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goe1xuICAgICAgYWN0aW9uOiAnUk9XX0lURU1fU0VMRUNURUQnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBpdGVtLFxuICAgICAgICBpbmRleCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY29sdW1ucyA9IFt7XG4gICAgICB0aXRsZTogJ05hbWUnLFxuICAgICAgZGF0YUluZGV4OiAnbmFtZScsXG4gICAgICBrZXk6ICduYW1lJyxcbiAgICAgIGZpbHRlckRyb3Bkb3duOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLWZpbHRlci1kcm9wZG93blwiPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgcmVmPXtlbGUgPT4gdGhpcy5zZWFyY2hJbnB1dCA9IGVsZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIG5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoVGV4dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICBvblByZXNzRW50ZXI9e3RoaXMub25TZWFyY2h9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5vblNlYXJjaH0+U2VhcmNoPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSxcbiAgICAgIGZpbHRlckljb246IDxJY29uIHR5cGU9XCJzbWlsZS1vXCIgc3R5bGU9e3sgY29sb3I6IHRoaXMuc3RhdGUuZmlsdGVyZWQgPyAnIzEwOGVlOScgOiAnI2FhYScgfX0gLz4sXG4gICAgICBmaWx0ZXJEcm9wZG93blZpc2libGU6IHRoaXMuc3RhdGUuZmlsdGVyRHJvcGRvd25WaXNpYmxlLFxuICAgICAgb25GaWx0ZXJEcm9wZG93blZpc2libGVDaGFuZ2U6IHZpc2libGUgPT4gdGhpcy5zZXRTdGF0ZSh7IGZpbHRlckRyb3Bkb3duVmlzaWJsZTogdmlzaWJsZSB9LCAoKSA9PiB0aGlzLnNlYXJjaElucHV0LmZvY3VzKCkpLFxuICAgIH0sIHtcbiAgICAgIHRpdGxlOiAnQWdlJyxcbiAgICAgIGRhdGFJbmRleDogJ2FnZScsXG4gICAgICBrZXk6ICdhZ2UnLFxuICAgIH0sIHtcbiAgICAgIHRpdGxlOiAnQWRkcmVzcycsXG4gICAgICBkYXRhSW5kZXg6ICdhZGRyZXNzJyxcbiAgICAgIGtleTogJ2FkZHJlc3MnLFxuICAgICAgZmlsdGVyczogW3tcbiAgICAgICAgdGV4dDogJ0xvbmRvbicsXG4gICAgICAgIHZhbHVlOiAnTG9uZG9uJyxcbiAgICAgIH0sIHtcbiAgICAgICAgdGV4dDogJ05ldyBZb3JrJyxcbiAgICAgICAgdmFsdWU6ICdOZXcgWW9yaycsXG4gICAgICB9XSxcbiAgICAgIG9uRmlsdGVyOiAodmFsdWUsIHJlY29yZCkgPT4gcmVjb3JkLmFkZHJlc3MuaW5kZXhPZih2YWx1ZSkgPT09IDAsXG4gICAgfV07XG5cbiAgICBsZXQgcm93U2VsZWN0aW9uID0ge1xuICAgICAgdHlwZTogJ3JhZGlvJyxcbiAgICAgIG9uU2VsZWN0OiB0aGlzLl9yb3dTZWxlY3RDYWxsYmFja1xuICAgIH07XG5cbiAgICByZXR1cm4gPFRhYmxlIFxuICAgICAgICAgICAgcm93U2VsZWN0aW9uPXtyb3dTZWxlY3Rpb259IFxuICAgICAgICAgICAgb25Sb3dDbGljaz17dGhpcy5oYW5kbGVSb3dDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc30gXG4gICAgICAgICAgICBkYXRhU291cmNlPXt0aGlzLnN0YXRlLmRhdGF9IC8+O1xuICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qYXZhc2NyaXB0L2NvbXBvbmVudHMvTGlzdC9RdWVyeVRhYmxlL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==