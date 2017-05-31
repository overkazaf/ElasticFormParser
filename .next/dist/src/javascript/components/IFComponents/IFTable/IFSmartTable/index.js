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

var _index = require('../../IFComponentBase/index.js');

var _index2 = _interopRequireDefault(_index);

var _antd = require('antd');

var _mathjs = require('mathjs');

var _mathjs2 = _interopRequireDefault(_mathjs);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/components/IFComponents/IFTable/IFSmartTable/index.js';


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
          lineNumber: 30
        }
      }, editable ? _react2.default.createElement('div', { className: 'editable-cell-input-wrapper', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_antd.Input, {
        value: value,
        onChange: this.handleChange,
        onPressEnter: this.check,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement(_antd.Icon, {
        type: 'check',
        className: 'editable-cell-icon-check',
        onClick: this.check,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      })) : _react2.default.createElement('div', { className: 'editable-cell-text-wrapper', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, value || ' ', _react2.default.createElement(_antd.Icon, {
        type: 'edit',
        className: 'editable-cell-icon',
        onClick: this.edit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      })));
    }
  }]);

  return EditableCell;
}(_react.Component);

var IFSmartTable = function (_IFComponentBase) {
  (0, _inherits3.default)(IFSmartTable, _IFComponentBase);

  function IFSmartTable(props) {
    (0, _classCallCheck3.default)(this, IFSmartTable);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (IFSmartTable.__proto__ || (0, _getPrototypeOf2.default)(IFSmartTable)).call(this, props));

    _this2.onCellChange = function (index, key) {
      return function (value) {
        var newDataSource = _this2.state.option.get('dataSource');
        newDataSource[index][key] = value;

        var autoCalcMap = {
          price: true,
          discount: true,
          amount: true
        };

        var row = newDataSource[index];

        if (key in autoCalcMap) {
          var price = row.price,
              amount = row.amount,
              discount = row.discount;

          newDataSource[index]['total'] = new Number(_mathjs2.default.eval(price + ' * ' + amount + ' * (100 - ' + discount + ') / 100')).toFixed(2);
        }

        // this.setState({ 
        //   dataSource: [],
        // }, () => {
        //   this.setState({
        //     dataSource: newDataSource,
        //   });
        // });

        _this2.setFieldValue({
          dataSource: []
        }, function () {
          _this2.setFieldValue({
            dataSource: newDataSource
          });
        });
      };
    };

    _this2._onDelete = function (index) {
      var dataSource = _this2.state.option.get('dataSource');
      dataSource.splice(index, 1);

      _this2.setFieldValue({
        dataSource: dataSource
      });
    };

    _this2._handleAdd = function () {
      var _this2$state$option$t = _this2.state.option.toJS(),
          count = _this2$state$option$t.count,
          dataSource = _this2$state$option$t.dataSource;

      var newData = {
        key: count,
        name: '\u65B0\u589E\u7269\u6599 ' + count,
        amount: 1,
        price: '00.00',
        total: '00.00',
        discount: '0',
        buyer: '管理员',
        date: '2016-10-24',
        fixed: 'right',
        width: 100
      };

      _this2.setFieldValue({
        dataSource: [].concat((0, _toConsumableArray3.default)(dataSource), [newData]),
        count: count + 1
      });
    };

    _this2.columns = [{
      title: '物料名',
      dataIndex: 'name',
      render: function render(text, record, index) {
        return _react2.default.createElement(EditableCell, {
          value: text,
          onChange: _this2.onCellChange(index, 'name'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        });
      }
    }, {
      title: '数量(个)',
      dataIndex: 'amount',
      render: function render(text, record, index) {
        return _react2.default.createElement(EditableCell, {
          value: text,
          onChange: _this2.onCellChange(index, 'amount'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        });
      }
    }, {
      title: '单价(元)',
      dataIndex: 'price',
      render: function render(text, record, index) {
        return _react2.default.createElement(EditableCell, {
          value: text,
          onChange: _this2.onCellChange(index, 'price'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        });
      }
    }, {
      title: '折扣(%)',
      dataIndex: 'discount',
      render: function render(text, record, index) {
        return _react2.default.createElement(EditableCell, {
          value: text,
          onChange: _this2.onCellChange(index, 'discount'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        });
      }
    }, {
      title: '总价(元)',
      dataIndex: 'total',
      render: function render(text, record, index) {
        return _react2.default.createElement(EditableCell, {
          value: text,
          onChange: _this2.onCellChange(index, 'total'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        });
      }
    }, {
      title: '日期',
      dataIndex: 'date',
      render: function render(text, record, index) {
        return _react2.default.createElement(EditableCell, {
          value: text,
          onChange: _this2.onCellChange(index, 'date'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        });
      }
    }, {
      title: '采购人',
      dataIndex: 'buyer'
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: function render(text, record, index) {
        return _this2.state.option.get('dataSource').length > 1 ? _react2.default.createElement(_antd.Popconfirm, { title: '\u786E\u5B9A\u8981\u5220\u9664\u672C\u884C\u8BB0\u5F55?', onConfirm: function onConfirm() {
            return _this2._onDelete(index);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          }
        }, _react2.default.createElement('a', { href: '#', __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          }
        }, '\u5220\u9664\u672C\u884C\u8BB0\u5F55')) : null;
      }
    }];
    return _this2;
  }

  (0, _createClass3.default)(IFSmartTable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setFieldValue({
        dataSource: [{
          key: '0',
          name: '新增物料 0',
          amount: '1',
          price: '12.00',
          total: '12.00',
          discount: '0',
          buyer: '管理员',
          date: '2016-10-24',
          fixed: 'right',
          width: 100
        }],
        count: 1
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state,
          option = _state2.option,
          eventMap = _state2.eventMap;

      var _option$toJS = option.toJS(),
          dataSource = _option$toJS.dataSource;

      var columns = this.columns;
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, _react2.default.createElement(_antd.Button, {
        className: 'editable-add-btn',
        style: { marginBottom: 10 },
        onClick: this._handleAdd, __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'plus-circle', __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }), 'New Row'), _react2.default.createElement(_antd.Table, {
        size: 'small',
        bordered: true,
        dataSource: dataSource,
        scroll: { x: 700 },
        columns: columns, __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }));
    }
  }]);

  return IFSmartTable;
}(_index2.default);

exports.default = IFSmartTable;