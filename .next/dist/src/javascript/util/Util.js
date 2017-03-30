'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

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
	}]);

	return Util;
}();

exports.default = Util;