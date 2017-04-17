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

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/components/List/QueryTable/index.js';


var QueryTable = function (_Component) {
  (0, _inherits3.default)(QueryTable, _Component);

  function QueryTable(props) {
    (0, _classCallCheck3.default)(this, QueryTable);

    var _this = (0, _possibleConstructorReturn3.default)(this, (QueryTable.__proto__ || (0, _getPrototypeOf2.default)(QueryTable)).call(this, props));

    _this.onInputChange = function (e) {
      _this.setState({ searchText: e.target.value });
    };

    _this.onSearch = function () {
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
                lineNumber: 40
              }
            }, record.name.split(reg).map(function (text, i) {
              return i > 0 ? [_react2.default.createElement('span', { className: 'highlight', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                }
              }, match[0]), text] : text;
            }))
          });
        }).filter(function (record) {
          return !!record;
        })
      });
    };

    console.log('props in QueryTable', props.list);

    _this.state = {
      filterDropdownVisible: false,
      data: props.data,
      searchText: '',
      filtered: false,
      selectedItem: null
    };
    return _this;
  }

  (0, _createClass3.default)(QueryTable, [{
    key: '_rowSelectCallback',
    value: function _rowSelectCallback(item, index) {
      this.props.handleRowSelect(item, index);
    }
  }, {
    key: 'render',
    value: function render() {
      // const columns = [{
      //   title: 'Name',
      //   dataIndex: 'name',
      //   key: 'name',
      //   filterDropdown: (
      //     <div className="custom-filter-dropdown">
      //       <Input
      //         ref={ele => this.searchInput = ele}
      //         placeholder="Search name"
      //         value={this.state.searchText}
      //         onChange={this.onInputChange}
      //         onPressEnter={this.onSearch}
      //       />
      //       <Button type="primary" onClick={this.onSearch}>Search</Button>
      //     </div>
      //   ),
      //   filterIcon: <Icon type="smile-o" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
      //   filterDropdownVisible: this.state.filterDropdownVisible,
      //   onFilterDropdownVisibleChange: visible => this.setState({ filterDropdownVisible: visible }, () => this.searchInput.focus()),
      // }, {
      //   title: 'Age',
      //   dataIndex: 'age',
      //   key: 'age',
      // }, {
      //   title: 'Address',
      //   dataIndex: 'address',
      //   key: 'address',
      //   filters: [{
      //     text: 'London',
      //     value: 'London',
      //   }, {
      //     text: 'New York',
      //     value: 'New York',
      //   }],
      //   onFilter: (value, record) => record.address.indexOf(value) === 0,
      // }];
      // 
      var columns = [{
        title: 'ID',
        dataIndex: 'id',
        key: 'id'
      }, {
        title: 'FormType',
        dataIndex: 'formType',
        key: 'formType'
      }, {
        title: 'FormName',
        dataIndex: 'formName',
        key: 'formName'
      }, {
        title: 'Category',
        dataIndex: 'formCategory',
        key: 'formCategory'
      }, {
        title: 'Description',
        dataIndex: 'description',
        key: 'description'
      }, {
        title: 'Version',
        dataIndex: 'version',
        key: 'version'
      }, {
        title: 'Synchronize',
        dataIndex: 'synchronize',
        key: 'synchronize'
      }, {
        title: 'Control',
        dataIndex: 'control',
        key: 'control'
      }];

      var rowSelection = {
        type: 'radio',
        onSelect: this._rowSelectCallback.bind(this)
      };

      return _react2.default.createElement(_antd.Table, {
        rowSelection: rowSelection,
        columns: columns,
        dataSource: this.state.data, __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      });
    }
  }]);

  return QueryTable;
}(_react.Component);

exports.default = QueryTable;