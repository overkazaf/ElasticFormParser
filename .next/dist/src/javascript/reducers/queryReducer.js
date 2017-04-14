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
    modalTitle: ''
});

var queryReducer = exports.queryReducer = function queryReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $$initState;
    var action = arguments[1];

    switch (action.type) {
        case 'SHOW_MODAL':
            {
                console.log('showing modal', state);

                var newState = state.set('modalVisible', true).set('modalTitle', action.payload);

                return newState;
            }
        case 'HIDE_MODAL':
            {
                return state.set('modalVisible', false);
            }

        case 'ROW_ITEM_SELECTED':
            {
                console.log('action in ROW_ITEM_SELECTED', action);
                return state.set('selectedItem', action.payload.item);
            }
        default:
            return state;
    }
};