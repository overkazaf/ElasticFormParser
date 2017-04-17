import {
	Component
} from 'react';
import {
	connect
} from 'react-redux';

import {
	Row,
	Col,
	Button,
	Modal,
	AutoComplete,
} from 'antd';

import QueryTable from '../../List/QueryTable';

const ButtonGroup = Button.Group;

class QueryView extends Component {

	_showModal(ctrlType) {
		this.props.dispatch({
			type: 'SHOW_MODAL',
			payload: ctrlType,
		});
	}

	_hideModal() {
		this.props.dispatch({
			type: 'HIDE_MODAL',
		});
	}

	_handleRowSelect(item, index) {
		this.props.dispatch({
			type: 'ROW_ITEM_SELECTED',
			payload: item,
		});
	}

	render() {

		let {
			viewType,
			modalVisible,
			itemId,
			selectedItem,
			data,
		} = this.props;

		console.log('data in QueryView', data);

	  	let dataSource = ['1', '2', '3'];
	  	let onSelect = (value) => {
	  		console.log('onSelect', value);
	  	};

	  	let handleChange = (value) => {
	  		console.log('handleChange', value);
	  	};

	  	let handleOperation = (value) => {
	  		console.log('value', value);
	  	};

	  	let handleForm = (ctrlType) => {
	  		this._showModal(ctrlType);
	  	};

	  	return (
	  		<div style={{width: '960px', margin: '120px auto', padding: '10px'}}>
	  			<Row gutter={16}>
			      <Col className="gutter-row" span={12}>
			        <div className="gutter-box">
			        	<AutoComplete
					        dataSource={dataSource}
					        style={{ width: '100%' }}
					        onSelect={onSelect}
					        onChange={handleChange}
					        placeholder="input here"
					      />
			        </div>
			      </Col>
			      <Col className="gutter-row" span={4}>
			        <div className="gutter-box">
	    				<Button type="primary" icon="search">Search</Button>
			        </div>
			      </Col>
			      <Col className="gutter-row" span={4}>
			        <div className="gutter-box">
						<Button type="default">
							Advanced Query
						</Button>
			        </div>
			      </Col>
			    </Row>

			    <Row gutter={16}>
			      <Col className="gutter-row" span={12}>
			        <div className="gutter-box" style={{margin: '10px 0 20px 0'}}>
			        	<ButtonGroup>
					      <Button type="default" onClick={handleForm.bind(this, 'add')} icon="plus-circle">Add</Button>
					      <Button type="default" onClick={handleForm.bind(this, 'edit')} icon="edit">Edit</Button>
					      <Button type="default" onClick={handleForm.bind(this, 'view')} icon="eye">View</Button>
					    </ButtonGroup>
			        </div>
			      </Col>
			    </Row>

			    <Row gutter={16}>
			      <Col className="gutter-row" span={24}>
			        <div className="gutter-box">
						<QueryTable 
						    data={data.list}
							handleRowSelect={this._handleRowSelect.bind(this)}
						/>
			        </div>

			        <Modal 
			        	title={viewType} 
			        	visible={modalVisible}
			        	width="1000"
			        	style={{ top: 20 }}
			        	wrapClassName="vertical-center-modal"
			          	onOk={this._hideModal.bind(this)} 
			          	onCancel={this._hideModal.bind(this)}
			          	okText="OK" cancelText="Cancel"
			          	confirmLoading="true"
			          	maskClosable="false"
			          	footer={null}
			        >
			        	<div>
			        		SelectedItem:
			        		{JSON.stringify(selectedItem)}

			        		<iframe
								src="http://localhost:3000/index?pageId={0}"
								frameBorder="0"
								style={{ width: '100%', height: '640px'}}
			        		></iframe>
			        	</div>
			        </Modal>

			      </Col>
			    </Row>
	  		</div>
	  	)
  	}
}


const mapStateToProps = ($$state, ownProps) => {
	return $$state.get('queryReducer').toJS();
}

export default connect(mapStateToProps)(QueryView);




