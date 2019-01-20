import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// this app
import App from './app';
import configureStore from './redux-files/configureStore';

const rootElement = document.getElementById('app');
const { store, persistor } = configureStore();
const app = (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);

ReactDOM.render(app, rootElement);
