import EventEngine from '../engine/EventEngine';

import IFComponents from '../components/IFComponents';

let {
	IFInputNumber,
	IFDropdown,
	IFButtonNormal,
} = IFComponents;

const AntdComponents = {
	//IFInput:(option) => <IFInputNumber ref={option.id} option={option} />,
	IFInputNumber: (option) => <IFInputNumber ref={option.id} option={option} />,
	IFDropdown: (option) => <IFDropdown ref={option.id} option={option} />,
	IFButtonNormal: (option) => <IFButtonNormal ref={option.id} option={option} />,
	//IFSubmit: (option) => <IFRadioGroup ref={option.id} option={option} />,
	//IFRadioGroup:  (option) => <IFRadioGroup ref={option.id} option={option} />,
	//IFRangePicker: (option) => <IFTreeSelect ref={option.id} option={option} />,
	//IFTreeSelect: (option) => <IFTreeSelect ref={option.id} option={option} />,
	//IFSmartTable: (option) => <IFSmartTable ref={option.id} option={option} />,
}




export default
class ComponentFactory {

	static create(type, option) {
		return AntdComponents[type](option);
	}

}