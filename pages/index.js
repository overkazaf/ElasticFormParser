import React, { Component } from 'react';
import { initStore } from '../src/javascript/store';
import withRedux from 'next-redux-wrapper';
import fetch from 'isomorphic-fetch';
import NoSSR from 'react-no-ssr';
import Immutable from 'immutable';
import Rx from 'rxjs/Rx';
import antdStyle from '../src/css/index.min.css';
import RenderEngine from '../src/javascript/engine/RenderEngine';

import mock from '../src/javascript/mock/test';

import mitt from 'mitt';

import ComponentManager from '../src/javascript/manager/IFComponentManager.js';


import { 
 Row,
 Col,
} from 'antd';

let emitter = mitt();

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
    Object.keys(this.refs).map( (compId, index) => {
      ComponentManager.register(compId, this.refs[compId]);
    });


    // setTimeout(() => {
    //   Object.keys(this.refs).map( (compId, index) => {
    //     //console.log(this.refs[compId].props.value);

    //     // if (!index) {
    //     //   let eventType = `${compId}-sub`;
    //     //   emitter.on(eventType, function(options) {
    //     //     console.log('aaaaaaaa', JSON.stringify(options));
    //     //   });

    //     //   setTimeout(() => {
    //     //     emitter.emit(eventType, {a: 123});
    //     //   }, 5000);
    //     // }
    //     window.__REFS__ = this.refs;
    //     window.__DATA__ = mock.data;
    //     window.__EMITTER__ = emitter;

    //   });

    //   window.__REFS__ = this.refs;
    //   window.__DATA__ = mock.data;
    //   window.__EMITTER__ = emitter;


    // }, 500)
  }

  componentWillReceiveProps(nextProps) {
  }

  renderFormView() {
    return (
      RenderEngine.renderPageView(this.props.data)
    );
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
