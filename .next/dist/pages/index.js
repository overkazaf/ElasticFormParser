'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _store = require('../src/javascript/store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _reactNoSsr = require('react-no-ssr');

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _indexMin = require('../src/css/index.min.css');

var _indexMin2 = _interopRequireDefault(_indexMin);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var esprima = require('esprima');

var MainPage = function (_Component) {
  (0, _inherits3.default)(MainPage, _Component);

  function MainPage() {
    (0, _classCallCheck3.default)(this, MainPage);

    return (0, _possibleConstructorReturn3.default)(this, (MainPage.__proto__ || (0, _getPrototypeOf2.default)(MainPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(MainPage, [{
    key: 'renderForm',
    value: function renderForm(components) {
      console.log('components', components);

      var menuOptions;

      components && components.map(function (comp) {
        var actions = comp.props.actions;

        if (actions.length) {
          menuOptions = actions[0].params.map(function (ac, i) {
            return _react2.default.createElement(_antd.Menu.Item, { key: '${i}' }, '$', i + 1, 'st menu item');
          });
        }
      });

      console.log(menuOptions);

      var menu = _react2.default.createElement(_antd.Menu, { onClick: null }, menuOptions);

      return _react2.default.createElement(_antd.Dropdown, { overlay: menu }, _react2.default.createElement(_antd.Button, { style: { marginLeft: 8 } }, 'Button ', _react2.default.createElement(_antd.Icon, { type: 'down' })));
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement('div', { className: 'p-main' }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _indexMin2.default } }), this.renderForm(this.props.components));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
        var store = _ref2.store,
            isServer = _ref2.isServer;
        var res, json;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _isomorphicFetch2.default)('https://api.github.com/repos/developit/preact');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                json = _context.sent;

                store.subscribe(function () {
                  console.log(store.getState());
                });

                return _context.abrupt('return', _immutable2.default.fromJS({
                  isServer: isServer,
                  counter: 0,
                  components: [{
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
                      actions: [{
                        name: 'onUpdate',
                        action: 'setToTarget',
                        params: ['comp1', 'comp2'],
                        expr: '$comp1*0.55 + $comp2*0.44',
                        target: 'comp3'
                      }]
                    },
                    children: []
                  }, {
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
                      actions: [{
                        name: 'onUpdate',
                        action: 'setToTarget',
                        params: ['comp1', 'comp2'],
                        expr: 'MUL',
                        target: 'comp3'
                      }]
                    },
                    children: []
                  }, {
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
                      actions: []
                    },
                    children: []
                  }, {
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
                      actions: []
                    },
                    children: []
                  }]
                }));

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MainPage;
}(_react.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore)(MainPage);