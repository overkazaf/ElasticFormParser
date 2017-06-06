const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const formRecordSchema = new mongoose.Schema({
	_id: String, // 主键
	rid: String, // 记录id
	fid: String, // 模板表单id
	did: String, // 记录摘要ID
	status: Number, // 记录状态
	step: Number, // 记录步骤
	submitter: Number, // 提交人
	createTs: Date, // 创建时间戳
	updateTs: Date // 更新时间戳
});

mongoose.model('FormRecord', formRecordSchema);
