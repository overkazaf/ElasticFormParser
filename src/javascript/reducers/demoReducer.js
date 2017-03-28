import Immutable from 'immutable';

const $$initState = {
    formData: null,
};

export const demoReducer = (state = $$initState, action) => {
    switch (action.type) {
        case 'UPDATE_VIEW':{
        	let newState = Object.assign({}, state);
        	newState.formData = action.payload;

        	console.log('newState', newState);
            return newState;
        }
        default: return state;
    }
};
