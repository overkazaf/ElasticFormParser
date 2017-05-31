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

var _index = require('../IFComponentBase/index.js');

var _index2 = _interopRequireDefault(_index);

var _Util = require('../../../utils/Util.js');

var _Util2 = _interopRequireDefault(_Util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/components/IFComponents/IFLabel/index.js';


var IFLabel = function (_IFComponentBase) {
  (0, _inherits3.default)(IFLabel, _IFComponentBase);

  function IFLabel() {
    (0, _classCallCheck3.default)(this, IFLabel);

    return (0, _possibleConstructorReturn3.default)(this, (IFLabel.__proto__ || (0, _getPrototypeOf2.default)(IFLabel)).apply(this, arguments));
  }

  (0, _createClass3.default)(IFLabel, [{
    key: 'render',
    value: function render() {
      var option = this.props.option;
      var _option$basicProps = option.basicProps,
          _option$basicProps$co = _option$basicProps.componentTheme,
          backgroundColor = _option$basicProps$co.backgroundColor,
          fontColor = _option$basicProps$co.fontColor,
          layoutStyle = _option$basicProps$co.layoutStyle,
          size = _option$basicProps$co.size,
          theme = _option$basicProps$co.theme,
          _option$basicProps$fo = _option$basicProps.fontStyles,
          fontFamily = _option$basicProps$fo.fontFamily,
          fontStyle = _option$basicProps$fo.fontStyle,
          fontSize = _option$basicProps$fo.fontSize,
          lineHeight = _option$basicProps$fo.lineHeight,
          textAlign = _option$basicProps$fo.textAlign,
          _option$basicProps$fo2 = _option$basicProps.formStatus,
          autoSum = _option$basicProps$fo2.autoSum,
          locked = _option$basicProps$fo2.locked,
          mustInput = _option$basicProps$fo2.mustInput,
          visibility = _option$basicProps$fo2.visibility,
          _option$basicProps$in = _option$basicProps.inputDecoration,
          addonAfter = _option$basicProps$in.addonAfter,
          addonBefore = _option$basicProps$in.addonBefore,
          prefix = _option$basicProps$in.prefix,
          suffix = _option$basicProps$in.suffix,
          _option$basicProps$in2 = _option$basicProps.inputValue,
          carry = _option$basicProps$in2.carry,
          defaultValue = _option$basicProps$in2.defaultValue,
          label = _option$basicProps$in2.label,
          link = _option$basicProps$in2.link,
          linkTarget = _option$basicProps$in2.linkTarget,
          placeholder = _option$basicProps$in2.placeholder,
          value = _option$basicProps$in2.value,
          dataSource = option.dataSource,
          eventList = option.eventList,
          filterRules = option.filterRules,
          validations = option.validations;

      var keyArray = ['backgroundColor', 'fontColor', 'layoutStyle', 'size', 'theme', 'fontFamily', 'fontStyle', 'fontSize', 'lineHeight', 'textAlign', 'autoSum', 'locked', 'mustInput', 'visibility', 'addonAfter', 'addonBefore', 'prefix', 'suffix', 'carry', 'defaultValue', 'label', 'link', 'linkTarget', 'placeholder', 'value'];

      var kvObject = {};
      [backgroundColor, fontColor, layoutStyle, size, theme, fontFamily, fontStyle, fontSize, lineHeight, textAlign, autoSum, locked, mustInput, visibility, addonAfter, addonBefore, prefix, suffix, carry, defaultValue, label, link, linkTarget, placeholder, value].map(function (item, index) {
        if (item.isMultiple) console.log('isMultiple', item);
        kvObject[keyArray[index]] = item.isMultiple ? item.values : item.value;
      });

      var styleKeys = ['backgroundColor', 'fontColor', 'fontFamily', 'fontSize', 'fontStyle', 'lineHeight', 'textAlign', 'visibility'];

      var styleObj = _Util2.default.buildStyleObjet(styleKeys, kvObject);

      return _react2.default.createElement('div', { className: 'if-label', style: styleObj, __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, label.value);
    }
  }]);

  return IFLabel;
}(_index2.default);

exports.default = IFLabel;