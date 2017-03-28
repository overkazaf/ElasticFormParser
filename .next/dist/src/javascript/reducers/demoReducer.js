'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.demoReducer = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $$initState = {
    formData: null
};

var demoReducer = exports.demoReducer = function demoReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $$initState;
    var action = arguments[1];

    switch (action.type) {
        case 'UPDATE_VIEW':
            {
                var newState = (0, _assign2.default)({}, state);
                newState.formData = action.payload;

                console.log('newState', newState);
                return newState;
            }
        default:
            return state;
    }
};