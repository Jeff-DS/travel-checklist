import { SET_TRIP_TYPE } from 'ActionTypes';

export const setTripType = tripType => ({
    type: SET_TRIP_TYPE,
    payload: { tripType }
});
