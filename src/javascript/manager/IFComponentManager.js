
const componentMap = {};
const componentList = [];

export default
class IFComponentManager {
	static register(id, component) {
		componentMap[id] = component;
		componentList.push(component);
	}

	static listComponents() {
		componentList.map(console.log);

		// Object.keys(componentMap).map((key) => {
		// 	console.log('key', key, 'comp', componentMap[key]);
		// });
	}

	static getComponent(id) {
		return componentMap[id];
	}
}