const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const ifEntitySchema = new mongoose.Schema({
	fid: String, // 表单id
	key: String, // 表单key，用户可自定义
	name: String,
	title: String,
	description: String,
	formType: Number,
	theme: String,
	steps: Number,
	pageIndex: Number,
	eventList: Array,
	dataSource: Array,
	basicProps: Object,
	style: Object,
	layouts: Array,
	nextFid: String,
	plugIns: Array,
	creater: String,
	createDate: Date
});

mongoose.model('IFEntity', ifEntitySchema);