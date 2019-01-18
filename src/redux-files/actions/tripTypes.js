import { SET_TRIP_TYPE } from 'actionTypes';

export const setTripType = tripType => ({
    type: SET_TRIP_TYPE,
    payload: { tripType }
});
