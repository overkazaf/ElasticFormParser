const router = new Router();
const formRecordCtrl = require('../controllers/formRecord.js');

router.post('/form/submit/:fid', function *(id) {
	let { req, res, params} = this;
	formRecordCtrl.submit(req, res, params.fid, function (data) {
		console.log('formRecordCtrl callback', data);
	});
})


module.exports = router;