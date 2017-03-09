import { combineReducers } from 'redux-immutable';
import { demoReducer } from './demoReducer';

const rootReducer = combineReducers({
	demoReducer,
});

export default rootReducer;