'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ComponentFactory = require('../factory/ComponentFactory');

var _ComponentFactory2 = _interopRequireDefault(_ComponentFactory);

var _LayoutEngine = require('../engine/LayoutEngine');

var _LayoutEngine2 = _interopRequireDefault(_LayoutEngine);

var _antd = require('antd');

var _ArrayUtil = require('../util/ArrayUtil');

var _ArrayUtil2 = _interopRequireDefault(_ArrayUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/engine/RenderEngine.js';


var Header = _antd.Layout.Header,
    Footer = _antd.Layout.Footer,
    Content = _antd.Layout.Content;

var RenderEngine = function () {
	function RenderEngine() {
		(0, _classCallCheck3.default)(this, RenderEngine);
	}

	(0, _createClass3.default)(RenderEngine, null, [{
		key: 'renderPageView',
		value: function renderPageView(pageJson) {
			var id = pageJson.id,
			    name = pageJson.name,
			    label = pageJson.label,
			    creater = pageJson.creater,
			    createTS = pageJson.createTS,
			    style = pageJson.style,
			    contentMinHeight = pageJson.contentMinHeight,
			    eventList = pageJson.eventList,
			    header = pageJson.header,
			    body = pageJson.body,
			    footer = pageJson.footer;

			var formProps = { eventList: eventList, header: header, body: body, footer: footer };
			var contentStyle = { background: '#fff', padding: 24, minHeight: '' + contentMinHeight };

			var userMap = {
				'u-001': 'Admin'
			};

			var headerComponents = header.components.map(function (item, index) {
				var type = item.type,
				    props = item.props;

				return _react2.default.createElement('div', { key: 'header-comp-' + index, __source: {
						fileName: _jsxFileName,
						lineNumber: 50
					}
				}, RenderEngine.renderComponent(type, props));
			});

			var bodyComponents = body.components.map(function (item, index) {
				var type = item.type,
				    props = item.props;

				return _react2.default.createElement('div', { key: 'body-comp-' + index, __source: {
						fileName: _jsxFileName,
						lineNumber: 63
					}
				}, RenderEngine.renderComponent(type, props));
			});

			var headerComponentGroup = _ArrayUtil2.default.makeGroup(headerComponents, 4);
			var bodyComponentGroup = _ArrayUtil2.default.makeGroup(bodyComponents, 1);

			var headerContent = _LayoutEngine2.default.renderLayout(headerComponentGroup);
			var bodyContent = _LayoutEngine2.default.renderLayout(bodyComponentGroup, 24);

			return _react2.default.createElement('div', { id: 'form-view',
				style: style,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 81
				}
			}, _react2.default.createElement(_antd.Layout, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 84
				}
			}, _react2.default.createElement(Header, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 85
				}
			}, _react2.default.createElement('h1', { style: { textAlign: 'center', color: '#fff' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 86
				}
			}, label)), _react2.default.createElement(Content, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 88
				}
			}, _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 89
				}
			}, _react2.default.createElement('b', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 90
				}
			}, 'form id: ', id, ', creater: ', userMap[creater], ', created at: ', createTS)), _react2.default.createElement('div', { style: contentStyle, __source: {
					fileName: _jsxFileName,
					lineNumber: 92
				}
			}, headerContent, bodyContent)), _react2.default.createElement(Footer, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 97
				}
			}, _react2.default.createElement(_antd.Row, { type: 'flex', justify: 'end', __source: {
					fileName: _jsxFileName,
					lineNumber: 98
				}
			}, _react2.default.createElement(_antd.Col, { span: 4, __source: {
					fileName: _jsxFileName,
					lineNumber: 99
				}
			}, footer.components.map(function (item, index) {
				var type = item.type,
				    props = item.props;

				return _react2.default.createElement('span', { key: 'footer-comp-' + index, __source: {
						fileName: _jsxFileName,
						lineNumber: 108
					}
				}, RenderEngine.renderComponent(type, props));
			}))))));
		}
	}, {
		key: 'renderComponent',
		value: function renderComponent(type, props) {
			var componentContent = _ComponentFactory2.default.create(type, props);
			return _react2.default.createElement('div', { style: props.style, __source: {
					fileName: _jsxFileName,
					lineNumber: 125
				}
			}, componentContent);
		}
	}]);

	return RenderEngine;
}();

exports.default = RenderEngine;