import { combineReducers } from 'redux';
//
import { SET_TRIP_TYPE, ADD_ITEM_TO_TRIP_TYPE } from 'actionTypes';

const initialState = {
    byId: {
        1: {
            id: '1',
            name: 'default',
            items: [1, 2, 3, 4, 5]
        },
        2: {
            id: '2',
            name: 'home',
            items: [1, 2, 5]
        },
        3: {
            id: '3',
            name: 'international',
            items: [1, 2, 3, 4, 5, 6]
        }
    },
    allIds: ['1', '2', '3'],
    active: null
};

const byId = (state = initialState.byId, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_TRIP_TYPE:
            const { item, tripType } = action.payload;
            return {
                ...state,
                [tripType]: {
                    ...state[tripType],
                    items: [...state[tripType].items, item]
                }
            };
        default:
            return state;
    }
};

const allIds = (state = initialState.allIds, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const active = (state = initialState.active, action) => {
    switch (action.type) {
        case SET_TRIP_TYPE:
            return action.payload.tripType;
        default:
            return state;
    }
};

const tripTypesReducer = combineReducers({
    byId,
    allIds,
    active
});

export default tripTypesReducer;
