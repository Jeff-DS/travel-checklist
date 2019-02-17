import { SET_TRIP_TYPE, ADD_ITEM_TO_TRIP_TYPE } from 'actionTypes';

export const setTripType = tripType => ({
    type: SET_TRIP_TYPE,
    payload: { tripType }
});

export const addItemToTripType = (item, tripType) => ({
    type: ADD_ITEM_TO_TRIP_TYPE,
    payload: { item, tripType }
});
