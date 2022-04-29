import { ADD_EMPLOYEE_FAILURE, ADD_EMPLOYEE_REQUEST, ADD_EMPLOYEE_SUCCESS, EDIT_EMPLOYEE_FAILURE, EDIT_EMPLOYEE_REQUEST, EDIT_EMPLOYEE_SUCCESS, EMPLOYEE_FAILURE, EMPLOYEE_REQUEST, EMPLOYEE_SUCCESS } from "../types/employeeTypes"

export const employeeRequest = () => {
    return {
        type: EMPLOYEE_REQUEST,
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

export const editEmployeeRequest = (id: any, employee: any, onSuccess: any, onFailure: any) => {
    return {
        type: EDIT_EMPLOYEE_REQUEST,
        payload: { id, employee },
        onSuccess: onSuccess,
        onFailure: onFailure
    }
}

export const editEmployeeSuccess = (employee: any) => {
    return {
        type: EDIT_EMPLOYEE_SUCCESS,
        payload: employee,
    }
}

export const editEmployeeFailure = (error: any) => {
    return {
        type: EDIT_EMPLOYEE_FAILURE,
        payload: error,
    }
}

export const addEmployeeRequest = (employee: any, onSuccess: any, onFailure: any) => {
    return {
        type: ADD_EMPLOYEE_REQUEST,
        payload: employee,
        onSuccess: onSuccess,
        onFailure: onFailure
    }
}

export const addEmployeeSuccess = (employee: any) => {
    return {
        type: ADD_EMPLOYEE_SUCCESS,
        payload: employee,
    }
}

export const addEmployeeFailure = (error: any) => {
    return {
        type: ADD_EMPLOYEE_FAILURE,
        payload: error,
    }
}



