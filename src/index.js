import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// this app
import App from './app';
import configureStore from './redux-files/configureStore';

const rootElement = document.getElementById('app');
const store = configureStore();
const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, rootElement);
