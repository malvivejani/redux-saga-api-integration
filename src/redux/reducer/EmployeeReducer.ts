// import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../types/loginTypes";

import { EDIT_EMPLOYEE_FAILURE, EDIT_EMPLOYEE_REQUEST, EDIT_EMPLOYEE_SUCCESS, EMPLOYEE_FAILURE, EMPLOYEE_REQUEST, EMPLOYEE_SUCCESS } from "../types/employeeTypes";

const initialState = {
    loading: false,
    error: '',
    employee: [],
};


export const employeeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case EMPLOYEE_REQUEST: {
            return {
                ...state,
                loading: true,
            }
        }
        case EMPLOYEE_SUCCESS: {
            return {
                ...state,
                loading: false,
                employee: action.payload,
                error: '',
            }
        }
        case EMPLOYEE_FAILURE: {
            return {
                ...state,
                loading: false,
                employee: [],
                error: action.payload
            }
        }
        case EDIT_EMPLOYEE_REQUEST: {
            return {
                ...state,
                loading: true,
            }
        }
        case EDIT_EMPLOYEE_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: ''
            }
        }
        case EDIT_EMPLOYEE_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }

        default: return state
    }
}