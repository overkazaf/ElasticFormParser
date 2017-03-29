'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/components/EditableTable/index.js';


var EditableCell = function (_Component) {
  (0, _inherits3.default)(EditableCell, _Component);

  function EditableCell() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EditableCell);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EditableCell.__proto__ || (0, _getPrototypeOf2.default)(EditableCell)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: _this.props.value,
      editable: false
    }, _this.handleChange = function (e) {
      var value = e.target.value;
      _this.setState({ value: value });
    }, _this.check = function () {
      _this.setState({ editable: false });
      if (_this.props.onChange) {
        _this.props.onChange(_this.state.value);
      }
    }, _this.edit = function () {
      _this.setState({ editable: true });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(EditableCell, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          value = _state.value,
          editable = _state.editable;

      return _react2.default.createElement('div', { className: 'editable-cell', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, editable ? _react2.default.createElement('div', { className: 'editable-cell-input-wrapper', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement(_antd.Input, {
        value: value,
        onChange: this.handleChange,
        onPressEnter: this.check,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement(_antd.Icon, {
        type: 'check',
        className: 'editable-cell-icon-check',
        onClick: this.check,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      })) : _react2.default.createElement('div', { className: 'editable-cell-text-wrapper', __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, value || ' ', _react2.default.createElement(_antd.Icon, {
        type: 'edit',
        className: 'editable-cell-icon',
        onClick: this.edit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      })));
    }
  }]);

  return EditableCell;
}(_react.Component);

var EditableTable = function (_Component2) {
  (0, _inherits3.default)(EditableTable, _Component2);

  function EditableTable(props) {
    (0, _classCallCheck3.default)(this, EditableTable);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (EditableTable.__proto__ || (0, _getPrototypeOf2.default)(EditableTable)).call(this, props));

    _this2.onCellChange = function (index, key) {
      return function (value) {
        var dataSource = [].concat((0, _toConsumableArray3.default)(_this2.state.dataSource));
        dataSource[index][key] = value;
        _this2.setState({ dataSource: dataSource });
      };
    };

    _this2.onDelete = function (index) {
      var dataSource = [].concat((0, _toConsumableArray3.default)(_this2.state.dataSource));
      dataSource.splice(index, 1);
      _this2.setState({ dataSource: dataSource });
    };

    _this2.handleAdd = function () {
      var _this2$state = _this2.state,
          count = _this2$state.count,
          dataSource = _this2$state.dataSource;

      var newData = {
        key: count,
        name: 'Edward King ' + count,
        age: 32,
        address: 'London, Park Lane no. ' + count
      };
      _this2.setState({
        dataSource: [].concat((0, _toConsumableArray3.default)(dataSource), [newData]),
        count: count + 1
      });
    };

    _this2.columns = [{
      title: 'name',
      dataIndex: 'name',
      width: '30%',
      render: function render(text, record, index) {
        return _react2.default.createElement(EditableCell, {
          value: text,
          onChange: _this2.onCellChange(index, 'name'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        });
      }
    }, {
      title: 'age',
      dataIndex: 'age'
    }, {
      title: 'address',
      dataIndex: 'address'
    }, {
      title: 'operation',
      dataIndex: 'operation',
      render: function render(text, record, index) {
        return _this2.state.dataSource.length > 1 ? _react2.default.createElement(_antd.Popconfirm, { title: 'Sure to delete?', onConfirm: function onConfirm() {
            return _this2.onDelete(index);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }, _react2.default.createElement('a', { href: '#', __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }, 'Delete')) : null;
      }
    }];

    _this2.state = {
      dataSource: [{
        key: '0',
        name: 'Edward King 0',
        age: '32',
        address: 'London, Park Lane no. 0'
      }, {
        key: '1',
        name: 'Edward King 1',
        age: '32',
        address: 'London, Park Lane no. 1'
      }],
      count: 2
    };
    return _this2;
  }

  (0, _createClass3.default)(EditableTable, [{
    key: 'render',
    value: function render() {
      var dataSource = this.state.dataSource;

      var columns = this.columns;
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, _react2.default.createElement(_antd.Button, { className: 'editable-add-btn', onClick: this.handleAdd, __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, 'Add'), _react2.default.createElement(_antd.Table, { bordered: true, dataSource: dataSource, columns: columns, __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }));
    }
  }]);

  return EditableTable;
}(_react.Component);

exports.default = EditableTable;