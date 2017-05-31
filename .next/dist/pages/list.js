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

var _list = require('../src/javascript/mock/list');

var _list2 = _interopRequireDefault(_list);

var _index = require('../src/javascript/components/List/QueryTable/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../src/javascript/components/LayoutComponents/QueryView/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../src/javascript/components/DevTools/index.js');

var _index6 = _interopRequireDefault(_index5);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/pages/list.js?entry';


var ButtonGroup = _antd.Button.Group;

var ListMage = function (_Component) {
  (0, _inherits3.default)(ListMage, _Component);

  function ListMage() {
    (0, _classCallCheck3.default)(this, ListMage);

    return (0, _possibleConstructorReturn3.default)(this, (ListMage.__proto__ || (0, _getPrototypeOf2.default)(ListMage)).apply(this, arguments));
  }

  (0, _createClass3.default)(ListMage, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          modalVisible = _props.modalVisible,
          modalTitle = _props.modalTitle;

      return _react2.default.createElement('div', { className: 'p-list', __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _indexMin2.default }, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), _react2.default.createElement(_index6.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), _react2.default.createElement(_index4.default, {
        modalVisible: modalVisible,
        modalTitle: modalTitle,
        data: data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          isServer = _ref.isServer;

      store.subscribe(function () {
        console.log('state in list', store.getState());
      });

      return {
        isServer: isServer,
        data: _list2.default.data,
        modalVisible: false,
        modalTitle: ''
      };
    }
  }]);

  return ListMage;
}(_react.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore)(ListMage);