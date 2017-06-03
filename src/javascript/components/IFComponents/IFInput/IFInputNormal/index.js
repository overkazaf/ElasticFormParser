import IFComponentBase from '../../IFComponentBase/index.js';
import Immutable from 'immutable';

import {
	Input,
	Form,
	Icon,
} from 'antd';
import Util from '../../../../utils/Util.js';
import _ from 'lodash';

const FormItem = Form.Item;

export default
class IFInputNormal extends IFComponentBase {
	constructor(props) {
	  super(props);
	}

	changeValue({ target }) {
		// calling prototype class
		
		this.setValue(target.value, () => {
			this.validateField();
		});
	}

	validateField() {
		
	}

	render() {

		let {
			option,
		} = this.state;
	
		let model = Util.parseDataModel(option);
		let {
			size, theme, label, fontFamily, fontSize, lineHeight, textAlign, visibility, locked, mustInput,
			defaultValue, value, link, linkTarget, placeholder, carry,
			addonBefore, addonAfter, prefix, suffix,
			extraStyle,
		} = model;

		if (!visibility) {
			return ( <div></div> )
		}
	
		return (
			<FormItem
				label={label}
				required={!!mustInput}
			>
				<Input 
					 placeholder={placeholder}
					 addonBefore={addonBefore}
					 addonAfter={addonAfter}
					 suffix={suffix}
					 prefix={prefix}
					 disabled={!!locked}
					 size={size || 'large'}
					 value={value}
					 defaultValue={defaultValue}
					 onChange={_.throttle(this.changeValue.bind(this), 200)}
				/>
			</FormItem>
		)
	}
}