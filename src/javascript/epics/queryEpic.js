// DO NOT DO THIS
// creates infinite loop
//const actionEpic = (action$) => action$; 

const queryEpic = action$ => 
	action$.ofType('SHOW_MODAL')
		.take(1)

export default queryEpic;