import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import {
    postCardRequest,
    postCardSuccess,
    postCardFailure,
    getCardRequest,
    getCardSuccess,
    getCardFailure,
    profileShowWarning,
    profileHideWarning,
} from './actions';

const isLoading = handleActions(
    {
        [postCardRequest]: () => true,
        [postCardSuccess]: () => false,
        [postCardFailure]: () => false,
        [getCardRequest]: () => true,
        [getCardSuccess]: () => false,
        [getCardFailure]: () => false,
    },
    false,
);

const error = handleActions(
    {
        [postCardRequest]: () => null,
        [postCardSuccess]: () => null,
        [postCardFailure]: (_, action) => action.payload,
        [getCardRequest]: () => null,
        [getCardSuccess]: () => null,
        [getCardFailure]: (_, action) => action.payload,
    },
    null,
);

const hasCard = handleActions(
    {
        [postCardSuccess]: () => true,
        [postCardFailure]: () => false,
        [getCardSuccess]: () => true,
        [getCardFailure]: () => false,
    },
    false,
);

const cardNumber = handleActions(
    {
        [getCardSuccess]: (_, action) => action.payload.cardNumber,
    },
    '',
);

const expiryDate = handleActions(
    {
        [getCardSuccess]: (_, action) => action.payload.expiryDate,
    },
    '',
);

const cvc = handleActions(
    {
        [getCardSuccess]: (_, action) => action.payload.cvc,
    },
    '',
);

const cardName = handleActions(
    {
        [getCardSuccess]: (_, action) => action.payload.cardName,
    },
    '',
);

const cardAdded = handleActions(
    {
        [postCardSuccess]: () => true,
        [postCardFailure]: () => false,
    },
    false,
);

const warning = handleActions(
    {
        [profileShowWarning]: () => true,
        [profileHideWarning]: () => false,
    },
    false,
);

export default combineReducers({
    isLoading,
    error,
    hasCard,
    cardNumber,
    cardName,
    expiryDate,
    cvc,
    cardAdded,
    warning,
});
