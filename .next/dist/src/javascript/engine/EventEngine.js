'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventEngine = function () {
	function EventEngine() {
		(0, _classCallCheck3.default)(this, EventEngine);
	}

	(0, _createClass3.default)(EventEngine, null, [{
		key: 'buildEventHandlers',
		value: function buildEventHandlers(props) {
			var eventList = props.eventList;

			var handler = {};

			eventList.map(function (evtObj) {
				handler[evtObj.type] = EventFactory.create(evtObj.type, evtObj.options);
			});

			return handler;
		}
	}]);

	return EventEngine;
}();

exports.default = EventEngine;


var eventMap = {
	'onClick': function onClick(options) {
		return function () {
			var _console;

			(_console = console).log.apply(_console, ['onClick'].concat((0, _toConsumableArray3.default)(options)));
		};
	},
	'onChange': function onChange(options) {
		var params = options;
		return function () {
			var _console2;

			(_console2 = console).log.apply(_console2, ['onChange'].concat((0, _toConsumableArray3.default)(params)));
		};
	}
};

var EventFactory = function () {
	function EventFactory() {
		(0, _classCallCheck3.default)(this, EventFactory);
	}

	(0, _createClass3.default)(EventFactory, null, [{
		key: 'create',
		value: function create(type) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

			return eventMap[type](options);
		}
	}]);

	return EventFactory;
}();