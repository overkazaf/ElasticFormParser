(function() {
	const pageJson = {
		code: 0,
		errorMsg: '',
		data: {
			id: '123',
			name: '表单名',
			label: '测试表单',
			creater: 'u-001',
			createTS: 1488133454806,
			style: {
				width: '960px', 
				height: '400px',
				margin: '20px auto,
				border: '1px solid #ccc'
			},
			eventList: [
				{
					name: 'onLoad',
					action: 'bringBase',
					params: ['comp4'],
					operator: 'LOOKUP',
					target: 'comp4'
				}
			],
			header: {
				compKeys: ['comp1', 'comp2', 'comp3'],
				components: [
					{
						key: 'comp1',
						type: 'input',
						props: {
							id: 'comp1',
						    name: 'comp1',
						    label: "数量",
		  					defaultValue: "0",
		  					value: 1,
		  					ctrlType: 'int',
		  					style: 'border: 2px solid #ddd;color: #666;padding: 5px;',
							actions: [
								{
									name: 'onUpdate',
									action: 'setToTarget',
									params: ['comp1', 'comp2'],
									operator: 'MUL',
									target: 'comp3'
								}
							]
						},
						children: []
					},
					{
						key: 'comp2',
						type: 'input',
						props: {
							id: 'comp2',
						    name: 'comp2',
						    label: "单价",
		  					defaultValue: "0.00",
		  					value: 3.44,
		  					style: 'border: 2px solid #ddd;color: #666;padding: 5px;',
		  					ctrlType: 'double',
							actions: [
								{
									name: 'onUpdate',
									action: 'setToTarget',
									params: ['comp1', 'comp2'],
									operator: 'MUL',
									target: 'comp3'
								}
							],
						},
						children: []
					},
					{
						key: 'comp3',
						type: 'input',
						props: {
							id: 'comp3',
						    name: 'comp3',
						    label: "总价",
		  					defaultValue: "0.00",
		  					value: 3.44,
		  					ctrlType: 'double',
		  					style: 'border: 2px solid #f00;color: #666; background: #ccc;padding: 5px;',
		  					locked: true,
		  					readOnly: true,
							actions: [
							]
						},
						children: []
					},
					{
						key: 'comp4',
						type: 'select',
						props: {
							id: 'comp4',
						    name: 'comp4',
						    label: "房租",
		  					defaultValue: "0",
		  					value: 0,
		  					style: 'border: 2px solid #ddd;color: #666;padding: 5px;',
		  					ctrlType: 'dropdown',
							actions: [],
						},
						children: []
					}
				]
			},
			body: {
				compKeys: ['comp3'],
				components: [],
			},
			footer: {
				compKeys: ['comp4'],
				components: [],
			}
		}
	};

	window.__DATA__ = pageJson;
})();