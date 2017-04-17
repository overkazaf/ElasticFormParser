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

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/components/IFComponents/IFCheckBoxGroup/IFCheckBoxGroupVertical/index.js';

var CheckboxGroup = _antd.Checkbox.Group;

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

var plainOptions = ['Apple', 'Pear', 'Orange'];
var options = [{ label: 'Apple', value: 'Apple' }, { label: 'Pear', value: 'Pear' }, { label: 'Orange', value: 'Orange' }];
var optionsWithDisabled = [{ label: 'Apple', value: 'Apple' }, { label: 'Pear', value: 'Pear' }, { label: 'Orange', value: 'Orange', disabled: false }];

var IFCheckBoxGroupVertical = function (_IFComponentBase) {
  (0, _inherits3.default)(IFCheckBoxGroupVertical, _IFComponentBase);

  function IFCheckBoxGroupVertical() {
    (0, _classCallCheck3.default)(this, IFCheckBoxGroupVertical);

    return (0, _possibleConstructorReturn3.default)(this, (IFCheckBoxGroupVertical.__proto__ || (0, _getPrototypeOf2.default)(IFCheckBoxGroupVertical)).apply(this, arguments));
  }

  (0, _createClass3.default)(IFCheckBoxGroupVertical, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(CheckboxGroup, { options: plainOptions, defaultValue: ['Apple'], onChange: onChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      });
    }
  }]);

  return IFCheckBoxGroupVertical;
}(_index2.default);

exports.default = IFCheckBoxGroupVertical;