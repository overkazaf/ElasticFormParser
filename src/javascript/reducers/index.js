import { combineReducers } from 'redux-immutable';
import { componentReducer } from './componentReducer';
import { queryReducer } from './queryReducer';

const rootReducer = combineReducers({
	componentReducer,
	queryReducer,
});

export default rootReducer;