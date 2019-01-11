import { createSelector } from 'reselect';
//
import { shouldBeVisible } from '../utils';

export const getVisibleIdsByCategory = createSelector(
    [
        state => state.items.byId,
        state => state.items.allIds,
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
                    [category]: [ ...obj.category || [], id ]
                };
            }, {}
        );

        return {
            idsToShowByCategory,
            categoryOrder
        };
    }
);
