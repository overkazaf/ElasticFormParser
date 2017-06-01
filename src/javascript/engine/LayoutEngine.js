import React, { Component } from 'react';

import {
	Row,
	Col,
	Layout,
	Icon,
	Button,
	Popconfirm,
} from 'antd';

let {
	Header,
	Content,
	Footer,
} = Layout;

import ComponentFactory from '../factory/ComponentFactory.js';
import ReactGridLayout from 'react-grid-layout';

import layoutStyle from './LayoutEngine.scss';

let activeElemId = null;
class ComponentsView extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let that = this;

		let {
			layouts,
			dispatch,
			position,
		} = this.props;

		console.log('layouts', layouts);

		let gridLayout = layouts.map(layout => {
			layout.grid.static = true;
			return layout.grid;
		});

		return (
			<ReactGridLayout 
				className="layout" 
				layout={gridLayout}
				rowHeight={5} 
				width={960}
				height={500}
				margin={[0, 0]}
				containerPadding={[0,0]}
				autoSize={true}
			>
		      {
		      	layouts.map((item, index) => {
		      		let {
		      			grid,
		      			component,
		      		} = item;

		      		let {
		      			type,
		      			props,
		      		} = component;

		      		return (
		      			<div key={grid.i} className="draggable-item static">
				        	{ ComponentFactory.create(type, props) }
				        </div>
		      		)
		      	})
		      }
	      </ReactGridLayout>
		)
	}
}

export default
class LayoutEngine {
	static renderLayout(page = {}, dispatch) {
		let {
			name,
			title,
			style,
			layouts: {
				header,
				body,
				footer,
			},
		} = page;

		return (
			<div className="form-view" style={{ margin: '0 auto', width: style.width, }}>
				<style dangerouslySetInnerHTML={{ __html: layoutStyle}} />
				<Layout>
					<Header>
						<h1 style={{textAlign: 'center', color: '#fff'}}>{title}</h1>
					</Header>
					<Content>
						<ComponentsView 
							layouts={header}
							dispatch={dispatch}
							position={'header'}
						/>
						<ComponentsView 
							layouts={body}
							dispatch={dispatch}
							position={'body'}
						/>
					</Content>
					<Footer style={{ background: '#e7e7e7'}}>
						<ComponentsView 
							layouts={footer}
							dispatch={dispatch}
							position={'footer'}
						/>
					</Footer>
				</Layout>
			</div>
		)
	}
}