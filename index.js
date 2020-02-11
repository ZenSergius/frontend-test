import React from 'react';
import ReactDOM from 'react-dom';

import createStore from './src/store/createStore';
import { Provider } from 'react-redux';

import App from './src/App';
import './src/css/main.scss';

const storeWrapper = createStore();

ReactDOM.render((
    <Provider store={storeWrapper.store}>
        <App />
    </Provider>)
,document.getElementById('app'));
