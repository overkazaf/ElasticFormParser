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

var _LayoutEngine = require('../src/javascript/engine/LayoutEngine');

var _LayoutEngine2 = _interopRequireDefault(_LayoutEngine);

var _EventEngine = require('../src/javascript/engine/EventEngine');

var _EventEngine2 = _interopRequireDefault(_EventEngine);

var _page = require('../src/javascript/mock/page.json');

var _page2 = _interopRequireDefault(_page);

var _IFComponentManager = require('../src/javascript/manager/IFComponentManager.js');

var _IFComponentManager2 = _interopRequireDefault(_IFComponentManager);

var _CommitEngine = require('../src/javascript/engine/CommitEngine.js');

var _CommitEngine2 = _interopRequireDefault(_CommitEngine);

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
    value: function componentDidMount() {
      var _this2 = this;

      (0, _keys2.default)(this.refs).map(function (key, index) {
        var position = _this2.refs[key];
        var posRefs = position.refs;
        (0, _keys2.default)(posRefs).map(function (compId, idx) {
          var component = posRefs[compId];
          _IFComponentManager2.default.register(compId, component);

          _EventEngine2.default.subscribe(component, component.props, function () {
            console.log('callback in EventEngine subscription');
          });
        });
      });

      _CommitEngine2.default.init(this._getFormInfo());

      global.ComponentManager = _IFComponentManager2.default;
      global.CommitEngine = _CommitEngine2.default;
    }
  }, {
    key: '_getFormInfo',
    value: function _getFormInfo() {
      var id = this.props.data.id;

      return {
        formId: id,
        submitter: 'u-001'
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          dispatch = _props.dispatch,
          data = _props.data;

      return _react2.default.createElement('div', { className: 'p-main', __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _indexMin2.default }, __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), _LayoutEngine2.default.renderLayout(data, dispatch));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          isServer = _ref.isServer;

      store.subscribe(function () {
        console.log('Index State', store.getState());
      });

      var that = this;

      return {
        isServer: isServer,
        counter: 0,
        data: _page2.default,
        formData: null
      };
    }
  }]);

  return MainPage;
}(_react.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore)(MainPage);