import { Component } from 'react';

import {
	Button,
} from 'antd';

import ComponentManager from '../../../manager/IFComponentManager.js';

import Util from '../../../../javascript/util/Util.js';

import Immutable from 'immutable';

import mitt from 'mitt';

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
		let { eventList } = this.state.option;
		let ifEventMap = {};

		emmiter.on(`${this.state.option.id}-onClick`, ({
			eventList,
		}) => {
			if (eventList) {
				let { options } = eventList;

				if (options) {

					let {
						action,
						target,
					} = options;

					target.map((t) => {
						if (action === 'ShowOrHide') {
							let $target = ComponentManager.getComponent(t);							
							let visibility = $target.getFieldValue('visibility');

							$target.setFieldValue({
								visibility: !visibility,
							});
						} else if (action === 'LockOrUnlock') {
							let $target = ComponentManager.getComponent(t);
							let locked = $target.getFieldValue('locked');

							$target.setFieldValue({
								locked: !locked,
							});
						}
					});
				}

			}

		});

		let onClickEventList = this.state.option.eventList.filter((item) => {
			return item.eventType === 'onClick';
		})[0];

		let compId = this.state.option.id;

		ifEventMap['onClick'] = (ev) => {
			emmiter.emit(`${compId}-onClick`, {
				eventList: onClickEventList,
			});
		};

		this.setState({
			ifEventMap,
		});

	}


	getDataModel() {

	}

	render() {

		let {
			option,
			ifEventMap,
		} = this.state;

		let {
			label,
			visibility,
		} = option;

		let {
			onClick,
		} = ifEventMap;


		return (
			<Button 
				ghost
			    size={'large'}
				type="primary"

				onClick={onClick || null}
			>
				{option.label}
			</Button>
		)
	}
}