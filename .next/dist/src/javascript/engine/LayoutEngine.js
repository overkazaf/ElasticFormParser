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

var _antd = require('antd');

var _ComponentFactory = require('../factory/ComponentFactory.js');

var _ComponentFactory2 = _interopRequireDefault(_ComponentFactory);

var _reactGridLayout = require('react-grid-layout');

var _reactGridLayout2 = _interopRequireDefault(_reactGridLayout);

var _LayoutEngine = require('./LayoutEngine.scss');

var _LayoutEngine2 = _interopRequireDefault(_LayoutEngine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/engine/LayoutEngine.js';


var Header = _antd.Layout.Header,
    Content = _antd.Layout.Content,
    Footer = _antd.Layout.Footer;

var activeElemId = null;

var ComponentsView = function (_Component) {
	(0, _inherits3.default)(ComponentsView, _Component);

	function ComponentsView(props) {
		(0, _classCallCheck3.default)(this, ComponentsView);

		return (0, _possibleConstructorReturn3.default)(this, (ComponentsView.__proto__ || (0, _getPrototypeOf2.default)(ComponentsView)).call(this, props));
	}

	(0, _createClass3.default)(ComponentsView, [{
		key: 'render',
		value: function render() {
			var that = this;

			var _props = this.props,
			    layouts = _props.layouts,
			    dispatch = _props.dispatch,
			    position = _props.position;

			console.log('layouts', layouts);

			var gridLayout = layouts.map(function (layout) {
				layout.grid.static = true;
				return layout.grid;
			});

			return _react2.default.createElement(_reactGridLayout2.default, {
				className: 'layout',
				layout: gridLayout,
				rowHeight: 5,
				width: 960,
				height: 500,
				margin: [0, 0],
				containerPadding: [0, 0],
				autoSize: true,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, layouts.map(function (item, index) {
				var grid = item.grid,
				    component = item.component;
				var type = component.type,
				    props = component.props;

				return _react2.default.createElement('div', { key: grid.i, className: 'draggable-item static', __source: {
						fileName: _jsxFileName,
						lineNumber: 69
					}
				}, _ComponentFactory2.default.create(type, props));
			}));
		}
	}]);

	return ComponentsView;
}(_react.Component);

var LayoutEngine = function () {
	function LayoutEngine() {
		(0, _classCallCheck3.default)(this, LayoutEngine);
	}

	(0, _createClass3.default)(LayoutEngine, null, [{
		key: 'renderLayout',
		value: function renderLayout() {
			var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var dispatch = arguments[1];
			var name = page.name,
			    title = page.title,
			    style = page.style,
			    _page$layouts = page.layouts,
			    header = _page$layouts.header,
			    body = _page$layouts.body,
			    footer = _page$layouts.footer;

			return _react2.default.createElement('div', { className: 'form-view', style: { margin: '0 auto', width: style.width }, __source: {
					fileName: _jsxFileName,
					lineNumber: 95
				}
			}, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _LayoutEngine2.default }, __source: {
					fileName: _jsxFileName,
					lineNumber: 96
				}
			}), _react2.default.createElement(_antd.Layout, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 97
				}
			}, _react2.default.createElement(Header, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 98
				}
			}, _react2.default.createElement('h1', { style: { textAlign: 'center', color: '#fff' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 99
				}
			}, title)), _react2.default.createElement(Content, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 101
				}
			}, _react2.default.createElement(ComponentsView, {
				layouts: header,
				dispatch: dispatch,
				position: 'header',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 102
				}
			}), _react2.default.createElement(ComponentsView, {
				layouts: body,
				dispatch: dispatch,
				position: 'body',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 107
				}
			})), _react2.default.createElement(Footer, { style: { background: '#e7e7e7' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 113
				}
			}, _react2.default.createElement(ComponentsView, {
				layouts: footer,
				dispatch: dispatch,
				position: 'footer',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 114
				}
			}))));
		}
	}]);

	return LayoutEngine;
}();

exports.default = LayoutEngine;