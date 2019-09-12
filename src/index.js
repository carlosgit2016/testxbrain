import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App.js';
//react-redux
import { Provider } from 'react-redux'
//redux
import { createStore } from 'redux';
// fe-test-master
import rootReducer from './redux/reducers/index';
//notistack
import { SnackbarProvider } from 'notistack';

const store = createStore(rootReducer);

ReactDOM.render(

    <Provider store={store}>
        <SnackbarProvider maxSnack={3}>
            <App />
        </SnackbarProvider>
    </Provider>
    , document.getElementById('root'));
