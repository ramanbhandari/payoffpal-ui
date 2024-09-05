import { all, fork } from 'redux-saga/effects'
import { loginRequestSaga } from './screens/login/saga'
import { registerRequestSaga } from './screens/register/saga';

export default function* rootSaga() {
    yield all([
        fork(loginRequestSaga),
        fork(registerRequestSaga),
    ]);
}