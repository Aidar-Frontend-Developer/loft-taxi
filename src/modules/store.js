import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import authReducer from './Auth/reducer';
import cardReducer from './Profile/reducer';
import addressesReducer from './Addresses/reducer';
import routeReducer from './Routes/reducer';

import rootSaga from './rootSaga';

const rootReducers = combineReducers({
    auth: authReducer,
    card: cardReducer,
    addresses: addressesReducer,
    route: routeReducer,
});

const sagaMiddleware = createSagaMiddleware();

const createAppStore = () => {
    const store = createStore(
        rootReducers,
        compose(
            applyMiddleware(sagaMiddleware),
            applyMiddleware(),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : noop => noop,
        ),
    );

    sagaMiddleware.run(rootSaga);

    return store;
};

export default createAppStore;
