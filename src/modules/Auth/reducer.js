import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import {
    postLoginRequest,
    postLoginSuccess,
    postLoginFailure,
    postRegisterRequest,
    postRegisterSuccess,
    postRegisterFailure,
    postLogOut,
    resetErrors,
} from './actions';

const isLoading = handleActions(
    {
        [postLoginRequest]: () => true,
        [postRegisterRequest]: () => true,
        [postLoginSuccess]: () => false,
        [postRegisterSuccess]: () => false,
        [postLoginFailure]: () => false,
        [postRegisterFailure]: () => false,
        [postLogOut]: () => false,
    },
    false,
);

const isAuthorized = handleActions(
    {
        [postLoginSuccess]: (_, action) => action.payload.success,
        [postRegisterSuccess]: (_, action) => action.payload.success,
        [postLoginFailure]: (_, action) => action.payload.success,
        [postRegisterFailure]: (_, action) => action.payload.success,
        [postLogOut]: () => false,
    },
    false,
);

const error = handleActions(
    {
        [postLoginRequest]: () => null,
        [postRegisterRequest]: () => null,
        [postLoginSuccess]: () => null,
        [postRegisterSuccess]: () => null,
        [postLoginFailure]: (_, action) => action.payload.error,
        [postRegisterFailure]: (_, action) => action.payload.error,
        [postLogOut]: () => null,
        [resetErrors]: () => null,
    },
    null,
);

const token = handleActions(
    {
        [postLoginSuccess]: (_, action) => action.payload.token,
        [postRegisterSuccess]: (_, action) => action.payload.token,
        [postLoginFailure]: () => null,
        [postRegisterFailure]: () => null,
        [postLogOut]: () => null,
    },
    null,
);

export default combineReducers({
    isLoading,
    isAuthorized,
    error,
    token,
});
