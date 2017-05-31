"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrayUtil = function () {
	function ArrayUtil() {
		(0, _classCallCheck3.default)(this, ArrayUtil);
	}

	(0, _createClass3.default)(ArrayUtil, null, [{
		key: "makeGroup",
		value: function makeGroup(array, groupSize) {
			var target = [];
			var tmp = [];

			array.map(function (item, index) {
				if ((index + 1) % groupSize === 0) {
					tmp.push(item);
					target.push(tmp.slice(0));
					tmp = [];
				} else {
					tmp.push(item);
				}
			});

			if (tmp.length) target.push(tmp);

			return target;
		}
	}]);

	return ArrayUtil;
}();

exports.default = ArrayUtil;