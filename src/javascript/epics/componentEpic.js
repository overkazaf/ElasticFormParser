const componentEpic = action$ =>
  action$.ofType('UPDATE_VALUE')
  		.take(1)

export default componentEpic;