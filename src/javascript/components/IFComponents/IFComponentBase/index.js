import { Component } from 'react';
import Util from '../../../util/Util.js';
import Immutable from 'immutable';

const { is } = Immutable;

export default
class IFComponentBase extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	option: Immutable.fromJS(props.option),
	  	eventMap: {},
	  };
	}

	getFieldValue(field) {
		console.log('this.state.option in IFComponentBase', this.state.option);
		return this.state.option.get(field).toJS();
	}

	setFieldValue(json, callback = () => {}) {
		let $$option = this.state.option;

		Object.keys(json).map((field) => {
			$$option = $$option.set(field, json[field]);
		});

		this.setState({
			option: $$option,
		}, callback);
	}

	getValue() {
		return this.getFieldValue('value');
	}

	setValue(value, callback) {
		this.setFieldValue({
			value,
		}, callback);
	}


	shouldComponentUpdate(nextProps, nextState) {
		return !(this.props === nextProps || is(this.props, nextProps)) 
			|| !(this.state === nextState || is(this.state, nextState));
	}

	componentWillUnmount() {
		console.log('unmount');

		console.log('unmount event listerner');
	}

	render() {
		return (
			<div>
				You need to override the IFComponentBase Class in your SubClass
			</div>
		)
	}
}