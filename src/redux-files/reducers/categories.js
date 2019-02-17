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
        '1': { name: 'Toiletries', id: '1' },
        '2': { name: 'Clothes', id: '2' },
        '3': { name: 'Books/papers', id: '3' },
        '4': { name: 'Electronics', id: '4' },
        '5': { name: 'Documents', id: '5' },
        '6': { name: 'Other', id: '6' },
        '7': { name: 'Tasks before leaving', id: '7' }
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
