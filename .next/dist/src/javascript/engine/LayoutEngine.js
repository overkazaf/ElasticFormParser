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

		/**
   * [renderLayout 进行布局渲染，可以对移动端设备进行相应的适配]
   * @Author   JohnNong
   * @Email    overkazaf@gmail.com
   * @Github   https://github.com/overkazaf
   * @DateTime 2017-04-06T14:55:32+0800
   * @param    {[type]}                     componentGroup [IFComponent列表]
   * @param    {Number}                     colSpan        [宽度]
   * @param    {Number}                     rowGutter      [行内单元间隔]
   * @return   {[type]}                                    [description]
   */
		value: function renderLayout(componentGroup) {
			var colSpan = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
			var rowGutter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 16;

			return componentGroup.map(function (group, indexX) {
				var groupContent = group.map(function (item, indexY) {
					return _react2.default.createElement(_antd.Col, { key: indexX + '-' + indexY, className: 'gutter-row', span: colSpan, __source: {
							fileName: _jsxFileName,
							lineNumber: 25
						}
					}, item);
				});

				return _react2.default.createElement(_antd.Row, { key: 'row-' + indexX, gutter: rowGutter, style: { marginBottom: '15px' }, __source: {
						fileName: _jsxFileName,
						lineNumber: 32
					}
				}, groupContent);
			});
		}
	}]);

	return LayoutEngine;
}();

exports.default = LayoutEngine;