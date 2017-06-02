import ComponentManager from './IFComponentManager.js';
import Util from '../utils/Util.js';
import mathjs from 'mathjs';

import CommitEngine from '../engine/CommitEngine.js';

/**
 * [ActionStretagies 动作策略类，在这里实现不同的策略]
 * @type {Object}
 */
const ActionStretagies = {
	HIDE_ELEM: (componentId, {
		expr, 
		target,
	}, ev) => {
		target.map((key) => {
			let comp = ComponentManager.get(key);
			console.log('target key::', key);
			
			comp.setFieldValue({
				formStatus: {
					visibility: {
						value: false,
					},
				},
			});
		});
	},
	SHOW_ELEM: (componentId, {
		expr, 
		target,
	}, ev) => {
		target.map((key) => {
			let comp = ComponentManager.get(key);
			console.log('target key::', key);
			comp.setFieldValue({
				formStatus: {
					visibility: {
						value: true,
					},
				},
			});
		});
	},
	// UpdateValue: (componentId, {
	// 	action,
	// 	params,
	// 	expression,
	// 	target,
	// }, ev) => {
	// 	ComponentManager.get(componentId).setValue(ev.target.value);
	// },
	// SetToTarget: (componentId, {
	// 	action,
	// 	params,
	// 	expression,
	// 	target,
	// }, ev) => {
	// 	// 变量占位符
	// 	target.map((t) => {
	// 		let expRE = /\$\{(.*?)\}/g;
	// 		if (Util.isExisty(expression)) {
	// 			if (expRE.test(expression)) {
	// 				expression = expression.replace(expRE, function(matched, compId) {
	// 					return ComponentManager.get(compId).getValue() || 0;
	// 				});
	// 			}

	// 			console.log(`expression ${mathjs.eval(expression)}`);
	// 			ComponentManager.get(t).setValue(mathjs.eval(expression));
	// 		}
	// 	});
	// },
	// TEST: (componentId, {
	// 	action,
	// 	params,
	// 	expression,
	// 	target,
	// }, ev) => {
	// 	console.log('inside TEST Action');
	// },
	// CommitForm: (componentId, {
	// 	action,
	// 	params,
	// 	expression,
	// 	target,
	// }, ev) => {
	// 	console.log('commiting');

	// 	let models = ComponentManager.list().map((item) => {
	// 		return item.getFieldValues(['id', 'name', 'value', 'ctrlType', 'dataSource']);
	// 	});

	// 	if (CommitEngine.validateForm(models)) {
	// 		CommitEngine.commitForm(models);
	// 	} else {
	// 		ComponentManager.get('__message__');
	// 	}
	// },
	// LockOrUnlock: (componentId, {
	// 	action,
	// 	params,
	// 	expression,
	// 	target,
	// }, ev) => {
	// 	target.map((t) => {
	// 		let $comp = ComponentManager.get(t);

	// 		let locked = $comp.getFieldValue('locked');

	// 		$comp.setFieldValue({
	// 			locked: !locked,
	// 		});
	// 	});
	// },
	// ShowOrHide: (componentId, {
	// 	action,
	// 	params,
	// 	expression,
	// 	target,
	// }, ev) => {
	// 	target.map((t) => {
	// 		let $comp = ComponentManager.get(t);

	// 		let visibility = $comp.getFieldValue('visibility');

	// 		$comp.setFieldValue({
	// 			visibility: !visibility,
	// 		});
	// 	});
	// }
};


export default
class IFActionManager {
	static execute(componentId, actionList) {

		actionList.map((action) => {
			let {
				type,
				expr,
				target,
			} = action;

			let actionType = type.split(':')[1];

			IFActionManager.dispatchAction(actionType, componentId, {
				expr,
				target,
			});
		});
	}


	static dispatchAction(actionType, componentId, actionOptions) {
		ActionStretagies[actionType](componentId, actionOptions);
	}

}