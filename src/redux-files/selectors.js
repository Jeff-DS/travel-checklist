import { createSelector } from 'reselect';
//
import { shouldBeVisible } from 'Utils';

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
        state => state.categoryOrder
    ],
    (itemsById, ids, lastMinuteItemsShown, categoryOrder) => {
        const idsToShowByCategory = ids
            .filter(id => shouldBeVisible(itemsById[id], lastMinuteItemsShown))
            .filter(id => !itemsById[id].isSubItem)
            .reduce((obj, id) => {
                const category = [itemsById[id].category];
                return {
                    ...obj,
                    [category]: [...(obj.category || []), id]
                };
            }, {});

        return {
            idsToShowByCategory,
            categoryOrder
        };
    }
);
