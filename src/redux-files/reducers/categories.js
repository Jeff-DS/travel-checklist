import { combineReducers } from 'redux';

// const initialState = [
//     'Toiletries',
//     'Clothes',
//     'Books/papers',
//     'Electronics',
//     'Documents',
//     'Other',
//     'Tasks before leaving'
// ];

const initialState = {
    byId: {
        '1': { name: 'Toiletries' },
        '2': { name: 'Clothes' },
        '3': { name: 'Books/papers' },
        '4': { name: 'Electronics' },
        '5': { name: 'Documents' },
        '6': { name: 'Other' },
        '7': { name: 'Tasks before leaving' }
    },
    allIds: ['1', '2', '3', '4', '5', '6', '7']
};

const byId = (state = initialState.byId, action) => {
    switch (action.type) {
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

const categoriesReducer = combineReducers({
    byId,
    allIds
});
export default categoriesReducer;
