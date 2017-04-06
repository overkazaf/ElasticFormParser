import ComponentManager from './IFComponentManager.js';
import Util from '../util/Util.js';
import mathjs from 'mathjs';


/**
 * [ActionStretagies 动作策略类，在这里实现不同的策略]
 * @type {Object}
 */
const ActionStretagies = {
	UpdateValue: (componentId, {
		action,
		params,
		expression,
		target,
	}, ev) => {
		console.log('ev', ev);
		ComponentManager.get(componentId).setValue(ev.target.value);
	},
	SetToTarget: (componentId, {
		action,
		params,
		expression,
		target,
	}, ev) => {
		// 变量占位符
		console.log('setToTarget', target);
		target.map((t) => {
			let expRE = /\$\{(.*?)\}/g;
			if (Util.isExisty(expression)) {
				if (expRE.test(expression)) {
					expression = expression.replace(expRE, function(matched, compId) {
						return ComponentManager.get(compId).getValue() || 0;
					});
				}

				console.log(`expression ${mathjs.eval(expression)}`);
				ComponentManager.get(t).setValue(mathjs.eval(expression));
			}
		});
	},
	TEST: (componentId, {
		action,
		params,
		expression,
		target,
	}, ev) => {
		console.log('inside TEST Action');
	},
	CommitForm: (componentId, {
		action,
		params,
		expression,
		target,
	}, ev) => {
		console.log('commiting');

		let models = ComponentManager.list().map((item) => {
			console.log('item.getDataModel()', item.getDataModel());
			return item.getDataModel();
		});

		console.log('models', models);
	}
};


export default
class IFActionManager {
	static execute(componentId, actionOptions) {
		let {
			action,
			params,
			expression,
			target,
		} = actionOptions;

		IFActionManager.dispatchAction(action, componentId, actionOptions);
	}


	static dispatchAction(actionType, componentId, actionOptions) {
		ActionStretagies[actionType](componentId, actionOptions);
	}

}