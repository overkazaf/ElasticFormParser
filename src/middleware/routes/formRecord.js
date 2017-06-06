const Router = require('koa-router');
const router = new Router();
const mongoose = require('mongoose');
const koaBody = require('koa-body');
const co = require('co');
const ObjectId = mongoose.Schema.Types.ObjectId;
const pageJson = require('../../javascript/mock/initPageData.js');

router.get('/form/init',
	async ctx => {
		const IFEntity = mongoose.model('IFEntity');

		let newIFEntity = new IFEntity(JSON.parse(JSON.stringify(pageJson)));
		
		let result = newIFEntity.save(function(err, docs){
		    if(err) console.log(err);
		    console.log('IFEntity保存成功：' + docs);

		    ctx.status = 200;
		});


		await result;

	});

router.post('/form/submit', koaBody(),
	async ctx => {
		let {
			rid,
			fid,
			did,
			status,
			step,
			submitter,
			model,
		} = ctx.request.body;
	 	// => POST body object

	  	const FormRecord = mongoose.model('FormRecord');

	  	if (!rid) {
	  		let createTs = new Date().getTime();
	  		const FormRecordDigest = mongoose.model('FormRecordDigest');
	  		let recordDigests = [];

	  		Object.keys(model).map((modelKey) => {
	  			const newFormRecordDigest = new FormRecordDigest({
		  			fid,
					cid: modelKey,
					value: model[modelKey],
		  		});

		  		recordDigests.push(newFormRecordDigest);
	  		});

	  		FormRecordDigest.insertMany(recordDigests, (err, docs) => {
	  			if(err) console.log(err);
        		console.log('保存成功：' + docs);
	  		});

	  		

	  	// 	const newFormRecord = new FormRecord({
	  	// 		rid, // 记录id
				// fid, // 模板表单id
				// did: ObjectId, // 记录摘要ID
				// status: 0, // 记录状态
				// step: 0, // 记录步骤
				// submitter, // 提交人
				// createTs, // 创建时间戳
				// updateTs: createTs // 更新时间戳
	  	// 	})

	  		// console.log('newFormRecord', 'xxxxxx');
	  		// console.log('newFormRecord', newFormRecord);
	  	}

	  	// ctx.status = 200;
	  	// ctx.body = JSON.stringify({
	  	// 	code: 0,
	  	// 	message: 'LOLOLOL'
	  	// });


		let result = FormRecord.findOne({fid: null}, (err, data) => {
			if (err) {
				ctx.body = JSON.stringify(err);
			}

			// ctx.set({
			// 	"Access-Control-Allow-Origin": "*",
			// 	"Access-Control-Allow-Methods": "POST, GET, OPTIONS",
			// 	"Access-Control-Allow-Headers": "X-PINGOTHER, Content-Type",
			// 	"Access-Control-Max-Age": 86400
			// });

			ctx.status = 200;
			ctx.body = JSON.stringify({
				code: 0,
				message: '1111LOLOLOLOLOLOLOLOL',
				data,
			});

			console.log('data in mongoose', data);
			
		});

		console.log('result', result);

		await result;

		// ctx.respond = false;
		// ctx.body = JSON.stringify({
		// 	code: 0,
		// 	message: 'LOLOLOLOLOLOLOLOL',
		// 	data: {},
		// });
	}
);

module.exports = router;