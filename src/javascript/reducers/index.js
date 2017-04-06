import { combineReducers } from 'redux-immutable';
import { componentReducer } from './componentReducer';

const rootReducer = combineReducers({
	componentReducer,
});

export default rootReducer;