import IFComponentBase from '../../IFComponentBase/index.js';
import Immutable from 'immutable';

import {
	Input,
	Form,
	Icon,
	message,
} from 'antd';
import Util from '../../../../utils/Util.js';
import _ from 'lodash';

const FormItem = Form.Item;

class IFInputPhone extends IFComponentBase {
	constructor(props) {
	  super(props);

	  this.state = {
	  	option: props.option,
	  	eventMap: {},
	  	validateStatus: "",
	  };
	}

	changeValue({ target }) {
		// calling prototype class
		
		this.setValue(target.value, () => {
			this.validateField();
		});
	}

	validateField() {
		let re = /1[3|5|7|8|][0-9]{9}/;
		let digitReg = /\d+/;
		let phoneNumber = this.getValue();
		let validateStatus;

		if (phoneNumber.length < 11) {
			if (!digitReg.test(phoneNumber)) {
				validateStatus = 'error';
			} else {
				validateStatus = 'warning';
			}				
		} else {
			validateStatus = 'error';

			if (phoneNumber.length === 11 && re.test(phoneNumber)) {
				validateStatus = 'success';
			}
		}

		this.setState({
			validateStatus,
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

		let fontStyleObj = {
			fontSize,
			fontFamily,
			lineHeight,
			...extraStyle,
		};

		if (!visibility) {
			return (
				<div></div>
			)
		}

		console.log('option', option);

		return (
			<FormItem
				label={label}
				required={mustInput}
				validateStatus={validateStatus}
				hasFeedback={true}
			>
			<Input 
				placeholder={placeholder}
				addonBefore={addonBefore}
				addonAfter={addonAfter}
				suffix={suffix}
				prefix={prefix}
				disabled={!!locked}
				value={value}
				defaultValue={defaultValue}
				onChange={_.throttle(this.changeValue.bind(this), 200)}
				onBlur={_.throttle(this.validateField.bind(this), 200)}
				size={size || 'large'}
			/>
			</FormItem>
		)
	}
}

export default IFInputPhone;

// const wrappedIFInputPhone = Form.create({})(IFInputPhone);

// export default wrappedIFInputPhone;