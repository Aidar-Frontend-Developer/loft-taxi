import { fork } from 'redux-saga/effects';

import { authorizationSaga, registrationSaga } from './Auth/sagas';
import { addressListSaga } from './Addresses/sagas';
import { routeSaga } from './Routes/sagas';
import { postPaymentSaga, fetchPaymentSaga } from './Profile/sagas';

export default function* rootSaga() {
    yield fork(registrationSaga);
    yield fork(authorizationSaga);
    yield fork(addressListSaga);
    yield fork(routeSaga);
    yield fork(postPaymentSaga);
    yield fork(fetchPaymentSaga);
}
