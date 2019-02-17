import { SET_ITEM_TO_DONE, SET_ITEM_TO_NOT_DONE, ADD_ITEM } from 'actionTypes';

export const setItemToDone = id => ({
    type: SET_ITEM_TO_DONE,
    payload: { id }
});

export const setItemToNotDone = id => ({
    type: SET_ITEM_TO_NOT_DONE,
    payload: { id }
});

export const addItem = ({
    id,
    content,
    category,
    subItemIds,
    isLastMinute,
    isDone,
    isSubItem
}) => ({
    type: ADD_ITEM,
    payload: {
        id,
        content,
        category,
        subItemIds,
        isLastMinute,
        isDone,
        isSubItem
    }
});
