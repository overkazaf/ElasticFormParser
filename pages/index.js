import React, { Component } from 'react';
import { initStore } from '../src/javascript/store';
import withRedux from 'next-redux-wrapper';
import fetch from 'isomorphic-fetch';
import NoSSR from 'react-no-ssr';
import Immutable from 'immutable';
import Rx from 'rxjs/Rx';
import antdStyle from '../src/css/index.min.css';

import { Menu, Dropdown, Button, Icon, message } from 'antd';


const esprima = require('esprima');

class MainPage extends Component {
  static async getInitialProps ({ store, isServer }) {

    const res = await fetch('https://api.github.com/repos/developit/preact');
    const json = await res.json();

    store.subscribe(() => {
      console.log(store.getState());
    });

    return Immutable.fromJS({ 
      isServer, 
      counter: 0,
      components: [
      {
        key: 'comp1',
        type: 'input',
        props: {
          id: 'comp1',
            name: 'comp1',
            label: "数量",
            defaultValue: "0",
            value: 1,
            ctrlType: 'int',
            style: 'border: 2px solid #ddd;color: #666;padding: 5px;',
          actions: [
            {
              name: 'onUpdate',
              action: 'setToTarget',
              params: ['comp1', 'comp2'],
              expr: '$comp1*0.55 + $comp2*0.44',
              target: 'comp3'
            }
          ]
        },
        children: []
      },
      {
        key: 'comp2',
        type: 'input',
        props: {
          id: 'comp2',
            name: 'comp2',
            label: "单价",
            defaultValue: "0.00",
            value: 3.44,
            style: 'border: 2px solid #ddd;color: #666;padding: 5px;',
            ctrlType: 'double',
          actions: [
            {
              name: 'onUpdate',
              action: 'setToTarget',
              params: ['comp1', 'comp2'],
              expr: 'MUL',
              target: 'comp3'
            }
          ],
        },
        children: []
      },
      {
        key: 'comp3',
        type: 'input',
        props: {
          id: 'comp3',
            name: 'comp3',
            label: "总价",
            defaultValue: "0.00",
            value: 3.44,
            ctrlType: 'double',
            style: 'border: 2px solid #f00;color: #666; background: #ccc;padding: 5px;',
            locked: true,
            readOnly: true,
          actions: [
          ]
        },
        children: []
      },
      {
        key: 'comp4',
        type: 'select',
        props: {
          id: 'comp4',
            name: 'comp4',
            label: "房租",
            defaultValue: "0",
            value: 0,
            style: 'border: 2px solid #ddd;color: #666;padding: 5px;',
            ctrlType: 'dropdown',
          actions: [],
        },
        children: []
      }
    ]
    });
  }


  renderForm(components) {
    console.log('components', components);

    var menuOptions;

    components && components.map(function(comp) {
      let { actions } = comp.props;
      if (actions.length) {
        menuOptions = actions[0].params.map(function(ac, i) {
          return (
            <Menu.Item key="${i}">${i+1}st menu item</Menu.Item>
          )
        });
      }
    });
  
    console.log(menuOptions);

    let menu = (
      <Menu onClick={null}>
        {menuOptions}
      </Menu>
    )

    return (
      <Dropdown overlay={menu}>
        <Button style={{ marginLeft: 8 }}>
          Button <Icon type="down" />
        </Button>
      </Dropdown>
    )
  }

  render() {



    return (
      <div className="p-main">
        <style dangerouslySetInnerHTML={{ __html: antdStyle}} />
        {this.renderForm(this.props.components)}
      </div>
    )
  }
}

export default withRedux(initStore)(MainPage);
