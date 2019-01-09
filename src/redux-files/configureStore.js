import { createStore, combineReducers } from 'redux';
import ui from './reducers/ui';
import checklist from './reducers/checklist';

const configureStore = () => {
    const rootReducer = combineReducers({
        checklist,
        ui
    });
    const store = createStore(rootReducer);
    return store;
};

export default configureStore;
