import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
//
import ui from 'reducers/ui';
import items from 'reducers/items';
import categoryOrder from 'reducers/categoryOrder';
import tripTypes from 'reducers/tripTypes';

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet
};

const configureStore = () => {
    const rootReducer = combineReducers({
        items,
        categoryOrder,
        tripTypes,
        ui
    });
    const persistedReducer = persistReducer(persistConfig, rootReducer)
    const store = createStore(persistedReducer);
    const persistor = persistStore(store);
    return { store, persistor };
};

export default configureStore;
