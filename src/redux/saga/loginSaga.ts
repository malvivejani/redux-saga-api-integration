import axios from "axios"
import { all, call, put, takeLatest } from "redux-saga/effects"
import { loginFailure, loginSuccess } from "../actions/loginActions";
import { LOGIN_REQUEST } from "../types/loginTypes";

const loginAPICall = (body: any) => axios.post('/auth/login', body);

function* fetchLoginRequest(action: any): any {

    try {
        const response = yield call(loginAPICall, action.payload);
        console.log("login response", response)
        if (response?.data?.statusCode === 200) {
            yield put(loginSuccess(response?.data));
            localStorage.setItem('accessToken', response?.data?.data?.accessToken);
            action.onSuccess();
        }
    } catch (e: any) {
        yield put(loginFailure(e?.message));
    }

};

export function* loginSaga() {
    yield all([takeLatest(LOGIN_REQUEST, fetchLoginRequest)])
}