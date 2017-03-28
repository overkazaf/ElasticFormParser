import { 
	Menu, 
	Dropdown, 
	Button, 
	Icon, 
	message,
	InputNumber,
} from 'antd';

import EventEngine from '../engine/EventEngine';


const componentList = [];
const componentMap = {};

const AntdComponents = {
	input: (option) => {
		let evtHandlers = EventEngine.buildEventHandlers(option);

		console.log('evtHandlers', evtHandlers);
		return (
			<InputNumber 
				 min={1} 
				 max={10} 
				 defaultValue={3}
				 {...evtHandlers}
			/>
		)
	},
	select: (option) => {
		function handleMenuClick(e) {
		  message.info('Click on menu item.');
		  console.log('click', e);
		}

		const menu = (
		  <Menu onClick={handleMenuClick}>
		    <Menu.Item key="1">1st menu item</Menu.Item>
		    <Menu.Item key="2">2nd menu item</Menu.Item>
		    <Menu.Item key="3">3d menu item</Menu.Item>
		  </Menu>
		);

		return (
			<Dropdown overlay={menu}>
		      <Button style={{ marginLeft: 8 }}>
		        Button <Icon type="down" />
		      </Button>
		    </Dropdown>
		)
	},
	button: (option) => {
		let evtHandlers = EventEngine.buildEventHandlers(option);
		return (
			<Button 
				type="primary"
				{...evtHandlers}
			>
				{option.label}
			</Button>
		)
	}
}


export default
class ComponentFactory {

	static create(type, option) {
		let comp = AntdComponents[type](option);

		componentList.push(comp);
		
		if (!componentMap[type]) {
			componentMap[type] = [];
		}
		componentMap[type].push(comp);

		return comp;
	}

}