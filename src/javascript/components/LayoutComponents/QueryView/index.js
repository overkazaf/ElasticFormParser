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
	_renderQueryTable() {
		return <QueryTable />
	}

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

	render() {

		let {
			modalTitle,
			modalVisible,
		} = this.props;

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
	  		<div style={{width: '960px', margin: '20px auto', padding: '10px', borderRadius: '5px', border: '1px solid #ddd'}}>
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
			        <div className="gutter-box" style={{margin: '20px'}}>
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
						{this._renderQueryTable()}
			        </div>

			        <Modal title={modalTitle} visible={modalVisible}
			          onOk={this._hideModal.bind(this)} 
			          onCancel={this._hideModal.bind(this)}
			          okText="OK" cancelText="Cancel"
			        >
			          <p>Bla bla ...</p>
			          <p>Bla bla ...</p>
			          <p>Bla bla ...</p>
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




