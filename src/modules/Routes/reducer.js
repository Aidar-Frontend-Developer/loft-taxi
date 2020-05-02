import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { fetchRouteRequest, fetchRouteSuccess, fetchRouteFailure, clearRoute } from './actions';

const isLoading = handleActions(
    {
        [fetchRouteRequest]: () => true,
        [fetchRouteSuccess]: () => false,
        [fetchRouteFailure]: () => false,
    },
    false,
);

const error = handleActions(
    {
        [fetchRouteRequest]: () => null,
        [fetchRouteSuccess]: () => null,
        [fetchRouteFailure]: (_, action) => action.payload.error,
    },
    null,
);

const coords = handleActions(
    {
        [fetchRouteSuccess]: (_, action) => action.payload,
        [clearRoute]: () => [],
    },
    [],
);

export default combineReducers({
    isLoading,
    error,
    coords,
});
