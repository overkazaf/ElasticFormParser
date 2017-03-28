import React, { Component } from 'react';
import { initStore } from '../src/javascript/store';
import withRedux from 'next-redux-wrapper';
import fetch from 'isomorphic-fetch';
import NoSSR from 'react-no-ssr';
import Immutable from 'immutable';
import Rx from 'rxjs/Rx';
import antdStyle from '../src/css/index.min.css';
import RenderEngine from '../src/javascript/engine/RenderEngine';

import mock from '../src/javascript/mock/data';

import { 
 Row,
 Col,
} from 'antd';

class MainPage extends Component {
  static getInitialProps ({ store, isServer }) {

    store.subscribe(() => {
      console.log(store.getState());
    });


    let that = this;

    return { 
      isServer, 
      counter: 0,
      data: mock.data,
      formData: null,
    };
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  renderFormView() {

    let {
      data,
    } = this.props;

    let {
      id,
      name,
      label,
      creater,
      createTS,
      style,
      eventList,
      header,
      body,
      footer,
    } = data;

    let formProps = { eventList, header, body, footer };

    console.log(data);

    const userMap = {
      'u-001': 'Admin',
    };

    return (
      <div id="form-view" 
        style={style} 
      >
        <div className="form-header">
          <h1 style={{textAlign: 'center'}}>{label}</h1>
          <b>{id}, {name}, {userMap[creater]}</b>
          <Row type="flex">
          {
            header.components.map((item, index) => {
              let {
                type,
                props,
              } = item;

              return (
                <Col span={8}>
                  <div key={`comp-${index}`}>
                    {RenderEngine.renderComponent(type, props)}
                  </div>
                </Col>
              )
            })
          }
          </Row>
        </div>
        <div className="form-body">
          FormViewBody, 
          {
            body.components.map((item, index) => {
              return (
                <span>${index}</span>
              )
            })
          }
        </div>
        <div className="form-footer">
          {
            footer.components.map((item, index) => {
              let {
                type,
                props,
              } = item;

              return (
                <span key={`comp-${index}`}>
                  {RenderEngine.renderComponent(type, props)}
                </span>
              )
            })
          }
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="p-main">
        <style dangerouslySetInnerHTML={{ __html: antdStyle}} />
        {this.renderFormView()}
      </div>
    )
  }
}

export default withRedux(initStore)(MainPage);
