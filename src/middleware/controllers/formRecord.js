var async = require('async');
var mongoose = require('mongoose');
var FormRecord = mongoose.model('FormRecord');


exports.submit = function(req, res, fid, callback) {
	
	FormRecord.findOne({'fid': fid}, function (err, data){
		if (err) throw err;
		

		callback(data);
	}
};