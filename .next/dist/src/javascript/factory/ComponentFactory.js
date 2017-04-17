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

var _EventEngine = require('../engine/EventEngine');

var _EventEngine2 = _interopRequireDefault(_EventEngine);

var _IFComponents = require('../components/IFComponents');

var _IFComponents2 = _interopRequireDefault(_IFComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/overkazaf/Desktop/codes/git/playGround/IntelliParser/src/javascript/factory/ComponentFactory.js';


var _IFInputNumber = _IFComponents2.default.IFInputNumber,
    _IFDropdown = _IFComponents2.default.IFDropdown,
    _IFButtonNormal = _IFComponents2.default.IFButtonNormal,
    _IFSmartTable = _IFComponents2.default.IFSmartTable,
    _IFTreeSelect = _IFComponents2.default.IFTreeSelect,
    _IFRangePicker = _IFComponents2.default.IFRangePicker,
    _IFRadioGroupHorizontal = _IFComponents2.default.IFRadioGroupHorizontal,
    _IFRadioGroupVertical = _IFComponents2.default.IFRadioGroupVertical,
    _IFUploadImage = _IFComponents2.default.IFUploadImage,
    _IFCheckBoxGroupVertical = _IFComponents2.default.IFCheckBoxGroupVertical;

var AntdComponents = {
	IFCheckBoxGroupVertical: function IFCheckBoxGroupVertical(option) {
		return _react2.default.createElement(_IFCheckBoxGroupVertical, { ref: option.id, option: option, __source: {
				fileName: _jsxFileName,
				lineNumber: 19
			}
		});
	},
	//IFCheckBoxGroupVertical:(option) => <IFCheckBoxGroupVertical ref={option.id} option={option} />,
	//IFCheckBoxGroupVertical:(option) => <IFCheckBoxGroupVertical ref={option.id} option={option} />,
	//IFCheckBoxGroupVertical:(option) => <IFCheckBoxGroupVertical ref={option.id} option={option} />,
	IFInputNumber: function IFInputNumber(option) {
		return _react2.default.createElement(_IFInputNumber, { ref: option.id, option: option, __source: {
				fileName: _jsxFileName,
				lineNumber: 23
			}
		});
	},
	IFDropdown: function IFDropdown(option) {
		return _react2.default.createElement(_IFDropdown, { ref: option.id, option: option, __source: {
				fileName: _jsxFileName,
				lineNumber: 24
			}
		});
	},
	IFButtonNormal: function IFButtonNormal(option) {
		return _react2.default.createElement(_IFButtonNormal, { ref: option.id, option: option, __source: {
				fileName: _jsxFileName,
				lineNumber: 25
			}
		});
	},
	IFUploadImage: function IFUploadImage(option) {
		return _react2.default.createElement(_IFUploadImage, { ref: option.id, option: option, __source: {
				fileName: _jsxFileName,
				lineNumber: 26
			}
		});
	},
	IFRadioGroupHorizontal: function IFRadioGroupHorizontal(option) {
		return _react2.default.createElement(_IFRadioGroupHorizontal, { ref: option.id, option: option, __source: {
				fileName: _jsxFileName,
				lineNumber: 27
			}
		});
	},
	IFRadioGroupVertical: function IFRadioGroupVertical(option) {
		return _react2.default.createElement(_IFRadioGroupVertical, { ref: option.id, option: option, __source: {
				fileName: _jsxFileName,
				lineNumber: 28
			}
		});
	},
	IFRangePicker: function IFRangePicker(option) {
		return _react2.default.createElement(_IFRangePicker, { ref: option.id, option: option, __source: {
				fileName: _jsxFileName,
				lineNumber: 29
			}
		});
	},
	IFTreeSelect: function IFTreeSelect(option) {
		return _react2.default.createElement(_IFTreeSelect, { ref: option.id, option: option, __source: {
				fileName: _jsxFileName,
				lineNumber: 30
			}
		});
	},
	IFSmartTable: function IFSmartTable(option) {
		return _react2.default.createElement(_IFSmartTable, { ref: option.id, option: option, __source: {
				fileName: _jsxFileName,
				lineNumber: 31
			}
		});
	}
};

var ComponentFactory = function () {
	function ComponentFactory() {
		(0, _classCallCheck3.default)(this, ComponentFactory);
	}

	(0, _createClass3.default)(ComponentFactory, null, [{
		key: 'create',
		value: function create(type, option) {
			return AntdComponents[type](option);
		}
	}]);

	return ComponentFactory;
}();

exports.default = ComponentFactory;