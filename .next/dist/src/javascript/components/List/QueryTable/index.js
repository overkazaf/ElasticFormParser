'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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