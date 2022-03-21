import { all, call, takeLatest, put } from "@redux-saga/core/effects";
import axios from "axios";
import { employeeFailure, employeeSuccess } from "../actions/employeeAction";
import { EMPLOYEE_REQUEST } from "../types/employeeTypes";

const employeeAPICall = () => axios.get('/employee');

function* fetchEmployees(action: any): any {
    try {
        const response = yield call(employeeAPICall);
        console.log("employee response", response)
        if (response?.data?.statusCode === 200) {
            yield put(employeeSuccess(response?.data));
            action.onSuccess();
        }
    } catch (e: any) {
        yield put(employeeFailure(e?.message));
    }
};

export function* employeeSaga() {
    yield all([takeLatest(EMPLOYEE_REQUEST, fetchEmployees)])
}