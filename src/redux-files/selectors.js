import { createSelector } from 'reselect';
//
import { shouldBeVisible } from 'utils';

const getItemsForTripType = state => {
    return state.tripTypes.active === null
        ? []
        : state.tripTypes.byId[state.tripTypes.active].items;
};

export const getVisibleIdsByCategory = createSelector(
    [
        state => state.items.byId,
        state => getItemsForTripType(state),
        state => state.ui.lastMinuteItemsShown,
        state => state.categories
    ],
    (itemsById, ids, lastMinuteItemsShown, categories) => {
        const idsToShowByCategory = ids
            .filter(id => shouldBeVisible(itemsById[id], lastMinuteItemsShown))
            .filter(id => !itemsById[id].isSubItem)
            .reduce((obj, id) => {
                const item = itemsById[id];
                const category = categories.byId[item.category].name;
                return {
                    ...obj,
                    [category]: [...(obj[category] || []), id]
                };
            }, {});
        const orderedCategoryNames = categories.allIds.map(id => categories.byId[id].name);

        return {
            idsToShowByCategory,
            categories: orderedCategoryNames
        };
    }
);
