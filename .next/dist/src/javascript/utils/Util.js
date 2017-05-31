'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var obj2str = Object.prototype.toString;

var Util = function () {
    function Util() {
        (0, _classCallCheck3.default)(this, Util);
    }

    (0, _createClass3.default)(Util, null, [{
        key: 'deepClone',
        value: function deepClone(obj) {
            if (obj === null || (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) !== 'object') return obj;

            var ret = new obj.constructor();

            if (Util.isArray(obj)) {
                ret = [];
                for (var i = 0, l = obj.length; i < l; i++) {
                    ret[i] = Util.deepClone(obj[i]);
                }
            } else {

                if (obj instanceof Date) {
                    return new Date(obj.valueOf());
                }

                if (obj instanceof RegExp) {
                    var pattern = obj.valueOf();
                    var flags = '';
                    flags += pattern.global ? 'g' : '';
                    flags += pattern.ignoreCase ? 'i' : '';
                    flags += pattern.multiline ? 'm' : '';
                    return new RegExp(pattern.source, flags);
                }

                if (obj instanceof Function) {
                    // 函数的话直接指向相对的内存地址
                    return obj;
                }

                for (var attr in obj) {
                    if (Object.hasOwnProperty.call(obj, attr)) {
                        ret[attr] = Util.deepClone(obj[attr]);
                    }
                }
            }
            return ret;
        }
    }, {
        key: 'isType',
        value: function isType(obj, type) {
            return obj2str.call(obj) === '[object ' + type + ']';
        }
    }, {
        key: 'isArray',
        value: function isArray(obj) {
            if (typeof Array.isArray == 'function') {
                return Array.isArray(obj);
            } else {
                return Util.isType(obj, 'Array');
            }
        }
    }, {
        key: 'isExisty',
        value: function isExisty(obj) {
            return obj != null;
        }
    }, {
        key: 'buildStyleObjet',
        value: function buildStyleObjet(keys, kvObject) {
            var style = {};
            keys.map(function (key) {
                var styleKey = key;
                var styleValue = kvObject[key];
                if (key === 'fontStyle') {
                    var values = styleValue ? styleValue.split('$') : "";
                    values.length && values.map(function (kvPairs) {
                        var _kvPairs$split = kvPairs.split(':'),
                            _kvPairs$split2 = (0, _slicedToArray3.default)(_kvPairs$split, 2),
                            k = _kvPairs$split2[0],
                            v = _kvPairs$split2[1];

                        style[k] = v;
                    });
                } else {
                    if (key === 'fontColor') {
                        styleKey = 'color';
                        styleValue = styleValue.hex;
                    }

                    if (key === 'backgroundColor') {
                        styleValue = styleValue.hex;
                    }

                    if (key === 'visibility') {
                        styleKey = 'display';
                        styleValue = styleValue ? '' : 'none';
                    }

                    style[styleKey] = styleValue;
                }
            });

            return style;
        }
    }, {
        key: 'parseDataModel',
        value: function parseDataModel(option) {
            var _option$basicProps = option.basicProps,
                _option$basicProps$co = _option$basicProps.componentTheme,
                backgroundColor = _option$basicProps$co.backgroundColor,
                fontColor = _option$basicProps$co.fontColor,
                layoutStyle = _option$basicProps$co.layoutStyle,
                size = _option$basicProps$co.size,
                theme = _option$basicProps$co.theme,
                _option$basicProps$in = _option$basicProps.inputValue,
                carry = _option$basicProps$in.carry,
                defaultValue = _option$basicProps$in.defaultValue,
                label = _option$basicProps$in.label,
                link = _option$basicProps$in.link,
                linkTarget = _option$basicProps$in.linkTarget,
                placeholder = _option$basicProps$in.placeholder,
                value = _option$basicProps$in.value,
                _option$basicProps$in2 = _option$basicProps.inputDecoration,
                addonBefore = _option$basicProps$in2.addonBefore,
                addonAfter = _option$basicProps$in2.addonAfter,
                prefix = _option$basicProps$in2.prefix,
                suffix = _option$basicProps$in2.suffix,
                _option$basicProps$fo = _option$basicProps.formStatus,
                visibility = _option$basicProps$fo.visibility,
                locked = _option$basicProps$fo.locked,
                mustInput = _option$basicProps$fo.mustInput,
                autoSum = _option$basicProps$fo.autoSum,
                _option$basicProps$fo2 = _option$basicProps.fontStyles,
                fontFamily = _option$basicProps$fo2.fontFamily,
                fontStyle = _option$basicProps$fo2.fontStyle,
                fontSize = _option$basicProps$fo2.fontSize,
                lineHeight = _option$basicProps$fo2.lineHeight,
                textAlign = _option$basicProps$fo2.textAlign;

            console.log('=================inside Util.js==================');
            console.log('mustInput', mustInput);

            var _map = [size, theme, label, fontFamily, fontSize, lineHeight, textAlign, visibility, locked, mustInput, autoSum, defaultValue, value, link, linkTarget, placeholder, carry, addonBefore, addonAfter, prefix, suffix].map(function (item) {
                return item.value;
            });

            var _map2 = (0, _slicedToArray3.default)(_map, 21);

            size = _map2[0];
            theme = _map2[1];
            label = _map2[2];
            fontFamily = _map2[3];
            fontSize = _map2[4];
            lineHeight = _map2[5];
            textAlign = _map2[6];
            visibility = _map2[7];
            locked = _map2[8];
            mustInput = _map2[9];
            autoSum = _map2[10];
            defaultValue = _map2[11];
            value = _map2[12];
            link = _map2[13];
            linkTarget = _map2[14];
            placeholder = _map2[15];
            carry = _map2[16];
            addonBefore = _map2[17];
            addonAfter = _map2[18];
            prefix = _map2[19];
            suffix = _map2[20];

            var _map3 = [fontStyle].map(function (item) {
                return item.values;
            });

            var _map4 = (0, _slicedToArray3.default)(_map3, 1);

            fontStyle = _map4[0];

            var extraStyle = {};
            if (fontStyle) {
                var pairs = fontStyle.split('$');
                pairs.map(function (pair) {
                    var _pair$split = pair.split(':'),
                        _pair$split2 = (0, _slicedToArray3.default)(_pair$split, 2),
                        k = _pair$split2[0],
                        v = _pair$split2[1];

                    extraStyle[k] = v;
                });
            }

            return {
                size: size,
                theme: theme,
                label: label,
                fontFamily: fontFamily,
                fontSize: fontSize,
                lineHeight: lineHeight,
                textAlign: textAlign,
                visibility: visibility,
                locked: locked,
                mustInput: mustInput,
                autoSum: autoSum,
                defaultValue: defaultValue,
                value: value,
                link: link,
                linkTarget: linkTarget,
                placeholder: placeholder,
                carry: carry,
                addonBefore: addonBefore,
                addonAfter: addonAfter,
                prefix: prefix,
                suffix: suffix,
                extraStyle: extraStyle
            };
        }
    }, {
        key: 'overrideObject',
        value: function overrideObject() {
            var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var deep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if ((0, _keys2.default)(obj).length) {
                for (var key in obj) {
                    if (!deep) {
                        src[key] = obj[key];
                    } else {
                        src[key] = Util.overrideObject(src[key], obj[key]);
                    }
                }
            }

            return src;
        }
    }]);

    return Util;
}();

exports.default = Util;