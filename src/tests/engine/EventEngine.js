export default class EventEngine {

	buildEventHandlers(props) {

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
		reutrn () => {
			console.log('onClick', ...options);
		}
	},
}

class EventFactory {
	create(type, options) {
		return eventMap[type](options);
	}
}