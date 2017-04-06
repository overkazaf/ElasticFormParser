const pageJson = {
	code: 0,
	errorMsg: '',
	data: {
		id: 'IntelligentForm-00000011',
		name: '表单名',
		label: 'XXX公司物料采购单',
		creater: 'u-001',
		createTS: 1488133454806,
		contentMinHeight: 450,
		style: {
			position: 'relative',
			width: '960px', 
			margin: '20px auto',
			padding: '10px',
			border: '2px solid #ccc',
			borderRadius: '5px'
		},
		eventList: [
			{
				eventType: 'onLoad',
				options: {
					action: 'BringBase',
					params: [],
					expression: 'LOOKUP',
					target: ['comp4']
				}
			}
		],
		header: {
			components: [
				{
					key: 'comp0',
					type: 'IFInputNumber',
					props: {
						id: 'comp0',
					    name: 'comp0',
					    placeholder: "输入数量呗",
					    addonBefore: "数量",
					    addonAfter: "只",
					    prefix: "",
					    subfix: "",
	  					defaultValue: 0,
	  					value: 1,

	  					visibility: 1,
	  					locked: 0,
	  					mustInput: 1,
	  					needToSum: 0,
	  					lookUpType: null,
	  					lookUpStretagy: 'DROP_DOWN',
	  					filterRules: [],

	  					style: {
	  					},
						eventList: [
							{
								eventType: 'onKeyUp',
								options: {
									action: 'UpdateValue',
									params: [],
									expression: '',
									target: ['comp0'],
								},
							}
						]
					},
				},
				{
					key: 'comp1',
					type: 'IFButtonNormal',
					props: {
						id: 'comp1',
					    name: 'comp1',
					    theme: 'dashed',
					    ghost: 0,
					    label: 'Click Me',

	  					visibility: 1,
	  					locked: 0,
	  					mustInput: 1,
	  					needToSum: 0,
	  					lookUpType: null,
	  					lookUpStretagy: null,
	  					filterRules: [],
	  					style: {
	  					},
						eventList: [
							{
								eventType: 'onClick',
								options: {
									action: 'SetToTarget',
									params: ['comp0'],
									expression: '222',
									target: ['comp0'],
								},
							}
						]
					},
				},
			]
		},
		body: {
			components: [
			],
		},
		footer: {
			components: [
				{
					key: 'comp2',
					type: 'IFButtonNormal',
					props: {
						id: 'comp2',
					    name: 'comp2',
					    theme: 'primary',
					    label: 'CommitForm',
					    ghost: 0,

	  					visibility: 1,
	  					locked: 0,
	  					mustInput: 0,
	  					needToSum: 0,
	  					lookUpType: null,
	  					lookUpStretagy: null,
	  					filterRules: [],
	  					style: {
	  					},
						eventList: [
							{
								eventType: 'onClick',
								options: {
									action: 'CommitForm',
									params: [],
									expression: 'EXEC_VALIDATE',
									target: [],
								},
							}
						]
					},
				},
			],
		}
	}
};

export default pageJson;