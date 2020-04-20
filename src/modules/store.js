import { createStore, compose, applyMiddleware, combineReducers } from 'redux';

import { authReducer as auth } from '../modules/Auth/reducer';
import { cardReducer as card } from '../modules/Profile/reducer';

import { authMiddleware } from '../modules/Auth/middleware';
import { profileMiddleware } from '../modules/Profile/middleware';

export const initialState = {
    auth: {
        isLoading: false,
        isAuthorized: false,
        error: '',
        token: '',
    },

    card: {
        isLoading: false,
        hasCard: false,
        cardNumber: '',
        expiryDate: '',
        cardName: '',
        cvc: '',
    },
};

const reducers = combineReducers({
    auth,
    card,
});

const store = createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(authMiddleware),
        applyMiddleware(profileMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : noop => noop,
    ),
);

export default store;
