'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommitEngine = function () {
	function CommitEngine() {
		(0, _classCallCheck3.default)(this, CommitEngine);
	}

	(0, _createClass3.default)(CommitEngine, null, [{
		key: 'validateForm',
		value: function validateForm(models) {
			return true;
		}
	}, {
		key: 'commitForm',
		value: function commitForm(models) {

			CommitEngine.doCommit(models);
		}
	}, {
		key: 'doCommit',
		value: function doCommit(models) {
			console.log('models in CommitEngine', models);
		}
	}]);

	return CommitEngine;
}();

exports.default = CommitEngine;