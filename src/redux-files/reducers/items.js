import { combineReducers } from "redux";
// TODO: this imports mock data, for testing only
import { itemsById, allIds as _allIds } from "../../mockData";

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

export const shouldBeVisible = (item, lastMinuteItemsShown) => {
    return [lastMinuteItemsShown, null].includes(item.isLastMinute)
};

// selector used by Checklist component
export const getVisibleIdsByCategory = state => {
    const ids = state.items.allIds;
    const itemsById = state.items.byId;
    const lastMinuteItemsShown = state.ui.lastMinuteItemsShown;
    const idsToShowByCategory = ids
        .filter(id => shouldBeVisible(itemsById[id], lastMinuteItemsShown))
        .filter(id => !itemsById[id].isSubItem)
        .reduce((obj, id) => {
            const category = [itemsById[id].category];
            return {
                ...obj,
                [category]: [ ...obj.category || [], id ]
            };
        }, {}
    );

    return {
        idsToShowByCategory,
        categoryOrder: state.categoryOrder
    };
};
