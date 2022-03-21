import { all, fork } from 'redux-saga/effects'
import { employeeSaga } from './employeeSaga'
import { loginSaga } from './loginSaga'

export default function* rootSaga() {
    yield all([fork(loginSaga), fork(employeeSaga)])
}
