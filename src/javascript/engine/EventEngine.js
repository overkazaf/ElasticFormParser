export default class EventEngine {

	static buildEventHandlers(props) {

		let {
			eventList,
		} = props;

		let handler = {};


		eventList.map((evtObj) => {
			handler[evtObj.type] = EventFactory.create(evtObj.type, evtObj.options)
		});

		return handler;
	}
}


const eventMap = {
	'onClick': (options) => {
		return () => {
			console.log('onClick', ...options);
		};
	},
	'onChange': (options) => {
		let params = options;
		return (ev) => {
			console.log('onChange', ev.target.value);
		}
	},
}

class EventFactory {
	static create(type, options = []) {
		return eventMap[type](options);
	}
}