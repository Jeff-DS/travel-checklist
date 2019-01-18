import { combineReducers } from 'redux';
//
// TODO: this imports mock data, for testing only
import { itemsById, allIds as _allIds } from '../../mockData';
import { SET_ITEM_TO_DONE, SET_ITEM_TO_NOT_DONE } from 'actionTypes';

// real initial state - using the other one for testing
// const initialState = {
//     items: {
//         byId: {},
//         allIds: []
//     }
// };

const initialState = {
    items: {
        byId: itemsById,
        allIds: _allIds
    }
};

const byId = (state = initialState.items.byId, action) => {
    switch (action.type) {
        case SET_ITEM_TO_DONE:
        case SET_ITEM_TO_NOT_DONE:
            const { id } = action.payload;
            const isDone = action.type === SET_ITEM_TO_DONE ? true : false;
            const item = { ...state[id], isDone };
            return { ...state, [id]: { ...item } };
        default:
            return state;
    }
};

const allIds = (state = initialState.items.allIds, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const itemsReducer = combineReducers({
    byId,
    allIds
});

export default itemsReducer;
