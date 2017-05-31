'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.componentReducer = undefined;

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $$initState = _immutable2.default.fromJS({
    option: {},
    evtMap: {}
});

var componentReducer = exports.componentReducer = function componentReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $$initState;
    var action = arguments[1];

    switch (action.type) {
        case 'UPDATE':
            {
                console.log('update', action);
                return state;
            }
        default:
            return state;
    }
};