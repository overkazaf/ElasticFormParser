import ActionManager from '../manager/IFActionManager.js';
import ComponentManager from '../manager/IFComponentManager.js';
import Util from '../utils/Util.js';
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
		});

		eventList && eventList.map((evtObj) => {
			
			let {
				eventType,
				actionList,
			} = evtObj;

			let currentEvent = `${id}-${eventType}`;

			eventMap[eventType] = (e) => {
				emmiter.emit(`${currentEvent}`, {
					ev: e,
					actionList,
				});
			};

			emmiter.on(`${currentEvent}`, ({
				ev,
				actionList,
			}) => {
				let callback = () => {};

				if (Util.isExisty(actionList)) {
					callback = () => {
						ActionManager.execute(id, actionList, ev);
					};
				} else {
					throw new Error('Null parameters found while executing emmiter');
				}

				ComponentManager.get(id).setFieldValue({
					inputValue: {
						value: {
							value: ev.target.value ? ev.target.value : '', // 如果有值的话可以直接设置
						},
					},
				}, callback);
			});

			component.setState({
				eventMap,
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
