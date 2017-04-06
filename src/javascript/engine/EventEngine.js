import ActionManager from '../manager/IFActionManager.js';
import ComponentManager from '../manager/IFComponentManager.js';
import Util from '../util/Util.js';
import mitt from 'mitt';

let emmiter = mitt();


export default class EventEngine {

	static subscribe(component, { option }, callbackFunction) {

		let eventMap = {};
		let {
			id,
			eventList,
		} = option;

		// Event system based on React Event System
		// see http://reactjs.cn/react/docs/events.html
		[
			// keyboard events
			'onKeyPress', 'onKeyUp', 'onKeyDown',

			// focus events
			'onFocus', 'onBlur',

			// form events
			'onChange', 'onInput', 'onSubmit',

			// mouse events
			'onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit',
			'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave',
			'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp',

			// touch events
			'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart',

			// user events
			'onScroll',

			// wheel events
			'onWheel',
		].map((eventName) => {

			// let currentEvent = `${id}-${eventName}`;

			// let eventOption = eventList.filter((item) => {
			// 						return item.eventType === eventName;
			// 					})[0];
			// if (!Util.isExisty(eventOption)) {
			// 	return;
			// }

			// eventMap[eventName] = (ev) => {
			// 	emmiter.emit(`${currentEvent}`, {
			// 		value: ev.target.value,
			// 		eventOption,
			// 	});
			// };

			// emmiter.on(`${currentEvent}`, ({
			// 	value,
			// 	eventOption,
			// }) => {
			// 	let callback = () => {};

			// 	if (Util.isExisty(eventOption) && Util.isExisty(eventOption.options)) {
			// 		callback = () => {
			// 			ActionManager.execute(id, eventOption.options);
			// 		};
			// 	} else {
			// 		throw new Error('Null parameters found while executing emmiter');
			// 	}

			// 	component.setValue(value, callback);
			// });
		});

		eventList.map((evtObj) => {
			let {
				eventType,
				options,
			} = evtObj;

			let currentEvent = `${id}-${eventType}`;

			console.log(`currentEvent : ${currentEvent}`);

			eventMap[eventType] = (ev) => {
				emmiter.emit(`${currentEvent}`, {
					ev,
					options,
				});
			};

			emmiter.on(`${currentEvent}`, ({
				ev,
				options,
			}) => {
				let callback = () => {};

				if (Util.isExisty(options)) {
					callback = () => {
						ActionManager.execute(id, options, ev);
					};
				} else {
					throw new Error('Null parameters found while executing emmiter');
				}

				// console.log(`callback , ${JSON.stringify(callback)}`);

				ComponentManager.get(id).setValue(ev.target.value, callback)
			});
		});
		

		callbackFunction && callbackFunction(eventMap);
	}

	static unsubscribe(componentId, eventMap) {
		Object.keys(eventMap).map((eventName) => {
			let listener = `${componentId}-${eventName}`;
			console.log('Unsubscribing event:' + listener);

			emmiter.off(listener);
		});
	}
}
