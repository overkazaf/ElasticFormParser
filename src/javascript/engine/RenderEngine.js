import ComponentFactory from '../factory/ComponentFactory';

export default
class RenderEngine {

	static renderPageView(pageJson) {
		return (
			<div className="p-page">
				page
			</div>
		)
	}

	static renderComponent(type, props) {
		let componentContent = ComponentFactory.create(type, props);
		return (
			<div style={props.style}>
				{componentContent}
			</div>
		);
	}
}