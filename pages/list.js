import Head from 'next/head';
import React, { Component } from 'react';
import { initStore } from '../src/javascript/store';
import withRedux from 'next-redux-wrapper';
import fetch from 'isomorphic-fetch';
import NoSSR from 'react-no-ssr';
import Immutable from 'immutable';
import Rx from 'rxjs/Rx';

import mock from '../src/javascript/mock/list';

import QueryTable from '../src/javascript/components/List/QueryTable/index.js';
import QueryView from '../src/javascript/components/LayoutComponents/QueryView/index.js';
import DevTools from '../src/javascript/components/DevTools/index.js';


import { 
 Row,
 Col,
 AutoComplete,
 Button,
 Radio,
 Icon,
 Table,
 Input,
 Modal,
} from 'antd';

const ButtonGroup = Button.Group;


class ListMage extends Component {

  static getInitialProps({ store, isServer }) {
    store.subscribe(() => {
      console.log('state in list', store.getState());
    });

    return {
      isServer,
      data: mock.data,
      modalVisible: false,
      modalTitle: '',
    };
  }

  render() {
    let {
      data,
      modalVisible,
      modalTitle,
    } = this.props;

    return (
      <div className="p-list">
        <Head>
          <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/2.10.2/antd.min.css' />
        </Head>
        <DevTools />
        <QueryView 
          modalVisible={modalVisible}
          modalTitle={modalTitle}
          data={data}
        />
      </div>
    )
  }
}

export default withRedux(initStore)(ListMage);