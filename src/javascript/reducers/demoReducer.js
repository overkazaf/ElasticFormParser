import Immutable from 'immutable';

const $$initState = Immutable.fromJS({
    body: null,
});

export const demoReducer = (state = $$initState, action) => {
    switch (action.type) {
        case 'UPDATE':{
            return state.set('body', state.get('payload'));
        }
        default: return state;
    }
};
