/**
 * [RecordService]
 * 表单记录Service
 */
const mongoose = require('mongoose');
const modelName = mongoose.model('FormRecord');

module.exports.find = function(option, callback) {
	modelName.findOne(option, function(err, data) {
		if (err) throw err;
		console.log('data in FormRecordService', data);
		callback && callback(data);
	});
};


module.exports.find = function(option, callback) {
	modelName.findOne(option, function(err, data) {
		if (err) throw err;
		console.log('data in FormRecordService', data);
		callback && callback(data);
	});
};