'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.queryReducer = undefined;

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $$initState = _immutable2.default.fromJS({
    modalVisible: false,
    viewType: '',
    selectedItem: null,
    itemId: null
});

var queryReducer = exports.queryReducer = function queryReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $$initState;
    var action = arguments[1];

    switch (action.type) {
        case 'SHOW_MODAL':
            {
                var newState = state.set('modalVisible', true).set('viewType', action.payload);

                return newState;
            }
        case 'HIDE_MODAL':
            {
                return state.set('modalVisible', false);
            }

        case 'ROW_ITEM_SELECTED':
            {
                var _newState = state.set('selectedItem', action.payload);
                console.log('new State in ROW_ITEM_SELECTED', _newState.get('selectedItem'));
                return _newState;
            }

        case 'ADD_ITEM':
            {
                return state.set('itemId', action.payload.id);
            }

        case 'EDIT_ITEM':
            {
                console.log('action in EDIT_ITEM', action);
                return state.set('itemId', action.payload.id);
            }
        default:
            return state;
    }
};