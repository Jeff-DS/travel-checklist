import { createStore, combineReducers } from 'redux';
import ui from 'Reducers/ui';
import items from 'Reducers/items';
import categoryOrder from 'Reducers/categoryOrder';
import tripTypes from 'Reducers/tripTypes';

const configureStore = () => {
    const rootReducer = combineReducers({
        items,
        categoryOrder,
        tripTypes,
        ui
    });
    const store = createStore(rootReducer);
    return store;
};

export default configureStore;
