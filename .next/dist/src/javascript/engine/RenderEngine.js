"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ComponentFactory = require("../factory/ComponentFactory");

var _ComponentFactory2 = _interopRequireDefault(_ComponentFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/engine/RenderEngine.js";


var RenderEngine = function () {
	function RenderEngine() {
		(0, _classCallCheck3.default)(this, RenderEngine);
	}

	(0, _createClass3.default)(RenderEngine, null, [{
		key: "renderPageView",
		value: function renderPageView(pageJson) {
			return _react2.default.createElement("div", { className: "p-page", __source: {
					fileName: _jsxFileName,
					lineNumber: 8
				}
			}, "page");
		}
	}, {
		key: "renderComponent",
		value: function renderComponent(type, props) {
			var componentContent = _ComponentFactory2.default.create(type, props);
			return _react2.default.createElement("div", { style: props.style, __source: {
					fileName: _jsxFileName,
					lineNumber: 17
				}
			}, componentContent);
		}
	}]);

	return RenderEngine;
}();

exports.default = RenderEngine;