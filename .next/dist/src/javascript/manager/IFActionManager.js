'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _antd = require('antd');

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
	},
	UNLOCK_ELEM: function UNLOCK_ELEM(componentId, _ref3, ev) {
		var expr = _ref3.expr,
		    target = _ref3.target;

		target.map(function (key) {
			var comp = _IFComponentManager2.default.get(key);
			comp.setFieldValue({
				formStatus: {
					locked: {
						value: false
					}
				}
			});
		});
	},
	LOCK_ELEM: function LOCK_ELEM(componentId, _ref4, ev) {
		var expr = _ref4.expr,
		    target = _ref4.target;

		target.map(function (key) {
			var comp = _IFComponentManager2.default.get(key);
			comp.setFieldValue({
				formStatus: {
					locked: {
						value: true
					}
				}
			});
		});
	},
	VALIDATE_FORM: function VALIDATE_FORM(componentId, _ref5, ev) {
		var expr = _ref5.expr,
		    target = _ref5.target;

		var model = {};
		target.map(function (key) {
			var comp = _IFComponentManager2.default.get(key);
			var value = comp.getValue();
			model[key] = value;
		});

		// 如果失败， 返回1作为错误标识
		// return {
		// 	code: 1,
		// 	message: 'ERROR while executing VALIDATE_FORM'
		// };
	},
	SUBMIT_FORM: function SUBMIT_FORM(componentId, _ref6, ev) {
		var expr = _ref6.expr,
		    target = _ref6.target;

		var model = {};
		target.map(function (key) {
			var comp = _IFComponentManager2.default.get(key);
			var value = comp.getValue();
			model[key] = value;
		});

		_antd.message.info('Submitting form model..' + (0, _stringify2.default)(model));

		_CommitEngine2.default.submitForm(model);
	}

};

var IFActionManager = function () {
	function IFActionManager() {
		(0, _classCallCheck3.default)(this, IFActionManager);
	}

	(0, _createClass3.default)(IFActionManager, null, [{
		key: 'execute',
		value: function execute(componentId, actionList) {

			var pre = void 0;
			actionList.map(function (action) {
				var type = action.type,
				    expr = action.expr,
				    target = action.target;

				var actionType = type.split(':')[1];

				pre = IFActionManager.dispatchAction(actionType, componentId, {
					expr: expr,
					target: target
				});

				if (pre && pre.message) {

					_antd.message.error(pre.message);

					throw new Error('Error occurs in pre dispaching action');
				}
			});
		}
	}, {
		key: 'dispatchAction',
		value: function dispatchAction(actionType, componentId, actionOptions) {
			console.log('dispaching action::' + actionType);
			return ActionStretagies[actionType](componentId, actionOptions);
		}
	}]);

	return IFActionManager;
}();

exports.default = IFActionManager;