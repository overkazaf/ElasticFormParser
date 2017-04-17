"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentMap = {};
var componentList = [];

var IFComponentManager = function () {
	function IFComponentManager() {
		(0, _classCallCheck3.default)(this, IFComponentManager);
	}

	(0, _createClass3.default)(IFComponentManager, null, [{
		key: "register",
		value: function register(id, component) {
			try {
				componentMap[id] = component;
				componentList.push(component);
			} catch (e) {
				return false;
			}

			return true;
		}
	}, {
		key: "list",
		value: function list() {
			componentList.map(console.log);

			return componentList;
		}
	}, {
		key: "get",
		value: function get(id) {
			return componentMap[id];
		}
	}]);

	return IFComponentManager;
}();

exports.default = IFComponentManager;