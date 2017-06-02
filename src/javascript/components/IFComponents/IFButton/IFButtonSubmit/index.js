import {
	Button,
} from 'antd';
import Immutable from 'immutable';
import IFButtonNormal from '../IFButtonNormal/index.js';
import Util from '../../../../utils/Util.js';

export default
class IFButtonSubmit extends IFButtonNormal {
	constructor(props) {
	  super(props);

	  this.state = {
	  	option: props.option,
	  	eventMap: {},
	  };
	}

	componentWillReceiveProps(nextProps) {
		console.log('nextProps in IFButtonSubmit', nextProps);
	}

	render() {
		let model = Util.parseDataModel(this.props.option);
		let {
			size, theme, label, fontFamily, fontSize, lineHeight, textAlign, visibility, locked,
			extraStyle,
		} = model;

		let fontStyleObj = {
			fontSize,
			fontFamily,
			lineHeight,
			...extraStyle,
		};


		let {
			eventMap: {
				onClick,
			},
		} = this.state;


		if (!visibility) {
			return (
				<div></div>
			)
		}


		return (
			<Button 
			  size={size || 'large'}
				type={theme || 'primary'}
				disabled={!!locked}
				onClick={onClick}
				style={{ width: '100%'}}
			>
				<span style={fontStyleObj}>{label}</span>
			</Button>
		)
	}
}