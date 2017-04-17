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

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/components/IFComponents/IFRadioGroup/IFRadioGroupVertical/index.js';

var RadioGroup = _antd.Radio.Group;

var IFRadioGroupVertical = function (_IFComponentBase) {
  (0, _inherits3.default)(IFRadioGroupVertical, _IFComponentBase);

  function IFRadioGroupVertical() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, IFRadioGroupVertical);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = IFRadioGroupVertical.__proto__ || (0, _getPrototypeOf2.default)(IFRadioGroupVertical)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (e) {
      console.log('radio checked', e.target.value);
      _this.setValue(e.target.value);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(IFRadioGroupVertical, [{
    key: 'render',
    value: function render() {
      var radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px'
      };

      return _react2.default.createElement(RadioGroup, { onChange: this.onChange, value: this.getValue(), __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement(_antd.Radio, { style: radioStyle, value: 1, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, 'Option A'), _react2.default.createElement(_antd.Radio, { style: radioStyle, value: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, 'Option B'), _react2.default.createElement(_antd.Radio, { style: radioStyle, value: 3, __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, 'Option C'), _react2.default.createElement(_antd.Radio, { style: radioStyle, value: 4, __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, 'More...', this.state.value === 4 ? _react2.default.createElement(_antd.Input, { style: { width: 100, marginLeft: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }) : null));
    }
  }]);

  return IFRadioGroupVertical;
}(_index2.default);

exports.default = IFRadioGroupVertical;