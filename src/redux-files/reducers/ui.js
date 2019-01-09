import { combineReducers } from 'redux';
import { SHOW_DAY_BEFORE_TRAVEL, SHOW_DAY_OF_TRAVEL } from '../actionTypes';

const DAY_BEFORE_TRAVEL = 'dayBefore';
const DAY_OF_TRAVEL = 'dayOf';

const initialState = DAY_BEFORE_TRAVEL;

const dayToShow = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_DAY_BEFORE_TRAVEL:
            return DAY_BEFORE_TRAVEL;
        case SHOW_DAY_OF_TRAVEL:
            return DAY_OF_TRAVEL;
        default:
            return state;
    }
};

const uiReducer = combineReducers({
    dayToShow
});

export default uiReducer;
