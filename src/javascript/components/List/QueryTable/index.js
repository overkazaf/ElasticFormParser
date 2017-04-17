import { Component } from 'react';
import { Table, Input, Button, Icon } from 'antd';

import { connect } from 'react-redux';

export default
class QueryTable extends Component {

  constructor(props) {
    super(props);
    
    console.log('props in QueryTable', props.list);

    this.state = {
      filterDropdownVisible: false,
      data: props.data,
      searchText: '',
      filtered: false,
      selectedItem: null,
    };
  }

  onInputChange = (e) => {
    this.setState({ searchText: e.target.value });
  }
  onSearch = () => {
    const { searchText } = this.state;
    const reg = new RegExp(searchText, 'gi');
    this.setState({
      filterDropdownVisible: false,
      filtered: !!searchText,
      data: data.map((record) => {
        const match = record.name.match(reg);
        if (!match) {
          return null;
        }
        return {
          ...record,
          name: (
            <span>
              {record.name.split(reg).map((text, i) => (
                i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
              ))}
            </span>
          ),
        };
      }).filter(record => !!record),
    });
  }

  _rowSelectCallback(item, index) {
    this.props.handleRowSelect(item, index);
  }

  render() {
    // const columns = [{
    //   title: 'Name',
    //   dataIndex: 'name',
    //   key: 'name',
    //   filterDropdown: (
    //     <div className="custom-filter-dropdown">
    //       <Input
    //         ref={ele => this.searchInput = ele}
    //         placeholder="Search name"
    //         value={this.state.searchText}
    //         onChange={this.onInputChange}
    //         onPressEnter={this.onSearch}
    //       />
    //       <Button type="primary" onClick={this.onSearch}>Search</Button>
    //     </div>
    //   ),
    //   filterIcon: <Icon type="smile-o" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
    //   filterDropdownVisible: this.state.filterDropdownVisible,
    //   onFilterDropdownVisibleChange: visible => this.setState({ filterDropdownVisible: visible }, () => this.searchInput.focus()),
    // }, {
    //   title: 'Age',
    //   dataIndex: 'age',
    //   key: 'age',
    // }, {
    //   title: 'Address',
    //   dataIndex: 'address',
    //   key: 'address',
    //   filters: [{
    //     text: 'London',
    //     value: 'London',
    //   }, {
    //     text: 'New York',
    //     value: 'New York',
    //   }],
    //   onFilter: (value, record) => record.address.indexOf(value) === 0,
    // }];
    // 
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'FormType',
        dataIndex: 'formType',
        key: 'formType',
      },
      {
        title: 'FormName',
        dataIndex: 'formName',
        key: 'formName',
      },
      {
        title: 'Category',
        dataIndex: 'formCategory',
        key: 'formCategory',
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'Version',
        dataIndex: 'version',
        key: 'version',
      },
      {
        title: 'Synchronize',
        dataIndex: 'synchronize',
        key: 'synchronize',
      },
      {
        title: 'Control',
        dataIndex: 'control',
        key: 'control',
      },
    ]

    let rowSelection = {
      type: 'radio',
      onSelect: this._rowSelectCallback.bind(this)
    };

    return <Table 
            rowSelection={rowSelection} 
            columns={columns} 
            dataSource={this.state.data} />;
  }
}

