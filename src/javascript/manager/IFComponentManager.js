
const componentMap = {};
const componentList = [];
const componentKeys = [];

export default
class IFComponentManager {
	static register(id, component) {
		try {
			componentKeys.push(id);
			componentMap[id] = component;
			componentList.push(component);
		} catch(e) {
			return false;
		}

		return true;
	}

	static keys() {
		return componentKeys;
	}

	static list() {
		componentList.map(console.log);

		return componentList;
	}

	static get(id) {
		return componentMap[id];
	}
}