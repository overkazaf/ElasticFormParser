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

var _Util = require('../util/Util.js');

var _Util2 = _interopRequireDefault(_Util);

var _mathjs = require('mathjs');

var _mathjs2 = _interopRequireDefault(_mathjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * [ActionStretagies 动作策略类，在这里实现不同的策略]
 * @type {Object}
 */
var ActionStretagies = {
	UpdateValue: function UpdateValue(componentId, _ref, ev) {
		var action = _ref.action,
		    params = _ref.params,
		    expression = _ref.expression,
		    target = _ref.target;

		console.log('ev', ev);
		_IFComponentManager2.default.get(componentId).setValue(ev.target.value);
	},
	SetToTarget: function SetToTarget(componentId, _ref2, ev) {
		var action = _ref2.action,
		    params = _ref2.params,
		    expression = _ref2.expression,
		    target = _ref2.target;

		// 变量占位符
		target.map(function (t) {
			var expRE = /\$\{(.*?)\}/g;
			if (_Util2.default.isExisty(expression)) {
				if (expRE.test(expression)) {
					expression = expression.replace(expRE, function (matched, compId) {
						return _IFComponentManager2.default.get(compId).getValue() || 0;
					});
				}

				console.log('expression ' + _mathjs2.default.eval(expression));
				_IFComponentManager2.default.get(t).setValue(_mathjs2.default.eval(expression));
			}
		});
	},
	TEST: function TEST(componentId, _ref3, ev) {
		var action = _ref3.action,
		    params = _ref3.params,
		    expression = _ref3.expression,
		    target = _ref3.target;

		console.log('inside TEST Action');
	},
	CommitForm: function CommitForm(componentId, _ref4, ev) {
		var action = _ref4.action,
		    params = _ref4.params,
		    expression = _ref4.expression,
		    target = _ref4.target;

		console.log('commiting');

		var models = _IFComponentManager2.default.list().map(function (item) {
			return item.getFieldValues(['id', 'name', 'value', 'ctrlType', 'dataSource']);
		});

		console.log('models', models);
	},
	LockOrUnlock: function LockOrUnlock(componentId, _ref5, ev) {
		var action = _ref5.action,
		    params = _ref5.params,
		    expression = _ref5.expression,
		    target = _ref5.target;

		target.map(function (t) {
			var $comp = _IFComponentManager2.default.get(t);

			var locked = $comp.getFieldValue('locked');

			$comp.setFieldValue({
				locked: !locked
			});
		});
	},
	ShowOrHide: function ShowOrHide(componentId, _ref6, ev) {
		var action = _ref6.action,
		    params = _ref6.params,
		    expression = _ref6.expression,
		    target = _ref6.target;

		target.map(function (t) {
			var $comp = _IFComponentManager2.default.get(t);

			var visibility = $comp.getFieldValue('visibility');

			$comp.setFieldValue({
				visibility: !visibility
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
		value: function execute(componentId, actionOptions) {
			var action = actionOptions.action,
			    params = actionOptions.params,
			    expression = actionOptions.expression,
			    target = actionOptions.target;

			IFActionManager.dispatchAction(action, componentId, actionOptions);
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