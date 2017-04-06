
const componentMap = {};
const componentList = [];

export default
class IFComponentManager {
	static register(id, component) {
		try {
			componentMap[id] = component;
			componentList.push(component);
		} catch(e) {
			return false;
		}

		return true;
	}

	static list() {
		componentList.map(console.log);

		return componentList;
	}

	static get(id) {
		return componentMap[id];
	}
}