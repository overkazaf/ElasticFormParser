const demoEpic = action$ =>
  action$.ofType('UPDATE_VIEW')
  		.take(1)

export default demoEpic;