import {
	Row,
	Col,
} from 'antd';

export default 
class LayoutEngine {

	static renderLayout(componentGroup, colSpan = 6, rowGutter = 16) {

		return componentGroup.map((group, indexX) => {
			let groupContent = group.map((item, indexY) => {
				return (
					<Col key={`${indexX}-${indexY}`} className="gutter-row" span={colSpan}>
						{item}
					</Col>
				)
			});

			return (
				<Row gutter={rowGutter} style={{marginBottom: '15px'}}>
					{groupContent}
				</Row>
			)
		});
	}
}