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
		style: {
			position: 'relative',
			width: '960px',
			height: '600px',
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
					label: "数量",
					defaultValue: "0",
					value: 1,
					ctrlType: 'int',
					style: {},
					eventList: [{
						type: 'onChange',
						optoins: {
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
					label: "单价",
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
					label: "总价",
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
					label: "房租",
					defaultValue: "0",
					value: 0,
					style: {},
					ctrlType: 'dropdown',
					eventList: []
				},
				children: []
			}]
		},
		body: {
			compKeys: ['comp3'],
			components: []
		},
		footer: {
			compKeys: ['comp5'],
			components: [{
				key: 'comp5',
				type: 'button',
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