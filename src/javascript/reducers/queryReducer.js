import Immutable from 'immutable';

const $$initState = Immutable.fromJS({
    modalVisible: false,
    viewType: '',
    selectedItem: null,
    itemId: null,
});

export const queryReducer = (state = $$initState, action) => {
    switch (action.type) {
        case 'SHOW_MODAL': {
        	let newState = state.set('modalVisible', true)
        						.set('viewType', action.payload);

        	return newState;
        }
        case 'HIDE_MODAL': {
        	return state.set('modalVisible', false);
        }

        case 'ROW_ITEM_SELECTED': {
			let newState = state.set('selectedItem', action.payload);
			console.log('new State in ROW_ITEM_SELECTED', newState.get('selectedItem'));
			return newState;
        }

        case 'ADD_ITEM': {
        	return state.set('itemId', action.payload.id);
        }

        case 'EDIT_ITEM': {
        	console.log('action in EDIT_ITEM', action);
        	return state.set('itemId', action.payload.id);
        }
        default: return state;
    }
};
