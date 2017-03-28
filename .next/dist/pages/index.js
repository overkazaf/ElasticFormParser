'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _RenderEngine = require('../src/javascript/engine/RenderEngine');

var _RenderEngine2 = _interopRequireDefault(_RenderEngine);

var _data = require('../src/javascript/mock/data');

var _data2 = _interopRequireDefault(_data);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/pages/index.js?entry';


var MainPage = function (_Component) {
  (0, _inherits3.default)(MainPage, _Component);

  function MainPage() {
    (0, _classCallCheck3.default)(this, MainPage);

    return (0, _possibleConstructorReturn3.default)(this, (MainPage.__proto__ || (0, _getPrototypeOf2.default)(MainPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(MainPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {}
  }, {
    key: 'renderFormView',
    value: function renderFormView() {
      var data = this.props.data;
      var id = data.id,
          name = data.name,
          label = data.label,
          creater = data.creater,
          createTS = data.createTS,
          style = data.style,
          eventList = data.eventList,
          header = data.header,
          body = data.body,
          footer = data.footer;

      var formProps = { eventList: eventList, header: header, body: body, footer: footer };

      console.log(data);

      var userMap = {
        'u-001': 'Admin'
      };

      return _react2.default.createElement('div', { id: 'form-view',
        style: style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('div', { className: 'form-header', __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement('h1', { style: { textAlign: 'center' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, label), _react2.default.createElement('b', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, id, ', ', name, ', ', userMap[creater]), _react2.default.createElement(_antd.Row, { type: 'flex', __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, header.components.map(function (item, index) {
        var type = item.type,
            props = item.props;

        return _react2.default.createElement(_antd.Col, { span: 8, __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }, _react2.default.createElement('div', { key: 'comp-' + index, __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }, _RenderEngine2.default.renderComponent(type, props)));
      }))), _react2.default.createElement('div', { className: 'form-body', __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, 'FormViewBody,', body.components.map(function (item, index) {
        return _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        }, '$', index);
      })), _react2.default.createElement('div', { className: 'form-footer', __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, footer.components.map(function (item, index) {
        var type = item.type,
            props = item.props;

        return _react2.default.createElement('span', { key: 'comp-' + index, __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }, _RenderEngine2.default.renderComponent(type, props));
      })));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'p-main', __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _indexMin2.default }, __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }), this.renderFormView());
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          isServer = _ref.isServer;

      store.subscribe(function () {
        console.log(store.getState());
      });

      var that = this;

      return {
        isServer: isServer,
        counter: 0,
        data: _data2.default.data,
        formData: null
      };
    }
  }]);

  return MainPage;
}(_react.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore)(MainPage);