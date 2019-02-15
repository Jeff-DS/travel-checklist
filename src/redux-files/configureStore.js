import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
//
import ui from 'reducers/ui';
import items from 'reducers/items';
import categories from 'reducers/categories';
import tripTypes from 'reducers/tripTypes';

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet
};

const configureStore = () => {
    const rootReducer = combineReducers({
        items,
        categories,
        tripTypes,
        ui
    });
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store = createStore(
        persistedReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    const persistor = persistStore(store);
    return { store, persistor };
};

export default configureStore;
