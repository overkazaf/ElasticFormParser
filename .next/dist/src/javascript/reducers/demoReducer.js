'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.demoReducer = undefined;

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $$initState = _immutable2.default.fromJS({
    body: null
});

var demoReducer = exports.demoReducer = function demoReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $$initState;
    var action = arguments[1];

    switch (action.type) {
        case 'UPDATE':
            {
                return state.set('body', state.get('payload'));
            }
        default:
            return state;
    }
};