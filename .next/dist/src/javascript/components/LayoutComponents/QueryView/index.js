'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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
		key: '_handleRowSelect',
		value: function _handleRowSelect(item, index) {
			this.props.dispatch({
				type: 'ROW_ITEM_SELECTED',
				payload: item
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    viewType = _props.viewType,
			    modalVisible = _props.modalVisible,
			    itemId = _props.itemId,
			    selectedItem = _props.selectedItem,
			    data = _props.data;

			console.log('data in QueryView', data);

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

			return _react2.default.createElement('div', { style: { width: '960px', margin: '120px auto', padding: '10px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			}, _react2.default.createElement(_antd.Row, { gutter: 16, __source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}, _react2.default.createElement(_antd.Col, { className: 'gutter-row', span: 12, __source: {
					fileName: _jsxFileName,
					lineNumber: 74
				}
			}, _react2.default.createElement('div', { className: 'gutter-box', __source: {
					fileName: _jsxFileName,
					lineNumber: 75
				}
			}, _react2.default.createElement(_antd.AutoComplete, {
				dataSource: dataSource,
				style: { width: '100%' },
				onSelect: onSelect,
				onChange: handleChange,
				placeholder: 'input here',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 76
				}
			}))), _react2.default.createElement(_antd.Col, { className: 'gutter-row', span: 4, __source: {
					fileName: _jsxFileName,
					lineNumber: 85
				}
			}, _react2.default.createElement('div', { className: 'gutter-box', __source: {
					fileName: _jsxFileName,
					lineNumber: 86
				}
			}, _react2.default.createElement(_antd.Button, { type: 'primary', icon: 'search', __source: {
					fileName: _jsxFileName,
					lineNumber: 87
				}
			}, 'Search'))), _react2.default.createElement(_antd.Col, { className: 'gutter-row', span: 4, __source: {
					fileName: _jsxFileName,
					lineNumber: 90
				}
			}, _react2.default.createElement('div', { className: 'gutter-box', __source: {
					fileName: _jsxFileName,
					lineNumber: 91
				}
			}, _react2.default.createElement(_antd.Button, { type: 'default', __source: {
					fileName: _jsxFileName,
					lineNumber: 92
				}
			}, 'Advanced Query')))), _react2.default.createElement(_antd.Row, { gutter: 16, __source: {
					fileName: _jsxFileName,
					lineNumber: 99
				}
			}, _react2.default.createElement(_antd.Col, { className: 'gutter-row', span: 12, __source: {
					fileName: _jsxFileName,
					lineNumber: 100
				}
			}, _react2.default.createElement('div', { className: 'gutter-box', style: { margin: '10px 0 20px 0' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 101
				}
			}, _react2.default.createElement(ButtonGroup, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 102
				}
			}, _react2.default.createElement(_antd.Button, { type: 'default', onClick: handleForm.bind(this, 'add'), icon: 'plus-circle', __source: {
					fileName: _jsxFileName,
					lineNumber: 103
				}
			}, 'Add'), _react2.default.createElement(_antd.Button, { type: 'default', onClick: handleForm.bind(this, 'edit'), icon: 'edit', __source: {
					fileName: _jsxFileName,
					lineNumber: 104
				}
			}, 'Edit'), _react2.default.createElement(_antd.Button, { type: 'default', onClick: handleForm.bind(this, 'view'), icon: 'eye', __source: {
					fileName: _jsxFileName,
					lineNumber: 105
				}
			}, 'View'))))), _react2.default.createElement(_antd.Row, { gutter: 16, __source: {
					fileName: _jsxFileName,
					lineNumber: 111
				}
			}, _react2.default.createElement(_antd.Col, { className: 'gutter-row', span: 24, __source: {
					fileName: _jsxFileName,
					lineNumber: 112
				}
			}, _react2.default.createElement('div', { className: 'gutter-box', __source: {
					fileName: _jsxFileName,
					lineNumber: 113
				}
			}, _react2.default.createElement(_QueryTable2.default, {
				data: data.list,
				handleRowSelect: this._handleRowSelect.bind(this),
				__source: {
					fileName: _jsxFileName,
					lineNumber: 114
				}
			})), _react2.default.createElement(_antd.Modal, {
				title: viewType,
				visible: modalVisible,
				width: '1000',
				style: { top: 20 },
				wrapClassName: 'vertical-center-modal',
				onOk: this._hideModal.bind(this),
				onCancel: this._hideModal.bind(this),
				okText: 'OK', cancelText: 'Cancel',
				confirmLoading: 'true',
				maskClosable: 'false',
				footer: null,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 120
				}
			}, _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 133
				}
			}, 'SelectedItem:', (0, _stringify2.default)(selectedItem), _react2.default.createElement('iframe', {
				src: 'http://localhost:3000/index?pageId={0}',
				frameBorder: '0',
				style: { width: '100%', height: '640px' },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 137
				}
			}))))));
		}
	}]);

	return QueryView;
}(_react.Component);

var mapStateToProps = function mapStateToProps($$state, ownProps) {
	return $$state.get('queryReducer').toJS();
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(QueryView);