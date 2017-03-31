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
	Radio,
} from 'antd';


import ComponentManager from '../manager/IFComponentManager.js';
import moment from 'moment';
import EventEngine from '../engine/EventEngine';
import EditableTable from '../components/EditableTable/index.js';

import IFInputNumber from '../components/IFComponents/IFInputNumber/index.js';
import IFButton from '../components/IFComponents/IFButton/index.js';
import IFDropdown from '../components/IFComponents/IFDropdown/index.js';

let { 
	RangePicker,
} = DatePicker;

let RadioGroup = Radio.Group;

let { 
	TreeNode, 
} = TreeSelect;


let treeValue = undefined;

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
	IFInputNumber: (option) => <IFInputNumber ref={option.id} option={option} />,
	IFDropdown: (option) => <IFDropdown ref={option.id} option={option} />,
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
	IFButton: (option) => <IFButton ref={option.id} option={option} />,
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
	RadioGroup: (option) => {
		let {
			baseData,
		} = option;

		return (
		  <RadioGroup value={option.value}>
	        {
	        	baseData.map((item) => {
	        		return (
						<Radio value={item.value}>{item.name}</Radio>
	        		)
	        	})
	    	}
	      </RadioGroup>
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
	treeSelect: (option) => {
		let onChange = (e) => {
			console.log('eee', e);
			treeValue = e;
		};

		return (
			<TreeSelect
				size={'large'}
		        showSearch
		        style={{ width: '100%' }}
		        value={treeValue}
		        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
		        placeholder="Please select"
		        allowClear
		        treeDefaultExpandAll
		        onChange={onChange}
		      >
		        <TreeNode value="兔巢科技" title="兔巢科技" key="0-1">
		          <TreeNode value="UED中心" title="UED中心" key="0-1-1">
		            <TreeNode value="人员一" title="人员一" key="random" />
		          </TreeNode>
		          <TreeNode value="平台研发中心" title="平台研发中心" key="random2">
		            <TreeNode value="人员二" title={<b style={{ color: '#08c' }}>人员二</b>} key="random3" />
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