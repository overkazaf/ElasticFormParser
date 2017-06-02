'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _IFComponentManager = require('./IFComponentManager.js');

var _IFComponentManager2 = _interopRequireDefault(_IFComponentManager);

var _Util = require('../utils/Util.js');

var _Util2 = _interopRequireDefault(_Util);

var _mathjs = require('mathjs');

var _mathjs2 = _interopRequireDefault(_mathjs);

var _CommitEngine = require('../engine/CommitEngine.js');

var _CommitEngine2 = _interopRequireDefault(_CommitEngine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * [ActionStretagies 动作策略类，在这里实现不同的策略]
 * @type {Object}
 */
var ActionStretagies = {
	HIDE_ELEM: function HIDE_ELEM(componentId, _ref, ev) {
		var expr = _ref.expr,
		    target = _ref.target;

		target.map(function (key) {
			var comp = _IFComponentManager2.default.get(key);
			console.log('target key::', key);

			comp.setFieldValue({
				formStatus: {
					visibility: {
						value: false
					}
				}
			});
		});
	},
	SHOW_ELEM: function SHOW_ELEM(componentId, _ref2, ev) {
		var expr = _ref2.expr,
		    target = _ref2.target;

		target.map(function (key) {
			var comp = _IFComponentManager2.default.get(key);
			console.log('target key::', key);
			comp.setFieldValue({
				formStatus: {
					visibility: {
						value: true
					}
				}
			});
		});
	}
};

var IFActionManager = function () {
	function IFActionManager() {
		(0, _classCallCheck3.default)(this, IFActionManager);
	}

	(0, _createClass3.default)(IFActionManager, null, [{
		key: 'execute',
		value: function execute(componentId, actionList) {

			actionList.map(function (action) {
				var type = action.type,
				    expr = action.expr,
				    target = action.target;

				var actionType = type.split(':')[1];

				IFActionManager.dispatchAction(actionType, componentId, {
					expr: expr,
					target: target
				});
			});
		}
	}, {
		key: 'dispatchAction',
		value: function dispatchAction(actionType, componentId, actionOptions) {
			ActionStretagies[actionType](componentId, actionOptions);
		}
	}]);

	return IFActionManager;
}();

exports.default = IFActionManager;