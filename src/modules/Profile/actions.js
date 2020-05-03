import { createAction } from 'redux-actions';

export const getCardRequest = createAction('GET_CARD_REQUEST');
export const getCardSuccess = createAction('GET_CARD_SUCCESS');
export const getCardFailure = createAction('GET_CARD_FAILURE');

export const postCardRequest = createAction('POST_CARD_REQUEST');
export const postCardSuccess = createAction('POST_CARD_SUCCESS');
export const postCardFailure = createAction('POST_CARD_FAILURE');

export const profileShowWarning = createAction('PROFILE_SHOW_WARNING');
export const profileHideWarning = createAction('PROFILE_HIDE_WARNING');
