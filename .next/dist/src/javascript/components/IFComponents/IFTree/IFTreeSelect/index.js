'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/components/IFComponents/IFTree/IFTreeSelect/index.js';

var TreeNode = _antd.TreeSelect.TreeNode;

var IFTreeSelect = function (_IFComponentBase) {
  (0, _inherits3.default)(IFTreeSelect, _IFComponentBase);

  function IFTreeSelect() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, IFTreeSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = IFTreeSelect.__proto__ || (0, _getPrototypeOf2.default)(IFTreeSelect)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (value) {
      _this.setValue(value);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(IFTreeSelect, [{
    key: 'render',
    value: function render() {
      var option = this.state.option;

      var _option$toJS = option.toJS(),
          value = _option$toJS.value;

      return _react2.default.createElement(_antd.TreeSelect, {
        showSearch: true,
        style: { width: 200 },
        value: value,
        dropdownStyle: { maxHeight: 400, overflow: 'auto' },
        placeholder: 'Please select',
        allowClear: true,
        treeDefaultExpandAll: true,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(TreeNode, { value: '\u5154\u5DE2\u79D1\u6280', title: '\u5154\u5DE2\u79D1\u6280', key: '0-1', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(TreeNode, { value: 'UED\u4E2D\u5FC3', title: 'UED\u4E2D\u5FC3', key: '0-1-1', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(TreeNode, { value: 'UED1', title: 'UED1', key: 'random', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react2.default.createElement(TreeNode, { value: 'UED2', title: 'UED2', key: 'random1', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      })), _react2.default.createElement(TreeNode, { value: '\u5E73\u53F0\u7814\u53D1\u4E2D\u5FC3', title: '\u5E73\u53F0\u7814\u53D1\u4E2D\u5FC3', key: 'random2', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(TreeNode, { value: 'John Doe', title: _react2.default.createElement('b', { style: { color: '#08c' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, 'John Doe'), key: 'random3', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }))));
    }
  }]);

  return IFTreeSelect;
}(_index2.default);

exports.default = IFTreeSelect;