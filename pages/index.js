import React, { Component } from 'react';
import Head from 'next/head'
import { initStore } from '../src/javascript/store';
import withRedux from 'next-redux-wrapper';
import fetch from 'isomorphic-fetch';
import NoSSR from 'react-no-ssr';
import Immutable from 'immutable';
import Rx from 'rxjs/Rx';
import RenderEngine from '../src/javascript/engine/RenderEngine';
import LayoutEngine from '../src/javascript/engine/LayoutEngine';
import EventEngine from '../src/javascript/engine/EventEngine';

import mock from '../src/javascript/mock/page.json';

import ComponentManager from '../src/javascript/manager/IFComponentManager.js';
import CommitEngine from '../src/javascript/engine/CommitEngine.js';

import { Form, Select, InputNumber, DatePicker, Switch, Slider, Button, LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'

class MainPage extends Component {
  static getInitialProps ({ store, isServer }) {

    store.subscribe(() => {
      console.log('Index State', store.getState());
    });

    let that = this;

    return { 
      isServer, 
      counter: 0,
      data: mock,
      formData: null,
    };
  }

  componentDidMount() {
    Object.keys(this.refs).map( (key, index) => {
      let position = this.refs[key];
      let posRefs = position.refs;
      Object.keys(posRefs).map((compId, idx) => {
        let component = posRefs[compId];
        ComponentManager.register(compId, component);

        EventEngine.subscribe(component, component.props, () => {
          console.log('callback in EventEngine subscription');
        });

      });
    });

    

    CommitEngine.init(this._getFormInfo()); 

    global.ComponentManager = ComponentManager;
    global.CommitEngine = CommitEngine;
  }

  _getFormInfo() {
    let { data: {
        id,
      },
    } = this.props;

    return {
      formId: id,
      submitter: 'u-001',
    };
  }


  render() {
    let {
      dispatch,
      data,
    } = this.props;

    return (
      <LocaleProvider locale={enUS}>
        <div>
          <Head>
            <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/2.10.2/antd.min.css' />
          </Head>
          <div className="p-main">
            {LayoutEngine.renderLayout(data, dispatch)}
          </div>
        </div>
      </LocaleProvider>
    )
  }
}

export default withRedux(initStore)(MainPage);

