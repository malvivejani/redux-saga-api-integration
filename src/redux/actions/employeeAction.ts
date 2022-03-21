import { EMPLOYEE_FAILURE, EMPLOYEE_REQUEST, EMPLOYEE_SUCCESS } from "../types/employeeTypes"

export const employeeRequest = (credentials: any, onLoginSuccess: any) => {
    return {
        type: EMPLOYEE_REQUEST,
        payload: credentials,
        onSuccess: onLoginSuccess
    }
}

export const employeeSuccess = (employee: any) => {
    return {
        type: EMPLOYEE_SUCCESS,
        payload: employee,
    }
}

export const employeeFailure = (error: any) => {
    return {
        type: EMPLOYEE_FAILURE,
        payload: error,
    }
}