'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _props;

var pageJson = {
	code: 0,
	errorMsg: '',
	data: {
		id: '123',
		name: '表单名',
		label: '测试表单',
		creater: 'u-001',
		createTS: 1488133454806,
		contentMinHeight: 480,
		style: {
			position: 'relative',
			width: '960px',
			margin: '20px auto',
			padding: '10px',
			border: '2px solid #ccc',
			borderRadius: '5px'
		},
		eventList: [{
			type: 'onLoad',
			action: 'bringBase',
			params: ['comp4'],
			operator: 'LOOKUP',
			target: 'comp4'
		}],
		header: {
			components: [{
				key: 'comp0',
				type: 'inputNumber',
				props: {
					id: 'comp0',
					name: 'comp0',
					addonBefore: "数量",
					addonAfter: "只",
					prefix: "",
					subfix: "",
					defaultValue: 0,
					value: 1,

					visibility: 1,
					locked: 1,
					mustInput: 1,
					needToSum: 0,
					lookUpType: null,
					lookUpStretagy: 'DROP_DOWN',
					filterRules: [],

					style: {},
					eventList: []
				},
				children: []
			}, {
				key: 'comp1',
				type: 'inputNumber',
				props: {
					id: 'comp1',
					name: 'comp1',
					addonBefore: "数量",
					addonAfter: "个",
					prefix: "数量",
					subfix: "个",
					defaultValue: "0",
					value: 1,

					visibility: 1,
					locked: 1,
					mustInput: 1,
					needToSum: 0,
					lookUpType: null,
					lookUpStretagy: 'DROP_DOWN',
					filterRules: [],

					style: {},
					eventList: [{
						eventType: 'onChange',
						options: {
							action: 'setToTarget',
							params: ['comp1', 'comp2'],
							operator: 'MUL',
							target: 'comp3'
						}
					}]
				},
				children: []
			}, {
				key: 'comp2',
				type: 'inputNumber',
				props: {
					id: 'comp2',
					name: 'comp2',
					addonBefore: "单价",
					addonAfter: "元",
					prefix: "单价",
					subfix: "元",
					defaultValue: "0.00",
					value: 3.44,

					visibility: 1,
					locked: 1,
					mustInput: 1,
					needToSum: 0,
					lookUpType: null,
					lookUpStretagy: 'DROP_DOWN',
					filterRules: [],

					style: {},
					ctrlType: 'double',
					eventList: [{
						eventType: 'onChange',
						options: {
							action: 'setToTarget',
							params: ['comp1', 'comp2'],
							expression: '${comp1}*${comp2}',
							target: 'comp3'
						}
					}]
				},
				children: []
			}, {
				key: 'comp3',
				type: 'inputNumber',
				props: (_props = {
					id: 'comp3',
					name: 'comp3',
					addonBefore: "总价",
					addonAfter: "元",
					prefix: "总价",
					subfix: "元",
					defaultValue: "0.00",
					value: 3.44,

					visibility: 1,
					locked: 1,
					mustInput: 1,
					needToSum: 0,
					lookUpType: null,
					lookUpStretagy: 'DROP_DOWN',
					filterRules: [],

					ctrlType: 'double',
					style: {}
				}, (0, _defineProperty3.default)(_props, 'locked', true), (0, _defineProperty3.default)(_props, 'readOnly', true), (0, _defineProperty3.default)(_props, 'eventList', []), _props),
				children: []
			}, {
				key: 'comp4',
				type: 'select',
				props: {
					id: 'comp4',
					name: 'comp4',
					label: "==== 房租 ====",
					defaultValue: "0",
					value: 0,
					style: {},
					baseData: [{ label: '水费', value: 1 }, { label: '电费', value: 2 }, { label: '网费', value: 3 }],
					ctrlType: 'dropdown',
					eventList: []
				},
				children: []
			}, {
				key: 'comp5',
				type: 'rangePicker',
				props: {
					id: 'comp5',
					name: 'comp5',

					label: "==== 房租 ====",
					defaultValue: "0",
					value: 0,

					visibility: 1,
					locked: 1,
					mustInput: 1,
					needToSum: 0,
					lookUpType: null,
					lookUpStretagy: 'DROP_DOWN',
					filterRules: [],

					style: {},
					baseData: [{ label: '水费', value: 1 }, { label: '电费', value: 2 }, { label: '网费', value: 3 }],
					ctrlType: 'dropdown',
					eventList: []
				},
				children: []
			}, {
				key: 'comp6',
				type: 'treeSelect',
				props: {
					id: 'comp6',
					name: 'comp6',

					label: "==== 房租 ====",
					defaultValue: "0",
					value: 0,

					visibility: 1,
					locked: 1,
					mustInput: 1,
					needToSum: 0,
					lookUpType: null,
					lookUpStretagy: 'DROP_DOWN',
					filterRules: [],

					style: {},
					baseData: [{ label: '水费', value: 1 }, { label: '电费', value: 2 }, { label: '网费', value: 3 }],
					ctrlType: 'dropdown',
					eventList: []
				},
				children: []
			}]
		},
		body: {
			compKeys: ['comp3'],
			components: [{
				key: 'comp7',
				type: 'editableTable',
				props: {
					label: "==== 房租 ====",
					defaultValue: "0",
					value: 0,

					visibility: 1,
					locked: 1,
					mustInput: 1,
					needToSum: 0,
					lookUpType: null,
					lookUpStretagy: 'DROP_DOWN',
					filterRules: [],

					style: {},
					baseData: [{ label: '水费', value: 1 }, { label: '电费', value: 2 }, { label: '网费', value: 3 }],
					ctrlType: 'dropdown',
					eventList: []
				},
				children: []
			}]
		},
		footer: {
			components: [{
				key: 'comp5',
				type: 'submit',
				props: {
					label: "提交",

					visibility: 1,
					locked: 1,
					mustInput: 1,
					needToSum: 0,
					lookUpType: null,
					lookUpStretagy: null,
					filterRules: [],

					eventList: [{
						type: 'onClick',
						options: ['comp1', 'comp2']
					}]
				},
				children: []
			}]
		}
	}
};

exports.default = pageJson;