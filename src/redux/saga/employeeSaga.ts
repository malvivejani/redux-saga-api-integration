import axios from "axios";
import { all, call, takeLatest, put } from "@redux-saga/core/effects";
import { editEmployeeFailure, editEmployeeSuccess, employeeFailure, employeeSuccess } from "../actions/employeeAction";
import { ADD_EMPLOYEE_REQUEST, EDIT_EMPLOYEE_REQUEST, EMPLOYEE_REQUEST } from "../types/employeeTypes";

const employeeAPICall = () => axios.get('/employee');
const editEmployee = (id: any, body: any) => axios.patch(`/employee/${id}`, body);
const addEmployeeAPI = (body: any) => axios.post(`/employee/`, body);

function* fetchEmployees(action: any): any {
    try {
        const response = yield call(employeeAPICall);
        if (response?.data?.statusCode === 200) {
            yield put(employeeSuccess(response?.data?.data));
        }
    } catch (e: any) {
        yield put(employeeFailure(e?.message));
    }
};

function* editEmployees(action: any): any {
    try {
        const response = yield call(editEmployee, action?.payload?.id, action?.payload?.employee);
        console.log("edit employee response", response)
        if (response?.data?.statusCode === 200) {
            yield put(editEmployeeSuccess(response?.data?.data));
            action.onSuccess();
        }
    } catch (e: any) {
        yield put(editEmployeeFailure(e?.message));
        action.onFailure();
    }
};

function* addEmployee(action: any): any {
    try {
        const response = yield call(addEmployeeAPI, action?.payload);
        console.log("edit employee response", response)
        if (response?.data?.statusCode === 200) {
            yield put(editEmployeeSuccess(response?.data?.data));
            action.onSuccess();
        }
    } catch (e: any) {
        yield put(editEmployeeFailure(e?.message));
        action.onFailure();
    }
};
export function* employeeSaga() {
    yield all([takeLatest(EMPLOYEE_REQUEST, fetchEmployees),
    takeLatest(EDIT_EMPLOYEE_REQUEST, editEmployees),
    takeLatest(ADD_EMPLOYEE_REQUEST, addEmployee),
    ])
}
