import IFComponentBase from '../../IFComponentBase/index.js';

import {
	InputNumber,
	Form,
	Icon,
} from 'antd';
import Util from '../../../../utils/Util.js';
import _ from 'lodash';

const FormItem = Form.Item;

export default
class IFInputNumber extends IFComponentBase {
	constructor(props) {
	  super(props);

	  this.state = {
	  	option: props.option,
	  	eventMap: {},
	  };
	}

	changeValue(value) {
		// calling prototype class
		// this input param is different from the value passed in Input Component

		this.setValue(value, () => {
			
		});
	}

	render() {

		let {
			option,
			validateStatus,
		} = this.state;
	
		let model = Util.parseDataModel(option);
		let {
			size, theme, label, fontFamily, fontSize, lineHeight, textAlign, visibility, locked, mustInput,
			defaultValue, value, link, linkTarget, placeholder, carry,
			addonBefore, addonAfter, prefix, suffix,
			extraStyle,
		} = model;

		if (!visibility) {
			return (
				<div></div>
			)
		}
	
		return (
			<FormItem
				label={label}
				required={!!mustInput}
				validateStatus={validateStatus}
				hasFeedback={true}
			>
				<InputNumber 
					 min={-Infinity}
					 max={Infinity}
					 prefix={prefix}
					 suffix={suffix}
					 step={1}
					 disabled={!!locked}
					 size={size}
					 value={value}
					 defaultValue={defaultValue}
					 onChange={_.throttle(this.changeValue.bind(this), 200)}
					 style={{ width: '100%' }}
				/>
			</FormItem>
		)
	}
}