import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { fetchAddressesRequest, fetchAddressesSuccess, fetchAddressesFailure } from './actions';

const isLoading = handleActions(
    {
        [fetchAddressesRequest]: () => true,
        [fetchAddressesSuccess]: () => false,
        [fetchAddressesFailure]: () => false,
    },
    false,
);

const error = handleActions(
    {
        [fetchAddressesRequest]: () => null,
        [fetchAddressesSuccess]: () => null,
        [fetchAddressesFailure]: (_, action) => action.payload.addresses.error,
    },
    null,
);

const address = handleActions(
    {
        [fetchAddressesSuccess]: (_, action) => action.payload.addresses,
    },
    null,
);

export default combineReducers({
    isLoading,
    error,
    address,
});
