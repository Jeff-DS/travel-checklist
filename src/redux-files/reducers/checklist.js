import { combineReducers } from "redux";
// TODO: this imports mock data, for testing only
import { itemsById as _itemsById } from "../../mockData";

// real initial state - using the other one for testing
// const initialState = {
//     checklist: {
//         idsByDay: {
//             dayBefore: [],
//             dayOf: []
//         },
//         itemsById: {}
//     }
// }

const initialState = {
    idsByDay: {
        dayBefore: [2, 5],
        dayOf: [1, 4],
        hasSubItems: [3]
    },
    itemsById: _itemsById
};

const idsByDay = (state = initialState.idsByDay, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const itemsById = (state = initialState.itemsById, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const checklistReducer = combineReducers({
    idsByDay,
    itemsById
});

export default checklistReducer;
