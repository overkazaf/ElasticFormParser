'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/engine/LayoutEngine.js';


var LayoutEngine = function () {
	function LayoutEngine() {
		(0, _classCallCheck3.default)(this, LayoutEngine);
	}

	(0, _createClass3.default)(LayoutEngine, null, [{
		key: 'renderLayout',
		value: function renderLayout(componentGroup) {
			var colSpan = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
			var rowGutter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 16;

			return componentGroup.map(function (group, indexX) {
				var groupContent = group.map(function (item, indexY) {
					return _react2.default.createElement(_antd.Col, { key: indexX + '-' + indexY, className: 'gutter-row', span: colSpan, __source: {
							fileName: _jsxFileName,
							lineNumber: 14
						}
					}, item);
				});

				return _react2.default.createElement(_antd.Row, { gutter: rowGutter, style: { marginBottom: '15px' }, __source: {
						fileName: _jsxFileName,
						lineNumber: 21
					}
				}, groupContent);
			});
		}
	}]);

	return LayoutEngine;
}();

exports.default = LayoutEngine;