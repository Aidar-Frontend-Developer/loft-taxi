import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { getItems } from './components/services/localStorage';
import { postLoginSuccess } from './modules/Auth/actions';

import createStore from './modules/store';
import Router from './components/Router';

const store = createStore();

const userInfo = getItems('user');
if (userInfo !== null) {
    store.dispatch(postLoginSuccess({ success: true, token: userInfo.token }));
}

const App = () => (
    <BrowserRouter>
        <Provider store={store}>
            <Router />
        </Provider>
    </BrowserRouter>
);

export default App;
