export default class EventEngine {

	static buildEventHandlers(props) {

		let {
			eventList,
		} = props;

		let handler = {};

		eventList.map((evtObj) => {
			handler[evtObj.eventType] = EventFactory.create(evtObj.eventType, evtObj.options)
		});

		return handler;
	}

	static subscribeEvent(refs) {

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
		console.log('creating event:', type);
		return eventMap[type](options);
	}
}