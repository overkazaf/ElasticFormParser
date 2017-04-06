import {
	Row,
	Col,
} from 'antd';

export default 
class LayoutEngine {

	/**
	 * [renderLayout 进行布局渲染，可以对移动端设备进行相应的适配]
	 * @Author   JohnNong
	 * @Email    overkazaf@gmail.com
	 * @Github   https://github.com/overkazaf
	 * @DateTime 2017-04-06T14:55:32+0800
	 * @param    {[type]}                     componentGroup [IFComponent列表]
	 * @param    {Number}                     colSpan        [宽度]
	 * @param    {Number}                     rowGutter      [行内单元间隔]
	 * @return   {[type]}                                    [description]
	 */
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
				<Row key={`row-${indexX}`} gutter={rowGutter} style={{marginBottom: '15px'}}>
					{groupContent}
				</Row>
			)
		});
	}
}