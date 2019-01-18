import { combineReducers } from 'redux';
//
import { SHOW_LAST_MINUTE_ITEMS, SHOW_ADVANCE_ITEMS } from 'actionTypes';

const lastMinuteItemsShown = (state = false, action) => {
    switch (action.type) {
        case SHOW_LAST_MINUTE_ITEMS:
            return true;
        case SHOW_ADVANCE_ITEMS:
            return false;
        default:
            return state;
    }
};

const uiReducer = combineReducers({
    lastMinuteItemsShown
});

export default uiReducer;
