export default
class CommitEngine {

	static validateForm(models) {
		return true;
	}

	static commitForm(models) {

		CommitEngine.doCommit(models);
	}

	static doCommit(models) {
		console.log('models in CommitEngine', models);
	}
}