import { Component } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';

const { is } = Immutable;

export default
class IFComponentBase extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	option: props.option,
	  	eventMap: {},
	  };
	}

	componentDidMount() {
		this._buildEventMap();
	}

	_buildEventMap() {
		let {
			option: {
				eventList,
			},
		} = this.props;

		let eventMap = {};
		eventList.map((evtObj) => {
			let {
				eventType,
				actionList,
			} = evtObj;
			
			eventMap[eventType] = actionList;
		});

		this.setState({
			eventMap,
		});
	}

	getFieldValue(keyPath) {
		let { 
			option: {
				basicProps,
			},
		} = this.state;

		let target;
		let pre = basicProps;
		keyPath.map((key) => {
			target = pre[key];
			pre = target;
		})

		return target;
	}

	setFieldValue(fields, callback = () => {}) {
		let {
			option,
		} = this.state;

		let newOption = _.merge(option, {
			basicProps: {
				...fields,
			}
		});

		this.setState({
			option: newOption,
		}, () => {
			callback();
		});
	}

	getFieldsValue(keyPathMap) {
		let valueObj = {};

		Object.keys(keyPathMap).map((keyName) => {
			let keyPath = keyPathMap[keyName];
			valueObj[keyName] = this.getFieldValue(keyPath);
		});

		return valueObj;
	}

	getValue() {
		return this.getFieldValue(['inputValue', 'value', 'value']);
	}

	setValue(value, callback) {
		this.setFieldValue({
			inputValue: {
				value: {
					value,
				},
			},
		}, callback);
	}

	componentWillReceiveProps(nextProps) {
		console.log('IFComponentBase received', nextProps);
		let newState = Object.assign(this.state.option, nextProps.option);

		this.setState({
			option: newState,
		}, console.log(this.state.option))
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true;

		return !(this.props === nextProps || is(this.props, nextProps)) 
			|| !(this.state === nextState || is(this.state, nextState));
	}
	
	render() {
		return (
			<div>
				<h1>Warning</h1>
				<p style={{ color: 'red' }}>You need to override the IFComponentBase Class in your SubClass</p>
			</div>
		)
	}
}