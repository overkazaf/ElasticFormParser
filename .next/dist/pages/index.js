'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _mitt = require('mitt');

var _mitt2 = _interopRequireDefault(_mitt);

var _IFComponentManager = require('../src/javascript/manager/IFComponentManager.js');

var _IFComponentManager2 = _interopRequireDefault(_IFComponentManager);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/pages/index.js?entry';


var emitter = (0, _mitt2.default)();

var MainPage = function (_Component) {
  (0, _inherits3.default)(MainPage, _Component);

  function MainPage() {
    (0, _classCallCheck3.default)(this, MainPage);

    return (0, _possibleConstructorReturn3.default)(this, (MainPage.__proto__ || (0, _getPrototypeOf2.default)(MainPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(MainPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      (0, _keys2.default)(this.refs).map(function (compId, index) {
        _IFComponentManager2.default.register(compId, _this2.refs[compId]);
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
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {}
  }, {
    key: 'renderFormView',
    value: function renderFormView() {
      return _RenderEngine2.default.renderPageView(this.props.data);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'p-main', __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _indexMin2.default }, __source: {
          fileName: _jsxFileName,
          lineNumber: 89
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