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

var _reactRedux = require('react-redux');

var _antd = require('antd');

var _QueryTable = require('../../List/QueryTable');

var _QueryTable2 = _interopRequireDefault(_QueryTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/components/LayoutComponents/QueryView/index.js';


var ButtonGroup = _antd.Button.Group;

var QueryView = function (_Component) {
	(0, _inherits3.default)(QueryView, _Component);

	function QueryView() {
		(0, _classCallCheck3.default)(this, QueryView);

		return (0, _possibleConstructorReturn3.default)(this, (QueryView.__proto__ || (0, _getPrototypeOf2.default)(QueryView)).apply(this, arguments));
	}

	(0, _createClass3.default)(QueryView, [{
		key: '_renderQueryTable',
		value: function _renderQueryTable() {
			return _react2.default.createElement(_QueryTable2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 22
				}
			});
		}
	}, {
		key: '_showModal',
		value: function _showModal(ctrlType) {
			this.props.dispatch({
				type: 'SHOW_MODAL',
				payload: ctrlType
			});
		}
	}, {
		key: '_hideModal',
		value: function _hideModal() {
			this.props.dispatch({
				type: 'HIDE_MODAL'
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    modalTitle = _props.modalTitle,
			    modalVisible = _props.modalVisible;

			var dataSource = ['1', '2', '3'];
			var onSelect = function onSelect(value) {
				console.log('onSelect', value);
			};

			var handleChange = function handleChange(value) {
				console.log('handleChange', value);
			};

			var handleOperation = function handleOperation(value) {
				console.log('value', value);
			};

			var handleForm = function handleForm(ctrlType) {
				_this2._showModal(ctrlType);
			};

			return _react2.default.createElement('div', { style: { width: '960px', margin: '20px auto', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, _react2.default.createElement(_antd.Row, { gutter: 16, __source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, _react2.default.createElement(_antd.Col, { className: 'gutter-row', span: 12, __source: {
					fileName: _jsxFileName,
					lineNumber: 65
				}
			}, _react2.default.createElement('div', { className: 'gutter-box', __source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}, _react2.default.createElement(_antd.AutoComplete, {
				dataSource: dataSource,
				style: { width: '100%' },
				onSelect: onSelect,
				onChange: handleChange,
				placeholder: 'input here',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			}))), _react2.default.createElement(_antd.Col, { className: 'gutter-row', span: 4, __source: {
					fileName: _jsxFileName,
					lineNumber: 76
				}
			}, _react2.default.createElement('div', { className: 'gutter-box', __source: {
					fileName: _jsxFileName,
					lineNumber: 77
				}
			}, _react2.default.createElement(_antd.Button, { type: 'primary', icon: 'search', __source: {
					fileName: _jsxFileName,
					lineNumber: 78
				}
			}, 'Search'))), _react2.default.createElement(_antd.Col, { className: 'gutter-row', span: 4, __source: {
					fileName: _jsxFileName,
					lineNumber: 81
				}
			}, _react2.default.createElement('div', { className: 'gutter-box', __source: {
					fileName: _jsxFileName,
					lineNumber: 82
				}
			}, _react2.default.createElement(_antd.Button, { type: 'default', __source: {
					fileName: _jsxFileName,
					lineNumber: 83
				}
			}, 'Advanced Query')))), _react2.default.createElement(_antd.Row, { gutter: 16, __source: {
					fileName: _jsxFileName,
					lineNumber: 90
				}
			}, _react2.default.createElement(_antd.Col, { className: 'gutter-row', span: 12, __source: {
					fileName: _jsxFileName,
					lineNumber: 91
				}
			}, _react2.default.createElement('div', { className: 'gutter-box', style: { margin: '20px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 92
				}
			}, _react2.default.createElement(ButtonGroup, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 93
				}
			}, _react2.default.createElement(_antd.Button, { type: 'default', onClick: handleForm.bind(this, 'add'), icon: 'plus-circle', __source: {
					fileName: _jsxFileName,
					lineNumber: 94
				}
			}, 'Add'), _react2.default.createElement(_antd.Button, { type: 'default', onClick: handleForm.bind(this, 'edit'), icon: 'edit', __source: {
					fileName: _jsxFileName,
					lineNumber: 95
				}
			}, 'Edit'), _react2.default.createElement(_antd.Button, { type: 'default', onClick: handleForm.bind(this, 'view'), icon: 'eye', __source: {
					fileName: _jsxFileName,
					lineNumber: 96
				}
			}, 'View'))))), _react2.default.createElement(_antd.Row, { gutter: 16, __source: {
					fileName: _jsxFileName,
					lineNumber: 102
				}
			}, _react2.default.createElement(_antd.Col, { className: 'gutter-row', span: 24, __source: {
					fileName: _jsxFileName,
					lineNumber: 103
				}
			}, _react2.default.createElement('div', { className: 'gutter-box', __source: {
					fileName: _jsxFileName,
					lineNumber: 104
				}
			}, this._renderQueryTable()), _react2.default.createElement(_antd.Modal, { title: modalTitle, visible: modalVisible,
				onOk: this._hideModal.bind(this),
				onCancel: this._hideModal.bind(this),
				okText: 'OK', cancelText: 'Cancel',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 108
				}
			}, _react2.default.createElement('p', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 113
				}
			}, 'Bla bla ...'), _react2.default.createElement('p', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 114
				}
			}, 'Bla bla ...'), _react2.default.createElement('p', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 115
				}
			}, 'Bla bla ...')))));
		}
	}]);

	return QueryView;
}(_react.Component);

var mapStateToProps = function mapStateToProps($$state, ownProps) {
	return $$state.get('queryReducer').toJS();
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(QueryView);