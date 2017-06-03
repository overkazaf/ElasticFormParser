import fetch from 'isomorphic-fetch';


export default
class CommitEngine {

	static formInfo = null;

	static init(info) {
		CommitEngine.formInfo = info;
	}

	static validateForm(model) {
		return true;
	}

	static submitForm(model) {
		let {
			formId,
			submitter,
		} = CommitEngine.formInfo;

		// combine model
		let dataModel = {
			formId,
			submitter,
			createDate: +new Date(),
			model,
		};
		CommitEngine.doSubmit(dataModel);
	}

	static doSubmit(dataModel) {

		let submitUrl = `http://localhost:3005/form/submit/${dataModel.formId}`;
		
		fetch(submitUrl, dataModel)
			.then(function(response) {
		        if (response.status >= 400) {
		            throw new Error("Bad response from server");
		        }
		        return response.json();
		    })
		    .then(function(stories) {
		        console.log(stories);
		    });

		//console.log('models in CommitEngine', dataModel);
	}
}