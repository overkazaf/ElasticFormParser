import IFComponentBase from '../../IFComponentBase/index.js';

import {
	Input,
} from 'antd';

import Util from '../../../../../javascript/util/Util.js';

export default
class IFInputNumber extends IFComponentBase {
	constructor(props) {
	  super(props);
	}

	getDataModel() {

	}

	render() {

		let {
			option,
			eventMap,
		} = this.state;

		let {
			placeholder,
			prefix,
			subfix,
			addonBefore,
			addonAfter,
			defaultValue,
			value,
			locked,
			visibility,
		} = option.toJS();

		let {
			onClick,
			onChange,
			onKeyUp,
			onKeyDown,
		} = eventMap;

		if (!visibility) {
			return <div></div>;
		}

		return (
			<Input 
				 placeholder={placeholder}
				 addonBefore={addonBefore}
				 addonAfter={addonAfter}
				 disabled={!!locked}
				 size={'large'}
				 value={value}
				 defaultValue={defaultValue}

				 onClick={onClick ? onClick.bind(this, event) : null}
				 onChange={onChange ? onChange.bind(this, event) : null}
				 onKeyUp={onKeyUp ? onKeyUp.bind(this, event) : null}
				 onKeyDown={onKeyDown ? onKeyDown.bind(this, event) : null}
			/>
		)
	}
}