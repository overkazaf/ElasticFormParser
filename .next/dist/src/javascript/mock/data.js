'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
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
			compKeys: ['comp1', 'comp2', 'comp3'],
			components: [{
				key: 'comp1',
				type: 'input',
				props: {
					id: 'comp1',
					name: 'comp1',
					addonBefore: "数量",
					addonAfter: "个",
					prefix: "数量",
					subfix: "个",
					defaultValue: "0",
					value: 1,
					ctrlType: 'int',
					style: {},
					eventList: [{
						type: 'onChange',
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
				type: 'input',
				props: {
					id: 'comp2',
					name: 'comp2',
					addonBefore: "单价",
					addonAfter: "元",
					prefix: "单价",
					subfix: "元",
					defaultValue: "0.00",
					value: 3.44,
					style: {},
					ctrlType: 'double',
					eventList: [{
						type: 'onChange',
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
				key: 'comp3',
				type: 'input',
				props: {
					id: 'comp3',
					name: 'comp3',
					addonBefore: "总价",
					addonAfter: "元",
					prefix: "总价",
					subfix: "元",
					defaultValue: "0.00",
					value: 3.44,
					ctrlType: 'double',
					style: {},
					locked: true,
					readOnly: true,
					eventList: []
				},
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
				key: 'comp6',
				type: 'treeSelect',
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
			}]
		},
		body: {
			compKeys: ['comp3'],
			components: [{
				key: 'comp7',
				type: 'editableTable',
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
			}]
		},
		footer: {
			compKeys: ['comp5'],
			components: [{
				key: 'comp5',
				type: 'submit',
				props: {
					id: 'comp5',
					name: 'comp5',
					label: "提交",
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