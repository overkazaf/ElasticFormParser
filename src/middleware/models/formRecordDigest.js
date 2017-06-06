const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const formRecordDigestSchema = new mongoose.Schema({
	_id: ObjectId,
	id: String,
	fid: String,
	cid: String,
	value: String
});

mongoose.model('FormRecordDigest', formRecordDigestSchema);
