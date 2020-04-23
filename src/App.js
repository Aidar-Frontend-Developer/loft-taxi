import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './modules/store';
import Router from './components/Router';

const App = () => (
    <BrowserRouter>
        <Provider store={store}>
            <Router />
        </Provider>
    </BrowserRouter>
);

export default App;
