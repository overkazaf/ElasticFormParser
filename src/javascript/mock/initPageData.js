let layouts = {
  header: [
    {
      grid: {i: 'h1', x: 0, y: 0, w: 2, h: 9, minH: 9},
      component: {
        type: 'IFLabel', 
        props: { 
          id: 'Label_1', 
          name: '标签一',
          description: '',
          ctrlType: 'Label',
          // width: '',
          // height: '',
          // x: '',
          // y: '',
          basicProps: {
            componentTheme: {
              fontColor: {
                value: '',
              },
              backgroundColor: {
                value: '',
              },
              size: {
                value: 'large',
              },
              theme: {
                value: 'primary',
              },
              layoutStyle: {
                value: 'vertical',
              },
            },
            formStatus: {
              visibility: {
                value: true,
              },
              locked: {
                value: false,
              },
              mustInput: {
                value: false,
              },
              autoSum: {
                value: false,
              },
            },
            inputDecoration: {
              addonBefore: {
                value: '',
              },
              addonAfter: {
                value: '',
              },
              prefix: {
                value: '',
              },
              suffix: {
                value: '',
              },
            },
            inputValue: {
              carry: {
                value: '',
              },
              label: {
                value: 'abcd',
              },
              link: {
                value: '#',
              },
              linkTarget: {
                value: '',
              },
              placeholder: {
                value: '',
              },
              defaultValue: {
                value: '',
              },
              value: {
                value: '',
              },
            },
            fontStyles: {
              fontStyle: {
                isMultiple: true,
                values: '',
                // values: [
                //   'fontWeight:bold',
                //   'fontStyle:italic',
                //   'textDecoration:underline'
                // ].join('$'),
              },
              fontSize: {
                value: '12px',
              },
              fontFamily: {
                value: 'sans serif',
              },
              textAlign: {
                value: 'left',
              },
              lineHeight: {
                value: 1.5,
              }
            },
          },
          dataSource: [],
          filterRules: {},
          eventList: [],
          validations: {},
        },
      }
    },
  ],
  body: [],
  footer: [],
};

let data = {
  id: 'IntelliForm-00001', // 设计器系统生成的id
  fid: 'IntelliForm-00001', // 表单id
  key: 'IntelliForm-00001', // 可自定义的表单id，用于扩展
  name: 'form1',　// 名字
  title: '测试表单一',
  description: '测试表单一',
  formType: 0,
  pageIndex: 1,
  theme: 'default',
  creater: 'u-001', // 创建者ID
  createTS: 1488133454806,
  style: {
    width: 960,
  },
  nextFid: 'IntelliForm-00002', // 下推表单ID，用于表单关联
  plugIns: [],
  basicProps: {},
  dataSource: [],
  eventList: [
    {
      eventType: 'onLoad',
      actionList: [
        {
          type: 'LoadDataSource',
          expr: 'xxx|yyy|zzz',
          target: [],
        }
      ]
    }
  ],
  advanced: {},
  layouts,
};

module.exports = data;