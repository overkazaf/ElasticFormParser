import { Component } from 'react';

import {
	Input,
} from 'antd';

import ComponentManager from '../../../manager/IFComponentManager.js';

import Util from '../../../../javascript/util/Util.js';

import Immutable from 'immutable';

import mitt from 'mitt';
import mathjs from 'mathjs';

let emmiter = mitt();
export default
class IFInputNumber extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	option: props.option,
	  	ifEventMap: {},
	  };
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.option != null) {
			this.setState({
				option: nextProps.option,
			});
		}
	}

	componentDidMount() {
		// binding event here
		console.log('IFInputNumber mounted', this.state.option);

		let { eventList } = this.state.option;
		let ifEventMap = {};

		emmiter.on(`${this.state.option.id}-onChange`, ({
			value,
			eventList,
		}) => {
			let callback = () => {};

			if (Util.isExisty(eventList)) {
				callback = () => {
					let { options } = eventList;
					
					if (options) {
						let {
							action,
							params,
							expression,
							target,
						} = options;

						target.map((t) => {
							if (action === 'SetToTarget') {
								// let values = params.map((compId) => {
								// 	return ComponentManager.getComponent(compId).getValue();
								// });
								// let sum = values.reduce((prev, current) => {
								// 	return prev * current;
								// }, 1);
								
								let expRE = /\$\{(.*?)\}/g;
								if (expression && expRE.test(expression)) {
									expression = expression.replace(expRE, function(matched, compId) {
										return ComponentManager.getComponent(compId).getValue() || 0;
									})

									console.log('expression', expression);

									ComponentManager.getComponent(t).setValue(mathjs.eval(expression));

								}
							}
						});

						
					}
				}
			}

			this.setValue(value, callback);

		});

		let onChangeEventList = this.state.option.eventList.filter((item) => {
			return item.eventType === 'onChange';
		})[0];

		let compId = this.state.option.id;

		ifEventMap['onChange'] = (ev) => {
			emmiter.emit(`${compId}-onChange`, {
				value: ev.target.value,
				eventList: onChangeEventList,
			});
		};

		this.setState({
			ifEventMap,
		});

	}

	setFieldValue(json, callback) {
		let newOption = Util.deepClone(this.state.option);
		for (let field in json) {
			newOption[field] = json[field];
		}

		this.setState({
			option: newOption,
		}, () => {
			callback && callback();
		});
	}

	getFieldValue(field) {
		return this.state.option[field];
	}

	getValue() {
		return this.getFieldValue('value');
	}

	setValue(value, callback) {
		this.setFieldValue({
			value,
		}, callback);
	}

	getDataModel() {

	}

	render() {

		let {
			option,
			ifEventMap,
		} = this.state;

		let {
			prefix,
			subfix,
			addonBefore,
			addonAfter,
			defaultValue,
			value,
			locked,
			visibility,
		} = option;

		let {
			onClick,
			onChange,
			onKeyUp,
			onKeyDown,
		} = ifEventMap;

		if (!visibility) {
			return <div></div>;
		}

		return (
			<Input 
				 placeholder="input search text"
				 addonBefore={addonBefore}
				 addonAfter={addonAfter}
				 disabled={!!locked}
				 size={'large'}
				 value={value}
				 defaultValue={defaultValue}

				 onClick={onClick || null}
				 onChange={onChange || null}
				 onKeyUp={onKeyUp || null}
				 onKeyDown={onKeyDown || null}
			/>
		)
	}
}