import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import auth from './Auth/reducer';
import card from './Profile/reducer';

import { authMiddleware } from './Auth/middleware';
import { profileMiddleware } from './Profile/middleware';

const rootReducers = combineReducers({
    auth,
    card,
});

const store = createStore(
    rootReducers,
    compose(
        applyMiddleware(authMiddleware),
        applyMiddleware(profileMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : noop => noop,
    ),
);

export default store;
