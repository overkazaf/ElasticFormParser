/**
 * [mongoose 这个是个模板代码，其余model可以依这个模式实现]
 * @type {[type]}
 */
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
	_id: ObjectId,
	name: String,
	nickName: String,
	password: String,
	salt: String,
	email: String,
	creater: ObjectId,
	createTs: Date
});

mongoose.model('User', userSchema);
