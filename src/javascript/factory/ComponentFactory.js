import { 
	Menu, 
	Dropdown, 
	Button, 
	Icon, 
	message,
	InputNumber,
	Input,
	DatePicker,
	TreeSelect,
	Table,
	Popconfirm,
} from 'antd';


import ComponentManager from '../manager/IFComponentManager.js';
import moment from 'moment';
import EventEngine from '../engine/EventEngine';
import EditableTable from '../components/EditableTable/index.js';

import IFInputNumber from '../components/IFComponents/IFInputNumber/index.js';

let { 
	RangePicker,
} = DatePicker;

let { 
	TreeNode, 
} = TreeSelect;

const AntdComponents = {
	input: (option) => {
		let evtHandlers = EventEngine.buildEventHandlers(option);

		let {
			prefix,
			subfix,
			addonBefore,
			addonAfter,
			defaultValue,
			value,
		} = option;

		return (
			<Input 
				 ref={option.id}
				 placeholder="input search text"
				 addonBefore={addonBefore}
				 addonAfter={addonAfter}
				 size={'large'}
				 value={value}
				 defaultValue={defaultValue}
				 {...evtHandlers}
			/>
		)
	},
	inputNumber: (option) => <IFInputNumber ref={option.id} option={option} />,
	select: (option) => {
		function handleMenuClick({ key }) {
		  message.info(`Click on menu item ${key}.`);
		}

		const menu = (
		  <Menu 
		  	ref={option.id}
		  	defaultSelectedKeys={['2']}
		  	onClick={handleMenuClick}
		  >
		    {option.baseData.map((item, index) => {
		    	return (
		    		<Menu.Item key={index} value={item.value}>{item.label}</Menu.Item>
		    	)
		    })}
		  </Menu>
		);

		return (
			<Dropdown overlay={menu}>
		      <Button 
		      	ref={option.id}
		      	size={'large'}
		      	style={{ marginLeft: 8 }}>
		        {option.label} <Icon type="down" />
		      </Button>
		    </Dropdown>
		)
	},
	button: (option) => {
		let evtHandlers = EventEngine.buildEventHandlers(option);
		return (
			<Button 
				ref={option.id}
				ghost
			    size={'large'}
				type="primary"
				{...evtHandlers}
			>
				{option.label}
			</Button>
		)
	},
	submit: (option) => {
		let evtHandlers = EventEngine.buildEventHandlers(option);
		function handleSubmit({ key }) {
		  message.success(`Ready to commit form`);
		}
		return (
			<Button 
				ref={option.id}
				ghost
			    size={'large'}
				type="primary"
				onClick={handleSubmit}
			>
				{option.label}
			</Button>
		)
	},
	rangePicker: (option) => {
		const dateFormat = 'YYYY/MM/DD';

		return (
			<RangePicker
			  ref={option.id}
			  size={'large'}
		      defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
		      format={dateFormat}
		    />
		)
	},
	treeSelect: () => {
		let value = undefined;
		let onChange = (e) => {
			console.log('eee', e);
		};

		return (
			<TreeSelect
				size={'large'}
		        showSearch
		        style={{ width: '100%' }}
		        value={value}
		        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
		        placeholder="Please select"
		        allowClear
		        treeDefaultExpandAll
		        onChange={onChange}
		      >
		        <TreeNode value="parent 1" title="parent 1" key="0-1">
		          <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
		            <TreeNode value="leaf1" title="my leaf" key="random" />
		            <TreeNode value="leaf2" title="your leaf" key="random1" />
		          </TreeNode>
		          <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
		            <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
		          </TreeNode>
		        </TreeNode>
		      </TreeSelect>
		)
	},
	editableTable: (option) => {
		return (
			<EditableTable />
		)
	} 
}



export default
class ComponentFactory {

	static create(type, option) {
		return AntdComponents[type](option);
	}

}