"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _isomorphicFetch = require("isomorphic-fetch");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommitEngine = function () {
	function CommitEngine() {
		(0, _classCallCheck3.default)(this, CommitEngine);
	}

	(0, _createClass3.default)(CommitEngine, null, [{
		key: "init",
		value: function init(info) {
			CommitEngine.formInfo = info;
		}
	}, {
		key: "validateForm",
		value: function validateForm(model) {
			return true;
		}
	}, {
		key: "submitForm",
		value: function submitForm(model) {
			var _CommitEngine$formInf = CommitEngine.formInfo,
			    formId = _CommitEngine$formInf.formId,
			    submitter = _CommitEngine$formInf.submitter;

			// combine model

			var dataModel = {
				formId: formId,
				submitter: submitter,
				createDate: +new Date(),
				model: model
			};
			CommitEngine.doSubmit(dataModel);
		}
	}, {
		key: "doSubmit",
		value: function doSubmit(dataModel) {

			var submitUrl = "http://localhost:3005/form/submit/" + dataModel.formId;

			(0, _isomorphicFetch2.default)(submitUrl, dataModel).then(function (response) {
				if (response.status >= 400) {
					throw new Error("Bad response from server");
				}
				return response.json();
			}).then(function (stories) {
				console.log(stories);
			});

			//console.log('models in CommitEngine', dataModel);
		}
	}]);

	return CommitEngine;
}();

CommitEngine.formInfo = null;
exports.default = CommitEngine;