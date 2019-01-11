import { createStore, combineReducers } from 'redux';
import ui from './reducers/ui';
import items from './reducers/items';
import categoryOrder from './reducers/categoryOrder';

const configureStore = () => {
    const rootReducer = combineReducers({
        items,
        categoryOrder,
        ui
    });
    const store = createStore(rootReducer);
    return store;
};

export default configureStore;
