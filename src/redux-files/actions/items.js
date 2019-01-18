import { SET_ITEM_TO_DONE, SET_ITEM_TO_NOT_DONE } from 'actionTypes';

export const setItemToDone = id => ({
    type: SET_ITEM_TO_DONE,
    payload: { id }
});

export const setItemToNotDone = id => ({
    type: SET_ITEM_TO_NOT_DONE,
    payload: { id }
});
